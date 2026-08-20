import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-DIoW-LAR.js";import{t as a}from"./Button-BEX6-HYy.js";import{t as o}from"./Button-5ohjBAXt.js";import{n as s,t as c}from"./Popover-8WR9s95h.js";import{t as l}from"./Input-B0w6o6tP.js";import{t as u}from"./Input-DdLWXHSR.js";var d=e({AllAligns:()=>b,AllSides:()=>v,Controlled:()=>S,InsideOverflowContainer:()=>w,NearViewportEdge:()=>C,NoArrow:()=>x,Primary:()=>h,WithInteractiveContent:()=>g,__namedExportsOrder:()=>T,default:()=>m}),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E=t((()=>{f=n(r(),1),o(),u(),s(),p=i(),m={title:`Components/Popover`,component:c,parameters:{layout:`centered`},argTypes:{side:{control:`select`,options:[`top`,`bottom`,`left`,`right`]},align:{control:`select`,options:[`start`,`center`,`end`]}}},h={render:e=>(0,p.jsx)(c,{...e,content:`Interactive content goes here.`,children:(0,p.jsx)(a,{variant:`secondary`,children:`Click me`})})},g={name:`With interactive content`,render:e=>(0,p.jsx)(c,{...e,autoFocus:!0,content:(0,p.jsxs)(`div`,{className:`flex w-48 flex-col gap-2`,children:[(0,p.jsx)(l,{placeholder:`Type here...`}),(0,p.jsx)(a,{size:`sm`,onClick:()=>{},children:`Submit`})]}),children:(0,p.jsx)(a,{variant:`secondary`,children:`Open form`})})},_=[`top`,`bottom`,`left`,`right`],v={render:e=>(0,p.jsx)(`div`,{className:`grid grid-cols-2 gap-16 p-16`,children:_.map(t=>(0,p.jsx)(c,{...e,side:t,content:`Side: ${t}`,children:(0,p.jsx)(a,{variant:`secondary`,children:t})},t))})},y=[`start`,`center`,`end`],b={render:e=>(0,p.jsx)(`div`,{className:`flex gap-8 p-16`,children:y.map(t=>(0,p.jsx)(c,{...e,align:t,content:`Align: ${t}`,children:(0,p.jsx)(a,{variant:`secondary`,children:t})},t))})},x={args:{showArrow:!1},render:e=>(0,p.jsx)(c,{...e,content:`No arrow on this one.`,children:(0,p.jsx)(a,{variant:`secondary`,children:`Click me`})})},S={render:e=>{function t(){let[t,n]=(0,f.useState)(!1);return(0,p.jsx)(c,{...e,open:t,onOpenChange:n,content:`Controlled popover`,children:(0,p.jsx)(a,{variant:`secondary`,children:t?`Close`:`Open`})})}return(0,p.jsx)(t,{})}},C={name:`Near the viewport edge (auto-flip)`,render:e=>(0,p.jsx)(`div`,{style:{marginTop:`75vh`},children:(0,p.jsx)(c,{...e,content:`This flips to the top since there's no room below.`,children:(0,p.jsx)(a,{variant:`secondary`,children:`Near the bottom`})})})},w={name:`Inside an overflow-auto container`,render:e=>(0,p.jsx)(`div`,{className:`h-32 w-64 overflow-auto border border-border-default p-4`,children:(0,p.jsx)(c,{...e,content:`This should not be clipped by the container.`,children:(0,p.jsx)(a,{variant:`secondary`,children:`Open`})})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div className="grid grid-cols-2 gap-16 p-16">
      {SIDES.map(side => <Popover key={side} {...args} side={side} content={\`Side: \${side}\`}>
          <Button variant="secondary">{side}</Button>
        </Popover>)}
    </div>
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex gap-8 p-16">
      {ALIGNS.map(align => <Popover key={align} {...args} align={align} content={\`Align: \${align}\`}>
          <Button variant="secondary">{align}</Button>
        </Popover>)}
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    showArrow: false
  },
  render: args => <Popover {...args} content="No arrow on this one.">
      <Button variant="secondary">Click me</Button>
    </Popover>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    function ControlledExample() {
      const [open, setOpen] = useState(false);
      return <Popover {...args} open={open} onOpenChange={setOpen} content="Controlled popover">
          <Button variant="secondary">{open ? 'Close' : 'Open'}</Button>
        </Popover>;
    }
    return <ControlledExample />;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Near the viewport edge (auto-flip)',
  render: args => <div style={{
    marginTop: '75vh'
  }}>
      <Popover {...args} content="This flips to the top since there's no room below.">
        <Button variant="secondary">Near the bottom</Button>
      </Popover>
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Inside an overflow-auto container',
  render: args => <div className="h-32 w-64 overflow-auto border border-border-default p-4">
      <Popover {...args} content="This should not be clipped by the container.">
        <Button variant="secondary">Open</Button>
      </Popover>
    </div>
}`,...w.parameters?.docs?.source}}},T=[`Primary`,`WithInteractiveContent`,`AllSides`,`AllAligns`,`NoArrow`,`Controlled`,`NearViewportEdge`,`InsideOverflowContainer`]}));E();export{b as AllAligns,v as AllSides,S as Controlled,w as InsideOverflowContainer,C as NearViewportEdge,x as NoArrow,h as Primary,g as WithInteractiveContent,T as __namedExportsOrder,m as default,E as n,d as t};