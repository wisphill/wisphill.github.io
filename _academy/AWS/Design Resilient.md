#aws #resilient 

### Lambda vs SNS
- Lambda limit has 1000 concurrency request per AWS account per region
- SNS: has capacity planning

### CloudFront && Global Accelerator Against spike
- CloudFront has more features: caching, edge location against spikes
- CloudFront is best fit

### ASG, min, max, desired
- A schedule action set the min, max, desired sizes to what is specified. If we want to have exact xx instances at a time. schedule action is best fit.
- Range number of instances: max & min
- Exact number of instances: desired

### Aurora Replica promotion mechanism
- Promote highest priority (lowest numbered tier) Tier 1 -> xx
- Largest replica size