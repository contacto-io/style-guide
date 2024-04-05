import{j as r}from"./jsx-runtime-Du8NFWEI.js";import{useMDXComponents as i}from"./index-_byTH_QA.js";import{M as p}from"./index-RodzM_vR.js";import{r as d,R as e}from"./index-Dl6G-zuu.js";import{T as g}from"./index-DfD2LYlo.js";import"./iframe-sn4fpJwc.js";import"../sb-preview/runtime.js";import"./index-B_8YWI8i.js";import"./assertThisInitialized-BIGTeGEP.js";import"./index-B_J8iUie.js";import"./toString-Dq7YSAyh.js";import"./index-CyarE4Tq.js";import"./_baseIsEqual-D9cB5ZQa.js";import"./isObject-CrIk3fyR.js";import"./index-DrFu-skq.js";import"./index-DiD84cwB.js";import"./index-Beu9b4Vr.js";import"./index-CTNOGpui.js";import"./CheckOutlined-tf6StMXB.js";import"./index-D89ItNC4.js";import"./index-mFXttzbh.js";import"./toArray-Rh0cCEsr.js";import"./index-B2BRC2NR.js";import"./type-DdM_TOSm.js";import"./motion-DniBM00U.js";import"./reactNode-CXkgB_jW.js";import"./statusUtils-DN1vxHNy.js";import"./toConsumableArray-RzYAKPeW.js";import"./context-CRoYx0oq.js";import"./createSuper-fkzydAXn.js";import"./Compact-DE9VlD5A.js";import"./index-ygQga8nQ.js";import"./index-03mFnIJB.js";import"./iconUtil-XvgpoNC6.js";import"./pickAttrs-D-l_2OcV.js";import"./button-CgtVjqb1.js";import"./wave-BLLeykX_.js";import"./index-B11ci13A.js";import"./row-Oh3WJrhG.js";import"./useFlexGapSupport-CrB0FIES.js";import"./styleChecker-D06dXjTH.js";import"./responsiveObserve-CedoQUlb.js";const c={"primary-color":"#0040E4","primary-color-1":"#2461FF","primary-color-2":"#628EFF","primary-color-3":"#A1BBFF","primary-color-4":"#E0E8FF","primary-color-5":"#022FC6","primary-color-6":"#000FB2","primary-color-7":"#002072","primary-color-8":"#001344","secondary-color":"#8214F0","secondary-color-1":"#9B43F3","secondary-color-2":"#B472F6","secondary-color-3":"#CDA1F9","secondary-color-4":"#F3E7FE","tertiary-color":"#2AD5EF","tertiary-color-1":"#55DDF2","tertiary-color-2":"#7FE6F5","tertiary-color-3":"#AAEEF9","tertiary-color-4":"#EAFBFD","success-color":"#0CC857","success-color-1":"#26D96E","success-color-2":"#33E77B","success-color-3":"#9EF7C2","success-color-4":"#E3FDED","success-color-5":"#E3FDED","warning-color":"#FAA005","warning-color-1":"#FBB337","warning-color-2":"#FCC669","warning-color-3":"#FDD99B","warning-color-4":"#FEF5E6","warning-color-5":"#FEF5E6","danger-color":"#FF4747","danger-color-1":"#FF6C6C","danger-color-2":"#FF9191","danger-color-3":"#FFB5B5","danger-color-4":"#FFEDED","danger-color-5":"#FF4747","danger-color-6":"#FFEDED","pale-grey":"#e7ecf2","gray-1":"#6A6E80","gray-2":"#9B9FAA","gray-3":"#B4B7BF","gray-4":"#CDCFD5","gray-5":"#E6E7EA","gray-6":"#f3f3f4","gray-7":"#51566b","primary-text-color":"#060E2B","secondary-text-color":"#51566b","inactive-text-color":"#989faa","border-color":"#e7ecf2","border-color-1":"#E6E7EA","input-border-color":"var(--gray-5)","dark-bg":"#f8f8fe","radio-color-primary":"#93a3b5","select-hover-primary":"#3c61cf","backgrounds-lightest-gray":"#f3f3f3","color-btn-primary-hover":"#e41d1d","background-highlight-color":"#f6f8fe","blurred-loader-background":"#ffffffad","colors-graybase-gray-2":"#ccd4dc","colors-graybase-gray-3":"#b4bdca","colors-graybase-gray-5":"#5f7188","colors-graybase-gray-6":"#212933","colors-accent-teal-blue":"#5ac8fa","duck-egg-blue":"#e9f1fc","active-green":"#cef4e6"},n=t=>{const[a,s]=d.useState("");return e.createElement("div",null,e.createElement("div",{className:"search-bar",style:{display:"flex",justifyContent:"space-between",alignItems:"center"}},e.createElement(g,{placeholder:"Search by hex code/name",type:"search-box",label:"Search",style:{width:280},onChange:({target:o})=>s(o.value)})),e.createElement("div",{className:"color-grid"},Object.keys(c).filter(o=>~`${o.toLowerCase()}|${c[o].toLowerCase()}`.indexOf(a.toLowerCase())).map((o,m)=>e.createElement("div",{className:"color-box",key:m},e.createElement("div",{className:"color",style:{background:c[o]}}),e.createElement("div",{className:"color-name"},"--",o),e.createElement("div",{className:"color-code"},c[o])))))};n.__docgenInfo={description:"",methods:[],displayName:"ColorBox"};function l(t){const a={h1:"h1",p:"p",...i(),...t.components};return r.jsxs(r.Fragment,{children:[r.jsx(p,{title:"Colors/Color palette"}),`
`,r.jsx("style",{children:`
    .color-grid {
    display: grid;
    margin-top: 32px;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    }

    .color{
      height: 100px;
          border-radius: 4px
    }
    .color-name {
      text-align: center;
    }
  .color-code{
    color: gray;
    font-size: 12px;
    text-align: center;
  }
    
  `}),`
`,r.jsx(a.h1,{id:"contacto-color-palette",children:"Contacto color palette"}),`
`,r.jsx(a.p,{children:"This is a list of colors that would be used in the application. Each has their own name. You can copy the values and the names from here."}),`
`,r.jsx(n,{})]})}function er(t={}){const{wrapper:a}={...i(),...t.components};return a?r.jsx(a,{...t,children:r.jsx(l,{...t})}):l(t)}export{er as default};
