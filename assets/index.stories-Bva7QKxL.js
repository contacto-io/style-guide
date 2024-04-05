import{r as T,g as Xe,R as M}from"./index-Dl6G-zuu.js";import{P as p}from"./index-Beu9b4Vr.js";import{g as ze,c as j,h as K,F as we,G as Se,H as Ie,I as Ee,f as Ve,m as qe,t as Je,q as Qe,C as Te,a as k,_ as W,o as Ze,b as ke}from"./index-CTNOGpui.js";import{e as he,f as q,c as J,b as ie,a as se,_ as le,d as C}from"./reactNode-CXkgB_jW.js";import{r as ce}from"./index-B_8YWI8i.js";import{_ as et}from"./toConsumableArray-RzYAKPeW.js";import{I as Pe}from"./index-ygQga8nQ.js";import{R as tt}from"./RightOutlined--NLgAFP1.js";import{t as Ne}from"./toArray-Rh0cCEsr.js";import{s as oe}from"./index-Dx1qqzbC.js";import{_ as pe}from"./assertThisInitialized-BIGTeGEP.js";import{c as nt}from"./motion-DniBM00U.js";import"./toString-Dq7YSAyh.js";import"./type-DdM_TOSm.js";var Oe=T.forwardRef(function(t,n){var a,s=t.prefixCls,i=t.forceRender,d=t.className,c=t.style,e=t.children,l=t.isActive,r=t.role,o=T.useState(l||i),u=ze(o,2),h=u[0],f=u[1];return T.useEffect(function(){(i||l)&&f(!0)},[i,l]),h?T.createElement("div",{ref:n,className:j("".concat(s,"-content"),(a={},K(a,"".concat(s,"-content-active"),l),K(a,"".concat(s,"-content-inactive"),!l),a),d),style:c,role:r},T.createElement("div",{className:"".concat(s,"-content-box")},e)):null});Oe.displayName="PanelContent";var rt=["className","id","style","prefixCls","headerClass","children","isActive","destroyInactivePanel","accordion","forceRender","openMotion","extra","collapsible"],Ae=function(t){we(a,t);var n=Se(a);function a(){var s;Ie(this,a);for(var i=arguments.length,d=new Array(i),c=0;c<i;c++)d[c]=arguments[c];return s=n.call.apply(n,[this].concat(d)),s.onItemClick=function(){var e=s.props,l=e.onItemClick,r=e.panelKey;typeof l=="function"&&l(r)},s.handleKeyPress=function(e){(e.key==="Enter"||e.keyCode===13||e.which===13)&&s.onItemClick()},s.renderIcon=function(){var e=s.props,l=e.showArrow,r=e.expandIcon,o=e.prefixCls,u=e.collapsible;if(!l)return null;var h=typeof r=="function"?r(s.props):T.createElement("i",{className:"arrow"});return h&&T.createElement("div",{className:"".concat(o,"-expand-icon"),onClick:u==="header"||u==="icon"?s.onItemClick:null},h)},s.renderTitle=function(){var e=s.props,l=e.header,r=e.prefixCls,o=e.collapsible;return T.createElement("span",{className:"".concat(r,"-header-text"),onClick:o==="header"?s.onItemClick:null},l)},s}return Ee(a,[{key:"shouldComponentUpdate",value:function(i){return!oe(this.props,i)}},{key:"render",value:function(){var i,d,c=this.props,e=c.className,l=c.id,r=c.style,o=c.prefixCls,u=c.headerClass,h=c.children,f=c.isActive,y=c.destroyInactivePanel,m=c.accordion,P=c.forceRender,E=c.openMotion,w=c.extra,b=c.collapsible,v=Ve(c,rt),g=b==="disabled",N=b==="header",x=b==="icon",O=j((i={},K(i,"".concat(o,"-item"),!0),K(i,"".concat(o,"-item-active"),f),K(i,"".concat(o,"-item-disabled"),g),i),e),A=j("".concat(o,"-header"),(d={},K(d,u,u),K(d,"".concat(o,"-header-collapsible-only"),N),K(d,"".concat(o,"-icon-collapsible-only"),x),d)),S={className:A,"aria-expanded":f,"aria-disabled":g,onKeyPress:this.handleKeyPress};!N&&!x&&(S.onClick=this.onItemClick,S.role=m?"tab":"button",S.tabIndex=g?-1:0);var I=w!=null&&typeof w!="boolean";return delete v.header,delete v.panelKey,delete v.onItemClick,delete v.showArrow,delete v.expandIcon,T.createElement("div",pe({},v,{className:O,style:r,id:l}),T.createElement("div",S,this.renderIcon(),this.renderTitle(),I&&T.createElement("div",{className:"".concat(o,"-extra")},w)),T.createElement(qe,pe({visible:f,leavedClassName:"".concat(o,"-content-hidden")},E,{forceRender:P,removeOnLeave:y}),function(R,D){var H=R.className,U=R.style;return T.createElement(Oe,{ref:D,prefixCls:o,className:H,style:U,isActive:f,forceRender:P,role:m?"tabpanel":null},h)}))}}]),a}(T.Component);Ae.defaultProps={showArrow:!0,isActive:!1,onItemClick:function(){},headerClass:"",forceRender:!1};function ve(t){var n=t;if(!Array.isArray(n)){var a=Qe(n);n=a==="number"||a==="string"?[n]:[]}return n.map(function(s){return String(s)})}var Q=function(t){we(a,t);var n=Se(a);function a(s){var i;Ie(this,a),i=n.call(this,s),i.onClickItem=function(l){var r=i.state.activeKey;if(i.props.accordion)r=r[0]===l?[]:[l];else{r=Je(r);var o=r.indexOf(l),u=o>-1;u?r.splice(o,1):r.push(l)}i.setActiveKey(r)},i.getNewChild=function(l,r){if(!l)return null;var o=i.state.activeKey,u=i.props,h=u.prefixCls,f=u.openMotion,y=u.accordion,m=u.destroyInactivePanel,P=u.expandIcon,E=u.collapsible,w=l.key||String(r),b=l.props,v=b.header,g=b.headerClass,N=b.destroyInactivePanel,x=b.collapsible,O=!1;y?O=o[0]===w:O=o.indexOf(w)>-1;var A=x??E,S={key:w,panelKey:w,header:v,headerClass:g,isActive:O,prefixCls:h,destroyInactivePanel:N??m,openMotion:f,accordion:y,children:l.props.children,onItemClick:A==="disabled"?null:i.onClickItem,expandIcon:P,collapsible:A};return typeof l.type=="string"?l:(Object.keys(S).forEach(function(I){typeof S[I]>"u"&&delete S[I]}),T.cloneElement(l,S))},i.getItems=function(){var l=i.props.children;return Ne(l).map(i.getNewChild)},i.setActiveKey=function(l){"activeKey"in i.props||i.setState({activeKey:l}),i.props.onChange(i.props.accordion?l[0]:l)};var d=s.activeKey,c=s.defaultActiveKey,e=c;return"activeKey"in s&&(e=d),i.state={activeKey:ve(e)},i}return Ee(a,[{key:"shouldComponentUpdate",value:function(i,d){return!oe(this.props,i)||!oe(this.state,d)}},{key:"render",value:function(){var i,d=this.props,c=d.prefixCls,e=d.className,l=d.style,r=d.accordion,o=j((i={},K(i,c,!0),K(i,e,!!e),i));return T.createElement("div",{className:o,style:l,role:r?"tablist":null},this.getItems())}}],[{key:"getDerivedStateFromProps",value:function(i){var d={};return"activeKey"in i&&(d.activeKey=ve(i.activeKey)),d}}]),a}(T.Component);Q.defaultProps={prefixCls:"rc-collapse",onChange:function(){},accordion:!1,destroyInactivePanel:!1};Q.Panel=Ae;Q.Panel;var at=function(n){var a=T.useContext(Te),s=a.getPrefixCls,i=n.prefixCls,d=n.className,c=d===void 0?"":d,e=n.showArrow,l=e===void 0?!0:e,r=s("collapse",i),o=j(k({},"".concat(r,"-no-arrow"),!l),c);return T.createElement(Q.Panel,W({},n,{prefixCls:r,className:o}))};const ot=at;var Re=function(n){var a=T.useContext(Te),s=a.getPrefixCls,i=a.direction,d=n.prefixCls,c=n.className,e=c===void 0?"":c,l=n.bordered,r=l===void 0?!0:l,o=n.ghost,u=n.expandIconPosition,h=u===void 0?"start":u,f=s("collapse",d),y=T.useMemo(function(){return h==="left"?"start":h==="right"?"end":h},[h]),m=function(){var v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},g=n.expandIcon,N=g?g(v):T.createElement(tt,{rotate:v.isActive?90:void 0});return he(N,function(){return{className:j(N.props.className,"".concat(f,"-arrow"))}})},P=j("".concat(f,"-icon-position-").concat(y),k(k(k({},"".concat(f,"-borderless"),!r),"".concat(f,"-rtl"),i==="rtl"),"".concat(f,"-ghost"),!!o),e),E=W(W({},nt),{motionAppear:!1,leavedClassName:"".concat(f,"-content-hidden")}),w=function(){var v=n.children;return Ne(v).map(function(g,N){var x;if(!((x=g.props)===null||x===void 0)&&x.disabled){var O=g.key||String(N),A=g.props,S=A.disabled,I=A.collapsible,R=W(W({},Ze(g.props,["disabled"])),{key:O,collapsible:I??(S?"disabled":void 0)});return he(g,R)}return g})};return T.createElement(Q,W({openMotion:E},n,{expandIcon:m,prefixCls:f,className:P}),w())};Re.Panel=ot;const De=Re;function ne(t){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?Object(arguments[n]):{},s=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&s.push.apply(s,Object.getOwnPropertySymbols(a).filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable})),s.forEach(function(i){k(t,i,a[i])})}return t}var it=function(t,n,a,s,i,d,c,e){if(!t){var l;if(n===void 0)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var r=[a,s,i,d,c,e],o=0;l=new Error(n.replace(/%s/g,function(){return r[o++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},st=it;const B=Xe(st);var lt=function(){function t(){J(this,t),k(this,"refs",{})}return q(t,[{key:"add",value:function(a,s){this.refs[a]||(this.refs[a]=[]),this.refs[a].push(s)}},{key:"remove",value:function(a,s){var i=this.getIndex(a,s);i!==-1&&this.refs[a].splice(i,1)}},{key:"isActive",value:function(){return this.active}},{key:"getActive",value:function(){var a=this;return this.refs[this.active.collection].find(function(s){var i=s.node;return i.sortableInfo.index==a.active.index})}},{key:"getIndex",value:function(a,s){return this.refs[a].indexOf(s)}},{key:"getOrderedRefs",value:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.active.collection;return this.refs[a].sort(ct)}}]),t}();function ct(t,n){var a=t.node.sortableInfo.index,s=n.node.sortableInfo.index;return a-s}function Me(t,n){return Object.keys(t).reduce(function(a,s){return n.indexOf(s)===-1&&(a[s]=t[s]),a},{})}var _={end:["touchend","touchcancel","mouseup"],move:["touchmove","mousemove"],start:["touchstart","mousedown"]},Ke=function(){if(typeof window>"u"||typeof document>"u")return"";var t=window.getComputedStyle(document.documentElement,"")||["-moz-hidden-iframe"],n=(Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/)||t.OLink===""&&["","o"])[1];switch(n){case"ms":return"ms";default:return n&&n.length?n[0].toUpperCase()+n.substr(1):""}}();function Z(t,n){Object.keys(n).forEach(function(a){t.style[a]=n[a]})}function ee(t,n){t.style["".concat(Ke,"Transform")]=n==null?"":"translate3d(".concat(n.x,"px,").concat(n.y,"px,0)")}function re(t,n){t.style["".concat(Ke,"TransitionDuration")]=n==null?"":"".concat(n,"ms")}function z(t,n){for(;t;){if(n(t))return t;t=t.parentNode}return null}function me(t,n,a){return Math.max(t,Math.min(a,n))}function F(t){return t.substr(-2)==="px"?parseFloat(t):0}function dt(t){var n=window.getComputedStyle(t);return{bottom:F(n.marginBottom),left:F(n.marginLeft),right:F(n.marginRight),top:F(n.marginTop)}}function de(t,n){var a=n.displayName||n.name;return a?"".concat(t,"(").concat(a,")"):t}function ae(t,n){var a=t.getBoundingClientRect();return{top:a.top+n.top,left:a.left+n.left}}function X(t){return t.touches&&t.touches.length?{x:t.touches[0].pageX,y:t.touches[0].pageY}:t.changedTouches&&t.changedTouches.length?{x:t.changedTouches[0].pageX,y:t.changedTouches[0].pageY}:{x:t.pageX,y:t.pageY}}function ut(t){return t.touches&&t.touches.length||t.changedTouches&&t.changedTouches.length}function te(t,n){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{left:0,top:0};if(t){var s={left:a.left+t.offsetLeft,top:a.top+t.offsetTop};return t.parentNode===n?s:te(t.parentNode,n,s)}}function ft(t,n,a){return t<a&&t>n?t-1:t>a&&t<n?t+1:t}function ge(t){var n=t.lockOffset,a=t.width,s=t.height,i=n,d=n,c="px";if(typeof n=="string"){var e=/^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(n);B(e!==null,'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s',n),i=parseFloat(n),d=parseFloat(n),c=e[1]}return B(isFinite(i)&&isFinite(d),"lockOffset value should be a finite. Given %s",n),c==="%"&&(i=i*a/100,d=d*s/100),{x:i,y:d}}function ht(t){var n=t.height,a=t.width,s=t.lockOffset,i=Array.isArray(s)?s:[s,s];B(i.length===2,"lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s",s);var d=ke(i,2),c=d[0],e=d[1];return[ge({height:n,lockOffset:c,width:a}),ge({height:n,lockOffset:e,width:a})]}function pt(t){var n=window.getComputedStyle(t),a=/(auto|scroll)/,s=["overflow","overflowX","overflowY"];return s.find(function(i){return a.test(n[i])})}function We(t){return t instanceof HTMLElement?pt(t)?t:We(t.parentNode):null}function vt(t){var n=window.getComputedStyle(t);return n.display==="grid"?{x:F(n.gridColumnGap),y:F(n.gridRowGap)}:{x:0,y:0}}var L={TAB:9,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40},G={Anchor:"A",Button:"BUTTON",Canvas:"CANVAS",Input:"INPUT",Option:"OPTION",Textarea:"TEXTAREA",Select:"SELECT"};function mt(t){var n="input, textarea, select, canvas, [contenteditable]",a=t.querySelectorAll(n),s=t.cloneNode(!0),i=et(s.querySelectorAll(n));return i.forEach(function(d,c){if(d.type!=="file"&&(d.value=a[c].value),d.type==="radio"&&d.name&&(d.name="__sortableClone__".concat(d.name)),d.tagName===G.Canvas&&a[c].width>0&&a[c].height>0){var e=d.getContext("2d");e.drawImage(a[c],0,0)}}),s}function gt(t){var n,a,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{withRef:!1};return a=n=function(i){ie(d,i);function d(){var c,e;J(this,d);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return e=se(this,(c=le(d)).call.apply(c,[this].concat(r))),k(C(C(e)),"wrappedInstance",T.createRef()),e}return q(d,[{key:"componentDidMount",value:function(){var e=ce.findDOMNode(this);e.sortableHandle=!0}},{key:"getWrappedInstance",value:function(){return B(s.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call"),this.wrappedInstance.current}},{key:"render",value:function(){var e=s.withRef?this.wrappedInstance:null;return T.createElement(t,W({ref:e},this.props))}}]),d}(T.Component),k(n,"displayName",de("sortableHandle",t)),a}function ye(t){return t.sortableHandle!=null}var yt=function(){function t(n,a){J(this,t),this.container=n,this.onScrollCallback=a}return q(t,[{key:"clear",value:function(){this.interval!=null&&(clearInterval(this.interval),this.interval=null)}},{key:"update",value:function(a){var s=this,i=a.translate,d=a.minTranslate,c=a.maxTranslate,e=a.width,l=a.height,r={x:0,y:0},o={x:1,y:1},u={x:10,y:10},h=this.container,f=h.scrollTop,y=h.scrollLeft,m=h.scrollHeight,P=h.scrollWidth,E=h.clientHeight,w=h.clientWidth,b=f===0,v=m-f-E===0,g=y===0,N=P-y-w===0;i.y>=c.y-l/2&&!v?(r.y=1,o.y=u.y*Math.abs((c.y-l/2-i.y)/l)):i.x>=c.x-e/2&&!N?(r.x=1,o.x=u.x*Math.abs((c.x-e/2-i.x)/e)):i.y<=d.y+l/2&&!b?(r.y=-1,o.y=u.y*Math.abs((i.y-l/2-d.y)/l)):i.x<=d.x+e/2&&!g&&(r.x=-1,o.x=u.x*Math.abs((i.x-e/2-d.x)/e)),this.interval&&(this.clear(),this.isAutoScrolling=!1),(r.x!==0||r.y!==0)&&(this.interval=setInterval(function(){s.isAutoScrolling=!0;var x={left:o.x*r.x,top:o.y*r.y};s.container.scrollTop+=x.top,s.container.scrollLeft+=x.left,s.onScrollCallback(x)},5))}}]),t}();function xt(t){var n=t.node;return{height:n.offsetHeight,width:n.offsetWidth}}function Ct(t){var n=[G.Input,G.Textarea,G.Select,G.Option,G.Button];return!!(n.indexOf(t.target.tagName)!==-1||z(t.target,function(a){return a.contentEditable==="true"}))}var $e={axis:p.oneOf(["x","y","xy"]),contentWindow:p.any,disableAutoscroll:p.bool,distance:p.number,getContainer:p.func,getHelperDimensions:p.func,helperClass:p.string,helperContainer:p.oneOfType([p.func,typeof HTMLElement>"u"?p.any:p.instanceOf(HTMLElement)]),hideSortableGhost:p.bool,keyboardSortingTransitionDuration:p.number,lockAxis:p.string,lockOffset:p.oneOfType([p.number,p.string,p.arrayOf(p.oneOfType([p.number,p.string]))]),lockToContainerEdges:p.bool,onSortEnd:p.func,onSortMove:p.func,onSortOver:p.func,onSortStart:p.func,pressDelay:p.number,pressThreshold:p.number,keyCodes:p.shape({lift:p.arrayOf(p.number),drop:p.arrayOf(p.number),cancel:p.arrayOf(p.number),up:p.arrayOf(p.number),down:p.arrayOf(p.number)}),shouldCancelStart:p.func,transitionDuration:p.number,updateBeforeSortStart:p.func,useDragHandle:p.bool,useWindowAsScrollContainer:p.bool},He={lift:[L.SPACE],drop:[L.SPACE],cancel:[L.ESC],up:[L.UP,L.LEFT],down:[L.DOWN,L.RIGHT]},bt={axis:"y",disableAutoscroll:!1,distance:0,getHelperDimensions:xt,hideSortableGhost:!0,lockOffset:"50%",lockToContainerEdges:!1,pressDelay:0,pressThreshold:5,keyCodes:He,shouldCancelStart:Ct,transitionDuration:300,useWindowAsScrollContainer:!1},wt=Object.keys($e);function St(t){B(!(t.distance&&t.pressDelay),"Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.")}function It(t,n){try{var a=t()}catch(s){return n(!0,s)}return a&&a.then?a.then(n.bind(null,!1),n.bind(null,!0)):n(!1,value)}var Le=T.createContext({manager:{}});function Et(t){var n,a,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{withRef:!1};return a=n=function(i){ie(d,i);function d(c){var e;J(this,d),e=se(this,le(d).call(this,c)),k(C(C(e)),"state",{}),k(C(C(e)),"handleStart",function(r){var o=e.props,u=o.distance,h=o.shouldCancelStart;if(!(r.button===2||h(r))){e.touched=!0,e.position=X(r);var f=z(r.target,function(b){return b.sortableInfo!=null});if(f&&f.sortableInfo&&e.nodeIsChild(f)&&!e.state.sorting){var y=e.props.useDragHandle,m=f.sortableInfo,P=m.index,E=m.collection,w=m.disabled;if(w||y&&!z(r.target,ye))return;e.manager.active={collection:E,index:P},!ut(r)&&r.target.tagName===G.Anchor&&r.preventDefault(),u||(e.props.pressDelay===0?e.handlePress(r):e.pressTimer=setTimeout(function(){return e.handlePress(r)},e.props.pressDelay))}}}),k(C(C(e)),"nodeIsChild",function(r){return r.sortableInfo.manager===e.manager}),k(C(C(e)),"handleMove",function(r){var o=e.props,u=o.distance,h=o.pressThreshold;if(!e.state.sorting&&e.touched&&!e._awaitingUpdateBeforeSortStart){var f=X(r),y={x:e.position.x-f.x,y:e.position.y-f.y},m=Math.abs(y.x)+Math.abs(y.y);e.delta=y,!u&&(!h||m>=h)?(clearTimeout(e.cancelTimer),e.cancelTimer=setTimeout(e.cancel,0)):u&&m>=u&&e.manager.isActive()&&e.handlePress(r)}}),k(C(C(e)),"handleEnd",function(){e.touched=!1,e.cancel()}),k(C(C(e)),"cancel",function(){var r=e.props.distance,o=e.state.sorting;o||(r||clearTimeout(e.pressTimer),e.manager.active=null)}),k(C(C(e)),"handlePress",function(r){try{var o=e.manager.getActive(),u=function(){if(o){var h=function(){var S=g.sortableInfo.index,I=dt(g),R=vt(e.container),D=e.scrollContainer.getBoundingClientRect(),H=m({index:S,node:g,collection:N});if(e.node=g,e.margin=I,e.gridGap=R,e.width=H.width,e.height=H.height,e.marginOffset={x:e.margin.left+e.margin.right+e.gridGap.x,y:Math.max(e.margin.top,e.margin.bottom,e.gridGap.y)},e.boundingClientRect=g.getBoundingClientRect(),e.containerBoundingRect=D,e.index=S,e.newIndex=S,e.axis={x:y.indexOf("x")>=0,y:y.indexOf("y")>=0},e.offsetEdge=te(g,e.container),x?e.initialOffset=X(ne({},r,{pageX:e.boundingClientRect.left,pageY:e.boundingClientRect.top})):e.initialOffset=X(r),e.initialScroll={left:e.scrollContainer.scrollLeft,top:e.scrollContainer.scrollTop},e.initialWindowScroll={left:window.pageXOffset,top:window.pageYOffset},e.helper=e.helperContainer.appendChild(mt(g)),Z(e.helper,{boxSizing:"border-box",height:"".concat(e.height,"px"),left:"".concat(e.boundingClientRect.left-I.left,"px"),pointerEvents:"none",position:"fixed",top:"".concat(e.boundingClientRect.top-I.top,"px"),width:"".concat(e.width,"px")}),x&&e.helper.focus(),E&&(e.sortableGhost=g,Z(g,{opacity:0,visibility:"hidden"})),e.minTranslate={},e.maxTranslate={},x){var U=v?{top:0,left:0,width:e.contentWindow.innerWidth,height:e.contentWindow.innerHeight}:e.containerBoundingRect,ue=U.top,fe=U.left,Ue=U.width,_e=U.height,Fe=ue+_e,Ye=fe+Ue;e.axis.x&&(e.minTranslate.x=fe-e.boundingClientRect.left,e.maxTranslate.x=Ye-(e.boundingClientRect.left+e.width)),e.axis.y&&(e.minTranslate.y=ue-e.boundingClientRect.top,e.maxTranslate.y=Fe-(e.boundingClientRect.top+e.height))}else e.axis.x&&(e.minTranslate.x=(v?0:D.left)-e.boundingClientRect.left-e.width/2,e.maxTranslate.x=(v?e.contentWindow.innerWidth:D.left+D.width)-e.boundingClientRect.left-e.width/2),e.axis.y&&(e.minTranslate.y=(v?0:D.top)-e.boundingClientRect.top-e.height/2,e.maxTranslate.y=(v?e.contentWindow.innerHeight:D.top+D.height)-e.boundingClientRect.top-e.height/2);P&&P.split(" ").forEach(function(Y){return e.helper.classList.add(Y)}),e.listenerNode=r.touches?r.target:e.contentWindow,x?(e.listenerNode.addEventListener("wheel",e.handleKeyEnd,!0),e.listenerNode.addEventListener("mousedown",e.handleKeyEnd,!0),e.listenerNode.addEventListener("keydown",e.handleKeyDown)):(_.move.forEach(function(Y){return e.listenerNode.addEventListener(Y,e.handleSortMove,!1)}),_.end.forEach(function(Y){return e.listenerNode.addEventListener(Y,e.handleSortEnd,!1)})),e.setState({sorting:!0,sortingIndex:S}),b&&b({node:g,index:S,collection:N,isKeySorting:x,nodes:e.manager.getOrderedRefs(),helper:e.helper},r),x&&e.keyMove(0)},f=e.props,y=f.axis,m=f.getHelperDimensions,P=f.helperClass,E=f.hideSortableGhost,w=f.updateBeforeSortStart,b=f.onSortStart,v=f.useWindowAsScrollContainer,g=o.node,N=o.collection,x=e.manager.isKeySorting,O=function(){if(typeof w=="function"){e._awaitingUpdateBeforeSortStart=!0;var A=It(function(){var S=g.sortableInfo.index;return Promise.resolve(w({collection:N,index:S,node:g,isKeySorting:x},r)).then(function(){})},function(S,I){if(e._awaitingUpdateBeforeSortStart=!1,S)throw I;return I});if(A&&A.then)return A.then(function(){})}}();return O&&O.then?O.then(h):h(O)}}();return Promise.resolve(u&&u.then?u.then(function(){}):void 0)}catch(h){return Promise.reject(h)}}),k(C(C(e)),"handleSortMove",function(r){var o=e.props.onSortMove;typeof r.preventDefault=="function"&&r.cancelable&&r.preventDefault(),e.updateHelperPosition(r),e.animateNodes(),e.autoscroll(),o&&o(r)}),k(C(C(e)),"handleSortEnd",function(r){var o=e.props,u=o.hideSortableGhost,h=o.onSortEnd,f=e.manager,y=f.active.collection,m=f.isKeySorting,P=e.manager.getOrderedRefs();e.listenerNode&&(m?(e.listenerNode.removeEventListener("wheel",e.handleKeyEnd,!0),e.listenerNode.removeEventListener("mousedown",e.handleKeyEnd,!0),e.listenerNode.removeEventListener("keydown",e.handleKeyDown)):(_.move.forEach(function(g){return e.listenerNode.removeEventListener(g,e.handleSortMove)}),_.end.forEach(function(g){return e.listenerNode.removeEventListener(g,e.handleSortEnd)}))),e.helper.parentNode.removeChild(e.helper),u&&e.sortableGhost&&Z(e.sortableGhost,{opacity:"",visibility:""});for(var E=0,w=P.length;E<w;E++){var b=P[E],v=b.node;b.edgeOffset=null,b.boundingClientRect=null,ee(v,null),re(v,null),b.translate=null}e.autoScroller.clear(),e.manager.active=null,e.manager.isKeySorting=!1,e.setState({sorting:!1,sortingIndex:null}),typeof h=="function"&&h({collection:y,newIndex:e.newIndex,oldIndex:e.index,isKeySorting:m,nodes:P},r),e.touched=!1}),k(C(C(e)),"autoscroll",function(){var r=e.props.disableAutoscroll,o=e.manager.isKeySorting;if(r){e.autoScroller.clear();return}if(o){var u=ne({},e.translate),h=0,f=0;e.axis.x&&(u.x=Math.min(e.maxTranslate.x,Math.max(e.minTranslate.x,e.translate.x)),h=e.translate.x-u.x),e.axis.y&&(u.y=Math.min(e.maxTranslate.y,Math.max(e.minTranslate.y,e.translate.y)),f=e.translate.y-u.y),e.translate=u,ee(e.helper,e.translate),e.scrollContainer.scrollLeft+=h,e.scrollContainer.scrollTop+=f;return}e.autoScroller.update({height:e.height,maxTranslate:e.maxTranslate,minTranslate:e.minTranslate,translate:e.translate,width:e.width})}),k(C(C(e)),"onAutoScroll",function(r){e.translate.x+=r.left,e.translate.y+=r.top,e.animateNodes()}),k(C(C(e)),"handleKeyDown",function(r){var o=r.keyCode,u=e.props,h=u.shouldCancelStart,f=u.keyCodes,y=f===void 0?{}:f,m=ne({},He,y);e.manager.active&&!e.manager.isKeySorting||!e.manager.active&&(!m.lift.includes(o)||h(r)||!e.isValidSortingTarget(r))||(r.stopPropagation(),r.preventDefault(),m.lift.includes(o)&&!e.manager.active?e.keyLift(r):m.drop.includes(o)&&e.manager.active?e.keyDrop(r):m.cancel.includes(o)?(e.newIndex=e.manager.active.index,e.keyDrop(r)):m.up.includes(o)?e.keyMove(-1):m.down.includes(o)&&e.keyMove(1))}),k(C(C(e)),"keyLift",function(r){var o=r.target,u=z(o,function(m){return m.sortableInfo!=null}),h=u.sortableInfo,f=h.index,y=h.collection;e.initialFocusedNode=o,e.manager.isKeySorting=!0,e.manager.active={index:f,collection:y},e.handlePress(r)}),k(C(C(e)),"keyMove",function(r){var o=e.manager.getOrderedRefs(),u=o[o.length-1].node.sortableInfo.index,h=e.newIndex+r,f=e.newIndex;if(!(h<0||h>u)){e.prevIndex=f,e.newIndex=h;var y=ft(e.newIndex,e.prevIndex,e.index),m=o.find(function(x){var O=x.node;return O.sortableInfo.index===y}),P=m.node,E=e.containerScrollDelta,w=m.boundingClientRect||ae(P,E),b=m.translate||{x:0,y:0},v={top:w.top+b.y-E.top,left:w.left+b.x-E.left},g=f<h,N={x:g&&e.axis.x?P.offsetWidth-e.width:0,y:g&&e.axis.y?P.offsetHeight-e.height:0};e.handleSortMove({pageX:v.left+N.x,pageY:v.top+N.y,ignoreTransition:r===0})}}),k(C(C(e)),"keyDrop",function(r){e.handleSortEnd(r),e.initialFocusedNode&&e.initialFocusedNode.focus()}),k(C(C(e)),"handleKeyEnd",function(r){e.manager.active&&e.keyDrop(r)}),k(C(C(e)),"isValidSortingTarget",function(r){var o=e.props.useDragHandle,u=r.target,h=z(u,function(f){return f.sortableInfo!=null});return h&&h.sortableInfo&&!h.sortableInfo.disabled&&(o?ye(u):u.sortableInfo)});var l=new lt;return St(c),e.manager=l,e.wrappedInstance=T.createRef(),e.sortableContextValue={manager:l},e.events={end:e.handleEnd,move:e.handleMove,start:e.handleStart},e}return q(d,[{key:"componentDidMount",value:function(){var e=this,l=this.props.useWindowAsScrollContainer,r=this.getContainer();Promise.resolve(r).then(function(o){e.container=o,e.document=e.container.ownerDocument||document;var u=e.props.contentWindow||e.document.defaultView||window;e.contentWindow=typeof u=="function"?u():u,e.scrollContainer=l?e.document.scrollingElement||e.document.documentElement:We(e.container)||e.container,e.autoScroller=new yt(e.scrollContainer,e.onAutoScroll),Object.keys(e.events).forEach(function(h){return _[h].forEach(function(f){return e.container.addEventListener(f,e.events[h],!1)})}),e.container.addEventListener("keydown",e.handleKeyDown)})}},{key:"componentWillUnmount",value:function(){var e=this;this.helper&&this.helper.parentNode&&this.helper.parentNode.removeChild(this.helper),this.container&&(Object.keys(this.events).forEach(function(l){return _[l].forEach(function(r){return e.container.removeEventListener(r,e.events[l])})}),this.container.removeEventListener("keydown",this.handleKeyDown))}},{key:"updateHelperPosition",value:function(e){var l=this.props,r=l.lockAxis,o=l.lockOffset,u=l.lockToContainerEdges,h=l.transitionDuration,f=l.keyboardSortingTransitionDuration,y=f===void 0?h:f,m=this.manager.isKeySorting,P=e.ignoreTransition,E=X(e),w={x:E.x-this.initialOffset.x,y:E.y-this.initialOffset.y};if(w.y-=window.pageYOffset-this.initialWindowScroll.top,w.x-=window.pageXOffset-this.initialWindowScroll.left,this.translate=w,u){var b=ht({height:this.height,lockOffset:o,width:this.width}),v=ke(b,2),g=v[0],N=v[1],x={x:this.width/2-g.x,y:this.height/2-g.y},O={x:this.width/2-N.x,y:this.height/2-N.y};w.x=me(this.minTranslate.x+x.x,this.maxTranslate.x-O.x,w.x),w.y=me(this.minTranslate.y+x.y,this.maxTranslate.y-O.y,w.y)}r==="x"?w.y=0:r==="y"&&(w.x=0),m&&y&&!P&&re(this.helper,y),ee(this.helper,w)}},{key:"animateNodes",value:function(){var e=this.props,l=e.transitionDuration,r=e.hideSortableGhost,o=e.onSortOver,u=this.containerScrollDelta,h=this.windowScrollDelta,f=this.manager.getOrderedRefs(),y={left:this.offsetEdge.left+this.translate.x+u.left,top:this.offsetEdge.top+this.translate.y+u.top},m=this.manager.isKeySorting,P=this.newIndex;this.newIndex=null;for(var E=0,w=f.length;E<w;E++){var b=f[E].node,v=b.sortableInfo.index,g=b.offsetWidth,N=b.offsetHeight,x={height:this.height>N?N/2:this.height/2,width:this.width>g?g/2:this.width/2},O=m&&v>this.index&&v<=P,A=m&&v<this.index&&v>=P,S={x:0,y:0},I=f[E].edgeOffset;I||(I=te(b,this.container),f[E].edgeOffset=I,m&&(f[E].boundingClientRect=ae(b,u)));var R=E<f.length-1&&f[E+1],D=E>0&&f[E-1];if(R&&!R.edgeOffset&&(R.edgeOffset=te(R.node,this.container),m&&(R.boundingClientRect=ae(R.node,u))),v===this.index){r&&(this.sortableGhost=b,Z(b,{opacity:0,visibility:"hidden"}));continue}l&&re(b,l),this.axis.x?this.axis.y?A||v<this.index&&(y.left+h.left-x.width<=I.left&&y.top+h.top<=I.top+x.height||y.top+h.top+x.height<=I.top)?(S.x=this.width+this.marginOffset.x,I.left+S.x>this.containerBoundingRect.width-x.width&&R&&(S.x=R.edgeOffset.left-I.left,S.y=R.edgeOffset.top-I.top),this.newIndex===null&&(this.newIndex=v)):(O||v>this.index&&(y.left+h.left+x.width>=I.left&&y.top+h.top+x.height>=I.top||y.top+h.top+x.height>=I.top+N))&&(S.x=-(this.width+this.marginOffset.x),I.left+S.x<this.containerBoundingRect.left+x.width&&D&&(S.x=D.edgeOffset.left-I.left,S.y=D.edgeOffset.top-I.top),this.newIndex=v):O||v>this.index&&y.left+h.left+x.width>=I.left?(S.x=-(this.width+this.marginOffset.x),this.newIndex=v):(A||v<this.index&&y.left+h.left<=I.left+x.width)&&(S.x=this.width+this.marginOffset.x,this.newIndex==null&&(this.newIndex=v)):this.axis.y&&(O||v>this.index&&y.top+h.top+x.height>=I.top?(S.y=-(this.height+this.marginOffset.y),this.newIndex=v):(A||v<this.index&&y.top+h.top<=I.top+x.height)&&(S.y=this.height+this.marginOffset.y,this.newIndex==null&&(this.newIndex=v))),ee(b,S),f[E].translate=S}this.newIndex==null&&(this.newIndex=this.index),m&&(this.newIndex=P);var H=m?this.prevIndex:P;o&&this.newIndex!==H&&o({collection:this.manager.active.collection,index:this.index,newIndex:this.newIndex,oldIndex:H,isKeySorting:m,nodes:f,helper:this.helper})}},{key:"getWrappedInstance",value:function(){return B(s.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"),this.wrappedInstance.current}},{key:"getContainer",value:function(){var e=this.props.getContainer;return typeof e!="function"?ce.findDOMNode(this):e(s.withRef?this.getWrappedInstance():void 0)}},{key:"render",value:function(){var e=s.withRef?this.wrappedInstance:null;return T.createElement(Le.Provider,{value:this.sortableContextValue},T.createElement(t,W({ref:e},Me(this.props,wt))))}},{key:"helperContainer",get:function(){var e=this.props.helperContainer;return typeof e=="function"?e():this.props.helperContainer||this.document.body}},{key:"containerScrollDelta",get:function(){var e=this.props.useWindowAsScrollContainer;return e?{left:0,top:0}:{left:this.scrollContainer.scrollLeft-this.initialScroll.left,top:this.scrollContainer.scrollTop-this.initialScroll.top}}},{key:"windowScrollDelta",get:function(){return{left:this.contentWindow.pageXOffset-this.initialWindowScroll.left,top:this.contentWindow.pageYOffset-this.initialWindowScroll.top}}}]),d}(T.Component),k(n,"displayName",de("sortableList",t)),k(n,"defaultProps",bt),k(n,"propTypes",$e),a}var Ge={index:p.number.isRequired,collection:p.oneOfType([p.number,p.string]),disabled:p.bool},Tt=Object.keys(Ge);function kt(t){var n,a,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{withRef:!1};return a=n=function(i){ie(d,i);function d(){var c,e;J(this,d);for(var l=arguments.length,r=new Array(l),o=0;o<l;o++)r[o]=arguments[o];return e=se(this,(c=le(d)).call.apply(c,[this].concat(r))),k(C(C(e)),"wrappedInstance",T.createRef()),e}return q(d,[{key:"componentDidMount",value:function(){this.register()}},{key:"componentDidUpdate",value:function(e){this.node&&(e.index!==this.props.index&&(this.node.sortableInfo.index=this.props.index),e.disabled!==this.props.disabled&&(this.node.sortableInfo.disabled=this.props.disabled)),e.collection!==this.props.collection&&(this.unregister(e.collection),this.register())}},{key:"componentWillUnmount",value:function(){this.unregister()}},{key:"register",value:function(){var e=this.props,l=e.collection,r=e.disabled,o=e.index,u=ce.findDOMNode(this);u.sortableInfo={collection:l,disabled:r,index:o,manager:this.context.manager},this.node=u,this.ref={node:u},this.context.manager.add(l,this.ref)}},{key:"unregister",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props.collection;this.context.manager.remove(e,this.ref)}},{key:"getWrappedInstance",value:function(){return B(s.withRef,"To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"),this.wrappedInstance.current}},{key:"render",value:function(){var e=s.withRef?this.wrappedInstance:null;return T.createElement(t,W({ref:e},Me(this.props,Tt)))}}]),d}(T.Component),k(n,"displayName",de("sortableElement",t)),k(n,"contextType",Le),k(n,"propTypes",Ge),k(n,"defaultProps",{collection:0}),a}const{Panel:je}=De,Pt=gt(()=>M.createElement(Pe,{name:"drag_indicator",size:24,color:"gray-2"})),Nt=Et(({className:t="",...n})=>M.createElement(De,{...n,className:["sg contacto-collapse",t].join(" "),expandIcon:({isActive:a})=>M.createElement(Pe,{name:"expand_more",size:24,color:"gray-1",style:{transform:`translateY(-50%) rotate(${a?"180deg":"0deg"})`}}),expandIconPosition:"right"})),$=t=>M.createElement(Nt,{shouldCancelStart:()=>{},distance:5,useDragHandle:!0,lockAxis:!0,...t}),Ot=kt(t=>M.createElement(je,{...t})),At=({className:t="",sortable:n,disabled:a,header:s,...i})=>{const d={className:["sg contacto-panel",t].join(" "),header:M.createElement("div",{className:"panel-header"},n&&M.createElement(Pt,null),s),...i};return n?M.createElement(Ot,{...d}):M.createElement(je,{...d})};$.Panel=At;$.propTypes={className:p.string};$.defaultProps={};$.__docgenInfo={description:"",methods:[{name:"Panel",docblock:null,modifiers:["static"],params:[{name:"{ className = '', sortable, disabled, header, ...props }",optional:!1,type:null}],returns:null}],displayName:"Collapse",props:{className:{description:"Class to be added",type:{name:"string"},required:!1}}};const Yt={title:"Components/Collapse",component:$},Be=t=>M.createElement("div",{className:"yo"},M.createElement($,{defaultActiveKey:"1",accordion:!0},M.createElement($.Panel,{key:"1",header:"API 1",sortable:!0,index:1},"Panel 1"),M.createElement($.Panel,{key:"2",header:"API 2",sortable:!0,index:2},"Panel 2"))),V=Be;V.args={};Be.__docgenInfo={description:"",methods:[],displayName:"Template"};var xe,Ce,be;V.parameters={...V.parameters,docs:{...(xe=V.parameters)==null?void 0:xe.docs,source:{originalSource:"Template",...(be=(Ce=V.parameters)==null?void 0:Ce.docs)==null?void 0:be.source}}};const Xt=["Default"];export{V as Default,Xt as __namedExportsOrder,Yt as default};
