import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./iframe-DhNGfB7i.js";import{n as r,t as i}from"./Divider-cqdWMB8W.js";var a=e({AllColors:()=>f,Dashed:()=>u,Horizontal:()=>c,Vertical:()=>l,__namedExportsOrder:()=>p,default:()=>s}),o,s,c,l,u,d,f,p,m=t((()=>{r(),o=n(),s={title:`Components/Divider`,component:i,parameters:{layout:`centered`},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]},variant:{control:`select`,options:[`solid`,`dashed`]},color:{control:`select`,options:[`default`,`subtle`,`strong`,`brand`]}},args:{orientation:`horizontal`,variant:`solid`,color:`default`},decorators:[e=>(0,o.jsx)(`div`,{className:`h-24 w-64`,children:(0,o.jsx)(e,{})})]},c={},l={args:{orientation:`vertical`},decorators:[e=>(0,o.jsxs)(`div`,{className:`flex h-24 items-center gap-4`,children:[(0,o.jsx)(`span`,{children:`Left`}),(0,o.jsx)(e,{}),(0,o.jsx)(`span`,{children:`Right`})]})]},u={args:{variant:`dashed`}},d=[`default`,`subtle`,`strong`,`brand`],f={render:e=>(0,o.jsx)(`div`,{className:`flex w-64 flex-col gap-4`,children:d.map(t=>(0,o.jsx)(i,{...e,color:t},t))})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  decorators: [Story => <div className="flex h-24 items-center gap-4">
        <span>Left</span>
        <Story />
        <span>Right</span>
      </div>]
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dashed'
  }
}`,...u.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex w-64 flex-col gap-4">
      {COLORS.map(color => <Divider key={color} {...args} color={color} />)}
    </div>
}`,...f.parameters?.docs?.source}}},p=[`Horizontal`,`Vertical`,`Dashed`,`AllColors`]}));m();export{f as AllColors,u as Dashed,c as Horizontal,l as Vertical,p as __namedExportsOrder,s as default,m as n,a as t};