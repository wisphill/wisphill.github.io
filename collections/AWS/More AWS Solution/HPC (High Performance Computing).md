#aws #more_solution #hpc #high_performance_computing

## Data Management and Transfer
- Direct Connect (DX): Move data to the cloud via private network
- Snowball and Snowmobile: Move PB data to cloud
- Data Sync: Move data between on-premise S3, EFS, FSx for Windows.

### Compute & Networking
- EC2 Instance: Optimize CPU, GPU, Spot Instance for cost saving + Auto Scaling
- EC2 Placement Group: EC2 Server in the same Rack and same AZ for low latency
- EC2 Enhanced Networking: Higher bandwidth
  - ENA (Elastic Network Adapter)
  - Intel 82599 VF
- EFA (Elastic Fabric Adapter)
  - Improved ENA but only for Linux
  - Great for inter-nodes communication, tightly coupled workload like Cluster Placement Group, (Same Rack Same AZ) or AWS ParallelCluster

### Storage
- Instance attached storage: EBS (io1/io2), Instance Store
- Network Storage: S3, EFS, FSx for Lustre (for Linux and Cluster)

### Automation and Orchestration
- AWS Batch: Run multi-node paralell jobs, spread via multiple EC2 instances
- AWS ParallelCluster
  - Open source for cluster management tool to deploy HPC on AWS
  - Enable EFA to improve network performance

