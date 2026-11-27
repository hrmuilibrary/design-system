import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{f as r,t as i}from"./iframe-8n3ISgnQ.js";import{t as a}from"./Button-t2v-CVuV.js";import{t as o}from"./Button-CnCIg2IU.js";import{n as s,t as c}from"./Popover-CD96w8bA.js";import{t as l}from"./Input-CDHN43ng.js";import{t as u}from"./Input-C-1FoKAb.js";var d=n({AllAligns:()=>S,AllSides:()=>b,Controlled:()=>w,InsideOverflowContainer:()=>E,NearViewportEdge:()=>T,NoArrow:()=>C,Primary:()=>h,WithInteractiveContent:()=>g,__namedExportsOrder:()=>D,default:()=>m}),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O=t((()=>{f=e(r(),1),o(),u(),s(),p=i(),m={title:`Components/Popover`,component:c,parameters:{layout:`centered`},argTypes:{side:{control:`select`,options:[`top`,`bottom`,`left`,`right`]},align:{control:`select`,options:[`start`,`center`,`end`]}}},h={render:e=>(0,p.jsx)(c,{...e,content:`Interactive content goes here.`,children:(0,p.jsx)(a,{variant:`secondary`,children:`Click me`})})},g={name:`With interactive content`,render:e=>(0,p.jsx)(c,{...e,autoFocus:!0,content:(0,p.jsxs)(`div`,{className:`flex w-48 flex-col gap-2`,children:[(0,p.jsx)(l,{placeholder:`Type here...`}),(0,p.jsx)(a,{size:`sm`,onClick:()=>{},children:`Submit`})]}),children:(0,p.jsx)(a,{variant:`secondary`,children:`Open form`})})},_=[`top`,`bottom`,`left`,`right`],v=Array.from({length:20},(e,t)=>`Item ${t+1}`),y=e=>(0,p.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,p.jsxs)(`p`,{className:`text-label-md font-semibold`,children:[`Side: `,e]}),(0,p.jsx)(`ul`,{className:`flex flex-col gap-1`,children:v.map(e=>(0,p.jsx)(`li`,{className:`text-p-sm text-fg-secondary`,children:e},e))})]}),b={render:e=>(0,p.jsx)(`div`,{className:`grid grid-cols-2 gap-16 p-16`,children:_.map(t=>(0,p.jsx)(c,{...e,side:t,closeOnScroll:!1,className:`max-h-54 overflow-y-auto`,content:y(t),children:(0,p.jsx)(a,{variant:`secondary`,children:t})},t))})},x=[`start`,`center`,`end`],S={render:e=>(0,p.jsx)(`div`,{className:`flex gap-8 p-16`,children:x.map(t=>(0,p.jsx)(c,{...e,align:t,content:`Align: ${t}`,children:(0,p.jsx)(a,{variant:`secondary`,children:t})},t))})},C={args:{showArrow:!1},render:e=>(0,p.jsx)(c,{...e,content:`No arrow on this one.`,children:(0,p.jsx)(a,{variant:`secondary`,children:`Click me`})})},w={render:e=>{function t(){let[t,n]=(0,f.useState)(!1);return(0,p.jsx)(c,{...e,open:t,onOpenChange:n,content:`Controlled popover`,children:(0,p.jsx)(a,{variant:`secondary`,children:t?`Close`:`Open`})})}return(0,p.jsx)(t,{})}},T={name:`Near the viewport edge (auto-flip)`,render:e=>(0,p.jsx)(`div`,{style:{marginTop:`75vh`},children:(0,p.jsx)(c,{...e,content:`This flips to the top since there's no room below.`,children:(0,p.jsx)(a,{variant:`secondary`,children:`Near the bottom`})})})},E={name:`Inside an overflow-auto container`,render:e=>(0,p.jsx)(`div`,{className:`h-32 w-64 overflow-auto border border-border-default p-4`,children:(0,p.jsx)(c,{...e,content:`This should not be clipped by the container.`,children:(0,p.jsx)(a,{variant:`secondary`,children:`Open`})})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Popover {...args} content="Interactive content goes here.">
      <Button variant="secondary">Click me</Button>
    </Popover>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'With interactive content',
  render: args => <Popover {...args} autoFocus content={<div className="flex w-48 flex-col gap-2">
          <Input placeholder="Type here..." />
          <Button size="sm" onClick={() => {}}>
            Submit
          </Button>
        </div>}>
      <Button variant="secondary">Open form</Button>
    </Popover>
}`,...g.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div className="grid grid-cols-2 gap-16 p-16">
      {SIDES.map(side => <Popover key={side} {...args} side={side} closeOnScroll={false} className="max-h-54 overflow-y-auto" content={scrollableContent(side)}>
          <Button variant="secondary">{side}</Button>
        </Popover>)}
    </div>
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-8 p-16">
      {ALIGNS.map(align => <Popover key={align} {...args} align={align} content={\`Align: \${align}\`}>
          <Button variant="secondary">{align}</Button>
        </Popover>)}
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    showArrow: false
  },
  render: args => <Popover {...args} content="No arrow on this one.">
      <Button variant="secondary">Click me</Button>
    </Popover>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    function ControlledExample() {
      const [open, setOpen] = useState(false);
      return <Popover {...args} open={open} onOpenChange={setOpen} content="Controlled popover">
          <Button variant="secondary">{open ? 'Close' : 'Open'}</Button>
        </Popover>;
    }
    return <ControlledExample />;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Near the viewport edge (auto-flip)',
  render: args => <div style={{
    marginTop: '75vh'
  }}>
      <Popover {...args} content="This flips to the top since there's no room below.">
        <Button variant="secondary">Near the bottom</Button>
      </Popover>
    </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Inside an overflow-auto container',
  render: args => <div className="h-32 w-64 overflow-auto border border-border-default p-4">
      <Popover {...args} content="This should not be clipped by the container.">
        <Button variant="secondary">Open</Button>
      </Popover>
    </div>
}`,...E.parameters?.docs?.source}}},D=[`Primary`,`WithInteractiveContent`,`AllSides`,`AllAligns`,`NoArrow`,`Controlled`,`NearViewportEdge`,`InsideOverflowContainer`]}));O();export{S as AllAligns,b as AllSides,w as Controlled,E as InsideOverflowContainer,T as NearViewportEdge,C as NoArrow,h as Primary,g as WithInteractiveContent,D as __namedExportsOrder,m as default,O as n,d as t};