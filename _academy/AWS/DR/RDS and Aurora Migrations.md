#aws #disaster_recovery_migrations #rds #aurora #database_encrypt #encryption 

# MySQL
### RDS MySQL to Aurora MySQL
- Snapshot
- Replication, when the lag is 0, promote replica to master node

### External MySQL to Aurora MySQL
- mysqldumpdata (slower)
- Percona XtraBackup to create snapshot to S3 then restore.

### Or using DMS if both database is up and running

# PostgreSQL
### RDS PostgreSQL to Aurora PostgreSQL
- Snapshot
- Replication, when the lag is 0, promote replica to master node

### External PostgreSQL to Aurora PostgreSQL
- Create backup to S3 then restore

### Or using DMS if both database is up and running


# Integration with DMS and encryption without data loss
- Snapshot the DB instance
- <mark style="background: #FFB86CA6;">Enable DMS for data synchronization between source and destination RDS</mark>
