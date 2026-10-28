# Hand off work between coding tools

Switching tools is useful when another environment provides needed access or a bounded second perspective. It also creates opportunities to lose context, duplicate edits, and rerun actions whose outcome is uncertain.

This guide proposes a handoff contract. It does not claim that the contract has been validated across products or tools.

## Choose an owner

Keep one active owner for a task. Another tool can review or work on explicitly disjoint files. Merely opening two assistants does not give them shared context, coordinated permissions, or a combined resource budget.

Before changing ownership, finish a safe phase or record exactly where execution stopped. A running command needs an identified owner and a known state. Do not launch the same deployment, migration, upload, or test cleanup again because the receiving tool cannot see its outcome.

## Transfer the state that changes the next decision

Use the [handoff template](../templates/tool-handoff.md) to provide:

- The intended behavior, acceptance criteria, scope, and remaining work.
- Repository and revision, uncommitted edits, and file ownership.
- Decisions and rejected approaches that still matter.
- Checks actually run, results, target, and incomplete checks.
- Running commands, service dependencies, and cleanup obligations.
- Actions authorized by the user and actions still requiring a decision.
- The next concrete step and what observation would confirm success.

Share only material suitable for the receiving tool and account. Keep private-project handoffs private; use synthetic or separately reviewed
personal-project examples when publishing. A checkpoint is a reference, not permission to send its contents elsewhere.

## The receiver verifies before continuing

Confirm that the repository, revision, local edits, and available capabilities match the handoff. Check whether earlier results still apply to the current source and target. Ask about a material mismatch; do not silently overwrite work or recreate missing credentials.

Tool-specific agent schemas, model names, connectors, and permission settings require their own compatibility checks. A cloud chat cannot establish the state of a local laptop without access to that laptop. Reusable procedures can be shared without copying an entire configuration directory.

Preserve authorization that is actually supported by the user's request, while checking whether the required environment is ready. A handoff note cannot grant additional authority. A unit-test pass cannot resolve a missing deployment target.

## Invented example

Tool A changes a form and runs its unit tests. Browser verification is blocked because the local server cannot start. Tool B receives the exact diff, unit-test result, server error, and the remaining browser scenario.

Tool B first checks the files and server prerequisite. It resumes the blocked verification when ready, records its own observation, and leaves unrelated files alone. The handoff does not turn the unit result into browser coverage or justify a second implementation.

After the receiver confirms ownership, update the existing task checkpoint if
one is in use. Record any change in scope and retain unresolved results. For a simple bounded task, a short message containing these facts is enough.

For publication, follow the [publication boundary](privacy.md). This AI-assisted
guide describes a proposed procedure; see [AI use and evidence](ai-use-and-evidence.md)
for the limits of the repository's claims.
