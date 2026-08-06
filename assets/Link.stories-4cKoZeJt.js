import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-CwcXNU-m.js";import{Jt as a,ct as o,t as s}from"./lucide-react-lf4oV1Yb.js";import{n as c,t as l}from"./cn-BNhCYuha.js";import{t as u}from"./Text-CR9xwoNi.js";import{t as d}from"./Text-zTkDKwT0.js";var f,p,m,h=t((()=>{f=n(r(),1),c(),d(),p=i(),m=(0,f.forwardRef)(function({variant:e=`p-std`,weight:t,color:n=`brand`,underline:r=`hover`,leftIcon:i,rightIcon:a,truncate:o,className:s,children:c,dataTestId:d,target:f,rel:m,...h},g){let _={...h,target:f,rel:m??(f===`_blank`?`noopener noreferrer`:void 0)};return(0,p.jsxs)(u,{as:`a`,ref:g,variant:e,weight:t,color:n,truncate:o,dataTestId:d,className:l(`inline-flex items-center gap-1 rounded-sm outline-none transition-colors`,`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-1`,r===`always`&&`underline`,r===`hover`&&`hover:underline`,s),..._,children:[i&&(0,p.jsx)(`span`,{className:`inline-flex shrink-0`,children:i}),c,a&&(0,p.jsx)(`span`,{className:`inline-flex shrink-0`,children:a})]})});try{m.displayName=`Link`,m.__docgenInfo={description:``,displayName:`Link`,filePath:`/home/runner/work/design-system/design-system/src/components/Link/Link.tsx`,methods:[],props:{variant:{defaultValue:{value:`p-std`},declarations:[{fileName:`design-system/src/components/Link/Link.types.ts`,name:`LinkProps`}],description:"Typography variant, same scale as `Text`. Default `'p-std'`.",name:`variant`,parent:{fileName:`design-system/src/components/Link/Link.types.ts`,name:`LinkProps`},required:!1,tags:{},type:{name:`enum`,raw:`TextVariant`,value:[{value:`"h-xl"`},{value:`"h-lg"`},{value:`"h-md"`},{value:`"h-std"`},{value:`"h-sm"`},{value:`"h-xs"`},{value:`"p-lg"`},{value:`"p-md"`},{value:`"p-std"`},{value:`"p-sm"`},{value:`"p-xs"`},{value:`"label-lg"`},{value:`"label-md"`},{value:`"label-std"`},{value:`"label-sm"`},{value:`"label-xs"`},{value:`"label-xxs"`}]}},weight:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Link/Link.types.ts`,name:`LinkProps`}],description:``,name:`weight`,parent:{fileName:`design-system/src/components/Link/Link.types.ts`,name:`LinkProps`},required:!1,tags:{},type:{name:`enum`,raw:`TextWeight`,value:[{value:`"normal"`},{value:`"medium"`},{value:`"semibold"`},{value:`"bold"`}]}},color:{defaultValue:{value:`brand`},declarations:[{fileName:`design-system/src/components/Link/Link.types.ts`,name:`LinkProps`}],description:"Semantic text color, same scale as `Text`. Default `'brand'`.",name:`color`,parent:{fileName:`design-system/src/components/Link/Link.types.ts`,name:`LinkProps`},required:!1,tags:{},type:{name:`enum`,raw:`TextColor`,value:[{value:`"disabled"`},{value:`"default"`},{value:`"brand"`},{value:`"warning"`},{value:`"info"`},{value:`"success"`},{value:`"danger"`},{value:`"secondary"`},{value:`"tertiary"`},{value:`"inverse"`}]}},underline:{defaultValue:{value:`hover`},declarations:[{fileName:`design-system/src/components/Link/Link.types.ts`,name:`LinkProps`}],description:``,name:`underline`,parent:{fileName:`design-system/src/components/Link/Link.types.ts`,name:`LinkProps`},required:!1,tags:{},type:{name:`enum`,raw:`LinkUnderline`,value:[{value:`"none"`},{value:`"hover"`},{value:`"always"`}]}},leftIcon:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Link/Link.types.ts`,name:`LinkProps`}],description:``,name:`leftIcon`,parent:{fileName:`design-system/src/components/Link/Link.types.ts`,name:`LinkProps`},required:!1,tags:{},type:{name:`ReactNode`}},rightIcon:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Link/Link.types.ts`,name:`LinkProps`}],description:``,name:`rightIcon`,parent:{fileName:`design-system/src/components/Link/Link.types.ts`,name:`LinkProps`},required:!1,tags:{},type:{name:`ReactNode`}},truncate:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Link/Link.types.ts`,name:`LinkProps`}],description:``,name:`truncate`,parent:{fileName:`design-system/src/components/Link/Link.types.ts`,name:`LinkProps`},required:!1,tags:{},type:{name:`boolean`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),g=e({AllColors:()=>D,AlwaysUnderlined:()=>b,CustomClassName:()=>O,ExternalWithRightIcon:()=>w,InsideBodyText:()=>S,NoUnderline:()=>x,Primary:()=>y,Truncated:()=>T,WithLeftIcon:()=>C,__namedExportsOrder:()=>k,default:()=>v}),_,v,y,b,x,S,C,w,T,E,D,O,k,A=t((()=>{s(),h(),_=i(),v={title:`Components/Link`,component:m,parameters:{layout:`centered`},argTypes:{color:{control:`select`,options:[`default`,`secondary`,`tertiary`,`disabled`,`inverse`,`brand`,`info`,`success`,`warning`,`danger`]},underline:{control:`select`,options:[`hover`,`always`,`none`]}},args:{href:`#`,children:`Visit the docs`,color:`brand`,underline:`hover`}},y={},b={args:{underline:`always`}},x={args:{underline:`none`}},S={name:`Inside body text`,render:e=>(0,_.jsxs)(`p`,{className:`text-p-std text-fg-default max-w-sm`,children:[`Read our `,(0,_.jsx)(m,{...e,children:`terms of service`}),` before continuing — it only takes a minute.`]})},C={args:{leftIcon:(0,_.jsx)(a,{className:`size-3.5`}),children:`Back to dashboard`}},w={name:`External link (target="_blank")`,args:{href:`https://example.com`,target:`_blank`,rightIcon:(0,_.jsx)(o,{className:`size-3.5`}),children:`View on example.com`}},T={args:{truncate:!0,children:`This is a very long link label that will be truncated with an ellipsis`},decorators:[e=>(0,_.jsx)(`div`,{className:`w-48`,children:(0,_.jsx)(e,{})})]},E=[`default`,`secondary`,`tertiary`,`brand`,`info`,`success`,`warning`,`danger`],D={render:e=>(0,_.jsx)(`div`,{className:`flex flex-col gap-2`,children:E.map(t=>(0,_.jsx)(m,{...e,color:t,children:t},t))})},O={name:`Overriding classes via className`,args:{className:`text-h-xs font-bold`}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    underline: 'always'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    underline: 'none'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Inside body text',
  render: args => <p className="text-p-std text-fg-default max-w-sm">
      Read our <Link {...args}>terms of service</Link> before continuing — it only takes a minute.
    </p>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    leftIcon: <ArrowRight className="size-3.5" />,
    children: 'Back to dashboard'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'External link (target="_blank")',
  args: {
    href: 'https://example.com',
    target: '_blank',
    rightIcon: <ExternalLink className="size-3.5" />,
    children: 'View on example.com'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    truncate: true,
    children: 'This is a very long link label that will be truncated with an ellipsis'
  },
  decorators: [Story => <div className="w-48">
        <Story />
      </div>]
}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-2">
      {COLORS.map(color => <Link key={color} {...args} color={color}>
          {color}
        </Link>)}
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'text-h-xs font-bold'
  }
}`,...O.parameters?.docs?.source}}},k=[`Primary`,`AlwaysUnderlined`,`NoUnderline`,`InsideBodyText`,`WithLeftIcon`,`ExternalWithRightIcon`,`Truncated`,`AllColors`,`CustomClassName`]}));A();export{D as AllColors,b as AlwaysUnderlined,O as CustomClassName,w as ExternalWithRightIcon,S as InsideBodyText,x as NoUnderline,y as Primary,T as Truncated,C as WithLeftIcon,k as __namedExportsOrder,v as default,A as n,g as t};