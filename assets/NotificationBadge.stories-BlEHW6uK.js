import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-DIoW-LAR.js";import{in as a,t as o}from"./lucide-react-JwUzCEP4.js";import{n as s,t as c}from"./cn-BNhCYuha.js";function l(e,t){return e>t?`${t}+`:e>=1e3?`${(e/1e3).toFixed(0)}K`:String(e)}var u,d,f,p,m,h,g=t((()=>{u=n(r(),1),s(),d=i(),f={brand:`bg-brand-500 text-white`,danger:`bg-red-600 text-white`,success:`bg-green-600 text-white`,warning:`bg-yellow-600 text-gray-900 dark:text-gray-900`,info:`bg-blue-600 text-white`},p={lg:`min-w-[18px] h-[18px] px-1 text-[11px]`,sm:`min-w-[14px] h-[14px] px-0.5 text-[10px]`},m={lg:`h-2.5 w-2.5`,sm:`h-1.5 w-1.5`},h=(0,u.forwardRef)(function({count:e=0,max:t=99,kind:n=`count`,size:r=`lg`,variant:i=`danger`,children:a,showZero:o=!1,className:s,dataTestId:u,...h},g){let _=n===`dot`||e>0||o,v=a!=null&&a!==!1,y=_?(0,d.jsx)(`span`,{ref:g,"data-test-id":u,className:c(`inline-flex items-center justify-center rounded-full font-semibold ring-2 ring-white`,f[i],n===`count`?p[r]:m[r],v?`absolute -top-1 -right-1`:`static`,s),...h,children:n===`count`&&l(e,t)}):null;return v?(0,d.jsxs)(`span`,{className:`relative inline-flex`,children:[a,y]}):y});try{h.displayName=`NotificationBadge`,h.__docgenInfo={description:``,displayName:`NotificationBadge`,filePath:`/home/runner/work/design-system/design-system/src/components/NotificationBadge/NotificationBadge.tsx`,methods:[],props:{count:{defaultValue:{value:`0`},declarations:[{fileName:`design-system/src/components/NotificationBadge/NotificationBadge.types.ts`,name:`NotificationBadgeProps`}],description:``,name:`count`,parent:{fileName:`design-system/src/components/NotificationBadge/NotificationBadge.types.ts`,name:`NotificationBadgeProps`},required:!1,tags:{},type:{name:`number`}},max:{defaultValue:{value:`99`},declarations:[{fileName:`design-system/src/components/NotificationBadge/NotificationBadge.types.ts`,name:`NotificationBadgeProps`}],description:``,name:`max`,parent:{fileName:`design-system/src/components/NotificationBadge/NotificationBadge.types.ts`,name:`NotificationBadgeProps`},required:!1,tags:{},type:{name:`number`}},kind:{defaultValue:{value:`count`},declarations:[{fileName:`design-system/src/components/NotificationBadge/NotificationBadge.types.ts`,name:`NotificationBadgeProps`}],description:``,name:`kind`,parent:{fileName:`design-system/src/components/NotificationBadge/NotificationBadge.types.ts`,name:`NotificationBadgeProps`},required:!1,tags:{},type:{name:`enum`,raw:`NotificationBadgeKind`,value:[{value:`"dot"`},{value:`"count"`}]}},size:{defaultValue:{value:`lg`},declarations:[{fileName:`design-system/src/components/NotificationBadge/NotificationBadge.types.ts`,name:`NotificationBadgeProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/NotificationBadge/NotificationBadge.types.ts`,name:`NotificationBadgeProps`},required:!1,tags:{},type:{name:`enum`,raw:`NotificationBadgeSize`,value:[{value:`"sm"`},{value:`"lg"`}]}},variant:{defaultValue:{value:`danger`},declarations:[{fileName:`design-system/src/components/NotificationBadge/NotificationBadge.types.ts`,name:`NotificationBadgeProps`}],description:``,name:`variant`,parent:{fileName:`design-system/src/components/NotificationBadge/NotificationBadge.types.ts`,name:`NotificationBadgeProps`},required:!1,tags:{},type:{name:`enum`,raw:`NotificationBadgeVariant`,value:[{value:`"danger"`},{value:`"brand"`},{value:`"success"`},{value:`"warning"`},{value:`"info"`}]}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/components/NotificationBadge/NotificationBadge.types.ts`,name:`NotificationBadgeProps`}],description:`Element the badge overlays. Omit to render the badge as a standalone element.`,name:`children`,parent:{fileName:`design-system/src/components/NotificationBadge/NotificationBadge.types.ts`,name:`NotificationBadgeProps`},required:!1,tags:{},type:{name:`ReactNode`}},showZero:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/NotificationBadge/NotificationBadge.types.ts`,name:`NotificationBadgeProps`}],description:``,name:`showZero`,parent:{fileName:`design-system/src/components/NotificationBadge/NotificationBadge.types.ts`,name:`NotificationBadgeProps`},required:!1,tags:{},type:{name:`boolean`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),_=e({AllSizes:()=>N,AllVariants:()=>j,CustomClassName:()=>k,Dot:()=>x,DotOnIcon:()=>D,HiddenWhenZero:()=>T,OnIcon:()=>E,OverflowCount:()=>S,ShowZero:()=>w,SmallSize:()=>O,Standalone:()=>b,ThousandsCount:()=>C,__namedExportsOrder:()=>P,default:()=>y}),v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F=t((()=>{o(),g(),v=i(),y={title:`Components/NotificationBadge`,component:h,parameters:{layout:`centered`},argTypes:{kind:{control:`select`,options:[`count`,`dot`]},size:{control:`select`,options:[`lg`,`sm`]},variant:{control:`select`,options:[`brand`,`danger`,`success`,`warning`,`info`]}},args:{count:3,max:99,kind:`count`,size:`lg`,variant:`danger`,showZero:!1}},b={},x={args:{kind:`dot`}},S={name:`Overflow count (99+)`,args:{count:140}},C={name:`Thousands count (2K)`,args:{count:2400,max:9999}},w={args:{count:0,showZero:!0}},T={name:`Hidden when zero (default)`,args:{count:0}},E={name:`Overlaid on an icon`,args:{children:(0,v.jsx)(a,{className:`size-6 text-fg-secondary`})}},D={name:`Dot overlaid on an icon`,args:{kind:`dot`,children:(0,v.jsx)(a,{className:`size-6 text-fg-secondary`})}},O={args:{size:`sm`,children:(0,v.jsx)(a,{className:`size-5 text-fg-secondary`})}},k={name:`Overriding classes via className`,args:{className:`bg-purple-500 ring-offset-0`,children:(0,v.jsx)(a,{className:`size-6 text-fg-secondary`})}},A=[`brand`,`danger`,`success`,`warning`,`info`],j={render:e=>(0,v.jsx)(`div`,{className:`flex flex-wrap items-center gap-6`,children:A.map(t=>(0,v.jsx)(h,{...e,variant:t,children:(0,v.jsx)(a,{className:`size-6 text-fg-secondary`})},t))})},M=[`sm`,`lg`],N={render:e=>(0,v.jsx)(`div`,{className:`flex flex-wrap items-center gap-6`,children:M.map(t=>(0,v.jsx)(h,{...e,size:t,children:(0,v.jsx)(a,{className:`size-6 text-fg-secondary`})},t))})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    kind: 'dot'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Overflow count (99+)',
  args: {
    count: 140
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Thousands count (2K)',
  args: {
    count: 2400,
    max: 9999
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    count: 0,
    showZero: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Hidden when zero (default)',
  args: {
    count: 0
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Overlaid on an icon',
  args: {
    children: <Bell className="size-6 text-fg-secondary" />
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Dot overlaid on an icon',
  args: {
    kind: 'dot',
    children: <Bell className="size-6 text-fg-secondary" />
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: <Bell className="size-5 text-fg-secondary" />
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'bg-purple-500 ring-offset-0',
    children: <Bell className="size-6 text-fg-secondary" />
  }
}`,...k.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap items-center gap-6">
      {VARIANTS.map(variant => <NotificationBadge key={variant} {...args} variant={variant}>
          <Bell className="size-6 text-fg-secondary" />
        </NotificationBadge>)}
    </div>
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap items-center gap-6">
      {SIZES.map(size => <NotificationBadge key={size} {...args} size={size}>
          <Bell className="size-6 text-fg-secondary" />
        </NotificationBadge>)}
    </div>
}`,...N.parameters?.docs?.source}}},P=[`Standalone`,`Dot`,`OverflowCount`,`ThousandsCount`,`ShowZero`,`HiddenWhenZero`,`OnIcon`,`DotOnIcon`,`SmallSize`,`CustomClassName`,`AllVariants`,`AllSizes`]}));F();export{N as AllSizes,j as AllVariants,k as CustomClassName,x as Dot,D as DotOnIcon,T as HiddenWhenZero,E as OnIcon,S as OverflowCount,w as ShowZero,O as SmallSize,b as Standalone,C as ThousandsCount,P as __namedExportsOrder,y as default,F as n,_ as t};