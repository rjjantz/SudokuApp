import { describe, it, expect, beforeEach } from 'vitest';
import { GridService } from './gridService';
import { Difficulty } from 'sudoku-engine/src/types/enums';

describe('GridService', () => {
    let gridService: GridService;

    beforeEach(() => {
        gridService = new GridService();
    });

    describe('getRandomGrid', () => {
        it('should return a random easy grid', () => {
            const grid = gridService.getRandomGrid(Difficulty.EASY);

            expect(grid).toBeDefined();
            expect(Array.isArray(grid)).toBe(true);
            expect(grid).toHaveLength(9);
            expect(grid[0]).toHaveLength(9);
        });

        it('should return a random medium grid', () => {
            const grid = gridService.getRandomGrid(Difficulty.MEDIUM);

            expect(grid).toBeDefined();
            expect(Array.isArray(grid)).toBe(true);
            expect(grid).toHaveLength(9);
            expect(grid[0]).toHaveLength(9);
        });

        it('should return a random hard grid', () => {
            const grid = gridService.getRandomGrid(Difficulty.HARD);

            expect(grid).toBeDefined();
            expect(Array.isArray(grid)).toBe(true);
            expect(grid).toHaveLength(9);
            expect(grid[0]).toHaveLength(9);
        });

        it('should return different grids on multiple calls (eventually)', () => {
            const grids = new Set<string>();
            const maxAttempts = 50;

            // Try multiple times to get different grids
            for (let i = 0; i < maxAttempts; i++) {
                const grid = gridService.getRandomGrid(Difficulty.EASY);
                grids.add(JSON.stringify(grid));
            }

            // We should get at least 2 different grids in 50 attempts
            expect(grids.size).toBeGreaterThan(1);
        });

        it('should throw error for invalid difficulty', () => {
            expect(() => {
                gridService.getRandomGrid('invalid' as Difficulty);
            }).toThrow('Unsupported difficulty level: invalid');
        });

        it('should return valid sudoku grid structure', () => {
            const grid = gridService.getRandomGrid(Difficulty.EASY);

            // Check grid structure
            expect(grid).toHaveLength(9);
            grid.forEach((row) => {
                expect(row).toHaveLength(9);
                row.forEach((cell) => {
                    expect(
                        cell === null ||
                            (typeof cell === 'number' &&
                                cell >= 1 &&
                                cell <= 9),
                    ).toBe(true);
                });
            });
        });
    });
});
