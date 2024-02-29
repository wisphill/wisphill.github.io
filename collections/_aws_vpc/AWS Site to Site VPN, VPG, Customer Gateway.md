---
description: AWS Site to Site VPC as known as IPsec VPN connection is a way to setup and establish the connection between VPC and other customer resources.
layout: post
---

#aws #vpc #network #networking #site_to_site #customer_gateway #gateway #ip_sec_vpn 

AWS Site to Site VPC as known as IPsec VPN connection is a way to setup and establish the connection between VPC and other customer resources. Customer server can be an on-premise instance like integration with a data center.
The connection between data center for example and our VPC is going through public internet.

So to implement this infra, we need Site to Site VPN. 
The first component is VPG: Virtual Private Gateway

### Virtual Private Gateway
- Setup inside our VPC, is a VPN concentrator on AWS side of the VPN connection.
- VPG is created and need to attach it to the VPC.

### CGW Customer Gateway
- Software application or physical device for VPN connection on customer side
- Can install some software by using AWS software

### Customer Gateway Device (On-Premises) (Notes)
- The customer gateway ip can be public
- If the customer gateway ip is the private, so the customer gateway is configured to use NAT device and that is enabled NAT-T (NAT Traversal) that allow customer gateway to use the public IP address of the NAT devices. If this feature is not enabled, so the connection is one-way and cannot be establised

### Route tables setup for Site to Site VPN
- We need to enable Route Table propagation for VPG, so it will allow VPG to automate to propagate and register routes to routes table. If not, we have to configure the VPC route manually.
- Based on Customer Gateway is supported for Border Gateway Protocol (BGP), if it's supported, so we have to configure for dynamic routing by using route table propagation. If not, we can configure our route table for static routing.

### Security groups
- If we need to ping from customer side to our VPC, we need to setup security group to allow ICMP for ping.

![[Drawing 2023-01-14 16.51.34.excalidraw | 600x400 ]]
