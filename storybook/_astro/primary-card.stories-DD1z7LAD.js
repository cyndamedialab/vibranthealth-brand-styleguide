const t=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};t.isAstroComponentFactory=!0;t.moduleId="C:/Users/17327/websites/vibranthealth/brand-styleguide/src/components/primary-card/primary-card.astro";const n={title:"Reusable/Primary Card",component:t},e={args:{title:"Logos",tagline:"Marks & wordmarks",description:"Download primary, secondary, and monochrome versions of the Vibrant Health logo."}},r={args:{title:"Colors",tagline:"Palette & usage",description:"Explore the brand palette and how to apply it.",href:"/brand-identity/colors"}},a={args:{title:"Typography",description:["Type families, scales, and pairing guidance.","Includes downloadable specimens for each weight."]}},o={args:{headerColor:"green",title:"WHAT",tagline:"Product/Result",description:["Vibrant Health is a family-owned company, founded in 1992 with the launch of Green Vibrance.","Offers a range of highly awarded, rigorously tested nutritional supplements."]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Typography",
    description: ["Type families, scales, and pairing guidance.", "Includes downloadable specimens for each weight."]
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    headerColor: "green",
    title: "WHAT",
    tagline: "Product/Result",
    description: ["Vibrant Health is a family-owned company, founded in 1992 with the launch of Green Vibrance.", "Offers a range of highly awarded, rigorously tested nutritional supplements."]
  }
}`,...o.parameters?.docs?.source}}};const s=["Default","AsLink","MultiDescription","GreenHeader"],i=Object.freeze(Object.defineProperty({__proto__:null,AsLink:r,Default:e,GreenHeader:o,MultiDescription:a,__namedExportsOrder:s,default:n},Symbol.toStringTag,{value:"Module"}));export{i as P};
