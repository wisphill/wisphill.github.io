#aws #hpa #design-hpa

### Global Accelerator vs Route53
- Global Accelerator is for UDP, TCP, quick failover
- Route53 has failover feature as well
- If using custom DNS service, Global Accelerator is more fit

### DAX vs ElasticCache Redis
- High availability
- In-memory
- low latency
- Caching
- Power on demand, live leaderboard

### Kinesis Data Stream vs SQS Queue
- BOTH can handle the messages in the order.

### AMI and Snapshot
- AMI is based on underlying Snapshot
- When copying the AMI from region A -> B, another snapshot will be cloned to region B

### Communication application
- Kinesis Data Stream: for real time, record ordering
- KDS is better than SQS for ingestion data

### Instance Store vs EBS/EFS
- For data is replicated across instances, Instance Store is best fit
- For HPC, Instance Store is better

### Peak performance at CPU xx%
- If scaling based on CPU ultilization around xx%, it's target tracking
- If choosing metric + threshold, it's simple and step tracking


### API Gateway Stateful and Stateless
- Stateless HTTP-based, Restful APIs
- Stateful Websocket APIs


### CloudFront n On-Premise server
- Can use CF with custom origin poiting to On-Premise server for optimizing performance

### S3 & Dynamic Website
- Cannot host dynamic website on S3


