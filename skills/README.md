# Shareable engineering skills

Standalone engineering workflows for different projects and tech stacks. Each
skill uses the target project's instructions, available tools, and evidence.

| Skill | Use it for | Example request |
| --- | --- | --- |
| [Project onboarding](project-onboarding/SKILL.md) | Finding owning sources, development commands, and verification boundaries | Map this repository for an upcoming API change. |
| [Issue investigation](issue-investigation/SKILL.md) | Tracing a reported bug to a supported cause or a focused next check | Investigate why saving this form hangs. Keep the first pass read-only. |
| [Behavior verification](behavior-verification/SKILL.md) | Checking changed behavior and reporting evidence and gaps | Verify this change against its acceptance criteria on the isolated local test target. |
| [QA test plan](qa-test-plan/SKILL.md) | Creating manual scenarios or reconciling supplied results against a plan | Draft a manual QA plan from this issue and diff. |
| [Work context brief](work-context-brief/SKILL.md) | Reconstructing supported task state, decisions and pending work | Check whether this proposed action happened and identify the next supported step. |
| [Work update](work-update/SKILL.md) | Drafting progress, blocker or handoff updates from evidence | Summarize these results with failed and unrun coverage visible. |

## Install in Codex or Claude Code

1. Clone or download this repository and choose a folder under `skills/`, such
   as `skills/issue-investigation/`.
2. From the root of the project where you want to use it, create the skills
   directory for your tool. Copy the entire chosen folder into that directory,
   including `SKILL.md`. If a folder with that name already exists, compare it
   with your copy before updating it.
3. Open a new session in the target project and invoke the skill with your task.
   The examples below use `issue-investigation`. For another skill, substitute
   its folder name and the relevant request from the table above.

| Tool | Installed file relative to the project root | Example prompt |
| --- | --- | --- |
| Codex | `.agents/skills/issue-investigation/SKILL.md` | `$issue-investigation Investigate why saving this form hangs. Keep the first pass read-only.` |
| Claude Code | `.claude/skills/issue-investigation/SKILL.md` | `/issue-investigation Investigate why saving this form hangs. Keep the first pass read-only.` |

For personal use across local projects, copy the folder into `~/.agents/skills/`
for Codex or `~/.claude/skills/` for Claude Code. See the
[Codex skills documentation](https://developers.openai.com/codex/skills) and
[Claude Code skills documentation](https://code.claude.com/docs/en/skills).

The folders use the [Agent Skills format](https://agentskills.io/specification).
You can also open a `SKILL.md` directly and follow its procedure. The skill files
require no installer or dependencies. Any project checks you run use the target
project's own prerequisites and the scope authorized for the task.

These are portable adaptations, not exports of private configuration. Static
validation checks structure and portability; it does not establish behavioral
quality across different projects or coding agents.

Use the [evaluation guide](../docs/skill-evaluation.md) for representative trials.
The [cross-tool walkthrough](../docs/cross-tool-walkthrough.md) shows how to try
issue investigation and behavior verification on the same synthetic task and
records the observed results.
The [candidate list](../docs/skill-candidates.md) describes future ideas.
