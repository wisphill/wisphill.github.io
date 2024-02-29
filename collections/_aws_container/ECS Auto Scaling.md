---
description: This feature allows to scale/increase/decrease number of tasks
layout: post
---

#aws #ecs #scaling #auto

This feature allows to scale/increase/decrease number of tasks

Amazon ECS auto scaling (uses AWS Application Auto scaling) based on few metrics:
- CPU
- RAM
- ALB request count

Type of auto scaling
- Based on alarm: Step scaling
- Target tracking: based on CW metric
- Scheduled scaling: based on schedule

### Notes
- Note: ECS Service Auto Scaling (task scaling) ### EC2 Auto Scaling (Scaling number of instances)
- Fargate is more easier for auto scaling

### Auto scaling for EC2 Launch Type
- Using ASG and using metrics and scale instances
- ECS Cluster Capacity Provider
  - Auto scale instances if RAM or CPU is missing
  - Scale infrastructure for ECS task

![[Drawing 2023-02-12 23.02.49.excalidraw | 600x400]]

### Some solution architecture
- Using with EventBridge for data processing
- Using ECS with ASG to handling for SQS message if the number of messages is growth over time.
