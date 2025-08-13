# SudokuApp UI

This is the UI module for SudokuApp, built with Vite, React, and TypeScript.

## Standards & Setup

- ESLint, Prettier, Vitest, Jest, and Storybook are installed and configured.
- Scripts:
    - `dev`: Start Vite dev server
    - `lint`: Run ESLint
    - `format`: Run Prettier
    - `test`: Run Vitest once
    - `test:watch`: Run Vitest in watch mode
    - `verify`: Run lint, format, and test in sequence
    - `build`: TypeScript and Vite build
    - `check-configs`: Validate TypeScript configs

## CI/CD

- This module has its own CI/CD workflow file (`.github/workflows/ci.yml`). Only UI checks run when UI changes are made.

## File Structure & Naming

- Test files, storybook files, and CSS modules are placed next to their related source files in src.
- The src/test folder is only for test setup/config files and type definitions.

## Documentation Policy

- These docs are kept up to date to reflect the current, working state and standards of the project.
- All new modules must follow these standards.
