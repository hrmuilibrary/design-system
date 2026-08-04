import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-BgCNYJC5.js";import{n as a,t as o}from"./cn-CHNBg8JS.js";import{t as s}from"./Button-pCbQguxX.js";import{t as c}from"./Button-CJ5ck7Yc.js";var l,u,d,f,p,m,h=t((()=>{l=n(r(),1),a(),u=i(),d={lg:`px-3 py-2 text-p-std`,sm:`px-2 py-1 text-p-sm`},f={top:`bottom-full left-1/2 -translate-x-1/2 mb-2`,bottom:`top-full left-1/2 -translate-x-1/2 mt-2`,left:`right-full top-1/2 -translate-y-1/2 mr-2`,right:`left-full top-1/2 -translate-y-1/2 ml-2`},p={top:`top-full left-1/2 -translate-x-1/2 border-t-fg-default border-x-transparent border-b-transparent`,bottom:`bottom-full left-1/2 -translate-x-1/2 border-b-fg-default border-x-transparent border-t-transparent`,left:`left-full top-1/2 -translate-y-1/2 border-l-fg-default border-y-transparent border-r-transparent`,right:`right-full top-1/2 -translate-y-1/2 border-r-fg-default border-y-transparent border-l-transparent`},m=(0,l.forwardRef)(function({content:e,children:t,side:n=`top`,size:r=`sm`,delay:i=150,className:a,dataTestId:s},c){let[m,h]=(0,l.useState)(!1),g=(0,l.useRef)(null),_=(0,l.useId)(),v=()=>{g.current&&clearTimeout(g.current),g.current=setTimeout(()=>h(!0),i)},y=()=>{g.current&&clearTimeout(g.current),h(!1)};if(!(0,l.isValidElement)(t))return t;let b=t.props??{};return(0,u.jsxs)(`span`,{ref:c,"data-test-id":s,className:`relative inline-flex`,children:[(0,l.cloneElement)(t,{onMouseEnter:v,onMouseLeave:y,onFocus:v,onBlur:y,"aria-describedby":m?_:b[`aria-describedby`]}),m&&(0,u.jsxs)(`span`,{role:`tooltip`,id:_,className:o(`absolute z-50 whitespace-nowrap rounded-md bg-fg-default text-bg-default shadow-z3 pointer-events-none select-none`,d[r],f[n],a),children:[e,(0,u.jsx)(`span`,{"aria-hidden":!0,className:o(`absolute h-0 w-0 border-4`,p[n])})]})]})});try{m.displayName=`Tooltip`,m.__docgenInfo={description:``,displayName:`Tooltip`,filePath:`/home/runner/work/design-system/design-system/src/components/Tooltip/Tooltip.tsx`,methods:[],props:{content:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Tooltip/Tooltip.types.ts`,name:`TooltipProps`}],description:`Tooltip bubble content.`,name:`content`,parent:{fileName:`design-system/src/components/Tooltip/Tooltip.types.ts`,name:`TooltipProps`},required:!0,tags:{},type:{name:`ReactNode`}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Tooltip/Tooltip.types.ts`,name:`TooltipProps`}],description:`Single trigger element the tooltip attaches its hover/focus handlers to.`,name:`children`,parent:{fileName:`design-system/src/components/Tooltip/Tooltip.types.ts`,name:`TooltipProps`},required:!0,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}},side:{defaultValue:{value:`top`},declarations:[{fileName:`design-system/src/components/Tooltip/Tooltip.types.ts`,name:`TooltipProps`}],description:``,name:`side`,parent:{fileName:`design-system/src/components/Tooltip/Tooltip.types.ts`,name:`TooltipProps`},required:!1,tags:{},type:{name:`enum`,raw:`TooltipSide`,value:[{value:`"right"`},{value:`"left"`},{value:`"top"`},{value:`"bottom"`}]}},size:{defaultValue:{value:`sm`},declarations:[{fileName:`design-system/src/components/Tooltip/Tooltip.types.ts`,name:`TooltipProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/Tooltip/Tooltip.types.ts`,name:`TooltipProps`},required:!1,tags:{},type:{name:`enum`,raw:`TooltipSize`,value:[{value:`"sm"`},{value:`"lg"`}]}},delay:{defaultValue:{value:`150`},declarations:[{fileName:`design-system/src/components/Tooltip/Tooltip.types.ts`,name:`TooltipProps`}],description:`Delay in ms before the tooltip opens on hover/focus.`,name:`delay`,parent:{fileName:`design-system/src/components/Tooltip/Tooltip.types.ts`,name:`TooltipProps`},required:!1,tags:{},type:{name:`number`}},className:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Tooltip/Tooltip.types.ts`,name:`TooltipProps`}],description:``,name:`className`,parent:{fileName:`design-system/src/components/Tooltip/Tooltip.types.ts`,name:`TooltipProps`},required:!1,tags:{},type:{name:`string`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),g=e({AllSides:()=>D,Bottom:()=>x,CustomClassName:()=>T,LargeSize:()=>w,Left:()=>S,Primary:()=>y,Right:()=>C,Top:()=>b,__namedExportsOrder:()=>O,default:()=>v}),_,v,y,b,x,S,C,w,T,E,D,O,k=t((()=>{c(),h(),_=i(),v={title:`Components/Tooltip`,component:m,parameters:{layout:`centered`},argTypes:{side:{control:`select`,options:[`top`,`bottom`,`left`,`right`]},size:{control:`select`,options:[`lg`,`sm`]},delay:{control:`number`}},args:{content:`Tooltip content`,side:`top`,size:`sm`,delay:150}},y={render:e=>(0,_.jsx)(m,{...e,children:(0,_.jsx)(s,{children:`Hover me`})})},b={args:{side:`top`},render:e=>(0,_.jsx)(m,{...e,children:(0,_.jsx)(s,{children:`Top`})})},x={args:{side:`bottom`},render:e=>(0,_.jsx)(m,{...e,children:(0,_.jsx)(s,{children:`Bottom`})})},S={args:{side:`left`},render:e=>(0,_.jsx)(m,{...e,children:(0,_.jsx)(s,{children:`Left`})})},C={args:{side:`right`},render:e=>(0,_.jsx)(m,{...e,children:(0,_.jsx)(s,{children:`Right`})})},w={args:{size:`lg`,content:`A larger tooltip bubble`},render:e=>(0,_.jsx)(m,{...e,children:(0,_.jsx)(s,{children:`Large tooltip`})})},T={name:`Overriding classes via className`,args:{className:`bg-brand-500 text-white`,content:`Branded tooltip`},render:e=>(0,_.jsx)(m,{...e,children:(0,_.jsx)(s,{children:`Hover me`})})},E=[`top`,`bottom`,`left`,`right`],D={render:e=>(0,_.jsx)(`div`,{className:`flex flex-wrap items-center gap-12 p-12`,children:E.map(t=>(0,_.jsx)(m,{...e,side:t,children:(0,_.jsx)(s,{children:t})},t))})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'top'
  },
  render: args => <Tooltip {...args}>
      <Button>Top</Button>
    </Tooltip>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'bottom'
  },
  render: args => <Tooltip {...args}>
      <Button>Bottom</Button>
    </Tooltip>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'left'
  },
  render: args => <Tooltip {...args}>
      <Button>Left</Button>
    </Tooltip>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'right'
  },
  render: args => <Tooltip {...args}>
      <Button>Right</Button>
    </Tooltip>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    content: 'A larger tooltip bubble'
  },
  render: args => <Tooltip {...args}>
      <Button>Large tooltip</Button>
    </Tooltip>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'bg-brand-500 text-white',
    content: 'Branded tooltip'
  },
  render: args => <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap items-center gap-12 p-12">
      {SIDES.map(side => <Tooltip key={side} {...args} side={side}>
          <Button>{side}</Button>
        </Tooltip>)}
    </div>
}`,...D.parameters?.docs?.source}}},O=[`Primary`,`Top`,`Bottom`,`Left`,`Right`,`LargeSize`,`CustomClassName`,`AllSides`]}));k();export{D as AllSides,x as Bottom,T as CustomClassName,w as LargeSize,S as Left,y as Primary,C as Right,b as Top,O as __namedExportsOrder,v as default,k as n,g as t};