"use strict";(self.webpackChunkdocs_quickdrawsoftware_com=self.webpackChunkdocs_quickdrawsoftware_com||[]).push([[777],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=i,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5789:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],s={sidebar_position:3,id:"prerequisites"},c="Prerequisites",u={unversionedId:"jitsi-cfn/prerequisites",id:"jitsi-cfn/prerequisites",isDocsHomePage:!1,title:"Prerequisites",description:"Requirements",source:"@site/docs/jitsi-cfn/jitsi-cfn-3-prerequisites.md",sourceDirName:"jitsi-cfn",slug:"/jitsi-cfn/prerequisites",permalink:"/jitsi-cfn/prerequisites",editUrl:"https://github.com/quickdrawsoftware/docs.quickdrawsoftware.com/docs/jitsi-cfn/jitsi-cfn-3-prerequisites.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"prerequisites"},sidebar:"tutorialSidebar",previous:{title:"CloudFormation Topology",permalink:"/jitsi-cfn/topology"},next:{title:"Stack Parameters",permalink:"/jitsi-cfn/parameters"}},l=[{value:"Requirements",id:"requirements",children:[]},{value:"Recommendations",id:"recommendations",children:[]}],p={toc:l};function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"You must perform the following steps before launching the CloudFormation stack:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Generate an EC2 Keypair in your region to use for SSH access")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html"},"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Generate an Amazon Certificate Manager SSL Certificate matching the subdomain you want to use (you'll need to input the ARN of the certificate as a parameter):")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html"},"https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(Optional) Set up a Slack Webhook URL if you want monitoring notifications sent to Slack:")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://api.slack.com/messaging/webhooks"},"https://api.slack.com/messaging/webhooks")),(0,o.kt)("h2",{id:"recommendations"},"Recommendations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use a separate AWS account - the stack provisions its own VPC, subnets, security groups, and elastic IP's. To avoid conflicts with other pre-existing AWS resources or hitting resource limits, it's strongly recommended you launch the CloudFormation stack in a dedicated AWS account.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use a subdomain, not the root/apex domain - to access the deployment, you'll need to create a CNAME pointing to an Elastic Load Balancer's DNS name (not a single IP address). While it is possible to route a root/apex domain to an ELB using ALIAS records in Route 53 or using non-standard DNS entries, it's much, much simpler to use a simple CNAME on a subdomain."))))}m.isMDXComponent=!0}}]);