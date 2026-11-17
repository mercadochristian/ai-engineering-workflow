# From “All Code Is Slop (Except Mine)” to a leaner workflow

Lauren Tan's talk [“All Code Is Slop (Except Mine)”](https://www.youtube.com/watch?v=O_zcc6Xl12g)
prompted me to re-examine whether my AI engineering workflow was improving code
quality or merely adding ceremony. This page is my interpretation and application
of the talk, not a transcript or an endorsement by the speaker.

## What I took from the talk

The codebase is a larger and more consequential input than a prompt. Agents work
better when the repository exposes clear contracts, consistent patterns, useful
tests, and fast feedback. Repeated corrections should therefore improve the
environment that produces and checks code, not only produce longer instructions.

Verification also belongs inside the implementation loop. A generated change is
not complete because it looks plausible or compiles. The useful question is which
observable boundary changed and what evidence can establish that boundary:
types, static checks, focused tests, HTTP behavior, persisted state, browser
interaction, or another relevant runtime signal.

The talk also reinforced an important limit: automation is safest after the inner
loop is reliable. Faster generation or broader autonomy does not compensate for
unclear requirements, weak tests, unsafe targets, or missing review of consequential
decisions.

## What changed in my workflow

| Before | Current approach |
| --- | --- |
| A substantial spec and several review perspectives for nearly every change | Definition and review effort are selected from the actual behavior and risk |
| Four review perspectives by default | Low-risk work has no added reviewer, Standard work has one behavior/maintainability review, and security or UI/UX review is added only when those boundaries change |
| Repeating broad review after every update | Recheck the published candidate, but rerun only affected checks and review perspectives |
| Learning classification at every handoff | Raise a reusable candidate only for a severe or repeated failure whose safeguards are absent or ineffective |
| More prose as the default response to a mistake | Prefer the smallest compatible API, architecture, type, schema, static check, or focused test that can prevent or detect recurrence |

The portable [risk-based Codex workflow](../templates/codex-team-workflow.md)
contains the resulting Dev and QA procedure. The core routing is:

- **Low:** brief scope, direct implementation, focused verification.
- **Standard:** concise reviewed spec, implementation, verification, and one
  independent behavior/maintainability review.
- **High:** detailed reviewed spec and every independent perspective implicated
  by the actual trust, data, integration, recovery, or UI boundary.

Repository requirements still win. Risk-based routing removes default ceremony;
it does not waive required CI, safe-target checks, QA approval, security review,
browser evidence, or explicit publication authority.

## Prefer executable prevention

When a severe or repeated problem has no effective safeguard, I now consider the
following order:

1. Can the owning API or architecture remove the failure class without an
   incompatible redesign?
2. Can a type, schema, dependency rule, or static check encode the invariant?
3. Can a focused automated or runtime test detect recurrence at the affected
   boundary?
4. What judgment, rationale, or exception still needs prose because a check cannot
   establish it?

This is a decision aid, not permission to expand a task. A work repository's
established architecture and standards remain authoritative. A safeguard should
reject the supported bad case while preserving legitimate behavior.

## What I did not adopt

The talk is an input, not a workflow specification. I did not turn it into blanket
authorization for automatic merge or deployment, removal of human review, bans on
code comments, formal verification for ordinary application work, or unbounded
agent execution. Those choices depend on the repository, risk, evidence, and
explicit authority.

## Evidence boundary

The revised workflow was checked with synthetic Low, Standard, security, UI/UX,
QA-plan, blocked-runtime, learning, and published-update scenarios. An independent
review found the installed routing internally consistent. One real Low-risk setup
maintenance task then used the workflow without a specialist: a stale test-helper
path was corrected and all 24 canonical setup tests passed.

That evidence establishes that the instructions can route those cases and that
one bounded maintenance change completed successfully. It does not establish a
general improvement in delivery speed, cost, token use, defect rate, or production
quality. Those claims require comparable real tasks and retained failed outcomes.

## Reference

- Lauren Tan, [“All Code Is Slop (Except Mine)”](https://www.youtube.com/watch?v=O_zcc6Xl12g), YouTube.
