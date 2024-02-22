#aws #serverless #dynamodb #dynamo 

### DynamoDB
Serverless NoSQL provided by AWS
- max size of an item: 400kb
- Use case: for rapidly evolving database schemas.

### R/W Capacity Modes
- Provisioned Mode: Good for prod with auto scaling capacity
- On-demand: R/W is auto scaled, for un-predictable workload, steep sudden spikes

### DynamoDB Accerelator (DAX)
| DAX                                               | Redis                       |
| ------------------------------------------------- | --------------------------- |
| Cache simple object, for query and scan the cache | Can cache aggregated result |

### DynamoDB Stream Processing Feature
It's the ordered streaming of modifications of items in DynamoDB. So we can use this feature to react for changes on it.
Use cases:
- React to changes (Realtime)
- Trigger something by using Lambda
- Cross region replication
| DynamoDB Streaming                                 | Kinesis Data Stream (Newer) |
| -------------------------------------------------- | --------------------------- |
| 24 hour retention                                  | 1 year retention            |
| Limited number of consumers                        | Higher consumers            |
| Can process by using Lambda/Stream Kinesis Adapter | More integrations           |

### DynamoDB Global
- Allow to replicate data to multi region
- R/W to any replica in any region
- Must enable DynamoDB Stream as a pre-requisite, because database operations must be enforced in orders.

### DynamoDB TTL
- Delete items after a time.
- Use cases: user sessions, reduce stored data, ...

### DynamoDB Backup and Recovery
- Continuous backup with PITR: 35 days, optional enabled.
- On-demand backup: Long term retention
- E/I with S3: Must enable PITR for exposing to S3 and importing to DynamoDB