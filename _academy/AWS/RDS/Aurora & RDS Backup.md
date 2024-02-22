#aws #rds #aurora 

### RDS Backup
- Has automated backup with some short retention, every 5 minutes (from oldest to 5 minutes ago, has delay), full backup of db.
- Manual snapshot: retention based on us.
- We can use snapshot and restore it to use as database if we want to save some cost.
- Can be disabled.

### Aurora Backup
- Automated backup: cannot be disabled, short retention, recover at any point of time
- Snapshot

### Restoring
- Restore RDS/Aurora Backup to new database
- Restore RDS/Aurora Backup from S3 to RDS/Aurora Cluster running MySQL (only for MySQL)

### Aurora Database Cloning
- Only for Aurora
- Faster than snapshot
- It uses the same volume and data with the original one.
- Fast, cost-effective and not impact to the production