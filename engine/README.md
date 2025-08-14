# SudokuApp Engine

This is the shared Sudoku logic module for SudokuApp, written in TypeScript. It provides comprehensive type definitions, interfaces, enumerations, and core logic that can be consumed by both API and UI modules.

---

## Table of Contents
1. [Detailed Description](#detailed-description)
2. [Scripts](#scripts)
3. [Type System](#type-system)
4. [Enumerations](#enumerations)
5. [Core Logic](#core-logic)
6. [CI/CD](#cicd)
7. [Tooling](#tooling)
8. [Testing](#testing)
9. [Code Quality](#code-quality)
10. [File Structure](#file-structure)
11. [Documentation Policy](#documentation-policy)

---

## Detailed Description

The Engine module serves as the foundation for all Sudoku-related operations across the application. It provides a comprehensive type system, enumerations for game states and difficulty levels, and core logic functions. This module is designed to be consumed by both the API and UI modules, ensuring consistency and type safety throughout the application.

### Current Features
- Comprehensive TypeScript type definitions for Sudoku data structures
- Difficulty enumeration system supporting six levels
- Core Sudoku validation logic (placeholder implementation)
- Reusable interfaces for cell data, grids, and validation results
- Export system for easy consumption by other modules

## Scripts

- `lint`: Run ESLint for code quality checks
- `format`: Run Prettier for consistent code formatting
- `test`: Run Vitest test suite once
- `test:watch`: Run Vitest in watch mode for development
- `verify`: Run lint, format, and test in sequence
- `build`: Compile TypeScript to JavaScript
- `check-configs`: Validate TypeScript configurations

## Type System

### Core Types (`src/types/types.ts`)

- **`SudokuValue`**: Union type for valid Sudoku cell values (1-9 or null for empty cells)
- **`SudokuValueGrid`**: 9x9 2D array of SudokuValue representing a complete puzzle grid
- **`Grid<T>`**: Generic 2D array type for flexible grid structures
- **`CellGrid`**: 2D array of Cell objects with rich metadata
- **`CellDataGrid`**: 2D array of CellData objects for lightweight operations
- **`CellDataGridGroup`**: Array of CellData objects for grouped operations

### Core Interfaces (`src/types/interfaces.ts`)

- **`CellValue`**: Contains a single Sudoku value with type safety
- **`CellLocation`**: Represents cell position with row, column, and string location
- **`CellData`**: Combines location and value information for data operations
- **`Cell`**: Extends CellData with notes array and editability flags for UI operations
- **`ValidationResult`**: Contains validation status and error location arrays

These types enable type-safe Sudoku operations across the entire application, ensuring data consistency and preventing runtime errors.

## Enumerations

### Difficulty Levels (`src/types/enums.ts`)

The engine defines six difficulty levels for Sudoku puzzles:

- **`EASY`**: 36-49 given values, basic solving techniques
- **`MEDIUM`**: 32-35 given values, intermediate techniques  
- **`HARD`**: 28-31 given values, advanced techniques
- **`EXPERT`**: 25-27 given values, expert-level techniques
- **`MASTER`**: 22-24 given values, master-level techniques
- **`EXTREME`**: 17-21 given values, extreme techniques requiring deep logical inference

These levels follow established Sudoku difficulty standards based on both the number of given values and the solving techniques required.

## Core Logic

### Sudoku Validation (`src/sudoku.ts`)

- **`isValidSudoku(board: number[][]): boolean`** - Validates a Sudoku board configuration
- Currently contains placeholder implementation
- Designed to be extended with comprehensive validation logic
- Supports standard 9x9 Sudoku grid validation

## CI/CD

- This module has its own CI/CD workflow file (`.github/workflows/ci.yml`)
- Only Engine-specific checks run when Engine changes are made
- All modules must pass lint, format, build, and test checks before merging

## Tooling

- **ESLint**: Enforces code style and best practices with modern flat config
- **Prettier**: Ensures consistent formatting across all files
- **Vitest**: Unit testing framework for logic validation
- **TypeScript**: Strict type checking with modern ES module support
- **Modern Configuration**: Uses latest config formats for all tools

## Testing

- Uses Vitest for unit and logic tests
- Test coverage for core validation functions
- Type definition testing to ensure interface compliance
- Example test: `src/sudoku.test.ts`
- Test files placed next to source files for easy maintenance

## Code Quality

- ESLint configured with TypeScript and Node.js best practices
- Prettier enforces consistent formatting
- Strict TypeScript configuration with comprehensive type checking
- All code type-checked and linted before merging
- Modern ES module configuration

## File Structure

```
engine/
├─ src/
│    ├─ index.ts                     # Main export file for module consumption
│    ├─ sudoku.ts                    # Core Sudoku logic and validation
│    ├─ sudoku.test.ts               # Core logic tests
│    ├─ types/
│    │    ├─ types.ts                # Core type definitions
│    │    ├─ interfaces.ts           # Interface definitions
│    │    └─ enums.ts                # Enumeration definitions
│    └─ test/
│         ├─ testSetup.ts            # Test configuration
│         └─ vitest.d.ts             # Vitest type definitions
├─ package.json                      # Dependencies and scripts
├─ tsconfig.json                     # TypeScript configuration
├─ vitest.config.ts                  # Vitest test configuration
├─ eslint.config.js                  # ESLint configuration (flat config)
├─ prettier.config.js                # Prettier configuration
└─ README.md                         # This file
```

## Documentation Policy

- These docs are kept up to date to reflect the current, working state and standards of the project
- Documentation is updated automatically whenever new types, interfaces, or functionality is added
- All new modules must follow these standards for consistency across the monorepo
- Type definitions and interfaces are thoroughly documented to aid development across modules
