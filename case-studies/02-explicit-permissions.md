# Case study: making test preconditions explicit

**Type:** anonymized historical account of a private API test correction.
**Public evidence:** an original [synthetic permission example](../examples/README.md),
not the original application or test suite.

## Problem

A permission-default change meant a role no longer automatically received a
capability. Two existing success tests still expected an allowed response without
granting that capability. Investigation also found a permission grant in an
unrelated test, where it could not establish the required precondition.

## AI contribution

AI assisted with reading the affected tests and permission behavior, reproducing
the failures in an isolated database, proposing the setup correction, and running
focused verification. A separate review examined the resulting change.

## My judgment and correction

I required the evidence to agree with the intended setup. A passing count would
not be enough if the grant landed in the wrong test or relied on incidental
seeded permissions.

The fix put explicit grants in the success tests that needed them and removed the
unrelated grant. Existing denial and restriction controls were retained. The
application permission rule did not need to be weakened to restore those tests.

## Result and limits

The affected test class and focused permission controls passed after the correction,
along with relevant static and repository checks. The verification used an
isolated, freshly migrated and seeded database. Independent review found no
actionable issues in the correction.

The full application suite and remote CI were not run as part of that reported
verification. The original private runs cannot be audited through this repository.

## What readers can reproduce

The public example uses invented actors and documents. It shows capability OFF
and ON, ownership and lock restrictions, an administrator case, and fixture
isolation. It has no database or HTTP layer and does not reproduce the original
migrations or integration tests.

The transferable lesson is to make success and denial preconditions explicit
in each intended test, then reconcile the final diff with those preconditions.
