---
name: work-context-brief
description: Recover decisions, verified outcomes, pending actions and the next step for a named task from scoped chats and task artifacts. Use for resumption, handoffs or checking whether a discussed action happened.
metadata:
  author: Christian Mercado
---

# Work context brief

Author: [Christian Mercado](https://github.com/mercadochristian).

AI-assisted instructions. Behavioral reliability across agents and projects
remains unverified.

Answer the specific context question or prepare a concise same-objective handoff.
Start from supplied task identifiers, source links and any existing checkpoint.
If no checkpoint exists, use the relevant supplied notes or artifacts.
Read only relevant authorized artifacts and conversations. A title or summary is
a discovery lead, not proof that an action happened. Small status questions need
no new checkpoint or delivery stages.

## Reconstruct supported state

Compare objective, source identity, date/revision and scope. Read the current
owning source through available approved access when the conclusion depends on
present system state. Reuse matching evidence; refresh affected information when
sources changed or conflict. Missing access means unknown, not an empty result.
Do not search unrelated private histories or inspect credentials to fill gaps.

Distinguish requested/proposed, approved, attempted, verified, failed, pending
and unknown states. A draft is not a sent message; proposed subtasks are not
created records; upload acceptance is not completed deployment. Local tests do
not prove deployed behavior. Preserve corrections, incomplete execution and the
identity/status of an operation whose outcome is uncertain.

For a simulation or fresh-start exercise, keep the assumed state explicitly
separate from real history. Never import historical approvals or test results
into the simulated starting point or report its reset as a live issue change.

## Return what changes the next decision

Usually include the goal, verified progress, decisions and supported approval
scope, pending work/gaps and next action, with useful source locations. State
incomplete retrieval if it could change the answer. Separate observation from
inference and historical report. Do not invent revision, approval or operation
identifiers to make the handoff appear complete.

A handoff retains the exact approved scope/revisions, current owned changes,
required pending gates, failures and unrun/manual checks, in-flight operations,
service dependencies, cleanup/restoration and necessary reruns when relevant.
Reuse any existing task checkpoint, supported approval history and valid
authorization within its scope. Independently verify present execution readiness.
Changing tools or coordination mode cannot waive unfinished obligations.

Preparing a brief executes no pending action and grants no new permission. Do
not send messages, modify records, retry operations, start monitoring or launch
another tool as a side effect. Filter detail for the audience; broader disclosure
of private context needs applicable authorization. Return privately in chat by
default unless a different destination was authorized.
