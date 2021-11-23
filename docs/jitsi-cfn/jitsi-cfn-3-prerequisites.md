---
sidebar_position: 3
id: prerequisites
---

# Prerequisites

## Requirements

You must perform the following steps before launching the CloudFormation stack:

* Generate an EC2 Keypair in your region to use for SSH access

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html

* Generate an Amazon Certificate Manager SSL Certificate matching the subdomain you want to use (you'll need to input the ARN of the certificate as a parameter):

https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html

* (Optional) Set up a Slack Webhook URL if you want monitoring notifications sent to Slack:

https://api.slack.com/messaging/webhooks

## Recommendations

* Use a separate AWS account - the stack provisions its own VPC, subnets, security groups, and elastic IP's. To avoid conflicts with other pre-existing AWS resources or hitting resource limits, it's strongly recommended you launch the CloudFormation stack in a dedicated AWS account.

* Use a subdomain, not the root/apex domain - to access the deployment, you'll need to create a CNAME pointing to an Elastic Load Balancer's DNS name (not a single IP address). While it is possible to route a root/apex domain to an ELB using ALIAS records in Route 53 or using non-standard DNS entries, it's much, much simpler to use a simple CNAME on a subdomain.
