# Investigate an issue when the cause is unknown

A useful investigation can start with a symptom and a source link. The reporter
does not need to identify the faulty component or propose a fix first. The
published workflow already calls for establishing the trigger and mechanism;
this guide makes that work easier to perform and review.

This AI-assisted guide proposes a reusable procedure. The example below is
synthetic; it is not an incident report or evidence of a confirmed diagnosis.
See [AI use and evidence](ai-use-and-evidence.md) for the repository's evidence
boundaries.

## Establish what is known

Read the report, relevant requirements, current implementation, affected callers
and available observations. Record expected behavior, observed behavior, affected
revision/environment and reproduction clues. Label reporter statements, direct
observations, hypotheses and unknowns separately. Code describes implementation;
it does not settle a disputed product requirement.

Use the [investigation record](../templates/investigation-record.md) when durable
notes will help. A small issue may need only a concise answer in the conversation.
Retrieve discoverable facts before asking the reporter to repeat them. Ask only
for a missing fact or decision that materially affects the investigation.

## Reproduce within the authorized scope

Attempt the original sequence when it is known and the target, access, fixtures
and side effects are understood. Prefer disposable local or test data. Record
what actually ran and its result. Reading code or collecting a test is not a
reproduction. If the sequence is unknown, test a supported failure mechanism and
keep the original incident reproduction unverified.

A read-only investigation does not authorize record changes, service startup,
database resets, deployments or external provider calls. If reproduction needs
an action outside the current scope, identify that exact prerequisite and
continue independent source analysis. Do not weaken permissions or tests to
create the appearance of a successful reproduction.

## Compare plausible explanations

State a small set of evidence-backed hypotheses. For each, identify an observation
that would distinguish it from alternatives. Prefer a focused check over a broad
rewrite. Record which observations support, contradict or leave it unresolved.

For example, an invented report says a form hangs after Save:

| Hypothesis | Distinguishing evidence to seek |
| --- | --- |
| The server rejects the save | The actual request receives a supported rejection response from the server, and an independent read confirms the change was not persisted |
| The save succeeds but the UI remains busy | The request and independent read succeed while the normal caller does not finish its loading state |
| The test waits for an unrelated signal | The user flow finishes, but the test's completion condition does not correspond to that flow |

These are candidate checks, not assumed endpoints, status codes or findings.
Confirm the actual contracts before executing them. A timeout alone cannot
distinguish these explanations and does not justify increasing the wait.

## Explain the causal mechanism

A useful root-cause account connects the triggering conditions, owning code or
configuration, mechanism and observed failure. Explain why the evidence favors
that account and what remains uncertain. Distinguish the cause from a symptom,
an immediate workaround and a proposed permanent fix.

Before calling a failure a regression or pre-existing, compare an unchanged base
under comparable inputs and environment when feasible. Otherwise leave its
origin unknown. Do not claim a complete impact assessment from a narrow search.
Identify confirmed affected scope and plausible risks separately.

## Propose a bounded correction

Describe the smallest change that addresses the supported mechanism, the
behavior it must preserve, relevant failure/boundary cases and verification.
An investigation result can be confirmed, a supported hypothesis or blocked by
specific missing evidence; never fill the root-cause section with invented
certainty. Implementation and its review remain their own authorized work.

A starting request can be brief:

> Investigate this report. We do not know the cause yet. Read the relevant sources,
> distinguish observations from hypotheses, and identify focused checks. Keep the
> first pass read-only. Return the supported cause or remaining uncertainty, likely
> impact, proposed correction and verification needed.

## Publication boundary

Keep private-project reports, source references, logs and completed work records
private. For a public example, use invented entities and data or separately
reviewed evidence from a personal public project, and follow the
[publication boundary](privacy.md). Removing names alone may leave identifying
requirements, timing or operational details.
