import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-BgCNYJC5.js";import{n as a,t as o}from"./cn-CHNBg8JS.js";var s,c,l,u,d,f=t((()=>{s=n(r(),1),a(),c=i(),l={elevated:`bg-bg-default border border-border-default shadow-z1`,outlined:`bg-bg-default border border-border-default`,filled:`bg-bg-container border border-transparent`},u={none:`p-0`,sm:`p-4`,md:`p-5`,lg:`p-6`},d=(0,s.forwardRef)(function({variant:e=`outlined`,padding:t=`md`,header:n,footer:r,interactive:i=!1,className:a,children:s,dataTestId:d,...f},p){let m=n||r;return(0,c.jsxs)(`div`,{ref:p,"data-test-id":d,className:o(`rounded-xl overflow-hidden`,l[e],i&&`transition-all hover:border-brand-500 hover:shadow-z2`,!m&&u[t],a),...f,children:[n&&(0,c.jsx)(`div`,{className:o(`border-b border-border-subtle`,u[t]),children:n}),m?(0,c.jsx)(`div`,{className:u[t],children:s}):s,r&&(0,c.jsx)(`div`,{className:o(`border-t border-border-subtle`,u[t]),children:r})]})});try{d.displayName=`Card`,d.__docgenInfo={description:``,displayName:`Card`,filePath:`/home/runner/work/design-system/design-system/src/components/Card/Card.tsx`,methods:[],props:{variant:{defaultValue:{value:`outlined`},declarations:[{fileName:`design-system/src/components/Card/Card.types.ts`,name:`CardProps`}],description:``,name:`variant`,parent:{fileName:`design-system/src/components/Card/Card.types.ts`,name:`CardProps`},required:!1,tags:{},type:{name:`enum`,raw:`CardVariant`,value:[{value:`"filled"`},{value:`"elevated"`},{value:`"outlined"`}]}},padding:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/components/Card/Card.types.ts`,name:`CardProps`}],description:``,name:`padding`,parent:{fileName:`design-system/src/components/Card/Card.types.ts`,name:`CardProps`},required:!1,tags:{},type:{name:`enum`,raw:`CardPadding`,value:[{value:`"md"`},{value:`"sm"`},{value:`"none"`},{value:`"lg"`}]}},header:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Card/Card.types.ts`,name:`CardProps`}],description:`Renders a top slot inside the card, separated by a subtle divider.`,name:`header`,parent:{fileName:`design-system/src/components/Card/Card.types.ts`,name:`CardProps`},required:!1,tags:{},type:{name:`ReactNode`}},footer:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Card/Card.types.ts`,name:`CardProps`}],description:`Renders a bottom slot inside the card, separated by a subtle divider.`,name:`footer`,parent:{fileName:`design-system/src/components/Card/Card.types.ts`,name:`CardProps`},required:!1,tags:{},type:{name:`ReactNode`}},interactive:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/Card/Card.types.ts`,name:`CardProps`}],description:`When true, the whole card reacts to hover (border highlight + raised shadow).`,name:`interactive`,parent:{fileName:`design-system/src/components/Card/Card.types.ts`,name:`CardProps`},required:!1,tags:{},type:{name:`boolean`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),p=e({AllPaddings:()=>E,AllVariants:()=>T,CustomClassName:()=>S,Elevated:()=>_,Filled:()=>v,Interactive:()=>y,NoPadding:()=>x,Outlined:()=>g,WithHeaderAndFooter:()=>b,__namedExportsOrder:()=>D,default:()=>h}),m,h,g,_,v,y,b,x,S,C,w,T,E,D,O=t((()=>{f(),m=i(),h={title:`Components/Card`,component:d,parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:[`elevated`,`outlined`,`filled`]},padding:{control:`select`,options:[`none`,`sm`,`md`,`lg`]}},args:{variant:`outlined`,padding:`md`,interactive:!1,children:(0,m.jsx)(`p`,{className:`text-p-md text-fg-default`,children:`This is the card body content.`})},render:e=>(0,m.jsx)(`div`,{className:`w-80`,children:(0,m.jsx)(d,{...e})})},g={},_={args:{variant:`elevated`}},v={args:{variant:`filled`}},y={args:{interactive:!0}},b={args:{header:(0,m.jsx)(`h3`,{className:`text-h-xl text-fg-default`,children:`Card title`}),footer:(0,m.jsx)(`p`,{className:`text-label-md text-fg-secondary`,children:`Last updated 2 days ago`})}},x={args:{padding:`none`,children:(0,m.jsx)(`img`,{src:`https://placehold.co/320x160`,alt:``,className:`block w-full`})}},S={name:`Overriding classes via className`,args:{className:`border-brand-500 rounded-2xl`}},C=[`elevated`,`outlined`,`filled`],w=[`none`,`sm`,`md`,`lg`],T={render:e=>(0,m.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:C.map(t=>(0,m.jsx)(`div`,{className:`w-56`,children:(0,m.jsx)(d,{...e,variant:t,children:(0,m.jsx)(`p`,{className:`text-p-md text-fg-default capitalize`,children:t})})},t))})},E={render:e=>(0,m.jsx)(`div`,{className:`flex flex-wrap gap-4`,children:w.map(t=>(0,m.jsx)(`div`,{className:`w-56`,children:(0,m.jsx)(d,{...e,padding:t,children:(0,m.jsx)(`p`,{className:`text-p-md text-fg-default capitalize`,children:t})})},t))})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'elevated'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'filled'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    interactive: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    header: <h3 className="text-h-xl text-fg-default">Card title</h3>,
    footer: <p className="text-label-md text-fg-secondary">Last updated 2 days ago</p>
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'none',
    children: <img src="https://placehold.co/320x160" alt="" className="block w-full" />
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'border-brand-500 rounded-2xl'
  }
}`,...S.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4">
      {VARIANTS.map(variant => <div key={variant} className="w-56">
          <Card {...args} variant={variant}>
            <p className="text-p-md text-fg-default capitalize">{variant}</p>
          </Card>
        </div>)}
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-4">
      {PADDINGS.map(padding => <div key={padding} className="w-56">
          <Card {...args} padding={padding}>
            <p className="text-p-md text-fg-default capitalize">{padding}</p>
          </Card>
        </div>)}
    </div>
}`,...E.parameters?.docs?.source}}},D=[`Outlined`,`Elevated`,`Filled`,`Interactive`,`WithHeaderAndFooter`,`NoPadding`,`CustomClassName`,`AllVariants`,`AllPaddings`]}));O();export{E as AllPaddings,T as AllVariants,S as CustomClassName,_ as Elevated,v as Filled,y as Interactive,x as NoPadding,g as Outlined,b as WithHeaderAndFooter,D as __namedExportsOrder,h as default,O as n,p as t};