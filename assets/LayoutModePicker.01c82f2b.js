import{b as e}from"./handler.bcd7ef84.js";import{u as t}from"./useDesign.9e27b231.js";import{m as s,h as i,b as o,ai as r}from"./index.3471ac16.js";import{_ as n}from"./Picker.8d4b45ef.js";import{m as p,H as a}from"./index.35f01df0.js";import{G as m,a9 as c,b6 as d,ab as l,ae as u,R as f,V as j,W as b}from"./vendor.07696a3b.js";import"./useRootSetting.c202e687.js";import"./propTypes.eec1be73.js";import"./Icon.b68f9da1.js";import"./index.295e01db.js";import"./index.9277ae22.js";import"./useAppInject.07e6580b.js";import"./vuedraggable.a20f9dc1.js";import"./componentSetting.58af93ba.js";import"./ScrollContainer.9e631898.js";import"./useNaiveInternal.a5e325f1.js";import"./useBreakpoint.df800c30.js";import"./index.f1d313c4.js";import"./layoutContentResize.bdf1e512.js";var g=s(m({name:"ThemeModePicker",components:{Picker:n},setup(){const{prefixCls:s}=t("setting-layout-mode-picker"),{getMenuType:n,getIsTopMenu:m}=i(),{t:c}=o();return{t:c,prefixCls:s,menuTypeList:p,handleChange:({mode:t,type:s})=>{e(a.CHANGE_LAYOUT,{mode:t,type:s,split:s===r.MIX&&void 0})},getMenuType:n,getIsTopMenu:m}}}),[["render",function(e,t,s,i,o,r){const n=f("Picker");return j(),c("div",{class:u(e.prefixCls)},[(j(!0),c(d,null,l(e.menuTypeList||[],(t=>(j(),b(n,{key:t.title,"prefix-cls":e.prefixCls,mode:t.type,"current-mode":e.getMenuType,title:e.t(t.title),"tick-center":e.getIsTopMenu,onClick:s=>e.handleChange(t)},null,8,["prefix-cls","mode","current-mode","title","tick-center","onClick"])))),128))],2)}]]);export{g as default};
