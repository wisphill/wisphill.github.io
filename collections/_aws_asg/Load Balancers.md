---
description: Load Balancers are servers that handling to forward traffics across multiple target or downstream services.
layout: post
---

#aws #asg #elb #load_balancer

Load Balancers are servers that handling to forward traffics across multiple target or downstream services. 

### Features
- Spread load across targets
- Expose single endpoint (DNS) for integration.
- Seamlessly hande failures of services by doing health check (Regular check the status of service via some endpoint)
- SSL
- Enforce stickness with cookie
- High availability with AZs
- Separate public and private traffic.

### Types (4)
Load Balancer can be setup as private or public ELB. There are 4 types of ELB
- CLB (deprecated) less features than newest ones.
- ALB (2016) for HTTP, HTTPS and WebSocket
- NLB (2017): TCP, TLS, UDP
- GWLB (2020): Operate at layer 3 of network (Network Layer and IP protocol).

### Notes
- With SG of application, we can congfigure it to allow only traffics that comes from SG of ELB.