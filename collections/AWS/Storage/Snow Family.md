#aws #storage #snow_family #snow

Snow Family is highly secure, portable devices to collect and process data at the edge and migrate data in or out of AWS

# Use cases
- Data migration: Snowcone, Snowball Edge, Snowmobile
- Edge computing: Snowcone, Snowball Edge

|                | Snowcone           | Snowball Edge | Snowmobile |
| -------------- | ------------------ | ------------- | ---------- |
| Storage        | small TB           | huge TB       | PB         |
| Migration Size | Online and Offline | Offline       | Offline    |
| DataSync       | Pre-installed      |               |            |
| Clustering     |                    | 15 nodes      |            |
| Note           | Smallest device    | Medium        | Truck      |

# Edge Computing
This is for pre-processing data while it is being created on an edge location (without internet)
### Snowcone
- Smallest device, but can use it to compute
### Snowball Edge feature
- Storage optimized: Clustering feature, more storage for each node
- Compute optimized: more RAM and vCPU, additional GPU (for pre-processing data if needed)

For those device has edge computing feature, it can run EC2 instances, and AWS Lambda funcion by using (AWS IoT Greengrass). for pre-processing.

### Use cases
- Preprocess
- Machine Learning
- Media encoder (require GPU)
- <mark style="background: #FF5582A6;">Unstable internet connection</mark>

# Snowball
Note: Cannot import directly data from Snowball to Glacier, must via Bucket Lifecycle Policy

# Snow mobile
Just a truck for data migration for company 


# AWS Ops Hub
- An interface console for management Snow dev