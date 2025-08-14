# Project Notes (SudokuApp)

This file is used to keep track of all decisions, pivots, and setup details for the SudokuApp monorepo. Whenever you start a new task, you can refer to NOTES.md to quickly get caught up on the project's current state and history.

---

## Initial Setup (August 13, 2025)
- Monorepo structure with three main folders:
  - `ui`: Vite + React + TypeScript + Vitest
  - `api`: Node.js + Express
  - `engine`: Shared logic for both UI and API
- Goal: Start simple, iterate and expand features over time
- UI and API are independent projects
- All major decisions and pivots will be recorded here

---

## Next Steps
- Engine module: Scaffold and integrate shared Sudoku logic for use by both API and UI.
- Continue documenting setup and decisions as features are added.

---

## Suggested File Structure

### UI Module
```
ui/
  ├─ src/
  │    ├─ main.tsx
  │    └─ App.tsx
  ├─ package.json
  ├─ tsconfig.json
  ├─ vite.config.ts
  ├─ vitest.config.ts
  ├─ .eslintrc.json
  ├─ .prettierrc
  └─ README.md
```

### API Module
```
api/
  ├─ src/
  │    └─ index.ts
  ├─ package.json
  ├─ tsconfig.json
  ├─ vitest.config.ts
  ├─ .eslintrc.json
  ├─ .prettierrc
  └─ README.md
```

### Engine (Common) Module
```
engine/
  ├─ src/
  │    └─ sudoku.ts
  ├─ package.json
  ├─ tsconfig.json
  ├─ vitest.config.ts
  ├─ .eslintrc.json
  ├─ .prettierrc
  └─ README.md
```

---

## UI Module Setup (Final Working Steps)

