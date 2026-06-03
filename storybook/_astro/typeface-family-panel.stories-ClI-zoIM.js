const a=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};a.isAstroComponentFactory=!0;a.moduleId="/Users/diva/dev/cynda/vibranthealth/brand-styleguide/src/components/typeface-family-panel/typeface-family-panel.astro";const t={title:"Standalone/Typeface Family Panel",component:a,parameters:{layout:"fullscreen"}},e={args:{name:"Inter",subtitle:"Design system typeface",note:"Use for product UI, body copy, and labels.",fontStack:"'Inter', sans-serif",weights:[{label:"Regular",value:400},{label:"Medium",value:500},{label:"SemiBold",value:600},{label:"Bold",value:700}],downloadHref:"#"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Inter",
    subtitle: "Design system typeface",
    note: "Use for product UI, body copy, and labels.",
    fontStack: "'Inter', sans-serif",
    weights: [{
      label: "Regular",
      value: 400
    }, {
      label: "Medium",
      value: 500
    }, {
      label: "SemiBold",
      value: 600
    }, {
      label: "Bold",
      value: 700
    }],
    downloadHref: "#"
  }
}`,...e.parameters?.docs?.source}}};const o=["Default"],l=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:o,default:t},Symbol.toStringTag,{value:"Module"}));export{l as T};
