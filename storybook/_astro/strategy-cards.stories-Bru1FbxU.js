const t=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};t.isAstroComponentFactory=!0;t.moduleId="/Users/diva/dev/cynda/vibranthealth/brand-styleguide/src/components/strategy-cards/strategy-cards.astro";const n={title:"Standalone/Strategy Cards",component:t,parameters:{layout:"fullscreen"}},e={args:{items:[{label:"Headline",heading:"Feel the difference",body:"Lead with the benefit, not the ingredient list.",annotations:[{label:"Benefit-first",notes:["Names the outcome the reader wants."]},{label:"Active voice"}]},{label:"Body copy",body:"Backed by clinical research and decades of formulation.",items:["Credible","Specific","Confident"],annotations:[{label:"Proof point",notes:["Builds trust with evidence."]}]}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Headline",
      heading: "Feel the difference",
      body: "Lead with the benefit, not the ingredient list.",
      annotations: [{
        label: "Benefit-first",
        notes: ["Names the outcome the reader wants."]
      }, {
        label: "Active voice"
      }]
    }, {
      label: "Body copy",
      body: "Backed by clinical research and decades of formulation.",
      items: ["Credible", "Specific", "Confident"],
      annotations: [{
        label: "Proof point",
        notes: ["Builds trust with evidence."]
      }]
    }]
  }
}`,...e.parameters?.docs?.source}}};const o=["Default"],a=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:o,default:n},Symbol.toStringTag,{value:"Module"}));export{a as S};
