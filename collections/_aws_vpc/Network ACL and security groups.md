---
description: Network ACL is kinda similar with the security group, it will help to define and add another layer to allow or deny traffic that comes to the subnet.
layout: post
---

#aws #nacl #sg #security_group #network
https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Security.html#VPC_Security_Comparison

Network ACL is kinda similar with the security group, it will help to define and add another layer to allow or deny traffic that comes to the subnet.

| Network ACL                                                              | Security group                                                                                |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| Operate at subnet level                                                  | Operate at the instance level                                                                 |
| Applied to all intances inside the subnet                                | Applied to one instance if it is associated                                                   |
| Allow and Deny rules                                                     | Allow rules                                                                                   |
| Evalute rules by orders                                                  | Evalute all rule at the same time before traffic can come to the instance                     |
| Stateless: returned traffic only if it's explicitly allowed by all rules | Stateful: return traffic immediately if it is allowed by one rule, and regarless of the rules |
| ACL does the stateless inspection, it checks the package and does not know about the state, where the package comes from                                                                         |  SG does the stateful check, its knows the conversation of the package and states of the package                                                                                             |


![[Drawing 2023-03-25 14.32.59.excalidraw|660]]


