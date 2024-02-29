---
description: In orders from top to bottom, EC2 Auto Scaling will terminate
layout: post
---

#aws #asg #termination

In orders from top to bottom, EC2 Auto Scaling will terminate

1. Instance with On-demand >> Spot (purchase options)
2. Oldest launch configuration >> launch template
3. Instance that is closest to the next billing hour