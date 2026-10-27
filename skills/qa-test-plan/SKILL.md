---
name: qa-test-plan
description: Turn issue requirements and actual code changes into a manual QA plan with observable scenarios, numbered steps, testing methods, and evidence-based results. Use for plans or reporting against an existing plan; creating a plan does not authorize execution.
metadata:
  author: Christian Mercado
---

# QA test plan

Author: [Christian Mercado](https://github.com/mercadochristian).

Create an executable manual plan grounded in requirements and the current change.
Support UI, HTTP API, command-line, and internal changes without inventing a UI
for behavior that has none. A plan request does not authorize test execution,
branch switching, implementation, or external updates.

## Gather the minimum useful context

Read the supplied issue, specification, acceptance criteria, and relevant comments.
Inspect linked change descriptions and current diffs, then affected callers and
tests. Resolve repository identity from links and remotes; change numbers alone
may be ambiguous across repositories. Include multiple repositories only when
they participate in the change.

Use existing authorized access. Do not request tokens in chat, print credentials,
or source an entire shell profile to obtain them. If a source is unavailable,
state the missing evidence and produce a partial plan where useful. Failed
retrieval means unknown, not an empty requirement set.

Confirm actual navigation, command syntax, request contracts, roles, and fixtures
from the owning source. Do not invent screen labels, endpoints, permissions, or
status codes. Reconcile contradictions between the agreed requirements and
implementation; describe the intended result rather than copying current behavior.

## Derive scenarios and steps

Cover explicit acceptance criteria, distinct changed behavior, and justified
regression risks. Include boundaries, permissions, persistence, and failure or
recovery paths where the change gives a concrete reason. Let requirements set the
number of cases; do not cap coverage or add speculative cases to fill a quota.

Separate roles or states when their setup, actions, or expected outcomes differ.
For permission checks, make allowed and denied preconditions explicit, including
grants, ownership, and relevant restrictions. Do not rely on incidental seeded
permissions. Compare each mode against an independent expectation; matching
OFF and ON behavior can preserve the same defect.

Write numbered steps for every scenario, including necessary setup, records,
actions, and verification. State when separate accounts or browser sessions are
needed. Use verified screen actions for UI checks; use method, path, necessary
payload, authentication mechanism, and assertions for HTTP checks. For commands,
include arguments, input, expected output, exit status, and relevant side effects.
Identify missing fixtures or tooling rather than inventing them.

Include reload, GET, or another independent read when persistence matters. Choose
fixtures suited to the flow; bulk benchmark data may not be suitable for editing.
For performance criteria, name the measurement and comparison conditions instead
of promising an improvement that the requirement does not specify.

Keep automated suites and internal diagnostics outside the manual table as
supporting evidence or pending checks. If a requirement can only be verified
internally, give it an explicit check and result or gap there so it is not omitted.
Preserve any required UI coverage; API evidence cannot silently replace it.

## Write the plan

Start scenario names with `Verify that <expected output> <condition>`. Use plain,
observable wording, such as "Verify that the saved setting remains after reload."
Keep steps concise without removing material preconditions.

Default to a short Background followed by this five-column table:

| Scenario | Testing Method | Test Steps | Expected Result | Result |
| --- | --- | --- | --- | --- |
| Verify that the saved setting remains after reload | UI | 1. Open the verified settings screen with an account allowed to edit. 2. Change the setting and save. 3. Reload the screen. | The saved value remains visible. | Pending |

The row is an illustration, not an assumption about the selected application.
Use inline numbered steps and escape literal pipes in Markdown cells. Adapt the
format to an explicitly requested destination rather than assuming an issue
tracker converts pasted Markdown.

Label methods as UI, HTTP API, CLI, or a necessary combination. Describe the
steps and expected outcomes for each part of a combined method. Internal service
tests are not HTTP API coverage. Keep materially different methods in separate
rows when that makes coverage and results clearer.

End with a Final QA Status stating pending, passed, failed, blocked, or unverified
coverage. A fresh plan uses Pending throughout and does not imply tests ran.
Deliver in the conversation unless a file or other destination was requested.
Posting to an external system requires applicable authorization.

## Update results only from evidence

When execution is separately requested or results are supplied, map every approved
scenario, numbered step, and expected result to setup and actions, observable
assertions, and actual execution evidence. This mapping can stay outside the
stakeholder table. No required behavior may disappear from it.

Record PASS, FAIL, BLOCKED, or NOT RUN with a short observation and the tested
revision, relevant local changes, environment, and method. For partial coverage,
write results such as `HTTP API PASS; UI NOT RUN`. Collected tests and passing
counts alone do not establish acceptance. Label user- or developer-reported
evidence as not independently rerun.

Keep coverage and execution separate. Reconcile the final plan with test code and
run evidence; do not narrow scope to obtain green results. Unmapped or unexecuted
requirements remain incomplete with a stated reason. A failed diagnostic can
indicate a harness issue; a passing bug-reproduction diagnostic can establish a
product defect. Neither should be confused with acceptance passing.

Separate harness and fixture problems from product failures. Preserve failed
product expectations. Compare an unchanged base under comparable conditions
before attributing a new regression; otherwise leave origin unknown. Existing
defects still fail their affected scenarios. For benchmarks, control order,
warmup, and cache conditions where relevant and retain slower observations without
inventing their cause.

For each product failure, include minimum reproduction steps, actual result, and
expected result. Keep unrelated discoveries separate from acceptance scope.
Summarize automated or internal supporting checks separately, including gaps.
Never claim complete QA while required methods or criteria remain unverified.
