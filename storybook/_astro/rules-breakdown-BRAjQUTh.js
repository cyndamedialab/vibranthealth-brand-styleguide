import{u as d,k as e,d as t}from"./blocks-QVCSqwEy.js";import{R as l}from"./rules-breakdown.stories-CPsfg0Pv.js";import"./preload-helper-C91jIAhM.js";function s(r){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:l}),`
`,e.jsx(n.h1,{id:"rulesbreakdown",children:"RulesBreakdown"}),`
`,e.jsx(n.p,{children:"Breaks a set of rules into a readable list."}),`
`,e.jsx(n.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/photography/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Photography"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"rules"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Rule[]"})}),e.jsxs(n.td,{children:["— ",e.jsx(n.em,{children:"(required)"})]}),e.jsx(n.td,{children:"Label/body pairs rendered as a readable list."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"class"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Extra class names appended to the root element."})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Rule"})," is ",e.jsx(n.code,{children:"{ label: string; body: string }"}),"."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`---
import RulesBreakdown from "../components/rules-breakdown/rules-breakdown.astro";
---

<RulesBreakdown
  rules={[
    { label: "Lighting", body: "Natural, soft, and bright." },
    { label: "Composition", body: "Generous negative space." },
  ]}
/>
`})})]})}function h(r={}){const{wrapper:n}={...d(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{h as default};
