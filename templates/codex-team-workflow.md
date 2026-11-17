# Portable risk-based Codex workflow

This template applies a small, verification-heavy workflow in another Codex
environment. It describes intended behavior; it does not prove that agents,
tools, checks, or model settings are installed or have run. Adapt it to the target
repository's instructions and available tools.

Reading or copying this template grants no implementation, test-execution,
publication, configuration, or external-write authority.

## Choose the task mode

- **Dev:** implement and verify a change; stop at the development handoff.
- **QA:** plan or execute acceptance testing under its own approval rules; do not
  implement product fixes.
- **Full:** complete Dev, then enter QA without collapsing either mode's gates.
- **Investigation, plan, review, or comment only:** perform only that scope.

## Match process to risk

Classify risk from affected behavior and boundaries, not ticket labels or line
count. Repository requirements always remain authoritative.

| Risk | Typical change | Definition and review |
| --- | --- | --- |
| **Low** | Clear, localized established-pattern change with minor, bounded behavior and regression risk | Brief scope and focused verification; no added reviewer by default |
| **Standard** | Ordinary feature or bug work with meaningful behavior or regression risk | Concise task-owner-reviewed spec and one independent behavior/maintainability review |
| **High** | Authorization, tenant or sensitive data; money or data loss; migration; broad contract; novel architecture; difficult recovery; material UI journey | Detailed reviewed spec and every independent perspective implicated by the changed boundaries |

Meaningful behavior or regression risk is at least Standard. Any High trigger
takes precedence. Add a separate security review when a trust boundary changes
and a browser-based UI/UX review when material rendered behavior changes. Use all
review perspectives only when they all apply.

## Roles

The Barista decides what to make and when it's ready to serve. Every coffee on
the menu starts with beans, and in the workflow Beans gives each specialist
the same starting point: the task's goal, boundaries, and evidence. Each
specialist handles a different part of the work. The coffee names are aliases;
adapt them to the agent profiles available in your environment.

| Role | Why the name fits | Responsibility |
| --- | --- | --- |
| **Barista · Human task owner** | Chooses what to brew and decides when it's ready to serve. | Decides material scope, reviews Standard/High specs and QA plans, and authorizes shipping. |
| **Beans · Orchestrator** | The common ingredient behind every brew. | Coordinates scope, approvals, evidence, risk classification, and handoff. |
| **Espresso · Engineer** | The base of many café drinks, like the working implementation the team can build on. | Implements an assigned bounded change and its developer checks. |
| **Ristretto · Independent reviewer** | A concentrated shot, like a review focused on the risks that matter. | Reviews assigned behavior, maintainability, or security risk. |
| **Latte · UI/UX reviewer** | Latte art shows the care that goes into what reaches the customer. | Independently reviews material UI/UX with actual browser evidence. |
| **Double Shot · QA** | A second shot is a reminder to look past the first success. | Plans and runs authorized QA, including failure and recovery where relevant, without changing product code. |
| **Pour Over · Researcher** | A filter and a careful pour, like sifting sources for evidence that answers the question. | Researches a bounded technical uncertainty on demand. |
| **Cold Brew · Resource manager** | A brew that takes time, like observing a slowdown before deciding what to change. | Diagnoses observed resource pressure on demand. |

The **merge owner** merges only after applicable acceptance and checks.

Use a specialist only when separate ownership or an independent perspective adds
value. Give each assignment explicit inputs, outputs, paths, evidence, and allowed
actions. Keep writers disjoint, avoid nested delegation, and preserve others'
work. Use the target environment's supported models; never claim or silently
substitute a model or effort setting without verifying it.

## Dev workflow

1. Read the request, repository instructions, current implementation, affected
   callers, tests, and standards. For a bug, establish the supported trigger and
   failure mechanism; keep an unknown original sequence explicit.
2. Classify risk. Low work can proceed from a clear request plus a brief scope and
   verification note. Standard work needs a concise reviewed spec. High work needs
   a detailed reviewed spec covering failure, recovery, compatibility, and rollout.
