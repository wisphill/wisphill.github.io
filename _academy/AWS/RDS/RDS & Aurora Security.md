#aws #rds #aurora 

### At-rest encryption
- It is encryting data using KMS, defined KMS at launch time.
- If master is not encryption, RR won't have.
- To encrypt un-encrypted database, let's use snapshot feature.

### In-flight encryption: TLS, it uses AWS root certs
### IAM Authentication for connection string
- RDS/Aurora supports classic username/password
- But it supports IAM as well

### SG
- Controlling access to RDS/Aurora

### No SSH avaiable except RDS Custom

### Audit Log
It can be enabled for some compliance purpose

