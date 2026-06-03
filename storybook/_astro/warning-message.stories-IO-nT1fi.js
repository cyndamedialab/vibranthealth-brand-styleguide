const o=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};o.isAstroComponentFactory=!0;o.moduleId="/Users/diva/dev/cynda/vibranthealth/brand-styleguide/src/components/warning-message/warning-message.astro";const r={title:"Standalone/Warning Message",component:o},e={args:{title:"Licensing note",body:"Photography in this section is for internal reference only."}},t={args:{title:"Avoid",body:["Never apply filters that shift skin tones.","Don't crop subjects at the joints."],avoid:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Licensing note",
    body: "Photography in this section is for internal reference only."
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Avoid",
    body: ["Never apply filters that shift skin tones.", "Don't crop subjects at the joints."],
    avoid: true
  }
}`,...t.parameters?.docs?.source}}};const s=["Default","Avoid"],n=Object.freeze(Object.defineProperty({__proto__:null,Avoid:t,Default:e,__namedExportsOrder:s,default:r},Symbol.toStringTag,{value:"Module"}));export{n as W};
