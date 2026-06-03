const t=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};t.isAstroComponentFactory=!0;t.moduleId="/Users/diva/dev/cynda/vibranthealth/brand-styleguide/src/components/secondary-card/secondary-card.astro";const o={title:"Reusable/Secondary Card",component:t},e={args:{title:"Packaging",subhead:"VH New Order",description:'As our primary brand font, VH New Order remains the exclusive choice for all product packaging. It serves as the "anchor" of our physical presence, maintaining the recognizable DNA of the brand on the shelf.'}},a={args:{title:"Written Communication & Marketing",subhead:"Feature Display Family & Poppins",description:"For all art direction outside of packaging—including digital marketing, advertising, and editorial layouts—we move away from VH New Order in favor of a high-contrast pairing:",items:[{label:"Feature Display Family",body:"Used for display text and headlines to provide a sophisticated, editorial feel."},{label:"Poppins",body:"Used for body copy and functional text to ensure maximum legibility and a modern, clean aesthetic."}]}},r={args:{title:"Voice",description:"Who is speaking. Consistent, unique personality.",tags:["Real","Relatable","Trustworthy"]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Packaging",
    subhead: "VH New Order",
    description: 'As our primary brand font, VH New Order remains the exclusive choice for all product packaging. It serves as the "anchor" of our physical presence, maintaining the recognizable DNA of the brand on the shelf.'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Written Communication & Marketing",
    subhead: "Feature Display Family & Poppins",
    description: "For all art direction outside of packaging—including digital marketing, advertising, and editorial layouts—we move away from VH New Order in favor of a high-contrast pairing:",
    items: [{
      label: "Feature Display Family",
      body: "Used for display text and headlines to provide a sophisticated, editorial feel."
    }, {
      label: "Poppins",
      body: "Used for body copy and functional text to ensure maximum legibility and a modern, clean aesthetic."
    }]
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Voice",
    description: "Who is speaking. Consistent, unique personality.",
    tags: ["Real", "Relatable", "Trustworthy"]
  }
}`,...r.parameters?.docs?.source}}};const i=["Default","WithItems","WithTags"],n=Object.freeze(Object.defineProperty({__proto__:null,Default:e,WithItems:a,WithTags:r,__namedExportsOrder:i,default:o},Symbol.toStringTag,{value:"Module"}));export{n as S};
