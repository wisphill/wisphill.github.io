#aws #cost #design-cost

### EC2:
- Reversed instance for production
- Service is up and running for x hour -> On-demand

### Ingest data: Spark Streaming vs Kinesis Data Firehose
- Spark Streaming requires more setting up for ingesting data
- Kinesis Firehose is best fit for transforming the data with Lambda than Kinesis data stream

### S3 Stardard Cost compares with S3 Glacier/ OZ/ Standar IA
- Standard requires no minimum duration charge.
- S3 Glacier/ OZ/ Standar IA has minimum duration charge
- In case for long term storage, than 30 days, S3 Glacier/ OZ/ Standar IA is best fit
- Short term storage < x days, Standard Class is more fit.

### S3, EBS, EFS
- S3: 0.02$ per G per month
- EFS: 0.3$ per G per month
- EBS (gp2): 0.1$ per G per provisioned storage


