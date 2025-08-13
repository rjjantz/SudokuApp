// Vitest and React Testing Library type definitions only
import type { ExpectStatic } from 'vitest';
import type { CellDataGrid, CellDataGridGroup } from 'sudoku-engine';

declare global {
    const expect: ExpectStatic;
}

declare module 'vitest' {
    interface Assertion<_T = unknown> {
        toEqualCellDataArrayUnordered(expected: CellDataGridGroup): void;
        toEqualCellDataGrid(expected: CellDataGrid): void;
    }
}
