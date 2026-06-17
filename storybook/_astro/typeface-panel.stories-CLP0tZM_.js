const a=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};a.isAstroComponentFactory=!0;a.moduleId="/Users/diva/dev/cynda/vibranthealth/brand-styleguide/src/components/typeface-panel/typeface-panel.astro";const s={title:"Standalone/Typeface Panel",component:a},e={args:{label:"Uppercase",chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")}},r={args:{label:"Numerals",chars:"0123456789".split(""),cols:10}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Uppercase",
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Numerals",
    chars: "0123456789".split(""),
    cols: 10
  }
}`,...r.parameters?.docs?.source}}};const o=["Uppercase","Numerals"],t=Object.freeze(Object.defineProperty({__proto__:null,Numerals:r,Uppercase:e,__namedExportsOrder:o,default:s},Symbol.toStringTag,{value:"Module"}));export{t as T};
