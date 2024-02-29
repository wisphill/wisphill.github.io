---
description: AWS Launch template is the similar with Launch Configuration, in that we can specify configuration information like ID of AMI, instance type, SG,...
layout: post
---

#aws #asg #launch_template #launch_configuration #comparisions

AWS Launch template is the similar with Launch Configuration, in that we can specify configuration information like ID of AMI, instance type, SG,...

| Launch Template                                 | Launch Configuration                 |
| ----------------------------------------------- | ------------------------------------ |
| Newest feature, recommend by AWS                | Old feature, not recommeneded by AWS |
| Always picked as solution on exam               |                                      |
| Contain network, security, instance type config | Not have                             |
|                                                 | Limit configuration                  |
| Multi versions                                  | Immutable                            |
| More features beside ASG                        | ASG only                             |
| Support Granulity                               | Does not have                |


