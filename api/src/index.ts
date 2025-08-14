import express from 'express';
import type { Request, Response } from 'express';
import { Difficulty } from 'sudoku-engine/src/types/enums';
import { GridService } from './services/gridService';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Services
const gridService = new GridService();

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

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
