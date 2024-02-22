#aws #ec2 #eni

https://aws.amazon.com/blogs/aws/new-elastic-network-interfaces-in-the-virtual-private-cloud/

ENI is a logical component of VPC definition in the AWS and that presents for a virtual network card.

Sample: ENI (primary ENI) (Eth0) (192.168.0.6)

### Attributes
1. One public IP per ENI
2. One or more SG can be attached to ENI
3. One Elastic IP per private IP in the ENI.
4. One primary private IPv4 and more secondary IPv4
5. A MAC Address for one ENI.


### Specifications:
1. We can create ENI independendly and move it and attach it to EC2 instances for fail over. (Most important for quick solution)
2. Bound to specific AZ