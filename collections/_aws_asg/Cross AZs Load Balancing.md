---
description: Cross Zone load balancing is the feature that allows traffic to be distributed to all instances evenly across all instances in all AZs.
layout: post
---

#aws #asg #cross_lb #az #balancing #load_balancer 

Cross Zone load balancing is the feature that allows traffic to be distributed to all instances evenly across all instances in all AZs.

If it is enabled, it can be charged some cost because it's inter-region traffic will be sent from some AZ to another AZ.

### Specifications
ALB:
- Cross Zone feature is enabled by default
- **No additional charges.**

CLB: No additional charges, feature is disabled by default
GWLB, NLB: Disabled, additional charge


![[Drawing 2023-02-13 22.27.45.excalidraw|600x700]]