3. Implement the smallest complete change in the owning project's established
   patterns. If the supported solution requires a material scope or architecture
   expansion, present the smaller compatible option and tradeoffs before expanding.
4. Verify the actual affected boundary. Run required repository checks and focused
   regression coverage; use HTTP, persistence, browser, queue, or provider evidence
   only where the authorized safe target supports it.
5. Run the review perspectives selected by risk. Fix actionable findings, rerun
   affected checks and reviews, and retain still-valid evidence.
6. Report the candidate, behavior, checks, review verdicts, and gaps. Commit, push,
   and create or update an MR only after explicit shipping authorization.
7. After publication, confirm the remote head/base and inspect the published diff,
   feedback, unresolved threads, and CI. Rerun only checks and review perspectives
   affected by the update. Do not merge, deploy, reply, or resolve threads by
   implication.

Dev-only ends at the applicable development handoff. It does not automatically
authorize acceptance QA.

## QA workflow

1. Derive coverage from the agreed criteria and actual candidate, including
   relevant success, denial, boundary, failure, recovery, and regression paths.
2. Present the plan and explicit preconditions to the task owner. A plan does not
   authorize fixture creation or execution.
3. After execution authorization, prepare safe scoped data and run the approved
   coverage using the project's verified runner and target.
4. Report PASS, FAIL, BLOCKED, and NOT RUN separately with evidence. Compare an
   unexplained failure with a comparable unchanged base before calling it new or
   pre-existing.
5. Return product defects to Dev. Retest the fix and affected regression coverage.
   Do not change product code merely to make QA pass.

QA acceptance, merge, and deployment are separate outcomes. Mark completion only
when the required external milestone is actually confirmed.

## Prefer executable prevention

Fix and verify the current task before changing the workflow. For a severe or
repeated failure whose safeguards are absent or demonstrably ineffective, find
the smallest prevention mechanism in the owning system:

1. remove the failure class through a clearer API or architecture when compatible;
2. encode the invariant in types, schemas, dependency rules, or static checks;
3. detect recurrence with focused automated or runtime tests;
4. use prose for judgment, rationale, and limits that executable checks cannot
   establish.

This is a decision order, not authority to broaden scope. Preserve legitimate
cases and avoid adding another standing instruction when a product safeguard can
enforce the invariant. Missing causal evidence keeps the proposal provisional.

Do not classify or report every correction. Raise a reusable candidate only for
a severe or repeated uncovered failure class. State the evidence, uncertainty,
smallest change, owner, limits, and observable outcome. Candidate acceptance may
authorize independent evaluation; exact persistent-change authorization remains
separate. Do not create automatic memory, tracking, or retrospective work.

## Boundaries

- Match claims to evidence. Static checks, unit tests, HTTP checks, browser
  interactions, provider results, and deployed behavior prove different things.
- Missing safe prerequisites leave affected verification BLOCKED; source reasoning
  does not substitute for runtime or visual evidence.
- Do not install dependencies, start services, change shared data, bypass auth, or
  exercise live external effects without applicable authorization.
- Keep credentials, private evidence, and employer or customer material out of
  public artifacts.
- Keep one durable checkpoint only when continuity needs it; routine progress stays
  in the conversation.
- **Ship** means commit, push, and create or update the MR within explicit authority.
  It never means merge or deployment.

## Example requests

- **Low Dev:** "Correct this localized message using the existing helper. Verify
  the affected state. Do not commit or push."
- **Standard Dev:** "Prepare a concise spec for this ordering bug, then implement
  it after approval and request one independent behavior/maintainability review."
- **High Dev:** "Plan this tenant-authorization fix, including allowed and denied
  preconditions, failure recovery, and separate security review."
- **QA plan only:** "Draft coverage from the criteria and candidate. Do not create
  fixtures or run tests yet."

## Background

The reasoning behind this risk-based revision is documented in
[From “All Code Is Slop (Except Mine)” to a leaner workflow](../docs/lauren-tan-workflow-takeaways.md),
which references Lauren Tan's original talk and states the evaluation limits.
