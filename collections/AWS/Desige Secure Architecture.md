#aws #secure #design-secure #inspector #aws_inspector

### S3 and KMS
- If someone wants to use S3 for their own encryption key with cloudtrail for tracking, using SSE-KMS

### Aurora
- Can use Aurora Global Database for separated table

### Guard Duty/ Macie 3 mode
- Enable
- Disable: Delete all findings and configurations by AWS
- Suspend: Still keep the finding in AWS Cloud

### S3 Object Retaining with Version
- We can explicitly apply versioning for S3 objects or implecitly set Retain Until Date by using S3 default setting
- S3 will set the Retain Until Date in object metadata of each S3 object version and keep it until the date.
- Each S3 object verion can have separately a Retaining date.

### Amazon Inspector
- Run Inspector to check for unintended network accessibility for EC2 instances and vulnerabiliies. 