#aws #monitoring #tracking #simple_tracking #target_tracking #step_tracking #schedule_tracking #asg

### 4 Type of tracking
- Target tracking: Scaling in or out based on metrics to keep the value around the specificed target (like 40% of CPU ultilization)
- Simple tracking: Scale in or out based when over the boundary 40%
- Step tracking: Like simple, but has multiple steps and thresholds
- Schedule tracking: Scale based on schedule

### Target tracking
- Builtin feature of ASG
- Based on some default metrics, only need to define avg target value.

### Simple tracking and Step tracking
- Build with Cloudwatch based on some custom metrics, needs to choose the metrics and defines threshold with CW.

### Predictive Scaling
- Powered by ML