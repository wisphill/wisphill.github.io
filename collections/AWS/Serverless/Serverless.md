#aws #serverless

Serverless is a new paradism in which the developers don't have to manage the servers.

Serverless in AWS: Lambda, DynamoDB, Cognito, API Gateway, S3, SNS & SQS, Kinesis, Aurora Serverless, Step Functions, Fargate

### CloudFront and Serverless Functions
- CloudFront Funtion: lightweight, for customize CDN content (JS code), sub-ms startup time, mil request per sec, execution time (<1ms)
- Lambda at Edge (NodeJS/Python): Thousand req/sec, longer execution time (5-10s). More memory and package size can be bigger.
  
Use cases: 
- CloudFront Function: Cache key normalization, header manipulation, URL rewrite and redirect, authentication, ...
- Lambda at Edge: external processing, use 3rd lib, need more CPU, RAM, longer execution time, access file system.

### Step Functions
- Build serverless visual workflow to orchestrate Lambda functions
- Feature: sequence, paralell, conditions, error handling, timeouts, ...
- Use case: order fulfillment, data processing, web applications, workflow. with human approval.