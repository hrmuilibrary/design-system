import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-HYgm0KbA.js";import{t as a}from"./react-dom-SokKpM4V.js";import{P as o,fn as s,n as c,t as l}from"./lucide-react-BlsaoSIy.js";import{n as u,t as d}from"./cn-BNhCYuha.js";import{t as f}from"./Button-D8HBcITH.js";import{t as p}from"./Button-DubaJjTD.js";import{n as m,t as h}from"./mergeRefs-B88EziiQ.js";function g(){return typeof window<`u`&&typeof window.matchMedia==`function`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}var _,v=t((()=>{_={fast:150,base:200,slow:300}}));function y(e,t){let[n,r]=(0,b.useState)(e),[i,a]=(0,b.useState)(e?`entered`:`closed`),o=(0,b.useRef)(null),s=(0,b.useRef)(null);return(0,b.useEffect)(()=>{o.current&&clearTimeout(o.current),s.current&&cancelAnimationFrame(s.current),e?(r(!0),a(`entering`),s.current=requestAnimationFrame(()=>{s.current=requestAnimationFrame(()=>a(`entered`))})):(()=>{a(e=>e===`closed`?`closed`:`exiting`);let e=g()?0:t;e===0?(r(!1),a(`closed`)):o.current=setTimeout(()=>{r(!1),a(`closed`)},e)})()},[e,t]),(0,b.useEffect)(()=>()=>{o.current&&clearTimeout(o.current),s.current&&cancelAnimationFrame(s.current)},[]),{mounted:n,state:i}}var b,x=t((()=>{b=n(r(),1),v()})),S,C,w,T,E,D,O,k,A=t((()=>{S=n(r(),1),C=n(a(),1),l(),u(),h(),v(),x(),w=i(),T={sm:`w-[320px]`,md:`w-[420px]`,lg:`w-[560px]`,xl:`w-[720px]`},E={sm:`h-[240px]`,md:`h-[360px]`,lg:`h-[480px]`,xl:`h-[600px]`},D={right:`inset-y-0 right-0 border-l`,left:`inset-y-0 left-0 border-r`,top:`inset-x-0 top-0 border-b`,bottom:`inset-x-0 bottom-0 border-t`},O={right:`translate-x-full`,left:`-translate-x-full`,top:`-translate-y-full`,bottom:`translate-y-full`},k=(0,S.forwardRef)(function({open:e,onClose:t,side:n=`right`,size:r=`md`,title:i,description:a,children:o,footer:s,closeOnOverlayClick:l=!0,showClose:u=!0,animated:f=!0,headerActions:p,className:h,dataTestId:g},v){let b=(0,S.useRef)(null),{mounted:x,state:k}=y(e,f?_.slow:0),A=k===`entered`;if((0,S.useEffect)(()=>{if(!x)return;let e=e=>{e.key===`Escape`&&t()};document.addEventListener(`keydown`,e);let n=document.body.style.overflow;return document.body.style.overflow=`hidden`,()=>{document.removeEventListener(`keydown`,e),document.body.style.overflow=n}},[x,t]),(0,S.useEffect)(()=>{if(!e)return;let t=document.activeElement;return b.current?.focus(),()=>t?.focus?.()},[e]),!x)return null;let j=n===`left`||n===`right`,M=j?T[r]:E[r];return(0,C.createPortal)((0,w.jsxs)(`div`,{role:`dialog`,"aria-modal":`true`,"aria-hidden":k===`exiting`||void 0,"aria-labelledby":i?`drawer-title`:void 0,"aria-describedby":a?`drawer-desc`:void 0,className:`fixed inset-0 z-50`,"data-test-id":g,children:[(0,w.jsx)(`div`,{className:d(`absolute inset-0 bg-black/50`,f&&`transition-opacity duration-200 motion-reduce:transition-none`,A?`opacity-100`:`opacity-0`),onClick:()=>l&&t(),"aria-hidden":!0}),(0,w.jsxs)(`div`,{ref:m(v,b),tabIndex:-1,className:d(`absolute bg-bg-default shadow-z5 outline-none flex flex-col`,D[n],j?`${M} h-full max-w-full`:`${M} w-full max-h-full`,`border-border-default`,f&&`transition-transform duration-300 ease-out motion-reduce:transition-none will-change-transform`,A?`translate-x-0 translate-y-0`:O[n],h),children:[(i||u||p)&&(0,w.jsxs)(`div`,{className:`flex items-start justify-between gap-4 px-6 pt-6 pb-4 border-b border-border-default`,children:[(0,w.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[i&&(0,w.jsx)(`h2`,{id:`drawer-title`,className:`text-h-xs font-semibold text-fg-default`,children:i}),a&&(0,w.jsx)(`p`,{id:`drawer-desc`,className:`mt-1 text-p-std text-fg-secondary`,children:a})]}),(0,w.jsxs)(`div`,{className:`flex items-center gap-1 shrink-0 -mr-2 -mt-2`,children:[p,u&&(0,w.jsx)(`button`,{type:`button`,onClick:t,"aria-label":`Close`,className:`p-2 rounded-md text-fg-secondary hover:text-fg-default hover:bg-bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300`,children:(0,w.jsx)(c,{className:`h-5 w-5`})})]})]}),o&&(0,w.jsx)(`div`,{className:`flex-1 overflow-y-auto px-6 py-4`,children:o}),s&&(0,w.jsx)(`div`,{className:`flex items-center justify-end gap-2 px-6 py-4 border-t border-border-default bg-bg-container`,children:s})]})]}),document.body)});try{k.displayName=`Drawer`,k.__docgenInfo={description:``,displayName:`Drawer`,filePath:`/home/runner/work/design-system/design-system/src/components/Drawer/Drawer.tsx`,methods:[],props:{open:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`}],description:`Whether the drawer is rendered and visible.`,name:`open`,parent:{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`},required:!0,tags:{},type:{name:`boolean`}},onClose:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`}],description:`Called when the drawer requests to be closed (Escape, overlay click, close button).`,name:`onClose`,parent:{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`},required:!0,tags:{},type:{name:`() => void`}},side:{defaultValue:{value:`right`},declarations:[{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`}],description:`Edge of the viewport the drawer slides in from.`,name:`side`,parent:{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`},required:!1,tags:{},type:{name:`enum`,raw:`DrawerSide`,value:[{value:`"bottom"`},{value:`"top"`},{value:`"right"`},{value:`"left"`}]}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`}],description:"Panel size — width when `side` is left/right, height when top/bottom.",name:`size`,parent:{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`},required:!1,tags:{},type:{name:`enum`,raw:`DrawerSize`,value:[{value:`"md"`},{value:`"sm"`},{value:`"lg"`},{value:`"xl"`}]}},title:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`}],description:``,name:`title`,parent:{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`},required:!1,tags:{},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`}],description:``,name:`description`,parent:{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`},required:!1,tags:{},type:{name:`ReactNode`}},footer:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`}],description:``,name:`footer`,parent:{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`},required:!1,tags:{},type:{name:`ReactNode`}},closeOnOverlayClick:{defaultValue:{value:`true`},declarations:[{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`}],description:"Whether clicking the overlay backdrop calls `onClose`.",name:`closeOnOverlayClick`,parent:{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`},required:!1,tags:{},type:{name:`boolean`}},showClose:{defaultValue:{value:`true`},declarations:[{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`}],description:`Whether the built-in close (X) button is rendered.`,name:`showClose`,parent:{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`},required:!1,tags:{},type:{name:`boolean`}},animated:{defaultValue:{value:`true`},declarations:[{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`}],description:"Slides/fades the drawer in and out. Set `false` for the pre-1.x instant mount/unmount.",name:`animated`,parent:{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`},required:!1,tags:{},type:{name:`boolean`}},headerActions:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`}],description:`Extra controls in the header, left of the close button — e.g. a pin or back button.`,name:`headerActions`,parent:{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`},required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`}],description:``,name:`className`,parent:{fileName:`design-system/src/components/Drawer/Drawer.types.ts`,name:`DrawerProps`},required:!1,tags:{},type:{name:`string`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),j=e({AllSizes:()=>V,BottomSide:()=>z,CustomClassName:()=>q,LeftSide:()=>L,LongContent:()=>K,NoTitleOrDescription:()=>G,NotAnimated:()=>Y,Primary:()=>I,TopSide:()=>R,WithFooter:()=>H,WithHeaderActions:()=>J,WithoutCloseButton:()=>U,WithoutOverlayClose:()=>W,__namedExportsOrder:()=>X,default:()=>F});function M(e){let[t,n]=(0,N.useState)(e.open);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(f,{onClick:()=>n(!0),children:`Open drawer`}),(0,P.jsx)(k,{...e,open:t,onClose:()=>n(!1)})]})}var N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z=t((()=>{N=n(r(),1),l(),p(),A(),P=i(),F={title:`Components/Drawer`,component:k,parameters:{layout:`centered`},argTypes:{side:{control:`select`,options:[`right`,`left`,`top`,`bottom`]},size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`]},onClose:{table:{disable:!0}}},args:{open:!1,onClose:()=>{},side:`right`,size:`md`,title:`Drawer title`,description:`A short supporting description for this drawer.`,children:`Drawer content goes here.`,closeOnOverlayClick:!0,showClose:!0},render:M},I={},L={args:{side:`left`}},R={args:{side:`top`,title:`Notification settings`,description:`Slides in from the top edge of the viewport.`}},z={args:{side:`bottom`,title:`Quick actions`,description:`Slides in from the bottom edge of the viewport.`}},B=[`sm`,`md`,`lg`,`xl`],V={render:e=>(0,P.jsx)(`div`,{className:`flex flex-wrap gap-3`,children:B.map(t=>(0,P.jsx)(M,{...e,size:t,title:`Size: ${t}`},t))})},H={args:{title:`Edit profile`,description:`Update your profile details below.`,footer:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(f,{variant:`tertiary`,onClick:()=>{},children:`Cancel`}),(0,P.jsx)(f,{variant:`primary`,onClick:()=>{},children:`Save changes`})]})}},U={args:{showClose:!1,title:`No close button`,description:`Dismiss via the overlay click or Escape key instead.`}},W={args:{closeOnOverlayClick:!1,title:`Overlay click disabled`,description:`Clicking the backdrop does nothing — use the close button or Escape.`}},G={args:{title:void 0,description:void 0,children:`Just body content, no header.`}},K={args:{title:`Scrollable content`,description:`The body scrolls independently while the header and footer stay fixed.`,children:(0,P.jsx)(`div`,{className:`flex flex-col gap-3`,children:Array.from({length:20},(e,t)=>(0,P.jsxs)(`p`,{className:`text-p-std text-fg-secondary`,children:[`Paragraph `,t+1,` of scrollable drawer content.`]},t))}),footer:(0,P.jsx)(f,{variant:`primary`,onClick:()=>{},children:`Done`})}},q={name:`Overriding classes via className`,args:{className:`bg-bg-container`,title:`Custom background`,description:`className is merged last, so it wins over the default panel background.`}},J={name:`With headerActions`,args:{title:`Edit item`,description:`headerActions renders left of the close button — e.g. pin or back.`,headerActions:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`button`,{type:`button`,"aria-label":`Back`,className:`p-2 rounded-md text-fg-secondary hover:text-fg-default hover:bg-bg-subtle`,children:(0,P.jsx)(s,{className:`h-5 w-5`})}),(0,P.jsx)(`button`,{type:`button`,"aria-label":`Pin`,className:`p-2 rounded-md text-fg-secondary hover:text-fg-default hover:bg-bg-subtle`,children:(0,P.jsx)(o,{className:`h-5 w-5`})})]})}},Y={name:`animated={false}`,args:{animated:!1,title:`Instant open/close`,description:`The pre-1.x behavior — mounts and unmounts synchronously, with no slide/fade.`}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'left'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'top',
    title: 'Notification settings',
    description: 'Slides in from the top edge of the viewport.'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    side: 'bottom',
    title: 'Quick actions',
    description: 'Slides in from the bottom edge of the viewport.'
  }
}`,...z.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap gap-3">
      {SIZES.map(size => <Template key={size} {...args} size={size} title={\`Size: \${size}\`} />)}
    </div>
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    showClose: false,
    title: 'No close button',
    description: 'Dismiss via the overlay click or Escape key instead.'
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    closeOnOverlayClick: false,
    title: 'Overlay click disabled',
    description: 'Clicking the backdrop does nothing — use the close button or Escape.'
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    title: undefined,
    description: undefined,
    children: 'Just body content, no header.'
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'bg-bg-container',
    title: 'Custom background',
    description: 'className is merged last, so it wins over the default panel background.'
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'animated={false}',
  args: {
    animated: false,
    title: 'Instant open/close',
    description: 'The pre-1.x behavior — mounts and unmounts synchronously, with no slide/fade.'
  }
}`,...Y.parameters?.docs?.source}}},X=[`Primary`,`LeftSide`,`TopSide`,`BottomSide`,`AllSizes`,`WithFooter`,`WithoutCloseButton`,`WithoutOverlayClose`,`NoTitleOrDescription`,`LongContent`,`CustomClassName`,`WithHeaderActions`,`NotAnimated`]}));Z();export{V as AllSizes,z as BottomSide,q as CustomClassName,L as LeftSide,K as LongContent,G as NoTitleOrDescription,Y as NotAnimated,I as Primary,R as TopSide,H as WithFooter,J as WithHeaderActions,U as WithoutCloseButton,W as WithoutOverlayClose,X as __namedExportsOrder,F as default,Z as n,j as t};