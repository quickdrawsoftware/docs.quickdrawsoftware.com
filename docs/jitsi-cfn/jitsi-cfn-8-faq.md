---
sidebar_position: 8
id: faq
---

# Frequently Asked Questions

### Q: How do I SSH to the instances?

A: You have to SSH to the Control instance, then from there SSH to the other instances. For security reasons, all the HAProxy, Meet, and JVB instances are inside a private subnet and don't have an external IP that's reachable via SSH. You access the Control instance at the fixed elastic IP for the instance. The username is "ubuntu", and you have to use the private key file of the SSH key pair you provided to the template at launch, AWS doesn't allow password-based access over SSH. Typically this means something like:

`ssh -i ~/privatekey.pem ubuntu@xxx.xxx.xxx.xxx`

Once you're in that instance, you can copy your private key file to e.g. `/root/.ssh/jitsi.pem`, which will enable SSH'ing from the Control instance to the other hosts on their private IP. Make sure to `chmod 600 /root/.ssh/jitsi.pem` or SSH will complain.

### Q: How do I configure the DNS?

A: Create a CNAME for your subdomain that points to the ELB DNS address provided in the CloudFormation stack outputs. Exactly how to configure the CNAME will depend on your specific domain registrar.
 
Once the DNS record is created, it will usually take a few minutes for DNS changes to propagate (anywhere from 5m to 24h depending on your registrar). Note that it also takes roughly 5-10m from the time the stack completes provisioning until the services are all  available, as various machines boot up (though DNS almost always takes longer, so in practice you won't notice).

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
  "sub": "jitsi.example.com",
  "room": "*",
  "exp": 1500006923
}

```

You need to sign each JWT using the key provided in the CloudFormation template output.

Then, you start a meeting by embedding the encoded/signed JWT in the URL, like:
`https://jitsi.example.com/test?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ`

Further documentation is here:

https://github.com/jitsi/lib-jitsi-meet/blob/master/doc/tokens.md


### Q: How else can I secure access to my Jitsi deployment?

A: If all of your users are coming from a known domain, you might be able to use the "Secure Domain" feature of Jitsi, which requires some configuration changes to both Jitsi and Prosody, which can be done via a post-install script. Alternately, if you have a wider user base you most likely would want to set up a separate LDAP authentication server, and then tie the Prosody/Jitsi auth into that. You also have other options for security - for example if all your users are coming from the same network, it might be easier to just limit access to a confined range of IP's. Or, let users handle the security themselves by setting a password on the room once they start a meeting. Here's the section of the Jitsi documentation about these options:

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

### Q: Do the setup scripts use the latest version of Jitsi on each launch, or are the images pegged to a specific Jitsi version?

A: The setup scripts are set to install the latest version of Jitsi on each launch. This approach was chosen to ensure compatability with quirks associated with using JWT tokens and CloudFormation dynamic secrets rules. If using a specific version of Jitsi is critical to your setup, you should use the post-install script to purge and reinstall the relevant Jitsi packages.
