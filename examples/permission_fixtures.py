"""Synthetic permission policy; see examples/README.md for rules and limits."""

from dataclasses import dataclass


DELETE_DOCUMENT = "delete_document"


@dataclass(frozen=True)
class Actor:
    actor_id: int
    role: str = "member"
    capabilities: frozenset[str] = frozenset()


@dataclass(frozen=True)
class Document:
    owner_id: int
    locked: bool = False


def can_delete(actor: Actor, document: Document) -> bool:
    """Apply the invented policy without database or external effects."""
    if document.locked:
        return False
    if actor.role == "administrator":
        return True
    return (
        actor.role == "member"
        and DELETE_DOCUMENT in actor.capabilities
        and actor.actor_id == document.owner_id
    )
