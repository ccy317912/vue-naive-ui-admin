import{_ as e}from"./Icon.b68f9da1.js";import{G as t,bV as a,V as s,W as l,X as i,a7 as o,a9 as r,ab as p,Y as n,aa as d,aF as c,as as u,ao as v,ae as m,b6 as y,bf as b,aO as f,cM as g,b7 as h,bi as x,bj as j,bm as k,bk as w,c2 as C,v as _,a2 as z,q as G,u as T,bT as O,af as $,ap as D,aW as B,ce as M,aL as N,b8 as P,b9 as V}from"./vendor.07696a3b.js";import{u as X}from"./useDesign.9e27b231.js";import"./index.3471ac16.js";import"./propTypes.eec1be73.js";const A=[{key:"1",name:"通知",list:[{id:"000000001",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"你收到了 14 份新周报",datetime:"2022-08-09",type:"1"},{id:"000000002",avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"你推荐的 罗伯茨 已通过第三轮面试",datetime:"2022-08-08",type:"1"},{id:"000000003",avatar:"https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",title:"这种模板可以区分多种通知类型",datetime:"2022-08-07",type:"1"},{id:"000000004",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",datetime:"2022-08-07",type:"1"},{id:"000000005",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"标题可以设置自动显示省略号，本例中标题行数已设为1行，如果内容超过1行将自动截断并支持tooltip显示完整标题。",datetime:"2022-08-07",type:"1"}]},{key:"2",name:"消息",badgeType:"info",list:[{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"莉蛐蛐 评论了你",description:"描述信息描述信息描述信息",datetime:"2017-08-07",type:"2"},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"范德萨 回复了你",description:"这种模板用于提醒谁与你发生了互动",datetime:"2022-08-07",type:"2"},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"标题",description:"请将鼠标移动到此处，以便测试超长的消息在此处将如何处理。本例中设置的描述最大行数为2，超过2行的描述内容将被省略并且可以通过tooltip查看完整内容",datetime:"2024-08-07",type:"2"}]},{key:"3",name:"待办",badgeType:"success",list:[{id:"000000009",avatar:"",title:"任务名称",description:"任务需要在 2017-01-12 20:00 前启动",datetime:"",extra:"未开始",color:"default",type:"3"},{id:"000000010",avatar:"",title:"第三方紧急代码变更",description:"范德萨 需在 2023-01-07 前完成代码变更任务",datetime:"",extra:"马上到期",color:"error",type:"3"},{id:"000000011",avatar:"",title:"信息安全考试",description:"指派史蒂芬斯于 2022-01-09 前完成更新并发布",datetime:"",extra:"已耗时 8 天",color:"warning",type:"3"},{id:"000000012",avatar:"",title:"ABCD 版本发布",description:"指派竹尔于 2021-01-09 前完成更新并发布后面还加了好几个文字以此增加长度",datetime:"",extra:"进行中",color:"info",type:"3"}]}],E={key:1},R={key:1,class:"text-$app-text-color-3"},S={class:"text-$app-text-color-3"},U=t({props:{list:{default:()=>[]},loading:{type:Boolean,default:!1},titleRows:{default:1},descRows:{default:2}},setup:e=>(t,_)=>{const z=b,G=f,T=g,O=h,$=x,D=j,B=k,M=w,N=C,P=a("loading");return s(),l(N,{style:{"max-height":"360px"}},{default:i((()=>[o((s(),l(M,null,{default:i((()=>[e.list.length?(s(!0),r(y,{key:0},p(e.list,(t=>(s(),l(D,{key:t.id,class:"hover:bg-$app-hover-color cursor-pointer",onClick:e=>(e=>{e.read=!0})(t)},{default:i((()=>[n($,{class:m(["px-4",{"opacity-30":t.read}])},d({avatar:i((()=>[t.avatar?(s(),l(z,{key:0,style:{backgroundColor:"transparent"},src:t.avatar},null,8,["src"])):(s(),r("span",E,u(t.avatar),1))])),header:i((()=>[n(T,{"line-clamp":e.titleRows,tooltip:{placement:"top"}},{tooltip:i((()=>[c(u(t.title),1)])),default:i((()=>[n(G,null,{default:i((()=>[c(u(t.title),1)])),_:2},1024)])),_:2},1032,["line-clamp"])])),description:i((()=>[t.description?(s(),l(T,{key:0,"line-clamp":e.descRows},{default:i((()=>[c(u(t.description),1)])),_:2},1032,["line-clamp"])):(s(),r("span",R,u(t.datetime),1))])),_:2},[t.extra?{name:"header-extra",fn:i((()=>[n(O,{type:null==t?void 0:t.color,size:"small"},{default:i((()=>[c(u(t.extra),1)])),_:2},1032,["type"])]))}:void 0,t.description?{name:"footer",fn:i((()=>[v("span",S,u(t.datetime),1)]))}:void 0]),1032,["class"])])),_:2},1032,["onClick"])))),128)):(s(),l(B,{key:1,class:"min-h-200px flex justify-center items-center"}))])),_:1})),[[P,e.loading]])])),_:1})}}),W={class:"app-layout-header-anction-icon mr-1 relative"},q={class:"mt-1px"},F={key:0,class:"flex border-t border-$n-divider-color"},H=t({setup(t){const{prefixCls:a}=X("header-notify"),o=_(z(A)),d=_(!1),c=_(0),b=G((()=>o.value.reduce(((e,t)=>e+t.list.filter((e=>!e.read)).length),0))),f=G((()=>({display:"flex",justifyContent:"center",minWidth:"6rem"}))),g=G((()=>({right:`-${b.value>9?6:1}px`}))),h=e=>{return t=this,a=null,s=function*(){const t=o.value[e];t.list.length>99||(d.value=!0,yield B(1e3),t.list.push(...A[e].list),d.value=!1)},new Promise(((e,l)=>{var i=e=>{try{r(s.next(e))}catch(t){l(t)}},o=e=>{try{r(s.throw(e))}catch(t){l(t)}},r=t=>t.done?e(t.value):Promise.resolve(t.value).then(i,o);r((s=s.apply(t,a)).next())}));var t,a,s};return(t,x)=>{const j=e,k=M,w=N,C=P,_=V,z=O;return s(),r("div",{class:m([T(a),"h-full"])},[n(z,{trigger:"click",class:"!p-0",placement:"bottom"},{trigger:i((()=>[v("span",W,[n(j,{icon:"ant-design:bell-outlined",class:"text-$n-text-color"}),n(k,{value:T(b),show:T(b)>0,class:"absolute top-1.5",style:$(T(g)),max:99},null,8,["value","show","style"])])])),default:i((()=>[n(_,{value:c.value,"onUpdate:value":x[0]||(x[0]=e=>c.value=e),"tab-style":T(f),type:"line","justify-content":"space-evenly",class:"w-20rem"},{default:i((()=>[(s(!0),r(y,null,p(o.value,((e,t)=>(s(),l(C,{key:e.key,name:t},{tab:i((()=>[n(w,{size:3},{default:i((()=>[v("div",q,u(e.name),1),n(k,{value:e.list.filter((e=>!e.read)).length,type:e.badgeType,max:99,show:0!==e.list.length},null,8,["value","type","show"])])),_:2},1024)])),default:i((()=>[n(U,{list:e.list,loading:d.value},null,8,["list","loading"])])),_:2},1032,["name"])))),128))])),_:1},8,["value","tab-style"]),o.value[c.value].list.length>0?(s(),r("div",F,[v("div",{class:"py-3 text-center cursor-pointer flex-1",onClick:x[1]||(x[1]=e=>{return t=c.value,void(o.value[t].list=[]);var t})},"清空"),2!==c.value?(s(),r("div",{key:0,class:"py-3 text-center cursor-pointer flex-1 border-l border-$n-divider-color",onClick:x[2]||(x[2]=e=>h(c.value))},"查看更多")):D("",!0)])):D("",!0)])),_:1})],2)}}});export{H as default};