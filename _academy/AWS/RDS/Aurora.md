#aws #rds #aurora

Aurora is a proprietary technology from AWS for optimization and performance, better than RDS.
Supports for: PostgreSQL and MySQL
Storage is scaling same like RDS.

### Replica
- 15 replicas at a moment, replication process is faster.
- Failover is instantaneous, it is high availability native.
- Support for cross region replication

### Specifications
- Self healing
- Auto expanding
- Replication
- Shared storage

### Aurora Cluster, how it works
- One master endpoints, will failover to another instance
- One reader endpoints connects to one of multiple replica (via load balancing)

### Features
- Automatic failover
- Backup and restore.
- Isolation and security 
- Auto patching with zero downtime.
- Restore at any point of time without using backup

### Aurora Custom Endpoints
- Define a subset of Aurora Instances as Custom Endpoint for some specific purpose like heavy analytic requires more powerful machine.
- Reader endpoint usually is ignored after defining custom one.

### Aurora Serverless
- Automated database, instantiation, automated scaling based on actual usage.
- Good for infrequent, unpredict workload
- Use case: Use database only for short time. 
- Pricing based on seconds, so it can be cost-effective.

### Aurora Multi Master
- It's only feature for Aurora.
- Use case: Immediately failover for write node (HA). Normally, it takes short time to failover if we do not use this feature.
- Every node has W/R and can be promoted to new master.

### Global Aurora
- Aurora cross region replica: For simple disaster recovery
- Aurora Global Database: 1 primary region, up to 5 secondary (16 read replica per region), because of multi region so, replica is more faster, decreasing latency.

### Aurora ML
- Aurora integrates with ML services (SageMaker, Comprehend)
- Just provide some SQL query and those service will returns some result for us based on its predictions
- Use cases: ads targeting, fraud detection, product recommendations, sentiment analytic