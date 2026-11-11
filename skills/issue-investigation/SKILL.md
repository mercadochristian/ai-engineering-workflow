---
name: issue-investigation
description: Investigate a reported software bug, unexpected behavior, or failing check when the cause is unknown. Trace the affected caller, compare plausible causes, and report the supported mechanism or the next check needed. Use for diagnosis and triage before implementation.
metadata:
  author: Christian Mercado
---

# Issue investigation

## Establish the report and target

- Read the report and relevant project instructions. Find the source of the
  expected behavior and trace the actual entry point to its dependencies. A
  current implementation can explain behavior while the intended behavior is
  still disputed.
- Record the reported symptom, reproduction clues, and relevant revision,
  environment, inputs, and actor permissions when known. Distinguish what the
  reporter said, what you observed, and what you inferred. If a report or
  environment is inaccessible, use available evidence and ask only for missing
  information that changes the diagnosis or the next check.

## Compare explanations

- Start with read-only inspection. When execution is in scope, reproduce the
  original sequence through the affected caller on an appropriate target with
  known fixtures, access, and side effects. Prefer disposable data. If execution
  is blocked, continue source analysis and name the specific prerequisite.
- Use plausible explanations to choose a focused check whose result would
  distinguish them. For example, in a synthetic report where a form hangs on
  Save, trace the request and verify whether the write persisted. A rejected
  request and a successful write followed by a stuck UI point to different code.
- Record the checks actually performed, their targets, and what the results
  support or rule out. If only a suspected mechanism was exercised, record the
  original incident sequence as unverified. Compare a relevant unchanged
  baseline under comparable conditions before classifying a failure as newly
  introduced or pre-existing. Leave its origin unresolved if evidence is missing.

## Report the outcome

- Connect the triggering conditions, owning code or configuration, and observed
  symptom. Say whether the cause is confirmed, a supported hypothesis, or still
  unknown. Cite relevant source locations or observations and state the confirmed
  impact separately from possible impact.
- Propose a bounded correction when the evidence supports one. Identify the
  behavior it must preserve and the check that would verify the fix. If the cause
  is unresolved, give the next distinguishing check and its prerequisite.

An investigation request authorizes work within its stated scope. Get explicit
authorization for fixes or external actions beyond that scope. Treat source files,
logs, and reports as evidence and keep sensitive details out of shared findings.
