import{p as e,N as t,E as s,B as a,m as n}from"./index.5eb97f6e.js";import{u as r}from"./useDesign.2e5b3993.js";import{_ as o}from"./Icon.6be87540.js";import{G as l,q as i,Y as p,u,aq as f,b6 as c,aY as d,V as m,a9 as y,N as g,W as x,ae as v,ap as b,c0 as S,bc as h,bd as w}from"./vendor.07696a3b.js";function $(t,s="default",a){if(!t||!Reflect.has(t,s))return null;if(!e(t[s]))return null;const n=t[s];return n?n(a):null}function j(e,t=[]){const s=Object.keys(e),a={};return s.map((s=>{if(t.includes(s))return null;a[s]=()=>$(e,s)})),a}var _=l({name:"BasicTips",props:{maxWidth:{type:String,default:"600px"},showIndex:{type:Boolean},color:{type:String,default:"#ffffff"},fontSize:{type:String,default:"14px"},placement:{type:String,default:"right"},text:{type:[Array,String]},trigger:{type:String,default:"hover"}},setup(e,{slots:n}){const{prefixCls:l}=r("basic-tips"),d=i((()=>({color:e.color,fontSize:e.fontSize}))),m=i((()=>({maxWidth:e.maxWidth})));function y(){const t=e.text;return s(t)?p("p",null,[t]):a(t)?t.map(((t,s)=>p("p",{key:t},[p(c,null,[e.showIndex?`${s+1}. `:"",t])]))):null}return()=>p(f,{overlayClassName:`${l}__wrap`,autoAdjustOverflow:!0,overlayStyle:u(m),placement:e.placement,getPopupContainer:()=>t()},{trigger:()=>p("span",{class:[l,"text-$app-text-color-3"]},[$(n)||p(o,{icon:"ant-design:info-circle-outlined"},null)]),default:()=>$(n)||p("div",{style:u(d)},[y()])})}});var z=n(l({props:{tipsMessage:{type:[String,Array],default:""},span:{type:Boolean},normal:{type:Boolean}},setup(e){const t=e,{prefixCls:s}=r("basic-title"),a=d(),n=i((()=>[s,{[`${s}-show-span`]:t.span&&a.default},{[`${s}-normal`]:t.normal}]));return(t,a)=>(m(),y("span",{class:v(u(n))},[g(t.$slots,"default",{},void 0,!0),e.tipsMessage?(m(),x(_,{key:0,class:v(`${u(s)}-tips`),text:e.tipsMessage},null,8,["class","text"])):b("",!0)],2))}}),[["__scopeId","data-v-0aba11dd"]]);function B(e,t=150,s){let a=()=>{e()};const n=w(a,t);a=n;const r=()=>{s&&s.immediate&&a(),window.addEventListener("resize",a)},o=()=>{window.removeEventListener("resize",a)};return S((()=>{r()})),h((()=>{o()})),[r,o]}export{z as _,j as e,B as u};