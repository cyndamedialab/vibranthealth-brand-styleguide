const r=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};r.isAstroComponentFactory=!0;r.moduleId="/Users/diva/dev/cynda/vibranthealth/brand-styleguide/src/components/do-dont/do-dont.astro";const t={title:"Reusable/Do Dont",component:r},e={args:{variant:"do",items:["Use the wordmark on approved background colors.","Maintain clear space around the logo.","Pair headlines with generous line height."]}},o={args:{variant:"dont",items:["Don't stretch or distort the logo.","Don't place the wordmark on busy imagery.","Don't recolor the mark outside the palette."]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "do",
    items: ["Use the wordmark on approved background colors.", "Maintain clear space around the logo.", "Pair headlines with generous line height."]
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "dont",
    items: ["Don't stretch or distort the logo.", "Don't place the wordmark on busy imagery.", "Don't recolor the mark outside the palette."]
  }
}`,...o.parameters?.docs?.source}}};const a=["Do","Dont"],n=Object.freeze(Object.defineProperty({__proto__:null,Do:e,Dont:o,__namedExportsOrder:a,default:t},Symbol.toStringTag,{value:"Module"}));export{n as D};
