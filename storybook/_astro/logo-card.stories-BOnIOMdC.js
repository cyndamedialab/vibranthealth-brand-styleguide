const a=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};a.isAstroComponentFactory=!0;a.moduleId="C:/Users/17327/websites/vibranthealth/brand-styleguide/src/components/logo-card/logo-card.astro";const n={title:"Reusable/Logo Card",component:a},e={args:{title:"The Atom",description:"Regular & Extended",titleSize:"small",logoImageSrc:"https://placehold.co/160x160/FFFFFF/002C4E?text=Mark",logoWidth:120}},o={args:{title:"Primary Logo • Two Lines",description:"The primary master lockup positions the logotype — stacked on two lines of text — to the right of the logomark. This configuration emphasizes the full brand name and should be utilized in most standard cases where vertical space permits.",logoImageSrc:"https://placehold.co/320x120/FFFFFF/002C4E?text=Logo",showDownload:!0,downloadHref:"#"}},t={args:{heading:"Visual Marks",headingItems:["The Atom","The Molecule","The Synergy","The Compound"],title:"The Atom",description:"Regular & Extended",titleSize:"small",logoImageSrc:"https://placehold.co/160x160/FFFFFF/002C4E?text=Mark",logoWidth:120}},r={args:{heading:"Product Names",headingItems:["Green Vibrance®","Digestive Vibrance®","Joint Vibrance®","Maximum Vibrance®","Spectrum Vibrance®","Trilogy®","U.T. Vibrance®"],title:"Primary Logo • One Line • Registered",logoImageSrc:"https://placehold.co/375x80/FFFFFF/002C4E?text=Logo",logoWidth:320,showDownload:!0,downloadHref:"#"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "The Atom",
    description: "Regular & Extended",
    titleSize: "small",
    logoImageSrc: "https://placehold.co/160x160/FFFFFF/002C4E?text=Mark",
    logoWidth: 120
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Primary Logo • Two Lines",
    description: "The primary master lockup positions the logotype — stacked on two lines of text — to the right of the logomark. This configuration emphasizes the full brand name and should be utilized in most standard cases where vertical space permits.",
    logoImageSrc: "https://placehold.co/320x120/FFFFFF/002C4E?text=Logo",
    showDownload: true,
    downloadHref: "#"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "Visual Marks",
    headingItems: ["The Atom", "The Molecule", "The Synergy", "The Compound"],
    title: "The Atom",
    description: "Regular & Extended",
    titleSize: "small",
    logoImageSrc: "https://placehold.co/160x160/FFFFFF/002C4E?text=Mark",
    logoWidth: 120
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "Product Names",
    headingItems: ["Green Vibrance®", "Digestive Vibrance®", "Joint Vibrance®", "Maximum Vibrance®", "Spectrum Vibrance®", "Trilogy®", "U.T. Vibrance®"],
    title: "Primary Logo • One Line • Registered",
    logoImageSrc: "https://placehold.co/375x80/FFFFFF/002C4E?text=Logo",
    logoWidth: 320,
    showDownload: true,
    downloadHref: "#"
  }
}`,...r.parameters?.docs?.source}}};const s=["Default","Download","DefaultWithHeading","DownloadWithHeading"],i=Object.freeze(Object.defineProperty({__proto__:null,Default:e,DefaultWithHeading:t,Download:o,DownloadWithHeading:r,__namedExportsOrder:s,default:n},Symbol.toStringTag,{value:"Module"}));export{i as L};
