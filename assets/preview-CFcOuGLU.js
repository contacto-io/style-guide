function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-K4EAMTCU-C--MLL5U.js","./iframe-Bs7s4jI4.js","./index-Dl6G-zuu.js","./react-18-CezLO5zn.js","./index-B_8YWI8i.js","./index-CBgjhs_1.js","./assertThisInitialized-BIGTeGEP.js","./index-B_J8iUie.js","./toString-Dq7YSAyh.js","./index-CyarE4Tq.js","./_baseIsEqual-D9cB5ZQa.js","./isObject-CrIk3fyR.js","./index-DrFu-skq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./iframe-Bs7s4jI4.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-C--MLL5U.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
