import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-BgCNYJC5.js";import{t as a}from"./react-dom-CwR_087z.js";import{n as o,t as s}from"./lucide-react-D8xGtw7t.js";import{n as c,t as l}from"./cn-CHNBg8JS.js";import{t as u}from"./Button-pCbQguxX.js";import{t as d}from"./Button-CJ5ck7Yc.js";function f(...e){return t=>{for(let n of e)n&&(typeof n==`function`?n(t):n.current=t)}}var p,m,h,g,_,v,y,b=t((()=>{p=n(r(),1),m=n(a(),1),s(),c(),h=i(),g={sm:`w-[320px]`,md:`w-[420px]`,lg:`w-[560px]`,xl:`w-[720px]`},_={sm:`h-[240px]`,md:`h-[360px]`,lg:`h-[480px]`,xl:`h-[600px]`},v={right:`inset-y-0 right-0 border-l`,left:`inset-y-0 left-0 border-r`,top:`inset-x-0 top-0 border-b`,bottom:`inset-x-0 bottom-0 border-t`},y=(0,p.forwardRef)(function({open:e,onClose:t,side:n=`right`,size:r=`md`,title:i,description:a,children:s,footer:c,closeOnOverlayClick:u=!0,showClose:d=!0,className:y,dataTestId:b},x){let S=(0,p.useRef)(null);if((0,p.useEffect)(()=>{if(!e)return;let n=e=>{e.key===`Escape`&&t()};document.addEventListener(`keydown`,n);let r=document.body.style.overflow;return document.body.style.overflow=`hidden`,()=>{document.removeEventListener(`keydown`,n),document.body.style.overflow=r}},[e,t]),(0,p.useEffect)(()=>{if(!e)return;let t=document.activeElement;return S.current?.focus(),()=>t?.focus?.()},[e]),!e)return null;let C=n===`left`||n===`right`,w=C?g[r]:_[r];return(0,m.createPortal)((0,h.jsxs)(`div`,{role:`dialog`,"aria-modal":`true`,"aria-labelledby":i?`drawer-title`:void 0,"aria-describedby":a?`drawer-desc`:void 0,className:`fixed inset-0 z-50`,"data-test-id":b,children:[(0,h.jsx)(`div`,{className:`absolute inset-0 bg-black/50`,onClick:()=>u&&t(),"aria-hidden":!0}),(0,h.jsxs)(`div`,{ref:f(x,S),tabIndex:-1,className:l(`absolute bg-bg-default shadow-z5 outline-none flex flex-col`,v[n],C?`${w} h-full max-w-full`:`${w} w-full max-h-full`,`border-border-default`,y),children:[(i||d)&&(0,h.jsxs)(`div`,{className:`flex items-start justify-between gap-4 px-6 pt-6 pb-4 border-b border-border-default`,children:[(0,h.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[i&&(0,h.jsx)(`h2`,{id:`drawer-title`,className:`text-h-xs font-semibold text-fg-default`,children:i}),a&&(0,h.jsx)(`p`,{id:`drawer-desc`,className:`mt-1 text-p-std text-fg-secondary`,children:a})]}),d&&(0,h.jsx)(`button`,{type:`button`,onClick:t,"aria-label":`Close`,className:`-mr-2 -mt-2 p-2 rounded-md text-fg-secondary hover:text-fg-default hover:bg-bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300`,children:(0,h.jsx)(o,{className:`h-5 w-5`})})]}),s&&(0,h.jsx)(`div`,{className:`flex-1 overflow-y-auto px-6 py-4`,children:s}),c&&(0,h.jsx)(`div`,{className:`flex items-center justify-end gap-2 px-6 py-4 border-t border-border-default bg-bg-container`,children:c})]})]}),document.body)});try{y.displayName=`Drawer`,y.__docgenInfo={description:``,displayName:`Drawer`,filePath:`/home/runner/work/design-system/design-system/src/components/Drawer/Drawer.tsx`,methods:[],props:{open:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`}],description:`Whether the drawer is rendered and visible.`,name:`open`,parent:{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`},required:!0,tags:{},type:{name:`boolean`}},onClose:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`}],description:`Called when the drawer requests to be closed (Escape, overlay click, close button).`,name:`onClose`,parent:{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`},required:!0,tags:{},type:{name:`() => void`}},side:{defaultValue:{value:`right`},declarations:[{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`}],description:`Edge of the viewport the drawer slides in from.`,name:`side`,parent:{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`},required:!1,tags:{},type:{name:`enum`,raw:`DrawerSide`,value:[{value:`"right"`},{value:`"left"`},{value:`"top"`},{value:`"bottom"`}]}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`}],description:"Panel size — width when `side` is left/right, height when top/bottom.",name:`size`,parent:{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`},required:!1,tags:{},type:{name:`enum`,raw:`DrawerSize`,value:[{value:`"md"`},{value:`"sm"`},{value:`"lg"`},{value:`"xl"`}]}},title:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`}],description:``,name:`title`,parent:{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`},required:!1,tags:{},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`}],description:``,name:`description`,parent:{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`},required:!1,tags:{},type:{name:`ReactNode`}},footer:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`}],description:``,name:`footer`,parent:{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`},required:!1,tags:{},type:{name:`ReactNode`}},closeOnOverlayClick:{defaultValue:{value:`true`},declarations:[{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`}],description:"Whether clicking the overlay backdrop calls `onClose`.",name:`closeOnOverlayClick`,parent:{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`},required:!1,tags:{},type:{name:`boolean`}},showClose:{defaultValue:{value:`true`},declarations:[{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`}],description:`Whether the built-in close (X) button is rendered.`,name:`showClose`,parent:{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`},required:!1,tags:{},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`}],description:``,name:`className`,parent:{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`},required:!1,tags:{},type:{name:`string`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),x=e({AllSizes:()=>j,BottomSide:()=>k,CustomClassName:()=>L,LeftSide:()=>D,LongContent:()=>I,NoTitleOrDescription:()=>F,Primary:()=>E,TopSide:()=>O,WithFooter:()=>M,WithoutCloseButton:()=>N,WithoutOverlayClose:()=>P,__namedExportsOrder:()=>R,default:()=>T});function S(e){let[t,n]=(0,C.useState)(e.open);return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u,{onClick:()=>n(!0),children:`Open drawer`}),(0,w.jsx)(y,{...e,open:t,onClose:()=>n(!1)})]})}var C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z=t((()=>{C=n(r(),1),d(),b(),w=i(),T={title:`Components/Drawer`,component:y,parameters:{layout:`centered`},argTypes:{side:{control:`select`,options:[`right`,`left`,`top`,`bottom`]},size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`]},onClose:{table:{disable:!0}}},args:{open:!1,onClose:()=>{},side:`right`,size:`md`,title:`Drawer title`,description:`A short supporting description for this drawer.`,children:`Drawer content goes here.`,closeOnOverlayClick:!0,showClose:!0},render:S},E={},D={args:{side:`left`}},O={args:{side:`top`,title:`Notification settings`,description:`Slides in from the top edge of the viewport.`}},k={args:{side:`bottom`,title:`Quick actions`,description:`Slides in from the bottom edge of the viewport.`}},A=[`sm`,`md`,`lg`,`xl`],j={render:e=>(0,w.jsx)(`div`,{className:`flex flex-wrap gap-3`,children:A.map(t=>(0,w.jsx)(S,{...e,size:t,title:`Size: ${t}`},t))})},M={args:{title:`Edit profile`,description:`Update your profile details below.`,footer:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(u,{variant:`tertiary`,onClick:()=>{},children:`Cancel`}),(0,w.jsx)(u,{variant:`primary`,onClick:()=>{},children:`Save changes`})]})}},N={args:{showClose:!1,title:`No close button`,description:`Dismiss via the overlay click or Escape key instead.`}},P={args:{closeOnOverlayClick:!1,title:`Overlay click disabled`,description:`Clicking the backdrop does nothing — use the close button or Escape.`}},F={args:{title:void 0,description:void 0,children:`Just body content, no header.`}},I={args:{title:`Scrollable content`,description:`The body scrolls independently while the header and footer stay fixed.`,children:(0,w.jsx)(`div`,{className:`flex flex-col gap-3`,children:Array.from({length:20},(e,t)=>(0,w.jsxs)(`p`,{className:`text-p-std text-fg-secondary`,children:[`Paragraph `,t+1,` of scrollable drawer content.`]},t))}),footer:(0,w.jsx)(u,{variant:`primary`,onClick:()=>{},children:`Done`})}},L={name:`Overriding classes via className`,args:{className:`bg-bg-container`,title:`Custom background`,description:`className is merged last, so it wins over the default panel background.`}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'left'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'top',
    title: 'Notification settings',
    description: 'Slides in from the top edge of the viewport.'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'bottom',
    title: 'Quick actions',
    description: 'Slides in from the bottom edge of the viewport.'
  }
}`,...k.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-3">
      {SIZES.map(size => <Template key={size} {...args} size={size} title={\`Size: \${size}\`} />)}
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    showClose: false,
    title: 'No close button',
    description: 'Dismiss via the overlay click or Escape key instead.'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    closeOnOverlayClick: false,
    title: 'Overlay click disabled',
    description: 'Clicking the backdrop does nothing — use the close button or Escape.'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    description: undefined,
    children: 'Just body content, no header.'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'bg-bg-container',
    title: 'Custom background',
    description: 'className is merged last, so it wins over the default panel background.'
  }
}`,...L.parameters?.docs?.source}}},R=[`Primary`,`LeftSide`,`TopSide`,`BottomSide`,`AllSizes`,`WithFooter`,`WithoutCloseButton`,`WithoutOverlayClose`,`NoTitleOrDescription`,`LongContent`,`CustomClassName`]}));z();export{j as AllSizes,k as BottomSide,L as CustomClassName,D as LeftSide,I as LongContent,F as NoTitleOrDescription,E as Primary,O as TopSide,M as WithFooter,N as WithoutCloseButton,P as WithoutOverlayClose,R as __namedExportsOrder,T as default,z as n,x as t};