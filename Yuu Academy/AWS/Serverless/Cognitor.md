#aws #serverless #cognito

### Cognito
It the AWS Service to give user identity with the web or mobile application.

### Cognito User Pools
- Sign in functionality for app users.
- Integrate with API Gateway & ALB for user authentication

### Cognito Identity Pools (Federated Identities)
- Provide temporary credential to access AWS resources.
- Can integrate with Cognitor User Pool as an identity provider.

### Cognito Row Level Security in DynamoDB
- Allow user only access on the items that's created by that users. Based on dynamodb:LeadingKeys to detect this condition for any IAM policies.

