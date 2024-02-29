---
description: AWS Direct Connect (DX) provides a dedicated private connection between remote network to the AWS VPC
layout: post
---
#aws #vpc #direct #connect #direct_connect

AWS Direct Connect (DX) provides a dedicated private connection between remote network to the AWS VPC

We need to setup
- Direct Connection and it is using AWS Direct connect locations
- VGW
- With direct connection we can connect to all public resources (s3) and some private resources (EC2) on the same direct connection.

### Use cases
- Increase bandwidth throughput, has to work with large dataset but we need the cost is lower, because it does go over public internet.
- Data consistent - application using real time data feeds. Because DX is the private connection.
- Hybrid  envs (On premise + Cloud)

### Setup
1. Find a AWS DX Location (AWS page)
2. Register or rent DX endpoints and routers
3. Setup private virtual interface (private VIF)  to access private resources (EC2)
4. Setup public virtual interface (public VIF) to access public resources

![[Drawing 2023-01-14 18.10.57.excalidraw|600x300]]


### Type of DX
- Dedicated: Request to AWS then the request is completed by parter (configuration is fixed for bandwidth, ...)
- Hosted: Completed by AWS parter (configuration is on demand)
- The time to setup DX connection from we request to AWS/partner is always taking longer than one  month, so based on use-case we can decide to choose to implement DX or not.

### Notes
- We can setup DX Connection with on-premise server with multiple VPC in multiple region in just one account **(Note)
- Data going through DX connection is not encrypted, if we need the encryption, we can config the DX Connection by using VPN on top. (extra level of security)

### Resiliency, backup for critical workload
- High resiliency: Multiple backup locations, for each location, we setup one DX connection to AWS.
- Maximum resiliency:  Multiple backup locations, for each location, we setup more than one DX connection to AWS.
![[Drawing 2023-01-14 18.35.19.excalidraw|800x800]]


### Problems about DX Cost
- Setting up another DX Connection for backup can be expensive. So for another solution, we can setup Site to Site VPN Connection between AWS VPC and the remote network as a backup connection.

![[Drawing 2023-01-14 18.43.21.excalidraw|600x250]]

