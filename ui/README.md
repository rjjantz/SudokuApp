# SudokuApp UI

This is the UI module for SudokuApp, built with Vite, React, and TypeScript. It provides a modern frontend interface for interacting with Sudoku puzzles and communicating with the API backend.

---

## Table of Contents

1. [Detailed Description](#detailed-description)
2. [Scripts](#scripts)
3. [Technology Stack](#technology-stack)
4. [CI/CD](#cicd)
5. [Tooling](#tooling)
6. [Testing](#testing)
7. [Code Quality](#code-quality)
8. [File Structure](#file-structure)
9. [Documentation Policy](#documentation-policy)

---

## Detailed Description

The UI module is a modern React application built with Vite for fast development and optimal production builds. It serves as the frontend interface for the SudokuApp, allowing users to interact with Sudoku puzzles, request puzzles of different difficulties, and potentially solve puzzles interactively. The module is designed to communicate with the API module for puzzle data and utilizes shared types from the engine module.

### Current Features

- React 18 with modern hooks and functional components
- Vite for fast development server and optimized builds
- TypeScript for type safety and better developer experience
- Modern tooling setup with ESLint, Prettier, and Vitest
- Prepared for Storybook component development
- Integration points ready for API communication

## Scripts

- `dev`: Start Vite development server with hot module replacement
- `lint`: Run ESLint for code quality checks
- `format`: Run Prettier for consistent code formatting
- `test`: Run Vitest test suite once
- `test:watch`: Run Vitest in watch mode for development
- `verify`: Run lint, format, and test in sequence
- `build`: Build production-ready application with Vite and TypeScript
- `check-configs`: Validate TypeScript configurations

## Technology Stack

### Core Technologies

- **React 18**: Modern React with concurrent features and hooks
- **TypeScript**: Strict type checking for enhanced developer experience
- **Vite**: Fast build tool with HMR and optimized bundling

### Development Tools

- **ESLint**: Code quality and consistency enforcement
- **Prettier**: Automatic code formatting
- **Vitest**: Fast unit testing framework
- **React Testing Library**: Component testing utilities

### Future Integrations

- **Storybook**: Component development and documentation (planned)
- **Engine Module**: Shared Sudoku types and interfaces
- **API Integration**: REST API communication for puzzle data

## CI/CD

- This module has its own CI/CD workflow file (`.github/workflows/ci.yml`)
- Only UI-specific checks run when UI changes are made
- All modules must pass lint, format, build, and test checks before merging
- Optimized build process for production deployment

## Tooling

- **ESLint**: Configured with React-specific rules and modern flat config
- **Prettier**: Ensures consistent formatting across all files
- **Vitest**: Lightning-fast unit testing with React Testing Library integration
- **TypeScript**: Strict configuration optimized for React development
- **Vite**: Modern build tool with excellent TypeScript and React support

## Testing

- Uses Vitest for fast unit and component tests
- React Testing Library for component testing best practices
- User-centric testing approach focusing on behavior over implementation
- Test files placed next to source files for easy maintenance
- Example test setup in `src/App.test.tsx`

## Code Quality

- ESLint configured with React, TypeScript, and Testing Library best practices
- Prettier enforces consistent formatting across JSX and TypeScript files
- Strict TypeScript configuration with React-specific settings
- All code type-checked and linted before merging
- Modern ES module configuration with JSX support

## File Structure

```
ui/
├─ src/
│    ├─ main.tsx                     # Application entry point
│    ├─ App.tsx                      # Root React component
│    ├─ App.test.tsx                 # App component tests
│    └─ test/
│         ├─ setupTests.ts           # React Testing Library setup
│         ├─ testSetup.ts            # General test configuration
│         └─ vitest.d.ts             # Vitest type definitions
├─ public/                           # Static assets
├─ package.json                      # Dependencies and scripts
├─ tsconfig.json                     # Main TypeScript configuration
├─ tsconfig.app.json                 # App-specific TypeScript config
├─ tsconfig.node.json                # Node.js TypeScript config
├─ vite.config.ts                    # Vite configuration
├─ vitest.config.ts                  # Vitest test configuration
├─ eslint.config.js                  # ESLint configuration (flat config)
├─ prettier.config.js                # Prettier configuration
├─ index.html                        # HTML template
└─ README.md                         # This file
```

## Documentation Policy

- These docs are kept up to date to reflect the current, working state and standards of the project
- Documentation is updated automatically whenever new components, features, or functionality is added
- All new modules must follow these standards for consistency across the monorepo
- Component documentation will be maintained as the UI grows in complexity
