import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-SjvhwSre.js";import{t as a,ut as o}from"./lucide-react-DaByuVPb.js";import{n as s,r as c,t as l}from"./Avatar-Co3D73wx.js";var u=e({AllSizes:()=>w,AllStatuses:()=>S,BrokenImageFallsBackToInitials:()=>g,CustomClassName:()=>T,CustomFallback:()=>v,Editable:()=>E,EditableRejected:()=>D,Group:()=>O,GroupSizes:()=>A,GroupWithMax:()=>k,IconFallback:()=>_,Square:()=>y,WithImage:()=>m,WithInitials:()=>h,WithStatus:()=>b,__namedExportsOrder:()=>j,default:()=>p}),d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=t((()=>{a(),d=n(r(),1),c(),f=i(),p={title:`Components/Avatar`,component:l,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`2xs`,`xs`,`sm`,`md`,`lg`,`xl`,`2xl`]},status:{control:`select`,options:[void 0,`online`,`offline`,`away`,`busy`]},shape:{control:`select`,options:[`circle`,`square`]}},args:{name:`Ada Lovelace`,size:`md`,shape:`circle`}},m={args:{src:`https://i.pravatar.cc/150?img=12`,alt:`Ada Lovelace`}},h={args:{name:`Ada Lovelace`}},g={name:`Broken image falls back to initials`,args:{src:`https://example.invalid/broken.jpg`,name:`Grace Hopper`}},_={args:{name:void 0}},v={args:{name:void 0,fallback:(0,f.jsx)(o,{className:`h-1/2 w-1/2 text-white/90`})}},y={args:{shape:`square`,name:`Ada Lovelace`}},b={name:`Status - online`,args:{status:`online`}},x=[`online`,`offline`,`away`,`busy`],S={render:e=>(0,f.jsx)(`div`,{className:`flex flex-wrap items-center gap-4`,children:x.map(t=>(0,f.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,f.jsx)(l,{...e,status:t}),(0,f.jsx)(`span`,{className:`text-p-sm text-fg-secondary`,children:t})]},t))})},C=[`2xs`,`xs`,`sm`,`md`,`lg`,`xl`,`2xl`],w={render:e=>(0,f.jsx)(`div`,{className:`flex flex-wrap items-end gap-4`,children:C.map(t=>(0,f.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,f.jsx)(l,{...e,size:t,status:`online`}),(0,f.jsx)(`span`,{className:`text-p-sm text-fg-secondary`,children:t})]},t))})},T={name:`Overriding classes via className`,args:{name:`Ada Lovelace`,className:`ring-2 ring-brand-500 ring-offset-2 rounded-full`}},E={name:`Editable (upload overlay)`,render:()=>(0,f.jsx)(`div`,{className:`flex items-end gap-4`,children:[`2xs`,`xs`,`md`,`2xl`].map(e=>(0,f.jsx)(l,{size:e,name:`Ada Lovelace`,editable:!0,onImageChange:e=>window.alert(`Picked: ${e.name}`)},e))})},D={name:`Editable — oversized file rejected`,render:()=>{function e(){let[e,t]=(0,d.useState)(null);return(0,f.jsxs)(`div`,{className:`flex flex-col items-start gap-2`,children:[(0,f.jsx)(l,{name:`Ada Lovelace`,editable:!0,maxSizeMB:1,onReject:e=>t(`Rejected "${e.file.name}" (${e.reason})`)}),e&&(0,f.jsx)(`p`,{className:`text-p-sm text-red-700`,children:e})]})}return(0,f.jsx)(e,{})}},O={render:()=>(0,f.jsxs)(s,{size:`md`,children:[(0,f.jsx)(l,{name:`Ada Lovelace`}),(0,f.jsx)(l,{name:`Grace Hopper`}),(0,f.jsx)(l,{src:`https://i.pravatar.cc/150?img=12`,alt:`Alan Turing`}),(0,f.jsx)(l,{name:`Katherine Johnson`}),(0,f.jsx)(l,{name:`Margaret Hamilton`})]})},k={name:`AvatarGroup with max + overflow count`,render:()=>(0,f.jsxs)(s,{size:`md`,max:3,children:[(0,f.jsx)(l,{name:`Ada Lovelace`}),(0,f.jsx)(l,{name:`Grace Hopper`}),(0,f.jsx)(l,{src:`https://i.pravatar.cc/150?img=12`,alt:`Alan Turing`}),(0,f.jsx)(l,{name:`Katherine Johnson`}),(0,f.jsx)(l,{name:`Margaret Hamilton`})]})},A={name:`AvatarGroup across sizes`,render:()=>(0,f.jsx)(`div`,{className:`flex flex-col gap-4`,children:C.map(e=>(0,f.jsxs)(s,{size:e,max:4,children:[(0,f.jsx)(l,{name:`Ada Lovelace`}),(0,f.jsx)(l,{name:`Grace Hopper`}),(0,f.jsx)(l,{name:`Katherine Johnson`}),(0,f.jsx)(l,{name:`Margaret Hamilton`}),(0,f.jsx)(l,{name:`Hedy Lamarr`})]},e))})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=12',
    alt: 'Ada Lovelace'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Ada Lovelace'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Broken image falls back to initials',
  args: {
    src: 'https://example.invalid/broken.jpg',
    name: 'Grace Hopper'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    name: undefined
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    name: undefined,
    fallback: <Ghost className="h-1/2 w-1/2 text-white/90" />
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    shape: 'square',
    name: 'Ada Lovelace'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Status - online',
  args: {
    status: 'online'
  }
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap items-center gap-4">
      {STATUSES.map(status => <div key={status} className="flex flex-col items-center gap-2">
          <Avatar {...args} status={status} />
          <span className="text-p-sm text-fg-secondary">{status}</span>
        </div>)}
    </div>
}`,...S.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap items-end gap-4">
      {SIZES.map(size => <div key={size} className="flex flex-col items-center gap-2">
          <Avatar {...args} size={size} status="online" />
          <span className="text-p-sm text-fg-secondary">{size}</span>
        </div>)}
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    name: 'Ada Lovelace',
    className: 'ring-2 ring-brand-500 ring-offset-2 rounded-full'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Editable (upload overlay)',
  render: () => <div className="flex items-end gap-4">
      {(['2xs', 'xs', 'md', '2xl'] as const).map(s => <Avatar key={s} size={s} name="Ada Lovelace" editable onImageChange={file => window.alert(\`Picked: \${file.name}\`)} />)}
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Editable — oversized file rejected',
  render: () => {
    function EditableRejectedDemo() {
      const [rejection, setRejection] = useState<string | null>(null);
      return <div className="flex flex-col items-start gap-2">
          <Avatar name="Ada Lovelace" editable maxSizeMB={1} onReject={r => setRejection(\`Rejected "\${r.file.name}" (\${r.reason})\`)} />
          {rejection && <p className="text-p-sm text-red-700">{rejection}</p>}
        </div>;
    }
    return <EditableRejectedDemo />;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup size="md">
      <Avatar name="Ada Lovelace" />
      <Avatar name="Grace Hopper" />
      <Avatar src="https://i.pravatar.cc/150?img=12" alt="Alan Turing" />
      <Avatar name="Katherine Johnson" />
      <Avatar name="Margaret Hamilton" />
    </AvatarGroup>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'AvatarGroup with max + overflow count',
  render: () => <AvatarGroup size="md" max={3}>
      <Avatar name="Ada Lovelace" />
      <Avatar name="Grace Hopper" />
      <Avatar src="https://i.pravatar.cc/150?img=12" alt="Alan Turing" />
      <Avatar name="Katherine Johnson" />
      <Avatar name="Margaret Hamilton" />
    </AvatarGroup>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`WithImage`,`WithInitials`,`BrokenImageFallsBackToInitials`,`IconFallback`,`CustomFallback`,`Square`,`WithStatus`,`AllStatuses`,`AllSizes`,`CustomClassName`,`Editable`,`EditableRejected`,`Group`,`GroupWithMax`,`GroupSizes`]}));M();export{w as AllSizes,S as AllStatuses,g as BrokenImageFallsBackToInitials,T as CustomClassName,v as CustomFallback,E as Editable,D as EditableRejected,O as Group,A as GroupSizes,k as GroupWithMax,_ as IconFallback,y as Square,m as WithImage,h as WithInitials,b as WithStatus,j as __namedExportsOrder,p as default,M as n,u as t};