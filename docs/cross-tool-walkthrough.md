# Try the same permission task in Codex and Claude Code

This walkthrough uses the [synthetic permission example](../examples/README.md)
to test two skills on the same change. First, diagnose a failing allow-case
test with [`issue-investigation`](../skills/issue-investigation/SKILL.md). Then
verify the fixture correction with
[`behavior-verification`](../skills/behavior-verification/SKILL.md). Codex ran
both stages. Claude Code registered the investigation skill before an expired
OAuth session blocked execution.

## Set up the synthetic task

Use the example code, tests, and skill files from repository revision `db51481`.
Create a disposable Git project per tool and stage so each starts with the same
inputs and a fresh session. The trial used copies of
`examples/permission_fixtures.py` and `tests/test_permission_fixtures.py`, plus a
`POLICY.md` with this rule:

> A member may delete an unlocked document they own only with the explicit
> delete capability. An administrator can delete any unlocked document. Locked
> documents and unknown roles are always denied.

1. For investigation, stage the original test file. In the working copy, change
   the actor in `test_member_with_explicit_capability_can_delete_own_document`
   to `Actor(actor_id=1)`. Leave the policy implementation and other tests as
   they are.
2. For verification, stage the broken test file in a separate copy. Restore the
   explicit capability in the working copy by using
   `Actor(actor_id=1, capabilities=frozenset({DELETE_DOCUMENT}))`. The Git diff
   now shows the fixture correction. A commit is unnecessary for either stage.
3. Install the corresponding skill folder in each project using the
   [project install steps](../skills/README.md#install-in-codex-or-claude-code).
   Allow source inspection and local standard-library tests, with file edits
   disabled. The fixture runs in memory with no app or database setup.

## Give both tools the same task

In Codex, prefix the prompts with `$issue-investigation` and
`$behavior-verification`. In Claude Code, use `/issue-investigation` and
`/behavior-verification`.

**Investigate**

> Investigate this synthetic bug report. A test that expects a member to be
> allowed to delete their own unlocked document now fails. Diagnose the trigger
> and mechanism. Inspect this disposable project and you may run its
> standard-library unittest suite with `python3 -B -m unittest discover -s tests -v`.
> Keep all files unchanged and use no services or external tools. Report the
> evidence, scope, and proposed correction.

**Verify**

> Verify the candidate change in this disposable synthetic project. The index
> contains the broken baseline and the worktree contains the candidate. The
> policy is in `POLICY.md`. Inspect the actual change and run
> `python3 -B -m unittest discover -s tests -v`. Verify the member allow and deny
> cases and that ownership and lock restrictions hold. Keep all files unchanged
> and use no services or external tools. Report actual results, evidence limits,
> and any gaps.

## What happened in the November 12, 2026 trial

| Tool and skill | Skill evidence | Execution and result |
| --- | --- | --- |
| Codex `issue-investigation` | The command trace showed a read of the installed project `SKILL.md` after explicit invocation. | The suite reproduced one failure in eight tests. Codex traced it to the missing explicit grant in the allow-case fixture and proposed restoring the grant. It identified the staged file as a source comparison and reported that only the working copy was run in this stage. |
| Codex `behavior-verification` | The command trace showed a read of the installed project `SKILL.md` after explicit invocation. | Codex ran the staged baseline in memory and reproduced the same single failure. The working-copy suite passed all eight tests. It reported the member allow and deny cases, ownership and lock restrictions, and the other passing controls. |
| Claude Code `issue-investigation` | The normal project startup event listed `issue-investigation` among the registered skills. An earlier attempt with `--restricted` did not list it. | **Blocked.** The OAuth session expired and could not refresh. No skill response, diagnosis, or test execution was observed. |
| Claude Code `behavior-verification` | The skill was copied to the project directory. Registration remains unverified. | **Not run.** The Claude trial stopped at the authentication blocker. |

The runs used Codex CLI `0.167.0-alpha.3.2` with `gpt-6.1-sol` at medium
reasoning effort, and Claude Code `2.1.289` with `claude-opus-5-5` reported at
startup. Codex used fresh, read-only sessions. The normal Claude Code attempt
used project settings, a limited tool list, and no MCP servers. The Codex
command traces showed the requested test execution and the fixture diff remained
intact. The test results cover the in-memory `can_delete` decision. The example
has no browser, HTTP, persistence, or deployed behavior to exercise.

After signing back in to Claude Code, repeat both stages in fresh sessions. Record
skill registration separately from model behavior and test output. This trial
used explicit prompts and one synthetic task. Automatic triggering and behavior
on other projects remain untested.
