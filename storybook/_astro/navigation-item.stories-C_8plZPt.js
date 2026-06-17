const n=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};n.isAstroComponentFactory=!0;n.moduleId="/Users/diva/dev/cynda/vibranthealth/brand-styleguide/src/components/navigation-item/navigation-item.astro";const o={title:"Reusable/Navigation/Navigation Item",component:n},e={args:{title:"Brand Identity",href:"/brand-identity"}},t={args:{title:"Colors",href:"/brand-identity/colors",active:!0}},r={args:{title:"Brand Identity",href:"/brand-identity",active:!0,items:[{title:"Logos",href:"/brand-identity/logos"},{title:"Colors",href:"/brand-identity/colors",active:!0},{title:"Typography",href:"/brand-identity/typography"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Brand Identity",
    href: "/brand-identity"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Colors",
    href: "/brand-identity/colors",
    active: true
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Brand Identity",
    href: "/brand-identity",
    active: true,
    items: [{
      title: "Logos",
      href: "/brand-identity/logos"
    }, {
      title: "Colors",
      href: "/brand-identity/colors",
      active: true
    }, {
      title: "Typography",
      href: "/brand-identity/typography"
    }]
  }
}`,...r.parameters?.docs?.source}}};const a=["Default","Active","WithChildren"],i=Object.freeze(Object.defineProperty({__proto__:null,Active:t,Default:e,WithChildren:r,__namedExportsOrder:a,default:o},Symbol.toStringTag,{value:"Module"}));export{i as N};
