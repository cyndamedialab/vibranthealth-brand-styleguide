import{u as r,k as e,d}from"./blocks-QVCSqwEy.js";import{N as s}from"./navigation.stories-CycRKMTg.js";import"./preload-helper-C91jIAhM.js";function t(i){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:s}),`
`,e.jsx(n.h1,{id:"navigation",children:"Navigation"}),`
`,e.jsx(n.p,{children:"The sidebar navigation rendered on every page of the styleguide."}),`
`,e.jsx(n.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/",target:"_blank",rel:"noopener noreferrer",children:"Home"}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Part of the global layout — appears in the sidebar on every page."}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"sections"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"NavigationSection[]"})}),e.jsxs(n.td,{children:["— ",e.jsx(n.em,{children:"(required)"})]}),e.jsx(n.td,{children:"Top-level nav sections, each with optional nested children."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"label"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Optional label rendered above the sections."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"headingHref"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Link target for the navigation heading/logo."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"class"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Extra class names appended to the root element."})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"NavigationSection"})," is ",e.jsx(n.code,{children:"{ title: string; href: string; active?: boolean; children?: NavigationSectionChild[] }"})," and ",e.jsx(n.code,{children:"NavigationSectionChild"})," is ",e.jsx(n.code,{children:"{ title: string; href: string; active?: boolean }"}),"."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`---
import Navigation from "../components/navigation/navigation.astro";
---

<Navigation
  headingHref="/"
  sections={[
    { title: "Home", href: "/" },
    {
      title: "Brand Identity",
      href: "/brand-identity/",
      active: true,
      children: [
        { title: "Colors", href: "/brand-identity/colors/", active: true },
        { title: "Typography", href: "/brand-identity/typography/" },
      ],
    },
  ]}
/>
`})}),`
`,e.jsxs(n.p,{children:["Composes ",e.jsx(n.code,{children:"NavigationHeading"})," and ",e.jsx(n.code,{children:"NavigationItem"})," internally."]})]})}function a(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{a as default};
