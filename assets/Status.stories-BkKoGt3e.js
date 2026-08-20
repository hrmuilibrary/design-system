import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./iframe-DIoW-LAR.js";import{Kt as r,Qt as i,t as a}from"./lucide-react-JwUzCEP4.js";import{n as o,t as s}from"./Status-Bi_ESmqp.js";var c=e({AllSizes:()=>E,AllVariants:()=>T,Brand:()=>p,CustomClassName:()=>S,Danger:()=>m,Disabled:()=>v,Discovery:()=>_,General:()=>d,Info:()=>f,Success:()=>g,Warning:()=>h,WithLeftIcon:()=>b,WithRightIcon:()=>x,WithoutDot:()=>y,__namedExportsOrder:()=>D,default:()=>u}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O=t((()=>{a(),o(),l=n(),u={title:`Components/Status`,component:s,parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:[`general`,`info`,`brand`,`danger`,`warning`,`success`,`discovery`,`disabled`]},size:{control:`select`,options:[`lg`,`md`,`sm`]}},args:{children:`Status`,variant:`general`,size:`md`,dot:!0}},d={},f={args:{variant:`info`,children:`In progress`}},p={args:{variant:`brand`,children:`New`}},m={args:{variant:`danger`,children:`Failed`}},h={args:{variant:`warning`,children:`At risk`}},g={args:{variant:`success`,children:`Completed`}},_={args:{variant:`discovery`,children:`Beta`}},v={args:{variant:`disabled`,children:`Inactive`}},y={args:{dot:!1,variant:`success`,children:`Approved`}},b={args:{variant:`success`,leftIcon:(0,l.jsx)(i,{className:`size-3.5`}),children:`Verified`}},x={args:{variant:`info`,rightIcon:(0,l.jsx)(r,{className:`size-3.5`}),children:`View details`}},S={name:`Overriding classes via className`,args:{dot:!1,className:`bg-purple-100 text-purple-900 rounded-md`,children:`Custom`}},C=[`general`,`info`,`brand`,`danger`,`warning`,`success`,`discovery`,`disabled`],w=[`sm`,`md`,`lg`],T={render:e=>(0,l.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:C.map(t=>(0,l.jsx)(s,{...e,variant:t,children:t},t))})},E={render:e=>(0,l.jsx)(`div`,{className:`flex flex-wrap items-center gap-2`,children:w.map(t=>(0,l.jsx)(s,{...e,size:t,children:t},t))})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'In progress'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'brand',
    children: 'New'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Failed'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'At risk'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Completed'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'discovery',
    children: 'Beta'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'disabled',
    children: 'Inactive'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    dot: false,
    variant: 'success',
    children: 'Approved'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    leftIcon: <Check className="size-3.5" />,
    children: 'Verified'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    rightIcon: <ChevronRight className="size-3.5" />,
    children: 'View details'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    dot: false,
    className: 'bg-purple-100 text-purple-900 rounded-md',
    children: 'Custom'
  }
}`,...S.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-2">
      {VARIANTS.map(variant => <Status key={variant} {...args} variant={variant}>
          {variant}
        </Status>)}
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap items-center gap-2">
      {SIZES.map(size => <Status key={size} {...args} size={size}>
          {size}
        </Status>)}
    </div>
}`,...E.parameters?.docs?.source}}},D=[`General`,`Info`,`Brand`,`Danger`,`Warning`,`Success`,`Discovery`,`Disabled`,`WithoutDot`,`WithLeftIcon`,`WithRightIcon`,`CustomClassName`,`AllVariants`,`AllSizes`]}));O();export{E as AllSizes,T as AllVariants,p as Brand,S as CustomClassName,m as Danger,v as Disabled,_ as Discovery,d as General,f as Info,g as Success,h as Warning,b as WithLeftIcon,x as WithRightIcon,y as WithoutDot,D as __namedExportsOrder,u as default,O as n,c as t};