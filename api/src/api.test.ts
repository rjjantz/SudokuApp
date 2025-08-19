import { describe, it, expect, beforeAll } from 'vitest';
import request from 'supertest';
import express from 'express';
import type { Request, Response } from 'express';
import { Difficulty } from 'sudoku-engine/src/types/enums';
import type { SudokuValue } from 'sudoku-engine/src/types/types';
import { GridService } from './services/gridService';

// Create test app with same setup as main app
const createTestApp = () => {
    const app = express();
    const gridService = new GridService();

    app.use(express.json());

    app.get('/', (req: Request, res: Response) => {
        res.send('Sudoku API is running!');
    });

    // GET /api/grid/:difficulty - Get a random grid of specified difficulty
    app.get('/api/grid/:difficulty', (req: Request, res: Response) => {
        try {
            const { difficulty } = req.params;

            // Validate difficulty parameter
            if (!Object.values(Difficulty).includes(difficulty as Difficulty)) {
                return res.status(400).json({
                    error: 'Invalid difficulty level',
                    message: `Difficulty must be one of: ${Object.values(Difficulty).join(', ')}`,
                    received: difficulty,
                });
            }

            const difficultyLevel = difficulty as Difficulty;
            const grid = gridService.getRandomGrid(difficultyLevel);

            res.json({
                success: true,
                difficulty: difficultyLevel,
                grid: grid,
            });
        } catch (error) {
            console.error('Error getting grid:', error);
            res.status(500).json({
                error: 'Internal server error',
                message:
                    error instanceof Error
                        ? error.message
                        : 'Unknown error occurred',
            });
        }
    });

    return app;
};

describe('API Endpoints', () => {
    let app: express.Application;

    beforeAll(() => {
        app = createTestApp();
    });

    describe('GET /', () => {
        it('should return API status message', async () => {
            const response = await request(app).get('/').expect(200);

            expect(response.text).toBe('Sudoku API is running!');
        });
    });

    describe('GET /api/grid/:difficulty', () => {
        it('should return a random easy grid', async () => {
            const response = await request(app)
                .get('/api/grid/easy')
                .expect(200);

            expect(response.body).toMatchObject({
                success: true,
                difficulty: 'easy',
            });

            expect(response.body.grid).toBeDefined();
            expect(Array.isArray(response.body.grid)).toBe(true);
            expect(response.body.grid).toHaveLength(9);
            expect(response.body.grid[0]).toHaveLength(9);
        });

        it('should return a random medium grid', async () => {
            const response = await request(app)
                .get('/api/grid/medium')
                .expect(200);

            expect(response.body).toMatchObject({
                success: true,
                difficulty: 'medium',
            });

            expect(response.body.grid).toBeDefined();
            expect(Array.isArray(response.body.grid)).toBe(true);
            expect(response.body.grid).toHaveLength(9);
        });

        it('should return a random hard grid', async () => {
            const response = await request(app)
                .get('/api/grid/hard')
                .expect(200);

            expect(response.body).toMatchObject({
                success: true,
                difficulty: 'hard',
            });

            expect(response.body.grid).toBeDefined();
            expect(Array.isArray(response.body.grid)).toBe(true);
            expect(response.body.grid).toHaveLength(9);
        });

        it('should return 400 for invalid difficulty', async () => {
            const response = await request(app)
                .get('/api/grid/invalid')
                .expect(400);

            expect(response.body).toMatchObject({
                error: 'Invalid difficulty level',
                message:
                    'Difficulty must be one of: easy, medium, hard, expert, master, extreme',
                received: 'invalid',
            });
        });

        it('should return valid sudoku grid structure', async () => {
            const response = await request(app)
                .get('/api/grid/easy')
                .expect(200);

            const { grid } = response.body;

            expect(grid).toHaveLength(9);
            grid.forEach((row: SudokuValue[]) => {
                expect(row).toHaveLength(9);
                row.forEach((cell: SudokuValue) => {
                    expect(
                        cell === null ||
                            (typeof cell === 'number' &&
                                cell >= 1 &&
                                cell <= 9),
                    ).toBe(true);
                });
            });
        });

        it('should return different grids on multiple requests (eventually)', async () => {
            const grids = new Set<string>();
            const maxAttempts = 10;

            for (let i = 0; i < maxAttempts; i++) {
                const response = await request(app)
                    .get('/api/grid/easy')
                    .expect(200);

                grids.add(JSON.stringify(response.body.grid));
            }

            // We should get at least 2 different grids in 10 attempts
            expect(grids.size).toBeGreaterThan(1);
        });
    });
});
