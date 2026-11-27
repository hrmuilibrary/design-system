import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{f as r,t as i}from"./iframe-DUFRAPBA.js";import{B as a,Sn as o,t as s}from"./lucide-react-BW2j4-LT.js";import{t as c}from"./Button-o3RfQ-mO.js";import{t as l}from"./Button-DgT43ytO.js";import{t as u}from"./DatePicker-pfxMu4YF.js";import{t as d}from"./DatePicker-J1Dgs9tq.js";import{i as f,n as p,o as m,t as h}from"./DropdownMenu-CcXyNYQM.js";import{t as g}from"./DropdownMenu-BhkJqIIy.js";import{t as _}from"./SelectV2-BAJq3N9Z.js";import{t as v}from"./SelectV2-C-WHu439.js";import{t as y}from"./Tooltip-D9m3o0TC.js";import{t as b}from"./Tooltip-CKEx5X25.js";import{n as x,t as S}from"./Drawer-Do1aylmj.js";var C=n({AllSizes:()=>P,BottomSide:()=>M,CustomClassName:()=>B,LeftSide:()=>A,LongContent:()=>z,NoTitleOrDescription:()=>R,NotAnimated:()=>H,Primary:()=>k,TopSide:()=>j,WithDatePicker:()=>G,WithDropdownMenu:()=>W,WithFooter:()=>F,WithHeaderActions:()=>V,WithSelectV2:()=>U,WithoutCloseButton:()=>I,WithoutOverlayClose:()=>L,__namedExportsOrder:()=>K,default:()=>O});function w(e){let[t,n]=(0,E.useState)(e.open);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(c,{onClick:()=>n(!0),children:`Open drawer`}),(0,D.jsx)(S,{...e,open:t,onClose:()=>n(!1)})]})}function T({open:e,...t}){let[n,r]=(0,E.useState)(e);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(c,{onClick:()=>r(!0),children:`Open drawer`}),(0,D.jsx)(S,{...t,open:n,onClose:()=>r(!1),children:(0,D.jsx)(y,{content:`This tooltip portals above the drawer`,side:`right`,children:(0,D.jsx)(c,{variant:`secondary`,children:`Hover for tooltip`})})})]})}var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q=t((()=>{E=e(r(),1),s(),l(),d(),g(),v(),b(),x(),D=i(),O={title:`Components/Drawer`,component:S,parameters:{layout:`centered`},argTypes:{side:{control:`select`,options:[`right`,`left`,`top`,`bottom`]},size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`]},onClose:{table:{disable:!0}}},args:{open:!1,onClose:()=>{},side:`right`,size:`md`,title:`Drawer title`,description:`A short supporting description for this drawer.`,children:`Drawer content goes here.`,closeOnOverlayClick:!0,showClose:!0},render:w},k={},A={args:{side:`left`},render:T},j={args:{side:`top`,title:`Notification settings`,description:`Slides in from the top edge of the viewport.`}},M={args:{side:`bottom`,title:`Quick actions`,description:`Slides in from the bottom edge of the viewport.`}},N=[`sm`,`md`,`lg`,`xl`],P={render:e=>(0,D.jsx)(`div`,{className:`flex flex-wrap gap-3`,children:N.map(t=>(0,D.jsx)(w,{...e,size:t,title:`Size: ${t}`},t))})},F={args:{title:`Edit profile`,description:`Update your profile details below.`,footer:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(c,{variant:`tertiary`,onClick:()=>{},children:`Cancel`}),(0,D.jsx)(c,{variant:`primary`,onClick:()=>{},children:`Save changes`})]})}},I={args:{showClose:!1,title:`No close button`,description:`Dismiss via the overlay click or Escape key instead.`}},L={args:{closeOnOverlayClick:!1,title:`Overlay click disabled`,description:`Clicking the backdrop does nothing — use the close button or Escape.`}},R={args:{title:void 0,description:void 0,children:`Just body content, no header.`}},z={args:{title:`Scrollable content`,description:`The body scrolls independently while the header and footer stay fixed.`,children:(0,D.jsx)(`div`,{className:`flex flex-col gap-3`,children:Array.from({length:20},(e,t)=>(0,D.jsxs)(`p`,{className:`text-p-std text-fg-secondary`,children:[`Paragraph `,t+1,` of scrollable drawer content.`]},t))}),footer:(0,D.jsx)(c,{variant:`primary`,onClick:()=>{},children:`Done`})}},B={name:`Overriding classes via className`,args:{className:`bg-bg-container`,title:`Custom background`,description:`className is merged last, so it wins over the default panel background.`}},V={name:`With headerActions`,args:{title:`Edit item`,description:`headerActions renders left of the close button — e.g. pin or back.`,headerActions:(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(`button`,{type:`button`,"aria-label":`Back`,className:`p-2 rounded-md text-fg-secondary hover:text-fg-default hover:bg-bg-subtle`,children:(0,D.jsx)(o,{className:`h-5 w-5`})}),(0,D.jsx)(`button`,{type:`button`,"aria-label":`Pin`,className:`p-2 rounded-md text-fg-secondary hover:text-fg-default hover:bg-bg-subtle`,children:(0,D.jsx)(a,{className:`h-5 w-5`})})]})}},H={name:`animated={false}`,args:{animated:!1,title:`Instant open/close`,description:`The pre-1.x behavior — mounts and unmounts synchronously, with no slide/fade.`}},U={args:{title:`Drawer with a select`,description:`The select menu must render above the drawer.`,children:(0,D.jsx)(_,{label:`Country`,placeholder:`Choose a country`,options:[{label:`Armenia`,value:`am`},{label:`Georgia`,value:`ge`},{label:`Germany`,value:`de`}]})}},W={args:{title:`Drawer with a dropdown menu`,description:`The menu must render above the drawer.`,children:(0,D.jsxs)(f,{children:[(0,D.jsx)(m,{children:(0,D.jsx)(c,{variant:`secondary`,children:`Actions`})}),(0,D.jsxs)(h,{children:[(0,D.jsx)(p,{children:`Edit`}),(0,D.jsx)(p,{children:`Duplicate`}),(0,D.jsx)(p,{destructive:!0,children:`Delete`})]})]})}},G={args:{title:`Drawer with a date picker`,description:`The calendar must render above the drawer.`,children:(0,D.jsx)(u,{label:`Date`})}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'left'
  },
  render: LeftSideTemplate
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'top',
    title: 'Notification settings',
    description: 'Slides in from the top edge of the viewport.'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'bottom',
    title: 'Quick actions',
    description: 'Slides in from the bottom edge of the viewport.'
  }
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-3">
      {SIZES.map(size => <Template key={size} {...args} size={size} title={\`Size: \${size}\`} />)}
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    showClose: false,
    title: 'No close button',
    description: 'Dismiss via the overlay click or Escape key instead.'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    closeOnOverlayClick: false,
    title: 'Overlay click disabled',
    description: 'Clicking the backdrop does nothing — use the close button or Escape.'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    description: undefined,
    children: 'Just body content, no header.'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'bg-bg-container',
    title: 'Custom background',
    description: 'className is merged last, so it wins over the default panel background.'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'animated={false}',
  args: {
    animated: false,
    title: 'Instant open/close',
    description: 'The pre-1.x behavior — mounts and unmounts synchronously, with no slide/fade.'
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Drawer with a date picker',
    description: 'The calendar must render above the drawer.',
    children: <DatePicker label="Date" />
  }
}`,...G.parameters?.docs?.source}}},K=[`Primary`,`LeftSide`,`TopSide`,`BottomSide`,`AllSizes`,`WithFooter`,`WithoutCloseButton`,`WithoutOverlayClose`,`NoTitleOrDescription`,`LongContent`,`CustomClassName`,`WithHeaderActions`,`NotAnimated`,`WithSelectV2`,`WithDropdownMenu`,`WithDatePicker`]}));q();export{P as AllSizes,M as BottomSide,B as CustomClassName,A as LeftSide,z as LongContent,R as NoTitleOrDescription,H as NotAnimated,k as Primary,j as TopSide,G as WithDatePicker,W as WithDropdownMenu,F as WithFooter,V as WithHeaderActions,U as WithSelectV2,I as WithoutCloseButton,L as WithoutOverlayClose,K as __namedExportsOrder,O as default,q as n,C as t};