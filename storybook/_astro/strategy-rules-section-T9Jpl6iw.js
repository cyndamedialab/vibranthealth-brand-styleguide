import{u as s,k as e,d}from"./blocks-B4DhRhx6.js";import{S as i}from"./strategy-rules-section.stories-xAmKttK3.js";import"./preload-helper-C91jIAhM.js";function t(r){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:i}),`
`,e.jsx(n.h1,{id:"strategyrulessection",children:"StrategyRulesSection"}),`
`,e.jsx(n.p,{children:"Section laying out copy strategy rules."}),`
`,e.jsx(n.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/marketing/copy-strategy/",target:"_blank",rel:"noopener noreferrer",children:"Marketing → Copy Strategy"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"title"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsxs(n.td,{children:["— ",e.jsx(n.em,{children:"(required)"})]}),e.jsx(n.td,{children:"Section heading."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"description"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsxs(n.td,{children:["— ",e.jsx(n.em,{children:"(required)"})]}),e.jsx(n.td,{children:"Intro copy below the heading."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"rules"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Rule[]"})}),e.jsxs(n.td,{children:["— ",e.jsx(n.em,{children:"(required)"})]}),e.jsxs(n.td,{children:["Label/body pairs rendered via ",e.jsx(n.code,{children:"RulesBreakdown"}),"."]})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Rule"})," is ",e.jsx(n.code,{children:"{ label: string; body: string }"}),"."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`---
import StrategyRulesSection from "../components/strategy-rules-section/strategy-rules-section.astro";
---

<StrategyRulesSection
  title="Writing Rules"
  description="How we shape every piece of copy."
  rules={[
    { label: "Be clear", body: "Lead with the point." },
    { label: "Be warm", body: "Write like a helpful human." },
  ]}
/>
`})}),`
`,e.jsxs(n.p,{children:["Wraps ",e.jsx(n.code,{children:"RulesBreakdown"})," with a titled section header."]})]})}function o(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{o as default};
