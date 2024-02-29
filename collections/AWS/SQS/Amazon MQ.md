#aws #rmq #mq 

Amazon MQ is the managed message broker service for (RabbitMQ and ActiveMQ) to support for protocols: MQTT, AMQP, STOMP, Openwire, WSS.

Use case: Migrate on-premise MQ to the cloud, engineer don't need to rewrite application logic to switch to use SQS or SNS.

### Specifications:
- Amazon MQ run on servers, it is not 'scale' too much, it has failover.
- It should has one active broker on one AZ, and one standby broker on another AZ and mounted to the same EFS. So that's the mechanism to prevent for failover.
- It has features queue (like SQS), and topic (like SNS)