---
description: AWS Network Firewall is a feature to protect traffic at VPC level from level 3 to level 7
layout: post
---

#aws #vpc #network_firewall #firewall

AWS Network Firewall is a feature to protect traffic at VPC level from level 3 to level 7
We can use it for
- Inspect data and flow
- Rules for traffic filtering
- Logs will be sent to S3 for Firehose


### Usage
- **Protect entire the VPC**
- From layer 3 to layer 7 protection
- Any direction, we can inspect:
	VPC to VPC traffic
	Inbound to VPC
	Outbound from VPC
	To/From traffic to DX or Site to Site VPC Connections.
- AWS Network firewall uses AWS Gateway Load Balancer

