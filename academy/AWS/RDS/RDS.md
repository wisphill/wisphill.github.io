#aws #rds

RDS: Relational database service, manages DB use SQL as language query.
Databases:
- MySQL/MariaDB
- OracleDB
- PostgreDB
- <mark style="background: #FFB86CA6;">Microsoft SQL server</mark>
- Aurora (AWS Propriertary Database)

### Specifications:
- Because it's managed service so it has (monitoring, backup, auto provisioning, OS pathcing, storage backed by EBS, scaling, multi AZ)
- Cannot SSH into RDS instances

### RDS Storage autoscaling
- RDS will detect if running out of storage, and auto scale it up to limit (maximum threshold)
- Supports for all engines
- Use case: for unpredictable workloads.

### Replica (Only for read)
- With RDS, maximum 5 replica for a master instance.
- Replica can be promoted to the their own database, separated database.
- <mark style="background: #FF5582A6;">It's ASYNC, though reads are eventually consistent.</mark>
- Use case: Heavy analytic
- Network cost: RDS supports multi AZ natively so the cost for inter-AZ is free.

### RDS Multi AZ (Disaster recovery)
- One DNS name, it automatically failovers to the standby instance.
- High availability
- It's SYNC replication.
- We can setup replica for multi AZ for disaster in a region

### RDS From one AZ to multi AZ
- Just update the setting of RDS directly.
- Behind the scene, RDS uses snapshot to achieve that

### RDS Custom
- Allow access via SSH/Session Manager to underlying database and OS to configure settings, install patches
- Full admin access to OS and database.
- The automation mode of RDS will be disabled, so to taking care it, we need to prepare some snapshot.
- Support only for OracleDB and Microsoft SQL server.

### RDS Proxy
It is fully manged database proxy for RBS
- Allow app to pull connections and share DB connections that is already establised.
- Reduce stress to the RDS, resolve the issue there are too much connections to DB.
- Reduce failover up to 66%
- It enforces IAM authentication and requires it.
- Only can connect to RDS Proxy via VPC. Never public accessible.

### RDS Encryption in Data Transit
- Encryption by using SSL/TlS between application and DB instance for extra security.
- <mark style="background: #FFF3A3A6;">Cert is generated and can be downloaded on AWS, use the certificate when connecting to the database.</mark>

### RDS Transfer charge
- Internet fee for data transfering for replicate data between the same AWS Region is 0

### RDS OS Patching
- For the OS updates, it will be performed on the standby instance first, then promoting it to the primary one. After that the old primary instance will become the standby instance.
- <mark style="background: #FFB86CA6;">For modifying database engine (database engine level), the whole instance for RDS multi AZ will be taken down >> it leads to downtime</mark>
- Hardware maintenance is proceeded by AWS, it causes downtime but in a short time.

### Standby
- Backup are taken from standby RDS instance.
- Updates to DB instance is sync between primary and standby