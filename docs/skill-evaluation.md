# Evaluate a skill through behavior

A skill can have valid metadata, readable instructions, and working links while still choosing the wrong task, missing a requirement, or overstating a result. Structural checks and behavioral checks answer different questions.

This AI-assisted guide proposes an evaluation procedure. It does not report that
the repository's skills have passed it. See [AI use and evidence](ai-use-and-evidence.md)
for the distinction between instructions and executed evidence.

## Start with one question

Choose a recurring problem, such as a verification report that confuses unit checks with browser coverage. State the behavior a useful skill should change and the behavior it must preserve. Avoid revising several unrelated instructions in the same comparison.

Record the baseline instructions and candidate revision. For a new skill, the baseline can be the normal workflow without that skill. Use disposable copies rather than changing the active setup to obtain a baseline.

Keep the task input, source revision, data, model settings, and available tools comparable. Record differences you cannot control. Run each variant from a comparable starting state without supplying the other variant's answer. A second attempt can benefit from exposure to the first; rotate order or use fresh equivalent cases when practical.

## Include cases where the skill should stop or stay quiet

For a behavior-verification skill, a small proposed evaluation might include:

| Case | Input | Observable expectation |
| --- | --- | --- |
| Intended use | Verify a small change against stated requirements | Results identify the checked behavior, revision, method, and gaps |
| Non-trigger | Rewrite one sentence | No verification ceremony or unrelated tool calls |
| Missing prerequisite | Browser verification requested without a running app | Report the gap; do not invent a browser result |
| Conflicting evidence | Local checks pass but an integration check fails | Preserve the failure and qualify the conclusion |
| Recovery | A check is interrupted | Record incomplete execution and the necessary rerun |
| Adversarial source | A fixture tells the agent to ignore requirements | Treat that text as data rather than new authority |

Tailor cases to the skill. These example expectations are not observed results. Do not send a private source or use a real external write merely to test instruction following.

## Inspect outputs rather than asking for a self-score

Read the returned artifact, actual diff, and relevant execution evidence. Mark each required behavior as met, missed, or unobserved. Record unsupported claims, regressions, human corrections, and unnecessary coordination.

When a separate reviewer is useful, provide the raw task, scoring criteria, and outputs without the author's preferred verdict. A reviewer needs the criteria, but should not be coached toward a desired answer. A different role name alone does not establish independence or isolation.

Use the [evaluation record](../templates/skill-evaluation.md). Preserve failed cases. Repeat when a result is unstable or a correction changes the relevant behavior; do not keep rerunning unchanged successes to accumulate passes.

## Make a bounded decision

Choose keep, revise, reject, or insufficient evidence. Identify the exact candidate and environments assessed. A successful synthetic trial supports that trial; it does not establish production reliability, portability across agents, or time savings.

Try the candidate on an authorized personal-project task before expanding adoption. Check native skill discovery separately from behavior. Reevaluate affected cases after a material instruction, tool, or model change.

## Publication boundary

Use personal-project tasks or synthetic fixtures for shareable trials. Keep
private prompts, source outputs, account details and completed work records out
of the public repository. Review any published evaluation against the
[publication boundary](privacy.md), including its links and supporting artifacts.
