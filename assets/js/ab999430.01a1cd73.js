"use strict";(self.webpackChunkdocs_quickdrawsoftware_com=self.webpackChunkdocs_quickdrawsoftware_com||[]).push([[91],{8873:function(e,t,i){i.r(t),i.d(t,{contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return n},metadata:function(){return l},toc:function(){return u}});var o=i(7462),a=i(3366),r=(i(7294),i(3905)),s=["components"],n={sidebar_position:1,id:"overview"},c="Scalable Jitsi Overview",l={unversionedId:"jitsi-cfn/overview",id:"jitsi-cfn/overview",isDocsHomePage:!1,title:"Scalable Jitsi Overview",description:"This CloudFormation stack deploys a production-ready, scalable, and redundant Jitsi Meet cluster spread across multiple availability zones in a single AWS region. It is built to support many thousands of simultaneous users and comes with built-in logging, monitoring, and control scripts. It can also optionally be configured to use JWT Authentication to further secure access. If necessary, the deployment can be easily customized to add/remove specific Jitsi features and add-ons.",source:"@site/docs/jitsi-cfn/jitsi-cfn-1-overview.md",sourceDirName:"jitsi-cfn",slug:"/jitsi-cfn/overview",permalink:"/jitsi-cfn/overview",editUrl:"https://github.com/quickdrawsoftware/docs.quickdrawsoftware.com/docs/jitsi-cfn/jitsi-cfn-1-overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"overview"},sidebar:"tutorialSidebar",previous:{title:"Quickdraw Software Documentation",permalink:"/"},next:{title:"Prerequisites",permalink:"/jitsi-cfn/prerequisites"}},u=[],d={toc:u};function f(e){var t=e.components,i=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scalable-jitsi-overview"},"Scalable Jitsi Overview"),(0,r.kt)("p",null,"This CloudFormation stack deploys a production-ready, scalable, and redundant Jitsi Meet cluster spread across multiple availability zones in a single AWS region. It is built to support many thousands of simultaneous users and comes with built-in logging, monitoring, and control scripts. It can also optionally be configured to use JWT Authentication to further secure access. If necessary, the deployment can be easily customized to add/remove specific Jitsi features and add-ons."),(0,r.kt)("p",null,'The topology has 4 redundant "shards" comprised of one Meet server and an arbitrary number of autoscaled videobridge\'s. They are completely isolated from every other shard, but traffic can fail over to a different shard via HAProxy if a full shard goes down. By default, only one shard is active at launch - for further redundancy or to increase the total load capacity, you can easily activate additional shards.'),(0,r.kt)("p",null,"If you need any of the following features or Jitsi add-ons, contact us at ",(0,r.kt)("a",{parentName:"p",href:"mailto:support@quickdrawsoftware.com"},"support@quickdrawsoftware.com")," for a customized deployment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Multi-AWS region deployments"),(0,r.kt)("li",{parentName:"ul"},"TURN server support for firewall traversal"),(0,r.kt)("li",{parentName:"ul"},"Octo configuration for cascading bridges"),(0,r.kt)("li",{parentName:"ul"},"Jibri for recording/streaming"),(0,r.kt)("li",{parentName:"ul"},"Jigasi for SIP-based phone access")))}f.isMDXComponent=!0}}]);