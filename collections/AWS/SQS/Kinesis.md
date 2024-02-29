#aws #kinesis #data_stream #firehose #sqs 

Kinesis data stream for real-time streaming for ingest
Kinesis firehose is for loading stream to the storage

### Comparisions
| Kinesis data stream                                             | Firehose                                                        |
| ------------------------------------------------------------------ | --------------------------------------------------------------- |
| Using for streaming service for ingestion at scale                 | Load stream data to the storage (S3, Redshift) or even HTTP API |
| Need to write custom code for processing data (producer, consumer) | Fully managed by AWS                                            |
| Real time  (few miliseconds)                                       | Near real time  (60s delay)                                     |
| Manage scaling (shards), more shard, more speed                    | Automatically scaling                                           |
| Data storage (1-365 days)                                          | No data storage                                                 |
| Replay capacity (because it has storage)                           | No replay capacity                                              |

### Data stream and ordering
It uses shards for streaming service, more shards, it has more speed because it is parallellnism. Also, we can have multiple producer and multiple consumers and interact with multiple shards.

Data comes to the data stream has the format (partition_id and blob). All data has the same partition_id will going to the same shards, so the data will be ordered.

### Kinesis ordering compares with SQS FIFO
Both Kinesis and SQS FIFO has the same purpose, and similar mechanism. If Kinesis has partition_id. SQS messages has group_id, so all messages with the same group_id will go to the one consumer.

Based on situation and speed, we can choose between Kinesis or SQS FIFO.

### Features
Kinesis has advanced fan-out pattern, so it has high throughput for reading data, so it is suitable for big data, ETL, analytics.

### Kinesis Data Stream with Firehose
- When Kinesis Data Stream is configured with Firehose as a datasource, that firehore cannot be put the data by using SDK and API. PutRecord, PutRecordBatch is disabled on Firehose, data must be added to Kinesis Data Stream.