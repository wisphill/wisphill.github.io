---
description: Athena is the serverless query service to analyze data store in Amazon S3
layout: post
---

#aws #analytics #athena #federated #query

Athena is the serverless query service to analyze data store in Amazon S3

### Specifications
- Support SQL
- Data format: CSV, JSON, Parquet, ORC, Arvo
- Commonly used with Quicksight for integration for reporting

### Use cases
- Reporting, analyze logs, business intelligence
- Analyze data in S3 by using SQL language

### Performance Optimization
- Use columnar data for cost-savings (less-scan): Use Glue for conversion to Apache Parquet or ORC.
- Compress data for small retrievals
- Partition data: Example: s3://athena/flight/2019/10/10 to analyze data on day/month or year.
- Use larger file (>128MB) to minimize overhead

### Athena Federated Query
- <mark style="background: #FF5582A6;">SQL query for analyzing on any datasource (AWS or on-premise) by using Data Source Connector that runs on Lambda function.</mark>

### Athena Federated Query Diagram
![[Drawing 2023-03-03 16.49.52.excalidraw|600]]
