# Component Inventory

> Last updated: 2026-04-07
> Updated by: Brain initial analysis

## Design System (`@guidy/ds`)

### Atoms

| Component        | Variants / Key Props                                                                                                                                       | Used In                                                     |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **Button**       | `variant`: primary, secondary, ghost, danger. `size`: sm, md, lg. `fullWidth`.                                                                             | Core HomePage, Landing Header/Hero/StartFree, ErrorFallback |
| **Text**         | `variant`: heading-1..5, body-large, body, body-small, caption, overline. `color`: primary, secondary, subdued, disabled, brand, error, inverse. `as` tag. | Everywhere                                                  |
| **Input**        | `inputSize`: sm, md, lg. `error`, `fullWidth`.                                                                                                             | Not used in apps yet                                        |
| **Badge**        | `variant`: default, success, error, warning, info.                                                                                                         | Core HomePage                                               |
| **IconButton**   | `size`: sm, md, lg. `label` (aria).                                                                                                                        | Not used in apps yet                                        |
| **Avatar**       | `size`: sm, md, lg, xl. `name`.                                                                                                                            | Core HomePage                                               |
| **Divider**      | `className` only.                                                                                                                                          | Core HomePage                                               |
| **Spinner**      | `size`: sm, md, lg.                                                                                                                                        | Core App (Suspense fallback), Core HomePage                 |
| **Blob**         | `variant`: 1, 2, 3, 4. `color`: brand, blue, purple, yellow, pink.                                                                                         | Landing HeroSection, StartFreeSection                       |
| **WavesDivider** | `variant`: smooth, sharp. `flip`.                                                                                                                          | Landing FeaturesSection                                     |

### Molecules

| Component         | Variants / Key Props                              | Used In                                |
| ----------------- | ------------------------------------------------- | -------------------------------------- |
| **Card**          | `variant`: elevated, surface, outlined.           | Core HomePage, Landing BenefitsSection |
| **FormField**     | `label`, `error`, `hint`, `required`, `children`. | Not used in apps yet                   |
| **SearchField**   | `fullWidth`.                                      | Core HomePage                          |
| **Chip**          | `selected`.                                       | Core HomePage                          |
| **ErrorFallback** | `title`, `message`, `buttonLabel`, `onRetry`.     | Core/Landing ErrorBoundary             |

### Hooks

| Hook        | Purpose                                                                |
| ----------- | ---------------------------------------------------------------------- |
| `useTokens` | Returns typed token maps (colors, spacing, radii, shadows, typography) |

### Tokens (CSS)

153 CSS custom properties in `packages/ds/src/styles/tokens.css`:

- Brand colors (3), backgrounds (6), text (6), borders (4), status (4), accents (4)
- Typography: font family (2), sizes (9), weights (4), line heights (5), letter spacing (3)
- Spacing (13), radii (6), shadows (5), transitions (3), opacity (3), border widths (3)
- Sizing: icons (3), avatars (4), spinners (3), illustrations (4), layout (5)
- Decorative offsets (3)

### Tokens (TypeScript)

Importable from `@guidy/ds/tokens`:

- `colors`, `typography`, `spacing`, `radii`, `shadows`, `breakpoints`, `transitions`

## App Components

### Core (`apps/web/core`)

| Component     | Type     | Notes                                                   |
| ------------- | -------- | ------------------------------------------------------- |
| App           | Root     | Suspense + ErrorBoundary + AppProviders                 |
| AppProviders  | Provider | QueryClient + I18nextProvider                           |
| ErrorBoundary | Class    | Uses DS ErrorFallback                                   |
| HomePage      | Page     | DS showcase: Avatar, SearchField, Chips, Cards, Buttons |

### Landing (`apps/web/landing`)

| Component        | Type      | Notes                                                    |
| ---------------- | --------- | -------------------------------------------------------- |
| App              | Root      | ErrorBoundary + AppProviders                             |
| AppProviders     | Provider  | QueryClient + I18nextProvider                            |
| ErrorBoundary    | Class     | Uses DS ErrorFallback                                    |
| Header           | Organism  | Logo, language toggle (Globe icon), login/signup buttons |
| HeroSection      | Organism  | Two-column: text + GuidyMascot, Motion entrance          |
| FeaturesSection  | Organism  | Alternating text/icon rows with WavesDividers            |
| BenefitsSection  | Organism  | Grid of Cards with staggered reveal                      |
| StartFreeSection | Organism  | CTA section with Blobs and Rocket icon                   |
| Footer           | Organism  | Tagline and copyright                                    |
| HomePage         | Page      | Composes all organisms                                   |
| GuidyMascot      | Component | Inline SVG mascot with walking animation                 |
| MascotHead       | Component | SVG head sub-component (eyes, cap, cheeks)               |

### Hooks (App-level)

| Hook          | App     | Purpose                     |
| ------------- | ------- | --------------------------- |
| `useLanguage` | Landing | Wraps i18n for es/en toggle |

## Unused DS Components

These DS components exist but are not imported by any app:

- `Input`
- `IconButton`
- `FormField`

They are available for future features (student workspace, teacher dashboard).
