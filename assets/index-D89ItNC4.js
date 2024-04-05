import{c as X,f as de,e as fe,q as ne,_ as O,C as Ne,b as Pe,a as le,h as q,g as Q,o as ze,t as Te,w as ge,F as Oe,G as De,H as Ie,I as Ve}from"./index-CTNOGpui.js";import{_ as te}from"./assertThisInitialized-BIGTeGEP.js";import{r as f,R as F,g as $e}from"./index-Dl6G-zuu.js";import{T as je,R as ke}from"./index-mFXttzbh.js";import{u as ve,b as pe}from"./index-B2BRC2NR.js";import{t as xe}from"./type-DdM_TOSm.js";import{g as Fe}from"./motion-DniBM00U.js";import{g as Le,i as Me,e as Ee}from"./reactNode-CXkgB_jW.js";var M={adjustX:1,adjustY:1},B=[0,0],Re={left:{points:["cr","cl"],overflow:M,offset:[-4,0],targetOffset:B},right:{points:["cl","cr"],overflow:M,offset:[4,0],targetOffset:B},top:{points:["bc","tc"],overflow:M,offset:[0,-4],targetOffset:B},bottom:{points:["tc","bc"],overflow:M,offset:[0,4],targetOffset:B},topLeft:{points:["bl","tl"],overflow:M,offset:[0,-4],targetOffset:B},leftTop:{points:["tr","tl"],overflow:M,offset:[-4,0],targetOffset:B},topRight:{points:["br","tr"],overflow:M,offset:[0,-4],targetOffset:B},rightTop:{points:["tl","tr"],overflow:M,offset:[4,0],targetOffset:B},bottomRight:{points:["tr","br"],overflow:M,offset:[0,4],targetOffset:B},rightBottom:{points:["bl","br"],overflow:M,offset:[4,0],targetOffset:B},bottomLeft:{points:["tl","bl"],overflow:M,offset:[0,4],targetOffset:B},leftBottom:{points:["br","bl"],overflow:M,offset:[-4,0],targetOffset:B}};function Be(e){var t=e.showArrow,r=e.arrowContent,a=e.children,n=e.prefixCls,i=e.id,l=e.overlayInnerStyle,o=e.className,v=e.style;return f.createElement("div",{className:X("".concat(n,"-content"),o),style:v},t!==!1&&f.createElement("div",{className:"".concat(n,"-arrow"),key:"arrow"},r),f.createElement("div",{className:"".concat(n,"-inner"),id:i,role:"tooltip",style:l},typeof a=="function"?a():a))}var He=function(t,r){var a=t.overlayClassName,n=t.trigger,i=n===void 0?["hover"]:n,l=t.mouseEnterDelay,o=l===void 0?0:l,v=t.mouseLeaveDelay,c=v===void 0?.1:v,u=t.overlayStyle,C=t.prefixCls,h=C===void 0?"rc-tooltip":C,A=t.children,x=t.onVisibleChange,L=t.afterVisibleChange,D=t.transitionName,E=t.animation,w=t.motion,W=t.placement,I=W===void 0?"right":W,V=t.align,K=V===void 0?{}:V,$=t.destroyTooltipOnHide,_=$===void 0?!1:$,N=t.defaultVisible,z=t.getTooltipContainer,p=t.overlayInnerStyle,y=t.arrowContent,P=t.overlay,R=t.id,G=t.showArrow,U=de(t,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"]),j=f.useRef(null);f.useImperativeHandle(r,function(){return j.current});var S=fe({},U);"visible"in t&&(S.popupVisible=t.visible);var T=function(){return f.createElement(Be,{showArrow:G,arrowContent:y,key:"content",prefixCls:h,id:R,overlayInnerStyle:p},P)},k=!1,g=!1;if(typeof _=="boolean")k=_;else if(_&&ne(_)==="object"){var s=_.keepParent;k=s===!0,g=s===!1}return f.createElement(je,te({popupClassName:a,prefixCls:h,popup:T,action:i,builtinPlacements:Re,popupPlacement:I,ref:j,popupAlign:K,getPopupContainer:z,onPopupVisibleChange:x,afterPopupVisibleChange:L,popupTransitionName:D,popupAnimation:E,popupMotion:w,defaultPopupVisible:N,destroyPopupOnHide:k,autoDestroy:g,mouseLeaveDelay:c,popupStyle:u,mouseEnterDelay:o},S),A)};const Ke=f.forwardRef(He);var St=xe("success","processing","error","default","warning"),Ue=xe("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"),Ye={adjustX:1,adjustY:1},ye={adjustX:0,adjustY:0},Xe=[0,0];function he(e){return typeof e=="boolean"?e?Ye:ye:O(O({},ye),e)}function We(e){var t=e.arrowWidth,r=t===void 0?4:t,a=e.horizontalArrowShift,n=a===void 0?16:a,i=e.verticalArrowShift,l=i===void 0?8:i,o=e.autoAdjustOverflow,v=e.arrowPointAtCenter,c={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(n+r),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(l+r)]},topRight:{points:["br","tc"],offset:[n+r,-4]},rightTop:{points:["tl","cr"],offset:[4,-(l+r)]},bottomRight:{points:["tr","bc"],offset:[n+r,4]},rightBottom:{points:["bl","cr"],offset:[4,l+r]},bottomLeft:{points:["tl","bc"],offset:[-(n+r),4]},leftBottom:{points:["br","cl"],offset:[-4,l+r]}};return Object.keys(c).forEach(function(u){c[u]=v?O(O({},c[u]),{overflow:he(o),targetOffset:Xe}):O(O({},Re[u]),{overflow:he(o)}),c[u].ignoreShake=!0}),c}var Ze=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]]);return r},Ge=function(t,r){var a={},n=O({},t);return r.forEach(function(i){t&&i in t&&(a[i]=t[i],delete n[i])}),{picked:a,omitted:n}},be=new RegExp("^(".concat(Ue.join("|"),")(-inverse)?$"));function qe(e,t){var r=e.type;if((r.__ANT_BUTTON===!0||e.type==="button")&&e.props.disabled||r.__ANT_SWITCH===!0&&(e.props.disabled||e.props.loading)||r.__ANT_RADIO===!0&&e.props.disabled){var a=Ge(e.props.style,["position","left","right","top","bottom","float","display","zIndex"]),n=a.picked,i=a.omitted,l=O(O({display:"inline-block"},n),{cursor:"not-allowed",width:e.props.block?"100%":void 0}),o=O(O({},i),{pointerEvents:"none"}),v=Ee(e,{style:o,className:null});return f.createElement("span",{style:l,className:X(e.props.className,"".concat(t,"-disabled-compatible-wrapper"))},v)}return e}var Je=f.forwardRef(function(e,t){var r=f.useContext(Ne),a=r.getPopupContainer,n=r.getPrefixCls,i=r.direction,l=ve(!1,{value:e.open!==void 0?e.open:e.visible,defaultValue:e.defaultOpen!==void 0?e.defaultOpen:e.defaultVisible}),o=Pe(l,2),v=o[0],c=o[1],u=function(){var d=e.title,m=e.overlay;return!d&&!m&&d!==0},C=function(d){var m,Y;c(u()?!1:d),u()||((m=e.onOpenChange)===null||m===void 0||m.call(e,d),(Y=e.onVisibleChange)===null||Y===void 0||Y.call(e,d))},h=function(){var d=e.builtinPlacements,m=e.arrowPointAtCenter,Y=m===void 0?!1:m,Z=e.autoAdjustOverflow,ee=Z===void 0?!0:Z;return d||We({arrowPointAtCenter:Y,autoAdjustOverflow:ee})},A=function(d,m){var Y=h(),Z=Object.keys(Y).find(function(me){var re,oe;return Y[me].points[0]===((re=m.points)===null||re===void 0?void 0:re[0])&&Y[me].points[1]===((oe=m.points)===null||oe===void 0?void 0:oe[1])});if(Z){var ee=d.getBoundingClientRect(),J={top:"50%",left:"50%"};/top|Bottom/.test(Z)?J.top="".concat(ee.height-m.offset[1],"px"):/Top|bottom/.test(Z)&&(J.top="".concat(-m.offset[1],"px")),/left|Right/.test(Z)?J.left="".concat(ee.width-m.offset[0],"px"):/right|Left/.test(Z)&&(J.left="".concat(-m.offset[0],"px")),d.style.transformOrigin="".concat(J.left," ").concat(J.top)}},x=function(){var d=e.title,m=e.overlay;return d===0?d:m||d||""},L=e.getPopupContainer,D=e.placement,E=D===void 0?"top":D,w=e.mouseEnterDelay,W=w===void 0?.1:w,I=e.mouseLeaveDelay,V=I===void 0?.1:I,K=Ze(e,["getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay"]),$=e.prefixCls,_=e.openClassName,N=e.getTooltipContainer,z=e.overlayClassName,p=e.color,y=e.overlayInnerStyle,P=e.children,R=n("tooltip",$),G=n(),U=v;!("open"in e)&&!("visible"in e)&&u()&&(U=!1);var j=qe(Le(P)&&!Me(P)?P:f.createElement("span",null,P),R),S=j.props,T=!S.className||typeof S.className=="string"?X(S.className,le({},_||"".concat(R,"-open"),!0)):S.className,k=X(z,le(le({},"".concat(R,"-rtl"),i==="rtl"),"".concat(R,"-").concat(p),p&&be.test(p))),g=y,s={};return p&&!be.test(p)&&(g=O(O({},y),{background:p}),s={"--antd-arrow-background-color":p}),f.createElement(Ke,O({},K,{placement:E,mouseEnterDelay:W,mouseLeaveDelay:V,prefixCls:R,overlayClassName:k,getTooltipContainer:L||N||a,ref:t,builtinPlacements:h(),overlay:x(),visible:U,onVisibleChange:C,onPopupAlign:A,overlayInnerStyle:g,arrowContent:f.createElement("span",{className:"".concat(R,"-arrow-content"),style:s}),motion:{motionName:Fe(G,"zoom-big-fast",e.transitionName),motionDeadline:1e3}}),U?Ee(j,{className:T}):j)});const xt=Je;function ae(e){return!!(e.addonBefore||e.addonAfter)}function Ae(e){return!!(e.prefix||e.suffix||e.allowClear)}function Ce(e,t,r,a){if(r){var n=t;if(t.type==="click"){var i=e.cloneNode(!0);n=Object.create(t,{target:{value:i},currentTarget:{value:i}}),i.value="",r(n);return}if(a!==void 0){n=Object.create(t,{target:{value:e},currentTarget:{value:e}}),e.value=a,r(n);return}r(n)}}function Qe(e,t){if(e){e.focus(t);var r=t||{},a=r.cursor;if(a){var n=e.value.length;switch(a){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(n,n);break;default:e.setSelectionRange(0,n)}}}}function we(e){return typeof e>"u"||e===null?"":String(e)}var et=function(t){var r=t.inputElement,a=t.prefixCls,n=t.prefix,i=t.suffix,l=t.addonBefore,o=t.addonAfter,v=t.className,c=t.style,u=t.affixWrapperClassName,C=t.groupClassName,h=t.wrapperClassName,A=t.disabled,x=t.readOnly,L=t.focused,D=t.triggerFocus,E=t.allowClear,w=t.value,W=t.handleReset,I=t.hidden,V=f.useRef(null),K=function(S){var T;(T=V.current)!==null&&T!==void 0&&T.contains(S.target)&&(D==null||D())},$=function(){var S;if(!E)return null;var T=!A&&!x&&w,k="".concat(a,"-clear-icon"),g=ne(E)==="object"&&E!==null&&E!==void 0&&E.clearIcon?E.clearIcon:"✖";return F.createElement("span",{onClick:W,onMouseDown:function(b){return b.preventDefault()},className:X(k,(S={},q(S,"".concat(k,"-hidden"),!T),q(S,"".concat(k,"-has-suffix"),!!i),S)),role:"button",tabIndex:-1},g)},_=f.cloneElement(r,{value:w,hidden:I});if(Ae(t)){var N,z="".concat(a,"-affix-wrapper"),p=X(z,(N={},q(N,"".concat(z,"-disabled"),A),q(N,"".concat(z,"-focused"),L),q(N,"".concat(z,"-readonly"),x),q(N,"".concat(z,"-input-with-clear-btn"),i&&E&&w),N),!ae(t)&&v,u),y=(i||E)&&F.createElement("span",{className:"".concat(a,"-suffix")},$(),i);_=F.createElement("span",{className:p,style:c,hidden:!ae(t)&&I,onClick:K,ref:V},n&&F.createElement("span",{className:"".concat(a,"-prefix")},n),f.cloneElement(r,{style:null,value:w,hidden:null}),y)}if(ae(t)){var P="".concat(a,"-group"),R="".concat(P,"-addon"),G=X("".concat(a,"-wrapper"),P,h),U=X("".concat(a,"-group-wrapper"),v,C);return F.createElement("span",{className:U,style:c,hidden:I},F.createElement("span",{className:G},l&&F.createElement("span",{className:R},l),f.cloneElement(_,{style:null,hidden:null}),o&&F.createElement("span",{className:R},o)))}return _},tt=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","type","inputClassName"],Et=f.forwardRef(function(e,t){var r=e.autoComplete,a=e.onChange,n=e.onFocus,i=e.onBlur,l=e.onPressEnter,o=e.onKeyDown,v=e.prefixCls,c=v===void 0?"rc-input":v,u=e.disabled,C=e.htmlSize,h=e.className,A=e.maxLength,x=e.suffix,L=e.showCount,D=e.type,E=D===void 0?"text":D,w=e.inputClassName,W=de(e,tt),I=ve(e.defaultValue,{value:e.value}),V=Q(I,2),K=V[0],$=V[1],_=f.useState(!1),N=Q(_,2),z=N[0],p=N[1],y=f.useRef(null),P=function(s){y.current&&Qe(y.current,s)};f.useImperativeHandle(t,function(){return{focus:P,blur:function(){var s;(s=y.current)===null||s===void 0||s.blur()},setSelectionRange:function(s,b,d){var m;(m=y.current)===null||m===void 0||m.setSelectionRange(s,b,d)},select:function(){var s;(s=y.current)===null||s===void 0||s.select()},input:y.current}}),f.useEffect(function(){p(function(g){return g&&u?!1:g})},[u]);var R=function(s){e.value===void 0&&$(s.target.value),y.current&&Ce(y.current,s,a)},G=function(s){l&&s.key==="Enter"&&l(s),o==null||o(s)},U=function(s){p(!0),n==null||n(s)},j=function(s){p(!1),i==null||i(s)},S=function(s){$(""),P(),y.current&&Ce(y.current,s,a)},T=function(){var s=ze(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","affixWrapperClassName","groupClassName","inputClassName","wrapperClassName","htmlSize"]);return F.createElement("input",te({autoComplete:r},s,{onChange:R,onFocus:U,onBlur:j,onKeyDown:G,className:X(c,q({},"".concat(c,"-disabled"),u),w,!ae(e)&&!Ae(e)&&h),ref:y,size:C,type:E}))},k=function(){var s=Number(A)>0;if(x||L){var b=we(K),d=Te(b).length,m=ne(L)==="object"?L.formatter({value:b,count:d,maxLength:A}):"".concat(d).concat(s?" / ".concat(A):"");return F.createElement(F.Fragment,null,!!L&&F.createElement("span",{className:X("".concat(c,"-show-count-suffix"),q({},"".concat(c,"-show-count-has-suffix"),!!x))},m),x)}return null};return F.createElement(et,te({},W,{prefixCls:c,className:h,inputElement:T(),handleReset:S,value:we(K),focused:z,triggerFocus:P,suffix:k(),disabled:u}))}),at=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,nt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break"],ie={},H;function rt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(t&&ie[r])return ie[r];var a=window.getComputedStyle(e),n=a.getPropertyValue("box-sizing")||a.getPropertyValue("-moz-box-sizing")||a.getPropertyValue("-webkit-box-sizing"),i=parseFloat(a.getPropertyValue("padding-bottom"))+parseFloat(a.getPropertyValue("padding-top")),l=parseFloat(a.getPropertyValue("border-bottom-width"))+parseFloat(a.getPropertyValue("border-top-width")),o=nt.map(function(c){return"".concat(c,":").concat(a.getPropertyValue(c))}).join(";"),v={sizingStyle:o,paddingSize:i,borderSize:l,boxSizing:n};return t&&r&&(ie[r]=v),v}function ot(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;H||(H=document.createElement("textarea"),H.setAttribute("tab-index","-1"),H.setAttribute("aria-hidden","true"),document.body.appendChild(H)),e.getAttribute("wrap")?H.setAttribute("wrap",e.getAttribute("wrap")):H.removeAttribute("wrap");var n=rt(e,t),i=n.paddingSize,l=n.borderSize,o=n.boxSizing,v=n.sizingStyle;H.setAttribute("style","".concat(v,";").concat(at)),H.value=e.value||e.placeholder||"";var c=void 0,u=void 0,C,h=H.scrollHeight;if(o==="border-box"?h+=l:o==="content-box"&&(h-=i),r!==null||a!==null){H.value=" ";var A=H.scrollHeight-i;r!==null&&(c=A*r,o==="border-box"&&(c=c+i+l),h=Math.max(c,h)),a!==null&&(u=A*a,o==="border-box"&&(u=u+i+l),C=h>u?"":"hidden",h=Math.min(u,h))}var x={height:h,overflowY:C,resize:"none"};return c&&(x.minHeight=c),u&&(x.maxHeight=u),x}var lt=["prefixCls","onPressEnter","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],se=0,ue=1,ce=2,_e=f.forwardRef(function(e,t){var r=e.prefixCls,a=r===void 0?"rc-textarea":r;e.onPressEnter;var n=e.defaultValue,i=e.value,l=e.autoSize,o=e.onResize,v=e.className,c=e.style,u=e.disabled,C=e.onChange;e.onInternalAutoSize;var h=de(e,lt),A=ve(n,{value:i,postState:function(d){return d??""}}),x=Q(A,2),L=x[0],D=x[1],E=function(d){D(d.target.value),C==null||C(d)},w=f.useRef();f.useImperativeHandle(t,function(){return{textArea:w.current}});var W=f.useMemo(function(){return l&&ne(l)==="object"?[l.minRows,l.maxRows]:[]},[l]),I=Q(W,2),V=I[0],K=I[1],$=!!l,_=function(){try{if(document.activeElement===w.current){var d=w.current,m=d.selectionStart,Y=d.selectionEnd,Z=d.scrollTop;w.current.setSelectionRange(m,Y),w.current.scrollTop=Z}}catch{}},N=f.useState(ce),z=Q(N,2),p=z[0],y=z[1],P=f.useState(),R=Q(P,2),G=R[0],U=R[1],j=function(){y(se)};pe(function(){$&&j()},[i,V,K,$]),pe(function(){if(p===se)y(ue);else if(p===ue){var b=ot(w.current,!1,V,K);y(ce),U(b)}else _()},[p]);var S=f.useRef(),T=function(){ge.cancel(S.current)},k=function(d){p===ce&&(o==null||o(d),l&&(T(),S.current=ge(function(){j()})))};f.useEffect(function(){return T},[]);var g=$?G:null,s=fe(fe({},c),g);return(p===se||p===ue)&&(s.overflowY="hidden",s.overflowX="hidden"),f.createElement(ke,{onResize:k,disabled:!(l||o)},f.createElement("textarea",te({},h,{ref:w,style:s,className:X(a,v,q({},"".concat(a,"-disabled"),u)),disabled:u,value:L,onChange:E})))}),it=function(e){Oe(r,e);var t=De(r);function r(a){var n;Ie(this,r),n=t.call(this,a),n.resizableTextArea=void 0,n.focus=function(){n.resizableTextArea.textArea.focus()},n.saveTextArea=function(l){n.resizableTextArea=l},n.handleChange=function(l){var o=n.props.onChange;n.setValue(l.target.value),o&&o(l)},n.handleKeyDown=function(l){var o=n.props,v=o.onPressEnter,c=o.onKeyDown;l.keyCode===13&&v&&v(l),c&&c(l)};var i=typeof a.value>"u"||a.value===null?a.defaultValue:a.value;return n.state={value:i},n}return Ve(r,[{key:"setValue",value:function(n,i){"value"in this.props||this.setState({value:n},i)}},{key:"blur",value:function(){this.resizableTextArea.textArea.blur()}},{key:"render",value:function(){return f.createElement(_e,te({},this.props,{value:this.state.value,onKeyDown:this.handleKeyDown,onChange:this.handleChange,ref:this.saveTextArea}))}}],[{key:"getDerivedStateFromProps",value:function(n){return"value"in n?{value:n.value}:null}}]),r}(f.Component);const Rt=Object.freeze(Object.defineProperty({__proto__:null,ResizableTextArea:_e,default:it},Symbol.toStringTag,{value:"Module"}));var st=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],a=0;a<e.rangeCount;a++)r.push(e.getRangeAt(a));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||r.forEach(function(n){e.addRange(n)}),t&&t.focus()}},ut=st,Se={"text/plain":"Text","text/html":"Url",default:"Text"},ct="Copy to clipboard: #{key}, Enter";function ft(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function dt(e,t){var r,a,n,i,l,o,v=!1;t||(t={}),r=t.debug||!1;try{n=ut(),i=document.createRange(),l=document.getSelection(),o=document.createElement("span"),o.textContent=e,o.ariaHidden="true",o.style.all="unset",o.style.position="fixed",o.style.top=0,o.style.clip="rect(0, 0, 0, 0)",o.style.whiteSpace="pre",o.style.webkitUserSelect="text",o.style.MozUserSelect="text",o.style.msUserSelect="text",o.style.userSelect="text",o.addEventListener("copy",function(u){if(u.stopPropagation(),t.format)if(u.preventDefault(),typeof u.clipboardData>"u"){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var C=Se[t.format]||Se.default;window.clipboardData.setData(C,e)}else u.clipboardData.clearData(),u.clipboardData.setData(t.format,e);t.onCopy&&(u.preventDefault(),t.onCopy(u.clipboardData))}),document.body.appendChild(o),i.selectNodeContents(o),l.addRange(i);var c=document.execCommand("copy");if(!c)throw new Error("copy command was unsuccessful");v=!0}catch(u){r&&console.error("unable to copy using execCommand: ",u),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),v=!0}catch(C){r&&console.error("unable to copy using clipboardData: ",C),r&&console.error("falling back to prompt"),a=ft("message"in t?t.message:ct),window.prompt(a,e)}}finally{l&&(typeof l.removeRange=="function"?l.removeRange(i):l.removeAllRanges()),o&&document.body.removeChild(o),n()}return v}var vt=dt;const At=$e(vt);export{et as B,Et as I,Ue as P,xt as T,St as a,it as b,At as c,Ke as d,Be as e,Rt as f,We as g,vt as h};
