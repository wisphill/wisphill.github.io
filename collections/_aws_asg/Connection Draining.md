---
description: This features allows ALB to have an amount of time to complete in-flight request before routing to the new instances.
layout: post
---

#aws #asg #drainning #connection #alb 

Feature naming
- Connection Dranning (CLB)
- Deregistration. (ALB, NLB)

This features allows ALB to have an amount of time to complete in-flight request before routing to the new instances.

### Specifications
Deregistration delay time should has the time lower than stopTimeout of instances.

While the instance is drainning, the new request is stopped to send to that instance.

The value can be based on average response time to decide how to set it

