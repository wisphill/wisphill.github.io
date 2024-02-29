---
description: CIDR is **a method** for allocation IP addresses, helpful for defining the ip address range**Classless inter-domain routing**
layout: post
---

#aws #vpc #networking #cidr #ip_address

CIDR is **a method** for allocation IP addresses, helpful for defining the ip address range
**Classless inter-domain routing**

Format: xxx.zz.yy.kk/32

## Components
- Base ip is: xx.xx.xx.xx, include 4 octets. Example: 192.168.0.0
- Subnet mask: define how many bits can change in the ip range
  /32 /26 /24 /16 /8, ....

From CIDR, we can calculate how many ip addresses that we can have based on subnet mask.


**Private CIRDs**
- 10.0.x.x big network range
- 196.168.x.x  home network
- 172.16-31.x.x AWS default VPC

For other CIDR, it's for public ip addresses.