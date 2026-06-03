const r=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};r.isAstroComponentFactory=!0;r.moduleId="/Users/diva/dev/cynda/vibranthealth/brand-styleguide/src/components/strategy-rules-section/strategy-rules-section.astro";const o={title:"Standalone/Strategy Rules Section",component:r,parameters:{layout:"fullscreen"}},e={args:{title:"Copy rules",description:"Principles that keep our marketing voice consistent.",rules:[{label:"Tone",body:"Warm and confident, never clinical or cold."},{label:"Length",body:"Keep headlines under eight words where possible."},{label:"Voice",body:"Speak to the reader directly using second person."}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Copy rules",
    description: "Principles that keep our marketing voice consistent.",
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
}`,...e.parameters?.docs?.source}}};const t=["Default"],n=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:t,default:o},Symbol.toStringTag,{value:"Module"}));export{n as S};
