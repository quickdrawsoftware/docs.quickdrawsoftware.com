---
sidebar_position: 5
id: post-launch
---

# Post-Launch Access

After the stack is deployed, you must do the following to access it:
* Create a CNAME entry in the DNS for your domain which points to the load balancer DNS Name (provided as a stack output). While not recommended, if using the apex/root domain you may need to create an ALIAS record rather than a CNAME. For specific directions on redirecting a domain, consult your registrar.
* Only the Control instance is publicly accessible via SSH, all other instances can be accessed on internal IP's from there.
* Copy the private key for your EC2 key pair to `/root/.ssh/jitsi.pem` on the Control EC2 instance if you want to use the command-line tools to administer your cluster. Make sure to `chmod 600` the private key file.
* If JWT Tokens are enabled, use the key in the stack output to generate your access tokens.

After configuring the DNS and waiting for it to propagate (it may take several hours), the Jitsi homepage will be accessible on your domain (e.g. https://jitsi.example.com). The monitoring dashboard will be available at port 3000 on the same domain (e.g. https://jitsi.example.com:3000). It isn't possible to access the site without configuring your DNS, because the load balancers are configured with your domain name, and Amazon Elastic Load Balancers don't have a fixed IP.
