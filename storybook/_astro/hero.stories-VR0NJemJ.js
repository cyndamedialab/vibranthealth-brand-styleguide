const r=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};r.isAstroComponentFactory=!0;r.moduleId="C:/Users/17327/websites/vibranthealth/brand-styleguide/src/components/hero/hero.astro";const o={title:"Reusable/Hero",component:r,parameters:{layout:"fullscreen"}},e={args:{title:"Brand Identity",description:"The foundational elements that make Vibrant Health recognizable across every touchpoint."}},t={args:{title:"Colors"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Brand Identity",
    description: "The foundational elements that make Vibrant Health recognizable across every touchpoint."
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Colors"
  }
}`,...t.parameters?.docs?.source}}};const a=["Default","TitleOnly"],s=Object.freeze(Object.defineProperty({__proto__:null,Default:e,TitleOnly:t,__namedExportsOrder:a,default:o},Symbol.toStringTag,{value:"Module"}));export{s as H};
