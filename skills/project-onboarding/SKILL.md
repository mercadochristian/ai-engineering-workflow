---
name: project-onboarding
description: Establish a source and verification map for an unfamiliar software project or refresh stale project context. Use before work that needs a reusable repository overview; bounded fixes need only focused inspection.
metadata:
  author: Christian Mercado
---

# Project onboarding

Author: [Christian Mercado](https://github.com/mercadochristian).

Build enough verified context to support the intended work. Inputs are the selected
repository or repositories, the upcoming task, and authorized access. If the
project is unclear, resolve it before inspecting unrelated repositories.

## Inspect the owning sources

Read applicable repository instructions, current branch and working-tree status,
the README, manifests, relevant entry points, tests, and development scripts.
Use scoped searches and existing tooling. Follow available source maps when useful,
but verify their findings against current source.

Map the intended audience and documented journeys. Distinguish stated requirements,
current implementation, runtime observations, and unknowns: code alone does not
establish intended business rules. Inspect only enough to support upcoming work;
do not read credentials or unrelated project or conversation history.

Identify the owning files for the affected architecture and contracts: application
entry points, request handlers, UI callers, persistence, background processing,
and external boundaries where relevant. Include additional repositories only when
they participate in the intended work.

## Map verification and operational effects

Inspect scripts and configuration before recommending commands. Record:

- Applicable lint, formatting, type, test, and build checks.
- Required services, supported runtime versions, and existing dependencies.
- Test targets, authentication mechanisms, fixture setup, and isolation boundaries.
- Database reset or migration behavior and external mail, storage, payment, or
  other service effects.
- Supported concurrency settings and artifact destinations when relevant.

A local URL alone does not establish isolation. Do not invent commands, endpoints,
credentials, or setup steps. Onboarding does not authorize installation, service
startup, database resets, or external writes. Report missing prerequisites without
trying setup commands merely to complete the map.

## Deliver a useful map

Report in the conversation unless a durable reference was requested or is already
part of the authorized workflow. Honor the project's existing documentation
location and update an applicable reference rather than creating duplicate indexes.
Ask about a destination only when it materially affects the work.

Include the inspected revision and date, owning source paths, relevant architecture
and contract boundaries, verification commands and their effects, and missing
evidence. Separate inspected commands from commands actually executed. If the
checkout has local changes, identify the scope so a commit hash does not imply
those changes were absent.

Keep the reference proportional to the task. On later work, recheck affected
sources for drift instead of repeating the entire inventory. Onboarding alone
does not authorize implementation, agent installation, or changes to repository
instructions.
