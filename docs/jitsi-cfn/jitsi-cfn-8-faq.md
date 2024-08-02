---
sidebar_position: 8
id: faq
---

# Frequently Asked Questions

### Q: How do I SSH to the instances?

A: You have to SSH to the Control instance, then from there SSH to the other instances. For security reasons, all the HAProxy, Meet, JVB, and TURN instances are inside a private subnet and don't have an external IP reachable via SSH. You access the Control instance at the fixed elastic IP for the instance. The username is "ubuntu", and you have to use the private key file of the SSH key pair you provided to the template at launch, AWS doesn't allow password-based access over SSH. Typically this means something like:

`ssh -i ~/privatekey.pem ubuntu@xxx.xxx.xxx.xxx`

Once you're in that instance, you can copy your private key file to e.g. `/root/.ssh/jitsi.pem`, which will enable SSH'ing from the Control instance to the other hosts on their private IP. Make sure to `chmod 600 /root/.ssh/jitsi.pem` or SSH will complain.

So, for example, to SSH to the TURN instance from the Control instance, you would do:

`sudo ssh -i /root/.ssh/jitsi.pem ubuntu@10.0.0.11`

### Q: How do I configure the DNS?

A: Create a CNAME for your subdomain that points to the ELB DNS address provided in the CloudFormation stack outputs. Exactly how to configure the CNAME will depend on your specific domain registrar.

On many registrars, the CNAME will need to have a trailing dot `.` at the end of the ELB DNS address, like `meet.example.com.` - be sure to check with your registrar what format to use.
 
Once the DNS record is created, it will usually take a few minutes for DNS changes to propagate (anywhere from 5m to 24h depending on your registrar). Note that it also takes roughly 5-10m from the time the stack completes provisioning until the services are all available, as various machines boot up (though DNS almost always takes longer, so in practice you won't notice).

If you enabled TURN, you'll also need to create an A record for the TURN domain that points to the TURN server's IP address, which is also provided as a stack output.

### Q: How do I run Jitsi on the root/apex domain?

A: Not recommended, since CNAME's are invalid for a root/apex domain, but if you're set on it, you can use one of these approaches:

1) Launch the stack on a subdomain (and set a CNAME for e.g. meet.example.com), and use a web server hosted elsewhere to redirect the top-level domain to the subdomain with a standard 301 redirect

2) Do the same, but use an S3 bucket and a static hosting bucket (or a CloudFront distribution) to handle the same basic redirect idea, e.g.:

https://stackoverflow.com/questions/22053472/how-do-i-redirect-a-naked-apex-domain-to-www-using-route-53

3) Switch your nameservers to point the whole domain at AWS Route53 instead, so you can use Amazon's Hosted Zone feature to configure an ALIAS record instead of a CNAME:

https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-choosing-alias-non-alias.html

4) Use a third-party DNS service like DNSimple to handle the redirects for you

### Q: How do I use JWT authentication?

A: Only enable JWT if you want to completely prevent people creating meetings without the correct token. The idea is to have a passwordless security mechanism so that only people with the right token can access a room. A simple example would be if you had a separate mobile app and were implementing a chat room feature - tokens are a way for you to limit access to your Jitsi instance to only users in your app (who you've already authenticated separately), without those users needing to provide a password. But the only way to use tokens is if you have some kind of separate front-end system where you generate the tokens on behalf of users and handle passing them to Jitsi (usually by embedding an iframe in the external application).

For example, you'll need to generate a JWT with content like this:
```json
Headers:
{
  "kid": "jitsi/custom_key_name",
  "typ": "JWT",
  "alg": "RS256"
}

Payload:
{
  "context": {
    "user": {
      "name": "John Doe",
      "email": "jdoe@example.com",
      "id": "1234"
    },
    "group": "1234"
  },
  "aud": "jitsi",
  "iss": "my_client",
  "sub": "meet.example.com",
  "room": "*",
  "exp": 1500006923,
  "nbf": 1499996923
}

```

You need to sign each JWT using the key provided in the CloudFormation template output.

Then, you start a meeting by embedding the encoded/signed JWT in the URL, like:
`https://meet.example.com/test?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ`

Further documentation is here:

https://github.com/jitsi/lib-jitsi-meet/blob/master/doc/tokens.md


### Q: How else can I secure access to my Jitsi deployment?

A: If you have a list of authorized users and passwords, you might be able to use a Prosody "Secure Domain", which requires you to manually add authorized users/passwords to the Prosody instance on the Meet server in each shard. Enabling the Secure Domain feature is available as an option during stack launch. After enabling Secure Domain in the stack settings, you can run a command like this on each Meet server to add a user:

`sudo prosodyctl register <username> meet.example.com <password>`

Alternately, if you have a wider user base you most likely would want to set up a separate LDAP authentication server, and then tie the Prosody/Jitsi auth into that. You also have other options for security - for example if all your users are coming from the same network, it might be easier to just limit access to a confined range of IP's. Or, let users handle the security themselves by setting a password on the room once they start a meeting. Here's the section of the Jitsi documentation about these options:

https://jitsi.github.io/handbook/docs/devops-guide/secure-domain

https://jitsi.github.io/handbook/docs/devops-guide/ldap-authentication


### Q: How many people can I put in a single Jitsi room, or on a single bridge or shard?

A: There's unfortunately no easy answer, because it entirely depends on things like how many audio/video senders you have, how much bandwidth your end users have, what their video settings are, which instance type you used, etc. It also depends on whether you want to support a large number of people in a single room, or a smaller number of people in a large number of rooms simultaneously. That would also affect how many videobridges you brought online (they're set to autoscale, but depending on your workload you may have better results controlling scaling yourself).

