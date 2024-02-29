---
layout: post
description: App are packaged in containers and can be run on any OS. Docker is a software development platform to deploy apps
---

#aws #container #docker

App are packaged in containers and can be run on any OS
Docker is a software development platform to deploy apps
Use cases: Microservice, lift and shift app from on-premise machine to cloud.
![[Drawing 2023-02-09 22.29.59.excalidraw|600x400]]

### Flow
Dockerfile => build => Docker image => push/pull <=> ECR

### Docker container managements
1. ECS (Amazon's own container platform)
2. Fargate  (Amazon's own Serverless container platform) (ECS & EKS)
3. EKS (Amazon's managed Kubernetes)
4. ECR

### VM and Docker containers
![[Drawing 2023-02-09 22.37.50.excalidraw |600x400]]