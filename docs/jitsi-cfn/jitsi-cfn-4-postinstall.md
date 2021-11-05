---
sidebar_position: 4
id: post-install
---

# Post-install steps

After the stack is deployed, you must do the following to access it:
* Create a CNAME entry in the DNS for your domain which points to the load balancer DNS Name (provided as a stack output). If you're using the apex domain (i.e. not using a subdomain), then you may need to create an Alias record rather than a CNAME. For specific directions on redirecting a domain, consult your registrar.
* Copy the private key for your EC2 key pair to /root/.ssh/jitsi.pem on the Control EC2 instance if you want to use the command-line tools to administer your cluster. Make sure to `chmod 600` the private key file.
* If JWT Tokens are enabled, use the key in the stack output to generate your access tokens.
* Only the Control instance is publicly accessible via SSH, all other instances can be accessed on internal IP's from there.
