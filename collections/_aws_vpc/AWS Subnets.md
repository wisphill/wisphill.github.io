---
description: "**Subnets is the sub range of the ip addresses**. AWS reserve 5 ip address and cannot be used by EC2 instances"
layout: post
---

#aws #subnets #vpc 

**Subnets is the sub range of the ip addresses**. AWS reserve 5 ip address and cannot be used by EC2 instances

Example: Subnet ranges: 10.1.0.0/24. So
-  10.1.0.0: Network address
-  10.1.0.1: Router
-  10.1.0.2: Mapping to AWS provided DNS
-  10.1.0.3: Future use
-  10.1.0.255: Broadcast ip

Those above ips cannot be used, and already be reserved by AWS.

Based on number of ip addresses, we can calculate to find the suitable subnet. For example, we need 29 ip addresses. So 2^5 - 5 = 27 ip addresses. So the result should be
10.x.0.0/26.

![[Drawing 2023-03-25 14.23.14_0.excalidraw|660]]