"use strict";(self.webpackChunkwyng_docs=self.webpackChunkwyng_docs||[]).push([[816],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6606:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={title:"Intro",sidebar_position:0},l=void 0,p={unversionedId:"experience-sdk/intro",id:"experience-sdk/intro",title:"Intro",description:"Welcome to the Wyng JS API reference!",source:"@site/docs/experience-sdk/intro.md",sourceDirName:"experience-sdk",slug:"/experience-sdk/intro",permalink:"/docs/experience-sdk/intro",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/experience-sdk/intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Intro",sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Action Dispatcher",permalink:"/docs/experience-sdk/action-dispatcher"}},s=[],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Welcome to the Wyng JS API reference!"),(0,a.kt)("p",null,"The API consists of two major components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Action Dispatcher"),(0,a.kt)("li",{parentName:"ul"},"Event Listener")),(0,a.kt)("p",null,"The Wyng JS API allows developers to programmatically interact with drag and drop\ncampaigns through a global ",(0,a.kt)("inlineCode",{parentName:"p"},"wyng")," object. You can write custom javascript that\ndispatches an action or registers a callback function for a given event."),(0,a.kt)("p",null,"The Wyng JS API, or SDK, is located at the ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," level and scoped by experience ID.\nThe methods can be accessed through ",(0,a.kt)("inlineCode",{parentName:"p"},"window.wyng['YOUR EXPERIENCE ID']"),'.\nFor convenience, when inserting javascript through the "Custom Javascript" of the campaign, you may use the ',(0,a.kt)("inlineCode",{parentName:"p"},"_WYNG_ID_")," tag and it will automatically be replaced with the active experience ID."),(0,a.kt)("p",null,"It is also recommended to scope your custom code with an ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/IIFE"},"Immediately-Invoked Function Expression")," to avoid potential side-effects when embeding the experience on a page that already has some JavaScript in it."),(0,a.kt)("p",null,"All in all a good starting point would look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"(function() {\n    const sdk = window.wyng['_WYNG_ID_'];\n    // YOUR CUSTOM JAVASCRIPT\n})();\n")))}d.isMDXComponent=!0}}]);