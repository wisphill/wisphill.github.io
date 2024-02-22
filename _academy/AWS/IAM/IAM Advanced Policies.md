#aws #iam #advanced_policies

## IAM Condition (Advanced) 
aws:SourceIP
aws:RequestedRegion
ec2:ResourceTag: restrict based on tag
aws:MultiFactorAuthPresent: require MFA
aws:PrincipalOrgID: restrict based on organization id for resource policies


### IAM for S3
- arn:aws:s3:::test : For bucket level permissions
- arn:aws:s3:::test/* : For object level permissions