---
description: VPC traffic mirroring is a feature/mechanism that allows to capture and inspect network traffic in the VPC.
layout: post
---

#aws #vpc  #mirroring #traffic
https://docs.aws.amazon.com/vpc/latest/mirroring/what-is-traffic-mirroring.html

VPC traffic mirroring is a feature/mechanism that allows to capture and inspect network traffic in the VPC.

The feature can be used to route traffic to the security applications for multiple purposes.
**We can capture traffic:
- from **sources eni**
- and send it to target **network eni** or and ELB.

Source and target can be in the same VPC or in the different VPC (by using VPC Peering feature).

Use cases:
- Content inspectation
- Security
- Troubleshooting

![[Drawing 2023-01-14 15.35.37.excalidraw | 600x400]]

