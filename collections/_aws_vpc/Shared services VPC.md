---
description: In the case we want to reduce administrative overhead and the cost while providing shared access to services requires by workloads in each of VPCs, we can use sharedservice VPC
layout: post
---

#aws #vpc #design-vpc #sharedservices

In the case we want to reduce administrative overhead and the cost while providing shared access to services requires by workloads in each of VPCs, we can use sharedservice VPC

### Specifications
- Hub-and-spoke model
- Shared services will be placed on the shared vpc.
- Sharing resource (Directory service, VPC endpoint for example) in the central location will reduce the admin workload, cost, overhead.

Compare with full-meshed VPC
- More better, cost and operational effective

Compare with transit VPC
- Transit VPC is the central VPC by using EC2 VPN instances. It is the sharing access, additional VPC layer to maintain.

Compare with VPCs connected to DX.
- Use case: All VPCs connects to the on-premise network using DX connection and taking time for setting up