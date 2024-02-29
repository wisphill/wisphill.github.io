---
description: EMR stands for Elastic MapReduce and it helps for creating Hadoop Cluster for BigData to analyze and process large data.
layout: post
---

#aws #analytics #emr

EMR stands for Elastic MapReduce and it helps for creating Hadoop Cluster for BigData to analyze and process large data.

EMR is bundled with Spark, HBase, Presto, Flink.
EMR cluster can be made of hundred of instances
Support Spot instance.

### Use case: data processing, machine learning, big data.

### Node types
- Master node: Manange cluster, health - requires long running
- Core node: Run task and store data - long running
- Task node: Run task

### Purchase options
- Can use Reserved instance and On-demand for cost-saving and long-running
- Spot instance is suitable for task nodes.