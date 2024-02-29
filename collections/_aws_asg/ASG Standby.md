---
description: About the ASG standby mode
layout: post
---

#aws #asg #standby

### Instance State

![[Drawing 2023-04-11 18.10.03.excalidraw|660]]

### Health check
- Health check is not performed for the Standby instances.
- If instance is under standby then it is terminated, so health check won't check it. Then if the instance is turned back in service, so health check will work and check it as unhealthy and terminating. Then ASG will replace the instance

### Use cases
- Upgrade and quick maintenance, install patches.
