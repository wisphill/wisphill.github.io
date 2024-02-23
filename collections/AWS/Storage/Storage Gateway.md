#aws #storage #storage_gateway

Storage Gateway is for hybrid cloud, a gateway between on-premise server and AWS cloud.
Use cases:
- Data migration. synchronization
- Compliance, IT strategy.
- Disaster recovery
- Tiered storage
- Cache and low-latency file access

### Storage Cloud Options
- Block (EBS, Instance Store)
- File (EFS, FSx)
- Object (S3, Glacier)

### Types of Storage Gateway based on Storage Cloud Options
- Volume Gateway ( for Block )
- S3 File Gateway ( for Object)
- FSx File Gateway (for file)
- Tape Gateway (for tape device)

![[Drawing 2023-03-05 22.32.32_0.excalidraw|660]]

### S3 File Gateway
- Installs on-premise and access FS (using NFS, SMB) and connect to the S3 (via Storage Gateway on Cloud)
- Caching feature locally
- Glacier (via Lifecycle Policy)
- SMB has integration with AD for user authentication. 

### FSx File Gateway (Window)
- Caching feature.
- Native access to Amazon FSx for Window File Server
- Window native compatibility (SMB, NTFS, AD)

### Volume Gateway
- For on-premise storage using iSCSI protocol backed by S3 
- Backed by EBS snapshot to restore on-premise volume
- Caching
- Stored volumes: backup to S3 -> then create EBS snapshot. 

### Tape Gateway 
- For on-premise storage using iSCSI VTL protocol backed by S3/Glacier.