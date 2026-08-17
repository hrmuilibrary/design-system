import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./iframe-C7HQ1jI3.js";import{n as r,t as i}from"./Checkbox-ZoRCJ-87.js";var a=e({AllSizes:()=>x,Checked:()=>l,CustomClassName:()=>y,Default:()=>c,Disabled:()=>p,DisabledChecked:()=>m,Error:()=>h,Indeterminate:()=>u,NoLabel:()=>v,Required:()=>g,Small:()=>f,WithDescription:()=>d,WithErrorText:()=>_,__namedExportsOrder:()=>S,default:()=>s}),o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C=t((()=>{r(),o=n(),s={title:`Components/Checkbox`,component:i,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`md`,`sm`]}},args:{size:`md`,label:`Accept terms and conditions`,disabled:!1,indeterminate:!1,error:!1}},c={},l={args:{defaultChecked:!0}},u={args:{indeterminate:!0,label:`Select all`}},d={args:{label:`Email notifications`,description:`Receive updates about your account activity.`}},f={args:{size:`sm`}},p={args:{disabled:!0}},m={args:{disabled:!0,defaultChecked:!0}},h={args:{error:!0,label:`You must accept the terms`}},g={args:{required:!0,label:`Accept terms and conditions`}},_={args:{required:!0,label:`Accept terms and conditions`,errorText:`You must accept the terms to continue.`}},v={args:{label:void 0,"aria-label":`Select row`}},y={name:`Overriding classes via className`,args:{className:`gap-4`,label:`Custom gap spacing`}},b=[`md`,`sm`],x={render:e=>(0,o.jsx)(`div`,{className:`flex flex-col gap-3`,children:b.map(t=>(0,o.jsx)(i,{...e,size:t,label:t},t))})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    label: 'Select all'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email notifications',
    description: 'Receive updates about your account activity.'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    error: true,
    label: 'You must accept the terms'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    label: 'Accept terms and conditions'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    required: true,
    label: 'Accept terms and conditions',
    errorText: 'You must accept the terms to continue.'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    'aria-label': 'Select row'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'gap-4',
    label: 'Custom gap spacing'
  }
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-3">
      {SIZES.map(size => <Checkbox key={size} {...args} size={size} label={size} />)}
    </div>
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Checked`,`Indeterminate`,`WithDescription`,`Small`,`Disabled`,`DisabledChecked`,`Error`,`Required`,`WithErrorText`,`NoLabel`,`CustomClassName`,`AllSizes`]}));C();export{x as AllSizes,l as Checked,y as CustomClassName,c as Default,p as Disabled,m as DisabledChecked,h as Error,u as Indeterminate,v as NoLabel,g as Required,f as Small,d as WithDescription,_ as WithErrorText,S as __namedExportsOrder,s as default,C as n,a as t};