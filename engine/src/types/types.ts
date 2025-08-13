import type { Cell, CellData } from './interfaces';

export type CellDataGridGroup = CellData[];

export type Grid<T> = T[][];
export type CellGrid = Grid<Cell>;
export type CellDataGrid = Grid<CellData>;

export type SudokuValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | null;