1. Delete all contents of the `ui` folder.
2. Scaffold a new Vite + React + TypeScript app:
   ```sh
   cd ui
   npm create vite@latest . -- --template react-ts
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Remove unnecessary files from `src` and `public`:
   - `App.css`, `assets/`, `index.css`, `vite-env.d.ts`, `vite.svg`
5. Update `App.tsx` to:
   ```tsx
   import React from 'react';
   function App() {
     return <h1>Sudoku</h1>;
   }
   export default App;
   ```
6. Update `main.tsx` to:
   ```tsx
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import App from './App';
   ReactDOM.createRoot(document.getElementById('root')!).render(
     <React.StrictMode>
       <App />
     </React.StrictMode>
   );
   ```
7. Update TypeScript configs for React:
   - Set `jsx: "react-jsx"` and `moduleResolution: "Node"` in `tsconfig.app.json` and `tsconfig.node.json`.
8. Install type packages:
   ```sh
   npm install --save-dev @types/react @types/react-dom
   ```
9. Start the dev server:
   ```sh
   npm run dev
   ```
10. (Optional) Install and configure ESLint, Prettier, Vitest, and React Testing Library:
    ```sh
    npm install --save-dev eslint prettier vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event
    ```
11. Installed and ready to configure:
    - ESLint
    - Prettier
    - Vitest
    - React Testing Library

---

## Documentation Policy
### README.md Standard (All Modules)
Every module (and the root) must have a README.md with the following sections, in this order:

1. Title
2. Detailed Description (updated with every new feature or change)
3. Table of Contents (with links to each section)
4. Scripts
5. CI/CD
6. Tooling
7. Testing
8. Code Quality
9. File Structure (updated as new files/features are added)
10. Documentation Policy
11+. Any additional sections as needed

The Table of Contents must be updated whenever new sections are added. All required sections must be present and detailed. This standard applies to every new module in the future.

### Automatic README Updates Policy
The assistant will automatically update README.md files for every module (and the root) whenever new files, features, or sections are added. You do not need to request README updates—they will always reflect the current, complete, and detailed state of each module, including file structure and all required sections. This policy is part of the project workflow.

---

## Module Interdependencies
Document how modules depend on or interact with each other. For SudokuApp:
- The UI module communicates with the API for puzzle generation, solving, and user actions.
- The API module uses the engine for Sudoku logic and may connect to a database for persistence.
- The engine module is designed to be reusable by both UI and API.
Update this section whenever new modules or dependencies are added.

---

## Customization Policy
All modules must follow the documented standards for structure, scripts, tooling, and documentation. If a module requires an exception or override (e.g., for a special feature, integration, or external dependency), document the reason and details here. Customizations must be approved and clearly explained to maintain consistency and clarity across the monorepo.

## Source Structure and Naming Conventions (August 13, 2025)
- Test files (e.g., App.test.tsx, sudoku.test.ts) must be placed next to their corresponding source files in the src directory.
- The test folder (e.g., src/test or test/) is only for test setup/config files and type definitions (e.g., setupTests.ts, vitest.d.ts).
- CSS modules (e.g., App.module.css), Storybook files (e.g., App.stories.tsx), and similar assets should be kept next to their related source files in src.
- If new file types or structures are needed, the assistant will ask before making a decision.
- `NOTES.md`, root `README.md`, and module-level `README.md` must always reflect the current, working state of the project.
- Root `README.md` should provide a high-level overview, module interactions, and current capabilities, not deep details.
- Module `README.md` should document setup, scripts, and specifics for that module.
- Only successful steps and configurations are recorded; failed or outdated attempts are omitted.
- These files will be updated automatically after every significant change or setup, without requiring explicit user instruction.

## UI Module: Final Working Setup
- Vite + React + TypeScript scaffolded and cleaned
- ESLint, Prettier, Vitest, React Testing Library installed and configured
- Scripts:
  - `dev`: Start Vite dev server
  - `lint`: Run ESLint
  - `format`: Run Prettier
  - `test`: Run Vitest once
  - `test:watch`: Run Vitest in watch mode
  - `verify`: Run lint, format, and test in sequence
- TypeScript config set for extensionless imports and modern React
- All tools verified to work with no errors

## AI Assistant Policy
Whenever a significant change is made to the project, the assistant will automatically update the root README.md and NOTES.md to reflect the new state, without requiring explicit user instruction. When reading README.md and NOTES.md, the assistant will always provide a summary update of project status, next steps, and its responsibilities. This policy does not override or contradict any existing documentation or workflow policies.

---

## Modernized Tooling Configuration (August 13, 2025)

All modules have been updated to use modern configuration formats:

### Modern Prettier Configuration (prettier.config.js)
All modules now use `prettier.config.js` instead of `.prettierrc`:
```javascript
/** @type {import("prettier").Config} */
export default {
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    bracketSpacing: true,
    arrowParens: 'always',
    endOfLine: 'lf',
    overrides: [
        {
            files: ['*.json', '*.config.js', '*.config.ts', 'prettier.config.js'],
            options: {
                tabWidth: 2,
            },
        },
    ],
};
```

### Modern ESLint Configuration (eslint.config.js)
All modules now use `eslint.config.js` with flat config instead of `.eslintrc.json`:

**UI Module (React-specific):**
```javascript
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
import testingLibrary from 'eslint-plugin-testing-library';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ['dist/**/*', 'node_modules/**/*'] },
    {
        files: ['**/*.{ts,tsx,js,jsx}'],
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        languageOptions: {
            ecmaVersion: 2021,
            globals: { ...globals.browser, ...globals.es2021 },
            parserOptions: { ecmaFeatures: { jsx: true } },
        },
        plugins: { react, 'react-hooks': reactHooks, 'react-refresh': reactRefresh, 'testing-library': testingLibrary },
        rules: { /* React-specific rules */ },
        settings: { react: { version: 'detect' } },
    },
    { files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'], extends: [testingLibrary.configs['flat/react']] },
    { files: ['**/vite.config.ts'], rules: { '@typescript-eslint/ban-ts-comment': 'off' } },
);
```

**API/Engine Modules (Node.js):**
```javascript
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ['dist/**/*', 'node_modules/**/*'] },
    {
        files: ['**/*.{ts,js}'],
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        languageOptions: {
            ecmaVersion: 2020,
            globals: { ...globals.node, ...globals.es2020 },
        },
        rules: {
            'semi': ['error', 'always'],
            'quotes': ['error', 'single'],
            'no-console': 'warn', // 'error' for engine, 'warn' for api
            'eqeqeq': ['error', 'always'],
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': ['warn', { /* config */ }],
        },
    },
);
```

### Updated Dependencies
All modules now use:
- `eslint@^9.33.0` (latest)
- `typescript-eslint@^8.39.1` (unified package)
- `@eslint/js@^9.33.0` (core configs)
- `globals@^16.3.0` (environment globals)
- Modern plugin versions for React modules

### Package.json Scripts
Updated lint scripts from `eslint . --ext .ts` to `eslint .` (extension detection is automatic in flat config).

### File Cleanup
- Removed all `.eslintrc.json` files
- Removed all `.prettierrc` and `.prettierignore` files
- Removed duplicate empty test files in `test/` directories (tests should be next to source files)
- Removed unused dependencies: `eslint-plugin-import` from UI module
- Added missing `vitest` dependency to UI module

### Final Dependency State
All modules now have clean, minimal dependency sets:
- **UI Module**: React, TypeScript, Vite, ESLint (with React plugins), Prettier, Vitest, Testing Library
- **API Module**: Express, TypeScript, ESLint, Prettier, Vitest, Supertest, ts-node
- **Engine Module**: TypeScript, ESLint, Prettier, Vitest (minimal library setup)

All modules pass their verify scripts with the new configuration.

---


---

## Sudoku Difficulty Requirements (August 13, 2025)
**CRITICAL**: When working with Sudoku grids, difficulty is determined by:
1. **Number of given values** - NOT empty cells
2. **Solving techniques required** - specific methods needed to solve

### Difficulty Levels:
- **Easy**: 36-49 given values, basic techniques (naked/hidden singles only)
- **Medium**: 32-35 given values, intermediate techniques (locked candidates, naked pairs, pointing pairs/triples)
- **Hard**: 28-31 given values, advanced techniques (X-Wing, Swordfish, complex elimination)
- **Expert**: 25-27 given values, expert-level techniques
- **Master**: 22-24 given values, master-level techniques  
- **Extreme**: 17-21 given values, extreme techniques requiring deep logical inference

**IMPORTANT**: Always use validated puzzles from established sources (like github.com/attractivechaos/plb, t-dillon/tdoku datasets) rather than creating new grids manually. Manual creation often results in invalid puzzles.

**COMMAND FOR FUTURE TASKS**: Before completing any task, you must always update NOTES.md and all relevant README files to reflect the current state. This is mandatory and non-negotiable.

## Required Tooling for Every Module
Every module must include ESLint, Prettier, Vitest, and Jest at minimum, unless otherwise specified. UI modules must also include Storybook. This ensures code quality, formatting consistency, and test coverage across the entire monorepo.

## CI/CD and Scripts
- Each module must have its own CI/CD workflow file (e.g., `.github/workflows/ci.yml` inside the module folder). This ensures that only the affected module's workflow runs when changes are made, rather than running checks for the entire monorepo.
- Every module must have a `verify` script that runs the linter, formatter, and tests in sequence.

## Module File Structure Template

Each module (ui, api, engine, etc.) should follow this structure:

module/
  ├─ src/
  │    ├─ ComponentOrFeature.ts[x]
  │    ├─ ComponentOrFeature.test.ts[x]
  │    ├─ ComponentOrFeature.stories.ts[x]   # if using Storybook
  │    ├─ ComponentOrFeature.module.css      # if using CSS modules
  │    └─ test/
  │         ├─ testSetup.ts
  │         └─ vitest.d.ts
  ├─ package.json
  ├─ tsconfig.json
  ├─ vitest.config.ts
  ├─ .eslintrc.json
  ├─ .prettierrc
  └─ README.md

Test files, storybook files, and CSS modules should be placed next to their related source files in src. The src/test folder is only for test setup/config files and type definitions.
