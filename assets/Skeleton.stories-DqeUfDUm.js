import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./iframe-Bhpt2FsH.js";import{n as r,t as i}from"./Skeleton-DpfNQbOY.js";var a=e({CardLoading:()=>g,Circular:()=>l,InferredFromChildren:()=>h,MultipleLines:()=>m,NoAnimation:()=>p,Rectangular:()=>u,Rounded:()=>d,Text:()=>c,Wave:()=>f,__namedExportsOrder:()=>_,default:()=>s}),o,s,c,l,u,d,f,p,m,h,g,_,v=t((()=>{r(),o=n(),s={title:`Components/Skeleton`,component:i,parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:[`text`,`circular`,`rectangular`,`rounded`]},animation:{control:`select`,options:[`pulse`,`wave`,`none`]}},args:{variant:`text`,animation:`pulse`,width:280},decorators:[e=>(0,o.jsx)(`div`,{className:`w-72`,children:(0,o.jsx)(e,{})})]},c={},l={args:{variant:`circular`,width:56,height:56}},u={args:{variant:`rectangular`,width:280,height:120}},d={args:{variant:`rounded`,width:280,height:120}},f={args:{variant:`rounded`,height:80,animation:`wave`}},p={name:`No animation`,args:{variant:`rounded`,height:80,animation:`none`}},m={render:e=>(0,o.jsxs)(`div`,{className:`w-90`,children:[(0,o.jsx)(i,{...e,count:3}),(0,o.jsx)(i,{...e,width:`60%`})]})},h={render:()=>(0,o.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,o.jsx)(i,{variant:`circular`,children:(0,o.jsx)(`div`,{className:`size-12`})}),(0,o.jsx)(i,{variant:`text`,children:(0,o.jsx)(`span`,{className:`text-h-xs font-semibold`,children:`The quick brown fox`})})]})},g={render:()=>(0,o.jsxs)(`div`,{className:`flex w-80 flex-col gap-3 rounded-xl border border-border-default p-4`,children:[(0,o.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,o.jsx)(i,{variant:`circular`,width:40,height:40,animation:`wave`}),(0,o.jsxs)(`div`,{className:`flex-1`,children:[(0,o.jsx)(i,{variant:`text`,width:`60%`,animation:`wave`}),(0,o.jsx)(i,{variant:`text`,width:`40%`,animation:`wave`})]})]}),(0,o.jsx)(i,{variant:`rounded`,width:`100%`,height:140,animation:`wave`}),(0,o.jsx)(i,{variant:`text`,count:3,animation:`wave`})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    width: 56,
    height: 56
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: 280,
    height: 120
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'rounded',
    width: 280,
    height: 120
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'rounded',
    height: 80,
    animation: 'wave'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'No animation',
  args: {
    variant: 'rounded',
    height: 80,
    animation: 'none'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-90">
      <Skeleton {...args} count={3} />
      <Skeleton {...args} width="60%" />
    </div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Skeleton variant="circular">
        <div className="size-12" />
      </Skeleton>
      <Skeleton variant="text">
        <span className="text-h-xs font-semibold">The quick brown fox</span>
      </Skeleton>
    </div>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-3 rounded-xl border border-border-default p-4">
      <div className="flex items-center gap-3">
        <Skeleton variant="circular" width={40} height={40} animation="wave" />
        <div className="flex-1">
          <Skeleton variant="text" width="60%" animation="wave" />
          <Skeleton variant="text" width="40%" animation="wave" />
        </div>
      </div>
      <Skeleton variant="rounded" width="100%" height={140} animation="wave" />
      <Skeleton variant="text" count={3} animation="wave" />
    </div>
}`,...g.parameters?.docs?.source}}},_=[`Text`,`Circular`,`Rectangular`,`Rounded`,`Wave`,`NoAnimation`,`MultipleLines`,`InferredFromChildren`,`CardLoading`]}));v();export{g as CardLoading,l as Circular,h as InferredFromChildren,m as MultipleLines,p as NoAnimation,u as Rectangular,d as Rounded,c as Text,f as Wave,_ as __namedExportsOrder,s as default,v as n,a as t};