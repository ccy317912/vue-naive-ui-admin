import{_ as e}from"./BasicModal.544a925e.js";import{a as o}from"./useModal.b7b774c0.js";import{m as s}from"./index.5eb97f6e.js";import{G as t,V as r,W as a,X as i,Y as l,aF as n,aK as p}from"./vendor.07696a3b.js";import"./ScrollContainer.b994555d.js";import"./componentSetting.58af93ba.js";import"./useWindowSizeFn.12b67c52.js";import"./useDesign.2e5b3993.js";import"./Icon.6be87540.js";import"./propTypes.eec1be73.js";const d=t({setup(){const[e,{closeModal:s,setModalProps:t}]=o();return{register:e,closeModal:s,setModalProps:()=>{t({title:"Modal New Title"})}}}}),c=n(" 从内部关闭弹窗 "),m=n(" 从内部修改title ");var u=s(d,[["render",function(o,s,t,n,d,u){const b=p,f=e;return r(),a(f,{onRegister:o.register,title:"Modal Title",tipsMessage:["提示1","提示2"],okButtonProps:{disabled:!0}},{default:i((()=>[l(b,{type:"primary",onClick:o.closeModal,class:"mr-2"},{default:i((()=>[c])),_:1},8,["onClick"]),l(b,{type:"primary",onClick:o.setModalProps},{default:i((()=>[m])),_:1},8,["onClick"])])),_:1},8,["onRegister"])}]]);export{u as default};