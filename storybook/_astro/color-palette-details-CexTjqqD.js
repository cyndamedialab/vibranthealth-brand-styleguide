import{u as n,k as e,d as t}from"./blocks-Bth8_9u1.js";import{C as l}from"./color-palette-details.stories-BkDNe10H.js";import"./preload-helper-D1UD9lgW.js";function s(d){const r={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n(),...d.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:l}),`
`,e.jsx(r.h1,{id:"colorpalettedetails",children:"ColorPaletteDetails"}),`
`,e.jsx(r.p,{children:"Detailed breakdown of a color palette."}),`
`,e.jsx(r.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[`
`,e.jsx("a",{href:"http://brand.vibranthealth.com/packaging/colors/",target:"_blank",rel:"noopener noreferrer",children:"Packaging → Colors"}),`
`]}),`
`]}),`
`,e.jsx(r.h2,{id:"props",children:"Props"}),`
`,e.jsxs(r.table,{children:[e.jsx(r.thead,{children:e.jsxs(r.tr,{children:[e.jsx(r.th,{children:"Prop"}),e.jsx(r.th,{children:"Type"}),e.jsx(r.th,{children:"Default"}),e.jsx(r.th,{children:"Description"})]})}),e.jsxs(r.tbody,{children:[e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"role"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsxs(r.td,{children:["— ",e.jsx(r.em,{children:"(required)"})]}),e.jsxs(r.td,{children:["Role label shown in the colored pill at the top (e.g. ",e.jsx(r.code,{children:'"Primary"'}),")."]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"hex"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsxs(r.td,{children:["— ",e.jsx(r.em,{children:"(required)"})]}),e.jsx(r.td,{children:"Hex value used both as the swatch background and in the HEX row."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"pantone"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsxs(r.td,{children:["— ",e.jsx(r.em,{children:"(required)"})]}),e.jsx(r.td,{children:"Pantone code displayed on the swatch."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"textLight"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"boolean"})}),e.jsxs(r.td,{children:["— ",e.jsx(r.em,{children:"(required)"})]}),e.jsxs(r.td,{children:["When ",e.jsx(r.code,{children:"true"}),", swatch text is white; otherwise black. Set based on swatch contrast."]})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"mix"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"{ label: string; value: string }[]"})}),e.jsxs(r.td,{children:["— ",e.jsx(r.em,{children:"(required)"})]}),e.jsx(r.td,{children:"Free-form mixing/ratio rows rendered above the HEX row."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"rgb"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string[]"})}),e.jsxs(r.td,{children:["— ",e.jsx(r.em,{children:"(required)"})]}),e.jsx(r.td,{children:"Three values mapped to Red, Green, Blue rows."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"cmyk"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string[]"})}),e.jsxs(r.td,{children:["— ",e.jsx(r.em,{children:"(required)"})]}),e.jsx(r.td,{children:"Four values mapped to Cyan, Magenta, Yellow, Black rows."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"cielab"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string[]"})}),e.jsxs(r.td,{children:["— ",e.jsx(r.em,{children:"(required)"})]}),e.jsx(r.td,{children:"Three values mapped to L, A, B rows."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"tags"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string[]"})}),e.jsxs(r.td,{children:["— ",e.jsx(r.em,{children:"(required)"})]}),e.jsx(r.td,{children:"Pill tags shown at the bottom of the column."})]}),e.jsxs(r.tr,{children:[e.jsx(r.td,{children:e.jsx(r.code,{children:"class"})}),e.jsx(r.td,{children:e.jsx(r.code,{children:"string"})}),e.jsx(r.td,{children:"—"}),e.jsx(r.td,{children:"Extra class names appended to the root element."})]})]})]}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`---
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
`})})]})}function o(d={}){const{wrapper:r}={...n(),...d.components};return r?e.jsx(r,{...d,children:e.jsx(s,{...d})}):s(d)}export{o as default};
