const o=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};o.isAstroComponentFactory=!0;o.moduleId="/Users/diva/dev/cynda/vibranthealth/brand-styleguide/src/components/primary-grid/primary-grid.astro";const a={title:"Reusable/Primary Grid",component:o,parameters:{layout:"fullscreen"}},s=[{title:"Logos",description:"Primary, secondary, and monochrome marks.",href:"/brand-identity/logos"},{title:"Colors",description:"The brand palette and how to apply it.",href:"/brand-identity/colors"},{title:"Typography",description:"Type families, scales, and pairing guidance.",href:"/brand-identity/typography"}],r={args:{cards:s,columns:3}},e={args:{cards:s.slice(0,2),columns:2}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    cards,
    columns: 3
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    cards: cards.slice(0, 2),
    columns: 2
  }
}`,...e.parameters?.docs?.source}}};const t=["ThreeColumns","TwoColumns"],n=Object.freeze(Object.defineProperty({__proto__:null,ThreeColumns:r,TwoColumns:e,__namedExportsOrder:t,default:a},Symbol.toStringTag,{value:"Module"}));export{n as P};
