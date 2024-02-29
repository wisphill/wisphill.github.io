---
description: Glue is serverless service for extract, transform, and load (ETL) service.Use for preparing and transforming data for analytics.
layout: post
---
#aws #analytics #glue #emr 

Glue is serverless service for extract, transform, and load (ETL) service.
Use for preparing and transforming data for analytics.
### Integrate with Data warehouse
![[Drawing 2023-03-03 17.49.11.excalidraw|600]]

### Integrate with Athena for analytics
![[Drawing 2023-03-03 17.51.59.excalidraw|600]]

### Glue datalog
It is Glue feature, catalog of datasets. By using crawler to collect table metadata of datasets and set it to datalog for data discovery
![[Drawing 2023-03-03 17.56.12_0.excalidraw|650]]

### Glue features
- Glue Job Bookmarks: Prevent process old data.
- Elastic Views: (Materialized View), leverage a 'virtual' table  to combine and replicate data across multiple datasources using SQL
- DataBrew: Normalization and clean data using pre-built transformation.
- Studio: New GUI
- Glue Streaming ETL: Tranform data, integrated with Kafka, Kinesis data stream, MSK.

### Glue and EMR
- Glue can combined with EMR for big data processing leveraging Spark. We can use Glue for load and transform data then put it into the S3 as results.