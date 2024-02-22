#aws #iam 

IAM is global service for identity and access management

### Terminologies
- Root account: by default, highest permissions
- Users: can belong to many groups
- Group: Contain users, not other groups
- IAM Policy: JSON Document define permissions that allows/denies to some resource. Statements: (Sid, Effect, Principal, Action, Resource, Condition)

### Features
- MFA
- Access Key
- CLI/SDK supported
- Password policy for created users.

### Other tools
- IAM Security tools
  - IAM Credential Report (account level): Report for all users in your account.
  - IAM Access Advisor (user level): Check user permissions for user