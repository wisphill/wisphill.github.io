#aws #ec2 

### Elastic Compute Cloud is the EC2, 
with EC2 we can
1. Renting EC2 virtual machine (Linux, Window, ...)
2. Store data on EBS (Virtual Drive)
3. Scaling service by using ASG
4. Distribute load, and balance across machines. (ELB)

### OS: Win, Linux, MacOS

### Configurations: 
1. RAM, CPU
2. Storage space: EC2 Instance Store, Network store (EBS, EFS)
3. Network: speed, public IP
4. Firewall: SG
5. Bootstrap script at first launch, it is called as EC2 User Data, run once when starting machine. And every commands in the script will be run at root mode with sudo.
6. Based on what we need for configurations, we will use it as information to choose instance type.

