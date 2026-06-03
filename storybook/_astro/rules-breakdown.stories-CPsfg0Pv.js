const o=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};o.isAstroComponentFactory=!0;o.moduleId="/Users/diva/dev/cynda/vibranthealth/brand-styleguide/src/components/rules-breakdown/rules-breakdown.astro";const r={title:"Reusable/Rules Breakdown",component:o},e={args:{rules:[{label:"Tone",body:"Warm and confident, never clinical or cold."},{label:"Length",body:"Keep headlines under eight words where possible."},{label:"Voice",body:"Speak to the reader directly using second person."}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    rules: [{
      label: "Tone",
      body: "Warm and confident, never clinical or cold."
    }, {
      label: "Length",
      body: "Keep headlines under eight words where possible."
    }, {
      label: "Voice",
      body: "Speak to the reader directly using second person."
    }]
  }
}`,...e.parameters?.docs?.source}}};const n=["Default"],s=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:n,default:r},Symbol.toStringTag,{value:"Module"}));export{s as R};
