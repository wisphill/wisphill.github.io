#aws #more_solution #availability 

In the case we have Elastic IP point to Primary EC2 instance

For failover
- Point Elastic IP to Standby EC2 instance
- Can automate by using event/Lambda
- Using ASG to spawn Standby EC2 instance and point Elastic IP
- If EC2 has EBS attached, we can create some EBS snapshot to move EBS to another EC2 AZ within ASG Terminate lifecycle hook.
- EBS is only for one AZ.
- ASG can spawn EC2 on another AZ.


Diagram: WIP

