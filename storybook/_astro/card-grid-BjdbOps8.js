import{u as a,k as r,d as i}from"./blocks-p3lTjQnC.js";import{C as d}from"./card-grid.stories-Bo4wffCT.js";import"./preload-helper-C91jIAhM.js";function t(n){const e={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...a(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(i,{of:d}),`
`,r.jsx(e.h1,{id:"cardgrid",children:"CardGrid"}),`
`,r.jsx(e.p,{children:"Responsive grid wrapper for card components. Accepts any card children via slot."}),`
`,r.jsx(e.h2,{id:"used-on",children:"Used on"}),`
`,r.jsxs(e.ul,{children:[`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/",target:"_blank",rel:"noopener noreferrer",children:"Brand Overview"}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity"}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/colors/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Colors"}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/logos/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Logos"}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/typography/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Typography"}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/writing/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Writing"}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/photography/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Photography"}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/application/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Application"}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/marketing/",target:"_blank",rel:"noopener noreferrer",children:"Marketing"}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/marketing/copy-strategy/",target:"_blank",rel:"noopener noreferrer",children:"Marketing → Copy Strategy"}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/marketing/styles/",target:"_blank",rel:"noopener noreferrer",children:"Marketing → Styles"}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/packaging/",target:"_blank",rel:"noopener noreferrer",children:"Packaging"}),`
`]}),`
`,r.jsxs(e.li,{children:[`
`,r.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/web/",target:"_blank",rel:"noopener noreferrer",children:"Web"}),`
`]}),`
`]}),`
`,r.jsx(e.h2,{id:"props",children:"Props"}),`
`,r.jsxs(e.table,{children:[r.jsx(e.thead,{children:r.jsxs(e.tr,{children:[r.jsx(e.th,{children:"Prop"}),r.jsx(e.th,{children:"Type"}),r.jsx(e.th,{children:"Default"}),r.jsx(e.th,{children:"Description"})]})}),r.jsxs(e.tbody,{children:[r.jsxs(e.tr,{children:[r.jsx(e.td,{children:r.jsx(e.code,{children:"columns"})}),r.jsx(e.td,{children:r.jsx(e.code,{children:"1 | 2 | 3 | 4 | 5 | 6"})}),r.jsx(e.td,{children:r.jsx(e.code,{children:"3"})}),r.jsxs(e.td,{children:["Number of columns in the grid. Use ",r.jsx(e.code,{children:"1"})," for a single full-width card."]})]}),r.jsxs(e.tr,{children:[r.jsx(e.td,{children:r.jsx(e.code,{children:"class"})}),r.jsx(e.td,{children:r.jsx(e.code,{children:"string"})}),r.jsx(e.td,{children:"—"}),r.jsx(e.td,{children:"Extra class names appended to the root element (e.g. for page-level margin overrides)."})]})]})]}),`
`,r.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`---\r
import CardGrid from "../components/card-grid/card-grid.astro";\r
import PrimaryCard from "../components/primary-card/primary-card.astro";\r
import SecondaryCard from "../components/secondary-card/secondary-card.astro";\r
import DoDont from "../components/do-dont/do-dont.astro";\r
---\r
\r
{/* With PrimaryCards */}\r
<CardGrid columns={3}>\r
  <PrimaryCard title="Colors" description="Palette and usage." href="/colors/" />\r
  <PrimaryCard title="Typography" description="Typefaces and scale." href="/typography/" />\r
  <PrimaryCard title="Logos" description="Marks and lockups." href="/logos/" />\r
</CardGrid>\r
\r
{/* With SecondaryCards */}\r
<CardGrid columns={3}>\r
  <SecondaryCard eyebrow="Pillar 1" title="Full Transparency" description="Every ingredient listed." />\r
  <SecondaryCard eyebrow="Pillar 2" title="First Green Powder" description="Three decades of excellence." />\r
  <SecondaryCard eyebrow="Pillar 3" title="Same Trusted Formulas" description="Fresh look, same formula." />\r
</CardGrid>\r
\r
{/* With DoDont cards */}\r
<CardGrid columns={2}>\r
  <DoDont variant="do" items={["Use approved color pairings", "Keep ample clear space"]} />\r
  <DoDont variant="dont" items={["Stretch or distort the logo", "Place it on busy backgrounds"]} />\r
</CardGrid>
`})})]})}function h(n={}){const{wrapper:e}={...a(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(t,{...n})}):t(n)}export{h as default};
