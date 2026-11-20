import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-DTMUI3xK.js";import{B as a,bn as o,t as s}from"./lucide-react-CdQCz0l7.js";import{t as c}from"./Button-BaklGT_M.js";import{t as l}from"./Button-D7gcpQSv.js";import{n as u,t as d}from"./DatePicker-Bu8m-ll3.js";import{i as f,n as p,o as m,t as h}from"./DropdownMenu-BXnQrTUD.js";import{a as g,t as _}from"./SelectV2-NiXGoa24.js";import{t as v}from"./SelectV2-Dlmr_n2j.js";import{n as y,t as b}from"./Drawer-vIPHLtjj.js";var x=t((()=>{u()})),S=e({AllSizes:()=>M,BottomSide:()=>A,CustomClassName:()=>R,LeftSide:()=>O,LongContent:()=>L,NoTitleOrDescription:()=>I,NotAnimated:()=>B,Primary:()=>D,TopSide:()=>k,WithDatePicker:()=>U,WithDropdownMenu:()=>H,WithFooter:()=>N,WithHeaderActions:()=>z,WithSelectV2:()=>V,WithoutCloseButton:()=>P,WithoutOverlayClose:()=>F,__namedExportsOrder:()=>W,default:()=>E});function C(e){let[t,n]=(0,w.useState)(e.open);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(c,{onClick:()=>n(!0),children:`Open drawer`}),(0,T.jsx)(b,{...e,open:t,onClose:()=>n(!1)})]})}var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G=t((()=>{w=n(r(),1),s(),l(),x(),g(),v(),y(),T=i(),E={title:`Components/Drawer`,component:b,parameters:{layout:`centered`},argTypes:{side:{control:`select`,options:[`right`,`left`,`top`,`bottom`]},size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`]},onClose:{table:{disable:!0}}},args:{open:!1,onClose:()=>{},side:`right`,size:`md`,title:`Drawer title`,description:`A short supporting description for this drawer.`,children:`Drawer content goes here.`,closeOnOverlayClick:!0,showClose:!0},render:C},D={},O={args:{side:`left`}},k={args:{side:`top`,title:`Notification settings`,description:`Slides in from the top edge of the viewport.`}},A={args:{side:`bottom`,title:`Quick actions`,description:`Slides in from the bottom edge of the viewport.`}},j=[`sm`,`md`,`lg`,`xl`],M={render:e=>(0,T.jsx)(`div`,{className:`flex flex-wrap gap-3`,children:j.map(t=>(0,T.jsx)(C,{...e,size:t,title:`Size: ${t}`},t))})},N={args:{title:`Edit profile`,description:`Update your profile details below.`,footer:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(c,{variant:`tertiary`,onClick:()=>{},children:`Cancel`}),(0,T.jsx)(c,{variant:`primary`,onClick:()=>{},children:`Save changes`})]})}},P={args:{showClose:!1,title:`No close button`,description:`Dismiss via the overlay click or Escape key instead.`}},F={args:{closeOnOverlayClick:!1,title:`Overlay click disabled`,description:`Clicking the backdrop does nothing — use the close button or Escape.`}},I={args:{title:void 0,description:void 0,children:`Just body content, no header.`}},L={args:{title:`Scrollable content`,description:`The body scrolls independently while the header and footer stay fixed.`,children:(0,T.jsx)(`div`,{className:`flex flex-col gap-3`,children:Array.from({length:20},(e,t)=>(0,T.jsxs)(`p`,{className:`text-p-std text-fg-secondary`,children:[`Paragraph `,t+1,` of scrollable drawer content.`]},t))}),footer:(0,T.jsx)(c,{variant:`primary`,onClick:()=>{},children:`Done`})}},R={name:`Overriding classes via className`,args:{className:`bg-bg-container`,title:`Custom background`,description:`className is merged last, so it wins over the default panel background.`}},z={name:`With headerActions`,args:{title:`Edit item`,description:`headerActions renders left of the close button — e.g. pin or back.`,headerActions:(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`button`,{type:`button`,"aria-label":`Back`,className:`p-2 rounded-md text-fg-secondary hover:text-fg-default hover:bg-bg-subtle`,children:(0,T.jsx)(o,{className:`h-5 w-5`})}),(0,T.jsx)(`button`,{type:`button`,"aria-label":`Pin`,className:`p-2 rounded-md text-fg-secondary hover:text-fg-default hover:bg-bg-subtle`,children:(0,T.jsx)(a,{className:`h-5 w-5`})})]})}},B={name:`animated={false}`,args:{animated:!1,title:`Instant open/close`,description:`The pre-1.x behavior — mounts and unmounts synchronously, with no slide/fade.`}},V={args:{title:`Drawer with a select`,description:`The select menu must render above the drawer.`,children:(0,T.jsx)(_,{label:`Country`,placeholder:`Choose a country`,options:[{label:`Armenia`,value:`am`},{label:`Georgia`,value:`ge`},{label:`Germany`,value:`de`}]})}},H={args:{title:`Drawer with a dropdown menu`,description:`The menu must render above the drawer.`,children:(0,T.jsxs)(f,{children:[(0,T.jsx)(m,{children:(0,T.jsx)(c,{variant:`secondary`,children:`Actions`})}),(0,T.jsxs)(h,{children:[(0,T.jsx)(p,{children:`Edit`}),(0,T.jsx)(p,{children:`Duplicate`}),(0,T.jsx)(p,{destructive:!0,children:`Delete`})]})]})}},U={args:{title:`Drawer with a date picker`,description:`The calendar must render above the drawer.`,children:(0,T.jsx)(d,{label:`Date`})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'left'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'top',
    title: 'Notification settings',
    description: 'Slides in from the top edge of the viewport.'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'bottom',
    title: 'Quick actions',
    description: 'Slides in from the bottom edge of the viewport.'
  }
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-3">
      {SIZES.map(size => <Template key={size} {...args} size={size} title={\`Size: \${size}\`} />)}
    </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    showClose: false,
    title: 'No close button',
    description: 'Dismiss via the overlay click or Escape key instead.'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    closeOnOverlayClick: false,
    title: 'Overlay click disabled',
    description: 'Clicking the backdrop does nothing — use the close button or Escape.'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    description: undefined,
    children: 'Just body content, no header.'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'bg-bg-container',
    title: 'Custom background',
    description: 'className is merged last, so it wins over the default panel background.'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'animated={false}',
  args: {
    animated: false,
    title: 'Instant open/close',
    description: 'The pre-1.x behavior — mounts and unmounts synchronously, with no slide/fade.'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Drawer with a select',
    description: 'The select menu must render above the drawer.',
    children: <SelectV2 label="Country" placeholder="Choose a country" options={[{
      label: 'Armenia',
      value: 'am'
    }, {
      label: 'Georgia',
      value: 'ge'
    }, {
      label: 'Germany',
      value: 'de'
    }]} />
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Drawer with a dropdown menu',
    description: 'The menu must render above the drawer.',
    children: <DropdownMenu>
        <DropdownTrigger>
          <Button variant="secondary">Actions</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem>Edit</DropdownItem>
          <DropdownItem>Duplicate</DropdownItem>
          <DropdownItem destructive>Delete</DropdownItem>
        </DropdownContent>
      </DropdownMenu>
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Drawer with a date picker',
    description: 'The calendar must render above the drawer.',
    children: <DatePicker label="Date" />
  }
}`,...U.parameters?.docs?.source}}},W=[`Primary`,`LeftSide`,`TopSide`,`BottomSide`,`AllSizes`,`WithFooter`,`WithoutCloseButton`,`WithoutOverlayClose`,`NoTitleOrDescription`,`LongContent`,`CustomClassName`,`WithHeaderActions`,`NotAnimated`,`WithSelectV2`,`WithDropdownMenu`,`WithDatePicker`]}));G();export{M as AllSizes,A as BottomSide,R as CustomClassName,O as LeftSide,L as LongContent,I as NoTitleOrDescription,B as NotAnimated,D as Primary,k as TopSide,U as WithDatePicker,H as WithDropdownMenu,N as WithFooter,z as WithHeaderActions,V as WithSelectV2,P as WithoutCloseButton,F as WithoutOverlayClose,W as __namedExportsOrder,E as default,G as n,S as t};