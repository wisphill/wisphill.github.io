---
description: "**VPC Flow log is the AWS feature** to allow to capture the traffic informations going to and from the network interfaces in the VPC."
layout: post
---

#vpc #flow_log #flow 
https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs.html

**VPC Flow log is the AWS feature** to allow to capture the traffic informations going to and from the network interfaces in the VPC.

Flow logs can be publised to 
- S3
- Firehose
- Cloudwatch

**Flow can be used to
- Diagnose the issue of the security groups, the clue to find something wrong on SG config
- Check the traffic in and out of the network interface, direction of traffic.
- Monitoring traffic comes in to the instances.

Flow logs can be created for those services
- ELB
- RDS
- ElasticCache
- Redshift
- Workspace
- NATGateway
- Transit Gateway