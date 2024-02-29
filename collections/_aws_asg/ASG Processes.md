---
description: All ASG processes
layout: post
---

#aws #asg #process #standby 

### Type of process
- Health check
- Launch 
- Add to load balancer
- Alarm
- AZRebalance
- Instance refresh: For refresh and updating new instances managed by ASG if there is some new LaunchConfiguration or LaunchTemplate
- ReplaceUnhealthy
- ScheduledActions: For automatic scaling by predictive scaling.
- Alarm Notification: For dynamic scaling policies when setting up with CW metrics.
- Terminated


### Considerations
- Can suspend individual process.
- Suspend Alarm Notification: Then simple, target, step tracking will be stopped as well
- If Launch, Terminate, AZRebalance is suspended, then making some changes on ASG like detaching instance or changing AZ, then turning those processes again, ASG will process to rebalance those instances between AZs
- Suspend HealthCheck or ReplaceUnhealthy to reboot instance for manual works without replacing instance by ASG