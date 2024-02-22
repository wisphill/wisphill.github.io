#aws #iam #evaluation

### IAM permission boundary
It is the advanced feature of IAM, like a boundary. The permission of a role cannot have higher permission that defined in the boundary.

Can combined with SCP.
Usecase: Allow developer to grant permissions themself but not over than SCP.
![[Drawing 2023-03-02 21.30.06_0.excalidraw |600x400]]

### IAM policy evaluation
- Explicit deny
- SCP
- Resource based policy
- Identity based policy
- Boundary
- Session principal/permission checking.