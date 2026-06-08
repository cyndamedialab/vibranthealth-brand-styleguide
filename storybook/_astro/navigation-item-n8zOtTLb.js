import{u as r,k as e,d}from"./blocks-p3lTjQnC.js";import{N as s}from"./navigation-item.stories-BWaAzMmL.js";import"./preload-helper-C91jIAhM.js";function i(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:s}),`
`,e.jsx(n.h1,{id:"navigationitem",children:"NavigationItem"}),`
`,e.jsx(n.p,{children:"A single link within the sidebar navigation."}),`
`,e.jsx(n.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/",target:"_blank",rel:"noopener noreferrer",children:"Home"}),`
`]}),`
`]}),`
`,e.jsx(n.p,{children:"Used inside the Navigation component, which appears on every page."}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"title"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsxs(n.td,{children:["— ",e.jsx(n.em,{children:"(required)"})]}),e.jsx(n.td,{children:"Link text."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"href"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsxs(n.td,{children:["— ",e.jsx(n.em,{children:"(required)"})]}),e.jsx(n.td,{children:"Link target."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"active"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})}),e.jsx(n.td,{children:"Marks the item as the current page."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"items"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"NavigationItemChild[]"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"[]"})}),e.jsx(n.td,{children:"Optional nested child links shown beneath this item."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"exact"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})}),e.jsxs(n.td,{children:["When ",e.jsx(n.code,{children:"true"}),", active matching requires an exact ",e.jsx(n.code,{children:"href"})," match."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"class"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Extra class names appended to the root element."})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"NavigationItemChild"})," is ",e.jsx(n.code,{children:"{ title: string; href: string; active?: boolean }"}),"."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`---\r
import NavigationItem from "../components/navigation-item/navigation-item.astro";\r
---\r
\r
<NavigationItem title="Colors" href="/brand-identity/colors/" active />\r
\r
{/* With nested children */}\r
<NavigationItem\r
  title="Brand Identity"\r
  href="/brand-identity/"\r
  items={[\r
    { title: "Colors", href: "/brand-identity/colors/", active: true },\r
    { title: "Typography", href: "/brand-identity/typography/" },\r
  ]}\r
/>
`})})]})}function o(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{o as default};
