const n=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};n.isAstroComponentFactory=!0;n.moduleId="C:/Users/17327/websites/vibranthealth/brand-styleguide/src/components/color-swatch/color-swatch.astro";const o={title:"Reusable/Color Swatch",component:n},e={args:{name:"Green Vibrance",swatch:"#025F1D"}},r={args:{name:"Green Vibrance",swatch:"#025F1D",pantone:"2427 C",specs:[{label:"HEX",value:"#025F1D"},{label:"RGB",value:"2, 95, 29"},{label:"CMYK",value:"81 0 100 54"}]}},a={args:{name:"White",swatch:"#FFFFFF",bordered:!0,pantone:["Cool Gray 1 C"]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Green Vibrance",
    swatch: "#025F1D"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Green Vibrance",
    swatch: "#025F1D",
    pantone: "2427 C",
    specs: [{
      label: "HEX",
      value: "#025F1D"
    }, {
      label: "RGB",
      value: "2, 95, 29"
    }, {
      label: "CMYK",
      value: "81 0 100 54"
    }]
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    name: "White",
    swatch: "#FFFFFF",
    bordered: true,
    pantone: ["Cool Gray 1 C"]
  }
}`,...a.parameters?.docs?.source}}};const s=["Default","WithSpecs","Bordered"],t=Object.freeze(Object.defineProperty({__proto__:null,Bordered:a,Default:e,WithSpecs:r,__namedExportsOrder:s,default:o},Symbol.toStringTag,{value:"Module"}));export{t as C};
