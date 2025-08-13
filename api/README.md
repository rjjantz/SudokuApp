
# SudokuApp API

This is the API module for SudokuApp, built with Node.js, Express, and TypeScript.

## Standards & Setup
- ESLint, Prettier, Vitest, and Jest are installed and configured.
- Scripts:
	- `dev`: Start API server with ts-node
	- `lint`: Run ESLint
	- `format`: Run Prettier
	- `test`: Run Vitest once
	- `test:watch`: Run Vitest in watch mode
	- `verify`: Run lint, format, and test in sequence
	- `build`: TypeScript build
	- `check-configs`: Validate TypeScript configs

## CI/CD
- This module has its own CI/CD workflow file (`.github/workflows/ci.yml`). Only API checks run when API changes are made.

## File Structure & Naming
- Test files are placed next to their related source files in src.
- The src/test folder is only for test setup/config files and type definitions.

## Documentation Policy
- These docs are kept up to date to reflect the current, working state and standards of the project.
- All new modules must follow these standards.
