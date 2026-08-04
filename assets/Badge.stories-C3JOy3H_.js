import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-BgCNYJC5.js";import{f as a,n as o,t as s}from"./lucide-react-D8xGtw7t.js";import{n as c,t as l}from"./cn-CHNBg8JS.js";var u,d,f,p,m,h,g,_=t((()=>{u=n(r(),1),s(),c(),d=i(),f={lg:`h-7 px-2.5 text-p-std gap-1.5 rounded-md`,md:`h-6 px-2 text-p-sm gap-1 rounded-md`,sm:`h-5 px-1.5 text-p-sm gap-1 rounded`,xs:`h-4 px-1 text-p-xs gap-0.5 rounded`},p={neutral:`bg-bg-subtle text-fg-default border border-border-default`,brand:`bg-brand-20 text-brand-800 border border-brand-100`,success:`bg-green-50 text-green-800 border border-green-100`,warning:`bg-yellow-50 text-yellow-900 border border-yellow-100`,danger:`bg-red-50 text-red-800 border border-red-100`,info:`bg-blue-50 text-blue-800 border border-blue-100`,privacy:`bg-purple-50 text-purple-800 border border-purple-100`},m={neutral:`bg-transparent text-fg-default border border-border-strong`,brand:`bg-transparent text-brand-700 border border-brand-500`,success:`bg-transparent text-green-700 border border-green-500`,warning:`bg-transparent text-yellow-800 border border-yellow-600`,danger:`bg-transparent text-red-700 border border-red-500`,info:`bg-transparent text-blue-700 border border-blue-500`,privacy:`bg-transparent text-purple-700 border border-purple-500`},h={neutral:`bg-fg-default text-bg-default`,brand:`bg-brand-500 text-white`,success:`bg-green-600 text-white`,warning:`bg-yellow-600 text-gray-900 dark:text-gray-900`,danger:`bg-red-700 text-white`,info:`bg-blue-600 text-white`,privacy:`bg-purple-500 text-white`},g=(0,u.forwardRef)(function({variant:e=`neutral`,appearance:t=`filled`,size:n=`md`,leftIcon:r,rightIcon:i,onDismiss:a,className:s,children:c,dataTestId:u,...g},_){let v=t===`filled`?p[e]:t===`outline`?m[e]:h[e];return(0,d.jsxs)(`span`,{ref:_,"data-test-id":u,className:l(`inline-flex items-center font-medium whitespace-nowrap select-none`,f[n],v,s),...g,children:[r&&(0,d.jsx)(`span`,{className:`inline-flex shrink-0`,children:r}),c,i&&!a&&(0,d.jsx)(`span`,{className:`inline-flex shrink-0`,children:i}),a&&(0,d.jsx)(`button`,{type:`button`,onClick:a,"aria-label":`Dismiss`,className:`inline-flex shrink-0 -mr-0.5 rounded-full p-0.5 hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300`,children:(0,d.jsx)(o,{className:`h-3 w-3`})})]})});try{g.displayName=`Badge`,g.__docgenInfo={description:``,displayName:`Badge`,filePath:`/home/runner/work/design-system/design-system/src/components/Badge/Badge.tsx`,methods:[],props:{variant:{defaultValue:{value:`neutral`},declarations:[{fileName:`design-system/src/components/Badge/Badge.types.ts`,name:`BadgeProps`}],description:``,name:`variant`,parent:{fileName:`design-system/src/components/Badge/Badge.types.ts`,name:`BadgeProps`},required:!1,tags:{},type:{name:`enum`,raw:`BadgeVariant`,value:[{value:`"danger"`},{value:`"brand"`},{value:`"info"`},{value:`"success"`},{value:`"warning"`},{value:`"neutral"`},{value:`"privacy"`}]}},appearance:{defaultValue:{value:`filled`},declarations:[{fileName:`design-system/src/components/Badge/Badge.types.ts`,name:`BadgeProps`}],description:``,name:`appearance`,parent:{fileName:`design-system/src/components/Badge/Badge.types.ts`,name:`BadgeProps`},required:!1,tags:{},type:{name:`enum`,raw:`BadgeStyle`,value:[{value:`"filled"`},{value:`"outline"`},{value:`"accent"`}]}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/components/Badge/Badge.types.ts`,name:`BadgeProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/Badge/Badge.types.ts`,name:`BadgeProps`},required:!1,tags:{},type:{name:`enum`,raw:`BadgeSize`,value:[{value:`"md"`},{value:`"sm"`},{value:`"lg"`},{value:`"xs"`}]}},leftIcon:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Badge/Badge.types.ts`,name:`BadgeProps`}],description:``,name:`leftIcon`,parent:{fileName:`design-system/src/components/Badge/Badge.types.ts`,name:`BadgeProps`},required:!1,tags:{},type:{name:`ReactNode`}},rightIcon:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Badge/Badge.types.ts`,name:`BadgeProps`}],description:``,name:`rightIcon`,parent:{fileName:`design-system/src/components/Badge/Badge.types.ts`,name:`BadgeProps`},required:!1,tags:{},type:{name:`ReactNode`}},onDismiss:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Badge/Badge.types.ts`,name:`BadgeProps`}],description:"Renders a trailing dismiss button (replacing `rightIcon`) that calls this on click.",name:`onDismiss`,parent:{fileName:`design-system/src/components/Badge/Badge.types.ts`,name:`BadgeProps`},required:!1,tags:{},type:{name:`(() => void)`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),v=e({Accent:()=>C,AllAppearances:()=>M,AllSizes:()=>N,AllVariants:()=>j,CustomClassName:()=>D,Dismissible:()=>E,Filled:()=>x,Outline:()=>S,WithLeftIcon:()=>w,WithRightIcon:()=>T,__namedExportsOrder:()=>P,default:()=>b}),y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F=t((()=>{s(),_(),y=i(),b={title:`Components/Badge`,component:g,parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:[`neutral`,`brand`,`success`,`warning`,`danger`,`info`,`privacy`]},appearance:{control:`select`,options:[`filled`,`outline`,`accent`]},size:{control:`select`,options:[`lg`,`md`,`sm`,`xs`]}},args:{children:`Badge`,variant:`neutral`,appearance:`filled`,size:`md`}},x={},S={args:{appearance:`outline`}},C={args:{appearance:`accent`}},w={args:{leftIcon:(0,y.jsx)(a,{className:`size-3`}),children:`Featured`}},T={args:{rightIcon:(0,y.jsx)(a,{className:`size-3`}),children:`Featured`}},E={args:{children:`Removable`,onDismiss:()=>{}}},D={name:`Overriding classes via className`,args:{className:`bg-purple-100 text-purple-900 border-purple-300 rounded-full`,children:`Custom`}},O=[`neutral`,`brand`,`success`,`warning`,`danger`,`info`,`privacy`],k=[`filled`,`outline`,`accent`],A=[`xs`,`sm`,`md`,`lg`],j={render:e=>(0,y.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:O.map(t=>(0,y.jsx)(g,{...e,variant:t,children:t},t))})},M={render:e=>(0,y.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:k.map(t=>(0,y.jsx)(g,{...e,appearance:t,children:t},t))})},N={render:e=>(0,y.jsx)(`div`,{className:`flex flex-wrap items-center gap-2`,children:A.map(t=>(0,y.jsx)(g,{...e,size:t,children:t},t))})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'outline'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    appearance: 'accent'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    leftIcon: <Star className="size-3" />,
    children: 'Featured'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    rightIcon: <Star className="size-3" />,
    children: 'Featured'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Removable',
    onDismiss: () => {}
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'bg-purple-100 text-purple-900 border-purple-300 rounded-full',
    children: 'Custom'
  }
}`,...D.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-2">
      {VARIANTS.map(variant => <Badge key={variant} {...args} variant={variant}>
          {variant}
        </Badge>)}
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-2">
      {APPEARANCES.map(appearance => <Badge key={appearance} {...args} appearance={appearance}>
          {appearance}
        </Badge>)}
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap items-center gap-2">
      {SIZES.map(size => <Badge key={size} {...args} size={size}>
          {size}
        </Badge>)}
    </div>
}`,...N.parameters?.docs?.source}}},P=[`Filled`,`Outline`,`Accent`,`WithLeftIcon`,`WithRightIcon`,`Dismissible`,`CustomClassName`,`AllVariants`,`AllAppearances`,`AllSizes`]}));F();export{C as Accent,M as AllAppearances,N as AllSizes,j as AllVariants,D as CustomClassName,E as Dismissible,x as Filled,S as Outline,w as WithLeftIcon,T as WithRightIcon,P as __namedExportsOrder,b as default,F as n,v as t};