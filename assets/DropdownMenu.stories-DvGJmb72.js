import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-B_LPFnTU.js";import{t as a}from"./react-dom-CELMwnBP.js";import{J as o,P as s,Rt as c,S as l,ft as u,gt as d,o as f,t as p,u as m}from"./lucide-react-BozxDv4M.js";import{n as h,t as g}from"./cn-BNhCYuha.js";import{t as _}from"./Button-CxANRe_l.js";import{t as v}from"./Button-DG6qnCId.js";import{n as ee,t as y}from"./mergeRefs-B88EziiQ.js";function te({anchor:e,panel:t,open:n,side:r=`bottom`,align:i=`start`,offset:a=4,flip:o=!0,shift:s=!0,matchAnchorWidth:c=!1}){let[l,u]=(0,b.useState)({style:{position:`fixed`,top:0,left:0,visibility:`hidden`},resolvedSide:r});return(0,b.useLayoutEffect)(()=>{if(!n||!t)return;let l=()=>{let n=e?.current;if(!n)return;let l=n.getBoundingClientRect(),d=t.getBoundingClientRect(),f=window.innerHeight,p=window.innerWidth,m=r;if(o){let e=f-l.bottom,t=l.top;r===`bottom`&&e<d.height+a&&t>e?m=`top`:r===`top`&&t<d.height+a&&e>t&&(m=`bottom`)}let h=m===`bottom`?l.bottom+a:l.top-d.height-a,g=i===`end`?l.right-d.width:l.left;s&&(g=Math.min(Math.max(g,x),p-d.width-x)),u({style:{position:`fixed`,top:h,left:g,minWidth:c?l.width:void 0},resolvedSide:m})};return l(),window.addEventListener(`resize`,l),document.addEventListener(`scroll`,l,{capture:!0,passive:!0}),()=>{window.removeEventListener(`resize`,l),document.removeEventListener(`scroll`,l,{capture:!0})}},[n,e,t,r,i,a,o,s,c]),l}var b,x,S=t((()=>{b=n(r(),1),x=8}));function C(){let e=(0,T.useContext)(O);if(!e)throw Error(`Dropdown parts must be used inside <DropdownMenu>`);return e}function w({children:e}){let{open:t,setOpen:n,triggerRef:r}=C();if(!(0,T.isValidElement)(e))return e;let i=e.props??{};return(0,T.cloneElement)(e,{ref:r,onClick:e=>{let r=i.onClick;r?.(e),e.defaultPrevented||n(!t)},"aria-haspopup":`menu`,"aria-expanded":t})}var T,E,D,O,k,A,j,M,N,P,ne=t((()=>{T=n(r(),1),E=n(a(),1),p(),h(),y(),S(),D=i(),O=(0,T.createContext)(null),k=(0,T.forwardRef)(function({children:e,defaultOpen:t=!1,open:n,onOpenChange:r,anchorRef:i,className:a,dataTestId:o,...s},c){let[l,u]=(0,T.useState)(t),d=n!==void 0,f=d?n:l,p=(0,T.useRef)(null),m=e=>{d||u(e),r?.(e)};return(0,T.useEffect)(()=>{if(!f)return;let e=e=>{e.key===`Escape`&&m(!1)};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[f]),(0,D.jsx)(O.Provider,{value:{open:f,setOpen:m,triggerRef:p,anchorRef:i},children:(0,D.jsx)(`div`,{ref:c,"data-test-id":o,className:g(`relative inline-block`,a),...s,children:e})})}),A=`min-w-[200px] rounded-lg border border-border-default bg-bg-default shadow-z4 z-50 py-1`,j=(0,T.forwardRef)(function({children:e,align:t=`start`,strategy:n=`fixed`,side:r=`bottom`,sideOffset:i=4,flip:a=!0,shift:o=!0,matchTriggerWidth:s=!1,closeOnScroll:c=!1,className:l,dataTestId:u,...d},f){let{open:p,setOpen:m,triggerRef:h,anchorRef:_}=C(),v=(0,T.useRef)(null),[y,b]=(0,T.useState)(null),{style:x,resolvedSide:S}=te({anchor:_??h,panel:y,open:p&&n===`fixed`,side:r,align:t,offset:i,flip:a,shift:o,matchAnchorWidth:s});if((0,T.useEffect)(()=>{if(!p)return;let e=e=>{let t=e.target;v.current?.contains(t)||h.current?.contains(t)||_?.current?.contains(t)||m(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[p,m,h,_]),(0,T.useEffect)(()=>{if(!p||!c)return;let e=()=>m(!1);return document.addEventListener(`scroll`,e,{capture:!0,passive:!0}),()=>document.removeEventListener(`scroll`,e,{capture:!0})},[p,c,m]),(0,T.useEffect)(()=>{if(!p)return;let e=requestAnimationFrame(()=>{(v.current?.querySelector(`[role="menuitem"]:not(:disabled)`))?.focus()});return()=>cancelAnimationFrame(e)},[p]),!p)return null;let w=(0,D.jsx)(`div`,{ref:ee(f,v,n===`fixed`?b:void 0),role:`menu`,"data-test-id":u,"data-side":n===`fixed`?S:void 0,"data-align":t,onKeyDown:e=>{let t=Array.from(v.current?.querySelectorAll(`[role="menuitem"]:not(:disabled)`)??[]);if(!t.length)return;let n=t.indexOf(document.activeElement);e.key===`ArrowDown`?(e.preventDefault(),t[(n+1+t.length)%t.length]?.focus()):e.key===`ArrowUp`?(e.preventDefault(),t[(n-1+t.length)%t.length]?.focus()):e.key===`Home`?(e.preventDefault(),t[0]?.focus()):e.key===`End`&&(e.preventDefault(),t[t.length-1]?.focus())},style:n===`fixed`?x:void 0,className:g(A,n===`absolute`&&g(`absolute top-full mt-1`,t===`end`?`right-0`:`left-0`),l),...d,children:e});return n===`fixed`?(0,E.createPortal)(w,document.body):w}),M=(0,T.forwardRef)(function({children:e,onSelect:t,disabled:n,icon:r,shortcut:i,destructive:a,checked:o,meta:s,className:l,dataTestId:u,onClick:d,...f},p){let{setOpen:m}=C();return(0,D.jsxs)(`button`,{ref:p,type:`button`,role:`menuitem`,disabled:n,"data-test-id":u,onClick:e=>{d?.(e),t?.(),m(!1)},className:g(`flex w-full gap-2 px-3 py-2 text-left text-p-std text-fg-default`,s?`items-start`:`items-center`,`hover:bg-bg-subtle focus-visible:outline-none focus-visible:bg-bg-subtle`,n&&`opacity-50 cursor-not-allowed hover:bg-transparent`,a&&`text-red-700 hover:bg-red-50`,l),...f,children:[o!==void 0&&(0,D.jsx)(`span`,{className:`w-4 shrink-0`,children:o&&(0,D.jsx)(c,{className:`h-4 w-4 text-brand-500`})}),r&&(0,D.jsx)(`span`,{className:`inline-flex shrink-0 text-fg-secondary`,children:r}),(0,D.jsxs)(`span`,{className:`flex-1 min-w-0 text-left`,children:[(0,D.jsx)(`span`,{className:`block truncate`,children:e}),s&&(0,D.jsx)(`span`,{className:`block truncate text-p-sm text-fg-tertiary`,children:s})]}),i&&(0,D.jsx)(`span`,{className:`text-p-sm text-fg-tertiary shrink-0 tabular-nums`,children:i})]})}),N=(0,T.forwardRef)(function({className:e,dataTestId:t,...n},r){return(0,D.jsx)(`div`,{ref:r,role:`separator`,"data-test-id":t,className:g(`my-1 h-px bg-border-default`,e),...n})}),P=(0,T.forwardRef)(function({children:e,className:t,dataTestId:n,...r},i){return(0,D.jsx)(`div`,{ref:i,"data-test-id":n,className:g(`px-3 py-1.5 text-p-xs font-semibold uppercase tracking-wider text-fg-tertiary`,t),...r,children:e})});try{w.displayName=`DropdownTrigger`,w.__docgenInfo={description:``,displayName:`DropdownTrigger`,filePath:`/home/runner/work/design-system/design-system/src/components/DropdownMenu/DropdownMenu.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownTriggerProps`}],description:"A single element cloned with the click handler and `aria-haspopup`/`aria-expanded` that open the menu.",name:`children`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownTriggerProps`},required:!0,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}}},tags:{}}}catch{}try{k.displayName=`DropdownMenu`,k.__docgenInfo={description:``,displayName:`DropdownMenu`,filePath:`/home/runner/work/design-system/design-system/src/components/DropdownMenu/DropdownMenu.tsx`,methods:[],props:{defaultOpen:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownMenuProps`}],description:`Uncontrolled initial open state.`,name:`defaultOpen`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownMenuProps`},required:!1,tags:{},type:{name:`boolean`}},open:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownMenuProps`}],description:"Controlled open state. Pass alongside `onOpenChange` to fully control the menu.",name:`open`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownMenuProps`},required:!1,tags:{},type:{name:`boolean`}},onOpenChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownMenuProps`}],description:``,name:`onOpenChange`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownMenuProps`},required:!1,tags:{},type:{name:`((open: boolean) => void)`}},anchorRef:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownMenuProps`}],description:"Anchor the panel to an element the consumer owns instead of `<DropdownTrigger>`'s child.",name:`anchorRef`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownMenuProps`},required:!1,tags:{},type:{name:`RefObject<HTMLElement | null>`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{j.displayName=`DropdownContent`,j.__docgenInfo={description:``,displayName:`DropdownContent`,filePath:`/home/runner/work/design-system/design-system/src/components/DropdownMenu/DropdownMenu.tsx`,methods:[],props:{align:{defaultValue:{value:`start`},declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownContentProps`}],description:`Horizontal alignment of the panel relative to the trigger.`,name:`align`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownContentProps`},required:!1,tags:{},type:{name:`enum`,raw:`AnchoredAlign`,value:[{value:`"start"`},{value:`"end"`}]}},strategy:{defaultValue:{value:`fixed`},declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownContentProps`}],description:"`'fixed'` portals the panel to `document.body` so it can never be clipped by an\n`overflow: hidden` ancestor. `'absolute'` is the pre-1.x behaviour, kept as an escape\nhatch for consumers who positioned the panel themselves via `className`.",name:`strategy`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownContentProps`},required:!1,tags:{},type:{name:`enum`,raw:`DropdownContentStrategy`,value:[{value:`"fixed"`},{value:`"absolute"`}]}},side:{defaultValue:{value:`bottom`},declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownContentProps`}],description:'Preferred vertical side. Auto-flips when there isn\'t room, unless `flip` is false. Only applies when `strategy="fixed"`.',name:`side`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownContentProps`},required:!1,tags:{},type:{name:`enum`,raw:`AnchoredSide`,value:[{value:`"top"`},{value:`"bottom"`}]}},sideOffset:{defaultValue:{value:`4`},declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownContentProps`}],description:``,name:`sideOffset`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownContentProps`},required:!1,tags:{},type:{name:`number`}},flip:{defaultValue:{value:`true`},declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownContentProps`}],description:``,name:`flip`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownContentProps`},required:!1,tags:{},type:{name:`boolean`}},shift:{defaultValue:{value:`true`},declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownContentProps`}],description:``,name:`shift`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownContentProps`},required:!1,tags:{},type:{name:`boolean`}},matchTriggerWidth:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownContentProps`}],description:`Sets the panel's min-width to the trigger's/anchor's width.`,name:`matchTriggerWidth`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownContentProps`},required:!1,tags:{},type:{name:`boolean`}},closeOnScroll:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownContentProps`}],description:`Closes the menu when any ancestor scrolls.`,name:`closeOnScroll`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownContentProps`},required:!1,tags:{},type:{name:`boolean`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{M.displayName=`DropdownItem`,M.__docgenInfo={description:``,displayName:`DropdownItem`,filePath:`/home/runner/work/design-system/design-system/src/components/DropdownMenu/DropdownMenu.tsx`,methods:[],props:{onSelect:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownItemProps`}],description:"Called on click, after any native `onClick`, then closes the menu.",name:`onSelect`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownItemProps`},required:!1,tags:{},type:{name:`(() => void)`}},icon:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownItemProps`}],description:``,name:`icon`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownItemProps`},required:!1,tags:{},type:{name:`ReactNode`}},shortcut:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownItemProps`}],description:`Trailing hint text, e.g. a keyboard shortcut.`,name:`shortcut`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownItemProps`},required:!1,tags:{},type:{name:`ReactNode`}},destructive:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownItemProps`}],description:`Renders the item in the danger palette for destructive actions.`,name:`destructive`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownItemProps`},required:!1,tags:{},type:{name:`boolean`}},checked:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownItemProps`}],description:"Renders a leading check mark when `true`; reserves the space (unchecked) when `false`. Omit entirely for items with no check state.",name:`checked`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownItemProps`},required:!1,tags:{},type:{name:`boolean`}},meta:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownItemProps`}],description:`Secondary line rendered under the label.`,name:`meta`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownItemProps`},required:!1,tags:{},type:{name:`ReactNode`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{N.displayName=`DropdownSeparator`,N.__docgenInfo={description:``,displayName:`DropdownSeparator`,filePath:`/home/runner/work/design-system/design-system/src/components/DropdownMenu/DropdownMenu.tsx`,methods:[],props:{dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{P.displayName=`DropdownLabel`,P.__docgenInfo={description:``,displayName:`DropdownLabel`,filePath:`/home/runner/work/design-system/design-system/src/components/DropdownMenu/DropdownMenu.tsx`,methods:[],props:{dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),re=e({AlignEnd:()=>U,AutoFlipNearViewportBottom:()=>q,CheckedItems:()=>V,Controlled:()=>W,CustomClassName:()=>G,DisabledItem:()=>H,ExternalAnchor:()=>Y,IconTrigger:()=>z,InsideOverflowHiddenContainer:()=>K,ItemsWithMeta:()=>X,KeyboardNavigation:()=>J,LegacyAbsoluteStrategy:()=>Z,Primary:()=>R,WithLabelAndShortcuts:()=>B,__namedExportsOrder:()=>Q,default:()=>L}),F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{F=n(r(),1),p(),v(),ne(),I=i(),L={title:`Components/DropdownMenu`,component:k,parameters:{layout:`centered`}},R={render:()=>(0,I.jsxs)(k,{children:[(0,I.jsx)(w,{children:(0,I.jsx)(_,{variant:`secondary`,children:`Options`})}),(0,I.jsxs)(j,{children:[(0,I.jsx)(M,{icon:(0,I.jsx)(s,{className:`h-4 w-4`}),children:`Edit`}),(0,I.jsx)(M,{icon:(0,I.jsx)(d,{className:`h-4 w-4`}),children:`Duplicate`}),(0,I.jsx)(N,{}),(0,I.jsx)(M,{icon:(0,I.jsx)(m,{className:`h-4 w-4`}),destructive:!0,children:`Delete`})]})]})},z={name:`Icon-only trigger`,render:()=>(0,I.jsxs)(k,{children:[(0,I.jsx)(w,{children:(0,I.jsx)(_,{variant:`tertiary`,iconOnly:!0,"aria-label":`More actions`,children:(0,I.jsx)(u,{className:`h-4 w-4`})})}),(0,I.jsxs)(j,{align:`end`,children:[(0,I.jsx)(M,{icon:(0,I.jsx)(s,{className:`h-4 w-4`}),children:`Edit`}),(0,I.jsx)(M,{icon:(0,I.jsx)(d,{className:`h-4 w-4`}),children:`Duplicate`}),(0,I.jsx)(N,{}),(0,I.jsx)(M,{icon:(0,I.jsx)(m,{className:`h-4 w-4`}),destructive:!0,children:`Delete`})]})]})},B={name:`Label, separator & shortcuts`,render:()=>(0,I.jsxs)(k,{children:[(0,I.jsx)(w,{children:(0,I.jsx)(_,{variant:`secondary`,children:`Account`})}),(0,I.jsxs)(j,{children:[(0,I.jsx)(P,{children:`My account`}),(0,I.jsx)(M,{icon:(0,I.jsx)(f,{className:`h-4 w-4`}),shortcut:`⌘P`,children:`Profile`}),(0,I.jsx)(M,{icon:(0,I.jsx)(l,{className:`h-4 w-4`}),shortcut:`⌘,`,children:`Settings`}),(0,I.jsx)(N,{}),(0,I.jsx)(M,{icon:(0,I.jsx)(o,{className:`h-4 w-4`}),shortcut:`⇧⌘Q`,children:`Log out`})]})]})},V={name:`Checked items`,render:()=>{function e(){let[e,t]=(0,F.useState)(`list`);return(0,I.jsxs)(k,{children:[(0,I.jsx)(w,{children:(0,I.jsxs)(_,{variant:`secondary`,children:[`View: `,e===`list`?`List`:`Board`]})}),(0,I.jsxs)(j,{children:[(0,I.jsx)(M,{checked:e===`list`,onSelect:()=>t(`list`),children:`List`}),(0,I.jsx)(M,{checked:e===`board`,onSelect:()=>t(`board`),children:`Board`})]})]})}return(0,I.jsx)(e,{})}},H={name:`Disabled item`,render:()=>(0,I.jsxs)(k,{children:[(0,I.jsx)(w,{children:(0,I.jsx)(_,{variant:`secondary`,children:`Options`})}),(0,I.jsxs)(j,{children:[(0,I.jsx)(M,{icon:(0,I.jsx)(s,{className:`h-4 w-4`}),children:`Edit`}),(0,I.jsx)(M,{icon:(0,I.jsx)(d,{className:`h-4 w-4`}),disabled:!0,children:`Duplicate (unavailable)`}),(0,I.jsx)(M,{icon:(0,I.jsx)(m,{className:`h-4 w-4`}),destructive:!0,children:`Delete`})]})]})},U={name:`Aligned to trigger end`,render:()=>(0,I.jsx)(`div`,{className:`flex justify-end w-80`,children:(0,I.jsxs)(k,{children:[(0,I.jsx)(w,{children:(0,I.jsx)(_,{variant:`secondary`,children:`Options`})}),(0,I.jsxs)(j,{align:`end`,children:[(0,I.jsx)(M,{children:`Edit`}),(0,I.jsx)(M,{children:`Duplicate`}),(0,I.jsx)(M,{destructive:!0,children:`Delete`})]})]})})},W={render:()=>{function e(){let[e,t]=(0,F.useState)(!1);return(0,I.jsxs)(k,{open:e,onOpenChange:t,children:[(0,I.jsx)(w,{children:(0,I.jsx)(_,{variant:`secondary`,children:e?`Close menu`:`Open menu`})}),(0,I.jsxs)(j,{children:[(0,I.jsx)(M,{onSelect:()=>t(!1),children:`Edit`}),(0,I.jsx)(M,{onSelect:()=>t(!1),children:`Duplicate`})]})]})}return(0,I.jsx)(e,{})}},G={name:`Overriding classes via className`,render:()=>(0,I.jsxs)(k,{children:[(0,I.jsx)(w,{children:(0,I.jsx)(_,{variant:`secondary`,children:`Options`})}),(0,I.jsxs)(j,{className:`border-brand-500 min-w-[240px]`,children:[(0,I.jsx)(M,{className:`text-brand-700`,children:`Edit`}),(0,I.jsx)(M,{children:`Duplicate`})]})]})},K={name:`Inside an overflow-hidden container`,render:()=>(0,I.jsx)(`div`,{className:`h-32 w-64 overflow-hidden border border-border-default p-4`,children:(0,I.jsxs)(k,{children:[(0,I.jsx)(w,{children:(0,I.jsx)(_,{variant:`secondary`,children:`Options`})}),(0,I.jsxs)(j,{children:[(0,I.jsx)(M,{children:`Edit`}),(0,I.jsx)(M,{children:`Duplicate`}),(0,I.jsx)(M,{destructive:!0,children:`Delete`})]})]})})},q={name:`Auto flip near viewport bottom`,render:()=>(0,I.jsx)(`div`,{className:`mt-[70vh]`,children:(0,I.jsxs)(k,{children:[(0,I.jsx)(w,{children:(0,I.jsx)(_,{variant:`secondary`,children:`Options`})}),(0,I.jsxs)(j,{children:[(0,I.jsx)(M,{children:`Edit`}),(0,I.jsx)(M,{children:`Duplicate`}),(0,I.jsx)(M,{destructive:!0,children:`Delete`})]})]})})},J={name:`Keyboard navigation`,render:()=>(0,I.jsxs)(k,{children:[(0,I.jsx)(w,{children:(0,I.jsx)(_,{variant:`secondary`,children:`Options`})}),(0,I.jsxs)(j,{children:[(0,I.jsx)(M,{icon:(0,I.jsx)(s,{className:`h-4 w-4`}),children:`Edit`}),(0,I.jsx)(M,{icon:(0,I.jsx)(d,{className:`h-4 w-4`}),children:`Duplicate`}),(0,I.jsx)(N,{}),(0,I.jsx)(M,{icon:(0,I.jsx)(m,{className:`h-4 w-4`}),destructive:!0,children:`Delete`})]})]})},Y={name:`External anchor (anchorRef)`,render:()=>{function e(){let e=(0,F.useRef)(null),[t,n]=(0,F.useState)(!1);return(0,I.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,I.jsx)(`div`,{ref:e,className:`rounded-lg border border-dashed border-border-strong px-3 py-2 text-p-sm text-fg-secondary`,children:`Anchor element`}),(0,I.jsxs)(k,{open:t,onOpenChange:n,anchorRef:e,children:[(0,I.jsx)(_,{variant:`secondary`,onClick:()=>n(e=>!e),children:`Toggle menu`}),(0,I.jsxs)(j,{children:[(0,I.jsx)(M,{onSelect:()=>n(!1),children:`Edit`}),(0,I.jsx)(M,{onSelect:()=>n(!1),children:`Duplicate`})]})]})]})}return(0,I.jsx)(e,{})}},X={name:`Items with meta`,render:()=>(0,I.jsxs)(k,{children:[(0,I.jsx)(w,{children:(0,I.jsx)(_,{variant:`secondary`,children:`Assign to`})}),(0,I.jsxs)(j,{children:[(0,I.jsx)(M,{icon:(0,I.jsx)(f,{className:`h-4 w-4`}),meta:`Product`,children:`Ani Petrosyan`}),(0,I.jsx)(M,{icon:(0,I.jsx)(f,{className:`h-4 w-4`}),meta:`Engineering`,children:`Davit Grigoryan`})]})]})},Z={name:`Legacy absolute strategy`,render:()=>(0,I.jsxs)(k,{children:[(0,I.jsx)(w,{children:(0,I.jsx)(_,{variant:`secondary`,children:`Options`})}),(0,I.jsxs)(j,{strategy:`absolute`,children:[(0,I.jsx)(M,{children:`Edit`}),(0,I.jsx)(M,{children:`Duplicate`}),(0,I.jsx)(M,{destructive:!0,children:`Delete`})]})]})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownTrigger>
        <Button variant="secondary">Options</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem icon={<Pencil className="h-4 w-4" />}>Edit</DropdownItem>
        <DropdownItem icon={<Copy className="h-4 w-4" />}>Duplicate</DropdownItem>
        <DropdownSeparator />
        <DropdownItem icon={<Trash2 className="h-4 w-4" />} destructive>
          Delete
        </DropdownItem>
      </DropdownContent>
    </DropdownMenu>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Icon-only trigger',
  render: () => <DropdownMenu>
      <DropdownTrigger>
        <Button variant="tertiary" iconOnly aria-label="More actions">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownTrigger>
      <DropdownContent align="end">
        <DropdownItem icon={<Pencil className="h-4 w-4" />}>Edit</DropdownItem>
        <DropdownItem icon={<Copy className="h-4 w-4" />}>Duplicate</DropdownItem>
        <DropdownSeparator />
        <DropdownItem icon={<Trash2 className="h-4 w-4" />} destructive>
          Delete
        </DropdownItem>
      </DropdownContent>
    </DropdownMenu>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Label, separator & shortcuts',
  render: () => <DropdownMenu>
      <DropdownTrigger>
        <Button variant="secondary">Account</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownLabel>My account</DropdownLabel>
        <DropdownItem icon={<User className="h-4 w-4" />} shortcut="⌘P">
          Profile
        </DropdownItem>
        <DropdownItem icon={<Settings className="h-4 w-4" />} shortcut="⌘,">
          Settings
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem icon={<LogOut className="h-4 w-4" />} shortcut="⇧⌘Q">
          Log out
        </DropdownItem>
      </DropdownContent>
    </DropdownMenu>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Checked items',
  render: () => {
    function CheckedExample() {
      const [view, setView] = useState<'list' | 'board'>('list');
      return <DropdownMenu>
          <DropdownTrigger>
            <Button variant="secondary">View: {view === 'list' ? 'List' : 'Board'}</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem checked={view === 'list'} onSelect={() => setView('list')}>
              List
            </DropdownItem>
            <DropdownItem checked={view === 'board'} onSelect={() => setView('board')}>
              Board
            </DropdownItem>
          </DropdownContent>
        </DropdownMenu>;
    }
    return <CheckedExample />;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Disabled item',
  render: () => <DropdownMenu>
      <DropdownTrigger>
        <Button variant="secondary">Options</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem icon={<Pencil className="h-4 w-4" />}>Edit</DropdownItem>
        <DropdownItem icon={<Copy className="h-4 w-4" />} disabled>
          Duplicate (unavailable)
        </DropdownItem>
        <DropdownItem icon={<Trash2 className="h-4 w-4" />} destructive>
          Delete
        </DropdownItem>
      </DropdownContent>
    </DropdownMenu>
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Aligned to trigger end',
  render: () => <div className="flex justify-end w-80">
      <DropdownMenu>
        <DropdownTrigger>
          <Button variant="secondary">Options</Button>
        </DropdownTrigger>
        <DropdownContent align="end">
          <DropdownItem>Edit</DropdownItem>
          <DropdownItem>Duplicate</DropdownItem>
          <DropdownItem destructive>Delete</DropdownItem>
        </DropdownContent>
      </DropdownMenu>
    </div>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    function ControlledExample() {
      const [open, setOpen] = useState(false);
      return <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownTrigger>
            <Button variant="secondary">{open ? 'Close menu' : 'Open menu'}</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem onSelect={() => setOpen(false)}>Edit</DropdownItem>
            <DropdownItem onSelect={() => setOpen(false)}>Duplicate</DropdownItem>
          </DropdownContent>
        </DropdownMenu>;
    }
    return <ControlledExample />;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  render: () => <DropdownMenu>
      <DropdownTrigger>
        <Button variant="secondary">Options</Button>
      </DropdownTrigger>
      <DropdownContent className="border-brand-500 min-w-[240px]">
        <DropdownItem className="text-brand-700">Edit</DropdownItem>
        <DropdownItem>Duplicate</DropdownItem>
      </DropdownContent>
    </DropdownMenu>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Inside an overflow-hidden container',
  render: () => <div className="h-32 w-64 overflow-hidden border border-border-default p-4">
      <DropdownMenu>
        <DropdownTrigger>
          <Button variant="secondary">Options</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem>Edit</DropdownItem>
          <DropdownItem>Duplicate</DropdownItem>
          <DropdownItem destructive>Delete</DropdownItem>
        </DropdownContent>
      </DropdownMenu>
    </div>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Auto flip near viewport bottom',
  render: () => <div className="mt-[70vh]">
      <DropdownMenu>
        <DropdownTrigger>
          <Button variant="secondary">Options</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem>Edit</DropdownItem>
          <DropdownItem>Duplicate</DropdownItem>
          <DropdownItem destructive>Delete</DropdownItem>
        </DropdownContent>
      </DropdownMenu>
    </div>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Keyboard navigation',
  render: () => <DropdownMenu>
      <DropdownTrigger>
        <Button variant="secondary">Options</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem icon={<Pencil className="h-4 w-4" />}>Edit</DropdownItem>
        <DropdownItem icon={<Copy className="h-4 w-4" />}>Duplicate</DropdownItem>
        <DropdownSeparator />
        <DropdownItem icon={<Trash2 className="h-4 w-4" />} destructive>
          Delete
        </DropdownItem>
      </DropdownContent>
    </DropdownMenu>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'External anchor (anchorRef)',
  render: () => {
    function ExternalAnchorExample() {
      const anchorRef = useRef<HTMLDivElement>(null);
      const [open, setOpen] = useState(false);
      return <div className="flex items-center gap-3">
          <div ref={anchorRef} className="rounded-lg border border-dashed border-border-strong px-3 py-2 text-p-sm text-fg-secondary">
            Anchor element
          </div>
          <DropdownMenu open={open} onOpenChange={setOpen} anchorRef={anchorRef}>
            <Button variant="secondary" onClick={() => setOpen(v => !v)}>
              Toggle menu
            </Button>
            <DropdownContent>
              <DropdownItem onSelect={() => setOpen(false)}>Edit</DropdownItem>
              <DropdownItem onSelect={() => setOpen(false)}>Duplicate</DropdownItem>
            </DropdownContent>
          </DropdownMenu>
        </div>;
    }
    return <ExternalAnchorExample />;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Items with meta',
  render: () => <DropdownMenu>
      <DropdownTrigger>
        <Button variant="secondary">Assign to</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem icon={<User className="h-4 w-4" />} meta="Product">
          Ani Petrosyan
        </DropdownItem>
        <DropdownItem icon={<User className="h-4 w-4" />} meta="Engineering">
          Davit Grigoryan
        </DropdownItem>
      </DropdownContent>
    </DropdownMenu>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Legacy absolute strategy',
  render: () => <DropdownMenu>
      <DropdownTrigger>
        <Button variant="secondary">Options</Button>
      </DropdownTrigger>
      <DropdownContent strategy="absolute">
        <DropdownItem>Edit</DropdownItem>
        <DropdownItem>Duplicate</DropdownItem>
        <DropdownItem destructive>Delete</DropdownItem>
      </DropdownContent>
    </DropdownMenu>
}`,...Z.parameters?.docs?.source}}},Q=[`Primary`,`IconTrigger`,`WithLabelAndShortcuts`,`CheckedItems`,`DisabledItem`,`AlignEnd`,`Controlled`,`CustomClassName`,`InsideOverflowHiddenContainer`,`AutoFlipNearViewportBottom`,`KeyboardNavigation`,`ExternalAnchor`,`ItemsWithMeta`,`LegacyAbsoluteStrategy`]}));$();export{U as AlignEnd,q as AutoFlipNearViewportBottom,V as CheckedItems,W as Controlled,G as CustomClassName,H as DisabledItem,Y as ExternalAnchor,z as IconTrigger,K as InsideOverflowHiddenContainer,X as ItemsWithMeta,J as KeyboardNavigation,Z as LegacyAbsoluteStrategy,R as Primary,B as WithLabelAndShortcuts,Q as __namedExportsOrder,L as default,$ as n,re as t};