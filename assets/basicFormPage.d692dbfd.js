var e=Object.defineProperty,o=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,r=(o,t,l)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[t]=l;import{_ as s}from"./PageWrapper.e82d431e.js";import{_ as p}from"./BasicForm.4dff5274.js";import{G as i,D as c,V as u,W as m,X as b,Y as d,ao as f,b0 as j}from"./vendor.07696a3b.js";import"./useRootSetting.c202e687.js";import"./index.3471ac16.js";import"./useNaiveInternal.a5e325f1.js";import"./useDesign.9e27b231.js";import"./useAppInject.07e6580b.js";import"./propTypes.eec1be73.js";import"./Icon.b68f9da1.js";import"./useBreakpoint.df800c30.js";const P={class:"mx-auto max-w-600px my-4"},v=i((g=((e,o)=>{for(var t in o||(o={}))a.call(o,t)&&r(e,t,o[t]);if(l)for(var t of l(o))n.call(o,t)&&r(e,t,o[t]);return e})({},{name:"BaseFromPage"}),o(g,t({setup(e){const o=[{field:"title",component:"NInput",label:"标题",required:!0,componentProps:{placeholder:"给目标起个名字"}},{field:"dateRange",component:"NDateRangePicker",label:"起止日期",componentProps:{actions:null,updateValueOnClose:!0}},{field:"target",component:"NInputTextarea",label:"目标描述",componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4}},{field:"metrics",component:"NInputTextarea",label:"衡量标准",componentProps:{rows:3}},{field:"client",component:"NInput",label:"客户",labelMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"inviteer",component:"NInput",label:"邀评人",subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"weights",component:"NInputNumber",label:"权重",subLabel:"( 选填 )"},{field:"disclosure",component:"NRadioGroup",label:"目标公开",labelMessage:"客户、邀评人默认被分享",defaultValue:"1",componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosurer",component:"NSelect",label:" ",show:({model:e})=>"2"===e.disclosure,componentProps:{placeholder:"公开给",multiple:!0,options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}],t=c();function l(e){t.success(JSON.stringify(e))}function a(e){}return(e,t)=>{const n=p,r=j,i=s;return u(),m(i,{title:"基础表单",content:"表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。"},{default:b((()=>[d(r,null,{default:b((()=>[f("div",P,[d(n,{"submit-button-text":"提交",schemas:o,"label-width":120,onSubmit:l,onReset:a})])])),_:1})])),_:1})}}}))));var g;export{v as default};
