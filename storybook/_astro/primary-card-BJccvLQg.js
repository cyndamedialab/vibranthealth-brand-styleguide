import{u as i,k as e,d as t}from"./blocks-B4DhRhx6.js";import{P as s}from"./primary-card.stories-DfzkFV9x.js";import"./preload-helper-C91jIAhM.js";function d(n){const r={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:s}),`
`,e.jsx(r.h1,{id:"primarycard",children:"PrimaryCard"}),`
`,e.jsx(r.p,{children:"Card linking to a downloadable library or resource."}),`
`,e.jsx(r.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/",target:"_blank",rel:"noopener noreferrer",children:"Home"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/photography/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Photography"}),`
`]}),`
`]}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Prop"}),e.jsx(r.th,{children:"Type"}),e.jsx(r.th,{children:"Default"}),e.jsx(r.th,{children:"Description"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"title"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsxs(r.td,{children:["— ",e.jsx(r.em,{children:"(required)"})]}),e.jsx(r.td,{children:"Card heading."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"tagline"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"—"}),e.jsx(r.td,{children:"Optional short line shown above or beside the title."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"description"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string | string[]"})}),e.jsxs(r.td,{children:["— ",e.jsx(r.em,{children:"(required)"})]}),e.jsx(r.td,{children:"Body copy. Pass an array to render multiple paragraphs."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"href"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"—"}),e.jsxs(r.td,{children:["When set, the card renders as a link (",e.jsx(r.code,{children:"<a>"}),"); otherwise as an ",e.jsx(r.code,{children:"<article>"}),"."]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"class"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"—"}),e.jsx(r.td,{children:"Extra class names appended to the root element."})]})]})]}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`---
import PrimaryCard from "../components/primary-card/primary-card.astro";
---

{/* Static card */}
<PrimaryCard
  title="Logo Library"
  tagline="Download"
  description="All approved logo files in one place."
/>

{/* Linked card */}
<PrimaryCard
  title="Photography"
  href="/brand-identity/photography/"
  description={["Our visual style.", "Guidelines and examples."]}
/>
`})})]})}function c(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(d,{...n})}):d(n)}export{c as default};
