---
description: Some important notes about the networking cost on AWS
layout: post
---

#aws #cost #network #vpc #networking 

### Incoming traffic
1. Free for incoming traffic coming to EC2 instance, and private traffic between instances.

2. Traffic between AZs, traffic to instance with public IP is more expensive than private IP. So use more private IPs possible for good saving. 

3. Traffic between AZs costs more, so, using same AZ for maximum amount saving. In the case, we have to prepare for failover, we have to use multi AZ to prevent incidents.

4. Inter-region traffic is expensive. 


### Egress traffic
1. Egress traffic costs money, not free, so we keep minimize the egress traffic for good saving

