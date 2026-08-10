import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-DDx-spus.js";import{Mt as a,Rt as o,t as s}from"./lucide-react-CzpjM2Un.js";import{n as c,t as l}from"./cn-BNhCYuha.js";var u,d,f,p,m,h,g=t((()=>{u=n(r(),1),c(),d=i(),f={lg:`h-7 px-2.5 text-p-std gap-1.5`,md:`h-6 px-2 text-p-sm gap-1.5`,sm:`h-5 px-1.5 text-p-sm gap-1`},p={lg:`h-2 w-2`,md:`h-1.5 w-1.5`,sm:`h-1.5 w-1.5`},m={general:{container:`bg-bg-subtle text-fg-default dark:text-fg-default`,dot:`bg-gray-600 dark:bg-gray-400`},info:{container:`bg-bg-info-lighter text-blue-800 dark:text-blue-300`,dot:`bg-blue-600`},brand:{container:`bg-bg-brand-lighter text-brand-800 dark:text-brand-500`,dot:`bg-brand-500`},danger:{container:`bg-bg-danger-lighter text-red-800 dark:text-red-300`,dot:`bg-red-600`},warning:{container:`bg-bg-warning-lighter text-yellow-900 dark:text-yellow-300`,dot:`bg-yellow-600`},success:{container:`bg-bg-success-lighter text-green-800 dark:text-green-300`,dot:`bg-green-600`},discovery:{container:`bg-purple-50 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300`,dot:`bg-purple-500`},disabled:{container:`bg-bg-subtle text-fg-disabled`,dot:`bg-border-strong`}},h=(0,u.forwardRef)(function({variant:e=`general`,size:t=`md`,leftIcon:n,rightIcon:r,dot:i=!0,className:a,children:o,dataTestId:s,...c},u){let{container:h,dot:g}=m[e];return(0,d.jsxs)(`span`,{ref:u,"data-test-id":s,className:l(`inline-flex items-center rounded-full font-medium whitespace-nowrap select-none`,f[t],h,a),...c,children:[n?(0,d.jsx)(`span`,{className:`inline-flex shrink-0`,children:n}):i?(0,d.jsx)(`span`,{className:l(`inline-block shrink-0 rounded-full`,p[t],g),"aria-hidden":!0}):null,o,r&&(0,d.jsx)(`span`,{className:`inline-flex shrink-0`,children:r})]})});try{h.displayName=`Status`,h.__docgenInfo={description:``,displayName:`Status`,filePath:`/home/runner/work/design-system/design-system/src/components/Status/Status.tsx`,methods:[],props:{variant:{defaultValue:{value:`general`},declarations:[{fileName:`design-system/src/components/Status/Status.types.ts`,name:`StatusProps`}],description:``,name:`variant`,parent:{fileName:`design-system/src/components/Status/Status.types.ts`,name:`StatusProps`},required:!1,tags:{},type:{name:`enum`,raw:`StatusVariant`,value:[{value:`"disabled"`},{value:`"danger"`},{value:`"brand"`},{value:`"info"`},{value:`"success"`},{value:`"warning"`},{value:`"discovery"`},{value:`"general"`}]}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/components/Status/Status.types.ts`,name:`StatusProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/Status/Status.types.ts`,name:`StatusProps`},required:!1,tags:{},type:{name:`enum`,raw:`StatusSize`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}},leftIcon:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Status/Status.types.ts`,name:`StatusProps`}],description:``,name:`leftIcon`,parent:{fileName:`design-system/src/components/Status/Status.types.ts`,name:`StatusProps`},required:!1,tags:{},type:{name:`ReactNode`}},rightIcon:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Status/Status.types.ts`,name:`StatusProps`}],description:``,name:`rightIcon`,parent:{fileName:`design-system/src/components/Status/Status.types.ts`,name:`StatusProps`},required:!1,tags:{},type:{name:`ReactNode`}},dot:{defaultValue:{value:`true`},declarations:[{fileName:`design-system/src/components/Status/Status.types.ts`,name:`StatusProps`}],description:"Renders a leading color dot when true and no `leftIcon` is supplied.",name:`dot`,parent:{fileName:`design-system/src/components/Status/Status.types.ts`,name:`StatusProps`},required:!1,tags:{},type:{name:`boolean`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),_=e({AllSizes:()=>F,AllVariants:()=>P,Brand:()=>S,CustomClassName:()=>j,Danger:()=>C,Disabled:()=>D,Discovery:()=>E,General:()=>b,Info:()=>x,Success:()=>T,Warning:()=>w,WithLeftIcon:()=>k,WithRightIcon:()=>A,WithoutDot:()=>O,__namedExportsOrder:()=>I,default:()=>y}),v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L=t((()=>{s(),g(),v=i(),y={title:`Components/Status`,component:h,parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:[`general`,`info`,`brand`,`danger`,`warning`,`success`,`discovery`,`disabled`]},size:{control:`select`,options:[`lg`,`md`,`sm`]}},args:{children:`Status`,variant:`general`,size:`md`,dot:!0}},b={},x={args:{variant:`info`,children:`In progress`}},S={args:{variant:`brand`,children:`New`}},C={args:{variant:`danger`,children:`Failed`}},w={args:{variant:`warning`,children:`At risk`}},T={args:{variant:`success`,children:`Completed`}},E={args:{variant:`discovery`,children:`Beta`}},D={args:{variant:`disabled`,children:`Inactive`}},O={args:{dot:!1,variant:`success`,children:`Approved`}},k={args:{variant:`success`,leftIcon:(0,v.jsx)(o,{className:`size-3.5`}),children:`Verified`}},A={args:{variant:`info`,rightIcon:(0,v.jsx)(a,{className:`size-3.5`}),children:`View details`}},j={name:`Overriding classes via className`,args:{dot:!1,className:`bg-purple-100 text-purple-900 rounded-md`,children:`Custom`}},M=[`general`,`info`,`brand`,`danger`,`warning`,`success`,`discovery`,`disabled`],N=[`sm`,`md`,`lg`],P={render:e=>(0,v.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:M.map(t=>(0,v.jsx)(h,{...e,variant:t,children:t},t))})},F={render:e=>(0,v.jsx)(`div`,{className:`flex flex-wrap items-center gap-2`,children:N.map(t=>(0,v.jsx)(h,{...e,size:t,children:t},t))})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'In progress'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'brand',
    children: 'New'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Failed'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: 'At risk'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: 'Completed'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'discovery',
    children: 'Beta'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'disabled',
    children: 'Inactive'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    dot: false,
    variant: 'success',
    children: 'Approved'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    leftIcon: <Check className="size-3.5" />,
    children: 'Verified'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    rightIcon: <ChevronRight className="size-3.5" />,
    children: 'View details'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    dot: false,
    className: 'bg-purple-100 text-purple-900 rounded-md',
    children: 'Custom'
  }
}`,...j.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-2">
      {VARIANTS.map(variant => <Status key={variant} {...args} variant={variant}>
          {variant}
        </Status>)}
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap items-center gap-2">
      {SIZES.map(size => <Status key={size} {...args} size={size}>
          {size}
        </Status>)}
    </div>
}`,...F.parameters?.docs?.source}}},I=[`General`,`Info`,`Brand`,`Danger`,`Warning`,`Success`,`Discovery`,`Disabled`,`WithoutDot`,`WithLeftIcon`,`WithRightIcon`,`CustomClassName`,`AllVariants`,`AllSizes`]}));L();export{F as AllSizes,P as AllVariants,S as Brand,j as CustomClassName,C as Danger,D as Disabled,E as Discovery,b as General,x as Info,T as Success,w as Warning,k as WithLeftIcon,A as WithRightIcon,O as WithoutDot,I as __namedExportsOrder,y as default,L as n,_ as t};