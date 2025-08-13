// Vitest type definitions only
import type { CellDataGrid, CellDataGridGroup } from '../types/types';
import type { ExpectStatic } from 'vitest';

declare global {
    const expect: ExpectStatic;
}

declare module 'vitest' {
    interface Assertion<_T = unknown> {
        toEqualCellDataArrayUnordered(expected: CellDataGridGroup): void;
        toEqualCellDataGrid(expected: CellDataGrid): void;
    }
}
