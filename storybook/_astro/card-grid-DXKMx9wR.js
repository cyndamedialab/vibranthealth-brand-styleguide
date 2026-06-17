import{u as a,k as r,d}from"./blocks-Bth8_9u1.js";import{C as i}from"./card-grid.stories-BHirGMhc.js";import"./preload-helper-D1UD9lgW.js";function t(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(d,{of:i}),`
`,r.jsx(e.h1,{id:"cardgrid",children:"CardGrid"}),`
`,r.jsx(e.p,{children:"Responsive grid wrapper for card components. Accepts any card children via slot."}),`
`,r.jsx(e.h2,{id:"used-on",children:"Used on"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"http://brand.vibranthealth.com/",target:"_blank",rel:"noopener noreferrer",children:"Brand Overview"}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"http://brand.vibranthealth.com/brand-identity/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity"}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"http://brand.vibranthealth.com/brand-identity/colors/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Colors"}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"http://brand.vibranthealth.com/brand-identity/logos/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Logos"}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"http://brand.vibranthealth.com/brand-identity/typography/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Typography"}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"http://brand.vibranthealth.com/brand-identity/writing/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Writing"}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"http://brand.vibranthealth.com/brand-identity/photography/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Photography"}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"http://brand.vibranthealth.com/brand-identity/application/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Application"}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"http://brand.vibranthealth.com/marketing/",target:"_blank",rel:"noopener noreferrer",children:"Marketing"}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"http://brand.vibranthealth.com/marketing/copy-strategy/",target:"_blank",rel:"noopener noreferrer",children:"Marketing → Copy Strategy"}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"http://brand.vibranthealth.com/marketing/styles/",target:"_blank",rel:"noopener noreferrer",children:"Marketing → Styles"}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"http://brand.vibranthealth.com/packaging/",target:"_blank",rel:"noopener noreferrer",children:"Packaging"}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"http://brand.vibranthealth.com/web/",target:"_blank",rel:"noopener noreferrer",children:"Web"}),`
`]}),`
`]}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsxs(e.table,{children:[r.jsx(e.thead,{children:r.jsxs(e.tr,{children:[r.jsx(e.th,{children:"Prop"}),r.jsx(e.th,{children:"Type"}),r.jsx(e.th,{children:"Default"}),r.jsx(e.th,{children:"Description"})]})}),r.jsxs(e.tbody,{children:[r.jsxs(e.tr,{children:[r.jsx(e.td,{children:r.jsx(e.code,{children:"columns"})}),r.jsx(e.td,{children:r.jsx(e.code,{children:"1 | 2 | 3 | 4 | 5 | 6"})}),r.jsx(e.td,{children:r.jsx(e.code,{children:"3"})}),r.jsxs(e.td,{children:["Number of columns in the grid. Use ",r.jsx(e.code,{children:"1"})," for a single full-width card."]})]}),r.jsxs(e.tr,{children:[r.jsx(e.td,{children:r.jsx(e.code,{children:"class"})}),r.jsx(e.td,{children:r.jsx(e.code,{children:"string"})}),r.jsx(e.td,{children:"—"}),r.jsx(e.td,{children:"Extra class names appended to the root element (e.g. for page-level margin overrides)."})]})]})]}),`
`,r.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`---
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
`})})]})}function c(n={}){const{wrapper:e}={...a(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(t,{...n})}):t(n)}export{c as default};
