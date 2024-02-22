#aws #iam #organization

AWS Organization is an organization that can include lots of AWS accounts and it has some benefits
- Share aggregated usage (EC2, S3)
- Consolidated billing management
- Manage multiple accounts
- Shared reserved instances and Saving Plan discount across accounts

### Advantages
- Multi account and one account for multi VPCs
- Tagging standard for billing
- Centralize log
- Cross account role for admin purpose

### SCP
- Apply to OU and accounts
- Do not apply to management account
- Do not allow anything by default (must have an explicit allow)
- <mark style="background: #FFB86CA6;">Always all is default, so deny rule is required for every SCP setting approaches </mark>


### Hierarchy
![[Drawing 2023-03-02 17.52.41.excalidraw | 600x300]]

Management account: Full access
Account A: Redshift denied
Account B: Redshift, Lambda denied
Account C: Redshift denied


### Migrate account steps
- Remove account from old org >>> send invite >>> access invite with the new org