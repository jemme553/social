(()=>{var e={};e.id=178,e.ids=[178],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},3209:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>c,routeModule:()=>x,tree:()=>o}),r(6592),r(3091),r(5866);var s=r(3191),a=r(8716),i=r(7922),l=r.n(i),n=r(5231),d={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>n[e]);r.d(t,d);let o=["",{children:["profile",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,6592)),"C:\\Users\\jemme\\Desktop\\media\\media\\src\\app\\profile\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,3091)),"C:\\Users\\jemme\\Desktop\\media\\media\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\jemme\\Desktop\\media\\media\\src\\app\\profile\\page.js"],m="/profile/page",p={require:r,loadChunk:()=>Promise.resolve()},x=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/profile/page",pathname:"/profile",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:o}})},6873:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},1498:(e,t,r)=>{Promise.resolve().then(r.bind(r,9614))},5303:()=>{},9614:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var s=r(326),a=r(6226),i=r(434),l=r(7577),n=r(5047);let d=function(){let e=(0,n.useSearchParams)(),[t,r]=(0,l.useState)(!1),[d,o]=(0,l.useState)(!1),[c,m]=(0,l.useState)(!1);return e.get("loggedIn"),s.jsx("div",{children:s.jsx("nav",{className:"w-full top-0 left-0 right-0 z-10",children:(0,s.jsxs)("div",{className:"justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ",children:[s.jsx("div",{children:(0,s.jsxs)("div",{className:"flex items-center justify-between py-3 md:py-5 md:block h-[70px]",children:[s.jsx(i.default,{href:"/",children:s.jsx("h2",{className:"text-2xl text-cyan-600 font-bold",onClick:()=>void(o(!1),r(!1)),children:"LOGO"})}),(0,s.jsxs)("div",{className:"flex",children:[c&&(0,s.jsxs)("div",{className:"flex gap-2",children:[s.jsx(i.default,{className:"md:hidden flex items-center",href:"/videos",children:s.jsx(a.default,{src:"/video.svg",width:30,height:30,className:"h-[30px]",alt:"user"})}),s.jsx(i.default,{className:"md:hidden flex items-center",href:"/photos",children:s.jsx(a.default,{src:"/photo.svg",width:30,height:30,className:"h-[30px]",alt:"user"})}),s.jsx(i.default,{className:"md:hidden flex items-center",href:"/reels",children:s.jsx(a.default,{src:"/reel.svg",width:30,height:30,className:"h-[30px]",alt:"user"})})]}),s.jsx("button",{className:"p-2 text-gray-700 rounded-md outline-none md:hidden",onClick:()=>void(o(!d),t&&r(!t)),children:s.jsx(a.default,{src:"/user.png",width:30,height:30,className:"h-[30px]",alt:"user"})})]})]})}),(0,s.jsxs)("div",{className:"flex",children:[c&&(0,s.jsxs)("div",{className:"flex gap-5",children:[s.jsx(i.default,{className:"md:flex hidden items-center",href:"/videos",children:s.jsx(a.default,{src:"/video.svg",width:30,height:30,className:"h-[30px]",alt:"user"})}),s.jsx(i.default,{className:"md:flex hidden items-center",href:"/photos",children:s.jsx(a.default,{src:"/photo.svg",width:30,height:30,className:"h-[30px]",alt:"user"})}),s.jsx(i.default,{className:"md:flex hidden items-center",href:"/reels",children:s.jsx(a.default,{src:"/reel.svg",width:30,height:30,className:"h-[30px]",alt:"user"})})]}),s.jsx("div",{className:`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${d?"p-12 md:p-0 block":"hidden"}`,children:s.jsx("ul",{className:"h-screen md:h-[100%] items-center justify-center md:flex ",children:c?(0,s.jsxs)(s.Fragment,{children:[s.jsx("li",{className:"text-xl py-2 px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent",children:s.jsx(i.default,{href:"/profile",onClick:()=>o(!d),children:"Profile"})}),s.jsx("li",{className:"text-xl py-2 px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent",children:s.jsx(i.default,{href:"/",onClick:()=>void(localStorage.removeItem("loggedIn"),m(!1),d&&o(!1)),children:"Sign out"})})]}):(0,s.jsxs)(s.Fragment,{children:[s.jsx("li",{className:"text-xl py-2 md:px-6 text-[#5e94ff] text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-[#276ffe]  md:hover:bg-transparent",children:s.jsx(i.default,{href:"/sign-in",onClick:()=>o(!d),children:"Sign in"})}),s.jsx("li",{className:"text-xl py-2 px-6 text-[#5e94ff] text-center border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-[#276ffe] md:hover:bg-transparent",children:s.jsx(i.default,{href:"/sign-up",onClick:()=>o(!d),children:"Register"})})]})})})]})]})})})}},3091:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p,metadata:()=>m});var s=r(9510),a=r(1723),i=r.n(a);r(5023);var l=r(8570);let n=(0,l.createProxy)(String.raw`C:\Users\jemme\Desktop\media\media\src\app\navBar\navbar.js`),{__esModule:d,$$typeof:o}=n;n.default;let c=(0,l.createProxy)(String.raw`C:\Users\jemme\Desktop\media\media\src\app\navBar\navbar.js#default`),m={title:"Create Next App",description:"Generated by create next app"};function p({children:e}){return s.jsx("html",{lang:"en",children:(0,s.jsxs)("body",{className:i().className,children:[s.jsx(c,{}),e]})})}},6592:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(9510);function a(){return s.jsx("p",{children:"Profile"})}},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(6621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,392,621],()=>r(3209));module.exports=s})();