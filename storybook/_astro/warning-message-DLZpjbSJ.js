import{u as t,k as e,d}from"./blocks-BSqmMR9E.js";import{W as i}from"./warning-message.stories-IO-nT1fi.js";import"./preload-helper-C91jIAhM.js";function r(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
`,e.jsx(n.h1,{id:"warningmessage",children:"WarningMessage"}),`
`,e.jsx(n.p,{children:"Inline warning / callout message."}),`
`,e.jsx(n.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/photography/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Photography"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"title"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsxs(n.td,{children:["— ",e.jsx(n.em,{children:"(required)"})]}),e.jsx(n.td,{children:"Callout title."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"body"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string | string[]"})}),e.jsxs(n.td,{children:["— ",e.jsx(n.em,{children:"(required)"})]}),e.jsx(n.td,{children:"Message copy. Pass an array for multiple paragraphs."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"avoid"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})}),e.jsx(n.td,{children:"Switches to the “avoid” styling for a stronger warning."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"class"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Extra class names appended to the root element."})]})]})]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`---
import WarningMessage from "../components/warning-message/warning-message.astro";
---

<WarningMessage
  title="Heads up"
  body="Always use the approved logo files — don't recreate the mark."
/>

{/* Stronger “avoid” styling */}
<WarningMessage
  avoid
  title="Don't"
  body={["Never stretch the logo.", "Never change its colors."]}
/>
`})})]})}function c(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{c as default};
