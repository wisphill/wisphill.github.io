---
description: Elastic Kubernetes Service
layout: post
---

#aws #container #eks #kubernetes

Elastic Kubernetes Service

### Notes
- Manged Kubernetes by AWS
- It's alternate way for ECS, similar goal with ECS but different API
- EKS supports EC2 for self-managed worker nodes, and Fargate if we want Serverless.
- <mark style="background: #BBFABBA6;">Use case: Moving Kubernetes from on-premise or other cloud to AWS, or moving application from other cloud and needing to install open source software</mark>

## EKS Node Types
### **Managed Node Group**
- Nodes are created and managed by AWS
- Nodes are a part of ASG and managed by EKS
- Supports for on-demand and spot instances.

### **Self-manged Nodes**
- Nodes are created yourself and registered to EKS cluster and managed by ASG
- Supports for on-demand and spot instances.
- Should use prebuild Kubernetes AMI


## Data Volumes for EKS
- We should specify Storage Class for our EKS
- It leverages based on Container Storage Interface compliant driver (CSI) on our Kubernete.

EKS volume supports for
- EBS
- EFS (Only for Fargate)
- Amazon FSx for Lustre
- Amazon FSx for NetApp ONTAP
