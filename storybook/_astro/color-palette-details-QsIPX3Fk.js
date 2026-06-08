import{u as n,k as e,d as t}from"./blocks-qRV1lCVL.js";import{C as l}from"./color-palette-details.stories-BkDNe10H.js";import"./preload-helper-C91jIAhM.js";function s(r){const d={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:l}),`
`,e.jsx(d.h1,{id:"colorpalettedetails",children:"ColorPaletteDetails"}),`
`,e.jsx(d.p,{children:"Detailed breakdown of a color palette."}),`
`,e.jsx(d.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/packaging/colors/",target:"_blank",rel:"noopener noreferrer",children:"Packaging → Colors"}),`
`]}),`
`]}),`
`,e.jsx(d.h2,{id:"props",children:"Props"}),`
`,e.jsxs(d.table,{children:[e.jsx(d.thead,{children:e.jsxs(d.tr,{children:[e.jsx(d.th,{children:"Prop"}),e.jsx(d.th,{children:"Type"}),e.jsx(d.th,{children:"Default"}),e.jsx(d.th,{children:"Description"})]})}),e.jsxs(d.tbody,{children:[e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"role"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string"})}),e.jsxs(d.td,{children:["— ",e.jsx(d.em,{children:"(required)"})]}),e.jsxs(d.td,{children:["Role label shown in the colored pill at the top (e.g. ",e.jsx(d.code,{children:'"Primary"'}),")."]})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"hex"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string"})}),e.jsxs(d.td,{children:["— ",e.jsx(d.em,{children:"(required)"})]}),e.jsx(d.td,{children:"Hex value used both as the swatch background and in the HEX row."})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"pantone"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string"})}),e.jsxs(d.td,{children:["— ",e.jsx(d.em,{children:"(required)"})]}),e.jsx(d.td,{children:"Pantone code displayed on the swatch."})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"textLight"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"boolean"})}),e.jsxs(d.td,{children:["— ",e.jsx(d.em,{children:"(required)"})]}),e.jsxs(d.td,{children:["When ",e.jsx(d.code,{children:"true"}),", swatch text is white; otherwise black. Set based on swatch contrast."]})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"mix"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"{ label: string; value: string }[]"})}),e.jsxs(d.td,{children:["— ",e.jsx(d.em,{children:"(required)"})]}),e.jsx(d.td,{children:"Free-form mixing/ratio rows rendered above the HEX row."})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"rgb"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string[]"})}),e.jsxs(d.td,{children:["— ",e.jsx(d.em,{children:"(required)"})]}),e.jsx(d.td,{children:"Three values mapped to Red, Green, Blue rows."})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"cmyk"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string[]"})}),e.jsxs(d.td,{children:["— ",e.jsx(d.em,{children:"(required)"})]}),e.jsx(d.td,{children:"Four values mapped to Cyan, Magenta, Yellow, Black rows."})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"cielab"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string[]"})}),e.jsxs(d.td,{children:["— ",e.jsx(d.em,{children:"(required)"})]}),e.jsx(d.td,{children:"Three values mapped to L, A, B rows."})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"tags"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string[]"})}),e.jsxs(d.td,{children:["— ",e.jsx(d.em,{children:"(required)"})]}),e.jsx(d.td,{children:"Pill tags shown at the bottom of the column."})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"class"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string"})}),e.jsx(d.td,{children:"—"}),e.jsx(d.td,{children:"Extra class names appended to the root element."})]})]})]}),`
`,e.jsx(d.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`---
import ColorPaletteDetails from "../components/color-palette-details/color-palette-details.astro";
---

<ColorPaletteDetails
  role="Primary"
  hex="#002C4E"
  pantone="2965 C"
  textLight={true}
  mix={[{ label: "Base", value: "100%" }]}
  rgb={["0", "44", "78"]}
  cmyk={["100", "44", "0", "69"]}
  cielab={["18", "1", "-24"]}
  tags={["Backgrounds", "Headlines"]}
/>
`})})]})}function o(r={}){const{wrapper:d}={...n(),...r.components};return d?e.jsx(d,{...r,children:e.jsx(s,{...r})}):s(r)}export{o as default};
