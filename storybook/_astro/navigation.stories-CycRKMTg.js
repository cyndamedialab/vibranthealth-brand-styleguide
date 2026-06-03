const t=()=>{throw new Error("Astro components are rendered server-side by Storybook.")};t.isAstroComponentFactory=!0;t.moduleId="/Users/diva/dev/cynda/vibranthealth/brand-styleguide/src/components/navigation/navigation.astro";const n={title:"Reusable/Navigation",component:t,parameters:{layout:"fullscreen"}},e={args:{label:"Style Guide",sections:[{title:"Overview",href:"/",active:!0},{title:"Brand Identity",href:"/brand-identity",children:[{title:"Logos",href:"/brand-identity/logos"},{title:"Colors",href:"/brand-identity/colors",active:!0},{title:"Typography",href:"/brand-identity/typography"}]},{title:"Web",href:"/web",children:[{title:"Colors",href:"/web/colors"},{title:"Components",href:"/web/components"}]},{title:"Marketing",href:"/marketing"},{title:"Packaging",href:"/packaging"}]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Style Guide",
    sections: [{
      title: "Overview",
      href: "/",
      active: true
    }, {
      title: "Brand Identity",
      href: "/brand-identity",
      children: [{
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
    }, {
      title: "Web",
      href: "/web",
      children: [{
        title: "Colors",
        href: "/web/colors"
      }, {
        title: "Components",
        href: "/web/components"
      }]
    }, {
      title: "Marketing",
      href: "/marketing"
    }, {
      title: "Packaging",
      href: "/packaging"
    }]
  }
}`,...e.parameters?.docs?.source}}};const r=["Default"],o=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:r,default:n},Symbol.toStringTag,{value:"Module"}));export{o as N};
