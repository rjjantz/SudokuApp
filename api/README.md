# SudokuApp API

This is the API module for SudokuApp, built with Node.js, Express, and TypeScript. It provides REST endpoints for retrieving Sudoku puzzles of varying difficulties.

---

## Table of Contents

1. [Detailed Description](#detailed-description)
2. [Scripts](#scripts)
3. [API Endpoints](#api-endpoints)
4. [Services](#services)
5. [Data Management](#data-management)
6. [CI/CD](#cicd)
7. [Tooling](#tooling)
8. [Testing](#testing)
9. [Code Quality](#code-quality)
10. [File Structure](#file-structure)
11. [Documentation Policy](#documentation-policy)

---

## Detailed Description

The API module is an Express.js server that provides REST endpoints for Sudoku puzzle retrieval. It integrates with the engine module for type definitions and includes a service layer for puzzle management. The API serves validated Sudoku puzzles from curated collections organized by difficulty level.

### Current Features

- Express.js REST API server
- Grid service for puzzle management
- Support for Easy, Medium, and Hard difficulty levels
- Comprehensive error handling and validation
- Type-safe integration with engine module

## Scripts

- `dev`: Start API server with ts-node and hot reload
- `lint`: Run ESLint for code quality checks
- `format`: Run Prettier for consistent code formatting
- `test`: Run Vitest test suite once
- `test:watch`: Run Vitest in watch mode for development
- `verify`: Run lint, format, and test in sequence
- `build`: Compile TypeScript to JavaScript
- `check-configs`: Validate TypeScript configurations

## API Endpoints

### GET /

- **Description**: Health check endpoint
- **Response**: Simple text confirmation that the API is running

### GET /api/grid/:difficulty

- **Description**: Retrieve a random Sudoku grid of specified difficulty
- **Parameters**:
    - `difficulty` (path): One of 'easy', 'medium', 'hard'
- **Response**:
    ```json
    {
      "success": true,
      "difficulty": "easy",
      "grid": [[1, 2, null, ...], ...]
    }
    ```
- **Error Responses**:
    - 400: Invalid difficulty level
    - 500: Internal server error

## Services

### GridService

- **Location**: `src/services/gridService.ts`
- **Purpose**: Manages Sudoku puzzle retrieval and selection
- **Methods**:
    - `getRandomGrid(difficulty: Difficulty): SudokuValueGrid` - Returns a random puzzle of specified difficulty
- **Features**:
    - Validates difficulty parameters
    - Handles empty grid collections
    - Provides random selection from available puzzles

## Data Management

### Grid Collections

- **Easy Grids**: 20 validated puzzles with 36-49 given values (`src/data/grids/easyGrids.ts`)
- **Medium Grids**: Collection of intermediate difficulty puzzles (`src/data/grids/mediumGrids.ts`)
- **Hard Grids**: Collection of advanced difficulty puzzles (`src/data/grids/hardGrids.ts`)
- **Type Safety**: All grids use `SudokuValueGrid` type from engine module
- **Validation**: Puzzles sourced from established Sudoku databases

## CI/CD

- This module has its own CI/CD workflow file (`.github/workflows/ci.yml`)
- Only API-specific checks run when API changes are made
- All modules must pass lint, format, build, and test checks before merging

## Tooling

- **ESLint**: Enforces code style and best practices with modern flat config
- **Prettier**: Ensures consistent formatting across all files
- **Vitest**: Unit/integration testing framework
- **TypeScript**: Strict type checking and modern ES module support
- **ts-node**: Development server with hot reload

## Testing

- Uses Vitest for unit and integration tests
- API endpoint testing with Supertest
- Service layer unit tests
- Example tests: `src/api.test.ts`, `src/services/gridService.test.ts`
- Test files placed next to source files for easy maintenance

## Code Quality

- ESLint configured with TypeScript and Node.js best practices
- Prettier enforces consistent formatting
- Strict TypeScript configuration with no-emit checks
- All code type-checked and linted before merging
- Modern ES module configuration

## File Structure

```
api/
├─ src/
│    ├─ index.ts                     # Express server and route definitions
│    ├─ api.test.ts                  # API endpoint tests
│    ├─ example.test.ts              # Example test file
│    ├─ data/
│    │    └─ grids/
│    │         ├─ easyGrids.ts       # Easy difficulty puzzle collection
│    │         ├─ mediumGrids.ts     # Medium difficulty puzzle collection
│    │         └─ hardGrids.ts       # Hard difficulty puzzle collection
│    ├─ services/
│    │    ├─ gridService.ts          # Grid management service
│    │    └─ gridService.test.ts     # Service layer tests
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
- Documentation is updated automatically whenever new features, endpoints, or functionality is added
- All new modules must follow these standards for consistency across the monorepo
