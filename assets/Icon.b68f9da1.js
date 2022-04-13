var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,c=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&s(e,n,t[n]);if(r)for(var n of r(t))i.call(t,n)&&s(e,n,t[n]);return e};import{m as a}from"./index.3471ac16.js";import{G as l,q as f,V as u,a9 as d,ao as p,ae as h,af as g,ah as v,R as y,W as b}from"./vendor.07696a3b.js";import{p as m}from"./propTypes.eec1be73.js";import{u as w}from"./useDesign.9e27b231.js";const x=l({name:"SvgIcon",props:{prefix:{type:String,default:"icon"},name:{type:String,required:!0},size:{type:[Number,String],default:18},spin:{type:Boolean,default:!1}},setup(e){const t=f((()=>`#${e.prefix}-${e.name}`)),n=f((()=>{const{size:t}=e;let n=`${t}`;return n=`${n.replace("px","")}px`,{width:n,height:n}}));return{symbolId:t,prefixCls:e.prefix,getStyle:n}}}),j=["xlink:href"];var I=a(x,[["render",function(e,t,n,r,o,i){return u(),d("svg",{class:h([e.prefixCls,e.$attrs.class,e.spin&&"svg-icon-spin"]),style:g(e.getStyle),"aria-hidden":"true"},[p("use",{"xlink:href":e.symbolId},null,8,j)],6)}]]),O=/^[a-z0-9]+(-[a-z0-9]+)*$/,k=Object.freeze({left:0,top:0,width:16,height:16,rotate:0,vFlip:!1,hFlip:!1});function E(e){return c(c({},k),e)}var $=(e,t,n,r="")=>{const o=e.split(":");if("@"===e.slice(0,1)){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const e=o.pop(),n=o.pop(),i={provider:o.length>0?o[0]:r,prefix:n,name:e};return t&&!_(i)?null:i}const i=o[0],s=i.split("-");if(s.length>1){const e={provider:r,prefix:s.shift(),name:s.join("-")};return t&&!_(e)?null:e}if(n&&""===r){const e={provider:r,prefix:"",name:i};return t&&!_(e,n)?null:e}return null},_=(e,t)=>!!e&&!(""!==e.provider&&!e.provider.match(O)||!(t&&""===e.prefix||e.prefix.match(O))||!e.name.match(O));function A(e,t,n=!1){const r=function t(n,r){var o,i,s,a;if(void 0!==e.icons[n])return Object.assign({},e.icons[n]);if(r>5)return null;if(void 0!==(null==(o=e.aliases)?void 0:o[n])){const o=null==(i=e.aliases)?void 0:i[n],s=t(o.parent,r+1);return s?function(e,t){const n=c({},e);for(const r in k){const e=r;if(void 0!==t[e]){const r=t[e];if(void 0===n[e]){n[e]=r;continue}switch(e){case"rotate":n[e]=(n[e]+r)%4;break;case"hFlip":case"vFlip":n[e]=r!==n[e];break;default:n[e]=r}}}return n}(s,o):s}return 0===r&&void 0!==(null==(s=e.chars)?void 0:s[n])?t(null==(a=e.chars)?void 0:a[n],r+1):null}(t,0);if(r)for(const o in k)void 0===r[o]&&void 0!==e[o]&&(r[o]=e[o]);return r&&n?E(r):r}var M=/^[a-f0-9]+(-[a-f0-9]+)*$/;function S(e,t){for(const n in e){const r=n,o=typeof e[r];if("undefined"!==o)switch(n){case"body":case"parent":if("string"!==o)return n;break;case"hFlip":case"vFlip":case"hidden":if("boolean"!==o){if(!t)return n;delete e[r]}break;case"width":case"height":case"left":case"top":case"rotate":case"inlineHeight":case"inlineTop":case"verticalAlign":if("number"!==o){if(!t)return n;delete e[r]}break;default:if("object"===o){if(!t)return n;delete e[r]}}else delete e[r]}return null}function T(e,t,n){n=n||{};const r=[];if("object"!=typeof e||"object"!=typeof e.icons)return r;const o=n.validate;if(!1!==o)try{!function(e,t){var n;const r=!!(null==t?void 0:t.fix);if("object"!=typeof e||null===e||"object"!=typeof e.icons||!e.icons)throw new Error("Bad icon set");const o=e;if("string"==typeof(null==t?void 0:t.prefix))o.prefix=t.prefix;else if("string"!=typeof o.prefix||!o.prefix.match(O))throw new Error("Invalid prefix");if("string"==typeof(null==t?void 0:t.provider))o.provider=t.provider;else if(void 0!==o.provider){const e=o.provider;if("string"!=typeof e||""!==e&&!e.match(O)){if(!r)throw new Error("Invalid provider");delete o.provider}}const i=o.icons;if(Object.keys(i).forEach((e=>{if(!e.match(O)){if(r)return void delete i[e];throw new Error(`Invalid icon name: "${e}"`)}const t=i[e];if("object"!=typeof t||null===t||"string"!=typeof t.body){if(r)return void delete i[e];throw new Error(`Invalid icon: "${e}"`)}const n="string"==typeof t.parent?"parent":S(t,r);if(null!==n){if(r)return void delete i[e];throw new Error(`Invalid property "${n}" in icon "${e}"`)}})),void 0!==o.not_found&&!(o.not_found instanceof Array)){if(!r)throw new Error("Invalid not_found list");delete o.not_found}if(!Object.keys(o.icons).length&&!(null==(n=o.not_found)?void 0:n.length))throw new Error("Icon set is empty");if(void 0!==o.aliases&&("object"!=typeof o.aliases||null===o.aliases)){if(!r)throw new Error("Invalid aliases list");delete o.aliases}if("object"==typeof o.aliases){let e=function(s,c){if(n.has(s))return!i.has(s);const a=t[s];if(c>5||"object"!=typeof a||null===a||"string"!=typeof a.parent||!s.match(O)){if(r)return delete t[s],i.add(s),!1;throw new Error(`Invalid icon alias: "${s}"`)}const l=a.parent;if(void 0===o.icons[l]&&(void 0===t[l]||!e(l,c+1))){if(r)return delete t[s],i.add(s),!1;throw new Error(`Missing parent icon for alias "${s}`)}r&&void 0!==a.body&&delete a.body;const f=void 0!==a.body?"body":S(a,r);if(null!==f){if(r)return delete t[s],i.add(s),!1;throw new Error(`Invalid property "${f}" in alias "${s}"`)}return n.add(s),!0};const t=o.aliases,n=new Set,i=new Set;Object.keys(t).forEach((t=>{e(t,0)})),r&&!Object.keys(o.aliases).length&&delete o.aliases}if(Object.keys(k).forEach((e=>{const t=typeof k[e],n=typeof o[e];if("undefined"!==n&&n!==t)throw new Error(`Invalid value type for "${e}"`)})),void 0!==o.chars&&("object"!=typeof o.chars||null===o.chars)){if(!r)throw new Error("Invalid characters map");delete o.chars}if("object"==typeof o.chars){const e=o.chars;Object.keys(e).forEach((t=>{var n;if(!t.match(M)||"string"!=typeof e[t]){if(r)return void delete e[t];throw new Error(`Invalid character "${t}"`)}const i=e[t];if(void 0===o.icons[i]&&void 0===(null==(n=o.aliases)?void 0:n[i])){if(r)return void delete e[t];throw new Error(`Character "${t}" points to missing icon "${i}"`)}})),r&&!Object.keys(o.chars).length&&delete o.chars}}(e,"object"==typeof o?o:{fix:!0})}catch(c){return r}e.not_found instanceof Array&&e.not_found.forEach((e=>{t(e,null),r.push(e)}));const i=e.icons;Object.keys(i).forEach((n=>{const o=A(e,n,!0);o&&(t(n,o),r.push(n))}));const s=n.aliases||"all";if("none"!==s&&"object"==typeof e.aliases){const n=e.aliases;Object.keys(n).forEach((o=>{if("variations"===s&&function(e){for(const t in k)if(void 0!==e[t])return!0;return!1}(n[o]))return;const i=A(e,o,!0);i&&(t(o,i),r.push(o))}))}return r}var F=Object.create(null);try{const e=window||self;1===(null==e?void 0:e._iconifyStorage.version)&&(F=e._iconifyStorage.storage)}catch(Je){}function z(e,t){void 0===F[e]&&(F[e]=Object.create(null));const n=F[e];return void 0===n[t]&&(n[t]=function(e,t){return{provider:e,prefix:t,icons:Object.create(null),missing:Object.create(null)}}(e,t)),n[t]}function C(e,t){const n=Date.now();return T(t,((t,r)=>{r?e.icons[t]=r:e.missing[t]=n}))}var L=!1;function R(e){return"boolean"==typeof e&&(L=e),L}function D(e,t){const n=$(e,!0,L);if(!n)return!1;return function(e,t,n){try{if("string"==typeof n.body)return e.icons[t]=Object.freeze(E(n)),!0}catch(Je){}return!1}(z(n.provider,n.prefix),n.name,t)}var N=Object.freeze({inline:!1,width:null,height:null,hAlign:"center",vAlign:"middle",slice:!1,hFlip:!1,vFlip:!1,rotate:0});var P=/(-?[0-9.]*[0-9]+[0-9.]*)/g,U=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function q(e,t,n){if(1===t)return e;if(n=void 0===n?100:n,"number"==typeof e)return Math.ceil(e*t*n)/n;if("string"!=typeof e)return e;const r=e.split(P);if(null===r||!r.length)return e;const o=[];let i=r.shift(),s=U.test(i);for(;;){if(s){const e=parseFloat(i);isNaN(e)?o.push(i):o.push(Math.ceil(e*t*n)/n)}else o.push(i);if(i=r.shift(),void 0===i)return o.join("");s=!s}}function B(e){let t="";switch(e.hAlign){case"left":t+="xMin";break;case"right":t+="xMax";break;default:t+="xMid"}switch(e.vAlign){case"top":t+="YMin";break;case"bottom":t+="YMax";break;default:t+="YMid"}return t+=e.slice?" slice":" meet",t}var H=/\sid="(\S+)"/g,Y="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16),J=0;var V=Object.create(null);function W(e){return V[e]||V[""]}function G(e){let t;if("string"==typeof e.resources)t=[e.resources];else if(t=e.resources,!(t instanceof Array&&t.length))return null;return{resources:t,path:void 0===e.path?"/":e.path,maxURL:e.maxURL?e.maxURL:500,rotate:e.rotate?e.rotate:750,timeout:e.timeout?e.timeout:5e3,random:!0===e.random,index:e.index?e.index:0,dataAfterTimeout:!1!==e.dataAfterTimeout}}for(var K=Object.create(null),Q=["https://api.simplesvg.com","https://api.unisvg.com"],X=[];Q.length>0;)1===Q.length||Math.random()>.5?X.push(Q.shift()):X.push(Q.pop());function Z(e,t){const n=G(t);return null!==n&&(K[e]=n,!0)}function ee(e){return K[e]}K[""]=G({resources:["https://api.iconify.design"].concat(X)});var te=(e,t)=>{let n=e,r=-1!==n.indexOf("?");return Object.keys(t).forEach((e=>{let o;try{o=function(e){switch(typeof e){case"boolean":return e?"true":"false";case"number":case"string":return encodeURIComponent(e);default:throw new Error("Invalid parameter")}}(t[e])}catch(Je){return}n+=(r?"&":"?")+encodeURIComponent(e)+"="+o,r=!0})),n},ne=Object.create(null),re=Object.create(null),oe=(()=>{let e;try{if(e=fetch,"function"==typeof e)return e}catch(Je){}return null})();var ie={prepare:(e,t,n)=>{const r=[];let o=ne[t];void 0===o&&(o=function(e,t){const n=ee(e);if(!n)return 0;let r;if(n.maxURL){let e=0;n.resources.forEach((t=>{const n=t;e=Math.max(e,n.length)}));const o=te(t+".json",{icons:""});r=n.maxURL-e-n.path.length-o.length}else r=0;const o=e+":"+t;return re[e]=n.path,ne[o]=r,r}(e,t));const i="icons";let s={type:i,provider:e,prefix:t,icons:[]},c=0;return n.forEach(((n,a)=>{c+=n.length+1,c>=o&&a>0&&(r.push(s),s={type:i,provider:e,prefix:t,icons:[]},c=n.length),s.icons.push(n)})),r.push(s),r},send:(e,t,n)=>{if(!oe)return void n("abort",424);let r=function(e){if("string"==typeof e){if(void 0===re[e]){const t=ee(e);if(!t)return"/";re[e]=t.path}return re[e]}return"/"}(t.provider);switch(t.type){case"icons":{const e=t.prefix,n=t.icons.join(",");r+=te(e+".json",{icons:n});break}case"custom":{const e=t.uri;r+="/"===e.slice(0,1)?e.slice(1):e;break}default:return void n("abort",400)}let o=503;oe(e+r).then((e=>{const t=e.status;if(200===t)return o=501,e.json();setTimeout((()=>{n(function(e){return 404===e}(t)?"abort":"next",t)}))})).then((e=>{"object"==typeof e&&null!==e?setTimeout((()=>{n("success",e)})):setTimeout((()=>{n("next",o)}))})).catch((()=>{n("next",o)}))}};var se=Object.create(null),ce=Object.create(null);function ae(e,t){e.forEach((e=>{const n=e.provider;if(void 0===se[n])return;const r=se[n],o=e.prefix,i=r[o];i&&(r[o]=i.filter((e=>e.id!==t)))}))}var le=0;var fe={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function ue(e,t,n,r){const o=e.resources.length,i=e.random?Math.floor(Math.random()*o):e.index;let s;if(e.random){let t=e.resources.slice(0);for(s=[];t.length>1;){const e=Math.floor(Math.random()*t.length);s.push(t[e]),t=t.slice(0,e).concat(t.slice(e+1))}s=s.concat(t)}else s=e.resources.slice(i).concat(e.resources.slice(0,i));const c=Date.now();let a,l="pending",f=0,u=null,d=[],p=[];function h(){u&&(clearTimeout(u),u=null)}function g(){"pending"===l&&(l="aborted"),h(),d.forEach((e=>{"pending"===e.status&&(e.status="aborted")})),d=[]}function v(e,t){t&&(p=[]),"function"==typeof e&&p.push(e)}function y(){l="failed",p.forEach((e=>{e(void 0,a)}))}function b(){d.forEach((e=>{"pending"===e.status&&(e.status="aborted")})),d=[]}function m(){if("pending"!==l)return;h();const r=s.shift();if(void 0===r)return d.length?void(u=setTimeout((()=>{h(),"pending"===l&&(b(),y())}),e.timeout)):void y();const o={status:"pending",resource:r,callback:(t,n)=>{!function(t,n,r){const o="success"!==n;switch(d=d.filter((e=>e!==t)),l){case"pending":break;case"failed":if(o||!e.dataAfterTimeout)return;break;default:return}if("abort"===n)return a=r,void y();if(o)return a=r,void(d.length||(s.length?m():y()));if(h(),b(),!e.random){const n=e.resources.indexOf(t.resource);-1!==n&&n!==e.index&&(e.index=n)}l="completed",p.forEach((e=>{e(r)}))}(o,t,n)}};d.push(o),f++,u=setTimeout(m,e.rotate),n(r,t,o.callback)}return"function"==typeof r&&p.push(r),setTimeout(m),function(){return{startTime:c,payload:t,status:l,queriesSent:f,queriesPending:d.length,subscribe:v,abort:g}}}function de(e){const t=function(e){if(!("object"==typeof e&&"object"==typeof e.resources&&e.resources instanceof Array&&e.resources.length))throw new Error("Invalid Reduncancy configuration");const t=Object.create(null);let n;for(n in fe)void 0!==e[n]?t[n]=e[n]:t[n]=fe[n];return t}(e);let n=[];function r(){n=n.filter((e=>"pending"===e().status))}return{query:function(e,o,i){const s=ue(t,e,o,((e,t)=>{r(),i&&i(e,t)}));return n.push(s),s},find:function(e){const t=n.find((t=>e(t)));return void 0!==t?t:null},setIndex:e=>{t.index=e},getIndex:()=>t.index,cleanup:r}}function pe(){}var he=Object.create(null);function ge(e,t,n){let r,o;if("string"==typeof e){const t=W(e);if(!t)return n(void 0,424),pe;o=t.send;const i=function(e){if(void 0===he[e]){const t=ee(e);if(!t)return;const n={config:t,redundancy:de(t)};he[e]=n}return he[e]}(e);i&&(r=i.redundancy)}else{const t=G(e);if(t){r=de(t);const n=W(e.resources?e.resources[0]:"");n&&(o=n.send)}}return r&&o?r.query(t,o,n)().abort:(n(void 0,424),pe)}var ve={};function ye(){}var be=Object.create(null),me=Object.create(null),we=Object.create(null),xe=Object.create(null);function je(e,t){void 0===we[e]&&(we[e]=Object.create(null));const n=we[e];n[t]||(n[t]=!0,setTimeout((()=>{n[t]=!1,function(e,t){void 0===ce[e]&&(ce[e]=Object.create(null));const n=ce[e];n[t]||(n[t]=!0,setTimeout((()=>{if(n[t]=!1,void 0===se[e]||void 0===se[e][t])return;const r=se[e][t].slice(0);if(!r.length)return;const o=z(e,t);let i=!1;r.forEach((n=>{const r=n.icons,s=r.pending.length;r.pending=r.pending.filter((n=>{if(n.prefix!==t)return!0;const s=n.name;if(void 0!==o.icons[s])r.loaded.push({provider:e,prefix:t,name:s});else{if(void 0===o.missing[s])return i=!0,!0;r.missing.push({provider:e,prefix:t,name:s})}return!1})),r.pending.length!==s&&(i||ae([{provider:e,prefix:t}],n.id),n.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),n.abort))}))})))}(e,t)})))}var Ie=Object.create(null);function Oe(e,t,n){void 0===me[e]&&(me[e]=Object.create(null));const r=me[e];void 0===xe[e]&&(xe[e]=Object.create(null));const o=xe[e];void 0===be[e]&&(be[e]=Object.create(null));const i=be[e];void 0===r[t]?r[t]=n:r[t]=r[t].concat(n).sort(),o[t]||(o[t]=!0,setTimeout((()=>{o[t]=!1;const n=r[t];delete r[t];const s=W(e);if(!s)return void function(){const n=(""===e?"":"@"+e+":")+t,r=Math.floor(Date.now()/6e4);Ie[n]<r&&(Ie[n]=r)}();s.prepare(e,t,n).forEach((n=>{ge(e,n,((r,o)=>{const s=z(e,t);if("object"!=typeof r){if(404!==o)return;const e=Date.now();n.icons.forEach((t=>{s.missing[t]=e}))}else try{const n=C(s,r);if(!n.length)return;const o=i[t];n.forEach((e=>{delete o[e]})),ve.store&&ve.store(e,r)}catch(c){}je(e,t)}))}))})))}var ke=(e,t)=>{const n=function(e){const t={loaded:[],missing:[],pending:[]},n=Object.create(null);e.sort(((e,t)=>e.provider!==t.provider?e.provider.localeCompare(t.provider):e.prefix!==t.prefix?e.prefix.localeCompare(t.prefix):e.name.localeCompare(t.name)));let r={provider:"",prefix:"",name:""};return e.forEach((e=>{if(r.name===e.name&&r.prefix===e.prefix&&r.provider===e.provider)return;r=e;const o=e.provider,i=e.prefix,s=e.name;void 0===n[o]&&(n[o]=Object.create(null));const c=n[o];void 0===c[i]&&(c[i]=z(o,i));const a=c[i];let l;l=void 0!==a.icons[s]?t.loaded:""===i||void 0!==a.missing[s]?t.missing:t.pending;const f={provider:o,prefix:i,name:s};l.push(f)})),t}(function(e,t=!0,n=!1){const r=[];return e.forEach((e=>{const o="string"==typeof e?$(e,!1,n):e;t&&!_(o,n)||r.push({provider:o.provider,prefix:o.prefix,name:o.name})})),r}(e,!0,R()));if(!n.pending.length){let e=!0;return t&&setTimeout((()=>{e&&t(n.loaded,n.missing,n.pending,ye)})),()=>{e=!1}}const r=Object.create(null),o=[];let i,s;n.pending.forEach((e=>{const t=e.provider,n=e.prefix;if(n===s&&t===i)return;i=t,s=n,o.push({provider:t,prefix:n}),void 0===be[t]&&(be[t]=Object.create(null));const c=be[t];void 0===c[n]&&(c[n]=Object.create(null)),void 0===r[t]&&(r[t]=Object.create(null));const a=r[t];void 0===a[n]&&(a[n]=[])}));const c=Date.now();return n.pending.forEach((e=>{const t=e.provider,n=e.prefix,o=e.name,i=be[t][n];void 0===i[o]&&(i[o]=c,r[t][n].push(o))})),o.forEach((e=>{const t=e.provider,n=e.prefix;r[t][n].length&&Oe(t,n,r[t][n])})),t?function(e,t,n){const r=le++,o=ae.bind(null,n,r);if(!t.pending.length)return o;const i={id:r,icons:t,callback:e,abort:o};return n.forEach((e=>{const t=e.provider,n=e.prefix;void 0===se[t]&&(se[t]=Object.create(null));const r=se[t];void 0===r[n]&&(r[n]=[]),r[n].push(i)})),o}(t,n,o):ye},Ee={local:!0,session:!0},$e=!1,_e={local:0,session:0},Ae={local:[],session:[]},Me="undefined"==typeof window?{}:window;function Se(e){const t=e+"Storage";try{if(Me&&Me[t]&&"number"==typeof Me[t].length)return Me[t]}catch(Je){}return Ee[e]=!1,null}function Te(e,t,n){try{return e.setItem("iconify-count",n+""),_e[t]=n,!0}catch(Je){return!1}}function Fe(e){const t=e.getItem("iconify-count");if(t){const e=parseInt(t);return e||0}return 0}var ze=()=>{if($e)return;$e=!0;const e=Math.floor(Date.now()/36e5)-168;function t(t){const n=Se(t);if(!n)return;const r=t=>{const r="iconify"+t,o=n.getItem(r);if("string"!=typeof o)return!1;let i=!0;try{const t=JSON.parse(o);if("object"!=typeof t||"number"!=typeof t.cached||t.cached<e||"string"!=typeof t.provider||"object"!=typeof t.data||"string"!=typeof t.data.prefix)i=!1;else{const e=t.provider,n=t.data.prefix;i=C(z(e,n),t.data).length>0}}catch(Je){i=!1}return i||n.removeItem(r),i};try{const e=n.getItem("iconify-version");if("iconify2"!==e)return e&&function(e){try{const t=Fe(e);for(let n=0;n<t;n++)e.removeItem("iconify"+n)}catch(Je){}}(n),void function(e,t){try{e.setItem("iconify-version","iconify2")}catch(Je){}Te(e,t,0)}(n,t);let o=Fe(n);for(let n=o-1;n>=0;n--)r(n)||(n===o-1?o--:Ae[t].push(n));Te(n,t,o)}catch(Je){}}for(const n in Ee)t(n)},Ce=/[\s,]+/;function Le(e,t){t.split(Ce).forEach((t=>{switch(t.trim()){case"horizontal":e.hFlip=!0;break;case"vertical":e.vFlip=!0}}))}function Re(e,t){t.split(Ce).forEach((t=>{const n=t.trim();switch(n){case"left":case"center":case"right":e.hAlign=n;break;case"top":case"middle":case"bottom":e.vAlign=n;break;case"slice":case"crop":e.slice=!0;break;case"meet":e.slice=!1}}))}function De(e,t=0){const n=e.replace(/^-?[0-9.]*/,"");function r(e){for(;e<0;)e+=4;return e%4}if(""===n){const t=parseInt(e);return isNaN(t)?0:r(t)}if(n!==e){let t=0;switch(n){case"%":t=25;break;case"deg":t=90}if(t){let o=parseFloat(e.slice(0,e.length-n.length));return isNaN(o)?0:(o/=t,o%1==0?r(o):0)}}return t}const Ne={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"};let Pe={};["horizontal","vertical"].forEach((e=>{["Align","Flip"].forEach((t=>{const n={attr:e.slice(0,1)+t,boolean:"Flip"===t};Pe[e+"-"+t.toLowerCase()]=n,Pe[e.slice(0,1)+"-"+t.toLowerCase()]=n,Pe[e+t]=n}))}));const Ue=(e,t)=>{const n=function(e,t){const n={};for(const r in e){const o=r;if(n[o]=e[o],void 0===t[o])continue;const i=t[o];switch(o){case"inline":case"slice":"boolean"==typeof i&&(n[o]=i);break;case"hFlip":case"vFlip":!0===i&&(n[o]=!n[o]);break;case"hAlign":case"vAlign":"string"==typeof i&&""!==i&&(n[o]=i);break;case"width":case"height":("string"==typeof i&&""!==i||"number"==typeof i&&i||null===i)&&(n[o]=i);break;case"rotate":"number"==typeof i&&(n[o]+=i)}}return n}(N,t),r=c({},Ne);let o="object"!=typeof t.style||t.style instanceof Array?{}:c({},t.style);for(let c in t){const e=t[c];if(void 0!==e)switch(c){case"icon":case"style":case"onLoad":break;case"inline":case"hFlip":case"vFlip":n[c]=!0===e||"true"===e||1===e;break;case"flip":"string"==typeof e&&Le(n,e);break;case"align":"string"==typeof e&&Re(n,e);break;case"color":o.color=e;break;case"rotate":"string"==typeof e?n[c]=De(e):"number"==typeof e&&(n[c]=e);break;case"ariaHidden":case"aria-hidden":!0!==e&&"true"!==e&&delete r["aria-hidden"];break;default:void 0!==Pe[c]?!Pe[c].boolean||!0!==e&&"true"!==e&&1!==e?Pe[c].boolean||"string"!=typeof e||""===e||(n[Pe[c].attr]=e):n[Pe[c].attr]=!0:void 0===N[c]&&(r[c]=e)}}const i=function(e,t){const n={left:e.left,top:e.top,width:e.width,height:e.height};let r,o,i=e.body;[e,t].forEach((e=>{const t=[],r=e.hFlip,o=e.vFlip;let s,c=e.rotate;switch(r?o?c+=2:(t.push("translate("+(n.width+n.left)+" "+(0-n.top)+")"),t.push("scale(-1 1)"),n.top=n.left=0):o&&(t.push("translate("+(0-n.left)+" "+(n.height+n.top)+")"),t.push("scale(1 -1)"),n.top=n.left=0),c<0&&(c-=4*Math.floor(c/4)),c%=4,c){case 1:s=n.height/2+n.top,t.unshift("rotate(90 "+s+" "+s+")");break;case 2:t.unshift("rotate(180 "+(n.width/2+n.left)+" "+(n.height/2+n.top)+")");break;case 3:s=n.width/2+n.left,t.unshift("rotate(-90 "+s+" "+s+")")}c%2==1&&(0===n.left&&0===n.top||(s=n.left,n.left=n.top,n.top=s),n.width!==n.height&&(s=n.width,n.width=n.height,n.height=s)),t.length&&(i='<g transform="'+t.join(" ")+'">'+i+"</g>")})),null===t.width&&null===t.height?(o="1em",r=q(o,n.width/n.height)):null!==t.width&&null!==t.height?(r=t.width,o=t.height):null!==t.height?(o=t.height,r=q(o,n.width/n.height)):(r=t.width,o=q(r,n.height/n.width)),"auto"===r&&(r=n.width),"auto"===o&&(o=n.height),r="string"==typeof r?r:r+"",o="string"==typeof o?o:o+"";const s={attributes:{width:r,height:o,preserveAspectRatio:B(t),viewBox:n.left+" "+n.top+" "+n.width+" "+n.height},body:i};return t.inline&&(s.inline=!0),s}(e,n);for(let c in i.attributes)r[c]=i.attributes[c];i.inline&&void 0===o.verticalAlign&&void 0===o["vertical-align"]&&(o.verticalAlign="-0.125em");let s=0,a=t.id;return"string"==typeof a&&(a=a.replace(/-/g,"_")),r.innerHTML=function(e,t=Y){const n=[];let r;for(;r=H.exec(e);)n.push(r[1]);return n.length?(n.forEach((n=>{const r="function"==typeof t?t(n):t+J++,o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");e=e.replace(new RegExp('([#;"])('+o+')([")]|\\.[a-z])',"g"),"$1"+r+"$3")})),e):e}(i.body,a?()=>a+"ID"+s++:"iconifyVue"),Object.keys(o).length>0&&(r.style=o),v("svg",r)};var qe;if(R(!0),qe=ie,V[""]=qe,"undefined"!=typeof document&&"undefined"!=typeof window){ve.store=(e,t)=>{function n(n){if(!Ee[n])return!1;const r=Se(n);if(!r)return!1;let o=Ae[n].shift();if(void 0===o&&(o=_e[n],!Te(r,n,o+1)))return!1;try{const n={cached:Math.floor(Date.now()/36e5),provider:e,data:t};r.setItem("iconify"+o,JSON.stringify(n))}catch(Je){return!1}return!0}$e||ze(),Object.keys(t.icons).length&&(t.not_found&&delete(t=Object.assign({},t)).not_found,n("local")||n("session"))},ze();const e=window;if(void 0!==e.IconifyPreload){const t=e.IconifyPreload;"object"==typeof t&&null!==t&&(t instanceof Array?t:[t]).forEach((e=>{try{"object"!=typeof e||null===e||e instanceof Array||"object"!=typeof e.icons||"string"!=typeof e.prefix||function(e,t){if("object"!=typeof e)return!1;if("string"!=typeof t&&(t="string"==typeof e.provider?e.provider:""),L&&""===t&&("string"!=typeof e.prefix||""===e.prefix)){let t=!1;return T(e,((e,n)=>{n&&D(e,n)&&(t=!0)}),{validate:{fix:!0,prefix:""}}),t}!("string"!=typeof e.prefix||!_({provider:t,prefix:e.prefix,name:"a"}))&&C(z(t,e.prefix),e)}(e)}catch(t){}}))}if(void 0!==e.IconifyProviders){const t=e.IconifyProviders;if("object"==typeof t&&null!==t)for(let e in t){try{const n=t[e];if("object"!=typeof n||!n||void 0===n.resources)continue;Z(e,n)}catch(Ve){}}}}const Be=E({body:""}),He=l({inheritAttrs:!1,data:()=>({iconMounted:!1,counter:0}),mounted(){this._name="",this._loadingIcon=null,this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(e,t){if("object"==typeof e&&null!==e&&"string"==typeof e.body)return this._name="",this.abortLoading(),{data:E(e)};let n;if("string"!=typeof e||null===(n=$(e,!1,!0)))return this.abortLoading(),null;const r=function(e){const t="string"==typeof e?$(e,!0,L):e;return t?function(e,t){const n=e.icons[t];return void 0===n?null:n}(z(t.provider,t.prefix),t.name):null}(n);if(null===r)return this._loadingIcon&&this._loadingIcon.name===e||(this.abortLoading(),this._name="",this._loadingIcon={name:e,abort:ke([n],(()=>{this.counter++}))}),null;this.abortLoading(),this._name!==e&&(this._name=e,t&&t(e));const o=["iconify"];return""!==n.prefix&&o.push("iconify--"+n.prefix),""!==n.provider&&o.push("iconify--"+n.provider),{data:r,classes:o}}},render(){this.counter;const e=this.$attrs,r=this.iconMounted?this.getIcon(e.icon,e.onLoad):null;if(!r)return Ue(Be,e);let o=e;var i,s;return r.classes&&(i=c({},e),s={class:("string"==typeof e.class?e.class+" ":"")+r.classes.join(" ")},o=t(i,n(s))),Ue(r.data,o)}});var Ye=a(l({name:"Icon",components:{SvgIcon:I,Iconify:He},props:{size:m.stringNumber,spin:m.bool,color:m.string,depth:[String,Number],icon:m.string,prefix:m.string,useTranstion:m.bool},setup(e){const{prefixCls:t}=w("svg-icon");return{prefixCls:t,isSvgIcon:f((()=>{var t;return null==(t=e.icon)?void 0:t.endsWith("|svg")})),getSvgIcon:f((()=>e.icon.replace("|svg",""))),getIconRef:f((()=>`${e.prefix?e.prefix+":":""}${e.icon}`)),getClass:f((()=>({"animate-spin animate-duration-2000":e.spin,"transition-all n-ease-in-out":e.useTranstion})))}}}),[["render",function(e,t,n,r,o,i){const s=I,c=y("Iconify");return e.isSvgIcon?(u(),b(s,{key:0,size:e.size,name:e.getSvgIcon,class:h([e.prefixCls,e.$attrs.class,"anticon"]),spin:e.spin},null,8,["size","name","class","spin"])):(u(),b(c,{key:1,icon:e.getIconRef,class:h([e.prefixCls,e.getClass,"anticon"]),size:e.size,color:e.color,depth:e.depth},null,8,["icon","class","size","color","depth"]))}],["__scopeId","data-v-e03a4668"]]);export{Ye as _,I as a};
