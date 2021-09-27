---
sidebar_position: 3
id: parameters
---

# Stack Parameters

You'll need to provide the following parameters to the stack at launch:
* `KeyName` - An existing EC2 Key Pair for SSH access.
* `InstanceType` - Instance type to use for the EC2 instances in the stack. For most users, we recommend c5.xlarge as the best balance of cost and performance.
* `LoggingBucketName` - Name for a new S3 bucket to store logs.
* `FQDN` - Domain name that will host the app.
* `SSLCertificate` - Arn of an existing SSL certificate in Amazon Certificate Manager matching the domain name.
* `SSHCIDR` - An IPv4 CIDR block for SSH access to the control instance.
* `JitsiCIDR` - An IPv4 CIDR block for access to Jitsi.
* `EnableTokens` - Whether to enable JWT Token Authorization.
* `GrafanaPassword` - Default admin password for Grafana.
* `SlackWebhook` - URL of a Slack webhook to send Grafana notifications to.
* `MeetPostInstall` - Public URL to a bash script to run post-install on Meet servers.
* `JVBPostInstall` - Public URL to a bash script to run post-install on JVB servers.
* `HaproxyPostInstall` - Public URL to a bash script to run post-install on Haproxy servers.
* `ControlPostInstall` - Public URL to a bash script to run post-install on Control server.
