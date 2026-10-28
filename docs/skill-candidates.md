# Candidate skills for future additions

The [skills index](../skills/README.md) lists the instructions currently included
in this repository. The candidates below are ideas for future development, not
implemented skills, installation instructions or evidence of adoption.

## Beyond engineering

| Candidate | Useful output | Scope for a first version |
| --- | --- | --- |
| Monthly accomplishment report | Outcomes, contributions, blockers and carryover for a selected period | Use supplied notes; preserve dates and attribution and distinguish activity from outcomes. Account integrations can be optional later. |
| Contribution and self-assessment coach | Evidence of work organized against the person's chosen review framework | Draft from supplied evidence; do not invent achievements, ratings or another person's contribution. Keep the person's profile separate. |
| Plan and decision interview | Assumptions, tradeoffs, open decisions and a clarified plan | Read available context before asking questions. Ask only unresolved questions that change the decision; planning does not start execution. |
| Structure-preserving document edits | Requested prose changes with unrelated structure retained | Start with one supported format. Preserve embedded objects and unrelated sections; verify the saved result through appropriate format access. |

Monthly reporting is a practical first candidate because it can operate on
supplied notes without account connections. Include incomplete evidence, shared
contributions, unfinished work and absent outcome measures in evaluation cases.
This is a proposed starting point, not a measured productivity ranking.

Keep monthly reporting and self-assessment as separate triggers. They can share
an evidence format: a monthly report explains a period of work, while a
self-assessment selects evidence against a review framework.

## Engineering and workflow support

| Candidate | Useful output | Scope for a first version |
| --- | --- | --- |
| Behavior specification | Given/When/Then examples linked to requirements, with unresolved rules explicit | Follow the target repository's language and runner capabilities. Keep uncertain requirements outside accepted runnable scenarios. |
| Product and setup assessment | A bounded assessment and proposed changes to skills or agents | Identify the actual product and available access. Test proposed instructions on representative work before adopting them. |
| Reference freshness checking | An authoritative source location, revision and refresh status | Use an explicit source manifest. Handle missing sources, stale data and failed refreshes without inventing current content. |
| Local workload coordination | Controlled starts and recovery for resource-heavy builds and tests | See the [scheduling guidance](resource-aware-execution.md). Any future executable helper needs platform tests and a clear statement of its cooperative limits. |

## Avoid duplicate or unreviewed packages

- Check existing skills before building another onboarding, verification, QA,
  commit-planning or reporting variant. Improve an existing fit where practical.
- Investigation, handoffs, evaluation, measurement and optional coordination
  already have guides in this repository. Turn a guide into a skill only when
  recurring work benefits from explicit triggers and a repeatable procedure.
- Design, test-driven development, documents, spreadsheets, presentations, PDF,
  image and launch-video capabilities may be better obtained from their original
  packages. Verify the exact source, version, license and required notices before
  redistribution; retain attribution.
- Keep organization-specific knowledge, account provisioning and live operational
  adapters in their appropriate environment. Public versions need independently
  shareable inputs and examples.

## Develop a candidate

1. Define one recurring job, its triggers and exclusions, inputs and useful
   output. Start with supplied files or notes where possible.
2. Establish source ownership, permission, attribution and dependencies. Missing
   provenance or proprietary source terms hold direct copying; removing a header
   or rewriting wording does not settle permission. Use independently shareable
   material and an authorized implementation route.
3. Keep personal profiles, account mappings, credentials, filled examples and
   private evidence outside the skill. Make service adapters optional where
   practical and explicit about required access.
4. Review a draft with fictional or independently shareable examples. Test a
   normal request, a non-trigger, missing inputs, ambiguous evidence and a failure
   or recovery case using the [evaluation guide](skill-evaluation.md).
5. Record defects, human corrections and limits before deciding whether to adopt
   it. Publication and installation are separate actions.

These candidates have not been implemented or behaviorally evaluated in this
repository. Their value, portability and maintenance cost need evidence from use.

This AI-assisted list proposes future work; it is not a delivery commitment.
Follow the [publication boundary](privacy.md) for any source material or examples.
