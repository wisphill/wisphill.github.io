#ec2 #ebs #aws 

### EBS
EBS is Elastic Block Store, and it is the network drive and it can be attached to the instance while they run

### Specifications:
1. Persist data even if the instance is terminated.
2. Bound and locked to one AZ. Solution to change AZ is snapshotting it.
3. It's like a network USB stick
4. Have a provision capacity (IOPS, size in GBs)
5. Have a option to control EBS to be deleted when the instance is terminated.

### EBS Snapshot Features:
1. Archive snapshot, and take time to restore it, archive tier is 75% cheaper
2. Recycle Bin to delete a snapshot. Can setup rule to retain it if deletion by accident.
3. Fast snapshot recovery (Lot of money) for quick restore.
4. EBS Snapshot for backup using IO so we should not run it while application is still running with high workload.

### EBS Instance Types
1. gp2/ gp3 ((( General Purpose ))): General purpose SSD, cost effective, and can be used for boot volume. 
   - For gp3: Independendly set the IOPS
   - gp2: IOPS based on the size of volume. Increasing size of volume can perform increasing IOPS
2. io1/ io2: ((( Provisioned IOPS SSD ))) for critial bussiness application, with more than 16000 IOPS. Great for database workload (high perf and consistency). It supports multi attach.
3. st1 /sc1: (( HDD )): Cannot be boot volume: For big data (st1), and infrequently data access (sc1)

### EBS Multi Attach (only for io1/io2 family of EBS)
1. To attach one EBS volume to multiple instances in the (same AZ).
2. Up to max 16 Instances at a time.
3. Use cases: Application handling concurrent write operations, archive higher application availability in clustered application like Teradata. 

### Support encryption by using KMS
1. Transparently, user have nothing to do, just config it.
2. Minimal impact on latency

### Exam
- Convert from gp2 to io1 can increase performance IOPS without increasing EBS size.
