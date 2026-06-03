import{u as s,k as e,d as t}from"./blocks-BSqmMR9E.js";import{T as c}from"./typeface-panel.stories-CLP0tZM_.js";import"./preload-helper-C91jIAhM.js";function d(r){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c}),`
`,e.jsx(n.h1,{id:"typefacepanel",children:"TypefacePanel"}),`
`,e.jsx(n.p,{children:"Panel presenting a typeface and its details."}),`
`,e.jsx(n.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/typography/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Typography"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"chars"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string[]"})}),e.jsxs(n.td,{children:["— ",e.jsx(n.em,{children:"(required)"})]}),e.jsx(n.td,{children:"Characters/glyphs to display in the grid."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"label"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsxs(n.td,{children:["— ",e.jsx(n.em,{children:"(required)"})]}),e.jsx(n.td,{children:"Panel label."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"cols"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"number"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"8"})}),e.jsx(n.td,{children:"Number of columns in the character grid."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"class"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Extra class names appended to the root element."})]})]})]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`---
import TypefacePanel from "../components/typeface-panel/typeface-panel.astro";
---

<TypefacePanel
  label="Uppercase"
  cols={9}
  chars={["A", "B", "C", "D", "E", "F", "G", "H", "I"]}
/>
`})})]})}function a(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{a as default};
