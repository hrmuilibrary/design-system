import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./iframe-HYgm0KbA.js";import{X as r,nt as i,t as a,w as o}from"./lucide-react-BlsaoSIy.js";import{n as s,t as c}from"./Input-B-BiCOz3.js";import{t as l}from"./Tooltip-Cx_qWu_4.js";import{t as u}from"./Tooltip-BsPvK2Im.js";var d=e({AllSizes:()=>E,CustomClassName:()=>w,Disabled:()=>y,Primary:()=>m,Required:()=>g,WithAddons:()=>S,WithError:()=>v,WithHelperText:()=>_,WithLabel:()=>h,WithLabelAddons:()=>C,WithLeftIcon:()=>b,WithRightIcon:()=>x,__namedExportsOrder:()=>D,default:()=>p}),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O=t((()=>{a(),s(),u(),f=n(),p={title:`Components/Input`,component:c,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`lg`,`md`,`sm`]}},args:{placeholder:`Enter a value`,size:`md`,disabled:!1,required:!1,error:!1},decorators:[e=>(0,f.jsx)(`div`,{className:`w-80`,children:(0,f.jsx)(e,{})})]},m={},h={args:{label:`Email address`}},g={args:{label:`Email address`,required:!0}},_={args:{label:`Email address`,helperText:`We'll never share your email.`}},v={args:{label:`Email address`,error:!0,errorText:`Please enter a valid email address.`,defaultValue:`not-an-email`}},y={args:{label:`Email address`,disabled:!0,defaultValue:`disabled@example.com`}},b={args:{label:`Search`,leftIcon:(0,f.jsx)(o,{className:`h-4 w-4`}),placeholder:`Search...`}},x={args:{label:`Email address`,rightIcon:(0,f.jsx)(r,{className:`h-4 w-4`})}},S={args:{label:`Website`,leftAddon:`https://`,rightAddon:`.com`,placeholder:`example`}},C={name:`With label addons`,args:{label:`API key`,labelAddons:(0,f.jsx)(l,{content:`Found in Settings → Developer → API keys.`,children:(0,f.jsx)(`button`,{type:`button`,"aria-label":`More info`,className:`text-fg-tertiary hover:text-fg-default`,children:(0,f.jsx)(i,{className:`h-3.5 w-3.5`})})})}},w={name:`Overriding classes via className`,args:{label:`Email address`,className:`text-fg-brand`}},T=[`sm`,`md`,`lg`],E={render:e=>(0,f.jsx)(`div`,{className:`flex flex-col gap-4`,children:T.map(t=>(0,f.jsx)(c,{...e,size:t,label:`Size: ${t}`},t))})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email address'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email address',
    required: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email address',
    helperText: "We'll never share your email."
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email address',
    error: true,
    errorText: 'Please enter a valid email address.',
    defaultValue: 'not-an-email'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email address',
    disabled: true,
    defaultValue: 'disabled@example.com'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    leftIcon: <Search className="h-4 w-4" />,
    placeholder: 'Search...'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email address',
    rightIcon: <Mail className="h-4 w-4" />
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Website',
    leftAddon: 'https://',
    rightAddon: '.com',
    placeholder: 'example'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'With label addons',
  args: {
    label: 'API key',
    labelAddons: <Tooltip content="Found in Settings → Developer → API keys.">
        <button type="button" aria-label="More info" className="text-fg-tertiary hover:text-fg-default">
          <Info className="h-3.5 w-3.5" />
        </button>
      </Tooltip>
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    label: 'Email address',
    className: 'text-fg-brand'
  }
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      {SIZES.map(size => <Input key={size} {...args} size={size} label={\`Size: \${size}\`} />)}
    </div>
}`,...E.parameters?.docs?.source}}},D=[`Primary`,`WithLabel`,`Required`,`WithHelperText`,`WithError`,`Disabled`,`WithLeftIcon`,`WithRightIcon`,`WithAddons`,`WithLabelAddons`,`CustomClassName`,`AllSizes`]}));O();export{E as AllSizes,w as CustomClassName,y as Disabled,m as Primary,g as Required,S as WithAddons,v as WithError,_ as WithHelperText,h as WithLabel,C as WithLabelAddons,b as WithLeftIcon,x as WithRightIcon,D as __namedExportsOrder,p as default,O as n,d as t};