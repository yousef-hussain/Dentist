import{p as u,m,a as h,g as p,u as i,c as t,r as k,o as _,b as v,w as f,d as g,e as C,f as w}from"./index-4b9b8c67.js";import{u as P,a as b,m as A,c as B}from"./ssrBoot-5d9d94c5.js";const M=u({scrollable:Boolean,...m(),...h({tag:"main"})},"VMain"),x=p()({name:"VMain",props:M(),setup(e,l){let{slots:a}=l;const{mainStyles:s}=P(),{ssrBootStyles:r}=b();return i(()=>t(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[s.value,r.value,e.style]},{default:()=>{var o,n;return[e.scrollable?t("div",{class:"v-main__scroller"},[(o=a.default)==null?void 0:o.call(a)]):(n=a.default)==null?void 0:n.call(a)]}})),{}}}),L={__name:"View",setup(e){return(l,a)=>{const s=k("router-view");return _(),v(x,null,{default:f(()=>[t(s)]),_:1})}}};const S=u({...m(),...A({fullHeight:!0}),...g()},"VApp"),R=p()({name:"VApp",props:S(),setup(e,l){let{slots:a}=l;const s=C(e),{layoutClasses:r,layoutStyles:o,getLayoutItem:n,items:y,layoutRef:d}=B(e),{rtlClasses:V}=w();return i(()=>{var c;return t("div",{ref:d,class:["v-application",s.themeClasses.value,r.value,V.value,e.class],style:[o.value,e.style]},[t("div",{class:"v-application__wrap"},[(c=a.default)==null?void 0:c.call(a)])])}),{getLayoutItem:n,items:y,theme:s}}}),D={__name:"Default",setup(e){return(l,a)=>(_(),v(R,null,{default:f(()=>[t(L)]),_:1}))}};export{D as default};