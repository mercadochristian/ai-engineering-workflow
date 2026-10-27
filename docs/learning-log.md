# Learning log

This is a retrospective of practices I have adopted and questions I still want
to evaluate. It is not a chronological training record or a productivity study.

| Experience | Change in practice | Evidence boundary |
| --- | --- | --- |
| A successful isolated request missed the actual caller's failure | Check the real caller early and distinguish each verification boundary | Historical private account; see the verification case study |
| Success tests inherited permissions that were no longer defaults | Establish permission setup in the intended test and retain denial controls | Historical private account; a synthetic version is runnable here |
| Long tasks needed reliable resumption | Reuse one checkpoint and verify source state before continuing | Template and instruction checks do not measure resumption quality |
| More coordination and instructions did not guarantee trustworthy output | Keep focused tasks direct and use bounded specialists where useful | A working practice, not a measured efficiency claim |

## Next experiments

These are proposed work, not completed results or scheduled automations.

1. **Compare task execution approaches.** Use similar bounded tasks to compare
   direct work with delegated work; record rework and acceptance quality as well
   as elapsed effort.
2. **Evaluate checkpoint usefulness.** Resume a task from a compact checkpoint
   and check whether branch, scope, authorization, and failed approaches survive.
3. **Evaluate a tool change on a real constraint.** State the problem with the
   current tool before trying an alternative, then compare observable results.

## Keeping this current

For an update that affects my workflow, read its primary documentation, identify
the practical change, and try it on a safe bounded task before adopting it.
Record what changed and what remains unknown. This is the maintenance approach
I intend to use; it does not mean I have evaluated every recent release.
