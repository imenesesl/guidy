# Shared Packages

Reusable libraries and modules shared across applications.

## Structure

```
packages/
├── ds/               # Design system (tokens, atoms, molecules) — @guidy/ds
├── shared/           # Platform-agnostic shared logic (types, utils, constants)
├── config/           # Shared configurations (ESLint, Prettier, TypeScript, etc.)
└── ...
```

## Guidelines

- Keep packages focused and single-purpose.
- Each package should have its own dependency management.
- Prefer creating a new package over bloating an existing one.
