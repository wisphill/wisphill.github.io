---
description: "Use case: Enrich streaming data by executing quering and add to the output"
layout: post
---
#aws #analytics #flink #kinesis_data_analytic 

### Main diagram
![[Drawing 2023-03-03 18.26.12.excalidraw |660]]

### Kinesis Data Analytic
It is real time analytic using SQL
Its input: Kinesis Data Stream or Firehose
Use case: Enrich streaming data by executing quering and add to the output
Output: Kinesis Data Stream or Firehose


### Kinesis Data Analytic for Apache Flink
Query language: Use Flink (Java, Scala, SQL) for processing data
Its input: Kinesis Data Stream or MSK
We can run Flink app on managed cluster on AWS

### Use cases
- Real time dashboard
- Real time analytics
- Time-series analytics

