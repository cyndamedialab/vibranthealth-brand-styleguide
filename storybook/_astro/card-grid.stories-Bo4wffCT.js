const t=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};t.isAstroComponentFactory=!0;t.moduleId="C:/Users/17327/websites/vibranthealth/brand-styleguide/src/components/card-grid/card-grid.stories-fixture.astro";const n={title:"Reusable/Card Grid",component:t,parameters:{layout:"fullscreen"}},r={args:{variant:"primary",columns:3}},a={args:{variant:"primary",columns:2}},e={args:{variant:"secondary",columns:3}},s={args:{variant:"dodont",columns:2}},o={args:{variant:"attribute",columns:3}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    columns: 3
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    columns: 2
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    columns: 3
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "dodont",
    columns: 2
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "attribute",
    columns: 3
  }
}`,...o.parameters?.docs?.source}}};const c=["WithPrimaryCards","TwoColumns","WithSecondaryCards","WithDoDontCards","WithAttributeCards"],i=Object.freeze(Object.defineProperty({__proto__:null,TwoColumns:a,WithAttributeCards:o,WithDoDontCards:s,WithPrimaryCards:r,WithSecondaryCards:e,__namedExportsOrder:c,default:n},Symbol.toStringTag,{value:"Module"}));export{i as C};
