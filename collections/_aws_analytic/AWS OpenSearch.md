---
description: Amazon Opensearch is a successor to ElasticSearch and commonly to use as a complement to other database. Coupled with DynamoDB
layout: post
---

#aws #analytics #opensearch

Amazon Opensearch is a successor to ElasticSearch and commonly to use as a complement to other database. Coupled with DynamoDB, ...

### Compare with DynamoDB
- DynamoDB can search based on index.
- OpenSearch can search by any field or partially matches.
- It's not serverless, requires cluster to run
- Not using SQL, using it own search language.

### Patterns with DynamoDB
![[Drawing 2023-03-03 17.25.53.excalidraw |600]]


### Log pattern with CW
![[Drawing 2023-03-03 17.31.11.excalidraw|600]]

### With Kinesis and Firehose
Kinesis -> realtime to OpenSearch
Firehose -> near realtime to OpenSearch
