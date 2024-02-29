---
description: AWS VPN CloudHub uses an AWS VPC with multiple customer gateways in a setup
layout: post
---

#network #networking #aws #site_to_site #customer_gateway #gateway  #cloudhub #aws #vpc 

AWS VPN CloudHub uses an AWS VPC with multiple customer gateways in a setup.

Few specifications:
- It's the simple hub and spoke model. Hub is VGW, spoke is each CGW.
- Each customer gateway has use unique BGP (Border Gateway Protocol) system number (ASN).
- The AWS VGW will advertise the appropriate route with (BGP prefix) over the VPN connection, then remote network will receive the routing advertisements and can connect to others.
- The ASN for each remote network has to be unique, and the IP ranges is not overlapped.

![[Drawing 2023-01-14 17.12.08.excalidraw | 800x500]]
