const a=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};a.isAstroComponentFactory=!0;a.moduleId="C:/Users/17327/websites/vibranthealth/brand-styleguide/src/components/image-card/image-card.astro";const F={title:"Reusable/Image Card",component:a},e={args:{images:"https://placehold.co/600x400/025F1D/FFFFFF?text=Image"}},r={args:{images:["https://placehold.co/600x400/025F1D/FFFFFF?text=One","https://placehold.co/600x400/004751/FFFFFF?text=Two"]}},t={args:{images:"https://placehold.co/1200x500/008EA9/FFFFFF?text=Full+Width",fullWidth:!0,noPadding:!0}},o={args:{images:"https://placehold.co/600x400/025F1D/FFFFFF?text=Image",backgroundColor:"#fff"}},s={args:{images:"https://placehold.co/1200x600/025F1D/FFFFFF?text=Borderless",noPadding:!0,borderless:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    images: "https://placehold.co/600x400/025F1D/FFFFFF?text=Image"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    images: ["https://placehold.co/600x400/025F1D/FFFFFF?text=One", "https://placehold.co/600x400/004751/FFFFFF?text=Two"]
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    images: "https://placehold.co/1200x500/008EA9/FFFFFF?text=Full+Width",
    fullWidth: true,
    noPadding: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    images: "https://placehold.co/600x400/025F1D/FFFFFF?text=Image",
    backgroundColor: "#fff"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    images: "https://placehold.co/1200x600/025F1D/FFFFFF?text=Borderless",
    noPadding: true,
    borderless: true
  }
}`,...s.parameters?.docs?.source}}};const c=["Single","Multiple","FullWidthNoPadding","WhiteBackground","Borderless"],n=Object.freeze(Object.defineProperty({__proto__:null,Borderless:s,FullWidthNoPadding:t,Multiple:r,Single:e,WhiteBackground:o,__namedExportsOrder:c,default:F},Symbol.toStringTag,{value:"Module"}));export{n as I};
