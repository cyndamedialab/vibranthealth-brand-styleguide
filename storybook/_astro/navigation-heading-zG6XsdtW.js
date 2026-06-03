import{u as d,k as e,d as r}from"./blocks-BSqmMR9E.js";import{N as s}from"./navigation-heading.stories-j1ntSChA.js";import"./preload-helper-C91jIAhM.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:s}),`
`,e.jsx(n.h1,{id:"navigationheading",children:"NavigationHeading"}),`
`,e.jsx(n.p,{children:"A section heading within the sidebar navigation."}),`
`,e.jsx(n.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/",target:"_blank",rel:"noopener noreferrer",children:"Home"}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Used inside the Navigation component, which appears on every page."}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"href"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:'"/"'})}),e.jsx(n.td,{children:"Link target for the heading."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"class"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"—"}),e.jsxs(n.td,{children:["Extra class names appended to the root ",e.jsx(n.code,{children:"<a>"}),"."]})]})]})]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`---
import NavigationHeading from "../components/navigation-heading/navigation-heading.astro";
---

<NavigationHeading href="/" />
`})}),`
`,e.jsx(n.p,{children:"Renders the Vibrant Health logo and the “Brand Style Guidelines” tag; the content is built in, so no slot or label is required."})]})}function l(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{l as default};
