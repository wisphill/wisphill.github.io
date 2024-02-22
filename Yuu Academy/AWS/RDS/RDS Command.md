```bash
```sql
aws rds describe-orderable-db-instance-options --engine postgres --engine-version 15.3     --query "*[].{DBInstanceClass:DBInstanceClass,StorageType:StorageType}|[?StorageType=='gp2']|[].{DBInstanceClass:DBInstanceClass}"  --output text  
```
```