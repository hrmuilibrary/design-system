import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-DGIhpTmD.js";import{n as a,t as o}from"./cn-BNhCYuha.js";var s,c,l,u,d,f=t((()=>{s=n(r(),1),a(),c=i(),l={md:`h-6 w-11`,sm:`h-5 w-9`},u={md:`h-5 w-5 peer-checked:translate-x-5`,sm:`h-4 w-4 peer-checked:translate-x-4`},d=(0,s.forwardRef)(function({size:e=`md`,label:t,description:n,labelPosition:r=`right`,id:i,disabled:a,checked:d,defaultChecked:f,className:p,dataTestId:m,...h},g){let _=(0,s.useId)(),v=i??_,y=(0,c.jsxs)(`span`,{className:`relative inline-flex shrink-0`,children:[(0,c.jsx)(`input`,{ref:g,id:v,type:`checkbox`,role:`switch`,checked:d,defaultChecked:f,disabled:a,className:`peer sr-only`,...h}),(0,c.jsx)(`span`,{className:o(`rounded-full bg-gray-300 dark:bg-gray-700 transition-colors`,l[e],`peer-checked:bg-brand-500 dark:peer-checked:bg-brand-500`,`peer-focus-visible:ring-2 peer-focus-visible:ring-brand-300 peer-focus-visible:ring-offset-2`,a&&`!bg-bg-subtle`)}),(0,c.jsx)(`span`,{className:o(`absolute top-0.5 left-0.5 rounded-full bg-white dark:bg-white shadow-z1 transition-transform`,u[e])})]});return!t&&!n?(0,c.jsx)(`label`,{htmlFor:v,"data-test-id":m,className:o(`inline-flex`,a?`cursor-not-allowed opacity-60`:`cursor-pointer`,p),children:y}):(0,c.jsxs)(`label`,{htmlFor:v,"data-test-id":m,className:o(`inline-flex items-center gap-3`,r===`left`&&`flex-row-reverse justify-end`,a?`cursor-not-allowed opacity-60`:`cursor-pointer`,p),children:[y,(0,c.jsxs)(`span`,{className:`flex flex-col gap-0.5`,children:[t&&(0,c.jsx)(`span`,{className:`text-p-std font-medium text-fg-default leading-tight`,children:t}),n&&(0,c.jsx)(`span`,{className:`text-p-sm text-fg-secondary leading-snug`,children:n})]})]})});try{d.displayName=`Switch`,d.__docgenInfo={description:``,displayName:`Switch`,filePath:`/home/runner/work/design-system/design-system/src/components/Switch/Switch.tsx`,methods:[],props:{size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/components/Switch/Switch.types.ts`,name:`SwitchProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/Switch/Switch.types.ts`,name:`SwitchProps`},required:!1,tags:{},type:{name:`enum`,raw:`SwitchSize`,value:[{value:`"sm"`},{value:`"md"`}]}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Switch/Switch.types.ts`,name:`SwitchProps`}],description:``,name:`label`,parent:{fileName:`design-system/src/components/Switch/Switch.types.ts`,name:`SwitchProps`},required:!1,tags:{},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Switch/Switch.types.ts`,name:`SwitchProps`}],description:``,name:`description`,parent:{fileName:`design-system/src/components/Switch/Switch.types.ts`,name:`SwitchProps`},required:!1,tags:{},type:{name:`ReactNode`}},labelPosition:{defaultValue:{value:`right`},declarations:[{fileName:`design-system/src/components/Switch/Switch.types.ts`,name:`SwitchProps`}],description:``,name:`labelPosition`,parent:{fileName:`design-system/src/components/Switch/Switch.types.ts`,name:`SwitchProps`},required:!1,tags:{},type:{name:`enum`,raw:`"left" | "right"`,value:[{value:`"left"`},{value:`"right"`}]}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),p=e({AllSizes:()=>E,Checked:()=>v,CustomClassName:()=>w,Disabled:()=>y,DisabledChecked:()=>b,LabelOnLeft:()=>C,Primary:()=>g,Small:()=>_,WithLabel:()=>x,WithLabelAndDescription:()=>S,__namedExportsOrder:()=>D,default:()=>h}),m,h,g,_,v,y,b,x,S,C,w,T,E,D,O=t((()=>{f(),m=i(),h={title:`Components/Switch`,component:d,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`md`,`sm`]},labelPosition:{control:`select`,options:[`left`,`right`]}},args:{size:`md`,labelPosition:`right`,disabled:!1}},g={},_={args:{size:`sm`}},v={args:{defaultChecked:!0}},y={args:{disabled:!0}},b={args:{disabled:!0,defaultChecked:!0}},x={args:{label:`Enable notifications`}},S={args:{label:`Enable notifications`,description:`Get notified when someone mentions you.`}},C={args:{label:`Enable notifications`,labelPosition:`left`}},w={name:`Overriding classes via className`,args:{label:`Custom wrapper spacing`,className:`gap-6`}},T=[`sm`,`md`],E={render:e=>(0,m.jsx)(`div`,{className:`flex flex-wrap items-center gap-6`,children:T.map(t=>(0,m.jsx)(d,{...e,size:t,label:t},t))})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications',
    description: 'Get notified when someone mentions you.'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enable notifications',
    labelPosition: 'left'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    label: 'Custom wrapper spacing',
    className: 'gap-6'
  }
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap items-center gap-6">
      {SIZES.map(size => <Switch key={size} {...args} size={size} label={size} />)}
    </div>
}`,...E.parameters?.docs?.source}}},D=[`Primary`,`Small`,`Checked`,`Disabled`,`DisabledChecked`,`WithLabel`,`WithLabelAndDescription`,`LabelOnLeft`,`CustomClassName`,`AllSizes`]}));O();export{E as AllSizes,v as Checked,w as CustomClassName,y as Disabled,b as DisabledChecked,C as LabelOnLeft,g as Primary,_ as Small,x as WithLabel,S as WithLabelAndDescription,D as __namedExportsOrder,h as default,O as n,p as t};