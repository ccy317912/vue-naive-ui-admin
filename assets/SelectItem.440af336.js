var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,p=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&i(e,r,t[r]);if(s)for(var r of s(t))a.call(t,r)&&i(e,r,t[r]);return e},n=(e,s)=>t(e,r(s));import{u as l}from"./useDesign.9e27b231.js";import{b as m}from"./index.3471ac16.js";import{t as u}from"./toWritableRef.6e703980.js";import{_ as c}from"./Wrapper.4039be8e.js";import{b}from"./handler.bcd7ef84.js";import{G as f,q as j,y as d,W as v,X as y,ae as g,u as O,V as x,Y as S,Z as w,cJ as P,bE as h}from"./vendor.07696a3b.js";import"./index.35f01df0.js";import"./Icon.b68f9da1.js";import"./propTypes.eec1be73.js";import"./index.295e01db.js";import"./index.9277ae22.js";import"./useAppInject.07e6580b.js";import"./useRootSetting.c202e687.js";import"./vuedraggable.a20f9dc1.js";import"./componentSetting.58af93ba.js";import"./ScrollContainer.9e631898.js";import"./useNaiveInternal.a5e325f1.js";import"./useBreakpoint.df800c30.js";import"./index.f1d313c4.js";import"./layoutContentResize.bdf1e512.js";const I=f(n(p({},{inheritAttrs:!1}),{props:{event:{type:Number},title:{type:String},val:{type:[String,Number]},options:{type:Array,default:()=>[]}},setup(e){const t=e,{prefixCls:r}=l("setting-select-item"),{t:s}=m(),o=u(t,"val"),a=j((()=>t.options.map((e=>n(p({},e),{label:s(e.label)})))));function i(e){t.event&&b(t.event,e)}return d((()=>t.options),(e=>{const t=e.map((e=>e.value));t.includes(o.value)||(o.value=t.length>0?t[0]:void 0),i(o.value)})),(t,s)=>{const p=h;return x(),v(c,{class:g(O(r)),title:e.title},{default:y((()=>[S(p,w({value:O(o),"onUpdate:value":s[0]||(s[0]=e=>P(o)?o.value=e:null),class:"min-w-110px",size:"small"},t.$attrs,{options:O(a),onUpdateValue:i}),null,16,["value","options"])])),_:1},8,["class","title"])}}}));export{I as default};
