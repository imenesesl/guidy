# Shared Packages

Reusable libraries and modules shared across applications.

## Structure

```
packages/
├── shared/           # Platform-agnostic shared logic (types, utils, constants)
├── config/           # Shared configurations (ESLint, Prettier, TypeScript, etc.)
└── ...
```

## Guidelines

- Keep packages focused and single-purpose.
- Each package should have its own dependency management.
- Prefer creating a new package over bloating an existing one.
