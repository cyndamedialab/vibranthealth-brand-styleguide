import{u as s,k as e,d as t}from"./blocks-QVCSqwEy.js";import{C as l}from"./color-swatch.stories-DFXCtZcF.js";import"./preload-helper-C91jIAhM.js";function d(r){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:l}),`
`,e.jsx(n.h1,{id:"colorswatch",children:"ColorSwatch"}),`
`,e.jsx(n.p,{children:"Displays a single color with its name and value."}),`
`,e.jsx(n.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/colors/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Colors"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/packaging/colors/",target:"_blank",rel:"noopener noreferrer",children:"Packaging → Colors"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/web/colors/",target:"_blank",rel:"noopener noreferrer",children:"Web → Colors"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"name"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsxs(n.td,{children:["— ",e.jsx(n.em,{children:"(required)"})]}),e.jsx(n.td,{children:"Color name shown beneath the swatch."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"swatch"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsxs(n.td,{children:["— ",e.jsx(n.em,{children:"(required)"})]}),e.jsx(n.td,{children:"Any valid CSS color/background value used to fill the swatch."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"bordered"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"false"})}),e.jsx(n.td,{children:"Adds a border around the swatch — use for white or very light colors."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"specs"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"ColorSpec[]"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"[]"})}),e.jsx(n.td,{children:"Optional label/value pairs (HEX, RGB, etc.) rendered as a definition list."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"pantone"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string | string[]"})}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"One or more Pantone codes shown under the name."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"class"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Extra class names appended to the root element."})]})]})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"ColorSpec"})," is ",e.jsx(n.code,{children:"{ label: string; value: string }"}),"."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`---
import ColorSwatch from "../components/color-swatch/color-swatch.astro";
---

<ColorSwatch
  name="Vibrant Green"
  swatch="#78BA1F"
  pantone="368 C"
  specs={[
    { label: "HEX", value: "#78BA1F" },
    { label: "RGB", value: "120, 186, 31" },
  ]}
/>

{/* Light color needs a border to stay visible */}
<ColorSwatch name="White" swatch="#FFFFFF" bordered />
`})})]})}function h(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{h as default};
