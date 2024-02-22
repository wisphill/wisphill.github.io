#aws #s3 #s3_transfer_acceleration #s3_tier_level #s3_analytic_storage_class #s3_to_s3

## Specifications
- S3 delivers a strong read-after-write consistency automatically. That means, with any changes on S3 object, it's reflected immediately for any read actions after.

### S3 Transfer Acceleration
- This is S3 feature to speedup content transfers to and from Amazon S3
- Minimize the distance
- Maximize the bandwidth ultilization
- Reduce network variability (AWS global network infra, network optimization)
- NO Feature for cross region replication

### S3 Tier Level
- Standard > Standard IA > Itelligence Tiering > One Zone IA (30 days) > Glacier > Glacier Deep Archive.

### S3 Analytic Storage Class Analysis
- Give recommendations to move the data to the right class.
- Not give recommendations for transition to Glacier and One Zone IA

### S3 migration to another S3 solutions
- Sync command to another S3
- S3 Batch Replication

### S3 Batch Replication
- Replicate in the batch
- Cross region supported

### Features
- S3 Versioning
- S3 MFA Delete: Require MFA to delete S3 objects

### S3 Versioning
- S3 bucket has 3 states: unversioned, versioning-enabled, versioning-suspended.
- One time S3 versioning is enabled, it cannot be turned off.

### S3 Object Retaining with Version
- We can explicitly apply versioning for S3 objects or implecitly set Retain Until Date by using S3 default setting
- S3 will set the Retain Until Date in object metadata of each S3 object version and keep it until the date.
- Each S3 object verion can have separately a Retaining date.

### S3 Fetch Bytes
- Issue a S3 byte range request to fetch the S3 object metadata. It will save the time for crawling data.