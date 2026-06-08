const i=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};i.isAstroComponentFactory=!0;i.moduleId="C:/Users/17327/websites/vibranthealth/brand-styleguide/src/components/secondary-card/secondary-card.astro";const n={title:"Reusable/Secondary Card",component:i},e={args:{title:"Packaging",subhead:"VH New Order",description:'As our primary brand font, VH New Order remains the exclusive choice for all product packaging. It serves as the "anchor" of our physical presence, maintaining the recognizable DNA of the brand on the shelf.'}},t={args:{title:"Written Communication & Marketing",subhead:"Feature Display Family & Poppins",description:"For all art direction outside of packaging—including digital marketing, advertising, and editorial layouts—we move away from VH New Order in favor of a high-contrast pairing:",items:[{label:"Feature Display Family",body:"Used for display text and headlines to provide a sophisticated, editorial feel."},{label:"Poppins",body:"Used for body copy and functional text to ensure maximum legibility and a modern, clean aesthetic."}]}},r={args:{eyebrow:"Brand Identity",title:"Typography System",subhead:"Test",description:"Our type system balances clarity and character across all touchpoints, from packaging to digital environments."}},a={args:{title:"Voice",description:"Who is speaking. Consistent, unique personality.",tags:["Real","Relatable","Trustworthy"]}},s={args:{description:"Special topic posts should feel timely, celebratory, and distinct — whether marking a holiday, campaign, or cultural moment. Use motion, texture, or festive accents to add freshness while maintaining the brand's refined tone."}},o={args:{title:"Example Topics",items:[{body:"Product spotlight with benefit highlights"},{body:"Behind-the-scenes stories (sourcing ingredients, supplier stories)"},{body:"Customer stories or testimonials"},{body:'"Vibrant Truth" transparency messages'}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Packaging",
    subhead: "VH New Order",
    description: 'As our primary brand font, VH New Order remains the exclusive choice for all product packaging. It serves as the "anchor" of our physical presence, maintaining the recognizable DNA of the brand on the shelf.'
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    eyebrow: "Brand Identity",
    title: "Typography System",
    subhead: "Test",
    description: "Our type system balances clarity and character across all touchpoints, from packaging to digital environments."
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Voice",
    description: "Who is speaking. Consistent, unique personality.",
    tags: ["Real", "Relatable", "Trustworthy"]
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    description: "Special topic posts should feel timely, celebratory, and distinct — whether marking a holiday, campaign, or cultural moment. Use motion, texture, or festive accents to add freshness while maintaining the brand's refined tone."
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Example Topics",
    items: [{
      body: "Product spotlight with benefit highlights"
    }, {
      body: "Behind-the-scenes stories (sourcing ingredients, supplier stories)"
    }, {
      body: "Customer stories or testimonials"
    }, {
      body: '"Vibrant Truth" transparency messages'
    }]
  }
}`,...o.parameters?.docs?.source}}};const c=["Default","WithItems","WithEyebrow","WithTags","NoHeader","BulletItems"],d=Object.freeze(Object.defineProperty({__proto__:null,BulletItems:o,Default:e,NoHeader:s,WithEyebrow:r,WithItems:t,WithTags:a,__namedExportsOrder:c,default:n},Symbol.toStringTag,{value:"Module"}));export{d as S};
