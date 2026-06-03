import{u as d,k as e,d as i}from"./blocks-BSqmMR9E.js";import{M as t}from"./mission-card.stories-CLUHpYyi.js";import"./preload-helper-C91jIAhM.js";function r(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:t}),`
`,e.jsx(n.h1,{id:"missioncard",children:"MissionCard"}),`
`,e.jsx(n.p,{children:"Card presenting the brand mission."}),`
`,e.jsx(n.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"https://cyndamedialab.github.io/vibranthealth-brand-styleguide/",target:"_blank",rel:"noopener noreferrer",children:"Home"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"title"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsxs(n.td,{children:["— ",e.jsx(n.em,{children:"(required)"})]}),e.jsx(n.td,{children:"Card heading."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"body"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsxs(n.td,{children:["— ",e.jsx(n.em,{children:"(required)"})]}),e.jsx(n.td,{children:"Mission copy."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"accent"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Optional accent color (any CSS color) for the card styling."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"class"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"string"})}),e.jsx(n.td,{children:"—"}),e.jsx(n.td,{children:"Extra class names appended to the root element."})]})]})]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`---
import MissionCard from "../components/mission-card/mission-card.astro";
---

<MissionCard
  title="Our Mission"
  body="To make vibrant health simple, accessible, and joyful for everyone."
  accent="#78BA1F"
/>
`})})]})}function o(s={}){const{wrapper:n}={...d(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{o as default};
