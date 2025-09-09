# Project Overview

This is a Next.js project that serves as a template for a zoo website. It is built with TypeScript and uses i18next for internationalization, supporting English, Malay, and Chinese. The website is a fan-made project to showcase a possible redesign of the Zoo Negara website.

## Key Technologies

*   **Framework:** Next.js
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Internationalization:** i18next
*   **Testing:**
    *   Jest (Unit and Integration)
    *   Playwright (End-to-End)
    *   BackstopJS (Visual Regression)
*   **Code Quality:**
    *   ESLint
    *   Knip

# Building and Running

## Development

To run the development server, use the following command:

```bash
npm run dev
```

## Production

To build the application for production, use the following command:

```bash
npm run build
```

To start the production server, use the following command:

```bash
npm run start
```

## Testing

To run the Jest tests, use the following command:

```bash
npm run test:single
```

To run the Playwright end-to-end tests, use the following command:

```bash
npm run e2e
```

To run the visual regression tests, use the following command:

```bash
npm run snapshot
```

To approve any visual changes, run the following command:

```bash
npm run snapshot:approve
```

# Development Conventions

## Internationalization

The project uses `i18next` for internationalization. Translations are stored in the `src/i18n/locales` directory. Components are translated using the `withTranslator` higher-order component.

## Code Quality

The project uses `knip` to find unused files, dependencies and exports in this project. To run `knip`, use the following command:

```bash
npm run dependency:check
```

## Code Style

The project uses ESLint to enforce a consistent code style. Configuration can be found in `eslint.config.mjs`.

Key code style rules:
* No semicolons.
* Double quotes for strings.

Folder structure:
- `src/app/`: This directory contains all pages and routes for the application. Files here are responsible for data fetching and view composition.
- `src/components/`: This directory holds all reusable React components like buttons, cards, and forms. Components should be stateless unless they need to manage their own UI state.
