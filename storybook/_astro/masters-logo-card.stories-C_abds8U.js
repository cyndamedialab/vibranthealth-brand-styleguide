const r=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};r.isAstroComponentFactory=!0;r.moduleId="/Users/diva/dev/cynda/vibranthealth/brand-styleguide/src/components/masters-logo-card/masters-logo-card.astro";const a={title:"Reusable/Masters Logo Card",component:r},o={args:{title:"Primary logo",description:"The default lockup for most applications.",logoImageSrc:"https://placehold.co/320x120/0B2E4F/FFFFFF?text=Logo",logoImageAlt:"Vibrant Health primary logo"}},e={args:{title:"Primary logo",description:"The default lockup for most applications.",logoImageSrc:"https://placehold.co/320x120/0B2E4F/FFFFFF?text=Logo",showDownload:!0,downloadHref:"#"}},t={args:{title:"Reversed logo",titleSize:"small",whiteBackground:!0,showDownload:!0,downloadHref:"#",logoImageSrc:"https://placehold.co/320x120/FFFFFF/0B2E4F?text=Logo",logoWidth:200}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Primary logo",
    description: "The default lockup for most applications.",
    logoImageSrc: "https://placehold.co/320x120/0B2E4F/FFFFFF?text=Logo",
    logoImageAlt: "Vibrant Health primary logo"
  }
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Primary logo",
    description: "The default lockup for most applications.",
    logoImageSrc: "https://placehold.co/320x120/0B2E4F/FFFFFF?text=Logo",
    showDownload: true,
    downloadHref: "#"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Reversed logo",
    titleSize: "small",
    whiteBackground: true,
    showDownload: true,
    downloadHref: "#",
    logoImageSrc: "https://placehold.co/320x120/FFFFFF/0B2E4F?text=Logo",
    logoWidth: 200
  }
}`,...t.parameters?.docs?.source}}};const s=["Default","WithDownload","WhiteBackground"],l=Object.freeze(Object.defineProperty({__proto__:null,Default:o,WhiteBackground:t,WithDownload:e,__namedExportsOrder:s,default:a},Symbol.toStringTag,{value:"Module"}));export{l as M};
