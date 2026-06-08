import{u as d,k as e,d as i}from"./blocks-qRV1lCVL.js";import{A as s}from"./attribute-card.stories-B7IYy6ga.js";import"./preload-helper-C91jIAhM.js";function t(n){const r={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:s}),`
`,e.jsx(r.h1,{id:"attributecard",children:"AttributeCard"}),`
`,e.jsx(r.p,{children:"Card highlighting a single brand attribute."}),`
`,e.jsx(r.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/",target:"_blank",rel:"noopener noreferrer",children:"Home"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/photography/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Photography"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/marketing/copy-strategy/",target:"_blank",rel:"noopener noreferrer",children:"Marketing → Copy Strategy"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/marketing/styles/",target:"_blank",rel:"noopener noreferrer",children:"Marketing → Styles"}),`
`]}),`
`]}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Prop"}),e.jsx(r.th,{children:"Type"}),e.jsx(r.th,{children:"Default"}),e.jsx(r.th,{children:"Description"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"title"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsxs(r.td,{children:["— ",e.jsx(r.em,{children:"(required)"})]}),e.jsx(r.td,{children:"Attribute name shown as the card heading."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"description"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string | string[]"})}),e.jsxs(r.td,{children:["— ",e.jsx(r.em,{children:"(required)"})]}),e.jsx(r.td,{children:"Body copy. Pass an array to render a bulleted list instead of a single paragraph."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"variant"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:'"default" | "dont"'})}),e.jsx(r.td,{children:e.jsx(r.code,{children:'"default"'})}),e.jsxs(r.td,{children:[e.jsx(r.code,{children:'"dont"'})," adds a red “✕” marker to flag an anti-pattern."]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"html"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"boolean"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"false"})}),e.jsxs(r.td,{children:["When ",e.jsx(r.code,{children:"true"}),", a string ",e.jsx(r.code,{children:"description"})," is rendered as raw HTML. Ignored for array values."]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"class"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"—"}),e.jsx(r.td,{children:"Extra class names appended to the root element."})]})]})]}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`---
import AttributeCard from "../components/attribute-card/attribute-card.astro";
---

{/* Single paragraph */}
<AttributeCard title="Approachable" description="Warm, human, and easy to talk to." />

{/* Bulleted list */}
<AttributeCard title="Tone" description={["Confident", "Clear", "Caring"]} />

{/* Anti-pattern variant */}
<AttributeCard variant="dont" title="Avoid" description="Clinical, cold language." />
`})})]})}function c(n={}){const{wrapper:r}={...d(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(t,{...n})}):t(n)}export{c as default};
