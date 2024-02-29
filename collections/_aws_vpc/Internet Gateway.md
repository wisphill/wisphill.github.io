---
description: Internet gateway is a VPC component, that is horizontal scaled, that allow connections between VPC and public internet,
layout: post
---

#aws #internet_gateway #gateway #subnets 

https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html

## Internet Gateway
Internet gateway is a VPC component, that is horizontal scaled, that allow connections between VPC and public internet, and because it's scaled, so we don't need to worry about its bandwitdth.

![[Drawing 2023-03-25 14.25.41.excalidraw | 660]]

An internet gateway allows the EC2 instance to connect to the public internet. Similarly, resource  in the public internet can connect back to the EC2 instance if your EC2 instance using Elastic ipv4 or ipv6.


### Misc
If internet gateway performs NAT, so EC2 can only can access to the public internet but resource on internet cannot access back to EC2 because with NAT, EC2 have no specific IPv4 address

With EC2 that's assigned with IPv6, NAT is not needed anymore because IPv6 is always public.

### Public and private subnets
If a subnet is associated with a route table that have a route to an internet gateway, so resource inside can access to public internet, so that subnet is the public subnet. And so on, if subnet does not have any, it's private subnet

