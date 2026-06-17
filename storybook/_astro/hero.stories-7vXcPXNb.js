const t=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};t.isAstroComponentFactory=!0;t.moduleId="/Users/diva/dev/cynda/vibranthealth/brand-styleguide/src/components/hero/hero.astro";const o={title:"Reusable/Hero",component:t,parameters:{layout:"fullscreen"}},e={args:{title:"Brand Identity",description:"The foundational elements that make Vibrant Health recognizable across every touchpoint."}},r={args:{title:"Colors"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Brand Identity",
    description: "The foundational elements that make Vibrant Health recognizable across every touchpoint."
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Colors"
  }
}`,...r.parameters?.docs?.source}}};const a=["Default","TitleOnly"],n=Object.freeze(Object.defineProperty({__proto__:null,Default:e,TitleOnly:r,__namedExportsOrder:a,default:o},Symbol.toStringTag,{value:"Module"}));export{n as H};
