#aws #iam #identity_center

AWS Identity Center is AWS Solution for single sign on solution. One login for multiple AWS accounts, business cloud apps, SAML2.0-enabled applications, EC2 Window instances.

### Identity Providers
Identity Center will integrate and get identities from those 
- Builtin feature by Identity Center
- 3rd: OneLogin, Okta,...

### Permission Set
We can define permission set in the Identity Center, then can allow those permissions to access on some resource of AWS.

Then we can assign permission set to specific users.

### Fine-grained permissions and assignments
- Multi account permissions
  - Manage access with AWS Organization
  - Permission Set
- Application assignment: SSO access to multiple application
- Attribute-based access control (ABAC): Based on user attribute (level, title,..) stored in Identity Center Store.

![[Drawing 2023-03-02 21.55.13.excalidraw |600x600]]