# How I work with AI

This is my current working approach, revised after real mistakes. It is guidance I
apply with judgment, not proof that every past task followed it perfectly.

## 1. Define the outcome

Start with the behavior someone needs and the conditions under which it should
hold. Identify scope, constraints, and a way to observe success. Clarify a material
decision; resolve routine implementation details through the existing project.

Separate investigation, planning, implementation, testing, and publication
authority. A request for a test plan does not authorize running destructive tests.

## 2. Inspect the owning source

Read applicable repository instructions, the current implementation, affected
callers, and relevant tests. Where a project already has a code relationship graph,
use it to orient the investigation, then verify against current source. A stale
index or a prior conversation is a lead, not runtime evidence.

For a bug, identify the trigger and failure mechanism. If the original user
sequence is unknown, say so rather than inventing a reproduction. The
[investigation guide](issue-investigation.md) explains how to compare hypotheses
and distinguish reproducing a symptom from establishing its cause. Use the
[investigation record](../templates/investigation-record.md) when durable private
notes will help.

## 3. Choose a bounded implementation path

Handle a focused task directly. For separate implementation surfaces or a useful
independent perspective, assign a specialist clear ownership, allowed actions,
requirements, evidence, and a deliverable. Avoid overlapping writers and nested
coordination. Keep the existing dependencies when they are sufficient.

For consequential changes, inspect failure and recovery behavior before editing
and obtain independent review when available. Disclose when that review is missing.

## 4. Verify the affected behavior

Trace one real response through its actual caller early in a change that spans
boundaries. Then cover the relevant success, failure, restriction, and recovery
cases. Establish test preconditions explicitly and verify the target is safe.

Match the conclusion to the method:

| Method | Useful evidence | Limit |
| --- | --- | --- |
| Static check | Syntax, types, configured style | Does not execute the user flow |
| Unit test | A rule under controlled inputs | Does not establish HTTP or UI integration |
| HTTP check | Status, response, and relevant stored state | Does not establish browser behavior |
| Browser check | Actual interaction and visible outcome | Does not establish every role or live provider |
| Independent review | A separate assessment of risks and assumptions | Does not replace execution |

A failed assertion is information. Diagnose the product, fixture, locator, or
environment instead of weakening an expected outcome to get a green run. Compare
with an unchanged base under comparable conditions before calling a failure
pre-existing. Rerun affected checks after relevant changes.

## 5. Reconcile and hand off

Compare the final diff with the requested behavior, affected callers, and test
setup. Report what changed, the target and checks, observed results, and limits.
Separate implementation readiness from acceptance completion. Publishing is a
separate authorized action.

For work that spans sessions, update one private checkpoint with current state and
the next action. On resume, verify the branch, files, and evidence before relying
on it. A [checkpoint template](../templates/checkpoint.md) is a memory aid, not a
substitute for inspection.

## Evaluate a workflow change

Before adopting a new or revised skill, define the behavior it should improve and
the requirements it must preserve. Compare representative cases, including
missing prerequisites, conflicting evidence and interruption. The
[skill evaluation guide](skill-evaluation.md) and
[evaluation record](../templates/skill-evaluation.md) describe a proposed method;
they do not establish that an evaluation has been performed or that the workflow
improves productivity.
