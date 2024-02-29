#aws #ec2 #purchase #options #renting

### On demand
- Pay for what we use
- Highest cost, no upfront payment
- Recommend for short term solution.

### Reversed Instances
- Pay for reservation period, 1-n years
- Reserve a specific instance attributes (Type, Region, Tenancy, OS)
- Payment options: No upfront (+), partial upfront, all upfront/
- Up to 72% discount compared to On-demand
- Recommend for steady state usage application like database. We usually use it.
- Can sell those instance if you do not use it anymore on Marketplace

### Saving Plan
- Long-term usage, so discount up to 72$ (same as RIs)
- Commit the pricing (for ex. 10$ for 3 years)
- Usage beyond EC2 Saving Plan will be charged at full rate like EC2 On-Demand. So we need to carefully when estimate the pricing.
- Locked to a specific instance family and specific region. (e.g. M5 in us-east-1), then we can flexible to switch across other instance type, OS, **Tenancy (Host, Instance, Default).**

	Compute Saving Plan: For Lambda and AWS Fargate
	EC2 Saving Plan: For EC2


### Spot Intances
- Discount up to 90%
- Most cost-effecient instance in AWS
- Can lose intance if your max price is less than current spot price. Need to bid and keep the price
- Recomment for workload that are resilent to failure (some jobs, data analysis, image processing, distributed workload, etc...)
- Not suitable for database and critical workload, <mark style="background: #FFF3A3A6;">not good for development env without uninterruption confirmation</mark>

### Dedicated Host
- Rent a physical server with EC2 instance capacity fully dedicate to the use case.
- Use-case: A compliance requirement with software licencese for the server. Licence model for example is BYOL
- Purchase option: On-demand  or reserved for 1-3 years.
- Most expensive

### Dedicated Instance
- Share hardware for other instances in the same account | Run application on single tenant hardware
- Own a instance on our own hardware (then access to physical server and setup instance at the lowest level).
- So -> No control for instance placement. It's automatically by AWS.


### EC2 Capacity Reservations
- Reverse a On-Demand Instance capacity in a specific AZ for any duration
- We can cancel or create reservation anytime we want.
- Charge at On-Demand rate, no discount
- Recommend for short-term, uninterrupted workload and in specific AZ
- To get some discount, we can combine it with reserve instance or saving plan.


