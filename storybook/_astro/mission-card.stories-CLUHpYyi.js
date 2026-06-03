const o=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};o.isAstroComponentFactory=!0;o.moduleId="/Users/diva/dev/cynda/vibranthealth/brand-styleguide/src/components/mission-card/mission-card.astro";const t={title:"Standalone/Mission Card",component:o},e={args:{title:"Our Mission",body:"To make vibrant health accessible to everyone through honest, effective nutrition."}},r={args:{title:"Our Vision",body:"A world where everyone has the energy to live fully.",accent:"var(--vh-green)"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Our Mission",
    body: "To make vibrant health accessible to everyone through honest, effective nutrition."
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Our Vision",
    body: "A world where everyone has the energy to live fully.",
    accent: "var(--vh-green)"
  }
}`,...r.parameters?.docs?.source}}};const n=["Default","WithAccent"],s=Object.freeze(Object.defineProperty({__proto__:null,Default:e,WithAccent:r,__namedExportsOrder:n,default:t},Symbol.toStringTag,{value:"Module"}));export{s as M};
