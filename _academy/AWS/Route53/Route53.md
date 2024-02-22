#aws #route53 

Route53 is a highly available, scalable, fully managed and Authoritative DNS, customer can update DNS records, also it is the Domain Registrar.

### Record
To manage and route traffic for a domain. Each record has
- Domain/subdomain
- Record type: A or AAAA / CNAME / NS
- Value
- Routing policy
- TTL

### Record Type
- A: map a hostname to ipv4
- AAAA: to ipv6
- CNAME: to another hostname, target hostname has to have A / AAAA record. CNAME cannot route to root domain name. (not work for example.com) but can work for (www.example.com)
- NS: Name Servers for Hosted Zone that can response DNS requires to Route53 hosted zone.

### Health check
It checks for public resources, and it can check for
- Monitor endpoint
- Monitor other health checks
- Monitor Cloudwatch Alarms (full control), it checks for alarms stats.

### Type of hosted zone
Hosted zone is a container of records, that defines how to route traffic to a domain and its subdomain
- Private: for VPC traffic. For this type, it requires enabling DNS hostname and DNS support on the VPC.
- Public

### Terms
- CNAME: Point to a hostname. Work for Non-Root domain 
- Alias: Point to a hostname to an AWS resource. Work for Root/Non-Root domain. Cannot set TTL (managed by Route53) 
- TTL: Time to live of a Route53 record, then it will be refreshed
- Health check: Check for public resources

### Routing Policy
- Simple: No health check, simple routing to the resource.
- Geoproximity: Shift traffic from one region to another region by increasing bias. The traffic at the place with higher bias will attrack the traffic.
- Multi values: Routing traffic to multi resources and it can integrate with health check. So it is powerful than simple routing with multi values
- Failover: Routing to primary/secondary resources, and it will prepare for failover.
- Geolocation: Routing based on user country/location.
- Latency: Routing user based on user's gps, to choose which one is fastest.
- Weighted routing: Separate traffic into multi parts to multi resources. It is helpful in the case we need traffic migration

### Domain Registrar & DNS Service
- Domain registrar allows us to register our domain (BigDaddy or Route53)
- DNS Service allows us to manage our DNS record on DNS service. (Route53 as DNS Service Provider)
- Usually they comes together.