---
description: "Policies: Target tracking, simple tracking, scheduled and predictive tracking"
layout: post
---

#aws #asg #scaling #policies #tracking 

### Scaling policies
- Target tracking: It based on average ASG CPU like around 40%
- Simple/Step Tracking: If CPU is higher than 70%, add 2 units, if <30%, reduce 1 CPU unit
- Schedule Actions: Scale based on time.
- Predictive Scaling: Using ML behind the scene and periodic what time that needs to be scaled and based on some metrics. 

### Some metrics for scaling:
- CPU
- RequestPerTarget
- Network in/out
- etc, ...

### Specifications:
- There are default cooldown for ASG to stop spawn/terminate instance to get the metrics to be stabilized.
- We can reduce the CD by using ready-to-use AMI for EC2 instance, so the metric will be stabilized as soon as possible.