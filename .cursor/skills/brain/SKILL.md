---
name: brain
description: >-
  Brain orchestrator skill. Runs the knowledge-gathering loop: pre-analysis,
  standup, role chain execution, retrospective, and knowledge area updates.
  Use before and after every task, or when the user asks to "run brain".
---

# Brain Skill — Full Workflow

## Overview

Brain wraps the entire role chain in a knowledge loop. It ensures every role has the context it needs and that knowledge is never lost between tasks.

```
Brain Pre-analysis → Standup → Role Chain → Retrospective → Knowledge Update → Loop
```

## Step 1 — Pre-analysis

### Goal

Gather all existing knowledge and understand the current state of the codebase relevant to the task.

### Actions

1. Read ALL files in `.cursor/context/`:
   - `architecture.md` — system structure
   - `patterns.md` — coding conventions
   - `component-inventory.md` — DS catalog
   - `tech-debt.md` — known issues
   - `decisions.md` — past ADRs
   - `metrics.md` — quality numbers
   - `product.md` — product context

2. Explore the codebase areas relevant to the task:
   - File structure of affected apps/packages
   - Existing components, hooks, services in the area
   - Current test coverage for affected files
   - i18n keys in scope

3. Identify knowledge gaps:
   - Areas of the codebase not yet documented in context files
   - Stale information in context files
   - Missing metrics or inventory items

### Output

A mental model of the current state that feeds the standup.

## Step 2 — Standup

### Goal

Every role reports its perspective. Brain synthesizes into a Task Brief.

### Protocol

Run through each role's domain and generate a report:

#### Architect Report

- What is the architectural impact of this task?
- Which apps, packages, features are affected?
- Does the current architecture support this change, or does it need adaptation?
- What patterns from `patterns.md` apply?

#### Staff Frontend Report

- What existing hooks, utilities, or components can be reused?
- Are there patterns in `patterns.md` that cover this use case?
- Will this task introduce a new pattern that should be documented?
- Are there cross-feature dependencies to watch out for?

#### Design Engineer Report

- What DS components from `component-inventory.md` are relevant?
- Are any new DS components or variants needed?
- Are there token gaps (colors, spacing, typography)?
- What Storybook stories need to be created or updated?

#### DRY Auditor Report

- Is there risk of duplicating existing code?
- Are there similar components across apps that should be consolidated?
- Is the affected area fully DS-compliant?
- What does `dry-audit.sh` currently report?

#### Motion Designer Report

- What animation patterns from `patterns.md` apply?
- Are there motion consistency issues in the affected area?
- Are there opportunities for micro-interactions?

#### Senior Engineer Report

- How complex is the implementation (low/medium/high)?
- Is there tech debt in the affected area (from `tech-debt.md`)?
- What are the implementation risks?
- What DI boundaries are involved?

#### QA Report

- What is the current test coverage for affected files?
- What test types are needed (unit, component, story, e2e)?
- Are there known flaky or weak test areas?
- What edge cases should be covered?

#### Auditor Report

- What are the current quality metrics from `metrics.md`?
- Are there pre-existing lint or type errors in the area?
- What is the current bundle size baseline?

#### DevOps Report

- Does the CI pipeline need updates for this task?
- Are there deployment considerations?
- Does the GitHub Pages structure need changes?

### Brain Synthesis

After all roles report, Brain produces:

```
TASK BRIEF — [Task Name]
Date: [date]

CONTEXT:
  [Summary of what Brain knows about the affected area]

KEY DECISIONS:
  [List of decisions that need to be made during execution]

REUSE OPPORTUNITIES:
  [Components, hooks, patterns that should be reused]

RISK AREAS:
  [Things that could go wrong or need extra attention]

KNOWLEDGE GAPS:
  [What Brain couldn't determine and needs to discover during execution]
```

## Step 3 — Role Chain Execution

The normal role chain runs (Phases 1-9 from `web-workflow/SKILL.md`), but each role:

1. Reads the Task Brief before starting.
2. Uses knowledge area files as reference.
3. Notes any new discoveries for the retrospective.

## Step 4 — Retrospective

### Goal

Capture everything learned during execution and update knowledge areas.

### Actions

1. **Review changes made**: what files were created, modified, deleted.

2. **Update knowledge areas**:

   **architecture.md** — update if:
   - New apps or packages were added
   - Feature structure changed
   - Dependency graph changed
   - New barrel exports were created

   **patterns.md** — update if:
   - A new coding pattern emerged
   - An existing pattern was refined
   - A new rule was created in `.cursor/rules/`
   - A new convention was established

   **component-inventory.md** — update if:
   - New DS components were created
   - Existing components gained new variants
   - Components were deprecated or removed
   - New Storybook stories were added

   **tech-debt.md** — update if:
   - New tech debt was discovered
   - Existing tech debt was resolved
   - Workarounds were implemented
   - Improvement opportunities were identified

   **decisions.md** — update if:
   - An architecture decision was made
   - A library choice was made
   - A pattern was chosen over alternatives
   - A trade-off was accepted

   **metrics.md** — update if:
   - Bundle size changed
   - Test count or coverage changed
   - Lint error count changed
   - New quality gates were added

   **product.md** — update if:
   - Product understanding deepened
   - User flow was clarified
   - Feature scope was refined
   - New product constraints were discovered

3. **Evaluate role effectiveness**:
   - Did any role lack context it needed?
   - Did any role's output not meet expectations?
   - Should any role's responsibilities be adjusted?
   - Should the standup template be updated?

4. **Determine if another loop is needed**:
   - Are there remaining knowledge gaps?
   - Did the retrospective reveal issues that need another pass?
   - Are knowledge area files still incomplete?

### Output

Updated `.cursor/context/` files and a determination of whether to loop again.

## Running Brain on Demand

When the user says "run brain", "standup", or "analyze":

1. Run Step 1 (Pre-analysis) with broad scope — explore the entire codebase.
2. Run Step 2 (Standup) with all roles reporting on overall project health.
3. Run Step 4 (Retrospective) to update all knowledge areas.
4. Loop until Brain is satisfied that knowledge is comprehensive.

This is the "deep learning" mode where Brain builds complete knowledge from scratch.

## Knowledge Area File Format

Each file in `.cursor/context/` follows this structure:

```markdown
# [Area Name]

> Last updated: [date]
> Updated by: Brain retrospective after [task name]

## [Section]

[Content organized by topic, with specific file paths and details]
```

Keep entries specific, actionable, and linked to real file paths. No vague summaries.
