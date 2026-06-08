import{u as a,k as e,d as i}from"./blocks-qRV1lCVL.js";import{C as d}from"./card-grid.stories-BHirGMhc.js";import"./preload-helper-C91jIAhM.js";function t(n){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:d}),`
`,e.jsx(r.h1,{id:"cardgrid",children:"CardGrid"}),`
`,e.jsx(r.p,{children:"Responsive grid wrapper for card components. Accepts any card children via slot."}),`
`,e.jsx(r.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/",target:"_blank",rel:"noopener noreferrer",children:"Brand Overview"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/colors/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Colors"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/logos/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Logos"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/typography/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Typography"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/writing/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Writing"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/photography/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Photography"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/application/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Application"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/marketing/",target:"_blank",rel:"noopener noreferrer",children:"Marketing"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/marketing/copy-strategy/",target:"_blank",rel:"noopener noreferrer",children:"Marketing → Copy Strategy"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/marketing/styles/",target:"_blank",rel:"noopener noreferrer",children:"Marketing → Styles"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/packaging/",target:"_blank",rel:"noopener noreferrer",children:"Packaging"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/web/",target:"_blank",rel:"noopener noreferrer",children:"Web"}),`
`]}),`
`]}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Prop"}),e.jsx(r.th,{children:"Type"}),e.jsx(r.th,{children:"Default"}),e.jsx(r.th,{children:"Description"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"columns"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"1 | 2 | 3 | 4 | 5 | 6"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"3"})}),e.jsxs(r.td,{children:["Number of columns in the grid. Use ",e.jsx(r.code,{children:"1"})," for a single full-width card."]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"class"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"—"}),e.jsx(r.td,{children:"Extra class names appended to the root element (e.g. for page-level margin overrides)."})]})]})]}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`---
import CardGrid from "../components/card-grid/card-grid.astro";
import PrimaryCard from "../components/primary-card/primary-card.astro";
import SecondaryCard from "../components/secondary-card/secondary-card.astro";
import DoDont from "../components/do-dont/do-dont.astro";
---

{/* With PrimaryCards */}
<CardGrid columns={3}>
  <PrimaryCard title="Colors" description="Palette and usage." href="/colors/" />
  <PrimaryCard title="Typography" description="Typefaces and scale." href="/typography/" />
  <PrimaryCard title="Logos" description="Marks and lockups." href="/logos/" />
</CardGrid>

{/* With SecondaryCards */}
<CardGrid columns={3}>
  <SecondaryCard eyebrow="Pillar 1" title="Full Transparency" description="Every ingredient listed." />
  <SecondaryCard eyebrow="Pillar 2" title="First Green Powder" description="Three decades of excellence." />
  <SecondaryCard eyebrow="Pillar 3" title="Same Trusted Formulas" description="Fresh look, same formula." />
</CardGrid>

{/* With DoDont cards */}
<CardGrid columns={2}>
  <DoDont variant="do" items={["Use approved color pairings", "Keep ample clear space"]} />
  <DoDont variant="dont" items={["Stretch or distort the logo", "Place it on busy backgrounds"]} />
</CardGrid>
`})})]})}function h(n={}){const{wrapper:r}={...a(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(t,{...n})}):t(n)}export{h as default};
