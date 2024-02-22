#aws #ec2 #hibernate

![[Drawing 2023-02-05 16.14.43.excalidraw |600 x400]]

### EC2/machine states:
- Stop: Data on disk is saved, kept intact on the next start
- Termniated: Data on disk and RAM will be gone
- Hibernated: Keep data on disk, data on RAM will be encrypted and tranferred on disk.

### Starting processes:
- First start: Boot, boot User Data script is run
- Following starts: Boots
- App starts, cache is warmed up.

### Hibernated
- In-memory RAM is preserved. So boot time is faster.
- RAM is written to the disk (EBS). So root EBS volume is required to be encrypted.

### Use cases:
- Process takes long time, and we want to turn it off without losing data and process. Save RAM state.
- Service takes lots of time for starting.

### Some limits
- Support for many instance families.
- Instance RAM size <= 150GB
- Instance size: Not supported for bare metal instances.
- AMI: Support for all OSs.
- Root volume: Must be EBS, not EC2 Instance Store, enough large to save the state.
- Cannot be hibernated more than 60 days.