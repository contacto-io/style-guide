import{j as o}from"./jsx-runtime-Du8NFWEI.js";import{useMDXComponents as p}from"./index-_byTH_QA.js";import{d as u,M as g}from"./index-CBgjhs_1.js";import{r as l,R as e}from"./index-Dl6G-zuu.js";import{T as i,a as x}from"./index-DiD84cwB.js";import{d as f}from"./index-DrFu-skq.js";import{c as E}from"./cssVars-D2k93qyV.js";import{R as m,C as a}from"./row-Oh3WJrhG.js";import{T}from"./index-DfD2LYlo.js";import{S as w}from"./index-DzmLEK9w.js";import{C as j}from"./index-1vhso0JK.js";import"./iframe-Bs7s4jI4.js";import"../sb-preview/runtime.js";import"./index-B_8YWI8i.js";import"./assertThisInitialized-BIGTeGEP.js";import"./index-B_J8iUie.js";import"./toString-Dq7YSAyh.js";import"./index-CyarE4Tq.js";import"./_baseIsEqual-D9cB5ZQa.js";import"./isObject-CrIk3fyR.js";import"./index-Beu9b4Vr.js";import"./index-CTNOGpui.js";import"./CheckOutlined-tf6StMXB.js";import"./index-D89ItNC4.js";import"./index-mFXttzbh.js";import"./toArray-Rh0cCEsr.js";import"./index-B2BRC2NR.js";import"./type-DdM_TOSm.js";import"./motion-DniBM00U.js";import"./reactNode-CXkgB_jW.js";import"./statusUtils-DN1vxHNy.js";import"./toConsumableArray-RzYAKPeW.js";import"./context-CRoYx0oq.js";import"./createSuper-fkzydAXn.js";import"./Compact-DE9VlD5A.js";import"./variables-DLUomxCw.js";import"./useFlexGapSupport-CrB0FIES.js";import"./styleChecker-D06dXjTH.js";import"./responsiveObserve-CedoQUlb.js";import"./index-ygQga8nQ.js";import"./index-03mFnIJB.js";import"./iconUtil-XvgpoNC6.js";import"./pickAttrs-D-l_2OcV.js";import"./button-CgtVjqb1.js";import"./wave-BLLeykX_.js";import"./index-B11ci13A.js";import"./index-hQ8JTvWt.js";import"./index-C7MRSMQ4.js";import"./index-CvR2ggBW.js";import"./index-DmsR0A_P.js";import"./getScrollBarSize-BBtCeGc7.js";import"./Dropdown-BR0_Nina.js";const d=()=>{const[n,r]=l.useState(""),[s,h]=l.useState("");return e.createElement("div",null,e.createElement(m,{style:{marginBottom:16,marginTop:24}}),e.createElement(m,{gutter:16,align:"bottom"},e.createElement(a,null,e.createElement(T,{style:{width:322},allowClear:!0,type:"search-box",label:"Find text component",placeholder:"Name, font-size/weight, line height",onChange:({target:t})=>r(t.value)})),e.createElement(a,null,e.createElement(w,{placeholder:"Select color",noShadow:!0,showSearch:!0,allowClear:!0,onChange:h,style:{width:220},options:E.map(t=>({value:t,label:e.createElement("div",{style:{display:"flex",alignItems:"center"}},e.createElement("div",{style:{width:16,height:16,marginRight:16,flexShrink:0,backgroundColor:`var(--${t})`}}),e.createElement("div",{style:{overflow:"hidden"}},e.createElement(i,{ellipsis:!0},t)))}))}))),e.createElement(m,{style:{marginTop:24}},e.createElement(a,{span:24},e.createElement(m,{className:"text-grid",gutter:[16,16]},x.filter(t=>~`${t.name}|${t.fontSize}|${t.lineHeight}|${t.fontWeight}`.indexOf(n.toLowerCase())).map(t=>e.createElement(a,{key:t,span:12},e.createElement(j,{style:{height:"100%"}},e.createElement(m,{justify:"space-between"},e.createElement("div",null,e.createElement(i,{type:"caption"},"Font Size: ",t.fontSize)),e.createElement("div",null,e.createElement(i,{type:"caption"},"Font Weight: ",t.fontWeight)),e.createElement("div",null,e.createElement(i,{type:"caption"},"Line Height: ",t.lineHeight))),e.createElement(i,{type:t.name,color:s||""},"This is a ",t.name),e.createElement(u,{code:f`
                <Text type=${t.name}${s?` color="${s}"`:""}>
                    This is a ${t.name}
                </Text>`.trim(),language:"jsx"}))))))))},y=d;d.__docgenInfo={description:"",methods:[],displayName:"TextFinder"};function c(n){const r={code:"code",h1:"h1",p:"p",strong:"strong",...p(),...n.components};return o.jsxs(o.Fragment,{children:[o.jsx(g,{title:"Typography/Text Helper"}),`
`,o.jsx(r.h1,{id:"how-to-use-the-text-component",children:"How to use the text component?"}),`
`,o.jsxs(r.p,{children:["Most of the time, the QA and design team finds minor text issues that are related to ",o.jsx(r.code,{children:"font-size"}),", ",o.jsx(r.code,{children:"line-height"}),", and ",o.jsx(r.code,{children:"font-weight"}),". So, part of standardising the ",o.jsx(r.strong,{children:"text component"})," is kind of important in every design system. This guide helps you to avoid text related issues. Follow on..!"]}),`
`,o.jsx(r.p,{children:"You can use this search box to search for font-size/weight or line-height to get the component. Just copy the code and use your text."}),`
`,o.jsx(y,{})]})}function je(n={}){const{wrapper:r}={...p(),...n.components};return r?o.jsx(r,{...n,children:o.jsx(c,{...n})}):c(n)}export{je as default};
