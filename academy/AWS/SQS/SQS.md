#aws #sqs

SQS is AMZ queue, the alternative feature likes RabbitMQ or Kafka. The middleware with a broker.

### Features:
- Multiple producer, multiple consumers
- Low latency, unlimited throughput.
- It has retention for queue message
- Allow consumer to poll messages (max 10 messages at a time for batch processing)
- Encryption (HTTPS, KMS, self client-encryption)
- IAM
- SQS policies (like S3 policies)

### Specifications, best practises:
- Messages can be paralell, we can use EC2 + ASG for scaling to multiple consumers just for processing, and can use CW metric of SQS, based on number of message to scale.
- Can use SQS for decouple service, if the request takes lots of time for processing (like handle the image)

### Message Visibility Timeout
Visibility Timeout is the mechanism of SQS. If a message is already consumed and being proceeded by a consumer, it is not visible to other consumer within a time (default 30s).

Based on our application, we can set the timeout to get fit. The consumer also can call the change timeout api if the consumer knows it still needs more time to process the messsage.

### Long Polling
Optionally keep the connection between consumer and SQS, and wait for the newest message if there is none in the queue.

Long polling is preferable to Short Polling because it can:
- Reduce number of api calls from consumers.
- Increase efficiency and reduce latency of app.
- It can be enabled at SQS or at the consumer SDK config.

### FIFO
This is another type of SQS and it has some features
- First in first out message.
- Exactly-one send capacity (by removing duplicates)
- Because of FIFO, so the throughput is limited than Standard Queue.
- Message is proceeded by orders.

### SQS Queue, + ASG to decouple applications
If we get the timeout issue, need to scale application fast, decoupling, spike workload, it can be a use-case of SQS Queue.

We can put SQS in front of Database (RDS, MongoDB, ...) to just cover write transactions and it will help to prevent losing messages. This is how we use SQS like a buffer to database writes.

