import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{f as r,t as i}from"./iframe-CTW3crj1.js";import{n as a,t as o}from"./cn-DIh43TlC.js";import{n as s,t as c}from"./testId-ylvv4xxC.js";var l,u,d,f,p,m=t((()=>{l=e(r(),1),a(),s(),u=i(),d={md:`h-6 w-11`,sm:`h-5 w-9`},f={md:`h-5 w-5 peer-checked:translate-x-5`,sm:`h-4 w-4 peer-checked:translate-x-4`},p=(0,l.forwardRef)(function({size:e=`md`,label:t,description:n,labelPosition:r=`right`,id:i,disabled:a,checked:s,defaultChecked:p,className:m,dataTestId:h,...g},_){let v=(0,l.useId)(),y=i??v,b=(0,u.jsxs)(`span`,{className:`relative inline-flex shrink-0`,children:[(0,u.jsx)(`input`,{ref:_,id:y,type:`checkbox`,role:`switch`,checked:s,defaultChecked:p,disabled:a,className:`peer sr-only`,"data-test-id":c(h)(`input`),...g}),(0,u.jsx)(`span`,{className:o(`rounded-full bg-gray-300 dark:bg-gray-700 transition-colors`,d[e],`peer-checked:bg-brand-500 dark:peer-checked:bg-brand-500`,`peer-focus-visible:ring-2 peer-focus-visible:ring-brand-300 peer-focus-visible:ring-offset-2`,a&&`bg-bg-subtle!`)}),(0,u.jsx)(`span`,{className:o(`absolute top-0.5 left-0.5 rounded-full bg-white dark:bg-white shadow-z1 transition-transform`,f[e])})]});return!t&&!n?(0,u.jsx)(`label`,{htmlFor:y,"data-test-id":h,className:o(`inline-flex`,a?`cursor-not-allowed opacity-60`:`cursor-pointer`,m),children:b}):(0,u.jsxs)(`label`,{htmlFor:y,"data-test-id":h,className:o(`inline-flex items-center gap-3`,r===`left`&&`flex-row-reverse justify-end`,a?`cursor-not-allowed opacity-60`:`cursor-pointer`,m),children:[b,(0,u.jsxs)(`span`,{className:`flex flex-col gap-0.5`,children:[t&&(0,u.jsx)(`span`,{className:`text-p-std font-medium text-fg-default leading-tight`,children:t}),n&&(0,u.jsx)(`span`,{className:`text-p-sm text-fg-secondary leading-snug`,children:n})]})]})});try{p.displayName=`Switch`,p.__docgenInfo={description:``,displayName:`Switch`,filePath:`/home/runner/work/design-system/design-system/src/components/Switch/Switch.tsx`,methods:[],props:{size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/components/Switch/Switch.types.ts`,name:`SwitchProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/Switch/Switch.types.ts`,name:`SwitchProps`},required:!1,tags:{},type:{name:`enum`,raw:`SwitchSize`,value:[{value:`"md"`},{value:`"sm"`}]}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Switch/Switch.types.ts`,name:`SwitchProps`}],description:``,name:`label`,parent:{fileName:`design-system/src/components/Switch/Switch.types.ts`,name:`SwitchProps`},required:!1,tags:{},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Switch/Switch.types.ts`,name:`SwitchProps`}],description:``,name:`description`,parent:{fileName:`design-system/src/components/Switch/Switch.types.ts`,name:`SwitchProps`},required:!1,tags:{},type:{name:`ReactNode`}},labelPosition:{defaultValue:{value:`right`},declarations:[{fileName:`design-system/src/components/Switch/Switch.types.ts`,name:`SwitchProps`}],description:``,name:`labelPosition`,parent:{fileName:`design-system/src/components/Switch/Switch.types.ts`,name:`SwitchProps`},required:!1,tags:{},type:{name:`enum`,raw:`"right" | "left"`,value:[{value:`"right"`},{value:`"left"`}]}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),h=n({AllSizes:()=>O,Checked:()=>b,CustomClassName:()=>E,Disabled:()=>x,DisabledChecked:()=>S,LabelOnLeft:()=>T,Primary:()=>v,Small:()=>y,WithLabel:()=>C,WithLabelAndDescription:()=>w,__namedExportsOrder:()=>k,default:()=>_}),g,_,v,y,b,x,S,C,w,T,E,D,O,k,A=t((()=>{m(),g=i(),_={title:`Components/Switch`,component:p,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`md`,`sm`]},labelPosition:{control:`select`,options:[`left`,`right`]}},args:{size:`md`,labelPosition:`right`,disabled:!1}},v={},y={args:{size:`sm`}},b={args:{defaultChecked:!0}},x={args:{disabled:!0}},S={args:{disabled:!0,defaultChecked:!0}},C={args:{label:`Enable notifications`}},w={args:{label:`Enable notifications`,description:`Get notified when someone mentions you.`}},T={args:{label:`Enable notifications`,labelPosition:`left`}},E={name:`Overriding classes via className`,args:{label:`Custom wrapper spacing`,className:`gap-6`}},D=[`sm`,`md`],O={render:e=>(0,g.jsx)(`div`,{className:`flex flex-wrap items-center gap-6`,children:D.map(t=>(0,g.jsx)(p,{...e,size:t,label:t},t))})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications',
    description: 'Get notified when someone mentions you.'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications',
    labelPosition: 'left'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    label: 'Custom wrapper spacing',
    className: 'gap-6'
  }
}`,...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap items-center gap-6">
      {SIZES.map(size => <Switch key={size} {...args} size={size} label={size} />)}
    </div>
}`,...O.parameters?.docs?.source}}},k=[`Primary`,`Small`,`Checked`,`Disabled`,`DisabledChecked`,`WithLabel`,`WithLabelAndDescription`,`LabelOnLeft`,`CustomClassName`,`AllSizes`]}));A();export{O as AllSizes,b as Checked,E as CustomClassName,x as Disabled,S as DisabledChecked,T as LabelOnLeft,v as Primary,y as Small,C as WithLabel,w as WithLabelAndDescription,k as __namedExportsOrder,_ as default,A as n,h as t};