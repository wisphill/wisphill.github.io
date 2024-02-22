#aws #accelerator

The traffic comes from client to the server, it can go though many hops on the internet.

So we can use Global Accerelator to proxy traffic on the edge location, then GA will communicate with our service via stable AWS private network. So the latency will be decreased.

### Unicast IP and Anycast IP
- Unicast: One server one IP
- Anycast: Multiple server hold the same IP address and client will be routed to the nearest one.
- GA uses Anycast, with GA, there are 2 Anycase IP will be created.

### Specifications
- Integrated: ALB, NLB (public/private), Elastic IP, EC2 instances.
- High performance: static IP, lowest latency, fast regional failover, intelligent routing
- Health check for quick failover.
- Security: Shield, whitelisting feature.

### Compare with CF
- Similar: Global network, edge location around the world, Shield for DDoS
- Differences
  - CF: static and cacheable content, dynamic content (dynamic site delivery, API acceleration)
  - GA: Improve performance for application for wide ranges of application (TCP, UDP), and proxy packages to app running in one or more regions.