import{u as t,k as e,d as i}from"./blocks-BSqmMR9E.js";import{S as s}from"./secondary-card.stories-BVvoyAto.js";import"./preload-helper-C91jIAhM.js";function r(d){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...t(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:s}),`
`,e.jsx(n.h1,{id:"secondarycard",children:"SecondaryCard"}),`
`,e.jsx(n.p,{children:"Card with a light-navy header (title + optional subhead) over a body that can hold descriptive copy, labeled sub-items, or pill tags."}),`
`,e.jsx(n.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/photography/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Photography"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/typography/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Typography"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/writing/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Writing"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"title"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsxs(n.td,{children:["— ",e.jsx(n.em,{children:"(required)"})]}),e.jsx(n.td,{children:"Header title."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"subhead"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Optional secondary line in the header."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"description"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string | string[]"})}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Body copy. Pass an array for multiple paragraphs."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"items"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Item[]"})}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Labeled sub-items rendered in the body."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"tags"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string[]"})}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Pill tags rendered in the body."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"href"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"—"}),e.jsxs(n.td,{children:["When set, the card renders as a link (",e.jsx(n.code,{children:"<a>"}),"); otherwise as an ",e.jsx(n.code,{children:"<article>"}),"."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"class"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Extra class names appended to the root element."})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Item"})," is ",e.jsx(n.code,{children:"{ label: string; body: string }"}),"."]}),`
`,e.jsx(n.h3,{id:"slots",children:"Slots"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Slot"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.em,{children:"default"})}),e.jsx(n.td,{children:"Extra body content rendered after the description, items, and tags."})]})})]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`---
import SecondaryCard from "../components/secondary-card/secondary-card.astro";
---

{/* Description only */}
<SecondaryCard
  title="Packaging"
  subhead="VH New Order"
  description="Our primary brand font, used for all product packaging."
/>

{/* With labeled items */}
<SecondaryCard
  title="Marketing"
  subhead="Feature Display & Poppins"
  description="A high-contrast pairing for art direction:"
  items={[
    { label: "Feature Display", body: "Display text and headlines." },
    { label: "Poppins", body: "Body copy and functional text." },
  ]}
/>

{/* With tags */}
<SecondaryCard
  title="Voice"
  description="Consistent, unique personality."
  tags={["Real", "Relatable", "Trustworthy"]}
/>
`})})]})}function a(d={}){const{wrapper:n}={...t(),...d.components};return n?e.jsx(n,{...d,children:e.jsx(r,{...d})}):r(d)}export{a as default};
