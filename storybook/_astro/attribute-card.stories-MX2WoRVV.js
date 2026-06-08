const o=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};o.isAstroComponentFactory=!0;o.moduleId="C:/Users/17327/websites/vibranthealth/brand-styleguide/src/components/attribute-card/attribute-card.astro";const s={title:"Reusable/Attribute Card",component:o},e={args:{title:"Authentic",description:"Photography should feel real and unstaged, capturing genuine moments."}},t={args:{title:"Vibrant",description:["Use natural light wherever possible.","Favor saturated, energetic color over muted tones."]}},r={args:{title:"Avoid stock clichés",description:"No overly posed handshakes or sterile clinical settings.",variant:"dont"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Authentic",
    description: "Photography should feel real and unstaged, capturing genuine moments."
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Vibrant",
    description: ["Use natural light wherever possible.", "Favor saturated, energetic color over muted tones."]
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Avoid stock clichés",
    description: "No overly posed handshakes or sterile clinical settings.",
    variant: "dont"
  }
}`,...r.parameters?.docs?.source}}};const a=["Default","MultiLine","DontVariant"],n=Object.freeze(Object.defineProperty({__proto__:null,Default:e,DontVariant:r,MultiLine:t,__namedExportsOrder:a,default:s},Symbol.toStringTag,{value:"Module"}));export{n as A};
