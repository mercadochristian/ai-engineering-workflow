# Shareable engineering skills

Five standalone, product-neutral adaptations of engineering workflows. They do
not require a particular issue tracker, application stack, agent team, or another
skill in this collection.

| Skill | Use it for | Example request |
| --- | --- | --- |
| [Project onboarding](project-onboarding/SKILL.md) | Finding owning sources, development commands, and verification boundaries | Use $project-onboarding to map this repository for an upcoming API change. |
| [Behavior verification](behavior-verification/SKILL.md) | Checking changed behavior and reporting evidence and gaps | Use $behavior-verification to verify this change against its acceptance criteria on the isolated local test target. |
| [QA test plan](qa-test-plan/SKILL.md) | Creating manual scenarios or reconciling supplied results against a plan | Use $qa-test-plan to draft a manual plan from this issue and diff. |
| [Work context brief](work-context-brief/SKILL.md) | Reconstructing supported task state, decisions and pending work | Use $work-context-brief to check whether this proposed action happened and identify the next supported step. |
| [Work update](work-update/SKILL.md) | Drafting progress, blocker or handoff updates from evidence | Use $work-update to summarize these results with failed and unrun coverage visible. |

## Use the skills

Copy an individual skill folder, including its `SKILL.md`, into the skill location
supported by your coding agent. Follow that environment's installation and
discovery instructions. Keep each skill in its own folder and inspect any existing
folder with the same name before copying; do not overwrite a customized skill.
No installation script, third-party package, or external service is required by
the skill files themselves. Actual project checks may have their own prerequisites.

You can also read the Markdown directly and adapt the procedure to your workflow.
Repository requirements and the user's authorized scope still apply. Installing a
skill does not authorize testing, setup, publication, or other external actions.

These are portable adaptations, not exports of private configuration. Static
validation checks structure and portability; it does not establish behavioral
quality across different projects or coding agents.

Use the [evaluation guide](../docs/skill-evaluation.md) for representative trials.
The [candidate list](../docs/skill-candidates.md) describes future ideas separately
from the five included skills.
