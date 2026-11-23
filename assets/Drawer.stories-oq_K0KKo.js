import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-CTYuxkaR.js";import{B as a,bn as o,t as s}from"./lucide-react-Cpnmz8XQ.js";import{t as c}from"./Button-0-VWhwQw.js";import{t as l}from"./Button-OKs7vzGD.js";import{n as u,t as d}from"./DatePicker-pos2JzYw.js";import{i as f,n as p,o as m,t as h}from"./DropdownMenu-C5YaBNTD.js";import{a as g,t as _}from"./SelectV2-x2Xj04e2.js";import{t as v}from"./SelectV2-CBLttHwR.js";import{t as y}from"./Tooltip-CkfCQ3iz.js";import{t as b}from"./Tooltip-DTpxvZSO.js";import{n as x,t as S}from"./Drawer-CgIg-p80.js";var C=t((()=>{u()})),w=e({AllSizes:()=>F,BottomSide:()=>N,CustomClassName:()=>V,LeftSide:()=>j,LongContent:()=>B,NoTitleOrDescription:()=>z,NotAnimated:()=>U,Primary:()=>A,TopSide:()=>M,WithDatePicker:()=>K,WithDropdownMenu:()=>G,WithFooter:()=>I,WithHeaderActions:()=>H,WithSelectV2:()=>W,WithoutCloseButton:()=>L,WithoutOverlayClose:()=>R,__namedExportsOrder:()=>q,default:()=>k});function T(e){let[t,n]=(0,D.useState)(e.open);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(c,{onClick:()=>n(!0),children:`Open drawer`}),(0,O.jsx)(S,{...e,open:t,onClose:()=>n(!1)})]})}function E({open:e,...t}){let[n,r]=(0,D.useState)(e);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(c,{onClick:()=>r(!0),children:`Open drawer`}),(0,O.jsx)(S,{...t,open:n,onClose:()=>r(!1),children:(0,O.jsx)(y,{content:`This tooltip portals above the drawer`,side:`right`,children:(0,O.jsx)(c,{variant:`secondary`,children:`Hover for tooltip`})})})]})}var D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J=t((()=>{D=n(r(),1),s(),l(),C(),g(),v(),b(),x(),O=i(),k={title:`Components/Drawer`,component:S,parameters:{layout:`centered`},argTypes:{side:{control:`select`,options:[`right`,`left`,`top`,`bottom`]},size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`]},onClose:{table:{disable:!0}}},args:{open:!1,onClose:()=>{},side:`right`,size:`md`,title:`Drawer title`,description:`A short supporting description for this drawer.`,children:`Drawer content goes here.`,closeOnOverlayClick:!0,showClose:!0},render:T},A={},j={args:{side:`left`},render:E},M={args:{side:`top`,title:`Notification settings`,description:`Slides in from the top edge of the viewport.`}},N={args:{side:`bottom`,title:`Quick actions`,description:`Slides in from the bottom edge of the viewport.`}},P=[`sm`,`md`,`lg`,`xl`],F={render:e=>(0,O.jsx)(`div`,{className:`flex flex-wrap gap-3`,children:P.map(t=>(0,O.jsx)(T,{...e,size:t,title:`Size: ${t}`},t))})},I={args:{title:`Edit profile`,description:`Update your profile details below.`,footer:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(c,{variant:`tertiary`,onClick:()=>{},children:`Cancel`}),(0,O.jsx)(c,{variant:`primary`,onClick:()=>{},children:`Save changes`})]})}},L={args:{showClose:!1,title:`No close button`,description:`Dismiss via the overlay click or Escape key instead.`}},R={args:{closeOnOverlayClick:!1,title:`Overlay click disabled`,description:`Clicking the backdrop does nothing — use the close button or Escape.`}},z={args:{title:void 0,description:void 0,children:`Just body content, no header.`}},B={args:{title:`Scrollable content`,description:`The body scrolls independently while the header and footer stay fixed.`,children:(0,O.jsx)(`div`,{className:`flex flex-col gap-3`,children:Array.from({length:20},(e,t)=>(0,O.jsxs)(`p`,{className:`text-p-std text-fg-secondary`,children:[`Paragraph `,t+1,` of scrollable drawer content.`]},t))}),footer:(0,O.jsx)(c,{variant:`primary`,onClick:()=>{},children:`Done`})}},V={name:`Overriding classes via className`,args:{className:`bg-bg-container`,title:`Custom background`,description:`className is merged last, so it wins over the default panel background.`}},H={name:`With headerActions`,args:{title:`Edit item`,description:`headerActions renders left of the close button — e.g. pin or back.`,headerActions:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`button`,{type:`button`,"aria-label":`Back`,className:`p-2 rounded-md text-fg-secondary hover:text-fg-default hover:bg-bg-subtle`,children:(0,O.jsx)(o,{className:`h-5 w-5`})}),(0,O.jsx)(`button`,{type:`button`,"aria-label":`Pin`,className:`p-2 rounded-md text-fg-secondary hover:text-fg-default hover:bg-bg-subtle`,children:(0,O.jsx)(a,{className:`h-5 w-5`})})]})}},U={name:`animated={false}`,args:{animated:!1,title:`Instant open/close`,description:`The pre-1.x behavior — mounts and unmounts synchronously, with no slide/fade.`}},W={args:{title:`Drawer with a select`,description:`The select menu must render above the drawer.`,children:(0,O.jsx)(_,{label:`Country`,placeholder:`Choose a country`,options:[{label:`Armenia`,value:`am`},{label:`Georgia`,value:`ge`},{label:`Germany`,value:`de`}]})}},G={args:{title:`Drawer with a dropdown menu`,description:`The menu must render above the drawer.`,children:(0,O.jsxs)(f,{children:[(0,O.jsx)(m,{children:(0,O.jsx)(c,{variant:`secondary`,children:`Actions`})}),(0,O.jsxs)(h,{children:[(0,O.jsx)(p,{children:`Edit`}),(0,O.jsx)(p,{children:`Duplicate`}),(0,O.jsx)(p,{destructive:!0,children:`Delete`})]})]})}},K={args:{title:`Drawer with a date picker`,description:`The calendar must render above the drawer.`,children:(0,O.jsx)(d,{label:`Date`})}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'left'
  },
  render: LeftSideTemplate
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'top',
    title: 'Notification settings',
    description: 'Slides in from the top edge of the viewport.'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'bottom',
    title: 'Quick actions',
    description: 'Slides in from the bottom edge of the viewport.'
  }
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-3">
      {SIZES.map(size => <Template key={size} {...args} size={size} title={\`Size: \${size}\`} />)}
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    showClose: false,
    title: 'No close button',
    description: 'Dismiss via the overlay click or Escape key instead.'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    closeOnOverlayClick: false,
    title: 'Overlay click disabled',
    description: 'Clicking the backdrop does nothing — use the close button or Escape.'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    description: undefined,
    children: 'Just body content, no header.'
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'bg-bg-container',
    title: 'Custom background',
    description: 'className is merged last, so it wins over the default panel background.'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'animated={false}',
  args: {
    animated: false,
    title: 'Instant open/close',
    description: 'The pre-1.x behavior — mounts and unmounts synchronously, with no slide/fade.'
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Drawer with a date picker',
    description: 'The calendar must render above the drawer.',
    children: <DatePicker label="Date" />
  }
}`,...K.parameters?.docs?.source}}},q=[`Primary`,`LeftSide`,`TopSide`,`BottomSide`,`AllSizes`,`WithFooter`,`WithoutCloseButton`,`WithoutOverlayClose`,`NoTitleOrDescription`,`LongContent`,`CustomClassName`,`WithHeaderActions`,`NotAnimated`,`WithSelectV2`,`WithDropdownMenu`,`WithDatePicker`]}));J();export{F as AllSizes,N as BottomSide,V as CustomClassName,j as LeftSide,B as LongContent,z as NoTitleOrDescription,U as NotAnimated,A as Primary,M as TopSide,K as WithDatePicker,G as WithDropdownMenu,I as WithFooter,H as WithHeaderActions,W as WithSelectV2,L as WithoutCloseButton,R as WithoutOverlayClose,q as __namedExportsOrder,k as default,J as n,w as t};