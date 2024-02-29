---
description: VPC peering is a networking connection between two VPCs, and the traffics between those VPC is private. VPC peering can be created between 2 VPC in the same region of different regions and in another AWS accounts.
layout: post
---

#aws #peering #vpc 

https://docs.aws.amazon.com/vpc/latest/userguide/vpc-peering.html

VPC peering is a networking connection between two VPCs, and the traffics between those VPC is private. VPC peering can be created between 2 VPC in the same region of different regions and in another AWS accounts.

**VPC Peering and AWS Private Link** as a combo
While VPC peering create a private connection between VPCs, AWS Private Link configure instances to expose an endpoint like a front ends. Those can be called as consumers.

Service using inter-region or intra-region VPC peering can access to consumers privately via VPC peering connection.

Some samples of using VPC Peering and AWS Private Link
- Private access to Sass applications
- Hybrid services
- **Shared services** between multiple AWS accounts
- Inter-region endpoint services
- Inter-region access to endpoint services