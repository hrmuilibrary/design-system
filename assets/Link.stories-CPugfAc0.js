import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./iframe-DUGsDtVw.js";import{cn as r,gt as i,t as a}from"./lucide-react-Bec3HOx_.js";import{n as o,t as s}from"./Link-DSnGno4S.js";var c=e({AllColors:()=>y,AlwaysUnderlined:()=>f,CustomClassName:()=>b,ExternalWithRightIcon:()=>g,InsideBodyText:()=>m,NoUnderline:()=>p,Primary:()=>d,Truncated:()=>_,WithLeftIcon:()=>h,__namedExportsOrder:()=>x,default:()=>u}),l,u,d,f,p,m,h,g,_,v,y,b,x,S=t((()=>{a(),o(),l=n(),u={title:`Components/Link`,component:s,parameters:{layout:`centered`},argTypes:{color:{control:`select`,options:[`default`,`secondary`,`tertiary`,`disabled`,`inverse`,`brand`,`info`,`success`,`warning`,`danger`]},underline:{control:`select`,options:[`hover`,`always`,`none`]}},args:{href:`#`,children:`Visit the docs`,color:`brand`,underline:`hover`}},d={},f={args:{underline:`always`}},p={args:{underline:`none`}},m={name:`Inside body text`,render:e=>(0,l.jsxs)(`p`,{className:`text-p-std text-fg-default max-w-sm`,children:[`Read our `,(0,l.jsx)(s,{...e,children:`terms of service`}),` before continuing — it only takes a minute.`]})},h={args:{leftIcon:(0,l.jsx)(r,{className:`size-3.5`}),children:`Back to dashboard`}},g={name:`External link (target="_blank")`,args:{href:`https://example.com`,target:`_blank`,rightIcon:(0,l.jsx)(i,{className:`size-3.5`}),children:`View on example.com`}},_={args:{truncate:!0,children:`This is a very long link label that will be truncated with an ellipsis`},decorators:[e=>(0,l.jsx)(`div`,{className:`w-48`,children:(0,l.jsx)(e,{})})]},v=[`default`,`secondary`,`tertiary`,`brand`,`info`,`success`,`warning`,`danger`],y={render:e=>(0,l.jsx)(`div`,{className:`flex flex-col gap-2`,children:v.map(t=>(0,l.jsx)(s,{...e,color:t,children:t},t))})},b={name:`Overriding classes via className`,args:{className:`text-h-xs font-bold`}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    underline: 'always'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    underline: 'none'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Inside body text',
  render: args => <p className="text-p-std text-fg-default max-w-sm">
      Read our <Link {...args}>terms of service</Link> before continuing — it only takes a minute.
    </p>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    leftIcon: <ArrowRight className="size-3.5" />,
    children: 'Back to dashboard'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'External link (target="_blank")',
  args: {
    href: 'https://example.com',
    target: '_blank',
    rightIcon: <ExternalLink className="size-3.5" />,
    children: 'View on example.com'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    truncate: true,
    children: 'This is a very long link label that will be truncated with an ellipsis'
  },
  decorators: [Story => <div className="w-48">
        <Story />
      </div>]
}`,..._.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-2">
      {COLORS.map(color => <Link key={color} {...args} color={color}>
          {color}
        </Link>)}
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'text-h-xs font-bold'
  }
}`,...b.parameters?.docs?.source}}},x=[`Primary`,`AlwaysUnderlined`,`NoUnderline`,`InsideBodyText`,`WithLeftIcon`,`ExternalWithRightIcon`,`Truncated`,`AllColors`,`CustomClassName`]}));S();export{y as AllColors,f as AlwaysUnderlined,b as CustomClassName,g as ExternalWithRightIcon,m as InsideBodyText,p as NoUnderline,d as Primary,_ as Truncated,h as WithLeftIcon,x as __namedExportsOrder,u as default,S as n,c as t};