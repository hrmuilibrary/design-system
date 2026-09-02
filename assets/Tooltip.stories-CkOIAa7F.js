import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./iframe-DhNGfB7i.js";import{t as r}from"./Button-CvyVeca1.js";import{t as i}from"./Button-BkgptpcF.js";import{n as a,t as o}from"./Tooltip-CtVu0vxt.js";var s=e({AllSides:()=>v,Bottom:()=>f,CustomClassName:()=>g,LargeSize:()=>h,Left:()=>p,Primary:()=>u,Right:()=>m,Top:()=>d,__namedExportsOrder:()=>y,default:()=>l}),c,l,u,d,f,p,m,h,g,_,v,y,b=t((()=>{i(),a(),c=n(),l={title:`Components/Tooltip`,component:o,parameters:{layout:`centered`},argTypes:{side:{control:`select`,options:[`top`,`bottom`,`left`,`right`]},size:{control:`select`,options:[`lg`,`sm`]},delay:{control:`number`}},args:{content:`Tooltip content`,side:`top`,size:`sm`,delay:150}},u={render:e=>(0,c.jsx)(o,{...e,children:(0,c.jsx)(r,{children:`Hover me`})})},d={args:{side:`top`},render:e=>(0,c.jsx)(o,{...e,children:(0,c.jsx)(r,{children:`Top`})})},f={args:{side:`bottom`},render:e=>(0,c.jsx)(o,{...e,children:(0,c.jsx)(r,{children:`Bottom`})})},p={args:{side:`left`},render:e=>(0,c.jsx)(o,{...e,children:(0,c.jsx)(r,{children:`Left`})})},m={args:{side:`right`},render:e=>(0,c.jsx)(o,{...e,children:(0,c.jsx)(r,{children:`Right`})})},h={args:{size:`lg`,content:`A larger tooltip bubble`},render:e=>(0,c.jsx)(o,{...e,children:(0,c.jsx)(r,{children:`Large tooltip`})})},g={name:`Overriding classes via className`,args:{className:`bg-brand-500 text-white`,content:`Branded tooltip`},render:e=>(0,c.jsx)(o,{...e,children:(0,c.jsx)(r,{children:`Hover me`})})},_=[`top`,`bottom`,`left`,`right`],v={render:e=>(0,c.jsx)(`div`,{className:`flex flex-wrap items-center gap-12 p-12`,children:_.map(t=>(0,c.jsx)(o,{...e,side:t,children:(0,c.jsx)(r,{children:t})},t))})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'top'
  },
  render: args => <Tooltip {...args}>
      <Button>Top</Button>
    </Tooltip>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'bottom'
  },
  render: args => <Tooltip {...args}>
      <Button>Bottom</Button>
    </Tooltip>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'left'
  },
  render: args => <Tooltip {...args}>
      <Button>Left</Button>
    </Tooltip>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'right'
  },
  render: args => <Tooltip {...args}>
      <Button>Right</Button>
    </Tooltip>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    content: 'A larger tooltip bubble'
  },
  render: args => <Tooltip {...args}>
      <Button>Large tooltip</Button>
    </Tooltip>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'bg-brand-500 text-white',
    content: 'Branded tooltip'
  },
  render: args => <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap items-center gap-12 p-12">
      {SIDES.map(side => <Tooltip key={side} {...args} side={side}>
          <Button>{side}</Button>
        </Tooltip>)}
    </div>
}`,...v.parameters?.docs?.source}}},y=[`Primary`,`Top`,`Bottom`,`Left`,`Right`,`LargeSize`,`CustomClassName`,`AllSides`]}));b();export{v as AllSides,f as Bottom,g as CustomClassName,h as LargeSize,p as Left,u as Primary,m as Right,d as Top,y as __namedExportsOrder,l as default,b as n,s as t};