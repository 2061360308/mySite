"use strict";(self.webpackChunknote=self.webpackChunknote||[]).push([[2070],{4137:(n,e,t)=>{t.d(e,{Zo:()=>i,kt:()=>d});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},l=Object.keys(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(a=0;a<l.length;a++)t=l[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=a.createContext({}),u=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},i=function(n){var e=u(n.components);return a.createElement(s.Provider,{value:e},n.children)},p="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,l=n.originalType,s=n.parentName,i=c(n,["components","mdxType","originalType","parentName"]),p=u(t),k=r,d=p["".concat(s,".").concat(k)]||p[k]||m[k]||l;return t?a.createElement(d,o(o({ref:e},i),{},{components:t})):a.createElement(d,o({ref:e},i))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var l=t.length,o=new Array(l);o[0]=k;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=n,c[p]="string"==typeof n?n:r,o[1]=c;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},5247:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=t(7462),r=(t(7294),t(4137));const l={id:"js-print-stack-of-function",slug:"/js-print-stack-of-function",title:"JS\u8f93\u51fa\u51fd\u6570\u8c03\u7528\u6808",date:new Date("2021-10-15T00:00:00.000Z"),authors:"kuizuo",tags:["javascript","callstack"],keywords:["javascript","callstack"]},o=void 0,c={unversionedId:"skill/js/js-print-stack-of-function",id:"skill/js/js-print-stack-of-function",title:"JS\u8f93\u51fa\u51fd\u6570\u8c03\u7528\u6808",description:"\u6700\u8fd1\u5728\u7f16\u5199 JS \u9006\u5411 hook \u7c7b\u63d2\u4ef6\uff0c\u7136\u540e\u9700\u8981\u83b7\u53d6\u5f53\u524d\u4ee3\u7801\u6267\u884c\u65f6\u6240\u5728\u7684\u4f4d\u7f6e\uff0c\u65b9\u4fbf\u4ee3\u7801\u5b9a\u4f4d\uff0c\u4e8e\u662f\u5c31\u603b\u7ed3\u4e0b JavaScript \u5982\u4f55\u8f93\u51fa\u51fd\u6570\u8c03\u7528\u6808\u3002",source:"@site/docs/skill/js/JS\u6253\u5370\u51fd\u6570\u8c03\u7528\u6808.md",sourceDirName:"skill/js",slug:"/js-print-stack-of-function",permalink:"/note/js-print-stack-of-function",draft:!1,tags:[{label:"javascript",permalink:"/note/tags/javascript"},{label:"callstack",permalink:"/note/tags/callstack"}],version:"current",frontMatter:{id:"js-print-stack-of-function",slug:"/js-print-stack-of-function",title:"JS\u8f93\u51fa\u51fd\u6570\u8c03\u7528\u6808",date:"2021-10-15T00:00:00.000Z",authors:"kuizuo",tags:["javascript","callstack"],keywords:["javascript","callstack"]},sidebar:"skill",previous:{title:"JS\u5b9e\u73b0\u51fd\u6570\u7f13\u5b58",permalink:"/note/js-implement-function-cache"},next:{title:"JS\u6570\u7ec4\u5bf9\u8c61\u53bb\u91cd",permalink:"/note/js-array-object-unique"}},s={},u=[{value:"\u6f14\u793a\u4ee3\u7801",id:"\u6f14\u793a\u4ee3\u7801",level:2},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",level:2},{value:"console.trace()",id:"consoletrace",level:3},{value:"arguments.callee.caller",id:"argumentscalleecaller",level:3},{value:"new Error().stack",id:"new-errorstack",level:3},{value:"Error.captureStackTrace",id:"errorcapturestacktrace",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],i={toc:u},p="wrapper";function m(n){let{components:e,...t}=n;return(0,r.kt)(p,(0,a.Z)({},i,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6700\u8fd1\u5728\u7f16\u5199 JS \u9006\u5411 hook \u7c7b\u63d2\u4ef6\uff0c\u7136\u540e\u9700\u8981\u83b7\u53d6\u5f53\u524d\u4ee3\u7801\u6267\u884c\u65f6\u6240\u5728\u7684\u4f4d\u7f6e\uff0c\u65b9\u4fbf\u4ee3\u7801\u5b9a\u4f4d\uff0c\u4e8e\u662f\u5c31\u603b\u7ed3\u4e0b JavaScript \u5982\u4f55\u8f93\u51fa\u51fd\u6570\u8c03\u7528\u6808\u3002"),(0,r.kt)("h2",{id:"\u6f14\u793a\u4ee3\u7801"},"\u6f14\u793a\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function main() {\n  let a = fun('hello world')\n  console.log(a)\n}\n\nfunction fun(a) {\n  return a\n}\n\nmain()\n")),(0,r.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,r.kt)("h3",{id:"consoletrace"},"console.trace()"),(0,r.kt)("p",null,"\u4f7f\u7528\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{7}","{7}":!0},"function main() {\n  let a = fun('hello world')\n  console.log(a)\n}\n\nfunction fun(a) {\n  console.trace('fun')\n  return a\n}\n\nmain()\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Trace: fun\n    at fun (c:\\Users\\zeyu\\Desktop\\demo\\main.js:7:11)\n    at main (c:\\Users\\zeyu\\Desktop\\demo\\main.js:2:11)\n    at Object.<anonymous> (c:\\Users\\zeyu\\Desktop\\demo\\main.js:11:1)    at Module._compile (node:internal/modules/cjs/loader:1095:14)\n    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1124:10)\n    at Module.load (node:internal/modules/cjs/loader:975:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:816:12)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12)\n    at node:internal/main/run_main_module:17:47\nhello world\n")),(0,r.kt)("p",null,"\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"console.trace()"),"\u53ef\u4ee5\u4f20\u5165\u53c2\u6570\uff0c\u6700\u7ec8\u90fd\u5c06\u76f4\u63a5\u8f93\u51fa\u5728 Trace \u540e\u9762\uff0c\u5982\u8fd9\u91cc\u7684 fun\uff0c\u4f46\u53ea\u80fd\u5728\u63a7\u5236\u53f0\u4e2d\u8f93\u51fa"),(0,r.kt)("p",null,"\u4e0d\u8fc7 IE6 \u5e76\u4e0d\u652f\u6301\uff0c\u4e0d\u8fc7\u5e94\u8be5\u4e5f\u6ca1\u4eba\u7528\u4e86\u5427"),(0,r.kt)("h3",{id:"argumentscalleecaller"},"arguments.callee.caller"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("strong",{parentName:"p"},"\u975e\u4e25\u683c\u6a21\u5f0f"),"\u4e0b\uff0c\u53ef\u4ee5\u76f4\u63a5\u8f93\u51fa",(0,r.kt)("inlineCode",{parentName:"p"},"arguments"),"\uff0c\u4fbf\u4f1a\u6253\u5370\u51fa\u6240\u8c03\u7528\u7684\u53c2\u6570\uff0c\u4ee5\u53ca\u8c03\u7528\u7684\u51fd\u6570\uff0c\u4f7f\u7528\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{7-10}","{7-10}":!0},"function main() {\n  let a = fun('hello world')\n  console.log(a)\n}\n\nfunction fun(a) {\n  console.log(fun.caller.toString())\n  console.log(arguments)\n  console.log(arguments.callee.toString())\n  console.log(arguments.callee.caller.toString())\n\n  return a\n}\n\nmain()\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function main() {\n  let a = fun('hello world')\n  console.log(a)\n}\n[Arguments] { '0': 'hello world' }\nfunction fun(a) {\n  console.log(fun.caller.toString())\n  console.log(arguments)\n  console.log(arguments.callee.toString())\n  console.log(arguments.callee.caller.toString())\n\n  return a\n}\nfunction main() {\n  let a = fun('hello world')\n  console.log(a)\n}\nhello world\n")),(0,r.kt)("p",null,"\u6210\u529f\u7684\u5c06\u6211\u4eec\u5f53\u524d\u8fd0\u884c\u7684\u51fd\u6570\u7ed9\u6253\u5370\u4e86\u51fa\u6765\uff08\u8fd9\u91cc\u4f7f\u7528 toString \u65b9\u4fbf\u5c06\u51fd\u6570\u6253\u5370\u51fa\u6765\uff09\uff0c\u800c\u4e0a\u7ea7\u7684\u51fd\u6570\u7684\u8bdd\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"fun.caller"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"arguments.callee.caller"),"\u90fd\u80fd\u5f97\u5230\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.kuizuo.cn/image-20211015094231693.png",alt:"image-20211015094231693"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"caller"),"\u4fbf\u662f\u8c03\u7528\u7684\u4e0a\u5c42\u51fd\u6570\uff0c\u4e5f\u5c31\u662f\u8fd9\u91cc\u7684 main \u51fd\u6570\uff0c\u4e0d\u96be\u53d1\u73b0\u6bcf\u4e2a caller \u5bf9\u8c61\u4e0b\u90fd\u6709\u4e00\u4e2a caller \u5c5e\u6027\uff0c\u4e5f\u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"caller"),"\u7684\u4e0a\u5c42\u51fd\u6570\uff0c\u7531\u4e8e\u6211\u8fd9\u91cc\u662f node \u73af\u5883\uff0c\u6240\u4ee5\u8fd9\u91cc\u7684 caller \u7684 caller \u6211\u4e5f\u4e0d\u77e5\u9053\u662f\u4e2a\u4ec0\u4e48\u73a9\u610f\u3002\u3002\u3002\u53cd\u6b63\u8fd9\u4e0d\u662f\u6240\u8981\u5173\u6ce8\u7684\u91cd\u70b9\uff0c\u91cd\u70b9\u662f",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"fun.caller"),"\u548c`",(0,r.kt)("inlineCode",{parentName:"strong"},"arguments.callee.caller"),"\u4fbf\u53ef\u4ee5\u6253\u5370\u51fa\u4e0a\u5c42\u51fd\u6570"),"\uff0c\u76f4\u5230 caller \u4e3a\u7a7a"),(0,r.kt)("p",null,"\u53e6\u5916\u5708\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"[[FunctionLocation]]"),"\u4fbf\u662f\u51fd\u6570\u6240\u5728\u4f4d\u7f6e\uff0c\u4e0d\u8fc7\u53ef\u60dc\u662f\uff0c\u8fd9\u4e2a\u5e76\u4e0d\u662f caller \u7684\u5c5e\u6027\uff0c\u4ec5\u4f9b js \u5f15\u64ce\u4f7f\u7528\u7684\uff0c\u6240\u4ee5\u65e0\u6cd5\u8f93\u51fa\u3002"),(0,r.kt)("p",null,"\u603b\u7ed3\u4e0b\u6765\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"fun.caller == arguments.callee.caller \u4ee3\u8868 fun \u7684\u6267\u884c\u73af\u5883 (\u4e0a\u5c42\u51fd\u6570)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"arguments.callee \u4ee3\u8868\u7684\u662f\u6b63\u5728\u6267\u884c\u7684 fun")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u524d\u63d0: \u975e\u4e25\u683c\u6a21\u5f0f\u4e0b")),(0,r.kt)("h3",{id:"new-errorstack"},"new Error().stack"),(0,r.kt)("p",null,"\u4f17\u6240\u5468\u77e5\uff0c\u7a0b\u5e8f\u4e00\u65e6\u51fa\u9519 W\uff0c\u4fbf\u4f1a\u76f4\u63a5\u505c\u6b62\u8fd0\u884c\uff0c\u540c\u65f6\u8f93\u51fa\u62a5\u9519\u4fe1\u606f\uff0c\u800c\u8fd9\u91cc\u7684\u62a5\u9519\u4fe1\u606f\u5c31\u5305\u62ec\u8c03\u7528\u7684\u51fd\u6570\u4ee5\u53ca\u5177\u4f53\u4f4d\u7f6e\uff0c\u76f8\u5bf9\u4e8e\u4e0a\u9762\u7684\u65b9\u6cd5\u800c\u8a00\uff0c\u8fd9\u4e2a\u80fd\u76f4\u63a5\u5728\u6267\u884c\u73af\u5883\u4e2d\u8f93\u51fa\uff0c\u800c\u4e0d\u662f\u5355\u7eaf\u7684\u5728\u63a7\u5236\u53f0\u663e\u793a\u3002"),(0,r.kt)("p",null,"\u540c\u6837\u8fd8\u662f\u4e0a\u9762\u7684\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{7,11-14}","{7,11-14}":!0},"function main() {\n  let a = fun('hello world')\n  console.log(a)\n}\n\nfunction fun(a) {\n  printStack()\n  return a\n}\n\nfunction printStack() {\n  let stack = new Error().stack\n  console.log(stack)\n}\n\nmain()\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u7684\u7ed3\u679c\u4e3a\u4e00\u4e32\u5b57\u7b26\u4e32\uff0c\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Error\n    at printStack (c:\\Users\\zeyu\\Desktop\\demo\\main.js:12:16)\n    at fun (c:\\Users\\zeyu\\Desktop\\demo\\main.js:7:3)\n    at main (c:\\Users\\zeyu\\Desktop\\demo\\main.js:2:11)\n    at Object.<anonymous> (c:\\Users\\zeyu\\Desktop\\demo\\main.js:16:1)    at Module._compile (node:internal/modules/cjs/loader:1095:14)\n    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1124:10)\n    at Module.load (node:internal/modules/cjs/loader:975:32)\n    at Function.Module._load (node:internal/modules/cjs/loader:816:12)\n    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:79:12)\n    at node:internal/main/run_main_module:17:47\nhello world\n")),(0,r.kt)("p",null,"\u7531\u4e8e\u7ed3\u679c\u662f\u4e2a\u5b57\u7b26\u4e32\uff0c\u6240\u4ee5\u901a\u8fc7 split \u5206\u5272\u4e00\u4e0b\uff0c\u4fbf\u80fd\u5f97\u5230\u8c03\u7528\u7684\u51fd\u6570\uff08fun\uff09\u4ee5\u53ca\u8c03\u7528\u4f4d\u7f6e\uff08c:\\Users\\zeyu\\Desktop\\demo\\main.js:7:3\uff09\uff0c\u7a0d\u52a0\u5904\u7406\u4e00\u4e0b\uff0c\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{7}","{7}":!0},"function main() {\n  let a = fun('hello world')\n  console.log(a)\n}\n\nfunction fun(a) {\n  printStack()\n  return a\n}\n\nmain()\n\nfunction printStack() {\n  const callstack = new Error().stack.split('\\n')\n  callstack.forEach((s) => {\n    let matchArray = s.match(/at (.+?) \\((.+?)\\)/)\n    if (!matchArray) return\n\n    let name = matchArray[1]\n    let location = matchArray[2]\n    console.log(name, location)\n  })\n}\n")),(0,r.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\u5982\u4e0b\uff08\u7531\u4e8e\u662f Node \u73af\u5883\uff0c\u6240\u4ee5\u4f1a\u8f93\u51fa\u4e00\u4e9b\u6709\u5173\u6a21\u5757 modules \u7684\u4e1c\u897f\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"printStack c:\\Users\\zeyu\\Desktop\\demo\\main.js:14:21\nfun c:\\Users\\zeyu\\Desktop\\demo\\main.js:7:3\nmain c:\\Users\\zeyu\\Desktop\\demo\\main.js:2:11\nObject.<anonymous> c:\\Users\\zeyu\\Desktop\\demo\\main.js:11:1\nModule._compile node:internal/modules/cjs/loader:1095:14\nObject.Module._extensions..js node:internal/modules/cjs/loader:1124:10\nModule.load node:internal/modules/cjs/loader:975:32\nFunction.Module._load node:internal/modules/cjs/loader:816:12\nFunction.executeUserEntryPoint [as runMain] node:internal/modules/run_main:79:12\nhello world\n")),(0,r.kt)("h3",{id:"errorcapturestacktrace"},"Error.captureStackTrace"),(0,r.kt)("p",null,"Error \u4e2d\u6709\u4e00\u4e2a\u9759\u6001\u65b9\u6cd5\uff0c\u540c\u6837\u7528\u4e8e\u83b7\u53d6\u8c03\u7528\u6808\u3002\u6f14\u793a\u4ee3\u7801\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function main() {\n  let a = fun('hello world')\n  console.log(a)\n}\n\nfunction fun(a) {\n  let stack = stackTrace()\n  console.log(stack)\n\n  return a\n}\n\nfunction stackTrace() {\n  const obj = {}\n  Error.captureStackTrace(obj, stackTrace)\n  return obj.stack\n}\n\nmain()\n")),(0,r.kt)("p",null,"\u6548\u679c\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"new Error().stack"),"\u4e00\u6837\uff0c\u53ea\u4e0d\u8fc7\u5c11\u4e86\u4e00\u884c",(0,r.kt)("del",{parentName:"p"},"at printStack (c:\\Users\\zeyu\\Desktop\\demo\\main.js:12:16)")," \u7684\u8f93\u51fa\u3002"),(0,r.kt)("p",null,"\u4e0d\u8fc7\u4e00\u822c\u7528\u6cd5\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function MyError() {\n  Error.captureStackTrace(this, MyError)\n}\n\n// \u5982\u679c\u6ca1\u6709\u5411captureStackTrace\u4f20\u9012MyError\u53c2\u6570\uff0c\u5219\u5728\u8bbf\u95ee.stack\u5c5e\u6027\u65f6\uff0cMyError\u53ca\u5176\u5185\u90e8\u4fe1\u606f\u5c06\u4f1a\u51fa\u73b0\u5728\u5806\u6808\u4fe1\u606f\u4e2d\u3002\u5f53\u4f20\u9012MyError\u53c2\u6570\u65f6\uff0c\u8fd9\u4e9b\u4fe1\u606f\u4f1a\u88ab\u5ffd\u7565\u3002\nnew MyError().stack\n")),(0,r.kt)("p",null,"\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"Error.captureStackTrace()"),"\u6e90\u81ea",(0,r.kt)("a",{parentName:"p",href:"https://link.segmentfault.com/?enc=u3YSqa2uqpuK4qOK1mcE%2BQ%3D%3D.S7z7nzmOapoEFtq3WEZcXOIYfU79dXMyMCaHOU3pUVILksNiqpAhLEXacnQs0fHN"},"V8 \u5f15\u64ce\u7684 Stack Trace API"),"\uff0c\u5728\u81ea\u5b9a\u4e49 Error \u7c7b\u7684\u5185\u90e8\u7ecf\u5e38\u4f1a\u4f7f\u7528\u8be5\u51fd\u6570\uff0c\u7528\u4ee5\u5728 error \u5bf9\u8c61\u4e0a\u6dfb\u52a0\u5408\u7406\u7684 stack \u5c5e\u6027\u3002\u4e0a\u6587\u4e2d\u7684 MyError \u7c7b\u5373\u662f\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u4f8b\u5b50\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function MyError() {\n  Error.captureStackTrace(this, MyError)\n}\n\n// \u5982\u679c\u6ca1\u6709\u5411captureStackTrace\u4f20\u9012MyError\u53c2\u6570\uff0c\u5219\u5728\u8bbf\u95ee.stack\u5c5e\u6027\u65f6\uff0cMyError\u53ca\u5176\u5185\u90e8\u4fe1\u606f\u5c06\u4f1a\u51fa\u73b0\u5728\u5806\u6808\u4fe1\u606f\u4e2d\u3002\u5f53\u4f20\u9012MyError\u53c2\u6570\u65f6\uff0c\u8fd9\u4e9b\u4fe1\u606f\u4f1a\u88ab\u5ffd\u7565\u3002\nnew MyError().stack\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000007076507"},"\u5173\u4e8e Error.captureStackTrace - SegmentFault \u601d\u5426")),(0,r.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,r.kt)("p",null,"\u5982\u679c\u662f\u4f5c\u4e3a\u8c03\u8bd5\u9636\u6bb5\uff0c\u60f3\u8f93\u51fa\u8c03\u7528\u6808\u7684\u8bdd\uff0c\u90a3\u4e48",(0,r.kt)("inlineCode",{parentName:"p"},"console.trace()"),"\u80af\u5b9a\u662f\u4e2a\u6700\u597d\u7684\u9009\u62e9\uff0c\u4e0d\u8fc7\u53ea\u80fd\u5728\u63a7\u5236\u53f0\u663e\u793a\uff0c\u65e0\u6cd5\u5728\u8fd0\u884c\u73af\u5883\u4e2d\u4f7f\u7528"),(0,r.kt)("p",null,"\u800c",(0,r.kt)("inlineCode",{parentName:"p"},"arguments.callee.caller"),"\u4f7f\u7528\u7684\u524d\u63d0\u662f\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c\u6240\u4ee5\u8981\u4f7f\u7528\u7684\u8bdd\uff0c\u5219\u9700\u8981\u5220\u9664",(0,r.kt)("inlineCode",{parentName:"p"},'"use strict";'),"\u4ee3\u7801\uff0c \u4f46\u80fd\u76f4\u63a5\u6253\u5370\u51fa\u5b8c\u6574\u7684\u51fd\u6570\uff0c\u4ee5\u53ca\u8c03\u7528\u6240\u4f20\u5165\u7684\u53c2\u6570\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"new Error().stack")," \u76f8\u5f53\u4e8e\u4e3b\u52a8\u62a5\u9519\uff0c\u7531\u4e8e\u62a5\u9519\u4f1a\u81ea\u52a8\u6253\u5370\u62a5\u9519\u6240\u5728\u7684\u8c03\u7528\u4fe1\u606f\uff0c\u6240\u4ee5\u80fd\u7cbe\u786e\u7684\u5b9a\u4f4d\u5230\u4ee3\u7801\u7684\u51fd\u6570\u540d\u548c\u4ee3\u7801\u884c\u4e0e\u5217\uff0c\u5bf9\u4e8e\u540e\u7eed\u8981\u5b9a\u4f4d\u4ee3\u7801\u4f4d\u7f6e\u800c\u8a00\u4f18\u5148\u9009\u62e9\u3002"))}m.isMDXComponent=!0}}]);