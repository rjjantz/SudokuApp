// Test setup file for API module
import type { CellData, CellDataGrid, CellDataGridGroup } from 'sudoku-engine';

expect.extend({
    toEqualCellDataArrayUnordered(
        received: CellDataGridGroup,
        expected: CellDataGridGroup,
    ) {
        const serialize = ({ location, value }: CellData) =>
            `Location: ${location} Value: ${value}`;
        const format = (arr: CellDataGridGroup) => arr.map(serialize).sort();

        const receivedSorted = format(received);
        const expectedSorted = format(expected);

        const pass =
            received.length === expected.length &&
            receivedSorted.every((val, idx) => val === expectedSorted[idx]);

        const message = () =>
            pass
                ? 'Expected arrays not to match'
                : [
                      'Expected: ' + expectedSorted.join(' | '),
                      'Received: ' + receivedSorted.join(' | '),
                  ].join('\n');

        return { pass, message };
    },

    toEqualCellDataGrid(received: CellDataGrid, expected: CellDataGrid) {
        const serialize = ({ row, col, value }: CellData) =>
            `Row: ${row} Col: ${col} Value: ${value}`;
        const format = (grid: CellDataGrid) =>
            grid
                .map((row) => row.map(serialize))
                .flat()
                .sort();

        const receivedSorted = format(received);
        const expectedSorted = format(expected);

        const pass = JSON.stringify(received) === JSON.stringify(expected);

        const message = () =>
            pass
                ? 'Expected grids not to match'
                : [
                      'Expected: ' + expectedSorted.join(' | '),
                      'Received: ' + receivedSorted.join(' | '),
                  ].join('\n');

        return { pass, message };
    },
});
