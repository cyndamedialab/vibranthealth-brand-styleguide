import{u as s,k as e,d}from"./blocks-Bth8_9u1.js";import{S as a}from"./strategy-cards.stories-Bru1FbxU.js";import"./preload-helper-D1UD9lgW.js";function r(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:a}),`
`,e.jsx(n.h1,{id:"strategycards",children:"StrategyCards"}),`
`,e.jsx(n.p,{children:"Set of cards outlining copy strategy."}),`
`,e.jsx(n.h2,{id:"used-on",children:"Used on"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsx("a",{href:"http://brand.vibranthealth.com/marketing/copy-strategy/",target:"_blank",rel:"noopener noreferrer",children:"Marketing → Copy Strategy"}),`
`]}),`
`]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Prop"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Default"}),e.jsx(n.th,{children:"Description"})]})}),e.jsx(n.tbody,{children:e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"items"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"Example[]"})}),e.jsxs(n.td,{children:["— ",e.jsx(n.em,{children:"(required)"})]}),e.jsx(n.td,{children:"Strategy examples, each rendered as a card with annotations."})]})})]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"Example"})," is ",e.jsx(n.code,{children:"{ label?: string; heading?: string; body: string; items?: string[]; annotations: Annotation[] }"}),", and ",e.jsx(n.code,{children:"Annotation"})," is ",e.jsx(n.code,{children:"{ label: string; notes?: string[] }"}),"."]}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`---
import StrategyCards from "../components/strategy-cards/strategy-cards.astro";
---

<StrategyCards
  items={[
    {
      label: "Example",
      heading: "Headline copy",
      body: "Vibrant Health helps you feel your best, every day.",
      items: ["Short", "Active voice"],
      annotations: [
        { label: "Tone", notes: ["Warm", "Confident"] },
        { label: "Length", notes: ["Under 10 words"] },
      ],
    },
  ]}
/>
`})})]})}function c(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{c as default};
