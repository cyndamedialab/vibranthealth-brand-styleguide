import{u as i,k as e,d as t}from"./blocks-qRV1lCVL.js";import{P as s}from"./primary-card.stories-DamKsUk_.js";import"./preload-helper-C91jIAhM.js";function d(n){const r={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:s}),`
`,e.jsx(r.h1,{id:"primarycard",children:"PrimaryCard"}),`
`,e.jsx(r.p,{children:"General-purpose card with a header and body. Supports a navy or green header variant, optional link behaviour, and single or multi-paragraph body copy."}),`
`,e.jsx(r.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/",target:"_blank",rel:"noopener noreferrer",children:"Home"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/marketing/",target:"_blank",rel:"noopener noreferrer",children:"Marketing"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/packaging/",target:"_blank",rel:"noopener noreferrer",children:"Packaging"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/web/",target:"_blank",rel:"noopener noreferrer",children:"Web"}),`
`]}),`
`]}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Prop"}),e.jsx(r.th,{children:"Type"}),e.jsx(r.th,{children:"Default"}),e.jsx(r.th,{children:"Description"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"title"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsxs(r.td,{children:["— ",e.jsx(r.em,{children:"(required)"})]}),e.jsx(r.td,{children:"Card heading."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"tagline"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"—"}),e.jsx(r.td,{children:"Optional short line shown below the title in the header."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"description"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string | string[]"})}),e.jsx(r.td,{children:"—"}),e.jsx(r.td,{children:"Body copy. Pass an array to render multiple paragraphs."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"headerColor"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:'"navy" | "green"'})}),e.jsx(r.td,{children:e.jsx(r.code,{children:'"navy"'})}),e.jsxs(r.td,{children:["Header background colour. ",e.jsx(r.code,{children:'"green"'})," uses ",e.jsx(r.code,{children:"--vh-light-green-10"})," with navy text."]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"href"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"—"}),e.jsxs(r.td,{children:["When set, the card renders as a link (",e.jsx(r.code,{children:"<a>"}),"); otherwise as an ",e.jsx(r.code,{children:"<article>"}),"."]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"class"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"—"}),e.jsx(r.td,{children:"Extra class names appended to the root element."})]})]})]}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`---
import PrimaryCard from "../components/primary-card/primary-card.astro";
---

{/* Navy header with description prop */}
<PrimaryCard
  title="Logo Library"
  tagline="Download"
  description="All approved logo files in one place."
/>

{/* Green header with multiple paragraphs */}
<PrimaryCard
  headerColor="green"
  title="WHAT"
  tagline="Product/Result"
  description={["Founded in 1992.", "Rigorously tested nutritional supplements."]}
/>

{/* Linked card */}
<PrimaryCard
  title="Photography"
  href="/brand-identity/photography/"
  description="Our visual style and guidelines."
/>
`})})]})}function c(n={}){const{wrapper:r}={...i(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(d,{...n})}):d(n)}export{c as default};
