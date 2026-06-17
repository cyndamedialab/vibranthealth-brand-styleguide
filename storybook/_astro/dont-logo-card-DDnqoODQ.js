import{u as o,k as e,d}from"./blocks-Bth8_9u1.js";import{D as s}from"./dont-logo-card.stories-DIhUqeGW.js";import"./preload-helper-D1UD9lgW.js";function r(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:s}),`
`,e.jsx(n.h1,{id:"dontlogocard",children:"DontLogoCard"}),`
`,e.jsx(n.p,{children:"Card illustrating incorrect logo usage."}),`
`,e.jsx(n.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"http://brand.vibranthealth.com/brand-identity/logos/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Logos"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"caption"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsxs(n.td,{children:["— ",e.jsx(n.em,{children:"(required)"})]}),e.jsx(n.td,{children:"Caption describing the misuse shown below the illustration."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"case"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8"})}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Selects one of eight built-in “don't” logo illustrations to display."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"class"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Extra class names appended to the root element."})]})]})]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`---
import DontLogoCard from "../components/dont-logo-card/dont-logo-card.astro";
---

<DontLogoCard case={1} caption="Don't change the logo color." />
<DontLogoCard case={4} caption="Don't stretch or distort the logo." />
`})}),`
`,e.jsxs(n.p,{children:["The illustration art is built in and chosen via ",e.jsx(n.code,{children:"case"}),"; the component renders the red “Don't” header automatically."]})]})}function h(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{h as default};
