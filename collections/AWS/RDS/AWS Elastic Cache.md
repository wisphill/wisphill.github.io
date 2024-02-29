#aws #elasticcache #redis #memcache

AWS ElasticCache is to get managed Redis or Memcached


### Specifications
1. AWS Redis can do horizontal scaling if its cluster mode is enabled.
2. We can use Elastic Cache (Redis) for caching a key, object like user session or any objects like that, then services can do their logic
3. Mostly, we can use Elastic Cache for reducing CPU workload (compute-intensive), and handle performance for read-heavy application workload.
   => If our application has a CPU ultilization is too much high, we can consider to user Elastic Cache for boosting performance.
4. Elastic Cache is the popular choice for real-time use cases like
   - Caching
   - Session store
   - Gaming (It support for leaderboad feature) (ElasticCache Sorted Set)
   - Geospatial Services
   - Real time Analytic 
   - Queuing
5. Redis Cluster will be scaled if the read request is growing too high.
6. Elastic Cache all nodes in the cluster is in the same region and has some backup inside. So if a node is down, so there is no issue with our cluster, no data is loss. Also, replica node cannot be promoted to primary, we cannot control it and update it to primary node manually.

### Redis and Memcached Comparisions
| Redis                       | Memcached                                  |
| --------------------------- | ------------------------------------------ |
| Multi AZ with auto failover | Sharding, multinode because it uses memory |
| HA (read replica)           | None                                       |
| Data is persistent          | None                                       |
| Backup and restore          | None                                       |
|                             | Multi thread architecture                  |                                            |


### Security
- Only supports IAM authentication for Redis, for others, let's use username/pass
- Redis Auth (password/token) when creating cluster
- IAm polices for accessing Redis API
- Redis: has SG, SSL 
- Memcached: SASL authentication

### Pattern for Elastic Cache
- Lazy Loading: Write to cache when reading (has stale data)
- Write Through: After writing (no stale data)
- Session store: Temporary session (with TTL) to cache
