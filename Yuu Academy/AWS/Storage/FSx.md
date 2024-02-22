#aws #storage #fsx

This is managed 3rd high performance file systems on AWS
4 types
- FSx for Window server
- FSx for Luster (Linux and Cluster)
- FSx for NetApp ONTAP
- FSx for OpenZFS

### FSx for Window
- Can be mounted on both (Window/Linux) EC2 instances
- Compatible with FS: <mark style="background: #FFF3A3A6;">SMB, Window NTFS, Microsoft Distributed File System (DFS), DFSR</mark>

### FSx for Luster
- Large scale computing
- Linux and cluster
- Seamless integration with S3: Read/Write S3 as a filesystem (through FSx)
- High Performance Computing (HPC)

### FSx for NetApp ONTAP
- Compatible with FS: NFS, SMB, iSCSI.
- Work with all OS
- Automatically shrink storage, data-deduplication
- Point-in-tome instantaneous cloning (for testing new workload)

### FSx for OpenZFS
- Compatible with FS: NFS (v3, v4, ...)
- Use case: moving workload running ZFS to cloud
- Work with all OS
- Point-in-tome instantaneous cloning (for testing new workload)

### Deployment Options
- <mark style="background: #D2B3FFA6;">Scratch File System: Not replicated, lower cost, short term</mark>
- Persistent File System: Replicated in one AZ, for sensitive data and long-term processing.