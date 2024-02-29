---
description: A bastion host is special-purpose computer on a network that is designed and configured to withstand attacks.
layout: post
---

#aws #vpc #bastion_host

A bastion host is special-purpose computer on a network that is designed and configured to withstand attacks.

So, on the AWS infrastructure, we can have
- A bastion host is set up with EC2 in the public subnet and can send request to the our private subnet inside the VPC
- User from public internet can connect or SSH into the private subnet via bastion host as a proxy. 

![[Drawing 2023-03-25 14.18.39.excalidraw|660]]

### Specifications
- On above diagram, user can ssh into private EC2 instances via Bastion Host. So we have to configure the security group on private subnet to allow traffic from some specific IPs or CIDR to reduce risks
- NAT Instance can be configured to be the same instance with Bastion Host.

