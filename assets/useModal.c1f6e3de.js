import{I as o,Q as a,p as l}from"./index.da21496c.js";import{r as n,q as s,u as e,v as r,A as t,bR as u,t as d,aS as i,bc as c,ar as v,w as M}from"./vendor.07696a3b.js";const p=n({}),g=n({});function h(){const l=r(null),n=r(!1),c=r("");const v=()=>{const o=e(l);return o||a("useModal instance is undefined!"),o};return[function(a,s){if(!t())throw new Error("useModal() can only be used inside setup() or functional components!");c.value=s,u((()=>{l.value=null,n.value=!1,p[e(c)]=null})),e(n)&&o()&&a===e(l)||(l.value=a,n.value=!0,a.emitShow=(o,a)=>{g[a]=o})},{setModalProps:o=>{var a;null==(a=v())||a.setModalProps(o)},getShow:s((()=>g[~~e(c)])),redoModalHeight:()=>{var o,a;null==(a=null==(o=v())?void 0:o.redoModalHeight)||a.call(o)},openModal:(o=!0,a,l=!0)=>{var n;if(null==(n=v())||n.setModalProps({show:o}),!a)return;const s=e(c);if(l)return p[s]=null,void(p[s]=d(a));i(d(p[s]),d(a))||(p[s]=d(a))},closeModal:()=>{var o;null==(o=v())||o.setModalProps({show:!1})}}]}const f=o=>{const n=r(null),u=t(),d=r(""),i=()=>{const o=e(n);return o||a("useModalInner instance is undefined!"),o};return v((()=>{const a=p[e(d)];a&&o&&l(o)&&M((()=>{o(a)}))})),[(o,a)=>{c((()=>{n.value=null})),d.value=a,n.value=o,null==u||u.emit("register",o,a)},{changeLoading:(o=!0)=>{var a;null==(a=i())||a.setModalProps({loading:o})},getShow:s((()=>g[~~e(d)])),changeOkLoading:(o=!0)=>{var a;null==(a=i())||a.setModalProps({confirmLoading:o})},closeModal:()=>{var o;null==(o=i())||o.setModalProps({show:!1})},setModalProps:o=>{var a;null==(a=i())||a.setModalProps(o)},redoModalHeight:()=>{var o;const a=null==(o=i())?void 0:o.redoModalHeight;a&&a()}}]};export{f as a,h as u};