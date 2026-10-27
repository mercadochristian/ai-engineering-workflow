---
name: behavior-verification
description: Verify changed software behavior with applicable repository checks and targeted HTTP, browser, or command tests. Use after implementation or when execution is requested; report coverage, actual results, and gaps without treating a plan or review as execution authorization.
metadata:
  author: Christian Mercado
---

# Behavior verification

Author: [Christian Mercado](https://github.com/mercadochristian).

Inputs are the requirements, changed artifact or revision, affected behavior, and
authorized test target. Derive checks from observable acceptance criteria and
concrete regression risks. Preserve repository and CI requirements. A plan-only
or review-only request does not authorize test execution.

## Select checks from the change

Inspect the final diff, affected callers, existing tests, and current scripts and
configuration, including changed-file checks. Verify after a coherent completed
change and before handoff; repeated checks after every edit are unnecessary.

Run applicable lint, formatting, type, and relevant automated tests. Run builds
when required or warranted by the change. Start with the smallest useful affected
suite, broadening for unresolved risk; this cannot waive a separately required
full check. Add regression tests when they meaningfully protect behavior rather
than restate implementation.

For a bug, reproduce the reported trigger when known. If the original sequence is
unknown, verify the confirmed failure mechanism and label that limit. A simulated
failure does not prove the original incident sequence. Include relevant boundaries
and failure or recovery behavior when the change creates a concrete risk.

## Check the relevant boundaries

- Automated tests establish the behavior of the boundary they exercise. Lint and
  type checks supplement behavioral evidence.
- HTTP changes need meaningful status and response assertions, with an independent
  persistence read when relevant. Calling a service directly does not prove the
  HTTP route, authorization, or serialization works.
- Meaningful UI changes need targeted browser verification when safe services and
  fixtures are available. Check a real response through the actual page or caller
  early, including save and reload when relevant. A mock or component harness
  establishes only its own boundary.
- Command changes need the affected invocation, output, exit status, and observable
  side effects checked. Unit tests of an internal helper do not establish command
  orchestration.
- Queued or external work needs evidence for the relevant scheduling, execution,
  retry, or delivery stages. A queued job alone does not prove delivery.
- Review supplies separate evidence; distinguish independent review from self-review.

Use ordinary navigation and the actual failing request when reproducing a UI bug.
A fresh or cache-busted request alone does not prove the normal page flow works.
Use the existing runner and project-supported concurrency, accounting for shared
state. Do not duplicate equivalent suites without a reason.

## Establish safe execution conditions

Before writes, verify the actual checkout or mount, target database, supported
authentication, fixtures, and substitutes for external effects. A local address or
test filename is insufficient. Inspect setup scripts for resets and shared-state
changes. Use owned disposable records and clean up only those records.

Test execution does not by itself authorize destructive resets, shared queue
draining, account changes, authentication bypasses, or live provider effects.
Keep credentials out of output and durable reports. Do not install missing tools
or start services merely to make verification possible; use an inspected setup
mechanism when that setup is within the authorized scope.

If a prerequisite blocks a method, mark affected cases BLOCKED, state what is
missing, and continue independent safe checks. Do not change application behavior
or weaken an assertion merely to make a harness pass.

For requested screenshots or recordings, check the captured result for visible
errors, missing steps, and sensitive data before delivery. Identify the source
version; later UI changes invalidate affected captures.

## Resolve failures and reuse evidence

Never hide failure by dropping required coverage, changing expected behavior, or
retrying until green. Separate harness, fixture, and environment failures from
product failures. Before calling a failure pre-existing, compare with the unchanged
base under comparable dependencies, setup, and options; otherwise report origin
as unknown. An inherited defect can still fail an acceptance scenario.

Reuse passing evidence only while relevant code, dependencies, configuration,
target, fixtures, and environment remain unchanged. Rerun affected checks after
changes. Unaffected evidence may be reused. Retry only when changed conditions or
a diagnosed transient justify it. An interrupted run does not establish a pass;
rerun its unfinished required checks.

## Report what the evidence proves

Record the revision and relevant working-tree changes, target and setup, exact
commands, method, and PASS, FAIL, BLOCKED, or NOT RUN outcomes. Link artifacts in
the project's supported location without exposing credentials or private data.

Separate acceptance coverage from execution, implementation readiness from
acceptance completion, and local results from deployed or live integration results.
Identify mock-based, collection-only, user-reported, and independently executed
evidence. A passing diagnostic that reproduces a bug is not passing acceptance.
Reconcile conflicting reports by revision, target, and scope before combining them.
Required failed or blocked checks leave the affected acceptance incomplete.
