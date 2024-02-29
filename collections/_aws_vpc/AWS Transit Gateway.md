---
description: In the case we have multiple VPCs, and peer them each others, so the network topology will be more complicated. So AWS Transit Gateway allows them to connect together.
layout: post
---

#aws #vpc #transit #transit_gateway

In the case we have multiple VPCs, and peer them each others, so the network topology will be more complicated. So AWS Transit Gateway allows them to connect together.

### Some specifications:
- Transitive peering between thousands of VPC and on-premises, hub and spoke connection.
- Work cross-region
- Share Transit Gateway cross account by using RAM (Resource Access Manager) (*)
- Can peer transit gateways cross accounts
- Can limit what VPC can talk to what VPC by configuring Route Tables
- Work with DX gateway, VPN connections
- It it only service in AWS that supports IP Multicast

![[Drawing 2023-01-21 20.14.15.excalidraw|600x400]]



## Use cases

### Transit Gateway: Site to Site VPN ECMP
- ECMP: Equal cost multiple path routing
- It is routing strategy to allow to forward a package over multiple best path. **(Noted)**
- Use case: Create multiple Site to Site VPN connections to increase the bandwidth.
![[Drawing 2023-01-21 20.21.23.excalidraw | 600x400]]

### Share DX Connect between multiple accounts

Share a DX connection between multiple account and multiple VPCs

![[Drawing 2023-01-21 20.34.39.excalidraw|600x400]]
