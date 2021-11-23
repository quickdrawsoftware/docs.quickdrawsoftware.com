---
sidebar_position: 4
id: parameters
---

# Stack Parameters

## Parameter Overview
You'll need to provide the following parameters to the stack at launch:
* `KeyName` - An existing EC2 Key Pair for SSH access.
* `InstanceType` - Instance type to use for the EC2 instances in the stack. For most users, we recommend c5.xlarge as the best balance of cost and performance.
* `LoggingBucketName` - Name for a new S3 bucket to store logs.
* `FQDN` - Domain name that will host the app. Strongly recommended to host on a subdomain, e.g meet.example.com
* `SSLCertificate` - Arn of an existing SSL certificate in Amazon Certificate Manager matching the domain name.
* `SSHCIDR` - An IPv4 CIDR block for SSH access to the control instance. Should be 0.0.0.0/0 if you want to access it from everywhere.
* `JitsiCIDR` - An IPv4 CIDR block for access to Jitsi itself. Should be 0.0.0.0/0 if you want it accessible to everyone.
* `EnableTokens` - Whether to enable JWT Token Authorization. No meetings will be accessible without providing the token, which you will need to generate from your own frontend.
* `GrafanaPassword` - Default admin password for accessing the Grafana monitoring infrastructure.
* `SlackWebhook` - URL of a Slack webhook to send Grafana notifications to.
* `MeetPostInstall` - Public URL to a bash script to run post-install on Meet servers.
* `JVBPostInstall` - Public URL to a bash script to run post-install on JVB servers.
* `HaproxyPostInstall` - Public URL to a bash script to run post-install on Haproxy servers.
* `ControlPostInstall` - Public URL to a bash script to run post-install on Control server.

## Launching from the command line

While you can launch the stack from the AWS CloudFormation web interface, for ease of reproducible deployment it's usually easier to launch the stack using the AWS command line tools and a JSON file with your parameters.

You'll need the URL of the latest CloudFormation template file. From the AWS marketplace page for the stack, click "View CloudFormation Template." Find the link for "Download CloudFormation Template", then right-click and copy the URL of the latest version of the template.

To launch the stack, use the latest template URL like:

```bash
aws cloudformation create-stack --region us-east-1 --stack-name jitsi --template-url https://awsmp-fulfillment-cf-templates-prod.s3-external-1.amazonaws.com/4552b5d7-197b-4047-abfe-d9eadfbd79a5/c13a23cdc7e348b39e22adeb2c982128.template --parameters file://parameters.json --capabilities CAPABILITY_NAMED_IAM`
```

The parameters.json file should look like this:
```json
[
    { "ParameterKey": "KeyName", "ParameterValue": "jitsi" },
    { "ParameterKey": "InstanceType", "ParameterValue": "c5.xlarge" },
    { "ParameterKey": "LoggingBucketName", "ParameterValue": "example-jitsi-test-logs" },
    { "ParameterKey": "FQDN", "ParameterValue": "jitsi.example.com" },
    { "ParameterKey": "SSLCertificate", "ParameterValue": "arn:aws:acm:us-east-1:xxxxxxxxxxxx:certificate/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" },
    { "ParameterKey": "SSHCIDR", "ParameterValue": "0.0.0.0/0" },
    { "ParameterKey": "JitsiCIDR", "ParameterValue": "0.0.0.0/0" },
    { "ParameterKey": "EnableTokens", "ParameterValue": "false" },
    { "ParameterKey": "GrafanaPassword", "ParameterValue": "securepassword" },
    { "ParameterKey": "SlackWebhook", "ParameterValue": "" },
    { "ParameterKey": "MeetPostInstall", "ParameterValue": "" },
    { "ParameterKey": "JVBPostInstall", "ParameterValue": "" },
    { "ParameterKey": "HaproxyPostInstall", "ParameterValue": "" },
    { "ParameterKey": "ControlPostInstall", "ParameterValue": "" }
]
```
