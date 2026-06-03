const r=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};r.isAstroComponentFactory=!0;r.moduleId="/Users/diva/dev/cynda/vibranthealth/brand-styleguide/src/components/image-card/image-card.astro";const a={title:"Reusable/Image Card",component:r},e={args:{images:"https://placehold.co/600x400/025F1D/FFFFFF?text=Image"}},t={args:{images:["https://placehold.co/600x400/025F1D/FFFFFF?text=One","https://placehold.co/600x400/004751/FFFFFF?text=Two"]}},o={args:{images:"https://placehold.co/1200x500/008EA9/FFFFFF?text=Full+Width",fullWidth:!0,noPadding:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    images: "https://placehold.co/600x400/025F1D/FFFFFF?text=Image"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    images: ["https://placehold.co/600x400/025F1D/FFFFFF?text=One", "https://placehold.co/600x400/004751/FFFFFF?text=Two"]
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    images: "https://placehold.co/1200x500/008EA9/FFFFFF?text=Full+Width",
    fullWidth: true,
    noPadding: true
  }
}`,...o.parameters?.docs?.source}}};const s=["Single","Multiple","FullWidthNoPadding"],F=Object.freeze(Object.defineProperty({__proto__:null,FullWidthNoPadding:o,Multiple:t,Single:e,__namedExportsOrder:s,default:a},Symbol.toStringTag,{value:"Module"}));export{F as I};
