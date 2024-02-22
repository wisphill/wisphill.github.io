#aws #s3 #encryption #s3_encrypt

### SSE-C
- AES-256
- Customer must to manage encryption key

### SSE-S3
- AES-256
- <mark style="background: #FF5582A6;">AWS managed the encryption key. >> Every objects in the bucket will be encrypted with unique key. Because the key is managed by AWS.</mark>
- Server-side encryption
- No cost

### SSE-KMS
- AES-256
- Costly because of KMS
- Customer managed key on AWS
- Single key encryption.