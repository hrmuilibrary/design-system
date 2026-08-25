import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./iframe-DGIhpTmD.js";import{X as r,t as i}from"./lucide-react-PmDCmkRE.js";import{n as a,t as o}from"./Button-GVHnbsp8.js";var s=e({AllSizes:()=>w,AllVariants:()=>C,CustomClassName:()=>b,Danger:()=>p,FullWidth:()=>y,IconOnly:()=>v,Loading:()=>m,Pressed:()=>h,Primary:()=>u,Secondary:()=>d,Tertiary:()=>f,WithLeftIcon:()=>g,WithRightIcon:()=>_,__namedExportsOrder:()=>T,default:()=>l}),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E=t((()=>{i(),a(),c=n(),l={title:`Components/Button`,component:o,parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`tertiary`,`danger`]},size:{control:`select`,options:[`lg`,`md`,`sm`]}},args:{children:`Button`,variant:`primary`,size:`md`,disabled:!1,loading:!1,iconOnly:!1,fullWidth:!1,pressed:!1}},u={},d={args:{variant:`secondary`}},f={args:{variant:`tertiary`}},p={args:{variant:`danger`}},m={args:{loading:!0,children:`Saving...`}},h={args:{pressed:!0,children:`Toggled on`}},g={args:{leftIcon:(0,c.jsx)(r,{className:`size-4`}),children:`Email`}},_={args:{rightIcon:(0,c.jsx)(r,{className:`size-4`}),children:`Email`}},v={args:{iconOnly:!0,"aria-label":`Send email`,children:(0,c.jsx)(r,{className:`size-4`})}},y={args:{fullWidth:!0},decorators:[e=>(0,c.jsx)(`div`,{className:`w-80`,children:(0,c.jsx)(e,{})})]},b={name:`Overriding classes via className`,args:{className:`bg-green-600 text-fg-inverse hover:bg-green-700 rounded-full`,children:`Approve`}},x=[`primary`,`secondary`,`tertiary`,`danger`],S=[`sm`,`md`,`lg`],C={render:e=>(0,c.jsx)(`div`,{className:`flex flex-wrap gap-3`,children:x.map(t=>(0,c.jsx)(o,{...e,variant:t,children:t},t))})},w={render:e=>(0,c.jsx)(`div`,{className:`flex flex-wrap items-center gap-3`,children:S.map(t=>(0,c.jsx)(o,{...e,size:t,children:t},t))})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: 'Saving...'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    pressed: true,
    children: 'Toggled on'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    leftIcon: <Mail className="size-4" />,
    children: 'Email'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    rightIcon: <Mail className="size-4" />,
    children: 'Email'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    iconOnly: true,
    'aria-label': 'Send email',
    children: <Mail className="size-4" />
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  },
  decorators: [Story => <div className="w-80">
        <Story />
      </div>]
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'bg-green-600 text-fg-inverse hover:bg-green-700 rounded-full',
    children: 'Approve'
  }
}`,...b.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-3">
      {VARIANTS.map(variant => <Button key={variant} {...args} variant={variant}>
          {variant}
        </Button>)}
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap items-center gap-3">
      {SIZES.map(size => <Button key={size} {...args} size={size}>
          {size}
        </Button>)}
    </div>
}`,...w.parameters?.docs?.source}}},T=[`Primary`,`Secondary`,`Tertiary`,`Danger`,`Loading`,`Pressed`,`WithLeftIcon`,`WithRightIcon`,`IconOnly`,`FullWidth`,`CustomClassName`,`AllVariants`,`AllSizes`]}));E();export{w as AllSizes,C as AllVariants,b as CustomClassName,p as Danger,y as FullWidth,v as IconOnly,m as Loading,h as Pressed,u as Primary,d as Secondary,f as Tertiary,g as WithLeftIcon,_ as WithRightIcon,T as __namedExportsOrder,l as default,E as n,s as t};