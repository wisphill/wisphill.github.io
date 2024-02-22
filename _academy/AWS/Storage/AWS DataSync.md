#aws #storage #datasync

It is the service for move large data from on-premise/another cloud/AWS to AWS (S3, EFS, FSx)
- Require DataSync agent.

### Specifications
- Replication task is scheduled not instantanenous.
- File permissions and metadata are preserved (NFS POSIX, SMB,...)
- Can use it to sync data between other AWS storage services (it will copy file data and metadata)

![[Drawing 2023-03-05 22.55.50.excalidraw |600]]