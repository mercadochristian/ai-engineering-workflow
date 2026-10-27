"""Verify observable permission outcomes with independent, explicit fixtures."""

import unittest

from examples.permission_fixtures import Actor, DELETE_DOCUMENT, Document, can_delete


class PermissionFixtureTests(unittest.TestCase):
    def test_member_without_capability_cannot_delete_own_document(self):
        actor = Actor(actor_id=1, capabilities=frozenset())
        self.assertFalse(can_delete(actor, Document(owner_id=1)))

    def test_member_with_explicit_capability_can_delete_own_document(self):
        actor = Actor(actor_id=1, capabilities=frozenset({DELETE_DOCUMENT}))
        self.assertTrue(can_delete(actor, Document(owner_id=1)))

    def test_capability_does_not_allow_deleting_another_members_document(self):
        actor = Actor(actor_id=1, capabilities=frozenset({DELETE_DOCUMENT}))
        self.assertFalse(can_delete(actor, Document(owner_id=2)))

    def test_capability_does_not_override_a_locked_document(self):
        actor = Actor(actor_id=1, capabilities=frozenset({DELETE_DOCUMENT}))
        self.assertFalse(can_delete(actor, Document(owner_id=1, locked=True)))

    def test_administrator_can_delete_another_members_unlocked_document(self):
        actor = Actor(actor_id=1, role="administrator", capabilities=frozenset())
        self.assertTrue(can_delete(actor, Document(owner_id=2)))

    def test_administrator_cannot_delete_a_locked_document(self):
        actor = Actor(actor_id=1, role="administrator", capabilities=frozenset())
        self.assertFalse(can_delete(actor, Document(owner_id=2, locked=True)))

    def test_grant_to_one_actor_does_not_change_a_new_actors_default(self):
        granted = Actor(actor_id=1, capabilities=frozenset({DELETE_DOCUMENT}))
        fresh = Actor(actor_id=1)
        document = Document(owner_id=1)
        self.assertTrue(can_delete(granted, document))
        self.assertFalse(can_delete(fresh, document))

    def test_unknown_role_is_denied_even_with_capability_and_ownership(self):
        actor = Actor(
            actor_id=1, role="unknown", capabilities=frozenset({DELETE_DOCUMENT})
        )
        self.assertFalse(can_delete(actor, Document(owner_id=1)))


if __name__ == "__main__":
    unittest.main()
