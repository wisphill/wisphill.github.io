#aws #kms

### KMS key rotation
- KMS has feature for automatic key rotation with key material (cryptographic is secret that is used for encryption operation)
- Rotation time: every year

### Avoid
- Cannot convert existing single-region KMS key to multi-region. This design will ensure the data residency and data sovereignty properties.