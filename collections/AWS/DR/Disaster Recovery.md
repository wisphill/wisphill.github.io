#aws #disaster_recovery_migrations

Disaster is any event that happens and impacts to the production business or finances, so we have to prepare some DR for it.

### Terminology
- RPO: Recovery Point Objective
- RTO: Recovery Time Objective
- We can use route53 for switching dns for failover

![[Drawing 2023-03-08 23.01.16.excalidraw |600]]

### Faster RTO more money by order
1. Backup and Restore
2. Pilot Light
3. Warm Standby
4. HotSite/MultiSite Approach

### Backup and Restore 
- Scheduling for backup
- Cheap, price based on storage
- High RPO, RTO

### Pilot Light
- Small version of app always runs on the Cloud
- Only for critical core application, database.
- Using replication
- Can use Route53 for failover to the slave/backup one.

### Warm Standby
- Run full system on at minimum scale on the Cloud
- Scale the load if disaster happens

### Multi Site/ Hot Site
- Run full system at both on-premise, cloud
- Most expensive

### AWS Multi Region
- Replication on all Cloud
- Only for cloud application like RDS
- Example: Aurora Global for slave/master with replication and failover if disaster happens