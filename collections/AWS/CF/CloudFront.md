#aws #cloudfront 

CF is content delivery network (CDN)

Improve read performance, content is cached at edge locations, it has DDoS feature

### Origins
- S3
  - Distribute file and caching them
  - Security: Origin Access Control
  - CF can be used as an ingress of S3 for uploading file
- Custom Origin
  - ALB, EC2 instance, S3 website (static s3)

### Comparasions
- CF: Global edge network, caching with TTL, for static content
- S3 Cross Region Replication
  - Setup at each region for replica
  - Near real time, so it's for dynamic content, need low-latency to serve

### With ALB, EC2
- If CF integrates with ALB or EC2, it must be public

### Features
- Geo Restriction: Whitelist and Blacklist for regions
- Cache Validation: Invalidate cache on edge locations
- Price Classes: All edge locations, most 200 edge locations, most 100 edge locations.
- Failover automatically with Origin Group: need to set up primary origin and secondary origin.

### Protect resources with CloudFront
- Use signed URL: The url will be unique and so long, so it can be protect the private resource
- Use signed cookies: Provide access to restricted files.
- HTTPS is not used for protecting private resources.



