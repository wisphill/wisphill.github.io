#aws #disaster_recovery_migrations #dms #database_migration

This is service allows database migration from on-premise to AWS cloud, quickly, resilient, self-healing.

### Features
- Homogeneous migration (same type of database), Heterogeneous migration (all database)
- Continuous data migration (database replication). Perform EC2 for replication task

AWS Schema Conversion Tool (SCT) is a tool to convert schema from one engine to another.

![[Drawing 2023-03-07 18.08.56.excalidraw |680]]

### Combinations
- (S3 + DMS + Kinesis Data Stream) S3 can be the source of DMS, and the target of the DMS can be Kinesis Data Stream

### Targets
- RDS/Aurora/Other DB
- Kinesis data stream
- Redshift/Analytics tools