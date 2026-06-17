const l=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};l.isAstroComponentFactory=!0;l.moduleId="/Users/diva/dev/cynda/vibranthealth/brand-styleguide/src/components/typeface-family-panel/typeface-family-panel.astro";const t={title:"Reusable/Typeface Family Panel",component:l,parameters:{layout:"fullscreen"}},e={args:{name:"Inter",subtitle:"Design system typeface",note:"Use for product UI, body copy, and labels.",fontStack:"'Inter', sans-serif",weights:[{label:"Regular",value:400},{label:"Medium",value:500},{label:"SemiBold",value:600},{label:"Bold",value:700}],downloadHref:"#"}},a={args:{name:"Poppins",subtitle:"Feature display typeface",note:"Use for packaging headlines and feature callouts.",fontStack:"'Poppins', sans-serif",italic:!1,weights:[{label:"Light",value:300},{label:"Regular",value:400},{label:"Medium",value:500},{label:"SemiBold",value:600},{label:"Bold",value:700}],downloadHref:"#"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Poppins",
    subtitle: "Feature display typeface",
    note: "Use for packaging headlines and feature callouts.",
    fontStack: "'Poppins', sans-serif",
    italic: false,
    weights: [{
      label: "Light",
      value: 300
    }, {
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
}`,...a.parameters?.docs?.source}}};const o=["Default","UprightOnly"],s=Object.freeze(Object.defineProperty({__proto__:null,Default:e,UprightOnly:a,__namedExportsOrder:o,default:t},Symbol.toStringTag,{value:"Module"}));export{s as T};
