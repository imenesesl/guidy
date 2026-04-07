---
name: motion-design
description: >-
  Animation patterns for Guidy web apps using Motion for React and Lucide icons.
  Use when adding scroll reveals, entrance animations, hover effects, icons, or any motion to UI components.
---

# Motion Design Skill

## When to Use

- Adding entrance animations to sections
- Creating hover/tap micro-interactions
- Implementing scroll-triggered reveals
- Adding floating, bouncing, or breathing icon animations
- Adding icons to any component

## Core Libraries

- **Motion for React** (`motion/react`) — all animations
- **Lucide React** (`lucide-react`) — all icons

## Step 1 — Scroll Reveal with `whileInView`

Replace IntersectionObserver + CSS transitions with Motion's built-in scroll detection:

```tsx
import { motion } from 'motion/react';

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-50px' }}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
>
  {/* section content */}
</motion.section>;
```

## Step 2 — Stagger Children with Variants

For grids, lists, or card groups entering sequentially:

```tsx
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 18 },
  },
};

<motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
  {items.map((i) => (
    <motion.div key={i} variants={item}>
      {/* card content */}
    </motion.div>
  ))}
</motion.div>;
```

**Important:** Use `as const` on `type: 'spring'` to satisfy TypeScript strict mode.

## Step 3 — Interactive Hover and Tap

Use spring physics for natural-feeling hover and tap:

```tsx
<motion.div
  whileHover={{ y: -8, scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
>
  {/* interactive card */}
</motion.div>
```

## Step 4 — Infinite Icon Animations

Floating, bouncing, or breathing animations for decorative icons:

```tsx
import { motion } from 'motion/react';
import { Rocket } from 'lucide-react';

<motion.div
  animate={{ y: [0, -12, 0] }}
  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
>
  <Rocket size={64} />
</motion.div>;
```

## Step 5 — Hero Entrance Animation

For above-the-fold content that animates on page load (not scroll):

```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
>
  {/* hero text */}
</motion.div>

<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.3 }}
>
  {/* hero illustration */}
</motion.div>
```

## Step 6 — Icons with Lucide

Always use Lucide for icons. Import only what you need:

```tsx
import { GraduationCap, Lightbulb, BarChart3, Rocket, CircleCheck } from 'lucide-react';

<GraduationCap size={48} />
<CircleCheck size={18} />
```

Control color via CSS `color` property on a parent, or via `className`.

## Prohibitions

- **NO CSS `@keyframes` or `animation:` properties** — use Motion components.
- **NO `useScrollReveal` or IntersectionObserver hooks** — use `whileInView`.
- **NO CSS `transition:` for animations** — only for non-animated hover states (background-color on buttons, etc.).
- **NO emojis, image files, or icon libraries other than Lucide.**

## Performance Rules

- Motion uses the Web Animations API (hardware-accelerated) by default.
- Prefer `transform` and `opacity` targets for 120fps performance.
- Use `viewport={{ once: true }}` for scroll reveals to avoid re-triggering.
- Use `useReducedMotion()` from `motion/react` when you need programmatic reduced-motion checks.
