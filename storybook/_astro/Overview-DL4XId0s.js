import{R as n,u as a,k as t,d as i}from"./blocks-qRV1lCVL.js";import{s as o}from"./iframe-CQC-l9DB.js";import"./preload-helper-C91jIAhM.js";const d=({cards:s})=>n.createElement("div",{className:o.cards},s.map(e=>n.createElement("div",{className:o.card,key:e.title},n.createElement("h3",{className:o.cardTitle},e.title),n.createElement("p",{className:o.cardLede},e.body))));function r(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",...a(),...s.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Design System/Overview"}),`
`,t.jsx(e.h1,{id:"welcome",children:"Welcome"}),`
`,t.jsxs(e.p,{children:["This Storybook is the living reference for the ",t.jsx(e.strong,{children:"Vibrant Health"}),` brand style
guide. Start with the `,t.jsx(e.a,{href:"?path=/docs/design-system-tokens--docs",children:"Tokens"}),` page to
see every design token — colors, gradients, and typography — pulled live from
`,t.jsx(e.code,{children:"src/styles/tokens.scss"}),". Everything else is built on top of those tokens."]}),`
`,t.jsx(e.h2,{id:"how-the-stories-are-organized",children:"How the stories are organized"}),`
`,t.jsx(e.p,{children:`Components fall into two groups, reflected in the sidebar. The only distinction
is how many pages of the website use them.`}),`
`,t.jsx(d,{cards:[{title:"Reusable",body:"Components used on more than one page of the website."},{title:"Standalone",body:"Components used on only one page of the website."}]}),`
`,t.jsx(e.h2,{id:"where-to-start",children:"Where to start"}),`
`,t.jsxs(e.p,{children:["Open ",t.jsx(e.a,{href:"?path=/docs/design-system-tokens--docs",children:"Design System → Tokens"}),` to ground
yourself in the design language, then browse the `,t.jsx(e.strong,{children:"Reusable"})," and ",t.jsx(e.strong,{children:"Standalone"}),`
groups to see those tokens in action.`]})]})}function m(s={}){const{wrapper:e}={...a(),...s.components};return e?t.jsx(e,{...s,children:t.jsx(r,{...s})}):r(s)}export{m as default};
