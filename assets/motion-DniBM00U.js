import{t as g}from"./type-DdM_TOSm.js";var n=function(){return{height:0,opacity:0}},a=function(t){var e=t.scrollHeight;return{height:e,opacity:1}},p=function(t){return{height:t?t.offsetHeight:0}},o=function(t,e){return(e==null?void 0:e.deadline)===!0||e.propertyName==="height"},u={motionName:"ant-motion-collapse",onAppearStart:n,onEnterStart:n,onAppearActive:a,onEnterActive:a,onLeaveStart:p,onLeaveActive:n,onAppearEnd:o,onEnterEnd:o,onLeaveEnd:o,motionDeadline:500};g("bottomLeft","bottomRight","topLeft","topRight");var h=function(t){return t!==void 0&&(t==="topLeft"||t==="topRight")?"slide-down":"slide-up"},s=function(t,e,r){return r!==void 0?r:"".concat(t,"-").concat(e)};export{h as a,u as c,s as g};
