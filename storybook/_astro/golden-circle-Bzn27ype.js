import{u as s,k as e,d as t}from"./blocks-BSqmMR9E.js";import{G as i}from"./golden-circle.stories-BX57SenN.js";import"./preload-helper-C91jIAhM.js";function d(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:i}),`
`,e.jsx(n.h1,{id:"goldencircle",children:"GoldenCircle"}),`
`,e.jsx(n.p,{children:"Visualizes the brand's “golden circle” (why / how / what)."}),`
`,e.jsx(n.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/",target:"_blank",rel:"noopener noreferrer",children:"Home"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"caption"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:'"The VH Golden Circle"'})}),e.jsx(n.td,{children:"Caption shown above the diagram."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"class"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"—"}),e.jsxs(n.td,{children:["Extra class names appended to the root ",e.jsx(n.code,{children:"<figure>"}),"."]})]})]})]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`---
import GoldenCircle from "../components/golden-circle/golden-circle.astro";
---

<GoldenCircle />

{/* Custom caption */}
<GoldenCircle caption="Why · How · What" />
`})}),`
`,e.jsx(n.p,{children:"The concentric-ring diagram is a self-contained SVG — no other props are needed."})]})}function h(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{h as default};
