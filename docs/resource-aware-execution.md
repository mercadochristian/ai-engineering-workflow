# Schedule heavy work on a constrained laptop

AI tools can start several builds, browser suites, and local services at once. On a small machine, this can make development less responsive and results harder to interpret.

This is a conservative scheduling procedure. It is not an operating-system resource controller or a benchmark of a particular laptop.

Use this procedure when a performance issue is observed or the owner requests
resource diagnosis or scheduling. Routine tasks need no hardware inventory or
monitoring.

## Observe before tuning

Identify the actual execution host. Read only the observations relevant to the task: memory pressure, swap trend, CPU activity, free disk space, and known development workloads. Avoid exporting full process arguments or container environments; they can contain private data.

Use a baseline and a later observation around the expensive phase. Free memory alone is not a reliable admission rule. Historical swap usage alone does not establish current pressure. Missing observations mean the state is unknown.

Ask whether the machine is responsive for the owner. A process finishing successfully does not establish that the laptop remained usable.

## Start with conservative concurrency

Use one heavy foreground build or test workload at a time when resources are constrained. Start browser suites with low supported worker concurrency and adjust after observing behavior. These are starting choices, not universal performance claims.

Keep services needed by the test running. A database supporting a test is a dependency, not another disposable foreground job. Identify who started each service and whether another task relies on it.

If multiple tools are active, coordinate the same workload budget. Separate agent limits do not enforce a machine-wide limit. A cooperative queue or lock only coordinates commands that actually use it; it does not control unrelated terminals or detached processes. This guide supplies no queue implementation.

## Respond to pressure without losing evidence

Defer new heavy work when repeated observations and responsiveness indicate pressure. Lower concurrency for the next run where supported. Let a safe phase finish when practical.

Cancel only work whose ownership and interruption behavior are understood, preferably through the owning tool. A process name or reused process identifier is insufficient proof of ownership. Do not stop a shared service, prune containers, delete volumes, or change persistent system settings as an automatic response to lag.

Record interrupted checks as incomplete and preserve the required rerun. Resource limits change scheduling, not the behavior that must be verified.

## Evaluate a tuning proposal

Record the exact change, prior setting, rollback, and comparable workload. Compare runtime, failures, resource observations, and owner-reported responsiveness. Keep uncontrolled differences visible. One faster run does not establish a generally better configuration.

Use the existing task checkpoint for observations and pending work. A separate monitoring system is unnecessary for a small task.

For publication, follow the [publication boundary](privacy.md). This AI-assisted
guide describes a proposed procedure; see [AI use and evidence](ai-use-and-evidence.md)
for the limits of the repository's claims.
