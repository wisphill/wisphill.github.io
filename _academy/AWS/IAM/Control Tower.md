#aws #iam #control_tower #guardrail #detective #preventive

It is an easy way to setup and govern a secure and compliant multiple AWS account based on best practises.

AWS Control Tower uses Organization to create accounts and it has some benefits
- Auto setup environments
- Automate ongoing policy management with GuardRail
- Detect policy violation and remediate them
- Monitor via dashboard

### GuardRail
It provides ongoing governance for ControlTower env.
- Preventive GuardRail (it uses SCP for restriction)
- Detective GuardRail (use AWS config) (to detect violation and remediate)

![[Drawing 2023-03-02 22.19.06.excalidraw |600x400]]