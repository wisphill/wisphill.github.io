#aws #database

### Types
- RDBMS: RDS, Aurora, greate for joins
- NoSQL: DynamoDB, ElasticCache, Neptune (graphs), DocumentDB (MongoDB), Keyspace (Cassandra)
- Object Store: S3 / Glacier (backup/archives)
- Data warehouse (SQL Analytic /BI): Redshift, Athena, EMR
- Search: OpenSearch (JSON)
- Graph: Neptune
- Ledger: Amazon Quantum Ledger database
- Timeseries: Amazon Timestream

### Use cases
RDS: Store relational datasets, SQL queries, transactions
Aurora: Same like RDS, but less maintenance, flexibility, more performance, more features.
ElasticCache: Key/value store, frequent read, cache result, data session, no sql.
DynamoDB: Rapid evolve schema, serverless (small doc, max 400kb), distributes serverless cache
S3: Static file, web hosting, key store for big files
DocumentDB: noSQL mongoDB
Nepture: Graph database, recommendation engine, social networking, billion relationship, knowledge graphs Wikipedia
Keyspace (Apache Cassandra): IoT device info, time-series data
QLDB: book for recording financial transactions, history of all the changes over time, immutable like blockchain, no decentralization component, in accordance with financial regulation rules.
Timestream: IOT apps, real time analytic, operational applications