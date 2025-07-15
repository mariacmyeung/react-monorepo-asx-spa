# React Monorepo ASX SPA

This repository is a Yarn monorepo for managing multiple React single-page applications (SPAs) and shared UI components.

## Structure

- **apps/**
  - `asx-spa/`: Main ASX SPA (Vite + React)
  - `multi-form-spa/`: Additional SPA (Vite + React)
- **packages/**
  - `ui/`: Shared UI components (TypeScript, styled-components)

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- Yarn (v1 or v3+)

### Install dependencies
```bash
yarn install
```

### Development
To start the development server for an app:
```bash
yarn dev:asx         # Start ASX SPA
yarn dev:form        # Start Multi-Form SPA
```

### Build all workspaces
```bash
yarn build
```

## Scripts
- `dev:asx`: Run dev server for ASX SPA
- `dev:form`: Run dev server for Multi-Form SPA
- `build`: Build all workspaces

## Workspaces
This repo uses Yarn workspaces for dependency management and code sharing.

## License
This project is private and not intended for public distribution.
