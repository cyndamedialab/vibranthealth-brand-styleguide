import{u as s,k as e,d as t}from"./blocks-p3lTjQnC.js";import{L as i}from"./logo-card.stories-BOnIOMdC.js";import"./preload-helper-C91jIAhM.js";function r(n){const d={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:i}),`
`,e.jsx(d.h1,{id:"logocard",children:"LogoCard"}),`
`,e.jsx(d.p,{children:"Card displaying a logo variant on a white stage, with an optional heading region above and a footer label below. When a download is provided, the whole footer bar becomes a clickable download link."}),`
`,e.jsx(d.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(d.ul,{children:[`
`,e.jsxs(d.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/application/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Application"}),`
`]}),`
`,e.jsxs(d.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/brand-identity/logos/",target:"_blank",rel:"noopener noreferrer",children:"Brand Identity → Logos"}),`
`]}),`
`]}),`
`,e.jsx(d.h2,{id:"props",children:"Props"}),`
`,e.jsxs(d.table,{children:[e.jsx(d.thead,{children:e.jsxs(d.tr,{children:[e.jsx(d.th,{children:"Prop"}),e.jsx(d.th,{children:"Type"}),e.jsx(d.th,{children:"Default"}),e.jsx(d.th,{children:"Description"})]})}),e.jsxs(d.tbody,{children:[e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"title"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string"})}),e.jsxs(d.td,{children:["— ",e.jsx(d.em,{children:"(required)"})]}),e.jsx(d.td,{children:"Footer label."})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"description"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string"})}),e.jsx(d.td,{children:"—"}),e.jsx(d.td,{children:"Optional body copy below the footer title."})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"titleSize"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:'"default" | "small"'})}),e.jsx(d.td,{children:e.jsx(d.code,{children:'"default"'})}),e.jsx(d.td,{children:"Controls the footer title type size."})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"heading"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string"})}),e.jsx(d.td,{children:"—"}),e.jsx(d.td,{children:"Optional heading shown in the top (light-navy) region."})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"headingItems"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string[]"})}),e.jsx(d.td,{children:"—"}),e.jsxs(d.td,{children:["Optional list of lines rendered under the ",e.jsx(d.code,{children:"heading"}),"."]})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"showDownload"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"boolean"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"false"})}),e.jsx(d.td,{children:"Shows the download affordance in the footer."})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"downloadLabel"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:'"Download"'})}),e.jsxs(d.td,{children:["Used to build the control's ",e.jsx(d.code,{children:"aria-label"})," (",e.jsx(d.code,{children:"{label} {title}"}),")."]})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"downloadHref"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string"})}),e.jsx(d.td,{children:"—"}),e.jsxs(d.td,{children:["If set with ",e.jsx(d.code,{children:"showDownload"}),", the ",e.jsx(d.strong,{children:"entire footer bar"})," becomes a download link; otherwise the control renders as a button."]})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"logoImageSrc"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string"})}),e.jsx(d.td,{children:"—"}),e.jsxs(d.td,{children:["Logo image shown in the stage. If omitted, the ",e.jsx(d.code,{children:"stage"})," slot is used instead."]})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"logoImageAlt"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string"})}),e.jsxs(d.td,{children:["falls back to ",e.jsx(d.code,{children:"title"})]}),e.jsx(d.td,{children:"Alt text for the logo image."})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"logoWidth"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string | number"})}),e.jsx(d.td,{children:"—"}),e.jsx(d.td,{children:"Logo width; a number is treated as pixels."})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"class"})}),e.jsx(d.td,{children:e.jsx(d.code,{children:"string"})}),e.jsx(d.td,{children:"—"}),e.jsx(d.td,{children:"Extra class names appended to the root element."})]})]})]}),`
`,e.jsx(d.h3,{id:"slots",children:"Slots"}),`
`,e.jsxs(d.table,{children:[e.jsx(d.thead,{children:e.jsxs(d.tr,{children:[e.jsx(d.th,{children:"Slot"}),e.jsx(d.th,{children:"Description"})]})}),e.jsxs(d.tbody,{children:[e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"stage"})}),e.jsxs(d.td,{children:["Custom logo artwork, used when ",e.jsx(d.code,{children:"logoImageSrc"})," is not provided."]})]}),e.jsxs(d.tr,{children:[e.jsx(d.td,{children:e.jsx(d.code,{children:"heading"})}),e.jsxs(d.td,{children:["Custom content for the top heading region (rendered after ",e.jsx(d.code,{children:"headingItems"}),")."]})]})]})]}),`
`,e.jsx(d.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(d.pre,{children:e.jsx(d.code,{className:"language-tsx",children:`---\r
import LogoCard from "../components/logo-card/logo-card.astro";\r
---\r
\r
{/* Logo with a clickable download footer */}\r
<LogoCard\r
  title="Primary Logo • Two Lines"\r
  description="Use on light backgrounds."\r
  logoImageSrc="/logos/primary.svg"\r
  logoWidth={200}\r
  showDownload\r
  downloadHref="/logos/primary.svg.tar.gz"\r
/>\r
\r
{/* Logo with a heading region listing trademarks */}\r
<LogoCard\r
  heading="Product Names"\r
  headingItems={["Green Vibrance®", "Trilogy®"]}\r
  title="Primary Logo • One Line • Registered"\r
  logoImageSrc="/logos/secondary-r.svg"\r
  showDownload\r
  downloadHref="/logos/secondary-r.svg.tar.gz"\r
/>\r
\r
{/* Compact label, no download */}\r
<LogoCard\r
  title="The Atom"\r
  description="Regular & Extended"\r
  titleSize="small"\r
  logoImageSrc="/marks/atom.svg"\r
/>
`})})]})}function h(n={}){const{wrapper:d}={...s(),...n.components};return d?e.jsx(d,{...n,children:e.jsx(r,{...n})}):r(n)}export{h as default};
