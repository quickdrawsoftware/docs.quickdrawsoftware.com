---
sidebar_position: 1
id: overview
---

# Scalable Jitsi Overview

## Overview

This CloudFormation stack deploys a production-ready, scalable, and redundant Jitsi Meet cluster spread across multiple availability zones in a single AWS region. It is built to support many thousands of simultaneous users and comes with built-in logging, monitoring, control scripts, and TURN options for NAT traversal. It can also optionally be configured to use JWT Authentication or a Prosody secure domain to control access. If necessary, the deployment can be easily customized to add/remove specific Jitsi features and add-ons.

## Is this a fit for my use case?

This stack is designed as a standard, unmodified deployment of core Jitsi components. It is meant to provide you with a reliable base from which you can customize, develop your own front-end, tweak configurations, etc. without needing to worry about scaling, redundancy, or high availability.

It is assumed you have a basic understanding of system administration on AWS, and that you understand the basics of Jitsi or want to use this to learn them.

If you need any of the following features or Jitsi add-ons, they are not currently part of this stack, but you can contact us at [support@quickdrawsoftware.com](mailto:support@quickdrawsoftware.com) for a customized deployment:
* Multi-region AWS deployments on a single domain
* Octo configuration for cascading bridges
* Jibri for recording/streaming
* Jigasi for SIP-based phone access
