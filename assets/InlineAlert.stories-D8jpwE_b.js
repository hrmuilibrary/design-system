import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./iframe-DGIhpTmD.js";import{t as r}from"./Button-GVHnbsp8.js";import{t as i}from"./Button-Cw1incau.js";import{n as a,t as o}from"./InlineAlert-ByWsE8nr.js";var s=e({AllVariants:()=>x,CustomClassName:()=>y,Danger:()=>p,Discovery:()=>m,Dismissible:()=>g,Info:()=>u,Success:()=>d,TitleOnly:()=>h,Warning:()=>f,WithActions:()=>_,WithCustomIcon:()=>v,__namedExportsOrder:()=>S,default:()=>l}),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C=t((()=>{i(),a(),c=n(),l={title:`Components/InlineAlert`,component:o,parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:[`success`,`warning`,`danger`,`info`,`discovery`]}},args:{variant:`info`,title:`Heads up`,description:`This is an inline alert with a title and description.`},decorators:[e=>(0,c.jsx)(`div`,{className:`w-96`,children:(0,c.jsx)(e,{})})]},u={},d={args:{variant:`success`,title:`Changes saved`,description:`Your profile has been updated successfully.`}},f={args:{variant:`warning`,title:`Review required`,description:`Some fields need your attention before you can continue.`}},p={args:{variant:`danger`,title:`Something went wrong`,description:`We couldn’t process your request. Please try again.`}},m={args:{variant:`discovery`,title:`New feature available`,description:`Check out the new dashboard layout in your settings.`}},h={args:{title:`Saved as draft`,description:void 0}},g={args:{title:`Dismissible alert`,description:`Click the close button to dismiss this alert.`,onDismiss:()=>{}}},_={args:{variant:`warning`,title:`Unsaved changes`,description:`You have unsaved changes that will be lost if you leave this page.`,actions:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{size:`sm`,variant:`secondary`,children:`Discard`}),(0,c.jsx)(r,{size:`sm`,variant:`primary`,children:`Save changes`})]})}},v={name:`Custom icon`,args:{icon:(0,c.jsx)(`span`,{className:`text-lg leading-none`,children:`🚀`}),title:`Custom icon override`,description:"The `icon` prop replaces the variant’s default icon."}},y={name:`Overriding classes via className`,args:{variant:`success`,className:`bg-green-100 border-green-300 rounded-2xl`,title:`Custom styling`,description:`className merges with tailwind-merge, so it wins over defaults.`}},b=[`success`,`warning`,`danger`,`info`,`discovery`],x={render:e=>(0,c.jsx)(`div`,{className:`flex flex-col gap-3`,children:b.map(t=>(0,c.jsx)(o,{...e,variant:t,title:t.charAt(0).toUpperCase()+t.slice(1)},t))})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Changes saved',
    description: 'Your profile has been updated successfully.'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Review required',
    description: 'Some fields need your attention before you can continue.'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    title: 'Something went wrong',
    description: 'We couldn’t process your request. Please try again.'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'discovery',
    title: 'New feature available',
    description: 'Check out the new dashboard layout in your settings.'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Saved as draft',
    description: undefined
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Dismissible alert',
    description: 'Click the close button to dismiss this alert.',
    onDismiss: () => {}
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Unsaved changes',
    description: 'You have unsaved changes that will be lost if you leave this page.',
    actions: <>
        <Button size="sm" variant="secondary">
          Discard
        </Button>
        <Button size="sm" variant="primary">
          Save changes
        </Button>
      </>
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Custom icon',
  args: {
    icon: <span className="text-lg leading-none">{'\\u{1F680}'}</span>,
    title: 'Custom icon override',
    description: 'The \`icon\` prop replaces the variant’s default icon.'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    variant: 'success',
    className: 'bg-green-100 border-green-300 rounded-2xl',
    title: 'Custom styling',
    description: 'className merges with tailwind-merge, so it wins over defaults.'
  }
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-3">
      {VARIANTS.map(variant => <InlineAlert key={variant} {...args} variant={variant} title={variant.charAt(0).toUpperCase() + variant.slice(1)} />)}
    </div>
}`,...x.parameters?.docs?.source}}},S=[`Info`,`Success`,`Warning`,`Danger`,`Discovery`,`TitleOnly`,`Dismissible`,`WithActions`,`WithCustomIcon`,`CustomClassName`,`AllVariants`]}));C();export{x as AllVariants,y as CustomClassName,p as Danger,m as Discovery,g as Dismissible,u as Info,d as Success,h as TitleOnly,f as Warning,_ as WithActions,v as WithCustomIcon,S as __namedExportsOrder,l as default,C as n,s as t};