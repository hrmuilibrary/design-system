import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{f as r,t as i}from"./iframe-BB53nw3I.js";import{t as a}from"./Button-Cfl_Bt0U.js";import{t as o}from"./Button-D4_zQBdF.js";import{n as s,t as c}from"./Drawer-BbPLfO7a.js";import{n as l,t as u}from"./Modal-BY6mHMf-.js";var d=t((()=>{s()})),f=n({CloseOnOverlayClickDisabled:()=>S,CustomClassName:()=>O,DoubleExtraLarge:()=>D,ExtraLarge:()=>E,Large:()=>T,OverDrawer:()=>k,Primary:()=>v,ScrollableContent:()=>C,Small:()=>w,WithFooter:()=>y,WithoutDescription:()=>b,WithoutTitle:()=>x,__namedExportsOrder:()=>A,default:()=>_});function p(e){let[t,n]=(0,h.useState)(e.open);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{onClick:()=>n(!0),children:`Open modal`}),(0,g.jsx)(u,{...e,open:t,onClose:()=>n(!1)})]})}function m(){let[e,t]=(0,h.useState)(!1),[n,r]=(0,h.useState)(!1);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{onClick:()=>t(!0),children:`Open drawer`}),(0,g.jsx)(c,{open:e,onClose:()=>t(!1),title:`Edit item`,children:(0,g.jsx)(a,{variant:`danger`,onClick:()=>r(!0),children:`Discard changes`})}),(0,g.jsx)(u,{open:n,onClose:()=>r(!1),title:`Discard changes`,description:`Are you sure you want to discard the changes you made?`})]})}var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j=t((()=>{h=e(r(),1),l(),o(),d(),g=i(),_={title:`Components/Modal`,component:u,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`,`2xl`]},onClose:{table:{disable:!0}}},args:{open:!1,onClose:()=>{},title:`Modal title`,description:`A short supporting description of what this modal is for.`,children:`Modal body content goes here.`,size:`md`,closeOnOverlayClick:!0,showClose:!0},render:p},v={},y={args:{footer:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(a,{variant:`secondary`,children:`Cancel`}),(0,g.jsx)(a,{variant:`primary`,children:`Confirm`})]})}},b={args:{description:void 0}},x={name:`Content only (no title, no close button)`,args:{title:void 0,description:void 0,showClose:!1}},S={args:{closeOnOverlayClick:!1}},C={args:{children:(0,g.jsx)(`div`,{className:`space-y-3`,children:Array.from({length:12},(e,t)=>(0,g.jsxs)(`p`,{className:`text-p-std text-fg-secondary`,children:[`Paragraph `,t+1,` of long body content, demonstrating that the content area scrolls independently while the header and footer stay pinned.`]},t))}),footer:(0,g.jsx)(a,{variant:`primary`,children:`Done`})}},w={args:{size:`sm`}},T={args:{size:`lg`}},E={args:{size:`xl`}},D={args:{size:`2xl`}},O={name:`Overriding classes via className`,args:{className:`bg-bg-container border-2 border-brand-500`}},k={name:`Opened from a Drawer`,render:()=>(0,g.jsx)(m,{})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    footer: <>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Confirm</Button>
      </>
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    description: undefined
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Content only (no title, no close button)',
  args: {
    title: undefined,
    description: undefined,
    showClose: false
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    closeOnOverlayClick: false
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div className="space-y-3">
        {Array.from({
        length: 12
      }, (_, i) => <p key={i} className="text-p-std text-fg-secondary">
            Paragraph {i + 1} of long body content, demonstrating that the content area scrolls
            independently while the header and footer stay pinned.
          </p>)}
      </div>,
    footer: <Button variant="primary">Done</Button>
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    size: '2xl'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'bg-bg-container border-2 border-brand-500'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Opened from a Drawer',
  render: () => <OverDrawerTemplate />
}`,...k.parameters?.docs?.source}}},A=[`Primary`,`WithFooter`,`WithoutDescription`,`WithoutTitle`,`CloseOnOverlayClickDisabled`,`ScrollableContent`,`Small`,`Large`,`ExtraLarge`,`DoubleExtraLarge`,`CustomClassName`,`OverDrawer`]}));j();export{S as CloseOnOverlayClickDisabled,O as CustomClassName,D as DoubleExtraLarge,E as ExtraLarge,T as Large,k as OverDrawer,v as Primary,C as ScrollableContent,w as Small,y as WithFooter,b as WithoutDescription,x as WithoutTitle,A as __namedExportsOrder,_ as default,j as n,f as t};