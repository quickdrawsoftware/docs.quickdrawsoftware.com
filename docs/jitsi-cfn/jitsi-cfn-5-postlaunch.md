---
sidebar_position: 5
id: post-launch
---

# Post-Launch Access

After the stack is deployed, you must do the following to access it:
* Create a CNAME entry in the DNS for your domain which points to the load balancer DNS Name (provided as a stack output). While not recommended, if using the apex/root domain you may need to create an ALIAS record rather than a CNAME. For specific directions on redirecting a domain, consult your registrar. Note that many registrars require a trailing dot `.` at the end of the ELB DNS address, like `meet.example.com.`.

* Copy the private key for your EC2 key pair to `/root/.ssh/jitsi.pem` on the Control EC2 instance. This is necessary if you want to use the command-line tools to administer your cluster. Make sure to `chmod 600` the private key file.

* If you enabled TURN, create an A record in the DNS for your TURN domain which points to the IP of the TURN server, provided as a stack output.

* If you enabled TURN, you must issue a let's encrypt SSL certificate for the TURN domain on the TURN server. SSH to the TURN instance (via the Control instance), and run `sudo issue-cert.sh` to perform this step automatically. Please note Let's Encrypt has rate limits, so for example you will only be able to issue a cert for the same TURN domain name 5 times in one week. If you are doing extensive testing, you may want to use a different domain name than you plan to use in production to avoid hitting the rate limit.

* Only the Control instance is publicly accessible via SSH, all other instances can be accessed on internal IP's from there.

* If JWT Tokens are enabled, use the key in the stack output to generate your access tokens.

* If a Secure Domain is enabled, add users to Prosody on each Meet server.

After configuring the DNS and waiting for it to propagate (it may take several hours), the Jitsi homepage will be accessible on your domain (e.g. https://meet.example.com). The monitoring dashboard will be available at port 3000 on the same domain (e.g. https://meet.example.com:3000). It isn't possible to access the site without configuring your DNS, because the load balancers are configured with your domain name, and Amazon Elastic Load Balancers don't have a fixed IP.
