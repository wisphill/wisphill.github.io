#aws #ec2 #sg #security_group 

Security group is the fundamental of network in AWS, it is kinda like a firewall and control inbound and outbound traffic to EC2 instances

### Specifications:
1. Can specify to allow ips or other security group ids
2. Relationship n-n with instance
3. Bound to region/VPC
4. Inbound is blocked by default, outbound is allowed by default.

### Few ports to remember
1. 80
2. 443
3. 22
4. 21: FTP
5. 22: SFTP
6. 3389: Like SSH but for Window (Remote Desktop Protocol)