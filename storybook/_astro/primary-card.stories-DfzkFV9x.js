const a=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};a.isAstroComponentFactory=!0;a.moduleId="/Users/diva/dev/cynda/vibranthealth/brand-styleguide/src/components/primary-card/primary-card.astro";const t={title:"Reusable/Primary Card",component:a},e={args:{title:"Logos",tagline:"Marks & wordmarks",description:"Download primary, secondary, and monochrome versions of the Vibrant Health logo."}},r={args:{title:"Colors",tagline:"Palette & usage",description:"Explore the brand palette and how to apply it.",href:"/brand-identity/colors"}},o={args:{title:"Typography",description:["Type families, scales, and pairing guidance.","Includes downloadable specimens for each weight."]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Logos",
    tagline: "Marks & wordmarks",
    description: "Download primary, secondary, and monochrome versions of the Vibrant Health logo."
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Colors",
    tagline: "Palette & usage",
    description: "Explore the brand palette and how to apply it.",
    href: "/brand-identity/colors"
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Typography",
    description: ["Type families, scales, and pairing guidance.", "Includes downloadable specimens for each weight."]
  }
}`,...o.parameters?.docs?.source}}};const s=["Default","AsLink","MultiLineDescription"],n=Object.freeze(Object.defineProperty({__proto__:null,AsLink:r,Default:e,MultiLineDescription:o,__namedExportsOrder:s,default:t},Symbol.toStringTag,{value:"Module"}));export{n as P};