As very rough guidelines, with the default c5.xlarge instances, you should be able to support 15-20 simultaneous audio/video senders in a single room, and 100-150 concurrent users per bridge pretty easily (if not more). You should be able to support a larger number than that if there's only one video sender and a number of audio-only participants. The easiest way to scale beyond that would be to use larger instance sizes.

A single shard should easily support several thousand simultaneous users.

If your use case is primarily very large rooms, all with a very large number of participants, you'll likely need to look into using an "Octo" configuration for cascading video bridges, which isn't supported out of the box by this configuration, but can be supported with some config tweaks in a post-install script. Either way, the best way to figure out where your bottlenecks are is to test it with a real workload if possible.

### Q: How do I add recording/livestreaming capabilities?

A: You can do local recording using third-party software like [OBS](https://obsproject.com), but if you want to do cloud-based recording, you'll need a parallel infrastructure using Jibri (a separate/related Jitsi project). There are also companies that provide Jibri-based recording services you could consider. For help with deploying a Jibri infrastructure, contact us at [support@quickdrawsoftware.com](mailto:support@quickdrawsoftware.com).

### Q: How do I activate more shards?

A: You can either use the `jitsictl` utility (described in the Usage Notes section) or manually modify the desired capacity of the Meet and JVB autoscaling groups for each shard using the EC2 web interface. Meet autoscaling groups should be set to 1, JVB autoscaling groups can start at 1 or whatever higher number of bridges you need.

### Q: How do I deploy to multiple AWS regions?

A: The easiest approach is to deploy the stack separately to each region using a separate subdomain, such as meet-east.example.com and meet-west.example.com - your app/frontend can then direct the user to the correct region based on their location.

Very few people truly need cross-region failover/redundancy on a single domain name. If you do, Terraform is a much better tool for the job than CloudFormation. You can contact us at [support@quickdrawsoftware.com](mailto:support@quickdrawsoftware.com) for customized multi-region Terraform configurations.

### Q: When launching the stack, I get the error: "The maximum number of VPCs has been reached."

A: This means you're using an AWS account that already has too many VPCs in the region you're launching in. Try removing other VPC's or starting with a separate AWS account.

### Q: When launching the stack, I get the error: "The maximum number of addresses has been reached."

A: That means you've exceeded your maximum number of Elastic IP addresses for the region (usually 5). Remove some EIP's from your account, or use a separate AWS account.

### Q: Is the stack pegged to a specific version of Jitsi, or does it use the latest build?

A: For more predictable builds and stability, the stack is currently pegged to the following package versions:
* jitsi-meet: 2.0.9646-1
* jitsi-videobridge2: 2.3-160-g97a1f15b-1
* jicofo: 1.0-1090-1
* jitsi-meet-web: 1.0.8091-1
* jitsi-meet-web-config: 1.0.8091-1
* jitsi-meet-prosody: 1.0.8091-1
* jitsi-meet-turnserver: 1.0.8091-1
* jitsi-meet-tokens: 1.0.8091-1
* prosody: 0.12.4-1build3
* haproxy: 3.0.2-1ppa1~noble
* coturn: 4.6.1-1build4

If you need to use the latest builds (e.g. for testing), you can enable the UseLatest stack parameter at launch. This is not recommended for production, as it may be unstable.

### Q: Why do I see additional instances start up temporarily during stack launch?

A: Most likely, you are using smaller instance types than the recommended c5.xlarge. Using smaller instance types, you may see additional instances temporarily spin up during stack launch, as provisioning may cause instances to autoscale after exceeding the default CPU threshold.
