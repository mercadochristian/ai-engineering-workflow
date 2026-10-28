# Measure outcomes before claiming efficiency

A busy assistant, a short response, or a large token total does not establish useful work. Measure the result someone needed and the effort required to reach an accepted outcome.

This guide proposes a small observation method. It contains no measured improvement, ROI, or completed experiment.

## Start with a task record

Use the [task outcome template](../templates/task-outcome.md) for a bounded task. Record the requirement and acceptance criteria before execution where possible. At the end, distinguish completed implementation, verified behavior, human acceptance, and unresolved gaps.

| Observation | What to record | Interpretation limit |
| --- | --- | --- |
| Outcome | Accepted, needs changes, blocked, or not assessed; reviewer and evidence | An assistant's completed turn is not human acceptance |
| Correctness | Required behavior checked, revision, target, failures, and gaps | A passing local check does not establish deployed behavior |
| Human effort | Active review, correction, and execution minutes, with collection method | Retrospective estimates are approximate |
| Elapsed time | Task start/end and waiting intervals | Waiting time is not active effort or time saved |
| Rework | Corrections and why they were needed | A count alone does not describe severity |
| Coordination | Main assistant and specialist work, retries, and handoffs | More delegation is not automatically more useful |
| Usage | Available task-attributable usage and collection coverage | Shared account totals may include unrelated work |
| Cost | Actual attributable charges, or explicitly labeled estimates | API-equivalent prices are not subscription bills |

Leave unavailable values unknown. Do not infer saved hours from message counts, token counts, cache reuse, or assistant claims.

## Compare one change at a time

State a question such as: does a verification checklist reduce missed browser checks without increasing human effort materially?

Choose comparable tasks or isolated fixture copies. Record source, requirements, tool access, model settings, and task complexity. Keep differences visible. Reusing the identical task can introduce familiarity effects; matched tasks can differ in difficulty. Neither design automatically proves causality.

Include unsuccessful tasks and coordination overhead. Do not add overlapping agent durations to calculate whole-task elapsed time. Use a consistent definition of a correction and keep severity notes.

Review a small batch before expanding measurement. Summarize the number of tasks, missing records, acceptance status, important failures, and observed ranges. Label a baseline reconstructed from history as retrospective. Avoid a single composite score that hides quality failures behind speed.

## Decide what to keep

Adopt a practice when the observed benefit is useful and its quality, effort, and maintenance tradeoffs are acceptable. Keep it provisional when evidence is thin. Publish a narrowly scoped result with limitations rather than a broad productivity percentage.

Keep raw records private unless they are appropriate to share. Public summaries can use synthetic examples or reviewed aggregates without disclosing task identities or original work logs.

For publication, follow the [publication boundary](privacy.md). This AI-assisted
guide describes a proposed procedure; see [AI use and evidence](ai-use-and-evidence.md)
for the limits of the repository's claims.
