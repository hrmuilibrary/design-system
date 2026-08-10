import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./iframe-04k_LSg4.js";import{n as r,t as i}from"./Card-CybgrIkA.js";var a=e({AllPaddings:()=>v,AllVariants:()=>_,CustomClassName:()=>m,Elevated:()=>l,Filled:()=>u,Interactive:()=>d,NoPadding:()=>p,Outlined:()=>c,WithHeaderAndFooter:()=>f,__namedExportsOrder:()=>y,default:()=>s}),o,s,c,l,u,d,f,p,m,h,g,_,v,y,b=t((()=>{r(),o=n(),s={title:`Components/Card`,component:i,parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:[`elevated`,`outlined`,`filled`]},padding:{control:`select`,options:[`none`,`sm`,`md`,`lg`]}},args:{variant:`outlined`,padding:`md`,interactive:!1,children:(0,o.jsx)(`p`,{className:`text-p-md text-fg-default`,children:`This is the card body content.`})},render:e=>(0,o.jsx)(`div`,{className:`w-80`,children:(0,o.jsx)(i,{...e})})},c={},l={args:{variant:`elevated`}},u={args:{variant:`filled`}},d={args:{interactive:!0}},f={args:{header:(0,o.jsx)(`h3`,{className:`text-h-xl text-fg-default`,children:`Card title`}),footer:(0,o.jsx)(`p`,{className:`text-label-md text-fg-secondary`,children:`Last updated 2 days ago`})}},p={args:{padding:`none`,children:(0,o.jsx)(`img`,{src:`https://placehold.co/320x160`,alt:``,className:`block w-full`})}},m={name:`Overriding classes via className`,args:{className:`border-brand-500 rounded-2xl`}},h=[`elevated`,`outlined`,`filled`],g=[`none`,`sm`,`md`,`lg`],_={render:e=>(0,o.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:h.map(t=>(0,o.jsx)(`div`,{className:`w-56`,children:(0,o.jsx)(i,{...e,variant:t,children:(0,o.jsx)(`p`,{className:`text-p-md text-fg-default capitalize`,children:t})})},t))})},v={render:e=>(0,o.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:g.map(t=>(0,o.jsx)(`div`,{className:`w-56`,children:(0,o.jsx)(i,{...e,padding:t,children:(0,o.jsx)(`p`,{className:`text-p-md text-fg-default capitalize`,children:t})})},t))})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'elevated'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'filled'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    interactive: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    header: <h3 className="text-h-xl text-fg-default">Card title</h3>,
    footer: <p className="text-label-md text-fg-secondary">Last updated 2 days ago</p>
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'none',
    children: <img src="https://placehold.co/320x160" alt="" className="block w-full" />
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'border-brand-500 rounded-2xl'
  }
}`,...m.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4">
      {VARIANTS.map(variant => <div key={variant} className="w-56">
          <Card {...args} variant={variant}>
            <p className="text-p-md text-fg-default capitalize">{variant}</p>
          </Card>
        </div>)}
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4">
      {PADDINGS.map(padding => <div key={padding} className="w-56">
          <Card {...args} padding={padding}>
            <p className="text-p-md text-fg-default capitalize">{padding}</p>
          </Card>
        </div>)}
    </div>
}`,...v.parameters?.docs?.source}}},y=[`Outlined`,`Elevated`,`Filled`,`Interactive`,`WithHeaderAndFooter`,`NoPadding`,`CustomClassName`,`AllVariants`,`AllPaddings`]}));b();export{v as AllPaddings,_ as AllVariants,m as CustomClassName,l as Elevated,u as Filled,d as Interactive,p as NoPadding,c as Outlined,f as WithHeaderAndFooter,y as __namedExportsOrder,s as default,b as n,a as t};