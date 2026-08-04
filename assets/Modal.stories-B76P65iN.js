import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-BgCNYJC5.js";import{t as a}from"./react-dom-CwR_087z.js";import{n as o,t as s}from"./lucide-react-D8xGtw7t.js";import{n as c,t as l}from"./cn-CHNBg8JS.js";import{t as u}from"./Button-pCbQguxX.js";import{t as d}from"./Button-CJ5ck7Yc.js";function f(...e){return t=>{for(let n of e)typeof n==`function`?n(t):n&&(n.current=t)}}var p,m,h,g,_,v=t((()=>{p=n(r(),1),m=n(a(),1),s(),c(),h=i(),g={sm:`max-w-sm`,md:`max-w-md`,lg:`max-w-lg`,xl:`max-w-2xl`,"2xl":`max-w-4xl`},_=(0,p.forwardRef)(function({open:e,onClose:t,title:n,description:r,children:i,footer:a,size:s=`md`,closeOnOverlayClick:c=!0,showClose:u=!0,className:d,dataTestId:_},v){let y=(0,p.useRef)(null);return(0,p.useEffect)(()=>{if(!e)return;let n=e=>{e.key===`Escape`&&t()};document.addEventListener(`keydown`,n);let r=document.body.style.overflow;return document.body.style.overflow=`hidden`,()=>{document.removeEventListener(`keydown`,n),document.body.style.overflow=r}},[e,t]),(0,p.useEffect)(()=>{if(!e)return;let t=document.activeElement;return y.current?.focus(),()=>t?.focus?.()},[e]),e?(0,m.createPortal)((0,h.jsxs)(`div`,{role:`dialog`,"aria-modal":`true`,"aria-labelledby":n?`modal-title`:void 0,"aria-describedby":r?`modal-desc`:void 0,className:`fixed inset-0 z-50 flex items-center justify-center p-4`,children:[(0,h.jsx)(`div`,{className:`absolute inset-0 bg-black/50`,onClick:()=>c&&t(),"aria-hidden":!0}),(0,h.jsxs)(`div`,{ref:f(y,v),tabIndex:-1,"data-test-id":_,className:l(`relative w-full bg-bg-default rounded-xl shadow-z5 outline-none flex flex-col max-h-[90vh]`,g[s],d),children:[(n||u)&&(0,h.jsxs)(`div`,{className:`flex items-start justify-between gap-4 px-6 pt-6 pb-4`,children:[(0,h.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[n&&(0,h.jsx)(`h2`,{id:`modal-title`,className:`text-h-xs font-semibold text-fg-default`,children:n}),r&&(0,h.jsx)(`p`,{id:`modal-desc`,className:`mt-1 text-p-std text-fg-secondary`,children:r})]}),u&&(0,h.jsx)(`button`,{type:`button`,onClick:t,"aria-label":`Close`,className:`-mr-2 -mt-2 p-2 rounded-md text-fg-secondary hover:text-fg-default hover:bg-bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300`,children:(0,h.jsx)(o,{className:`h-5 w-5`})})]}),i&&(0,h.jsx)(`div`,{className:`px-6 pb-6 overflow-y-auto`,children:i}),a&&(0,h.jsx)(`div`,{className:`flex items-center justify-end gap-2 px-6 py-4 border-t border-border-default bg-bg-container rounded-b-xl`,children:a})]})]}),document.body):null});try{_.displayName=`Modal`,_.__docgenInfo={description:``,displayName:`Modal`,filePath:`/home/runner/work/design-system/design-system/src/components/Modal/Modal.tsx`,methods:[],props:{open:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`}],description:`Whether the modal is mounted and visible. Nothing renders (not even to the portal) when false.`,name:`open`,parent:{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`},required:!0,tags:{},type:{name:`boolean`}},onClose:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`}],description:`Called when the user presses Escape, clicks the overlay (if enabled), or clicks the close button.`,name:`onClose`,parent:{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`},required:!0,tags:{},type:{name:`() => void`}},title:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`}],description:``,name:`title`,parent:{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`},required:!1,tags:{},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`}],description:``,name:`description`,parent:{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`},required:!1,tags:{},type:{name:`ReactNode`}},footer:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`}],description:`Rendered in a bordered footer row, right-aligned — typically action buttons.`,name:`footer`,parent:{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`},required:!1,tags:{},type:{name:`ReactNode`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`},required:!1,tags:{},type:{name:`enum`,raw:`ModalSize`,value:[{value:`"md"`},{value:`"sm"`},{value:`"lg"`},{value:`"xl"`},{value:`"2xl"`}]}},closeOnOverlayClick:{defaultValue:{value:`true`},declarations:[{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`}],description:"Close the modal when the backdrop is clicked. Defaults to `true`.",name:`closeOnOverlayClick`,parent:{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`},required:!1,tags:{},type:{name:`boolean`}},showClose:{defaultValue:{value:`true`},declarations:[{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`}],description:"Show the close (X) button in the header. Defaults to `true`.",name:`showClose`,parent:{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`},required:!1,tags:{},type:{name:`boolean`}},className:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`}],description:"Merged with the panel's own classes via `cn()` — last conflicting utility wins.",name:`className`,parent:{fileName:`design-system/src/components/Modal/Modal.types.ts`,name:`ModalProps`},required:!1,tags:{},type:{name:`string`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),y=e({CloseOnOverlayClickDisabled:()=>O,CustomClassName:()=>P,DoubleExtraLarge:()=>N,ExtraLarge:()=>M,Interactive:()=>F,Large:()=>j,Primary:()=>w,ScrollableContent:()=>k,Small:()=>A,WithFooter:()=>T,WithoutDescription:()=>E,WithoutTitle:()=>D,__namedExportsOrder:()=>I,default:()=>C});function b(e){let[t,n]=(0,x.useState)(!1);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(u,{onClick:()=>n(!0),children:`Open modal`}),(0,S.jsx)(_,{...e,open:t,onClose:()=>n(!1)})]})}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L=t((()=>{x=n(r(),1),v(),d(),S=i(),C={title:`Components/Modal`,component:_,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`,`xl`,`2xl`]}},args:{open:!0,onClose:()=>{},title:`Modal title`,description:`A short supporting description of what this modal is for.`,children:`Modal body content goes here.`,size:`md`,closeOnOverlayClick:!0,showClose:!0}},w={},T={args:{footer:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(u,{variant:`secondary`,children:`Cancel`}),(0,S.jsx)(u,{variant:`primary`,children:`Confirm`})]})}},E={args:{description:void 0}},D={name:`Content only (no title, no close button)`,args:{title:void 0,description:void 0,showClose:!1}},O={args:{closeOnOverlayClick:!1}},k={args:{children:(0,S.jsx)(`div`,{className:`space-y-3`,children:Array.from({length:12},(e,t)=>(0,S.jsxs)(`p`,{className:`text-p-std text-fg-secondary`,children:[`Paragraph `,t+1,` of long body content, demonstrating that the content area scrolls independently while the header and footer stay pinned.`]},t))}),footer:(0,S.jsx)(u,{variant:`primary`,children:`Done`})}},A={args:{size:`sm`}},j={args:{size:`lg`}},M={args:{size:`xl`}},N={args:{size:`2xl`}},P={name:`Overriding classes via className`,args:{className:`bg-bg-container border-2 border-brand-500`}},F={name:`Interactive (trigger + close)`,args:{open:!1},render:e=>(0,S.jsx)(b,{...e})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    footer: <>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Confirm</Button>
      </>
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    description: undefined
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Content only (no title, no close button)',
  args: {
    title: undefined,
    description: undefined,
    showClose: false
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    closeOnOverlayClick: false
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    size: '2xl'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'bg-bg-container border-2 border-brand-500'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Interactive (trigger + close)',
  args: {
    open: false
  },
  render: args => <InteractiveModal {...args} />
}`,...F.parameters?.docs?.source}}},I=[`Primary`,`WithFooter`,`WithoutDescription`,`WithoutTitle`,`CloseOnOverlayClickDisabled`,`ScrollableContent`,`Small`,`Large`,`ExtraLarge`,`DoubleExtraLarge`,`CustomClassName`,`Interactive`]}));L();export{O as CloseOnOverlayClickDisabled,P as CustomClassName,N as DoubleExtraLarge,M as ExtraLarge,F as Interactive,j as Large,w as Primary,k as ScrollableContent,A as Small,T as WithFooter,E as WithoutDescription,D as WithoutTitle,I as __namedExportsOrder,C as default,L as n,y as t};