import{r,R as v,c as k,P as a,_ as D,b as H,j as e}from"./index-CnDxMpIZ.js";import{u as q,T as U,p as F,a as B,b as C,q as T}from"./DefaultLayout-CsHRCkba.js";import"./index.esm-D5x2Hq1Q.js";import{C as V,a as R}from"./CRow-C9PLof9K.js";import{C as g,a as I}from"./CCardBody-C3hrlTZz.js";import{C as w}from"./CCardHeader-CLKUlBjg.js";import{g as _}from"./getTransitionDurationFromElement-Cpu4p4hx.js";import"./cil-user-Dlmw-Gem.js";var P=r.createContext({}),f=r.forwardRef(function(t,x){var d=t.children,p=t.activeItemKey,l=t.className,b=t.onChange,m=r.useId(),h=r.useState(p),c=h[0],o=h[1];return r.useEffect(function(){c&&b&&b(c)},[c]),v.createElement(P.Provider,{value:{_activeItemKey:c,setActiveItemKey:o,id:m}},v.createElement("div",{className:k("tabs",l),ref:x},d))});f.propTypes={activeItemKey:a.oneOfType([a.number,a.string]).isRequired,children:a.node,className:a.string,onChange:a.func};f.displayName="CTabs";var s=r.forwardRef(function(t,x){var d=t.children,p=t.className,l=t.itemKey,b=D(t,["children","className","itemKey"]),m=r.useContext(P),h=m._activeItemKey,c=m.setActiveItemKey,o=m.id,j=function(){return l===h};return v.createElement("button",H({className:k("nav-link",{active:j()},p),id:"".concat(o).concat(l,"-tab"),onClick:function(){return c(l)},onFocus:function(){return c(l)},role:"tab",tabIndex:j()?0:-1,type:"button","aria-controls":"".concat(o).concat(l,"-tab-pane"),"aria-selected":j(),ref:x},b),d)});s.propTypes={children:a.node,className:a.string,disabled:a.bool,itemKey:a.oneOfType([a.number,a.string]).isRequired};s.displayName="CTab";var n=r.forwardRef(function(t,x){var d=t.children,p=t.className,l=t.itemKey,b=t.onHide,m=t.onShow,h=t.transition,c=h===void 0?!0:h,o=t.visible,j=D(t,["children","className","itemKey","onHide","onShow","transition","visible"]),i=r.useContext(P),N=i._activeItemKey,K=i.id,y=r.useRef(),O=q(x,y),E=r.useState(o||N===l),A=E[0],S=E[1];return r.useEffect(function(){o!==void 0&&S(o)},[o]),r.useEffect(function(){S(N===l)},[N]),v.createElement(U,{in:A,nodeRef:y,onEnter:m,onExit:b,timeout:y.current?_(y.current):0},function(L){return v.createElement("div",H({className:k("tab-pane",{active:A,fade:c,show:L==="entered"},p),id:"".concat(K).concat(l,"-tab-pane"),role:"tabpanel","aria-labelledby":"".concat(K).concat(l,"-tab"),tabIndex:0,ref:O},j),d)})});n.propTypes={children:a.node,className:a.string,itemKey:a.oneOfType([a.number,a.string]).isRequired,onHide:a.func,onShow:a.func,transition:a.bool,visible:a.bool};n.displayName="CTabPanel";var u=r.forwardRef(function(t,x){var d,p=t.children,l=t.className,b=t.layout,m=t.variant,h=D(t,["children","className","layout","variant"]),c=r.useRef(null),o=q(x,c),j=function(i){if(c.current!==null&&(i.key==="ArrowDown"||i.key==="ArrowUp"||i.key==="ArrowLeft"||i.key==="ArrowRight"||i.key==="Home"||i.key==="End")){i.preventDefault();var N=i.target,K=Array.from(c.current.querySelectorAll(".nav-link:not(.disabled):not(:disabled)")),y=void 0;i.key==="Home"||i.key==="End"?y=i.key==="End"?K.at(-1):K[0]:y=F(K,N,i.key==="ArrowDown"||i.key==="ArrowRight",!0),y&&y.focus({preventScroll:!0})}};return v.createElement("div",H({className:k("nav",(d={},d["nav-".concat(b)]=b,d["nav-".concat(m)]=m,d),l),role:"tablist",onKeyDown:j,ref:o},h),p)});u.propTypes={children:a.node,className:a.string,layout:a.oneOf(["fill","justified"]),variant:a.oneOf(["pills","tabs","underline","underline-border"])};u.displayName="CTabList";const Z=()=>e.jsxs(V,{children:[e.jsxs(R,{xs:12,children:[e.jsx(B,{href:"components/tabs/"}),e.jsxs(g,{className:"mb-4",children:[e.jsx(w,{children:e.jsx("strong",{children:"React Tabs"})}),e.jsxs(I,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["The basic React tabs example uses the ",e.jsx("code",{children:'variant="tabs"'})," props to generate a tabbed interface."]}),e.jsx(C,{href:"components/tabs/#example",children:e.jsxs(f,{activeItemKey:"profile",children:[e.jsxs(u,{variant:"tabs",children:[e.jsx(s,{itemKey:"home",children:"Home"}),e.jsx(s,{itemKey:"profile",children:"Profile"}),e.jsx(s,{itemKey:"contact",children:"Contact"}),e.jsx(s,{disabled:!0,itemKey:"disabled",children:"Disabled"})]}),e.jsxs(T,{children:[e.jsx(n,{className:"p-3",itemKey:"home",children:"Home tab content"}),e.jsx(n,{className:"p-3",itemKey:"profile",children:"Profile tab content"}),e.jsx(n,{className:"p-3",itemKey:"contact",children:"Contact tab content"}),e.jsx(n,{className:"p-3",itemKey:"disabled",children:"Disabled tab content"})]})]})})]})]})]}),e.jsx(R,{xs:12,children:e.jsxs(g,{className:"mb-4",children:[e.jsxs(w,{children:[e.jsx("strong",{children:"React Tabs"})," ",e.jsx("small",{children:"Unstyled"})]}),e.jsxs(I,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["If you don’t provide the ",e.jsx("code",{children:"variant"})," prop, the component will default to a basic style."]}),e.jsx(C,{href:"components/tabs/#unstyled",children:e.jsxs(f,{activeItemKey:"profile",children:[e.jsxs(u,{children:[e.jsx(s,{itemKey:"home",children:"Home"}),e.jsx(s,{itemKey:"profile",children:"Profile"}),e.jsx(s,{itemKey:"contact",children:"Contact"}),e.jsx(s,{disabled:!0,itemKey:"disabled",children:"Disabled"})]}),e.jsxs(T,{children:[e.jsx(n,{className:"p-3",itemKey:"home",children:"Home tab content"}),e.jsx(n,{className:"p-3",itemKey:"profile",children:"Profile tab content"}),e.jsx(n,{className:"p-3",itemKey:"contact",children:"Contact tab content"}),e.jsx(n,{className:"p-3",itemKey:"disabled",children:"Disabled tab content"})]})]})})]})]})}),e.jsx(R,{xs:12,children:e.jsxs(g,{className:"mb-4",children:[e.jsxs(w,{children:[e.jsx("strong",{children:"React Tabs"})," ",e.jsx("small",{children:"Pills"})]}),e.jsxs(I,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Take that same code, but use ",e.jsx("code",{children:'variant="pills"'})," instead:"]}),e.jsx(C,{href:"components/tabs/#unstyled",children:e.jsxs(f,{activeItemKey:2,children:[e.jsxs(u,{variant:"pills",children:[e.jsx(s,{"aria-controls":"home-tab-pane",itemKey:1,children:"Home"}),e.jsx(s,{"aria-controls":"profile-tab-pane",itemKey:2,children:"Profile"}),e.jsx(s,{"aria-controls":"contact-tab-pane",itemKey:3,children:"Contact"}),e.jsx(s,{"aria-controls":"disabled-tab-pane",disabled:!0,itemKey:4,children:"Disabled"})]}),e.jsxs(T,{children:[e.jsx(n,{className:"p-3","aria-labelledby":"home-tab-pane",itemKey:1,children:"Home tab content"}),e.jsx(n,{className:"p-3","aria-labelledby":"profile-tab-pane",itemKey:2,children:"Profile tab content"}),e.jsx(n,{className:"p-3","aria-labelledby":"contact-tab-pane",itemKey:3,children:"Contact tab content"}),e.jsx(n,{className:"p-3","aria-labelledby":"disabled-tab-pane",itemKey:4,children:"Disabled tab content"})]})]})})]})]})}),e.jsx(R,{xs:12,children:e.jsxs(g,{className:"mb-4",children:[e.jsxs(w,{children:[e.jsx("strong",{children:"React Tabs"})," ",e.jsx("small",{children:"Underline"})]}),e.jsxs(I,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Take that same code, but use ",e.jsx("code",{children:'variant="underline"'})," instead:"]}),e.jsx(C,{href:"components/tabs/#unstyled",children:e.jsxs(f,{activeItemKey:2,children:[e.jsxs(u,{variant:"underline",children:[e.jsx(s,{"aria-controls":"home-tab-pane",itemKey:1,children:"Home"}),e.jsx(s,{"aria-controls":"profile-tab-pane",itemKey:2,children:"Profile"}),e.jsx(s,{"aria-controls":"contact-tab-pane",itemKey:3,children:"Contact"}),e.jsx(s,{"aria-controls":"disabled-tab-pane",disabled:!0,itemKey:4,children:"Disabled"})]}),e.jsxs(T,{children:[e.jsx(n,{className:"py-3","aria-labelledby":"home-tab-pane",itemKey:1,children:"Home tab content"}),e.jsx(n,{className:"py-3","aria-labelledby":"profile-tab-pane",itemKey:2,children:"Profile tab content"}),e.jsx(n,{className:"py-3","aria-labelledby":"contact-tab-pane",itemKey:3,children:"Contact tab content"}),e.jsx(n,{className:"py-3","aria-labelledby":"disabled-tab-pane",itemKey:4,children:"Disabled tab content"})]})]})})]})]})}),e.jsx(R,{xs:12,children:e.jsxs(g,{className:"mb-4",children:[e.jsxs(w,{children:[e.jsx("strong",{children:"React Tabs"})," ",e.jsx("small",{children:"Underline border"})]}),e.jsxs(I,{children:[e.jsxs("p",{className:"text-body-secondary small",children:["Take that same code, but use ",e.jsx("code",{children:'variant="underline-border"'})," instead:"]}),e.jsx(C,{href:"components/tabs/#unstyled",children:e.jsxs(f,{activeItemKey:2,children:[e.jsxs(u,{variant:"underline-border",children:[e.jsx(s,{"aria-controls":"home-tab-pane",itemKey:1,children:"Home"}),e.jsx(s,{"aria-controls":"profile-tab-pane",itemKey:2,children:"Profile"}),e.jsx(s,{"aria-controls":"contact-tab-pane",itemKey:3,children:"Contact"}),e.jsx(s,{"aria-controls":"disabled-tab-pane",disabled:!0,itemKey:4,children:"Disabled"})]}),e.jsxs(T,{children:[e.jsx(n,{className:"py-3","aria-labelledby":"home-tab-pane",itemKey:1,children:"Home tab content"}),e.jsx(n,{className:"py-3","aria-labelledby":"profile-tab-pane",itemKey:2,children:"Profile tab content"}),e.jsx(n,{className:"py-3","aria-labelledby":"contact-tab-pane",itemKey:3,children:"Contact tab content"}),e.jsx(n,{className:"py-3","aria-labelledby":"disabled-tab-pane",itemKey:4,children:"Disabled tab content"})]})]})})]})]})})]});export{Z as default};
