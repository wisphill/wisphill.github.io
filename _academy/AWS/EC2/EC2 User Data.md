#aws #ec2 #ec2_user_data #user_data

Use EC2 User Data to customize and pre-run some script to reduce the boot time of the instance.
There is no caching feature for Elastic Beantalk

### Specifications:
- By default, run on the first launch of the instance. (not when restarting). So it's only for scripts to set up the instance.
- Execute with root priviledges.
- We can configure to run user-data when booting instance, but it requires MORE effort to implement.