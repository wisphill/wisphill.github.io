#ec2 #elastic_ip #aws
### Some specifications:
1. Elastic IP is fixed public IP and won't be changed after the instance is restarted or terminated.
2. Max 5 Elastic IP for AWS account and can ask AWS to increase if needed.
3. Try to avoid to use Elastic IP because
   - Not a good practise, poor architectual solution
   - Use random public IP and DNS instead


### Default
1. EC2 machine has a private IP and a public IP for www
2. Cannot SSH to EC2 by using private IP when VPN, because the network is not the same.