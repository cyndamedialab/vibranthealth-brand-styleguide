import{u as s,k as e,d as i}from"./blocks-p3lTjQnC.js";import{T as l}from"./typeface-family-panel.stories-CCMN69Ds.js";import"./preload-helper-C91jIAhM.js";function d(r){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l}),`
`,e.jsx(n.h1,{id:"typefacefamilypanel",children:"TypefaceFamilyPanel"}),`
`,e.jsx(n.p,{children:"Panel presenting a full typeface family."}),`
`,e.jsx(n.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/typography/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Typography"}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/packaging/typography/",target:"_blank",rel:"noopener noreferrer",children:"Packaging → Typography"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"name"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsxs(n.td,{children:["— ",e.jsx(n.em,{children:"(required)"})]}),e.jsx(n.td,{children:"Typeface family name."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"subtitle"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsxs(n.td,{children:["— ",e.jsx(n.em,{children:"(required)"})]}),e.jsx(n.td,{children:"Secondary line in the download header (e.g. format/weights)."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"note"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsxs(n.td,{children:["— ",e.jsx(n.em,{children:"(required)"})]}),e.jsx(n.td,{children:"Note line in the download header."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"fontStack"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsxs(n.td,{children:["— ",e.jsx(n.em,{children:"(required)"})]}),e.jsx(n.td,{children:"CSS font-family stack applied to the specimen text."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"weights"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"{ label: string; value: number; svgId?: string }[]"})}),e.jsxs(n.td,{children:["— ",e.jsx(n.em,{children:"(required)"})]}),e.jsxs(n.td,{children:["Weights to display; ",e.jsx(n.code,{children:"svgId"})," optionally references specimen artwork."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"downloadHref"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:'"#"'})}),e.jsx(n.td,{children:"Target for the download header link."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"italic"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"boolean"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"true"})}),e.jsxs(n.td,{children:["When ",e.jsx(n.code,{children:"false"}),", hides the italic column and column headers (upright only)."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"class"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Extra class names appended to the root element."})]})]})]}),`
`,e.jsx(n.p,{children:"The specimen lines (uppercase, lowercase, numerals/symbols) are built in."}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`---\r
import TypefaceFamilyPanel from "../components/typeface-family-panel/typeface-family-panel.astro";\r
---\r
\r
<TypefaceFamilyPanel\r
  name="Poppins"\r
  subtitle="Google Fonts · 6 weights"\r
  note="Use for body copy and UI."\r
  fontStack="'Poppins', sans-serif"\r
  weights={[\r
    { label: "Regular", value: 400 },\r
    { label: "Medium", value: 500 },\r
    { label: "Bold", value: 700 },\r
  ]}\r
  downloadHref="/fonts/poppins.zip"\r
/>
`})})]})}function a(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(d,{...r})}):d(r)}export{a as default};
