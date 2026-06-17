const s=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};s.isAstroComponentFactory=!0;s.moduleId="/Users/diva/dev/cynda/vibranthealth/brand-styleguide/src/components/download-header/download-header.astro";const o={title:"Reusable/Download Header",component:s},e={args:{title:"Inter",subtitle:"Design system typeface",href:"#",download:!0}},t={args:{title:"Poppins",subtitle:"Feature display typeface",note:"OFL licensed · 18 styles",href:"#",download:!0}},r={args:{title:"IBM Plex Sans",subtitle:"Label typeface",href:"#",embedded:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Inter",
    subtitle: "Design system typeface",
    href: "#",
    download: true
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Poppins",
    subtitle: "Feature display typeface",
    note: "OFL licensed · 18 styles",
    href: "#",
    download: true
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "IBM Plex Sans",
    subtitle: "Label typeface",
    href: "#",
    embedded: true
  }
}`,...r.parameters?.docs?.source}}};const a=["Default","WithNote","Embedded"],n=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Embedded:r,WithNote:t,__namedExportsOrder:a,default:o},Symbol.toStringTag,{value:"Module"}));export{n as D};
