"use strict";(self.webpackChunkdocs_quickdrawsoftware_com=self.webpackChunkdocs_quickdrawsoftware_com||[]).push([[61],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4067:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={sidebar_position:6,id:"usage"},l="Usage Notes",c={unversionedId:"jitsi-cfn/usage",id:"jitsi-cfn/usage",isDocsHomePage:!1,title:"Usage Notes",description:"Handy shortcuts",source:"@site/docs/jitsi-cfn/jitsi-cfn-6-usage.md",sourceDirName:"jitsi-cfn",slug:"/jitsi-cfn/usage",permalink:"/jitsi-cfn/usage",editUrl:"https://github.com/quickdrawsoftware/docs.quickdrawsoftware.com/docs/jitsi-cfn/jitsi-cfn-6-usage.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,id:"usage"},sidebar:"tutorialSidebar",previous:{title:"Post-Launch Access",permalink:"/jitsi-cfn/post-launch"},next:{title:"Customization",permalink:"/jitsi-cfn/customization"}},u=[{value:"Handy shortcuts",id:"handy-shortcuts",children:[]},{value:"Jitsictl Usage",id:"jitsictl-usage",children:[]},{value:"Grafana Usage",id:"grafana-usage",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usage-notes"},"Usage Notes"),(0,a.kt)("h2",{id:"handy-shortcuts"},"Handy shortcuts"),(0,a.kt)("p",null,"On the Control server:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"jitsictl")," - Tool for easily administering shards in your cluster"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"restart-meet.sh")," - Utility script for rebooting jicofo and prosody on all meet shards. This will force all users to reconnect, so should only be used in emergencies.")),(0,a.kt)("p",null,"On the HAProxy servers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"watchstick")," will open a live view of the current stick table"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"monitor")," will open ",(0,a.kt)("inlineCode",{parentName:"li"},"hatop")," for a comprehensive view of open connections, backend health, and lots of other HAProxy metrics")),(0,a.kt)("p",null,"On the Meet and JVB servers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stats")," will query the statistics endpoint on localhost from either jicofo or jitsi-videobridge2, respectively, and display the pretty-printed JSON output. Can be useful to inspect the internal state of a particular server")),(0,a.kt)("p",null,"Critical logs on each instance are configured with logrotate to compress and archive themselves to the S3 bucket daily, or when the instance is terminated, whichever comes first."),(0,a.kt)("h2",{id:"jitsictl-usage"},"Jitsictl Usage"),(0,a.kt)("p",null,"The control server has a convenience script called ",(0,a.kt)("inlineCode",{parentName:"p"},"jitsictl")," which lets you easily administer your cluster."),(0,a.kt)("p",null,"To enable a shard:\n",(0,a.kt)("inlineCode",{parentName:"p"},"jitsictl <region> enable <shard>"),"\ne.g.\n",(0,a.kt)("inlineCode",{parentName:"p"},"jitsictl us-east-1 enable 1")),(0,a.kt)("p",null,"You must then manually set the number of JVB's for the shard (described below)"),(0,a.kt)("p",null,"To disable a shard (automatically sets the JVB's to 0):\n",(0,a.kt)("inlineCode",{parentName:"p"},"jitsictl <region> disable <shard>"),"\ne.g.\n",(0,a.kt)("inlineCode",{parentName:"p"},"jitsictl us-east-1 disable 1")),(0,a.kt)("p",null,"To set the number of JVB's in a shard:\n",(0,a.kt)("inlineCode",{parentName:"p"},"jitsictl <region> jvb <shard> <number>"),"\ne.g.\n",(0,a.kt)("inlineCode",{parentName:"p"},"jitsictl us-east-1 jvb 1 10")),(0,a.kt)("p",null,"Also includes a convenience command to rapidly increase capacity:\n",(0,a.kt)("inlineCode",{parentName:"p"},"jitsictl <region> max")," - enables all shards and sets them to 50 JVB's"),(0,a.kt)("h2",{id:"grafana-usage"},"Grafana Usage"),(0,a.kt)("p",null,"Grafana can be accessed on port 3000 of your domain. The default username is ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," and the default password is whatever you set when launching the stack. Contains a dashboard with a ton of overview metrics on the health of the cluster, collected via telegraf on each instance."))}d.isMDXComponent=!0}}]);