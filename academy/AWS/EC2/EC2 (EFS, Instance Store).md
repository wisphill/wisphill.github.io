#ec2 #ebs #efs #instance_store #aws 

### EFS
It is NFS, network file system and can be mounted to multiple EC2 instances.

Specifications:
1. Cross AZ
2. Highly available, scalable, and more expensive than EBS, and pay per use
3. Only compatible with Linux based AMI.
4. Can be encryption using KMS
5. POSIX file system (Linux)
6. Scaling automatically

Use cases:
1. Store content and data

EFS Scale:
1. 1000s of concurrent NFS clients, 10G+ throughput
2. Size is grown automatically

Performance mode (Set at creation time)
1. General: latency sensitive (web server, CMS)
2. Max I/O: highly paralell, highly latency (big data, data processing)

Throughput mode
1. Busting: 1TB = 50MiB/s up to 100MiB/s
2. Provisioned: Set throughput regardless of storage size. Fixed 1GiB/s per 1TB storage
3. Elastic: Automatic scale throughput based on workload

Storage tier (lifecycle management feature - move file to IA after N days):
1. Standard: for frequent accessed files
2. Infrequent: for infrequent  accessed files. (This tier is lower cost)

Availability & durability:
1. Standard: Multi AZs, for prod
2. One Zone: One Zone, For development, compatible with IA (Infrequent acess).

### EC2 Instance Store
It is a ephemeral storage and it is attached directly to the instance, and it is hardware drive.

Specifications:
1. High throughput, best I/O performance
2. Good for buffer and temporary data
3. Risk to lost data if the hardware fails.
4. Backup and replication is the responsibility.

Exam
- Cannot detach instance store and attach it into another instance
- If the AMI is created, the instance store won't be preserved.
- Instance store get reset when stopping, hibernating, terminating instance.
