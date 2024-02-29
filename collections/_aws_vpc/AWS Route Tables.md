---
description: Route tables is a table that helps to define all routes, and determine where the traffic from the subnet or gateway will be directed.
layout: post
---

#aws #route #route_tables

## Route tables
Route tables is a table that helps to define all routes, and determine where the traffic from the subnet or gateway will be directed.

### Concepts

| Concept                     | Description                                                                                                                    |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Main route table            | The default route table inside the VPC. Any subnet that is not associated with any route tables will be controlled by main one |
| Custom route table          | Any route table that is created in the VPC                                                                                     |
| Destination                 | CIDR, ip range                                                                                                                 |
| Target                      | Gateway, eni, connection, ...                                                                                                  |
| Route table association     | Associate between route table and gateway, vpg, subnet, ...                                                                    |
| Subnet route table          | Route table that integrated with subnet                                                                                        |
| Gateway route table         | The one that is integrate with gateway, vpg                                                                                    |
| Local route                 | Default route inside the route table for communication in the VPC                                                              |
| Transit gateway route table | Route table that integrated with transit gateway                                                                               |
| Local gateway route table   | Integrated with Outpost local gateway                                                                                          |
| Edge association            | Route inboud VPC traffic to appliance, like gateway or eni, ex. VPN                                                            |
| Propagation                 | Route is automatically generated (Site2Site VPN for ex)                                                                        |


### Subnet route tables
We use route table to control traffic in the subnet can be directed. Each subnet inside the VPC must be associated with a route table, the default the main table will control it. Subnet has relationship n-1 with a route table.

### Route
A route has the below format: destination and target
| Destination   | target  |
| ------------- | ------- |
| 0.0.0.0/0     | igw-xxx |
| prefix-list-1 | igw-xxx |
Destination can be a CIDR or a prefix list that we can create and group all ip ranges together.

Every route table that is created will have a default route for communication in the VPC. If the VPC has ipv4 CIRD and ipv6 CIDR, so there are 2 default routes.

1. We can add more route in the route table, its destination has be matched with the VPC IP CIDR, the target must be gateway, ...
2. If the route table has multiple route, the traffic will matched with the most specific route.
3. The route ip cannot overlapped with the range 169.254.168.0/22 and fd00:ec2::/32 that is already resered by AWS.
4. You can add middlebox appliance to the routing path

### Main route table
When we create a VPC, the default main route table will be automatically assigned, and default used by a subnet without any route table.

Rules:
1. Main route table cannot be deleted.
2. Route inside can be changed
3. It can be assigned to a subnet though the subnet is implicitly associated with another route table.
4. Cannot set a gateway route table as main
5. Can replace main route table with a subnet route table.

### Custom route table
It can be created manually without any route inside, we can use it to implicitly control the traffic inside the VPC. It only can be deleted if there is no more association.

### Gateway route table
We can associate the route table with a gateway or VGW, so we can control the traffic that comes to the VPC, and route it to the middlebox appliance like security app in the VPC.

Target can be 
1. Local
2. eni of middlebox appliance
3. gateway id

Destination can be
1. Subnet CIDR. It is more specific than VPC CIDR.
2. VPC CIDR.

The route table cannot be associated with gateway route table if 
1. The route table has other route with other target that is not supported, target must be local, gateway id, ...
2. Route table propagation is enabled.
3. The destination range is out of VPC range.

Other rule can considerations
1. Prefix list cannot be a destination
2. Cannot add a CIDR that is out of VPC range as destination.
3. Cannot use gateway route table to control the traffic outside the VPC. For example, traffic that go though transit gateway and to the VGW, so it can control traffic in the same VPC.


### Route priority
It will follow
1. longest prefix match. The most specific destination with be chosen.
2. If the static route and propagrated route is overlapped, the static route will be chosen. 
3. If the static route and propagrated route is identical, the static route is only be chosen if the target is IGW, NAT GW, ENI, Instance ID, Gateway VPC endpoint, VPC peering, Gateway LB endpoint, Transit Gateway. In the case site to site VPN, the propagated route will be chosen.
4. Based on prefix list. 

