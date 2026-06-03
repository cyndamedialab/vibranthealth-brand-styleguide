import{u as s,k as e,d as t}from"./blocks-BSqmMR9E.js";import{T as l}from"./trademarks-logo-card.stories-ys2zP_LZ.js";import"./preload-helper-C91jIAhM.js";function n(r){const d={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:l}),`
`,e.jsx(d.h1,{id:"trademarkslogocard",children:"TrademarksLogoCard"}),`
`,e.jsx(d.p,{children:"Card displaying trademark usage for the logo."}),`
`,e.jsx(d.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/logos/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Logos"}),`
`]}),`
`]}),`
`,e.jsx(d.h2,{id:"props",children:"Props"}),`
`,e.jsxs(d.table,{children:[e.jsx(d.thead,{children:e.jsxs(d.tr,{children:[e.jsx(d.th,{children:"Prop"}),e.jsx(d.th,{children:"Type"}),e.jsx(d.th,{children:"Default"}),e.jsx(d.th,{children:"Description"})]})}),e.jsxs(d.tbody,{children:[e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"categoryTitle"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string"})}),e.jsxs(d.td,{children:["— ",e.jsx(d.em,{children:"(required)"})]}),e.jsx(d.td,{children:"Category label shown above the entry list."})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"entries"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string[]"})}),e.jsxs(d.td,{children:["— ",e.jsx(d.em,{children:"(required)"})]}),e.jsx(d.td,{children:"Trademark entries listed in the card."})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"title"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string"})}),e.jsxs(d.td,{children:["— ",e.jsx(d.em,{children:"(required)"})]}),e.jsxs(d.td,{children:["Card title and basis of the download ",e.jsx(d.code,{children:"aria-label"}),"."]})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"logoImageSrc"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string"})}),e.jsxs(d.td,{children:["— ",e.jsx(d.em,{children:"(required)"})]}),e.jsx(d.td,{children:"Logo image shown in the card."})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"logoImageAlt"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string"})}),e.jsxs(d.td,{children:["falls back to ",e.jsx(d.code,{children:"title"})]}),e.jsx(d.td,{children:"Alt text for the logo image."})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"logoWidth"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string | number"})}),e.jsx(d.td,{children:"—"}),e.jsx(d.td,{children:"Logo width; a number is treated as pixels."})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"showDownload"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"boolean"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"false"})}),e.jsx(d.td,{children:"Shows the download control."})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"downloadLabel"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:'"Download"'})}),e.jsxs(d.td,{children:["Used to build the control's ",e.jsx(d.code,{children:"aria-label"})," (",e.jsx(d.code,{children:"{label} {title}"}),")."]})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"downloadHref"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string"})}),e.jsx(d.td,{children:"—"}),e.jsx(d.td,{children:"Target for the download control."})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"class"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string"})}),e.jsx(d.td,{children:"—"}),e.jsx(d.td,{children:"Extra class names appended to the root element."})]})]})]}),`
`,e.jsx(d.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`---
import TrademarksLogoCard from "../components/trademarks-logo-card/trademarks-logo-card.astro";
---

<TrademarksLogoCard
  categoryTitle="Registered Marks"
  entries={["Vibrant Health®", "VH®"]}
  title="Primary Wordmark"
  logoImageSrc="/logos/wordmark.svg"
  logoWidth={220}
  showDownload
  downloadHref="/logos/wordmark.zip"
/>
`})})]})}function h(r={}){const{wrapper:d}={...s(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(n,{...r})}):n(r)}export{h as default};
