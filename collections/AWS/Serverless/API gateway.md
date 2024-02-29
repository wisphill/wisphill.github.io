#aws #serverless #aws-api-gateway #api-gateway #stateful #stateless #full-duplex


### Api Gateway High Level
It's AWS service to proxy request to AWS downstream services like EC2, Lambda.

Integrations
- Lambda
- HTTP: Internal HTTP endpoints on-premise, ALB,...
- AWS Service: Step Functions, SQS

Endpoint types
- Edge-Optimized (default): best for latency in every locations (routing optimization), API Gateway is still placed at a region.
- Regional: For client in one region, can combine with CF
- Private: Must be in the VPC, exposed as VPCe

Security 
- User Authentication: Cognito, IAM, Custom Authorizers
- Custom Domain Name HTTPS


### Stateful and Stateless
- Stateful communication requires server to keep session data like Cookie. 
- API Gateway Restful API is stateless
- API Gateway WebSocket API is stateful full-duplex client server communication

### Full Duplex, Half Duplex, Simplex
- Simplex is the communication that is one way receiver. Like the keyboard.
- Full Duplex is two way sending and receiving data tranmission simultaneously.
- Half Duplex is two way sending and receiving but it takes turn for waiting another side to complete, waiting for some signal from other side before can continue. 