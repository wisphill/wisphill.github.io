---
description: ASG is the feature of EC2 and it will help to scale in/out number of EC2 instances based on load.
layout: post
---

#aws #asg 
ASG is the feature of EC2 and it will help to scale in/out number of EC2 instances based on load.

### ASG can:
- Decrease/increase number of instances.
- Ensure min/max instances.
- Auto register the instances to the load balancer.

### Auto Scaling Group Atrributes:
- A Launch Template
  - AMI + Instance Type
  - EC2 User Data
  - EBS
  - SG
  - SSH Key Pair
  - IAm role
  - Network & Subnets
  - LB (most important)
- Min/Max Capacity
- Scaling Policies

We can trigger scaling ASG with CloudWatch Metric by using average CPU ultilization metric of all instances.