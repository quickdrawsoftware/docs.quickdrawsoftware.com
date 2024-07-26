---
sidebar_position: 6
id: usage
---

# Usage Notes

## Handy shortcuts

On the Control server:
* `jitsictl` - Tool for easily administering shards in your cluster
* `restart-meet.sh` - Utility script for rebooting jicofo and prosody on all meet shards. This will force all users to reconnect, so should only be used in emergencies. Requires your EC2 keypair private key at `/root/.ssh/jitsi.pem`.

On the HAProxy servers:
* `watchstick` will open a live view of the current stick table

On the Meet servers:
* `meetstats` will query the statistics endpoint for jicofo on localhost and display the pretty-printed JSON output. Can be useful to inspect the internal state of a particular meet server.

On the JVB servers:
* `jvbstats` will query the statistics endpoint for jitsi-videobridge2 on localhost, and display the pretty-printed JSON output. Can be useful to inspect the internal state of a particular JVB server.

On the TURN server:
* `sudo issue-cert.sh` will issue a Let's Encrypt cert for the TURN domain provided at stack launch, and set it to auto-renew.

Critical logs on each instance are configured with logrotate to compress and archive themselves to the S3 bucket daily, or when the instance is terminated, whichever comes first.

## Jitsictl Usage
The control server has a convenience script called `jitsictl` which lets you easily administer your cluster.

To enable a shard:
`jitsictl <region> enable <shard>`
e.g.
`jitsictl us-east-1 enable 1`

You must then manually set the number of JVB's for the shard (described below)

To disable a shard (automatically sets the JVB's to 0):
`jitsictl <region> disable <shard>`
e.g.
`jitsictl us-east-1 disable 1`

To set the number of JVB's in a shard:
`jitsictl <region> jvb <shard> <number>`
e.g.
`jitsictl us-east-1 jvb 1 10`

Also includes a convenience command to rapidly increase capacity:
`jitsictl <region> max` - enables all shards and sets them to 50 JVB's

## Grafana Usage
Grafana can be accessed on port 3000 of your domain. The default username is `admin` and the default password is the instance-id of the Control instance, accessible as a stack output. Contains a dashboard with a ton of overview metrics on the health of the cluster, collected via telegraf on each instance.
