import{_ as S}from"./assertThisInitialized-BIGTeGEP.js";import{f as $,g as w,c as D,h as p,e as m}from"./index-CTNOGpui.js";import{u as M}from"./index-B2BRC2NR.js";import{r as t}from"./index-Dl6G-zuu.js";var j=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"],T=t.forwardRef(function(a,g){var c,i=a.prefixCls,n=i===void 0?"rc-checkbox":i,k=a.className,C=a.style,_=a.checked,s=a.disabled,o=a.defaultChecked,b=o===void 0?!1:o,u=a.type,d=u===void 0?"checkbox":u,l=a.onChange,y=$(a,j),r=t.useRef(null),x=M(b,{value:_}),f=w(x,2),v=f[0],N=f[1];t.useImperativeHandle(g,function(){return{focus:function(){var e;(e=r.current)===null||e===void 0||e.focus()},blur:function(){var e;(e=r.current)===null||e===void 0||e.blur()},input:r.current}});var E=D(n,k,(c={},p(c,"".concat(n,"-checked"),v),p(c,"".concat(n,"-disabled"),s),c)),P=function(e){s||("checked"in a||N(e.target.checked),l==null||l({target:m(m({},a),{},{type:d,checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))};return t.createElement("span",{className:E,style:C},t.createElement("input",S({},y,{className:"".concat(n,"-input"),ref:r,onChange:P,disabled:s,checked:!!v,type:d})),t.createElement("span",{className:"".concat(n,"-inner")}))});export{T as C};
