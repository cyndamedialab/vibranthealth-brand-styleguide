import{u as d,k as e,d as s}from"./blocks-B4DhRhx6.js";import{P as t}from"./primary-grid.stories-CAAHFS17.js";import"./preload-helper-C91jIAhM.js";function i(n){const r={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:t}),`
`,e.jsx(r.h1,{id:"primarygrid",children:"PrimaryGrid"}),`
`,e.jsx(r.p,{children:"Grid layout of primary cards on section landing pages."}),`
`,e.jsx(r.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(r.ul,{children:[`
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
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Prop"}),e.jsx(r.th,{children:"Type"}),e.jsx(r.th,{children:"Default"}),e.jsx(r.th,{children:"Description"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"cards"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"Card[]"})}),e.jsxs(r.td,{children:["— ",e.jsx(r.em,{children:"(required)"})]}),e.jsxs(r.td,{children:["Cards to render in the grid; each becomes a linked ",e.jsx(r.code,{children:"PrimaryCard"}),"."]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"columns"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"2 | 3"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"3"})}),e.jsx(r.td,{children:"Number of columns in the grid."})]})]})]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"Card"})," is ",e.jsx(r.code,{children:"{ title: string; description: string; href: string }"}),"."]}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`---
import PrimaryGrid from "../components/primary-grid/primary-grid.astro";
---

<PrimaryGrid
  columns={3}
  cards={[
    { title: "Colors", description: "Palette and usage.", href: "/colors/" },
    { title: "Typography", description: "Typefaces and scale.", href: "/typography/" },
    { title: "Logos", description: "Marks and lockups.", href: "/logos/" },
  ]}
/>
`})}),`
`,e.jsxs(r.p,{children:["Wraps ",e.jsx(r.code,{children:"PrimaryCard"})," — use it for section landing-page link grids."]})]})}function h(n={}){const{wrapper:r}={...d(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(i,{...n})}):i(n)}export{h as default};
