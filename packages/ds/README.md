# @guidy/ds — Design System

Guidy's design system package. Provides design tokens, atomic components, and molecules for all web applications.

Inspired by Spotify's design language: dark surfaces, green brand accent, clean typography, and rounded elements.

## Install

This package is consumed via pnpm workspaces. Add it to any web app:

```json
{
  "dependencies": {
    "@guidy/ds": "*"
  }
}
```

## Font — Roboto (Required)

The DS uses **Roboto** as its only font family. Every app consuming `@guidy/ds` MUST load Roboto. Add this to your `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet" />
```

Required weights: 400 (regular), 500 (medium), 700 (bold), 900 (black).

## Usage

```typescript
// Import components
import { Button, Text, Card, Badge } from '@guidy/ds';

// Import CSS tokens (in entry point)
import '@guidy/ds/styles';

// Import token values
import { colors, spacing } from '@guidy/ds/tokens';
```

## What's Included

### Tokens

Colors, typography, spacing, radii, shadows, breakpoints, transitions.

### Atoms

Button, Text, Input, Badge, IconButton, Avatar, Divider, Spinner.

### Molecules

Card, FormField, SearchField, Chip.

### Hooks

`useTokens()` — access all token values programmatically.
