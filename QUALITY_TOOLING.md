# Quality Tooling

This document describes the quality tooling setup for the project.

## Overview

The project uses a comprehensive quality testing system including:

- **Pre-commit hooks** - Automatically check and fix code quality before commits
- **Local testing scripts** - Run linting and validation on demand
- **CI workflows** - Automated quality checks on every push and pull request

## Tools

### Linting Tools

- **Prettier** - Code formatting for JavaScript, CSS, Nunjucks, HTML, Markdown, and JSON
- **ESLint** - JavaScript linting
- **Stylelint** - CSS linting

### Testing Tools

- **Pa11y** - Accessibility testing

## Local Development

### NPM Scripts

All quality checks can be run locally using npm scripts:

```bash
# Run all linters
npm run lint

# Run individual linters
npm run lint:format       # Prettier check
npm run lint:format:fix   # Prettier auto-fix
npm run lint:css          # Stylelint check
npm run lint:css:fix      # Stylelint auto-fix
npm run lint:js           # ESLint check
npm run lint:js:fix       # ESLint auto-fix

# Run tests
npm test                  # Run linting and build
npm run test:accessibility # Run Pa11y accessibility tests (requires running server)

# Build
npm run build             # Build the site
npm run build:prod        # Build for production
npm start                 # Start development server
```

### Pre-commit Hooks

The project uses [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged) to automatically lint and fix files before committing:

- Runs ESLint and fixes JavaScript files
- Runs Stylelint and fixes CSS files
- Runs Prettier and formats all supported files

This ensures that all committed code meets quality standards.

## CI Workflows

### Quality Checks Workflow

**File:** `.github/workflows/quality.yml`

Runs on every push and pull request to main/master branches:

1. Runs Prettier formatting check
2. Runs Stylelint CSS linting
3. Runs ESLint JavaScript linting
4. Builds the site with Eleventy
5. Uploads build artifacts

### Accessibility Tests Workflow

**File:** `.github/workflows/accessibility.yml`

Runs on every push and pull request to main/master branches:

1. Builds the site
2. Starts a local server
3. Runs Pa11y accessibility tests

## Configuration Files

- `.prettierrc` - Prettier configuration
- `.prettierignore` - Files to exclude from Prettier
- `eslint.config.js` - ESLint configuration (ESLint v9 flat config)
- `.stylelintrc.json` - Stylelint configuration
- `.lintstagedrc.json` - lint-staged configuration
- `.pa11yci.json` - Pa11y configuration
- `.husky/pre-commit` - Pre-commit hook script

## Troubleshooting

### ESLint Warning

You may see a warning about module type when running ESLint. This is expected and doesn't affect functionality. The warning can be silenced by adding `"type": "module"` to package.json, but this may affect other parts of the build.

### Pa11y in CI

Pa11y requires Chrome to run. In CI environments, it needs the `--no-sandbox` flag, which is configured in `.pa11yci.json`.

### Accessibility Tests

To run accessibility tests locally:

1. Build the site: `npm run build`
2. Start a server: `npx serve _site -l 8080` (in background)
3. Run tests: `npm run test:accessibility`
