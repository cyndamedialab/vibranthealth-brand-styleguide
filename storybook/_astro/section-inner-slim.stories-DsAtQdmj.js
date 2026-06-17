const o=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};o.isAstroComponentFactory=!0;o.moduleId="/Users/diva/dev/cynda/vibranthealth/brand-styleguide/src/components/section-inner-slim/section-inner-slim.astro";const r={title:"Reusable/Section Inner Slim",component:o,parameters:{layout:"fullscreen"}},e={args:{title:"Iconography",subtitle:"A consistent set of line icons across the product.",slots:{default:"<p>Inner content goes here.</p>"}}},t={args:{slots:{default:"<p>Inner content without a header.</p>"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Iconography",
    subtitle: "A consistent set of line icons across the product.",
    slots: {
      default: "<p>Inner content goes here.</p>"
    }
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    slots: {
      default: "<p>Inner content without a header.</p>"
    }
  }
}`,...t.parameters?.docs?.source}}};const n=["Default","NoHeader"],s=Object.freeze(Object.defineProperty({__proto__:null,Default:e,NoHeader:t,__namedExportsOrder:n,default:r},Symbol.toStringTag,{value:"Module"}));export{s as S};
