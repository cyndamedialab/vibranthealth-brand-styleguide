import{u as d,k as e,d as i}from"./blocks-p3lTjQnC.js";import{S as s}from"./secondary-card.stories-CmAEqZoc.js";import"./preload-helper-C91jIAhM.js";function t(n){const r={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:s}),`
`,e.jsx(r.h1,{id:"secondarycard",children:"SecondaryCard"}),`
`,e.jsx(r.p,{children:"Card with a light-navy header (title + optional subhead) over a body that can hold descriptive copy, labeled sub-items, or pill tags."}),`
`,e.jsx(r.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/photography/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Photography"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/typography/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Typography"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/writing/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Writing"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/marketing/copy-strategy/",target:"_blank",rel:"noopener noreferrer",children:"Marketing → Copy Strategy"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/marketing/styles/",target:"_blank",rel:"noopener noreferrer",children:"Marketing → Styles"}),`
`]}),`
`]}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Prop"}),e.jsx(r.th,{children:"Type"}),e.jsx(r.th,{children:"Default"}),e.jsx(r.th,{children:"Description"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"title"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsxs(r.td,{children:["— ",e.jsx(r.em,{children:"(required)"})]}),e.jsx(r.td,{children:"Header title."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"subhead"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"—"}),e.jsx(r.td,{children:"Optional secondary line in the header."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"description"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string | string[]"})}),e.jsx(r.td,{children:"—"}),e.jsx(r.td,{children:"Body copy. Pass an array for multiple paragraphs."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"items"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"Item[]"})}),e.jsx(r.td,{children:"—"}),e.jsxs(r.td,{children:["Sub-items rendered in the body. When all items omit ",e.jsx(r.code,{children:"label"}),", renders as a bullet list; otherwise renders each item as a label–body pair."]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"tags"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string[]"})}),e.jsx(r.td,{children:"—"}),e.jsx(r.td,{children:"Pill tags rendered in the body."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"href"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"—"}),e.jsxs(r.td,{children:["When set, the card renders as a link (",e.jsx(r.code,{children:"<a>"}),"); otherwise as an ",e.jsx(r.code,{children:"<article>"}),"."]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"class"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"—"}),e.jsx(r.td,{children:"Extra class names appended to the root element."})]})]})]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"Item"})," is ",e.jsx(r.code,{children:"{ label?: string; body: string }"}),". When every item in the array omits ",e.jsx(r.code,{children:"label"}),", the items render as a bulleted list reusing the ",e.jsx(r.code,{children:"description"})," list styles."]}),`
`,e.jsx(r.h3,{id:"slots",children:"Slots"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Slot"}),e.jsx(r.th,{children:"Description"})]})}),e.jsx(r.tbody,{children:e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.em,{children:"default"})}),e.jsx(r.td,{children:"Extra body content rendered after the description, items, and tags."})]})})]}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`---\r
import SecondaryCard from "../components/secondary-card/secondary-card.astro";\r
---\r
\r
{/* Description only */}\r
<SecondaryCard\r
  title="Packaging"\r
  subhead="VH New Order"\r
  description="Our primary brand font, used for all product packaging."\r
/>\r
\r
{/* With labeled items */}\r
<SecondaryCard\r
  title="Marketing"\r
  subhead="Feature Display & Poppins"\r
  description="A high-contrast pairing for art direction:"\r
  items={[\r
    { label: "Feature Display", body: "Display text and headlines." },\r
    { label: "Poppins", body: "Body copy and functional text." },\r
  ]}\r
/>\r
\r
{/* With tags */}\r
<SecondaryCard\r
  title="Voice"\r
  description="Consistent, unique personality."\r
  tags={["Real", "Relatable", "Trustworthy"]}\r
/>\r
\r
{/* Body-only items render as a bullet list */}\r
<SecondaryCard\r
  title="Example Topics"\r
  items={[\r
    { body: "Product spotlight with benefit highlights" },\r
    { body: "Behind-the-scenes stories" },\r
    { body: "Customer stories or testimonials" },\r
  ]}\r
/>
`})})]})}function c(n={}){const{wrapper:r}={...d(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(t,{...n})}):t(n)}export{c as default};
