import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-DhNGfB7i.js";import{t as a}from"./react-dom-B90Lsb3h.js";import{n as o,t as s}from"./lucide-react-BJ2aikSv.js";import{n as c,t as l}from"./cn-BNhCYuha.js";import{t as u}from"./Button-CvyVeca1.js";import{t as d}from"./Button-BkgptpcF.js";import{n as f,t as p}from"./mergeRefs-B88EziiQ.js";var m,h,g,_,v,y=t((()=>{m=n(r(),1),h=n(a(),1),s(),c(),p(),g=i(),_={sm:`max-w-sm`,md:`max-w-md`,lg:`max-w-lg`,xl:`max-w-2xl`,"2xl":`max-w-4xl`},v=(0,m.forwardRef)(function({open:e,onClose:t,title:n,description:r,children:i,footer:a,size:s=`md`,closeOnOverlayClick:c=!0,showClose:u=!0,className:d,dataTestId:p},v){let y=(0,m.useRef)(null);return(0,m.useEffect)(()=>{if(!e)return;let n=e=>{e.key===`Escape`&&t()};document.addEventListener(`keydown`,n);let r=document.body.style.overflow;return document.body.style.overflow=`hidden`,()=>{document.removeEventListener(`keydown`,n),document.body.style.overflow=r}},[e,t]),(0,m.useEffect)(()=>{if(!e)return;let t=document.activeElement;return y.current?.focus(),()=>t?.focus?.()},[e]),e?(0,h.createPortal)((0,g.jsxs)(`div`,{role:`dialog`,"aria-modal":`true`,"aria-labelledby":n?`modal-title`:void 0,"aria-describedby":r?`modal-desc`:void 0,className:`fixed inset-0 z-50 flex items-center justify-center p-4`,children:[(0,g.jsx)(`div`,{className:`absolute inset-0 bg-black/50`,onClick:()=>c&&t(),"aria-hidden":!0}),(0,g.jsxs)(`div`,{ref:f(y,v),tabIndex:-1,"data-test-id":p,className:l(`relative w-full bg-bg-default rounded-xl shadow-z5 outline-none flex flex-col max-h-[90vh]`,_[s],d),children:[(n||u)&&(0,g.jsxs)(`div`,{className:`flex items-start justify-between gap-4 px-6 pt-6 pb-4`,children:[(0,g.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[n&&(0,g.jsx)(`h2`,{id:`modal-title`,className:`text-h-xs font-semibold text-fg-default`,children:n}),r&&(0,g.jsx)(`p`,{id:`modal-desc`,className:`mt-1 text-p-std text-fg-secondary`,children:r})]}),u&&(0,g.jsx)(`button`,{type:`button`,onClick:t,"aria-label":`Close`,className:`-mr-2 -mt-2 p-2 rounded-md text-fg-secondary hover:text-fg-default hover:bg-bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300`,children:(0,g.jsx)(o,{className:`h-5 w-5`})})]}),i&&(0,g.jsx)(`div`,{className:`px-6 pb-6 overflow-y-auto`,children:i}),a&&(0,g.jsx)(`div`,{className:`flex items-center justify-end gap-2 px-6 py-4 border-t border-border-default bg-bg-container rounded-b-xl`,children:a})]})]}),document.body):null});try{v.displayName=`Modal`,v.__docgenInfo={description:``,displayName:`Modal`,filePath:`/home/runner/work/design-system/design-system/src/components/Modal/Modal.tsx`,methods:[],props:{open:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`}],description:`Whether the modal is mounted and visible. Nothing renders (not even to the portal) when false.`,name:`open`,parent:{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`},required:!0,tags:{},type:{name:`boolean`}},onClose:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`}],description:`Called when the user presses Escape, clicks the overlay (if enabled), or clicks the close button.`,name:`onClose`,parent:{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`},required:!0,tags:{},type:{name:`() => void`}},title:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`}],description:``,name:`title`,parent:{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`},required:!1,tags:{},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`}],description:``,name:`description`,parent:{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`},required:!1,tags:{},type:{name:`ReactNode`}},footer:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`}],description:`Rendered in a bordered footer row, right-aligned — typically action buttons.`,name:`footer`,parent:{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`},required:!1,tags:{},type:{name:`ReactNode`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`},required:!1,tags:{},type:{name:`enum`,raw:`ModalSize`,value:[{value:`"md"`},{value:`"sm"`},{value:`"lg"`},{value:`"xl"`},{value:`"2xl"`}]}},closeOnOverlayClick:{defaultValue:{value:`true`},declarations:[{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`}],description:"Close the modal when the backdrop is clicked. Defaults to `true`.",name:`closeOnOverlayClick`,parent:{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`},required:!1,tags:{},type:{name:`boolean`}},showClose:{defaultValue:{value:`true`},declarations:[{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`}],description:"Show the close (X) button in the header. Defaults to `true`.",name:`showClose`,parent:{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`},required:!1,tags:{},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`}],description:"Merged with the panel's own classes via `cn()` — last conflicting utility wins.",name:`className`,parent:{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`},required:!1,tags:{},type:{name:`string`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),b=e({CloseOnOverlayClickDisabled:()=>k,CustomClassName:()=>F,DoubleExtraLarge:()=>P,ExtraLarge:()=>N,Large:()=>M,Primary:()=>T,ScrollableContent:()=>A,Small:()=>j,WithFooter:()=>E,WithoutDescription:()=>D,WithoutTitle:()=>O,__namedExportsOrder:()=>I,default:()=>w});function x(e){let[t,n]=(0,S.useState)(e.open);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(u,{onClick:()=>n(!0),children:`Open modal`}),(0,C.jsx)(v,{...e,open:t,onClose:()=>n(!1)})]})}var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L=t((()=>{S=n(r(),1),y(),d(),C=i(),w={title:`Components/Modal`,component:v,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`,`2xl`]},onClose:{table:{disable:!0}}},args:{open:!1,onClose:()=>{},title:`Modal title`,description:`A short supporting description of what this modal is for.`,children:`Modal body content goes here.`,size:`md`,closeOnOverlayClick:!0,showClose:!0},render:x},T={},E={args:{footer:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(u,{variant:`secondary`,children:`Cancel`}),(0,C.jsx)(u,{variant:`primary`,children:`Confirm`})]})}},D={args:{description:void 0}},O={name:`Content only (no title, no close button)`,args:{title:void 0,description:void 0,showClose:!1}},k={args:{closeOnOverlayClick:!1}},A={args:{children:(0,C.jsx)(`div`,{className:`space-y-3`,children:Array.from({length:12},(e,t)=>(0,C.jsxs)(`p`,{className:`text-p-std text-fg-secondary`,children:[`Paragraph `,t+1,` of long body content, demonstrating that the content area scrolls independently while the header and footer stay pinned.`]},t))}),footer:(0,C.jsx)(u,{variant:`primary`,children:`Done`})}},j={args:{size:`sm`}},M={args:{size:`lg`}},N={args:{size:`xl`}},P={args:{size:`2xl`}},F={name:`Overriding classes via className`,args:{className:`bg-bg-container border-2 border-brand-500`}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    footer: <>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Confirm</Button>
      </>
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    description: undefined
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Content only (no title, no close button)',
  args: {
    title: undefined,
    description: undefined,
    showClose: false
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    closeOnOverlayClick: false
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    size: '2xl'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'bg-bg-container border-2 border-brand-500'
  }
}`,...F.parameters?.docs?.source}}},I=[`Primary`,`WithFooter`,`WithoutDescription`,`WithoutTitle`,`CloseOnOverlayClickDisabled`,`ScrollableContent`,`Small`,`Large`,`ExtraLarge`,`DoubleExtraLarge`,`CustomClassName`]}));L();export{k as CloseOnOverlayClickDisabled,F as CustomClassName,P as DoubleExtraLarge,N as ExtraLarge,M as Large,T as Primary,A as ScrollableContent,j as Small,E as WithFooter,D as WithoutDescription,O as WithoutTitle,I as __namedExportsOrder,w as default,L as n,b as t};