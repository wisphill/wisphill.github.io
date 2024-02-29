---
description: Egress only gateway is the gateway that allows traffic from services that's assigned with ipv6 address to connect to the public internet but prevents access from outside to VPC.
layout: post
---

#egress-only #aws #gateway 

Egress only gateway is the gateway that allows traffic from services that's assigned with ipv6 address to connect to the public internet but prevents access from outside to VPC.

For ipv4 address, we do not need Egress only gateway, we only need a NAT gateway with the same purpose.

### Some characteristics of Egress only gateway
- SG cannot be associated with EIGW, we can use SG to control traffic for the instances.
- We can use network ACL to control traffic come in and out from subnet for which the eigw routes traffics.

