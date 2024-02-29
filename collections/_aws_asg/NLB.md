---
description: NLB is the network load balancer and it will handle for scaling at Layer 4 of network (Network)
layout: post
---

#aws #asg #nlb

NLB is the network load balancer and it will handle for scaling at Layer 4 of network (Network)

### Specifications
- Forward TCP and UDP requests
- High performance (up to millions of requests per sec)
- Less latency than ALB
- One static IP per AZ, supports for assigning Elastic IP

### Targets
- EC2 Instances
- Private IPs
- ALB (for additional NLB feature like Elastic IP)
- Health check (supports for HTTP/S, TCP)