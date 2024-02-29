---
description: GWLB is gateway load balance that allows to deploy, scale, and manage fleet of 3rd appliances in AWS.
layout: post
---

#aws #asg #gwlb #gateway 

GWLB is gateway load balance that allows to deploy, scale, and manage fleet of 3rd appliances in AWS.

Handle traffic at Layer 3 (network layer), IP packages.

Use cases: Ingest traffic with 3rd party, firewall, prevention system.
Functions:
- Load balances: Spread traffic across 3rd instances.
- Transparent: All traffic will go to one single entry/exit.

GWLB use GENEVE protocol on the port 6081


### Target groups
- EC2 Instances for 3rd appliances.
- Private IPs

![[Drawing 2023-02-13 21.57.09.excalidraw | 600x500]]