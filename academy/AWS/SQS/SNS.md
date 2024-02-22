#aws #sns #sqs #fanout #fifo

AWS SNS is the service for pub/sub, fire and forget pattern, one producer and many subscriber, similar to (Redis)

### How to publish to SNS
- Topic publish with SDK
- Direct Publish (for mobile app SDK): need platform application and platform endpoint

### Features:
- Encryption (HTTPS, KMS, client managed encryption)
- IAM
- SNS Access Policies (like S3)

### SQS + SNS Fanout Pattern
- Push one message to SNS, receive in all SQS queues as subscribles.
- Full decoupled, no data loss
- SQS allows for: data assistence, delayed processing, retries of work
- Cross-region Delivery

![[Drawing 2023-02-15 23.32.21.excalidraw |600x400]]

### SNS FIFO
It has the same features like SQS FIFO, it has limits, ordering (by groupID), and only SQS FIFO as subscribers

FIFO + Fanout: use case: need fanout, ordering and deduplication 

### SNS Message Filtering
It is the JSON policy that allows SNS to filter messages set to SNS topic's subscriptions.
If subscription does not have that policy, it will receive all message from SNS by default