# Explicit permission fixtures

This is newly written synthetic code using invented entities. It illustrates a
lesson from the [permission case study](../case-studies/02-explicit-permissions.md).
It contains no application code, database, HTTP endpoint, or external integration.

## The invented policy

- A locked document cannot be deleted, including by an administrator.
- An administrator can delete any unlocked document.
- A member can delete their own unlocked document only with an explicit capability.
- Unknown roles are denied, even if supplied a capability.

The tests establish their own actors, permissions, and documents. They cover
capability OFF and ON, ownership, a lock restriction, administrator behavior,
unknown-role denial, and isolation between independently constructed actors.

```sh
python3 -B -m unittest discover -s tests -v
```

## The regression this catches

If a default member starts with no capability, a success test must grant it in
that test's setup. Giving it to an actor in a different test cannot satisfy the
precondition. The denial test ensures that changing defaults to make success
tests pass would break the intended policy.

## Limits

These tests validate only the invented in-memory policy. They do not verify a
framework's permission cache, inherited roles, migrations, database persistence,
an HTTP status, or a browser flow. Those require separate checks in their owning
application. This is a teaching example, not a production authorization library.
