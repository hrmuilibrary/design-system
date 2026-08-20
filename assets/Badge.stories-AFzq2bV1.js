import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./iframe-cZVKo6eo.js";import{m as r,t as i}from"./lucide-react-CxOTFfkd.js";import{n as a,t as o}from"./Badge-Cqfy62CN.js";var s=e({Accent:()=>f,AllAppearances:()=>x,AllSizes:()=>S,AllVariants:()=>b,CustomClassName:()=>g,Disabled:()=>E,Dismissible:()=>h,Dot:()=>w,Filled:()=>u,IconOnly:()=>O,Interactive:()=>D,Outline:()=>d,Pill:()=>C,WithDot:()=>T,WithLeftIcon:()=>p,WithRightIcon:()=>m,__namedExportsOrder:()=>k,default:()=>l}),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A=t((()=>{i(),a(),c=n(),l={title:`Components/Badge`,component:o,parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:[`neutral`,`brand`,`success`,`warning`,`danger`,`info`,`privacy`]},appearance:{control:`select`,options:[`filled`,`outline`,`accent`]},size:{control:`select`,options:[`lg`,`md`,`sm`,`xs`]}},args:{children:`Badge`,variant:`neutral`,appearance:`filled`,size:`md`}},u={},d={args:{appearance:`outline`}},f={args:{appearance:`accent`}},p={args:{leftIcon:(0,c.jsx)(r,{className:`size-3`}),children:`Featured`}},m={args:{rightIcon:(0,c.jsx)(r,{className:`size-3`}),children:`Featured`}},h={args:{children:`Removable`,onDismiss:()=>{}}},g={name:`Overriding classes via className`,args:{className:`bg-purple-100 text-purple-900 border-purple-300 rounded-full`,children:`Custom`}},_=[`neutral`,`brand`,`success`,`warning`,`danger`,`info`,`privacy`],v=[`filled`,`outline`,`accent`],y=[`xs`,`sm`,`md`,`lg`],b={render:e=>(0,c.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:_.map(t=>(0,c.jsx)(o,{...e,variant:t,children:t},t))})},x={render:e=>(0,c.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:v.map(t=>(0,c.jsx)(o,{...e,appearance:t,children:t},t))})},S={render:e=>(0,c.jsx)(`div`,{className:`flex flex-wrap items-center gap-2`,children:y.map(t=>(0,c.jsx)(o,{...e,size:t,children:t},t))})},C={name:`Pill shape`,args:{shape:`pill`}},w={name:`Standalone dot`,render:e=>(0,c.jsx)(`div`,{className:`flex flex-wrap items-center gap-3`,children:_.map(t=>(0,c.jsx)(o,{...e,variant:t,dot:!0,"aria-label":t},t))})},T={name:`With leading dot`,args:{withDot:!0,variant:`success`,children:`Active`}},E={args:{disabled:!0,children:`Disabled`}},D={args:{interactive:!0,children:`Click me`,onClick:()=>{}}},O={name:`Icon only`,render:e=>(0,c.jsx)(`div`,{className:`flex flex-wrap items-center gap-2`,children:y.map(t=>(0,c.jsx)(o,{...e,size:t,leftIcon:(0,c.jsx)(r,{className:`size-3`}),"aria-label":`Featured`},t))})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'outline'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'accent'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    leftIcon: <Star className="size-3" />,
    children: 'Featured'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    rightIcon: <Star className="size-3" />,
    children: 'Featured'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Removable',
    onDismiss: () => {}
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'bg-purple-100 text-purple-900 border-purple-300 rounded-full',
    children: 'Custom'
  }
}`,...g.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-2">
      {VARIANTS.map(variant => <Badge key={variant} {...args} variant={variant}>
          {variant}
        </Badge>)}
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-2">
      {APPEARANCES.map(appearance => <Badge key={appearance} {...args} appearance={appearance}>
          {appearance}
        </Badge>)}
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap items-center gap-2">
      {SIZES.map(size => <Badge key={size} {...args} size={size}>
          {size}
        </Badge>)}
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Pill shape',
  args: {
    shape: 'pill'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Standalone dot',
  render: args => <div className="flex flex-wrap items-center gap-3">
      {VARIANTS.map(variant => <Badge key={variant} {...args} variant={variant} dot aria-label={variant} />)}
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'With leading dot',
  args: {
    withDot: true,
    variant: 'success',
    children: 'Active'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    interactive: true,
    children: 'Click me',
    onClick: () => {}
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Icon only',
  render: args => <div className="flex flex-wrap items-center gap-2">
      {SIZES.map(size => <Badge key={size} {...args} size={size} leftIcon={<Star className="size-3" />} aria-label="Featured" />)}
    </div>
}`,...O.parameters?.docs?.source}}},k=[`Filled`,`Outline`,`Accent`,`WithLeftIcon`,`WithRightIcon`,`Dismissible`,`CustomClassName`,`AllVariants`,`AllAppearances`,`AllSizes`,`Pill`,`Dot`,`WithDot`,`Disabled`,`Interactive`,`IconOnly`]}));A();export{f as Accent,x as AllAppearances,S as AllSizes,b as AllVariants,g as CustomClassName,E as Disabled,h as Dismissible,w as Dot,u as Filled,O as IconOnly,D as Interactive,d as Outline,C as Pill,T as WithDot,p as WithLeftIcon,m as WithRightIcon,k as __namedExportsOrder,l as default,A as n,s as t};