import { describe, it, expect } from 'vitest';
import { isValidSudoku } from './sudoku';

describe('isValidSudoku', () => {
  it('returns true for placeholder', () => {
    expect(isValidSudoku([[0]])).toBe(true);
  });
});
