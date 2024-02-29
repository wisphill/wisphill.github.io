---
description: NAT Devices is the device to allow resources in the private subnet to connect to public internet, other VPCs, or on-premise networks
layout: post
---

#aws #vpc #nat 

NAT Devices is the device to allow resources in the private subnet to connect to public internet, other VPCs, or on-premise networks

### 2 Types
- NAT Gateway: Managed NAT device provided by AWS
- NAT Instance: Self-managed NAT device

### Comparisions
| NAT Gateway                   | NAT Device                       |
| ----------------------------- | -------------------------------- |
| Managed by AWS                | Self managed                     |
| Optimized by AWS              | Standard AMI, optimization       |
| HA                            | None                             |
| Has public IP at creation     | Public IP can be changed anytime |
| No SG                         | SG supported                     |
| No port forwarding            | Port forwarding                  |
| Can be used as bastion server | Used as bastion server           |

### Migration to NAT Gateway
- Create NAT Gateway in the same subnet with NAT instance
- Update route table to replace to NAT Gateway
- Use the same public IP with NAT Instance, must disassociate Elastic IP from NAT Instance then creating NAT Gateway with the IP
- Make sure there is no critical service running because the connection will be dropped.

