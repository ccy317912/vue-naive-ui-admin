var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,i=(e,i)=>{for(var a in i||(i={}))r.call(i,a)&&o(e,a,i[a]);if(t)for(var a of t(i))n.call(i,a)&&o(e,a,i[a]);return e},a=(e,t,r)=>new Promise(((n,o)=>{var i=e=>{try{l(r.next(e))}catch(t){o(t)}},a=e=>{try{l(r.throw(e))}catch(t){o(t)}},l=e=>e.done?n(e.value):Promise.resolve(e.value).then(i,a);l((r=r.apply(e,t)).next())}));import{a as l,T as u,b as c,c as s,i as d,l as f,_ as p,s as y,d as v,e as b,f as g,h as m,j,k as O,P as h,o as P,m as _}from"./index.3471ac16.js";import{u as S}from"./useDesign.9e27b231.js";import{_ as w,a as x}from"./Icon.b68f9da1.js";import{G as I,Y as M,aq as C,q as K,u as k,v as T,ar as E,V as L,W as N,X as z,ao as A,a9 as B,as as $,ap as V,ac as W,ad as D,ah as F,at as R,au as H,av as U,aw as G,ax as q,ay as X,az as Y,y as J,ae as Q,af as Z,aA as ee,aB as te,aC as re,aD as ne,aE as oe,n as ie}from"./vendor.07696a3b.js";import{u as ae}from"./useAppInject.07e6580b.js";import{p as le}from"./propTypes.eec1be73.js";import{u as ue}from"./useRootSetting.c202e687.js";var ce=I({name:"AppDarkModeToggle",setup(){const{t:e}=c(),{prefixCls:t}=S("app-dark-mode-switch"),[r,n]=l(),o=()=>{r.value===u.DARK?n(u.LIGHT):n(u.DARK)};return()=>M("span",{class:t,onClick:o},[r.value===u.LIGHT?M(C,null,{default:()=>e("common.dark"),trigger:()=>M(w,{icon:"clarity-sun-solid"},null)}):M(C,null,{default:()=>e("common.light"),trigger:()=>M(w,{icon:"clarity-moon-solid"},null)})])}});function se(e){const t=s();"legacy"===d.mode?d.global.locale=e:d.global.locale.value=e,t.setLocaleInfo({locale:e}),y(e)}function de(){const e=s();return{getLocale:K((()=>e.getLocale)),getShowLocalePicker:K((()=>e.getShowPicker)),changeLocale:function(e){return a(this,null,(function*(){const t=d.global;if(k(t.locale)===e)return e;if(f.includes(e))return se(e),e;const r=(yield function(e){switch(e){case"./lang/en.ts":return p((()=>import("./en.930e4ddc.js")),["assets/en.930e4ddc.js","assets/index.3471ac16.js","assets/index.4329796e.css","assets/vendor.07696a3b.js"]);case"./lang/zh_CN.ts":return p((()=>import("./zh_CN.b267baa1.js")),["assets/zh_CN.b267baa1.js","assets/index.3471ac16.js","assets/index.4329796e.css","assets/vendor.07696a3b.js"]);default:return new Promise((function(t,r){("function"==typeof queueMicrotask?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+e)))}))}}(`./lang/${e}.ts`)).default;if(!r)return;const{message:n}=r;return t.setLocaleMessage(e,n),f.push(e),se(e),e}))}}}const fe={key:0,class:"ml-1"},pe=I({props:{showText:{type:Boolean,default:!1},reload:{type:Boolean},triggerCls:{type:String}},setup(e){const t=e,r=T(),{changeLocale:n,getLocale:o}=de(),l=K((()=>{var e;const t=r.value;return t?null==(e=v.find((e=>e.value===t)))?void 0:e.text:""})),u=K((()=>t.triggerCls?{class:t.triggerCls}:{}));function c({label:e,value:t}){const r=t;return F("div",{class:"min-w-120px d-flex flex justify-between items-center"},{default:()=>[F("span",void 0,{default:()=>e}),F("span",{class:"text-xs text-gray-400"},{default:()=>r.toLocaleLowerCase()})]})}function s(e){k(o)!==e&&function(e){a(this,null,(function*(){yield n(e),r.value=e,t.reload&&location.reload()}))}(e)}return E((()=>{r.value=k(o)})),(t,n)=>{const o=w,a=R;return L(),N(a,{value:r.value,"onUpdate:value":[n[0]||(n[0]=e=>r.value=e),s],trigger:"click",options:k(v),"render-label":c},{default:z((()=>[A("span",W(D(i({},k(u)))),[M(o,{icon:"ion-language",class:"text-18px"}),e.showText?(L(),B("span",fe,$(k(l)),1)):V("",!0)],16)])),_:1},8,["value","options"])}}});var ye={},ve={},be={};Object.defineProperty(be,"__esModule",{value:!0}),be.getSlot=void 0,be.getSlot=function(e,t="default",r=[]){const n=e.$slots[t];return void 0===n?r:n()};var ge={};Object.defineProperty(ge,"__esModule",{value:!0}),ge.getVNodeChildren=void 0,ge.getVNodeChildren=function(e,t="default",r=[]){const{children:n}=e;if(null!==n&&"object"==typeof n&&!Array.isArray(n)){const e=n[t];if("function"==typeof e)return e()}return r};var me={};Object.defineProperty(me,"__esModule",{value:!0}),me.keep=void 0,me.keep=function(e,t=[],r){const n={};return t.forEach((t=>{n[t]=e[t]})),Object.assign(n,r)};var je={};Object.defineProperty(je,"__esModule",{value:!0}),je.omit=void 0,je.omit=function(e,t=[],r){const n={};return Object.getOwnPropertyNames(e).forEach((r=>{t.includes(r)||(n[r]=e[r])})),Object.assign(n,r)};var Oe={};Object.defineProperty(Oe,"__esModule",{value:!0}),Oe.flatten=void 0;const he=H;Oe.flatten=function e(t,r=!0,n=[]){return t.forEach((t=>{if(null!==t)if("object"==typeof t)if(Array.isArray(t))e(t,r,n);else if(t.type===he.Fragment){if(null===t.children)return;Array.isArray(t.children)&&e(t.children,r,n)}else t.type!==he.Comment&&n.push(t);else"string"!=typeof t&&"number"!=typeof t||n.push((0,he.createTextVNode)(String(t)))})),n};var Pe={};Object.defineProperty(Pe,"__esModule",{value:!0}),Pe.call=void 0,Pe.call=function e(t,...r){if(!Array.isArray(t))return t(...r);t.forEach((t=>e(t,...r)))};var _e={};Object.defineProperty(_e,"__esModule",{value:!0}),_e.keysOf=void 0,_e.keysOf=function(e){return Object.keys(e)};var Se={};Object.defineProperty(Se,"__esModule",{value:!0}),Se.render=void 0;const we=H;Se.render=(e,...t)=>"function"==typeof e?e(...t):"string"==typeof e?(0,we.createTextVNode)(e):"number"==typeof e?(0,we.createTextVNode)(String(e)):null;var xe={},Ie={},Me={};Object.defineProperty(Me,"__esModule",{value:!0}),Me.throwError=Me.warn=Me.warnOnce=void 0;const Ce=new Set;Me.warnOnce=function(e,t){const r=`[naive/${e}]: ${t}`;Ce.has(r)||Ce.add(r)},Me.warn=function(e,t){},Me.throwError=function(e,t){throw new Error(`[naive/${e}]: ${t}`)};var Ke={};Object.defineProperty(Ke,"__esModule",{value:!0}),Ke.smallerSize=Ke.largerSize=void 0,Ke.largerSize=function(e){switch(e){case"tiny":return"small";case"small":return"medium";case"medium":return"large";case"large":return"huge"}},Ke.smallerSize=function(e){switch(e){case"small":return"tiny";case"medium":return"small";case"large":return"medium";case"huge":return"large"}};var ke={};Object.defineProperty(ke,"__esModule",{value:!0}),ke.getTitleAttribute=void 0,ke.getTitleAttribute=function(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}};var Te={};Object.defineProperty(Te,"__esModule",{value:!0}),Te.hasWindow=void 0,Te.hasWindow="undefined"!=typeof window,function(e){var t=U&&U.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),r=U&&U.__exportStar||function(e,r){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(r,n)||t(r,e,n)};Object.defineProperty(e,"__esModule",{value:!0}),e.getTitleAttribute=e.largerSize=e.smallerSize=e.throwError=e.warnOnce=e.warn=void 0;var n=Me;Object.defineProperty(e,"warn",{enumerable:!0,get:function(){return n.warn}}),Object.defineProperty(e,"warnOnce",{enumerable:!0,get:function(){return n.warnOnce}}),Object.defineProperty(e,"throwError",{enumerable:!0,get:function(){return n.throwError}});var o=Ke;Object.defineProperty(e,"smallerSize",{enumerable:!0,get:function(){return o.smallerSize}}),Object.defineProperty(e,"largerSize",{enumerable:!0,get:function(){return o.largerSize}});var i=ke;Object.defineProperty(e,"getTitleAttribute",{enumerable:!0,get:function(){return i.getTitleAttribute}}),r(Te,e)}(Ie),Object.defineProperty(xe,"__esModule",{value:!0}),xe.getFirstSlotVNode=void 0;const Ee=Oe,Le=Ie;xe.getFirstSlotVNode=function(e,t="default",r){const n=e[t];if(!n)return(0,Le.warn)("getFirstSlotVNode",`slot[${t}] is empty`),null;const o=(0,Ee.flatten)(n(r));return 1===o.length?o[0]:((0,Le.warn)("getFirstSlotVNode",`slot[${t}] should have exactly one child`),null)};var Ne={};Object.defineProperty(Ne,"__esModule",{value:!0}),Ne.createDataKey=void 0,Ne.createDataKey=function(e){return"string"==typeof e?`s-${e}`:`n-${e}`};var ze={};Object.defineProperty(ze,"__esModule",{value:!0}),ze.createRefSetter=void 0,ze.createRefSetter=function(e){return t=>{e.value=t?t.$el:null}};var Ae={};Object.defineProperty(Ae,"__esModule",{value:!0}),Ae.createInjectionKey=void 0,Ae.createInjectionKey=function(e){return e};var Be={};Object.defineProperty(Be,"__esModule",{value:!0}),Be.isSlotEmpty=Be.resolveWrappedSlot=Be.resolveSlotWithProps=Be.resolveSlot=void 0;const $e=H;function Ve(e){return e.some((e=>!(0,$e.isVNode)(e)||e.type!==$e.Comment&&!(e.type===$e.Fragment&&!Ve(e.children))))?e:null}Be.resolveSlot=function(e,t){return e&&Ve(e())||t()},Be.resolveSlotWithProps=function(e,t,r){return e&&Ve(e(t))||r(t)},Be.resolveWrappedSlot=function(e,t){return t(e&&Ve(e())||null)},Be.isSlotEmpty=function(e){return!(e&&Ve(e()))},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isSlotEmpty=e.resolveSlotWithProps=e.resolveWrappedSlot=e.resolveSlot=e.createInjectionKey=e.createRefSetter=e.createDataKey=e.getFirstSlotVNode=e.render=e.keysOf=e.call=e.flatten=e.omit=e.keep=e.getVNodeChildren=e.getSlot=void 0;var t=be;Object.defineProperty(e,"getSlot",{enumerable:!0,get:function(){return t.getSlot}});var r=ge;Object.defineProperty(e,"getVNodeChildren",{enumerable:!0,get:function(){return r.getVNodeChildren}});var n=me;Object.defineProperty(e,"keep",{enumerable:!0,get:function(){return n.keep}});var o=je;Object.defineProperty(e,"omit",{enumerable:!0,get:function(){return o.omit}});var i=Oe;Object.defineProperty(e,"flatten",{enumerable:!0,get:function(){return i.flatten}});var a=Pe;Object.defineProperty(e,"call",{enumerable:!0,get:function(){return a.call}});var l=_e;Object.defineProperty(e,"keysOf",{enumerable:!0,get:function(){return l.keysOf}});var u=Se;Object.defineProperty(e,"render",{enumerable:!0,get:function(){return u.render}});var c=xe;Object.defineProperty(e,"getFirstSlotVNode",{enumerable:!0,get:function(){return c.getFirstSlotVNode}});var s=Ne;Object.defineProperty(e,"createDataKey",{enumerable:!0,get:function(){return s.createDataKey}});var d=ze;Object.defineProperty(e,"createRefSetter",{enumerable:!0,get:function(){return d.createRefSetter}});var f=Ae;Object.defineProperty(e,"createInjectionKey",{enumerable:!0,get:function(){return f.createInjectionKey}});var p=Be;Object.defineProperty(e,"resolveSlot",{enumerable:!0,get:function(){return p.resolveSlot}}),Object.defineProperty(e,"resolveWrappedSlot",{enumerable:!0,get:function(){return p.resolveWrappedSlot}}),Object.defineProperty(e,"resolveSlotWithProps",{enumerable:!0,get:function(){return p.resolveSlotWithProps}}),Object.defineProperty(e,"isSlotEmpty",{enumerable:!0,get:function(){return p.isSlotEmpty}})}(ve);var We={},De={};Object.defineProperty(De,"__esModule",{value:!0}),De.formatLength=void 0;const Fe=/^(\d|\.)+$/,Re=/(\d|\.)+/;De.formatLength=function(e,{c:t=1,offset:r=0,attachPx:n=!0}={}){if("number"==typeof e){const n=(e+r)*t;return 0===n?"0":`${n}px`}if("string"==typeof e){if(Fe.test(e)){const o=(Number(e)+r)*t;return n?0===o?"0":`${o}px`:`${o}`}{const n=Re.exec(e);return n?e.replace(Re,String((Number(n[0])+r)*t)):e}}return e};var He={};Object.defineProperty(He,"__esModule",{value:!0}),He.color2Class=void 0,He.color2Class=function(e){return e.replace(/#|\(|\)|,|\s/g,"_")},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.color2Class=e.formatLength=void 0;var t=De;Object.defineProperty(e,"formatLength",{enumerable:!0,get:function(){return t.formatLength}});var r=He;Object.defineProperty(e,"color2Class",{enumerable:!0,get:function(){return r.color2Class}})}(We);var Ue={},Ge=G(q),qe=G(X),Xe={};function Ye(e,t){return e+("default"===t?"":t.replace(/^[a-z]/,(e=>e.toUpperCase())))}Object.defineProperty(Xe,"__esModule",{value:!0}),Xe.createKey=void 0,Xe.createKey=Ye,Ye("abc","def"),function(e){var t=U&&U.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,"__esModule",{value:!0}),e.createKey=e.find=e.namespace=e.prefix=e.asModal=e.insidePopover=e.insideModal=e.cCB=e.cNotM=e.cM=e.cE=e.cB=e.c=void 0;const r=t(Ge),n=t(qe);e.namespace="n";const o=".n-";e.prefix=o;const i=(0,r.default)(),a=(0,n.default)({blockPrefix:o,elementPrefix:"__",modifierPrefix:"--"});i.use(a);const{c:l,find:u}=i;e.c=l,e.find=u;const{cB:c,cE:s,cM:d,cNotM:f}=a;e.cB=c,e.cE=s,e.cM=d,e.cNotM=f,e.insideModal=function(e){return l((({props:{bPrefix:e}})=>`${e||o}modal, ${e||o}drawer`),[e])},e.insidePopover=function(e){return l((({props:{bPrefix:e}})=>`${e||o}popover:not(${e||o}tooltip)`),[e])},e.asModal=function(e){return l((({props:{bPrefix:e}})=>`&${e||o}modal`),e)};e.cCB=(...e)=>l(">",[c(...e)]);var p=Xe;Object.defineProperty(e,"createKey",{enumerable:!0,get:function(){return p.createKey}})}(Ue);var Je={},Qe={},Ze=G(Y),et={};Object.defineProperty(et,"__esModule",{value:!0}),et.modalInjectionKey=et.modalBodyInjectionKey=void 0;const tt=Ae;et.modalBodyInjectionKey=(0,tt.createInjectionKey)("n-modal-body"),et.modalInjectionKey=(0,tt.createInjectionKey)("n-modal");var rt={};Object.defineProperty(rt,"__esModule",{value:!0}),rt.drawerInjectionKey=rt.drawerBodyInjectionKey=void 0;const nt=Ae;rt.drawerBodyInjectionKey=(0,nt.createInjectionKey)("n-drawer-body"),rt.drawerInjectionKey=(0,nt.createInjectionKey)("n-drawer");var ot={};Object.defineProperty(ot,"__esModule",{value:!0}),ot.popoverBodyInjectionKey=void 0;const it=Ae;ot.popoverBodyInjectionKey=(0,it.createInjectionKey)("n-popover-body");var at={};Object.defineProperty(at,"__esModule",{value:!0}),at.internalSelectionMenuBodyInjectionKey=at.internalSelectionMenuInjectionKey=void 0;const lt=Ae;at.internalSelectionMenuInjectionKey=(0,lt.createInjectionKey)("n-internal-select-menu"),at.internalSelectionMenuBodyInjectionKey=(0,lt.createInjectionKey)("n-internal-select-menu-body"),Object.defineProperty(Qe,"__esModule",{value:!0}),Qe.useAdjustedTo=void 0;const ut=Ze,ct=H,st=et,dt=rt,ft=ot,pt=at;function yt(e){const t=(0,ct.inject)(st.modalBodyInjectionKey,null),r=(0,ct.inject)(dt.drawerBodyInjectionKey,null),n=(0,ct.inject)(ft.popoverBodyInjectionKey,null),o=(0,ct.inject)(pt.internalSelectionMenuBodyInjectionKey,null);return(0,ut.useMemo)((()=>{var i;const{to:a}=e;return void 0!==a?!1===a?"__disabled__":!0===a?"body":a:(null==t?void 0:t.value)?null!==(i=t.value.$el)&&void 0!==i?i:t.value:(null==r?void 0:r.value)?r.value:(null==n?void 0:n.value)?n.value:(null==o?void 0:o.value)?o.value:null!=a?a:"body"}))}Qe.useAdjustedTo=yt,yt.tdkey="__disabled__",yt.propTo={type:[String,Object,Boolean],default:void 0};var vt={};Object.defineProperty(vt,"__esModule",{value:!0}),vt.useHoudini=void 0;let bt=!1;vt.useHoudini=function(){if("undefined"!=typeof window&&window.CSS&&!bt&&(bt=!0,"registerProperty"in(null===window||void 0===window?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch(e){}},function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.useHoudini=e.useAdjustedTo=e.useDeferredTrue=e.useInjectionElementCollection=e.useInjectionCollection=e.useInjectionInstanceCollection=void 0;const t=H;e.useInjectionInstanceCollection=function(e,r,n){var o;const i=(0,t.inject)(e,null);if(null===i)return;const a=null===(o=(0,t.getCurrentInstance)())||void 0===o?void 0:o.proxy;function l(e,t){const n=i[r];void 0!==t&&function(e,t){e[t]||(e[t]=[]);e[t].splice(e[t].findIndex((e=>e===a)),1)}(n,t),void 0!==e&&function(e,t){e[t]||(e[t]=[]);~e[t].findIndex((e=>e===a))||e[t].push(a)}(n,e)}(0,t.watch)(n,l),l(n.value),(0,t.onBeforeUnmount)((()=>{l(void 0,n.value)}))},e.useInjectionCollection=function(e,r,n){const o=(0,t.inject)(e,null);null!==o&&(r in o||(o[r]=[]),o[r].push(n.value),(0,t.watch)(n,((e,t)=>{const n=o[r],i=n.findIndex((e=>e===t));~i&&n.splice(i,1),n.push(e)})),(0,t.onBeforeUnmount)((()=>{const e=o[r],t=e.findIndex((e=>e===n.value));~t&&e.splice(t,1)})))},e.useInjectionElementCollection=function(e,r,n){const o=(0,t.inject)(e,null);null!==o&&(r in o||(o[r]=[]),(0,t.onMounted)((()=>{const e=n();e&&o[r].push(e)})),(0,t.onBeforeUnmount)((()=>{const e=o[r],t=n(),i=e.findIndex((e=>e===t));~i&&e.splice(i,1)})))},e.useDeferredTrue=function(e,r,n){if(!r)return e;const o=(0,t.ref)(e.value);let i=null;return(0,t.watch)(e,(e=>{null!==i&&window.clearTimeout(i),!0===e?n&&!n.value?o.value=!0:i=window.setTimeout((()=>{o.value=!0}),r):o.value=!1})),o};var r=Qe;Object.defineProperty(e,"useAdjustedTo",{enumerable:!0,get:function(){return r.useAdjustedTo}});var n=vt;Object.defineProperty(e,"useHoudini",{enumerable:!0,get:function(){return n.useHoudini}})}(Je),function(e){var t=U&&U.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),r=U&&U.__exportStar||function(e,r){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(r,n)||t(r,e,n)};Object.defineProperty(e,"__esModule",{value:!0}),e.createKey=e.color2Class=e.formatLength=e.getTitleAttribute=e.largerSize=e.smallerSize=e.throwError=e.warnOnce=e.warn=e.isSlotEmpty=e.resolveWrappedSlot=e.resolveSlotWithProps=e.resolveSlot=e.createInjectionKey=e.createRefSetter=e.createDataKey=e.getFirstSlotVNode=e.render=e.keysOf=e.getVNodeChildren=e.getSlot=e.flatten=e.omit=e.keep=e.call=void 0;var n=ve;Object.defineProperty(e,"call",{enumerable:!0,get:function(){return n.call}}),Object.defineProperty(e,"keep",{enumerable:!0,get:function(){return n.keep}}),Object.defineProperty(e,"omit",{enumerable:!0,get:function(){return n.omit}}),Object.defineProperty(e,"flatten",{enumerable:!0,get:function(){return n.flatten}}),Object.defineProperty(e,"getSlot",{enumerable:!0,get:function(){return n.getSlot}}),Object.defineProperty(e,"getVNodeChildren",{enumerable:!0,get:function(){return n.getVNodeChildren}}),Object.defineProperty(e,"keysOf",{enumerable:!0,get:function(){return n.keysOf}}),Object.defineProperty(e,"render",{enumerable:!0,get:function(){return n.render}}),Object.defineProperty(e,"getFirstSlotVNode",{enumerable:!0,get:function(){return n.getFirstSlotVNode}}),Object.defineProperty(e,"createDataKey",{enumerable:!0,get:function(){return n.createDataKey}}),Object.defineProperty(e,"createRefSetter",{enumerable:!0,get:function(){return n.createRefSetter}}),Object.defineProperty(e,"createInjectionKey",{enumerable:!0,get:function(){return n.createInjectionKey}}),Object.defineProperty(e,"resolveSlot",{enumerable:!0,get:function(){return n.resolveSlot}}),Object.defineProperty(e,"resolveSlotWithProps",{enumerable:!0,get:function(){return n.resolveSlotWithProps}}),Object.defineProperty(e,"resolveWrappedSlot",{enumerable:!0,get:function(){return n.resolveWrappedSlot}}),Object.defineProperty(e,"isSlotEmpty",{enumerable:!0,get:function(){return n.isSlotEmpty}});var o=Ie;Object.defineProperty(e,"warn",{enumerable:!0,get:function(){return o.warn}}),Object.defineProperty(e,"warnOnce",{enumerable:!0,get:function(){return o.warnOnce}}),Object.defineProperty(e,"throwError",{enumerable:!0,get:function(){return o.throwError}}),Object.defineProperty(e,"smallerSize",{enumerable:!0,get:function(){return o.smallerSize}}),Object.defineProperty(e,"largerSize",{enumerable:!0,get:function(){return o.largerSize}}),Object.defineProperty(e,"getTitleAttribute",{enumerable:!0,get:function(){return o.getTitleAttribute}});var i=We;Object.defineProperty(e,"formatLength",{enumerable:!0,get:function(){return i.formatLength}}),Object.defineProperty(e,"color2Class",{enumerable:!0,get:function(){return i.color2Class}});var a=Ue;Object.defineProperty(e,"createKey",{enumerable:!0,get:function(){return a.createKey}}),r(Je,e)}(ye);const gt=I({props:{logoSize:le.stringNumber.def(32),showTitle:le.bool.def(!0),titleSize:le.stringNumber.def(18),titleColor:le.string,collapsed:le.bool,collapsedShowTitle:le.bool.def(!1),isStatic:le.bool.def(!1),width:le.stringNumber},setup(e){const t=e;ee((e=>({"8c3d74fa":k(E),"27cd9092":k(w),"7db6c6c6":k(I)})));const{prefixCls:r}=S("app-logo"),n=b(),{title:o}=g(),{getMenuWidth:a,getMenuRootIndent:l,getCollapsed:u}=m(),{getIsMobile:c}=ae(),{getIsDarkMode:s}=ue(),{getMenuInverted:d}=m(),f=T(),p=T(),y=T(`inset(0px ${t.collapsed?100:0}% 0px 0px)`);J([f,p,()=>t.showTitle],(()=>{!function(){const e=re(f),r=re(p);if(!e||!r||!t.showTitle)return;const n=function(...e){return()=>{const[t,r]=e,n=t.offsetWidth,o=r.offsetWidth,i=o-n+r.offsetLeft+16;y.value=`inset(0px ${i<0?0:Math.min(i,o+1)}px 0px 0px)`}}(e,r);let o;n(),ne(e,"transitionstart",(()=>{o?o.resume():o=oe(n)})),ne(e,"transitionend",(()=>{o&&o.pause()}))}()}));const v=j(),P=K((()=>{const{collapsed:e,collapsedShowTitle:r,isStatic:n,width:o}=t;return i({},n?{}:{paddingLeft:e?"7px":l.value-4+"px",width:(null!=e?e:u.value)&&!r?ye.formatLength(O):ye.formatLength((null!=o?o:c.value)?`${te(100,a.value,240)}px`:a.value)})})),_=K((()=>({fontSize:ye.formatLength(t.logoSize),transition:"all var(--app-transition-duration) var(--app-bezier)",minWidth:ye.formatLength(t.logoSize),zIndex:10}))),w=K((()=>k(s)||k(d)?"white":"black")),I=K((()=>k(s)||k(d)?"var(--app-primary-color)":"#b8292d")),C=K((()=>{const{titleSize:e,titleColor:r}=t;return i(i({fontSize:ye.formatLength(e),lineHeight:1.3},t.isStatic?{}:{clipPath:y.value}),r?{color:r}:{})})),E=K((()=>t.collapsed?0:"100%")),N=K((()=>o));function z(){v(n.getUserInfo.homePath||h.BASE_HOME)}return(t,n)=>{const o=x;return L(),B("div",{ref_key:"wrapperEl",ref:f,class:"flex items-center duration-300 ease-in-out cursor-pointer",style:Z(k(P)),onClick:z},[M(o,{name:"logo",class:Q([`${k(r)}`]),size:e.logoSize,style:Z(k(_))},null,8,["class","size","style"]),e.showTitle?(L(),B("div",{key:0,ref_key:"titleEl",ref:p,class:Q(["text-$app-primary-color dark:text-white font-segoe transition-colors duration-300 ease-in-out ml-3 font-semibold",[`${k(r)}__title`]]),style:Z(k(C))},$(k(N)),7)):V("",!0)],4)}}});var mt=_(I({name:"LayoutFooter",props:{show:Boolean},setup(){const{getShowFooter:e}=ue(),{currentRoute:t}=ie(),{prefixCls:r}=S("layout-footer");return{getShowLayoutFooter:K((()=>{var r;return k(e)&&!(null==(r=k(t).meta)?void 0:r.hiddenFooter)})),prefixCls:r,GITHUB_URL:"https://www.baidu.com",openWindow:P}}}),[["render",function(e,t,r,n,o,i){const a=w;return e.show||e.getShowLayoutFooter?(L(),B("footer",{key:0,class:Q(e.prefixCls)},[M(a,{icon:"ant-design:github-filled",class:Q(`${e.prefixCls}__icon`),onClick:t[0]||(t[0]=t=>e.openWindow(e.GITHUB_URL))},null,8,["class"]),A("div",{class:Q(`${e.prefixCls}__text`)},"Copyright ©2022 Aso.design",2)],2)):V("",!0)}]]);export{mt as F,gt as _,pe as a,ce as b,ye as c,de as u};
