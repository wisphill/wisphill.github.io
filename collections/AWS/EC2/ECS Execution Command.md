#devops #aws #ecs #tip

You need to provide a "Task role" for a Task Definition (this is different than the "Task execution role"). This can be done by first going to IAM

# IAM role creation

1.  IAM > roles > create role
2.  custom trust policy > copy + paste

```json
{ "Version": "2012-10-17", "Statement": [ { "Effect": "Allow", "Principal": { "Service": "ecs-tasks.amazonaws.com" }, "Action": "sts:AssumeRole" } ] }
```

1.  Add permission > Create Policy
2.  JSON > replace YOUR_REGION_HERE & YOUR_ACCOUNT_ID_HERE & CLUSTER_NAME > copy + paste

```json
{ "Version": "2012-10-17", "Statement": [ { "Effect": "Allow", "Action": [ "ssmmessages:CreateControlChannel", "ssmmessages:CreateDataChannel", "ssmmessages:OpenControlChannel", "ssmmessages:OpenDataChannel" ], "Resource": "*" }, { "Effect": "Allow", "Action": [ "logs:DescribeLogGroups" ], "Resource": "*" }, { "Effect": "Allow", "Action": [ "logs:CreateLogStream", "logs:DescribeLogStreams", "logs:PutLogEvents" ], "Resource": "arn:aws:logs:YOUR_REGION_HERE:YOUR_ACCOUNT_ID_HERE:log-group:/aws/ecs/CLUSTER_NAME:*" } ] }
```

1.  Give it a name
2.  go back to Add permissions > search by name > check > Next
3.  Give a role name > create role
4. Make sure enable execute command feature is enabled on the service

# ECS new task

1.  go back to ECS > go to task definition and create a new revision
2.  select your new role for "Task role" (different than "Task execution role") > update Task definition
3.  go to your service > update > ensure revision is set to latest > finish update of the service
4.  current task and it should auto provision your new task with its new role.
5.  try again

# Commands I used to exec in

> enables execute command

```bash
aws ecs update-service --cluster CLUSTER_NAME --service SERVICE_NAME --region REGION --enable-execute-command --force-new-deployment
```

> adds ARN to environment for easier cli. Does assume only 1 task running for the service, otherwise just manually go to ECS and grab arn and set them for your cli

```bash
TASK_ARN=$(aws ecs list-tasks --cluster CLUSTER_NAME --service SERVICE_NAME --region REGION --output text --query 'taskArns[0]')
```

> see the task,

``` bash
aws ecs describe-tasks --cluster CLUSTER_NAME --region REGION --tasks $TASK_ARN
```

> exec in

```bash
aws ecs execute-command --region REGION --cluster CLUSTER_NAME --task $TASK_ARN --container CONTAINER --command "sh" --interactive
```

# Misc

With Linux container, you need to remember to add more ECS task definication configuration to prevent zombie process