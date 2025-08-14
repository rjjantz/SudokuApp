import type { SudokuValueGrid } from 'sudoku-engine/src/types/types';
import { Difficulty } from 'sudoku-engine/src/types/enums';
import { easyGrids } from '../data/grids/easyGrids';
import { mediumGrids } from '../data/grids/mediumGrids';
import { hardGrids } from '../data/grids/hardGrids';

export class GridService {
    /**
     * Get a random grid based on the specified difficulty level
     * @param difficulty The difficulty level (easy, medium, hard)
     * @returns A random SudokuValueGrid of the specified difficulty
     */
    public getRandomGrid(difficulty: Difficulty): SudokuValueGrid {
        let grids: SudokuValueGrid[];

        switch (difficulty) {
            case Difficulty.EASY:
                grids = easyGrids;
                break;
            case Difficulty.MEDIUM:
                grids = mediumGrids;
                break;
            case Difficulty.HARD:
                grids = hardGrids;
                break;
            default:
                throw new Error(`Unsupported difficulty level: ${difficulty}`);
        }

        if (grids.length === 0) {
            throw new Error(`No grids available for difficulty: ${difficulty}`);
        }

        const randomIndex = Math.floor(Math.random() * grids.length);
        return grids[randomIndex];
    }
}
