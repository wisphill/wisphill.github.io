#aws #ec2 #spot #fleet #spot_fleet #spot_instance

### Spot Instance
- Discount for saving (90%)
- Define the price and submit Spot Request.
- Stragety: Spot Block, can define the block time (1-6 hours) and the instances cannot be interrupted. Though in some rare solution, our instance may be reclaimed.
- Stragety: Hourly rate we pay based on offers and our capacity.
- Stragety: Define max pricing, if current spot pricing is over our values, our instances will be reclaimed.

### Spot Fleet
- This is the set/pool of spot instances and optional on-demand instances of what is called Fleet.
- Spot Fleet is the feature and it will try to meet our capacity with the price constraints.
  1. We define launch pool:, instance type, OS, Az, ...
  2. Then Spot Fleet will choose some of them and start our instances with lowest price.
- Maximum amount of saving.

Strageties of Spot Fleet.
- lowestPrice: Distribute instances to pool with lowest price (for cost, and short workload)
- Diversified: Distribute to all pools (This stragety is great for availability and long workloads)
- capacityOptimized: Automatic choose the pool based on pricing

### Stopping Spot Request
1. Cancel request
2. Terminate our instances