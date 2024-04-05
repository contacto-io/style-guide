function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DocsRenderer-K4EAMTCU-BZPMak7S.js","assets/iframe-sn4fpJwc.js","assets/index-Dl6G-zuu.js","assets/react-18-CezLO5zn.js","assets/index-B_8YWI8i.js","assets/index-RodzM_vR.js","assets/assertThisInitialized-BIGTeGEP.js","assets/index-B_J8iUie.js","assets/toString-Dq7YSAyh.js","assets/index-CyarE4Tq.js","assets/_baseIsEqual-D9cB5ZQa.js","assets/isObject-CrIk3fyR.js","assets/index-DrFu-skq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as s}from"./iframe-sn4fpJwc.js";import"../sb-preview/runtime.js";const{global:_}=__STORYBOOK_MODULE_GLOBAL__;var a=Object.entries(_.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-K4EAMTCU-BZPMak7S.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>a[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
