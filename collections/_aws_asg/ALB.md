---
description: ALB is application load balancer and it will handle scaling for Layer7 (HTTP)
layout: post
---

#aws #asg #alb

ALB is application load balancer and it will handle scaling for Layer7 (HTTP)

It supports for
- Load balancing to multiple HTTP applications across machine
- Load balancing to multiple applications on the same machine like (ECS, containers)
- Support HTTP/2 and WebSocket
- Support HTTPS redirect.

### Specifications:
- Routing to different target groups based on (header, query string, host header)
- ALB are great fit for microservices, container-based applications
- Has port mapping feature and map to a dynamic port on ECS
- In comparision, with CLB, we need multiple CLB per each application, so ALB is better.

### Target groups can be
- EC2 instances
- ECS tasks
- Lambda function
- IP Adresses - must be private IP (vpce ex.)
- ALB can route to multiple target groups, and health check is at target group level.