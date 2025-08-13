


# SudokuApp Monorepo

SudokuApp is a monorepo for a Sudoku application, containing:
- **UI**: Modern React + Vite + TypeScript frontend
- **API**: Node.js + Express backend
- **Engine**: Shared Sudoku logic

---

## Table of Contents
1. [Detailed Description](#detailed-description)
2. [How to Setup the Monorepo](#how-to-setup-the-monorepo)
3. [Module Interactions](#module-interactions)
4. [Scripts](#scripts)
5. [CI/CD](#cicd)
6. [Tooling](#tooling)
7. [Testing](#testing)
8. [Code Quality](#code-quality)
9. [File Structure](#file-structure)
10. [Development Workflow](#development-workflow)
11. [How to Setup a New Module](#how-to-setup-a-new-module)

---

## Detailed Description
SudokuApp is a modular monorepo designed for scalable Sudoku development. It includes a modern React UI, a Node.js API, and a shared engine for Sudoku logic. Each module is independently developed, tested, and deployed, with strict standards for code quality, documentation, and automation. All documentation and scripts are kept up to date automatically.

## How to Setup the Monorepo
1. Clone the repository.
2. Run `npm install` at the root to install dependencies for all modules.
3. Use the scripts in each module for development, linting, formatting, testing, and building.
4. See each module's README for specific setup instructions.

## Module Interactions
- **UI** communicates with **API** for puzzle generation, solving, and user actions.
- **API** uses **engine** for Sudoku logic and may connect to a database.
- **Engine** is reusable by both UI and API.

## Scripts
Root-level scripts orchestrate linting, formatting, building, testing, and config checks across all modules:
- `lint`: Run ESLint in all modules
- `format`: Run Prettier in all modules
- `build`: Build all modules
- `verify`: Run lint, format, and test in all modules
- `check-configs`: Validate TypeScript configs in all modules
Each module also has its own scripts for these tasks (see module README).

## CI/CD
- Each module has its own CI/CD workflow file (`.github/workflows/ci.yml`).
- Only the affected module's workflow runs when changes are made.
- All modules must pass lint, format, build, and test checks before merging.

## Tooling
- ESLint: Enforces code style and best practices
- Prettier: Ensures consistent formatting
- Vitest: Unit/integration testing framework
- Jest: Additional testing support (if needed)
- Storybook: UI component development (UI module only)

## Testing
- All modules use Vitest for unit/integration tests
- UI uses React Testing Library for component tests
- Example tests are provided in each module

## Code Quality
- ESLint and Prettier are configured for consistent code style
- All code is type-checked and linted before merging
- Strict standards for test coverage and code review

## File Structure
```
SudokuApp/
├─ api/
├─ engine/
├─ ui/
├─ package.json
├─ README.md
├─ NOTES.md
├─ ...other root files
```
Each module contains its own source, config, and documentation files. See module README for details.

## Development Workflow
- All documentation is kept up to date and reflects the current, working state and standards.
- Only successful steps/configurations are recorded.
- README.md files are updated automatically whenever new files, features, or sections are added.
- See NOTES.md for setup details and decisions.

## How to Setup a New Module
To add a new module to the monorepo, follow these requirements for each section:

- **Title**: Name of the module.
- **Detailed Description**: Explain the module's purpose, features, and integration points. Update with every new feature or change.
- **Table of Contents**: Provide links to all required sections and any additional ones.
- **Scripts**: List and describe all npm scripts for development, linting, formatting, testing, building, and config checks.
- **CI/CD**: Describe the module's CI/CD workflow and requirements.
- **Tooling**: List all required tools (ESLint, Prettier, Vitest, Jest, Storybook if UI).
- **Testing**: Explain the testing approach, frameworks, and provide example tests.
- **Code Quality**: Document linting, formatting, type-checking, and review standards.
- **File Structure**: Show the module's directory and file layout, updated as new files/features are added.
- **Documentation Policy**: State that docs are always kept up to date and follow the monorepo standard.
- **Any Additional Sections**: Add as needed for features, integrations, or special requirements.

**File Structure Template:**
```
new-module/
├─ src/
│    ├─ Feature.ts[x]
│    ├─ Feature.test.ts[x]
│    ├─ Feature.stories.ts[x]   # if using Storybook
│    ├─ Feature.module.css      # if using CSS modules
│    └─ test/
│         ├─ testSetup.ts
│         └─ vitest.d.ts
├─ package.json
├─ tsconfig.json
├─ vitest.config.ts
├─ .eslintrc.json
├─ .prettierrc
├─ README.md
```
Test files, storybook files, and CSS modules should be placed next to their related source files in src. The src/test folder is only for test setup/config files and type definitions.

---

This README is updated automatically after every significant change to reflect the current state and standards of the monorepo.
