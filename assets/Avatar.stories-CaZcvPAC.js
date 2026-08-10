import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./iframe-04k_LSg4.js";import{it as r,t as i}from"./lucide-react-BwflW6FD.js";import{n as a,r as o,t as s}from"./Avatar-BwKxWMGc.js";var c=e({AllSizes:()=>x,AllStatuses:()=>y,BrokenImageFallsBackToInitials:()=>p,CustomClassName:()=>S,CustomFallback:()=>h,Group:()=>C,GroupSizes:()=>T,GroupWithMax:()=>w,IconFallback:()=>m,Square:()=>g,WithImage:()=>d,WithInitials:()=>f,WithStatus:()=>_,__namedExportsOrder:()=>E,default:()=>u}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D=t((()=>{i(),o(),l=n(),u={title:`Components/Avatar`,component:s,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`]},status:{control:`select`,options:[void 0,`online`,`offline`,`away`,`busy`]},shape:{control:`select`,options:[`circle`,`square`]}},args:{name:`Ada Lovelace`,size:`md`,shape:`circle`}},d={args:{src:`https://i.pravatar.cc/150?img=12`,alt:`Ada Lovelace`}},f={args:{name:`Ada Lovelace`}},p={name:`Broken image falls back to initials`,args:{src:`https://example.invalid/broken.jpg`,name:`Grace Hopper`}},m={args:{name:void 0}},h={args:{name:void 0,fallback:(0,l.jsx)(r,{className:`h-1/2 w-1/2 text-white/90`})}},g={args:{shape:`square`,name:`Ada Lovelace`}},_={name:`Status - online`,args:{status:`online`}},v=[`online`,`offline`,`away`,`busy`],y={render:e=>(0,l.jsx)(`div`,{className:`flex flex-wrap items-center gap-4`,children:v.map(t=>(0,l.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,l.jsx)(s,{...e,status:t}),(0,l.jsx)(`span`,{className:`text-p-sm text-fg-secondary`,children:t})]},t))})},b=[`xs`,`sm`,`md`,`lg`,`xl`,`2xl`],x={render:e=>(0,l.jsx)(`div`,{className:`flex flex-wrap items-end gap-4`,children:b.map(t=>(0,l.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,l.jsx)(s,{...e,size:t,status:`online`}),(0,l.jsx)(`span`,{className:`text-p-sm text-fg-secondary`,children:t})]},t))})},S={name:`Overriding classes via className`,args:{name:`Ada Lovelace`,className:`ring-2 ring-brand-500 ring-offset-2 rounded-full`}},C={render:()=>(0,l.jsxs)(a,{size:`md`,children:[(0,l.jsx)(s,{name:`Ada Lovelace`}),(0,l.jsx)(s,{name:`Grace Hopper`}),(0,l.jsx)(s,{src:`https://i.pravatar.cc/150?img=12`,alt:`Alan Turing`}),(0,l.jsx)(s,{name:`Katherine Johnson`}),(0,l.jsx)(s,{name:`Margaret Hamilton`})]})},w={name:`AvatarGroup with max + overflow count`,render:()=>(0,l.jsxs)(a,{size:`md`,max:3,children:[(0,l.jsx)(s,{name:`Ada Lovelace`}),(0,l.jsx)(s,{name:`Grace Hopper`}),(0,l.jsx)(s,{src:`https://i.pravatar.cc/150?img=12`,alt:`Alan Turing`}),(0,l.jsx)(s,{name:`Katherine Johnson`}),(0,l.jsx)(s,{name:`Margaret Hamilton`})]})},T={name:`AvatarGroup across sizes`,render:()=>(0,l.jsx)(`div`,{className:`flex flex-col gap-4`,children:b.map(e=>(0,l.jsxs)(a,{size:e,max:4,children:[(0,l.jsx)(s,{name:`Ada Lovelace`}),(0,l.jsx)(s,{name:`Grace Hopper`}),(0,l.jsx)(s,{name:`Katherine Johnson`}),(0,l.jsx)(s,{name:`Margaret Hamilton`}),(0,l.jsx)(s,{name:`Hedy Lamarr`})]},e))})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=12',
    alt: 'Ada Lovelace'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Ada Lovelace'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Broken image falls back to initials',
  args: {
    src: 'https://example.invalid/broken.jpg',
    name: 'Grace Hopper'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: undefined
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    name: undefined,
    fallback: <Ghost className="h-1/2 w-1/2 text-white/90" />
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    shape: 'square',
    name: 'Ada Lovelace'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'Status - online',
  args: {
    status: 'online'
  }
}`,..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap items-center gap-4">
      {STATUSES.map(status => <div key={status} className="flex flex-col items-center gap-2">
          <Avatar {...args} status={status} />
          <span className="text-p-sm text-fg-secondary">{status}</span>
        </div>)}
    </div>
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap items-end gap-4">
      {SIZES.map(size => <div key={size} className="flex flex-col items-center gap-2">
          <Avatar {...args} size={size} status="online" />
          <span className="text-p-sm text-fg-secondary">{size}</span>
        </div>)}
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    name: 'Ada Lovelace',
    className: 'ring-2 ring-brand-500 ring-offset-2 rounded-full'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup size="md">
      <Avatar name="Ada Lovelace" />
      <Avatar name="Grace Hopper" />
      <Avatar src="https://i.pravatar.cc/150?img=12" alt="Alan Turing" />
      <Avatar name="Katherine Johnson" />
      <Avatar name="Margaret Hamilton" />
    </AvatarGroup>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'AvatarGroup with max + overflow count',
  render: () => <AvatarGroup size="md" max={3}>
      <Avatar name="Ada Lovelace" />
      <Avatar name="Grace Hopper" />
      <Avatar src="https://i.pravatar.cc/150?img=12" alt="Alan Turing" />
      <Avatar name="Katherine Johnson" />
      <Avatar name="Margaret Hamilton" />
    </AvatarGroup>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'AvatarGroup across sizes',
  render: () => <div className="flex flex-col gap-4">
      {SIZES.map(size => <AvatarGroup key={size} size={size} max={4}>
          <Avatar name="Ada Lovelace" />
          <Avatar name="Grace Hopper" />
          <Avatar name="Katherine Johnson" />
          <Avatar name="Margaret Hamilton" />
          <Avatar name="Hedy Lamarr" />
        </AvatarGroup>)}
    </div>
}`,...T.parameters?.docs?.source}}},E=[`WithImage`,`WithInitials`,`BrokenImageFallsBackToInitials`,`IconFallback`,`CustomFallback`,`Square`,`WithStatus`,`AllStatuses`,`AllSizes`,`CustomClassName`,`Group`,`GroupWithMax`,`GroupSizes`]}));D();export{x as AllSizes,y as AllStatuses,p as BrokenImageFallsBackToInitials,S as CustomClassName,h as CustomFallback,C as Group,T as GroupSizes,w as GroupWithMax,m as IconFallback,g as Square,d as WithImage,f as WithInitials,_ as WithStatus,E as __namedExportsOrder,u as default,D as n,c as t};