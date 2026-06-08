const r=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};r.isAstroComponentFactory=!0;r.moduleId="C:/Users/17327/websites/vibranthealth/brand-styleguide/src/components/section/section.astro";const s={title:"Reusable/Section",component:r,parameters:{layout:"fullscreen"}},e={args:{title:"Primary Palette",description:"The core colors that anchor the Vibrant Health brand.",slots:{default:"<p>Section content goes here.</p>"}}},t={args:{title:"Typography",description:["Type is one of the most expressive parts of the system.","Use these families and scales consistently across every surface."],slots:{default:"<p>Section content goes here.</p>"}}},o={args:{title:"Spacing & Radius",noDivider:!0,noBorderTop:!0,slots:{default:"<p>Section content goes here.</p>"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Primary Palette",
    description: "The core colors that anchor the Vibrant Health brand.",
    slots: {
      default: "<p>Section content goes here.</p>"
    }
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Typography",
    description: ["Type is one of the most expressive parts of the system.", "Use these families and scales consistently across every surface."],
    slots: {
      default: "<p>Section content goes here.</p>"
    }
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Spacing & Radius",
    noDivider: true,
    noBorderTop: true,
    slots: {
      default: "<p>Section content goes here.</p>"
    }
  }
}`,...o.parameters?.docs?.source}}};const n=["Default","MultiLineDescription","NoDivider"],a=Object.freeze(Object.defineProperty({__proto__:null,Default:e,MultiLineDescription:t,NoDivider:o,__namedExportsOrder:n,default:s},Symbol.toStringTag,{value:"Module"}));export{a as S};
