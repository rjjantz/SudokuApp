import type { SudokuValue } from './types';

export interface CellValue {
    value: SudokuValue;
}

export interface CellLocation {
    row: number;
    col: number;
    location: string;
}

export interface CellData extends CellLocation, CellValue {}

export interface Cell extends CellData {
    notes: SudokuValue[];
    isEditable: boolean;
}

export interface ValidationResult {
    valid: boolean;
    errors: CellLocation[];
}
