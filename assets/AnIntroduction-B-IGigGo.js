import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{useMDXComponents as t}from"./index-_byTH_QA.js";import{M as s}from"./index-RodzM_vR.js";import"./Typography.stories-CgiG5Gu2.js";import"./index-Dl6G-zuu.js";import"./iframe-sn4fpJwc.js";import"../sb-preview/runtime.js";import"./index-B_8YWI8i.js";import"./assertThisInitialized-BIGTeGEP.js";import"./index-B_J8iUie.js";import"./toString-Dq7YSAyh.js";import"./index-CyarE4Tq.js";import"./_baseIsEqual-D9cB5ZQa.js";import"./isObject-CrIk3fyR.js";import"./index-DrFu-skq.js";import"./index-DiD84cwB.js";import"./index-Beu9b4Vr.js";import"./index-CTNOGpui.js";import"./CheckOutlined-tf6StMXB.js";import"./index-D89ItNC4.js";import"./index-mFXttzbh.js";import"./toArray-Rh0cCEsr.js";import"./index-B2BRC2NR.js";import"./type-DdM_TOSm.js";import"./motion-DniBM00U.js";import"./reactNode-CXkgB_jW.js";import"./statusUtils-DN1vxHNy.js";import"./toConsumableArray-RzYAKPeW.js";import"./context-CRoYx0oq.js";import"./createSuper-fkzydAXn.js";import"./Compact-DE9VlD5A.js";import"./cssVars-D2k93qyV.js";import"./variables-DLUomxCw.js";import"./index-DK9JRrLr.js";import"./useFlexGapSupport-CrB0FIES.js";import"./styleChecker-D06dXjTH.js";function i(o){const n={a:"a",code:"code",h1:"h1",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Introduction"}),`
`,e.jsx("style",{children:`
  .subheading {
    --mediumdark: '#999999';
    font-weight: 900;
    font-size: 15px;
    color: black;
    letter-spacing: 3px;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 12px;
    margin-top: 40px;
  }

  .link-list {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 10px;
  }

  @media (min-width: 620px) {
    .link-list {
      row-gap: 20px;
      column-gap: 20px;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media all and (-ms-high-contrast:none) {
  .link-list {
      display: -ms-grid;
      -ms-grid-columns: 1fr 1fr;
      -ms-grid-rows: 1fr 1fr;
    }
  }

  .link-item {
    display: block;
    padding: 20px 30px 20px 15px;
    border: 1px solid #00000010;
    border-radius: 5px;
    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
    color: #333333;
    display: flex;
    align-items: flex-start;
  }

  .link-item:hover {
    border-color: #1EA7FD50;
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }

  .link-item:active {
    border-color: #1EA7FD;
    transform: translate3d(0, 0, 0);
  }

  .link-item strong {
    font-weight: 700;
    display: block;
    margin-bottom: 2px;
  }
  
  .link-item img {
    height: 40px;
    width: 40px;
    margin-right: 15px;
    flex: none;
  }

  .link-item span {
    font-size: 14px;
    line-height: 20px;
  }

  .tip {
    display: inline-block;
    border-radius: 1em;
    font-size: 11px;
    line-height: 12px;
    font-weight: 700;
    background: #E7FDD8;
    color: #66BF3C;
    padding: 4px 12px;
    margin-right: 10px;
    vertical-align: top;
  }

  .tip-wrapper {
    font-size: 13px;
    line-height: 20px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .tip-wrapper code {
    font-size: 12px;
    display: inline-block;
  }

  
  `}),`
`,e.jsx(n.h1,{id:"the-contacto-style-guide",children:"The Contacto Style Guide"}),`
`,e.jsx("div",{style:{marginTop:32}}),`
`,e.jsxs(n.p,{children:["This is a comprehensive collection of all UI components that are used in the contacto console application. This is developed based on the ",e.jsx(n.a,{href:"https://www.figma.com/file/Qbo6JU64XtTjo6npGWdX2z/Contacto-Style-Guide?node-id=217%3A106",rel:"nofollow",children:"style guide"}),` provided by the design team. These components can be further extended into other apps by just modifying the CSS variable list. This collection almost has all
required components to build a standard application. On each component you will find different stories, which are different states of the UI component.
Buliding them here makes it easy to develop hard-to-reach states. These `,e.jsx(n.strong,{children:"stories"})," are different states of a component which can be independantly developed and tested and finally consumed without flaws."]}),`
`,e.jsx(n.h4,{id:"some-pros",children:"Some Pro's"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Since all UI components are loaded from this package, they can be altered without changing a single line of code in the consumer application."}),`
`,e.jsx(n.li,{children:"The design team, can do a UX review here and provide comments, this will reduce the number of UI/UX bugs that we recieve."}),`
`,e.jsx(n.li,{children:"This makes the look of the product standardised and the user would never feel any distruptions in the UI as the components will behave uniformly."}),`
`,e.jsx(n.li,{children:"For the dev team, having a common component library would help avoiding writing huge chunks of repetetive CSS again and again. Instead they can focus on developing actual business logic with accuracy."}),`
`,e.jsx(n.li,{children:"The UI components can be unit tested and would be production ready."}),`
`,e.jsxs(n.li,{children:["This package can be installed as another library by just using ",e.jsx(n.code,{children:"npm install"})]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx("div",{className:"subheading",children:"Components"}),`
The following are the common components that are built. Each of them, has stories, which define their UI states. You can play with it and use it as you wish.`]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/components-button--primary",children:"Buttons"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/components-checkbox--default",children:"Checkbox"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/components-radio--default",children:"Radio"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/components-select--default",children:"Select"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/components-textfield--default",children:"TextField"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/components-tag--default",children:"Tag"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/story/layout-card--card-with-title",children:"Card"})}),`
`]}),`
`,e.jsx("div",{className:"subheading",children:"How to use?"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Install the component package ",e.jsx(n.code,{children:"npm install @contacto-io/style-guide"})]}),`
`,e.jsxs(n.li,{children:["Import the component that is required - ",e.jsx(n.code,{children:"import { Button } from '@contacto-io/style-guide'"})]}),`
`,e.jsx(n.li,{children:"Visit the particular component page on the storybook app."}),`
`,e.jsx(n.li,{children:"Navigate to your required story."}),`
`,e.jsxs(n.li,{children:["Copy the code and modify the ",e.jsx(n.code,{children:"props"})," as required."]}),`
`,e.jsxs(n.li,{children:["Since all the components are wrapper components upon antd. Please visit ",e.jsx(n.a,{href:"https://ant.design/components/overview/",rel:"nofollow",children:"antd docs"})," for additional information."]}),`
`]}),`
`,e.jsx("div",{className:"subheading",children:"Technical Requirements"}),`
`,e.jsx(n.h4,{id:"dependencies",children:"Dependencies"}),`
`,e.jsx(n.p,{children:"For the compoenents to work properly, make sure the consumer project has these dependencies installed. The following are the peer dependencies for this component library."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`  "peerDependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "prop-types": "^15.7.2",
    "antd": "^4.16.8",
  }
`})}),`
`,e.jsx(n.h4,{id:"css-variables",children:"CSS variables"}),`
`,e.jsx(n.p,{children:"This style guide completely depends on CSS variables that are commonly defined by the design team. Make sure that the variables are included on the top for the style guide to work properly."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/story/colors-css-variable-list--page",children:"CSS Variable list"})}),`
`]}),`
`,e.jsx(n.h4,{id:"icons",children:"Icons"}),`
`,e.jsx(n.p,{children:"The icons used are taken from the google icon package. So for icons to work properly, make sure google font for material Icons is loaded properly."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Round&display=block');
`})}),`
`,e.jsxs(n.p,{children:[e.jsx("div",{className:"subheading",children:"Layout"}),`
Complex layouts have been simplified by the creation of common components. Here's an easy example layout that has been created and can be consumed easily from the library.`]}),`
`,e.jsx(n.p,{children:"List of Layout Components"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/layout-card--card-with-title",children:"Card"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/layout-table-layout--default",children:"Table Layout"})}),`
`]}),`
`,e.jsx(n.h4,{id:"example-layout-with-table-searchbar-and-pagination",children:"Example layout with Table, Searchbar and Pagination"}),`
`,e.jsxs(n.p,{children:["This layout is used in various places within the application. You can directly use the code from here, doing so will ensure uniform UI/UX across screens and will also help us avoid multiple CSS rewrites. You can access this story ",e.jsx(n.a,{href:"?path=/story/layout-card--card-with-table-inside",children:"here"})]}),`
`,e.jsx("div",{className:"subheading",children:"Typography"}),`
`,e.jsxs(n.p,{children:[`The following are the text styles that are used in the application. Each has a specific font weight and font size.
The font that is used is Poppins. See the full list of options `,e.jsx(n.a,{href:"?path=/docs/typography-text--all",children:"here"}),"."]}),`
`,e.jsx("div",{className:"subheading",children:"Colors"}),`
`,e.jsx(n.p,{children:"The various colors that are part of the styleguide are given as easy to search and copy here. The variable names are based on the names that is used in CSS. You can search for a color and copy the corresponding color."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"?path=/docs/colors-color-palette--page",children:"Colors used in Contacto"})}),`
`]}),`
`,e.jsx("div",{className:"subheading",children:"Useful Links"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Design Style Guide",`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Components - ",e.jsx(n.a,{href:"https://www.figma.com/file/Qbo6JU64XtTjo6npGWdX2z/Contacto-Style-Guide?node-id=217%3A106",rel:"nofollow",children:"https://www.figma.com/file/Qbo6JU64XtTjo6npGWdX2z/Contacto-Style-Guide?node-id=217%3A106"})]}),`
`,e.jsxs(n.li,{children:["Spacing - ",e.jsx(n.a,{href:"https://www.figma.com/file/Qbo6JU64XtTjo6npGWdX2z/Contacto-Style-Guide?node-id=809%3A179",rel:"nofollow",children:"https://www.figma.com/file/Qbo6JU64XtTjo6npGWdX2z/Contacto-Style-Guide?node-id=809%3A179"})]}),`
`,e.jsxs(n.li,{children:["Typography and Colors - ",e.jsx(n.a,{href:"https://www.figma.com/file/Qbo6JU64XtTjo6npGWdX2z/Contacto-Style-Guide?node-id=0%3A1",rel:"nofollow",children:"https://www.figma.com/file/Qbo6JU64XtTjo6npGWdX2z/Contacto-Style-Guide?node-id=0%3A1"})]}),`
`,e.jsxs(n.li,{children:["Logo and Favicon - ",e.jsx(n.a,{href:"https://www.figma.com/file/Qbo6JU64XtTjo6npGWdX2z/Contacto-Style-Guide?node-id=819%3A179",rel:"nofollow",children:"https://www.figma.com/file/Qbo6JU64XtTjo6npGWdX2z/Contacto-Style-Guide?node-id=819%3A179"})]}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:["Style Guide Package - ",e.jsx(n.a,{href:"https://github.com/contacto-io/contacto-console/packages/915367",rel:"nofollow",children:"https://github.com/contacto-io/contacto-console/packages/915367"})]}),`
`,e.jsxs(n.li,{children:["Source code - ",e.jsx(n.a,{href:"https://github.com/samuellawerentz/style-guide",rel:"nofollow",children:"https://github.com/samuellawerentz/style-guide"})]}),`
`]})]})}function q(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(i,{...o})}):i(o)}export{q as default};
