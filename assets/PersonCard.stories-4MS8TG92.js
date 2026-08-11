import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-B_LPFnTU.js";import{n as a,t as o}from"./cn-BNhCYuha.js";import{t as s}from"./Avatar-d_o3koRv.js";import{t as c}from"./Avatar-B2E3Y6g9.js";var l,u,d,f,p,m=t((()=>{l=n(r(),1),c(),a(),u=i(),d={sm:{padding:`px-3 py-2`,avatar:`sm`,gap:`gap-2.5`},md:{padding:`px-3.5 py-2.5`,avatar:`md`,gap:`gap-3`}},f={default:`border-border-default bg-bg-default hover:border-fg-tertiary/40`,highlight:`border-brand-500 bg-brand-200/15 dark:bg-brand-500/10 ring-1 ring-brand-500/40`,warning:`border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20`},p=(0,l.forwardRef)(function({name:e,role:t,avatar:n,variant:r=`default`,size:i=`md`,badge:a,onClick:c,className:l,dataTestId:p,...m},h){let g=d[i],_=f[r],v=(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s,{src:n,name:e,size:g.avatar}),(0,u.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,u.jsx)(`div`,{className:`text-p-std font-semibold text-fg-default truncate leading-tight`,children:e}),t&&(0,u.jsx)(`div`,{className:`text-p-sm text-fg-secondary truncate mt-0.5 leading-tight`,children:t})]}),a&&(0,u.jsx)(`span`,{className:`shrink-0 self-center`,children:a})]}),y=o(`relative inline-flex items-center rounded-xl border transition`,g.padding,g.gap,_,c&&`cursor-pointer hover:shadow-z1`,l);return c?(0,u.jsx)(`button`,{ref:h,type:`button`,onClick:c,"data-test-id":p,className:o(y,`text-left`),...m,children:v}):(0,u.jsx)(`div`,{ref:h,"data-test-id":p,className:y,...m,children:v})});try{p.displayName=`PersonCard`,p.__docgenInfo={description:``,displayName:`PersonCard`,filePath:`/home/runner/work/design-system/design-system/src/components/PersonCard/PersonCard.tsx`,methods:[],props:{name:{defaultValue:null,declarations:[{fileName:`design-system/src/components/PersonCard/PersonCard.types.ts`,name:`PersonCardProps`}],description:``,name:`name`,parent:{fileName:`design-system/src/components/PersonCard/PersonCard.types.ts`,name:`PersonCardProps`},required:!0,tags:{},type:{name:`string`}},role:{defaultValue:null,declarations:[{fileName:`design-system/src/components/PersonCard/PersonCard.types.ts`,name:`PersonCardProps`}],description:``,name:`role`,parent:{fileName:`design-system/src/components/PersonCard/PersonCard.types.ts`,name:`PersonCardProps`},required:!1,tags:{},type:{name:`string`}},avatar:{defaultValue:null,declarations:[{fileName:`design-system/src/components/PersonCard/PersonCard.types.ts`,name:`PersonCardProps`}],description:``,name:`avatar`,parent:{fileName:`design-system/src/components/PersonCard/PersonCard.types.ts`,name:`PersonCardProps`},required:!1,tags:{},type:{name:`string`}},variant:{defaultValue:{value:`default`},declarations:[{fileName:`design-system/src/components/PersonCard/PersonCard.types.ts`,name:`PersonCardProps`}],description:`Visual treatment.
- default: neutral border
- highlight: brand-green tint + border (use for "you" / current user / featured)
- warning: amber border + small status dot (use for "needs attention")`,name:`variant`,parent:{fileName:`design-system/src/components/PersonCard/PersonCard.types.ts`,name:`PersonCardProps`},required:!1,tags:{},type:{name:`enum`,raw:`PersonCardVariant`,value:[{value:`"warning"`},{value:`"default"`},{value:`"highlight"`}]}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/components/PersonCard/PersonCard.types.ts`,name:`PersonCardProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/PersonCard/PersonCard.types.ts`,name:`PersonCardProps`},required:!1,tags:{},type:{name:`enum`,raw:`PersonCardSize`,value:[{value:`"md"`},{value:`"sm"`}]}},badge:{defaultValue:null,declarations:[{fileName:`design-system/src/components/PersonCard/PersonCard.types.ts`,name:`PersonCardProps`}],description:`Optional badge rendered inline at the end of the row (e.g. "YOU").`,name:`badge`,parent:{fileName:`design-system/src/components/PersonCard/PersonCard.types.ts`,name:`PersonCardProps`},required:!1,tags:{},type:{name:`ReactNode`}},onClick:{defaultValue:null,declarations:[{fileName:`design-system/src/components/PersonCard/PersonCard.types.ts`,name:`PersonCardProps`}],description:`If set, renders as a button so it's clickable.`,name:`onClick`,parent:{fileName:`design-system/src/components/PersonCard/PersonCard.types.ts`,name:`PersonCardProps`},required:!1,tags:{},type:{name:`(() => void)`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),h=e({AllSizes:()=>A,AllVariants:()=>k,Clickable:()=>T,CustomClassName:()=>E,Default:()=>v,Highlight:()=>y,NoRole:()=>w,Small:()=>x,Warning:()=>b,WithAvatar:()=>S,WithBadge:()=>C,__namedExportsOrder:()=>j,default:()=>_}),g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=t((()=>{m(),g=i(),_={title:`Components/PersonCard`,component:p,parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:[`default`,`highlight`,`warning`]},size:{control:`select`,options:[`sm`,`md`]}},args:{name:`Ana Petrosyan`,role:`Product Designer`,variant:`default`,size:`md`}},v={},y={args:{variant:`highlight`,name:`You`,role:`Frontend Engineer`}},b={args:{variant:`warning`,role:`Awaiting review`}},x={args:{size:`sm`}},S={args:{avatar:`https://i.pravatar.cc/150?img=32`}},C={args:{variant:`highlight`,name:`You`,badge:(0,g.jsx)(`span`,{className:`rounded-full bg-brand-500 px-2 py-0.5 text-p-xs font-semibold text-white`,children:`YOU`})}},w={args:{role:void 0}},T={args:{onClick:()=>alert(`Person card clicked`)}},E={name:`Overriding classes via className`,args:{className:`rounded-full`}},D=[`default`,`highlight`,`warning`],O=[`sm`,`md`],k={render:e=>(0,g.jsx)(`div`,{className:`flex flex-col gap-3`,children:D.map(t=>(0,g.jsx)(p,{...e,variant:t},t))})},A={render:e=>(0,g.jsx)(`div`,{className:`flex flex-col gap-3`,children:O.map(t=>(0,g.jsx)(p,{...e,size:t},t))})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'highlight',
    name: 'You',
    role: 'Frontend Engineer'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    role: 'Awaiting review'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    avatar: 'https://i.pravatar.cc/150?img=32'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'highlight',
    name: 'You',
    badge: <span className="rounded-full bg-brand-500 px-2 py-0.5 text-p-xs font-semibold text-white">
        YOU
      </span>
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    role: undefined
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: () => alert('Person card clicked')
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'rounded-full'
  }
}`,...E.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-3">
      {VARIANTS.map(variant => <PersonCard key={variant} {...args} variant={variant} />)}
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-3">
      {SIZES.map(size => <PersonCard key={size} {...args} size={size} />)}
    </div>
}`,...A.parameters?.docs?.source}}},j=[`Default`,`Highlight`,`Warning`,`Small`,`WithAvatar`,`WithBadge`,`NoRole`,`Clickable`,`CustomClassName`,`AllVariants`,`AllSizes`]}));M();export{A as AllSizes,k as AllVariants,T as Clickable,E as CustomClassName,v as Default,y as Highlight,w as NoRole,x as Small,b as Warning,S as WithAvatar,C as WithBadge,j as __namedExportsOrder,_ as default,M as n,h as t};