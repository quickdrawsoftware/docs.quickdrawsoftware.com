---
sidebar_position: 1
id: overview
---

# Scalable Jitsi Overview

This CloudFormation stack deploys a production-ready, scalable, and redundant Jitsi Meet cluster spread across multiple availability zones in a single AWS region. It is built to support many thousands of simultaneous users and comes with built-in logging, monitoring, and control scripts. It can also optionally be configured to use JWT Authentication to further secure access. If necessary, the deployment can be easily customized to add/remove specific Jitsi features and add-ons.

The topology has 4 redundant "shards" comprised of one Meet server and an arbitrary number of autoscaled videobridge's. They are completely isolated from every other shard, but traffic can fail over to a different shard via HAProxy if a full shard goes down. By default, only one shard is active at launch - for further redundancy or to increase the total load capacity, you can easily activate additional shards.

If you need any of the following features or Jitsi add-ons, contact us at support@quickdrawsoftware.com for a customized deployment:
* Multi-AWS region deployments
* TURN server support for firewall traversal
* Octo configuration for cascading bridges
* Jibri for recording/streaming
* Jigasi for SIP-based phone access
