---
sidebar_position: 7
id: customization
---

# Customization

## Using Post-install Scripts

The CloudFormation template gives you post-install hooks to make additional modifications to the deployment on launch. You write a bash script that does additional config, which can include things like using command line tools to modify the core jitsi config files, downloading a custom frontend, etc, it's completely up to you. You then host that setup script somewhere public (e.g. in an S3 bucket), and provide the URL to the CloudFormation template as a parameter, which will download and run that script as part of the install process, so you have a repeatable build/launch process for all of your customizations.

All post-install scripts are run as root.

It's recommended to develop scripts using something like a self-contained Docker image of Jitsi to increase familiarity with the different config files, then add them to the CloudFormation template when ready.

## Changing Jitsi branding

UI customization can be accomplished a number of ways. You can fork the code for the Jitsi Meet UI (it's a React app), compile a new app bundle with npm and webpack, and replace the stock one with a post-install script. Alternately, you can use the interface.js API to provide customization parameters in URL parameters when creating a room. Or, you can fully whitelabel a custom interface with the iframe API.

Here are some resources for implementing UI customizations:

https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe

https://jitsi.github.io/handbook/docs/user-guide/user-guide-advanced

https://github.com/jitsi/jitsi-meet/blob/master/config.js

https://github.com/jitsi/jitsi-meet/blob/master/interface_config.js

The core UI files are stored in: `/usr/share/jitsi-meet/` on the Meet server for each shard.

One quick way to do some light branding is using the `body.html` file. It's empty by default, and is included into the main landing page, so anything you add there is appended to the page. You could include a `<style>` block there and use CSS to, for example, hide any page elements you didn't want.

Here's an example post-install script which replaces the Jitsi logos and some branding copy using a combination of downloading files and editing configuration files. To use, just modify, upload to a publicly accessible URL, and provide the URL to the "Meet Post-Install Script" template parameter.

```bash
#!/bin/bash

# Fetch replacement logos from a public URL you provide
wget -O /tmp/favicon.ico https://example.com/favicon.ico
wget -O /tmp/logo.png https://example.com/logo.png
wget -O /tmp/apple-touch-icon.png https://example.com/apple-touch-icon.png
wget -O /tmp/jitsiLogo_square.png https://example.com/jitsiLogo_square.png
wget -O /tmp/jitsilogo.png https://example.com/jitsilogo.png
wget -O /tmp/logo-deep-linking.png https://example.com/logo-deep-linking.png
wget -O /tmp/watermark.svg https://example.com/watermark.svg
wget -O /tmp/welcome-background.png https://example.com/welcome-background.png

# Overwrite the built-in Jitsi logo files
cp /tmp/favicon.ico /usr/share/jitsi-meet/favicon.ico
cp /tmp/favicon.ico /usr/share/jitsi-meet/images/favicon.ico
cp /tmp/logo.png /usr/share/jitsi-meet/images/logo.png
cp /tmp/apple-touch-icon.png /usr/share/jitsi-meet/images/apple-touch-icon.png
cp /tmp/jitsiLogo_square.png /usr/share/jitsi-meet/images/jitsiLogo_square.png
cp /tmp/jitsilogo.png /usr/share/jitsi-meet/images/jitsilogo.png
cp /tmp/logo-deep-linking.png /usr/share/jitsi-meet/images/logo-deep-linking.png
cp /tmp/watermark.svg /usr/share/jitsi-meet/images/watermark.svg
cp /tmp/welcome-background.png /usr/share/jitsi-meet/images/welcome-background.png

# Change the name of the app in title.html (used for the page title and open graph tags)
sed -i "s/Jitsi Meet/Your App Name/g" /usr/share/jitsi-meet/title.html
sed -i "s/Join a WebRTC video conference powered by the Jitsi Videobridge/Join a video conference on Your App Name/g" /usr/share/jitsi-meet/title.html

# Change the name of the app in interface_config.js
sed -i "s/APP_NAME: 'Jitsi Meet'/APP_NAME: 'Your App Name'/g" /usr/share/jitsi-meet/interface_config.js
sed -i "s/Fellow Jitster/Guest/g" /usr/share/jitsi-meet/interface_config.js
sed -i "s/jitsi.org/example.com/g" /usr/share/jitsi-meet/interface_config.js

# Replace some text strings directly in the compiled React bundle - super hacky and not really recommended, but will work for very quick branding changes
sed -i "s/Jitsi on mobile/Your App on mobile/g" /usr/share/jitsi-meet/libs/app.bundle.min.js
sed -i "s/\"Jitsi Meet\"/\"Your App Name\"/g" /usr/share/jitsi-meet/libs/app.bundle.min.js
sed -i "s/\"Secure and high quality meetings\"/\"Your App Tagline\"/g" /usr/share/jitsi-meet/libs/app.bundle.min.js

# Replace the same text strings in the internationalization bundle
sed -i "s/Jitsi on mobile/Your App on mobile/g" /usr/share/jitsi-meet/lang/main.json
sed -i "s/\"Jitsi Meet\"/\"Your App Name\"/g" /usr/share/jitsi-meet/lang/main.json
sed -i "s/\"Secure and high quality meetings\"/\"Your App Tagline\"/g" /usr/share/jitsi-meet/lang/main.json

# Restart nginx
service nginx restart
```

## Enable moderator status based on JWT

Include a "moderator" boolean in your JWT fields, like `"moderator": true,`

Then enable the moderation plugin:

```bash
#!/bin/bash

FQDN=example.com

wget -O /usr/share/jitsi-meet/prosody-plugins/mod_token_moderation.lua https://raw.githubusercontent.com/nvonahsen/jitsi-token-moderation-plugin/master/mod_token_moderation.lua

sed -i "/token_verification/a\ \ \ \ \ \ \ \ \"token_moderation\";" /etc/prosody/conf.avail/$FQDN.cfg.lua

service prosody restart
```

## Disable speakerstats
```bash
#!/bin/bash

FQDN=example.com

sed -i "s/speakerstats_component =/-- speakerstats_component =/g" /etc/prosody/conf.avail/$FQDN.cfg.lua
sed -i "s/\"speakerstats\"/-- \"speakerstats\"/g" /etc/prosody/conf.avail/$FQDN.cfg.lua
sed -i "s/Component \"speakerstats/-- Component \"speakerstats/g" /etc/prosody/conf.avail/$FQDN.cfg.lua
sed -i "0,/muc_component/ s/muc_component =/-- muc_component =/" /etc/prosody/conf.avail/$FQDN.cfg.lua

service prosody restart
```

## Disable lobby
```bash
#!/bin/bash

FQDN=example.com

sed -i "s/\"muc_lobby_rooms\"/-- \"muc_lobby_rooms\"/g" /etc/prosody/conf.avail/$FQDN.cfg.lua
sed -i "s/lobby_muc/-- lobby_muc/g" /etc/prosody/conf.avail/$FQDN.cfg.lua

service prosody restart
```
