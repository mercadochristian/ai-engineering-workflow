# Choose coordination to fit the task

Small changes and read-only questions can stay direct. Substantial work may
benefit from reviewable slices, explicit ownership and a shared task record.
Delegation is optional in either approach. This guide proposes a coordination
method; it does not establish that more coordination improves delivery.

## Select the amount of coordination

Investigate unclear requirements before dependent implementation. Consider
explicit slices when work has separate deliverables, dependencies or repeated
review and verification steps worth tracking. Use one coordinator and give each
contributor bounded ownership. Available role names do not determine how many
workers should run.

For a small task, keep the decision in the conversation. For work already using
a checkpoint, record the approach there. Reuse existing plans and evidence rather
than creating parallel status records. Separate tools still need an explicit
[handoff](cross-tool-handoffs.md) when ownership changes.

## Deliver a reviewable slice

1. Establish the intended behavior and observable acceptance criteria. Resolve
   material unknowns and obtain any approvals required by the task.
2. Make a bounded change. Review the actual diff and seek independent review
   when the risk warrants it; resolve blocking findings.
3. Verify the matching candidate on the authorized target. Run required checks,
   retain failures and gaps, and confirm owned cleanup or restoration.
4. Reconcile the slice with the overall requirements. After integration, check
   affected interactions between slices and report remaining work.

Repository requirements, security rules and supported user authorization apply
throughout. A stage label or agreement between agents is not human approval.
Preserve valid authorization for unchanged scope; reassess affected evidence and
approval scope after relevant changes. This guide adds no universal approval gate
before implementation or local verification.

## Change coordination without losing obligations

Use the [transition record](../templates/mode-transition.md) when a durable
handoff will help. Retain the same goal, owned changes, acceptance criteria and
existing task record, including:

- Source and candidate revisions, plus relevant uncommitted changes.
- Supported authorization and any pending decisions or review findings.
- Applicable results, failed or interrupted checks, and unrun coverage.
- In-flight operations, their owners and last observed state.
- Cleanup or restoration obligations and the next concrete action.

Inspect an operation with an uncertain outcome before retrying a write. A change
in tools or coordination cannot resolve an incomplete deployment or failed
restoration. When a tool becomes unavailable, retain those obligations in the
existing record and identify what can safely continue.

## Evaluate before expanding

Try a small direct task, unclear requirements, work with dependent slices, an
interrupted operation and a failed cleanup in personal-project or synthetic
trials. Review the actual outputs and evidence using the
[skill evaluation guide](skill-evaluation.md). These are proposed cases, not
completed results or proof of productivity gains.

This AI-assisted guide supplies no controller, installer or background service.
Follow the [publication boundary](privacy.md) for any shared records and
[AI use and evidence](ai-use-and-evidence.md) for the repository's evidence limits.
