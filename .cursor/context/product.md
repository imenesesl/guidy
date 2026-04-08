# Product Knowledge

> Last updated: 2026-04-07
> Updated by: Brain initial analysis

## What is Guidy

EdTech platform for high school students and teachers. Core value: force real learning instead of passive copying.

## The Problem

- Students copy homework answers (from ChatGPT, peers) without understanding
- Teachers spend too much time reviewing and lack visibility into who actually understands

## The Solution

1. **AI-generated task variations** — each student gets a unique version (anti-copying)
2. **Guided AI assistant** — hints and step-by-step thinking, never direct answers
3. **Teacher dashboard** — automatic analytics on mistakes, performance, who needs help

## Target Users

| User                 | Role          | What They Need                   |
| -------------------- | ------------- | -------------------------------- |
| Teachers / Schools   | Primary buyer | Less grading time, more insight  |
| High school students | End user      | Guided learning without pressure |

## Product Constraints

- **Extremely simple** — assume low-tech teachers
- **Immediate value** — no heavy setup
- **Low-resource** — must work on basic hardware and slow connections

## Current Implementation State

### Landing App (marketing)

Public marketing site at `apps/web/landing/`. Spanish-first.

Sections:

- **Header**: Logo, language toggle (ES/EN), login/signup CTAs
- **Hero**: Headline + GuidyMascot character + CTA buttons
- **Features**: Three alternating rows (anti-copy variations, guided AI, insights)
- **Benefits**: Grid cards for teachers, students, institutions
- **Start Free**: CTA section
- **Footer**: Tagline + copyright

All copy follows Duolingo-style tone (warm, human, slightly cheeky).

### Core App (product)

Product scaffold at `apps/web/core/`. English-first.

Current state: DS showcase page with Avatar, SearchField, Chips, Cards, Buttons. Placeholder for actual product features.

### What's NOT Built Yet

- Student workspace (task solving interface)
- Teacher dashboard (analytics, task creation)
- AI-generated task variations engine
- Guided AI assistant
- Authentication / user management
- Backend API (`apps/server/` is placeholder)
- Mobile app (`apps/mobile/` is placeholder)

## MVP Scope (from product context)

1. Teacher creates a task (text-based, single subject)
2. System generates unique variations per student
3. Student workspace with guided AI hints
4. Teacher dashboard with per-student and per-topic analytics

## Brand Voice

Duolingo-style: warm, fun, encouraging, slightly cheeky. Zero corporate language. Benefits over features. Short sentences (max 12 words). Spanish first, then adapted English.

## Typography

Google Sans font family across all apps.
