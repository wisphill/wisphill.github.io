---
description: ECS = Elastic container service. Launch a container on AWS is Launching ECS task on ECS cluster
layout: post
---

#aws #ecs #container 

ECS = Elastic container service
Launch a container on AWS is Launching ECS task on ECS cluster

## ECS Launch Type
### EC2 Launch Type
- We must provision and maintain our infrastructure (EC2 instances)
- In each EC2 Instance, must be launched a ECS agent.
- AWS take care stopping/ starting the container
![[Drawing 2023-02-09 22.54.44.excalidraw | 600x600]]

### Farget Launch Type
It's ECS Serverless, we don't need to manage our infrastructure and server. It's serverless. No EC2 instances to be managed.

What we need is only task definition

For scaling, it is based on CPU and RAM we need and number of tasks we need.

## IAM Role for ECS
EC2 Instance Profile role
- Only used for EC2 Launch Type and provide permission for ECS Agent Docker container.

ECS Task role
- For both EC2 launch type and Fargate
- Defined in the task definition of ECS

![[Drawing 2023-02-09 23.07.36.excalidraw | 600x400]]


## Load Balancer integrations
1. ALB for most use cases
2. NLB for high performance and hight throughput, or pair with PrivateLink
3. ELB Basic, not supported for Fargate and no advanced features.

### Data Volumes
- EFS is only options for ECS
- Work for all launch type
- Task running in any AZ will be shared the same data via EFS file system.
- Fargate with EFS is full serverless. Use case: persistent multi AZ shared storage for all containers.
- Note: S3 cannot be mounted as file system in ECS task.

