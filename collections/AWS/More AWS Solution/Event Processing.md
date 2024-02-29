#aws #event_processing #more_solution

### Event Processing
1. SQS -> try/poll -> Lambda. If failed too many time, send to DLQ
2. SQS FIFO -> try/blocking -> Lambda. If failed too many time, send to DLQ
3. SNS -> async -> Lambda (retries) -> SQS (DLQ) for later processing

### Fanout Pattern
SDK/Application -> SNS -> mulitple SQS/SQS/SQS

### S3 Notifications
1. S3 event -> SQS/SNS/Lambda
2. S3 event -> EventBridge -> AWS integrated services

### Event Bridge for Alerts
1. User -> delete -> DynamoDB -> (log) CloudTrail -> EventBridge -> SNS (for alert)

### External event to AWS
Client -> API Gateway -> Kinesis Data Stream -> Firehose -> S3 (store)
