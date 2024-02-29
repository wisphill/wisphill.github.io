---
description: Differences between the interface Endpoint, Gateway Endpoint, GWLB Endpoint
layout: post
---

#aws #vpc #interface-endpoint #vpce #gateway-endpoint #gwlb-endpoint

| Interface Endpoint                                       | Gateway Endpoint                                                    | GWLB Endpoint     |
| -------------------------------------------------------- | ------------------------------------------------------------------- | ----------------- |
| For other services, supports VPCe (with eni, private IP) | For S3 and DynamoDB                                                 | Supports for GWLB |
| Regional, vpce is used in one region                     |                                                                     |                   |
| Can be accessed via VPN, DX, VPC peering                 | Cannot be used beyond VPC scope that the Gateway Endpoint linked to |                   |
| ipv4 TCP only                                            | ipv4 only                                                           | ipv4 only         |


https://tutorialsdojo.com/interface-endpoint-vs-gateway-endpoint-vs-gateway-load-balancer-endpoint/

