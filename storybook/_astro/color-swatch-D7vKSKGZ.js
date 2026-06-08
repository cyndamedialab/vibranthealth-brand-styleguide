import{u as s,k as e,d as t}from"./blocks-p3lTjQnC.js";import{C as l}from"./color-swatch.stories-vQHCQjRi.js";import"./preload-helper-C91jIAhM.js";function d(n){const r={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:l}),`
`,e.jsx(r.h1,{id:"colorswatch",children:"ColorSwatch"}),`
`,e.jsx(r.p,{children:"Displays a single color with its name and value."}),`
`,e.jsx(r.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/colors/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Colors"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/packaging/colors/",target:"_blank",rel:"noopener noreferrer",children:"Packaging → Colors"}),`
`]}),`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/web/colors/",target:"_blank",rel:"noopener noreferrer",children:"Web → Colors"}),`
`]}),`
`]}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Prop"}),e.jsx(r.th,{children:"Type"}),e.jsx(r.th,{children:"Default"}),e.jsx(r.th,{children:"Description"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"name"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsxs(r.td,{children:["— ",e.jsx(r.em,{children:"(required)"})]}),e.jsx(r.td,{children:"Color name shown beneath the swatch."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"swatch"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsxs(r.td,{children:["— ",e.jsx(r.em,{children:"(required)"})]}),e.jsx(r.td,{children:"Any valid CSS color/background value used to fill the swatch."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"bordered"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"boolean"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"false"})}),e.jsx(r.td,{children:"Adds a border around the swatch — use for white or very light colors."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"specs"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"ColorSpec[]"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"[]"})}),e.jsx(r.td,{children:"Optional label/value pairs (HEX, RGB, etc.) rendered as a definition list."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"pantone"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string | string[]"})}),e.jsx(r.td,{children:"—"}),e.jsx(r.td,{children:"One or more Pantone codes shown under the name."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"class"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"—"}),e.jsx(r.td,{children:"Extra class names appended to the root element."})]})]})]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"ColorSpec"})," is ",e.jsx(r.code,{children:"{ label: string; value: string }"}),"."]}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`---\r
import ColorSwatch from "../components/color-swatch/color-swatch.astro";\r
---\r
\r
<ColorSwatch\r
  name="Vibrant Green"\r
  swatch="#78BA1F"\r
  pantone="368 C"\r
  specs={[\r
    { label: "HEX", value: "#78BA1F" },\r
    { label: "RGB", value: "120, 186, 31" },\r
  ]}\r
/>\r
\r
{/* Light color needs a border to stay visible */}\r
<ColorSwatch name="White" swatch="#FFFFFF" bordered />
`})})]})}function h(n={}){const{wrapper:r}={...s(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(d,{...n})}):d(n)}export{h as default};
