# SudokuApp Engine

This is the shared Sudoku logic module for SudokuApp, written in TypeScript.

## Standards & Setup

- ESLint, Prettier, Vitest, and Jest are installed and configured.
- Scripts:
    - `lint`: Run ESLint
    - `format`: Run Prettier
    - `test`: Run Vitest once
    - `test:watch`: Run Vitest in watch mode
    - `verify`: Run lint, format, and test in sequence
    - `build`: TypeScript build
    - `check-configs`: Validate TypeScript configs

## Tooling

- ESLint: Enforces code style and best practices
- Prettier: Ensures consistent formatting
- Vitest: Unit testing framework
- Jest: Additional testing support (if needed)

## Current Status

- All setup scripts, linting, formatting, and tests have been verified to work with no errors.
- The Engine, API, and UI modules all pass their `verify` scripts, confirming code quality and test coverage.

## Testing

- Uses Vitest for unit tests
- Example test: `src/sudoku.test.ts`

## Code Quality

- ESLint and Prettier are configured for consistent code style
- All code is type-checked and linted before merging

## TypeScript

- Configured for Node.js and modern TypeScript
- Uses strict type-checking and extensionless imports

## CI/CD

- This module has its own CI/CD workflow file (`.github/workflows/ci.yml`). Only Engine checks run when Engine changes are made.

## File Structure & Naming

- Test files are placed next to their related source files in src.
- The src/test folder is only for test setup/config files and type definitions.

## Documentation Policy

- These docs are kept up to date to reflect the current, working state and standards of the project.
- All new modules must follow these standards.
