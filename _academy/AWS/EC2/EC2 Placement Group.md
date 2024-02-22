#aws #ec2 #placement_group #group #placement

Placement Group is a strategy to define how EC2 instances can be placed in the AWS infrastructure. It is like a mechanism how we group our EC2 instances.

### Few strategies:
- Cluster: it clusters instances in a low-latency group in the single AZ
- Spread: it speads all instances across underlying hardwares.
- Partition: it speads all instances accross many partitions (racks) within a AZ.

### Cluster
All instances in the same Rack and Same AZ
![[Drawing 2023-02-05 15.57.15.excalidraw | 600x300]]

Pros: Great network
Cons: Fail all at the same time
Use case: 
- App with low-latency and need great high-throughput network
- Big Data job to complete it fast

### Spread
Spread all instances to many hardwares in multiple AZs. So if there are 2 instances on 2 hardwares. If one of those hardware fails, it does not impact to other intances.
![[Drawing 2023-02-05 15.52.37.excalidraw | 600x400]]

Pros:
- Reduce risk for simutaneous failure
- Can span app accross AZs
- EC2 on many physical hardwares.
Cons:
- Limit max 7 instace per AZ per one Placement Group. So it limits the size of our application.
Use case:
- Application that need high availability
- Critical application where each instance must be isolated from failure from each other.

### Partition
Spread all instances to many rack (partition) in multiple AZs in same region

![[Drawing 2023-02-05 15.46.47.excalidraw |600x400]]


Specifications:
- Max 7 partition per AZ.
- Instances can be spanned across AZs in the same region
- Upto 100s of EC2 instances.
- Instance in a rack does not share hardware physical rack with other instances in another racks.
- Failure in a partition is isolated from other partitions.
- We can get partition information inside EC2 via metadata.

Use case:
- For application that needs partition aware like Big Data app: Kafka, Hadoop, Cassandra, HDFS, HBase.
