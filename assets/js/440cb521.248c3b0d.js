"use strict";(self.webpackChunkdocs_quickdrawsoftware_com=self.webpackChunkdocs_quickdrawsoftware_com||[]).push([[245],{6849:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=["components"],s={sidebar_position:3,id:"parameters"},l="Stack Parameters",c={unversionedId:"jitsi-cfn/parameters",id:"jitsi-cfn/parameters",isDocsHomePage:!1,title:"Stack Parameters",description:"You'll need to provide the following parameters to the stack at launch:",source:"@site/docs/jitsi-cfn/jitsi-cfn-3-parameters.md",sourceDirName:"jitsi-cfn",slug:"/jitsi-cfn/parameters",permalink:"/jitsi-cfn/parameters",editUrl:"https://github.com/quickdrawsoftware/docs.quickdrawsoftware.com/docs/jitsi-cfn/jitsi-cfn-3-parameters.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"parameters"},sidebar:"tutorialSidebar",previous:{title:"Prerequisites",permalink:"/jitsi-cfn/prerequisites"},next:{title:"Post-install steps",permalink:"/jitsi-cfn/post-install"}},p=[],m={toc:p};function u(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stack-parameters"},"Stack Parameters"),(0,r.kt)("p",null,"You'll need to provide the following parameters to the stack at launch:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"KeyName")," - An existing EC2 Key Pair for SSH access."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"InstanceType")," - Instance type to use for the EC2 instances in the stack. For most users, we recommend c5.xlarge as the best balance of cost and performance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LoggingBucketName")," - Name for a new S3 bucket to store logs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FQDN")," - Domain name that will host the app."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SSLCertificate")," - Arn of an existing SSL certificate in Amazon Certificate Manager matching the domain name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SSHCIDR")," - An IPv4 CIDR block for SSH access to the control instance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JitsiCIDR")," - An IPv4 CIDR block for access to Jitsi."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EnableTokens")," - Whether to enable JWT Token Authorization."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GrafanaPassword")," - Default admin password for Grafana."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SlackWebhook")," - URL of a Slack webhook to send Grafana notifications to."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MeetPostInstall")," - Public URL to a bash script to run post-install on Meet servers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JVBPostInstall")," - Public URL to a bash script to run post-install on JVB servers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HaproxyPostInstall")," - Public URL to a bash script to run post-install on Haproxy servers."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ControlPostInstall")," - Public URL to a bash script to run post-install on Control server.")))}u.isMDXComponent=!0}}]);