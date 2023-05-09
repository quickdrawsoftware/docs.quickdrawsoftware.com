"use strict";(self.webpackChunkdocs_quickdrawsoftware_com=self.webpackChunkdocs_quickdrawsoftware_com||[]).push([[820],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,h=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},566:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2,id:"topology"},i="CloudFormation Topology",s={unversionedId:"jitsi-cfn/topology",id:"jitsi-cfn/topology",isDocsHomePage:!1,title:"CloudFormation Topology",description:'The deployment has 4 redundant "shards" comprised of one Meet signalling server (which runs nginx, the Jitsi Meet frontend, prosody, and jicofo), and one or more autoscaled JVB servers, which run jitsi-videobridge2 for the actual audio/video traffic. Each shard is isolated from every other shard, but traffic will fail over automatically to a different shard via HAProxy if a full shard goes down.',source:"@site/docs/jitsi-cfn/jitsi-cfn-2-topology.md",sourceDirName:"jitsi-cfn",slug:"/jitsi-cfn/topology",permalink:"/jitsi-cfn/topology",editUrl:"https://github.com/quickdrawsoftware/docs.quickdrawsoftware.com/docs/jitsi-cfn/jitsi-cfn-2-topology.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"topology"},sidebar:"tutorialSidebar",previous:{title:"Scalable Jitsi Overview",permalink:"/jitsi-cfn/overview"},next:{title:"Prerequisites",permalink:"/jitsi-cfn/prerequisites"}},l=[],c={toc:l},d="wrapper";function u(e){let{components:t,...a}=e;return(0,o.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cloudformation-topology"},"CloudFormation Topology"),(0,o.kt)("p",null,'The deployment has 4 redundant "shards" comprised of one Meet signalling server (which runs nginx, the Jitsi Meet frontend, prosody, and jicofo), and one or more autoscaled JVB servers, which run jitsi-videobridge2 for the actual audio/video traffic. Each shard is isolated from every other shard, but traffic will fail over automatically to a different shard via HAProxy if a full shard goes down.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Topology",src:r(6948).Z})),(0,o.kt)("p",null,"By default, only one shard is active at launch. As load increases on a single shard, it will autoscale the number of videobridges in that shard (at 70% average CPU), up to 50 bridges in a single shard (the Meet/signalling server can typically handle a large number of bridges before needing a second shard). You should be able to host thousands of participants in a single shard."),(0,o.kt)("p",null,"If you need additional redundancy or need to scale even further, you can manually enable additional shards. You can do this either via the AWS EC2 console by changing the desired number of instances in the appropriate autoscaling groups for the Meet server and JVB servers from 0 to 1, or you can use the utility command line tool ",(0,o.kt)("inlineCode",{parentName:"p"},"jitsictl")," via SSH on the control server."),(0,o.kt)("p",null,"There are 4 types of EC2 instances created by the stack:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Control - this functions as the bastion host for SSH, runs the logging/monitoring infrastructure, and has management command line tools such as ",(0,o.kt)("inlineCode",{parentName:"p"},"jitsictl"),". There's only one Control instance per stack, which generally has low load.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"HAProxy - this handles load balancing traffic between shards. It will autoscale to more instances automatically if needed, but a single HAProxy can handle tens of thousands of requests a second.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Meet - this is the signalling/web server that runs the frontend, Prosody, and Jicofo, and handles load balancing between bridges in a single shard. There will only ever be one instance per active shard.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"JVB - this handles the actual A/V traffic and runs jitsi-videobridge2. You will have between 1-50 bridges per shard, and they will scale up and down automatically based on traffic."))))}u.isMDXComponent=!0},6948:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/jitsi-cfn-topology-28d6f0db84c6a870b7b432ac7fad5053.png"}}]);