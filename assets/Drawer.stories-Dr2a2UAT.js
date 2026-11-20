import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-CZTB8NHO.js";import{B as a,bn as o,t as s}from"./lucide-react-TFvVwBML.js";import{t as c}from"./Button-CZAm9LLq.js";import{t as l}from"./Button-C9AgBaXu.js";import{n as u,t as d}from"./Drawer-0JIN10yT.js";var f=e({AllSizes:()=>S,BottomSide:()=>b,CustomClassName:()=>O,LeftSide:()=>v,LongContent:()=>D,NoTitleOrDescription:()=>E,NotAnimated:()=>A,Primary:()=>_,TopSide:()=>y,WithFooter:()=>C,WithHeaderActions:()=>k,WithoutCloseButton:()=>w,WithoutOverlayClose:()=>T,__namedExportsOrder:()=>j,default:()=>g});function p(e){let[t,n]=(0,m.useState)(e.open);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{onClick:()=>n(!0),children:`Open drawer`}),(0,h.jsx)(d,{...e,open:t,onClose:()=>n(!1)})]})}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=t((()=>{m=n(r(),1),s(),l(),u(),h=i(),g={title:`Components/Drawer`,component:d,parameters:{layout:`centered`},argTypes:{side:{control:`select`,options:[`right`,`left`,`top`,`bottom`]},size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`]},onClose:{table:{disable:!0}}},args:{open:!1,onClose:()=>{},side:`right`,size:`md`,title:`Drawer title`,description:`A short supporting description for this drawer.`,children:`Drawer content goes here.`,closeOnOverlayClick:!0,showClose:!0},render:p},_={},v={args:{side:`left`}},y={args:{side:`top`,title:`Notification settings`,description:`Slides in from the top edge of the viewport.`}},b={args:{side:`bottom`,title:`Quick actions`,description:`Slides in from the bottom edge of the viewport.`}},x=[`sm`,`md`,`lg`,`xl`],S={render:e=>(0,h.jsx)(`div`,{className:`flex flex-wrap gap-3`,children:x.map(t=>(0,h.jsx)(p,{...e,size:t,title:`Size: ${t}`},t))})},C={args:{title:`Edit profile`,description:`Update your profile details below.`,footer:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{variant:`tertiary`,onClick:()=>{},children:`Cancel`}),(0,h.jsx)(c,{variant:`primary`,onClick:()=>{},children:`Save changes`})]})}},w={args:{showClose:!1,title:`No close button`,description:`Dismiss via the overlay click or Escape key instead.`}},T={args:{closeOnOverlayClick:!1,title:`Overlay click disabled`,description:`Clicking the backdrop does nothing — use the close button or Escape.`}},E={args:{title:void 0,description:void 0,children:`Just body content, no header.`}},D={args:{title:`Scrollable content`,description:`The body scrolls independently while the header and footer stay fixed.`,children:(0,h.jsx)(`div`,{className:`flex flex-col gap-3`,children:Array.from({length:20},(e,t)=>(0,h.jsxs)(`p`,{className:`text-p-std text-fg-secondary`,children:[`Paragraph `,t+1,` of scrollable drawer content.`]},t))}),footer:(0,h.jsx)(c,{variant:`primary`,onClick:()=>{},children:`Done`})}},O={name:`Overriding classes via className`,args:{className:`bg-bg-container`,title:`Custom background`,description:`className is merged last, so it wins over the default panel background.`}},k={name:`With headerActions`,args:{title:`Edit item`,description:`headerActions renders left of the close button — e.g. pin or back.`,headerActions:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`button`,{type:`button`,"aria-label":`Back`,className:`p-2 rounded-md text-fg-secondary hover:text-fg-default hover:bg-bg-subtle`,children:(0,h.jsx)(o,{className:`h-5 w-5`})}),(0,h.jsx)(`button`,{type:`button`,"aria-label":`Pin`,className:`p-2 rounded-md text-fg-secondary hover:text-fg-default hover:bg-bg-subtle`,children:(0,h.jsx)(a,{className:`h-5 w-5`})})]})}},A={name:`animated={false}`,args:{animated:!1,title:`Instant open/close`,description:`The pre-1.x behavior — mounts and unmounts synchronously, with no slide/fade.`}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'left'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'top',
    title: 'Notification settings',
    description: 'Slides in from the top edge of the viewport.'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'bottom',
    title: 'Quick actions',
    description: 'Slides in from the bottom edge of the viewport.'
  }
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-3">
      {SIZES.map(size => <Template key={size} {...args} size={size} title={\`Size: \${size}\`} />)}
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Edit profile',
    description: 'Update your profile details below.',
    footer: <>
        <Button variant="tertiary" onClick={() => {}}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => {}}>
          Save changes
        </Button>
      </>
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    showClose: false,
    title: 'No close button',
    description: 'Dismiss via the overlay click or Escape key instead.'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    closeOnOverlayClick: false,
    title: 'Overlay click disabled',
    description: 'Clicking the backdrop does nothing — use the close button or Escape.'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    description: undefined,
    children: 'Just body content, no header.'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Scrollable content',
    description: 'The body scrolls independently while the header and footer stay fixed.',
    children: <div className="flex flex-col gap-3">
        {Array.from({
        length: 20
      }, (_, i) => <p key={i} className="text-p-std text-fg-secondary">
            Paragraph {i + 1} of scrollable drawer content.
          </p>)}
      </div>,
    footer: <Button variant="primary" onClick={() => {}}>
        Done
      </Button>
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'bg-bg-container',
    title: 'Custom background',
    description: 'className is merged last, so it wins over the default panel background.'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'With headerActions',
  args: {
    title: 'Edit item',
    description: 'headerActions renders left of the close button — e.g. pin or back.',
    headerActions: <>
        <button type="button" aria-label="Back" className="p-2 rounded-md text-fg-secondary hover:text-fg-default hover:bg-bg-subtle">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button type="button" aria-label="Pin" className="p-2 rounded-md text-fg-secondary hover:text-fg-default hover:bg-bg-subtle">
          <Pin className="h-5 w-5" />
        </button>
      </>
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'animated={false}',
  args: {
    animated: false,
    title: 'Instant open/close',
    description: 'The pre-1.x behavior — mounts and unmounts synchronously, with no slide/fade.'
  }
}`,...A.parameters?.docs?.source}}},j=[`Primary`,`LeftSide`,`TopSide`,`BottomSide`,`AllSizes`,`WithFooter`,`WithoutCloseButton`,`WithoutOverlayClose`,`NoTitleOrDescription`,`LongContent`,`CustomClassName`,`WithHeaderActions`,`NotAnimated`]}));M();export{S as AllSizes,b as BottomSide,O as CustomClassName,v as LeftSide,D as LongContent,E as NoTitleOrDescription,A as NotAnimated,_ as Primary,y as TopSide,C as WithFooter,k as WithHeaderActions,w as WithoutCloseButton,T as WithoutOverlayClose,j as __namedExportsOrder,g as default,M as n,f as t};