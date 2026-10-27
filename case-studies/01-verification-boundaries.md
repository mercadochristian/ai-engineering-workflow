# Case study: checking the actual caller

**Type:** anonymized historical account of private engineering work.
**Public evidence:** the workflow and report template; the original application
and execution artifacts are not published.

## Problem

Confidence in an AI-assisted change broke down when a successful isolated HTTP
check was treated as evidence for a user flow whose normal browser request still
failed. Contract and state-handling issues were found late in review.

## AI contribution

AI helped investigate the change and assess the workflow. Independent AI-assisted
review surfaced issues across the implementation boundaries. Its output was
useful, but the earlier verification claim was broader than its evidence.

## My judgment and correction

I challenged the result because the generated work felt untrustworthy and asked
for an assessment of the process. I then authorized a focused workflow revision:
save agreed requirements, exercise a real caller early, inspect the final diff
and test assumptions, and preserve independent review for consequential work.

The correction was not to add more agents or a longer approval chain. It was to
make the claim match the observation and move an integration check earlier.

## Result and limits

The workflow instructions were revised and synchronized with the installed
copies. Focused document/configuration checks and independent review supported
that update. One optional validator remained unavailable because its parser
dependency was missing; that was disclosed rather than reported as a pass.

This establishes a workflow correction. It does not establish a measured reduction
in defects or prove that the original user flow subsequently succeeded in production.

## What I carry forward

Before calling a change verified, ask: which caller ran, under which conditions,
and what did the result actually establish? A successful variant of a request
cannot replace checking the request the user makes.

Use the [verification report](../templates/verification-report.md) to keep those
boundaries visible.
