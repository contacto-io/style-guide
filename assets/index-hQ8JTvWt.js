import{R as a}from"./index-Dl6G-zuu.js";import{P as e}from"./index-Beu9b4Vr.js";import{T as p}from"./index-DiD84cwB.js";import{I as u}from"./index-ygQga8nQ.js";import{A as i}from"./index-C7MRSMQ4.js";const m=["success","danger","disabled","progress","default","warning","secondary","select","round","teamname"],s=({className:l="",type:t,label:o,disableUppercase:c,children:n,closeIcon:r=!1,...d})=>a.createElement(i,{className:["sg contacto-tag",l,`contacto-tag--${t}`].join(" "),closeIcon:r?a.createElement("span",{className:"close-tag-icon"},a.createElement(u,{color:"primary-color",name:"close",size:14})):null,...d},a.createElement(p,{type:["default","round","teamname"].includes(t)||c?"caption":"caption-capital"},o||n));s.propTypes={className:e.string,type:e.oneOf(m),closeIcon:e.bool,label:e.string,children:e.any,disableUppercase:e.any};s.defaultProps={type:"default"};s.__docgenInfo={description:"Tag component that is used to specify status of a task",methods:[],displayName:"Tag",props:{className:{defaultValue:{value:"''",computed:!1},description:"Class to be added",type:{name:"string"},required:!1},closeIcon:{defaultValue:{value:"false",computed:!1},description:"The text to be displayed",type:{name:"bool"},required:!1},type:{defaultValue:{value:"'default'",computed:!1},description:"The type of tag",type:{name:"enum",value:[{value:"'success'",computed:!1},{value:"'danger'",computed:!1},{value:"'disabled'",computed:!1},{value:"'progress'",computed:!1},{value:"'default'",computed:!1},{value:"'warning'",computed:!1},{value:"'secondary'",computed:!1},{value:"'select'",computed:!1},{value:"'round'",computed:!1},{value:"'teamname'",computed:!1}]},required:!1},label:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"any"},required:!1},disableUppercase:{description:"",type:{name:"any"},required:!1}}};export{s as T,m as a};
