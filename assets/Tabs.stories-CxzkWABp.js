import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-DQlrvNv5.js";import{S as a,in as o,n as s,t as c,v as l,wt as u}from"./lucide-react-DO_9iYlO.js";import{n as d,t as f}from"./cn-BNhCYuha.js";import{n as p,r as m}from"./optionValue-DydacNfb.js";import{t as h}from"./Badge-BFhTViIp.js";import{n as g,t as _}from"./mergeRefs-B88EziiQ.js";import{t as v}from"./Badge-Xx_BqPSz.js";function y(){let e=(0,x.useContext)(C);if(!e)throw Error(`Tab components must be used inside <Tabs>`);return e}function b(e){let t=[];x.Children.forEach(e,e=>{(0,x.isValidElement)(e)&&t.push(e)});let n=t.find(e=>e.type?.displayName===`TabList`);if(!(0,x.isValidElement)(n))return``;let r=x.Children.toArray(n.props.children);for(let e of r)if((0,x.isValidElement)(e)){let t=e.props.value;if(t!==void 0)return t}return``}var x,S,C,w,T,E,D,O,k,A=t((()=>{x=n(r(),1),d(),_(),p(),v(),S=i(),C=(0,x.createContext)(null),w=(0,x.forwardRef)(function({defaultValue:e,value:t,onValueChange:n,variant:r=`underline`,size:i=`md`,disabled:a=!1,className:o,children:s,dataTestId:c,...l},u){let[d,p]=(0,x.useState)(()=>e??b(s)),m=t!==void 0,h=m?t:d,g=(0,x.useId)();return(0,S.jsx)(C.Provider,{value:{value:h,setValue:e=>{m||p(e),n?.(e)},variant:r,size:i,tabsId:g,disabled:a},children:(0,S.jsx)(`div`,{ref:u,"data-test-id":c,className:f(`flex flex-col gap-4`,o),...l,children:s})})}),T=(0,x.forwardRef)(function({children:e,scrollable:t=!1,className:n,dataTestId:r,onKeyDown:i,...a},o){let{variant:s}=y(),c=(0,x.useRef)(null);return(0,S.jsx)(`div`,{ref:g(o,c),role:`tablist`,onKeyDown:e=>{i?.(e);let t=Array.from(c.current?.querySelectorAll(`[role="tab"]:not(:disabled)`)??[]);if(!t.length)return;let n=t.indexOf(document.activeElement),r=null;if(e.key===`ArrowRight`?r=(n+1+t.length)%t.length:e.key===`ArrowLeft`?r=(n-1+t.length)%t.length:e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),r===null)return;let a=t[r];a&&(e.preventDefault(),a.focus(),a.scrollIntoView({block:`nearest`,inline:`nearest`}),a.click())},"data-test-id":r,className:f(`inline-flex`,s===`underline`&&`border-b border-border-default gap-1 w-full`,s===`pills`&&`gap-1 p-1 rounded-full bg-bg-container`,s===`boxed`&&`gap-0 rounded-lg border border-border-default overflow-hidden bg-bg-container`,t&&f(`overflow-x-auto flex-nowrap scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`,`[mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%-16px),transparent)]`),n),...a,children:e})}),T.displayName=`TabList`,E={lg:`h-11 px-4 text-p-md`,md:`h-10 px-3 text-p-std`,sm:`h-8 px-2.5 text-p-sm`},D={underline:{on:`bg-brand-500 text-white`,off:`bg-bg-subtle text-fg-secondary`},pills:{on:`bg-brand-500 text-white`,off:`bg-bg-subtle text-fg-secondary`},boxed:{on:`bg-brand-500 text-white`,off:`bg-bg-subtle text-fg-secondary`}},O=(0,x.forwardRef)(function({value:e,children:t,disabled:n,icon:r,badge:i,badgeProps:a,rightIcon:o,onRightIconClick:s,rightIconLabel:c,className:l,dataTestId:u,onClick:d,id:p,...g},_){let{value:v,setValue:b,variant:x,size:C,tabsId:w,disabled:T}=y(),O=m(v,e),k=T||n,A=i!=null&&i!==!1,j=p??`${w}-tab-${e}`,M=`${w}-panel-${e}`,N=f(`group relative inline-flex items-center justify-center gap-2 font-medium outline-none transition-colors`,`focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-1 focus-visible:rounded-md`,E[C],k&&`opacity-50 cursor-not-allowed`),P=x===`underline`?f(`rounded-t-lg`,O?`text-fg-default`:`text-fg-secondary hover:text-fg-default hover:bg-bg-subtle/60`):x===`pills`?f(`rounded-full`,O?`bg-bg-default text-fg-default shadow-z1`:`bg-transparent text-fg-secondary hover:text-fg-default`):f(`border-r border-border-default last:border-r-0`,O?`bg-bg-default text-fg-default`:`bg-transparent text-fg-secondary hover:bg-bg-subtle`),F=(0,S.jsxs)(`button`,{ref:_,id:j,type:`button`,role:`tab`,"aria-selected":O,"aria-controls":M,tabIndex:O?0:-1,disabled:k,"data-test-id":u,onClick:t=>{k||(b(e),d?.(t))},className:f(N,P,o&&`pr-9`,l),...g,children:[r&&(0,S.jsx)(`span`,{className:`inline-flex shrink-0`,children:r}),(0,S.jsx)(`span`,{className:`truncate`,children:t}),A&&(a?(0,S.jsx)(h,{size:`xs`,...a,children:i}):(0,S.jsx)(`span`,{className:f(`inline-flex items-center justify-center shrink-0 rounded-full px-1.5 h-5 min-w-[1.25rem]`,`text-label-xs font-semibold tabular-nums leading-none transition-colors`,O?D[x].on:D[x].off),children:i})),x===`underline`&&(0,S.jsx)(`span`,{"aria-hidden":!0,className:f(`pointer-events-none absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-brand-500 transition-opacity duration-150`,O?`opacity-100`:`opacity-0`)})]});return o?(0,S.jsxs)(`span`,{className:`relative inline-flex`,children:[F,(0,S.jsx)(`button`,{type:`button`,"aria-label":c,disabled:k,onClick:t=>{t.stopPropagation(),k||s?.(e)},className:`absolute right-1.5 top-1/2 -translate-y-1/2 inline-flex items-center justify-center size-5 rounded text-fg-tertiary hover:text-fg-default hover:bg-bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300`,children:o})]}):F}),k=(0,x.forwardRef)(function({value:e,children:t,className:n,dataTestId:r,id:i,keepMounted:a=!1,...o},s){let{value:c,tabsId:l}=y(),u=m(c,e);return!u&&!a?null:(0,S.jsx)(`div`,{ref:s,id:i??`${l}-panel-${e}`,role:`tabpanel`,"aria-labelledby":`${l}-tab-${e}`,hidden:!u,"data-test-id":r,className:n,...o,children:t})});try{w.displayName=`Tabs`,w.__docgenInfo={description:``,displayName:`Tabs`,filePath:`/home/runner/work/design-system/design-system/src/components/Tabs/Tabs.tsx`,methods:[],props:{defaultValue:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabsProps`}],description:"Uncontrolled initial active tab value. Falls back to the first `<Tab>`'s value if omitted.",name:`defaultValue`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabsProps`},required:!1,tags:{},type:{name:`OptionValue`}},value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabsProps`}],description:"Controlled active tab value. Pass alongside `onValueChange` to fully control which tab is active.",name:`value`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabsProps`},required:!1,tags:{},type:{name:`OptionValue`}},onValueChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabsProps`}],description:``,name:`onValueChange`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabsProps`},required:!1,tags:{},type:{name:`((value: OptionValue) => void)`}},variant:{defaultValue:{value:`underline`},declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabsProps`}],description:``,name:`variant`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabsProps`},required:!1,tags:{},type:{name:`enum`,raw:`TabsVariant`,value:[{value:`"underline"`},{value:`"pills"`},{value:`"boxed"`}]}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabsProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabsProps`},required:!1,tags:{},type:{name:`enum`,raw:`TabsSize`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabsProps`}],description:"Disables every tab in the bar at once. OR'd with each `Tab`'s own `disabled`.",name:`disabled`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabsProps`},required:!1,tags:{},type:{name:`boolean`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{T.displayName=`TabList`,T.__docgenInfo={description:``,displayName:`TabList`,filePath:`/home/runner/work/design-system/design-system/src/components/Tabs/Tabs.tsx`,methods:[],props:{scrollable:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabListProps`}],description:`Horizontally scrolls the bar when tabs overflow, instead of wrapping.`,name:`scrollable`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabListProps`},required:!1,tags:{},type:{name:`boolean`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{O.displayName=`Tab`,O.__docgenInfo={description:``,displayName:`Tab`,filePath:`/home/runner/work/design-system/design-system/src/components/Tabs/Tabs.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabProps`}],description:"Unique identifier matched against the parent `Tabs`'s active value.",name:`value`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabProps`},required:!0,tags:{},type:{name:`OptionValue`}},icon:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabProps`}],description:``,name:`icon`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabProps`},required:!1,tags:{},type:{name:`ReactNode`}},badge:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabProps`}],description:"Count/indicator rendered after the label. Hidden when `undefined`, `null`, or `false`.",name:`badge`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabProps`},required:!1,tags:{},type:{name:`ReactNode`}},badgeProps:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabProps`}],description:"Styles `badge` through `Badge` instead of the default fixed-style count pill. Omit to keep the default.",name:`badgeProps`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabProps`},required:!1,tags:{},type:{name:`Pick<BadgeProps, "size" | "variant" | "appearance">`}},rightIcon:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabProps`}],description:`Trailing icon rendered as its own button — e.g. a close-tab X. Rendered as a sibling of the tab button, not a nested one (nesting a button inside a button is invalid HTML).`,name:`rightIcon`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabProps`},required:!1,tags:{},type:{name:`ReactNode`}},onRightIconClick:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabProps`}],description:"Called with this tab's `value` when `rightIcon` is clicked. Does not activate the tab.",name:`onRightIconClick`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabProps`},required:!1,tags:{},type:{name:`((value: OptionValue) => void)`}},rightIconLabel:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabProps`}],description:"Accessible name for the `rightIcon` button. Required when `rightIcon` is set.",name:`rightIconLabel`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabProps`},required:!1,tags:{},type:{name:`string`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{k.displayName=`TabPanel`,k.__docgenInfo={description:``,displayName:`TabPanel`,filePath:`/home/runner/work/design-system/design-system/src/components/Tabs/Tabs.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabPanelProps`}],description:"Matched against the parent `Tabs`'s active value; hidden (or unmounted, depending on `keepMounted`) when not active.",name:`value`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabPanelProps`},required:!0,tags:{},type:{name:`OptionValue`}},keepMounted:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabPanelProps`}],description:"Keeps the panel mounted (hidden via the `hidden` attribute) while inactive, instead of unmounting it — preserves scroll position and in-panel state across tab switches.",name:`keepMounted`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabPanelProps`},required:!1,tags:{},type:{name:`boolean`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),j=e({AllSizes:()=>G,Boxed:()=>L,ClosableTabs:()=>K,Controlled:()=>V,CustomClassName:()=>U,DisabledTab:()=>B,KeepMounted:()=>Z,KeyboardNavigation:()=>Q,NumericValues:()=>H,Pills:()=>I,Primary:()=>F,ScrollableOverflow:()=>X,StyledBadge:()=>q,WholeBarDisabled:()=>J,WithBadges:()=>z,WithIcons:()=>R,__namedExportsOrder:()=>$,default:()=>P}),M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ee=t((()=>{M=n(r(),1),c(),A(),N=i(),P={title:`Components/Tabs`,component:w,parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:[`underline`,`pills`,`boxed`]},size:{control:`select`,options:[`lg`,`md`,`sm`]}},args:{variant:`underline`,size:`md`}},F={render:e=>(0,N.jsxs)(w,{...e,defaultValue:`profile`,className:`w-96`,children:[(0,N.jsxs)(T,{children:[(0,N.jsx)(O,{value:`profile`,children:`Profile`}),(0,N.jsx)(O,{value:`billing`,children:`Billing`}),(0,N.jsx)(O,{value:`security`,children:`Security`})]}),(0,N.jsx)(k,{value:`profile`,className:`text-p-std text-fg-secondary`,children:`Update your name, email, and avatar.`}),(0,N.jsx)(k,{value:`billing`,className:`text-p-std text-fg-secondary`,children:`Manage your plan and payment methods.`}),(0,N.jsx)(k,{value:`security`,className:`text-p-std text-fg-secondary`,children:`Configure two-factor authentication and active sessions.`})]})},I={args:{variant:`pills`},render:e=>(0,N.jsxs)(w,{...e,defaultValue:`profile`,className:`w-96`,children:[(0,N.jsxs)(T,{children:[(0,N.jsx)(O,{value:`profile`,children:`Profile`}),(0,N.jsx)(O,{value:`billing`,children:`Billing`}),(0,N.jsx)(O,{value:`security`,children:`Security`})]}),(0,N.jsx)(k,{value:`profile`,className:`text-p-std text-fg-secondary`,children:`Update your name, email, and avatar.`}),(0,N.jsx)(k,{value:`billing`,className:`text-p-std text-fg-secondary`,children:`Manage your plan and payment methods.`}),(0,N.jsx)(k,{value:`security`,className:`text-p-std text-fg-secondary`,children:`Configure two-factor authentication and active sessions.`})]})},L={args:{variant:`boxed`},render:e=>(0,N.jsxs)(w,{...e,defaultValue:`profile`,className:`w-96`,children:[(0,N.jsxs)(T,{children:[(0,N.jsx)(O,{value:`profile`,children:`Profile`}),(0,N.jsx)(O,{value:`billing`,children:`Billing`}),(0,N.jsx)(O,{value:`security`,children:`Security`})]}),(0,N.jsx)(k,{value:`profile`,className:`text-p-std text-fg-secondary`,children:`Update your name, email, and avatar.`}),(0,N.jsx)(k,{value:`billing`,className:`text-p-std text-fg-secondary`,children:`Manage your plan and payment methods.`}),(0,N.jsx)(k,{value:`security`,className:`text-p-std text-fg-secondary`,children:`Configure two-factor authentication and active sessions.`})]})},R={render:e=>(0,N.jsxs)(w,{...e,defaultValue:`profile`,className:`w-96`,children:[(0,N.jsxs)(T,{children:[(0,N.jsx)(O,{value:`profile`,icon:(0,N.jsx)(u,{className:`size-4`}),children:`Billing`}),(0,N.jsx)(O,{value:`notifications`,icon:(0,N.jsx)(o,{className:`size-4`}),children:`Notifications`}),(0,N.jsx)(O,{value:`security`,icon:(0,N.jsx)(l,{className:`size-4`}),children:`Security`}),(0,N.jsx)(O,{value:`settings`,icon:(0,N.jsx)(a,{className:`size-4`}),children:`Settings`})]}),(0,N.jsx)(k,{value:`profile`,className:`text-p-std text-fg-secondary`,children:`Manage your plan and payment methods.`}),(0,N.jsx)(k,{value:`notifications`,className:`text-p-std text-fg-secondary`,children:`Configure which events trigger an email or in-app notification.`}),(0,N.jsx)(k,{value:`security`,className:`text-p-std text-fg-secondary`,children:`Configure two-factor authentication and active sessions.`}),(0,N.jsx)(k,{value:`settings`,className:`text-p-std text-fg-secondary`,children:`General workspace preferences.`})]})},z={render:e=>(0,N.jsxs)(w,{...e,defaultValue:`inbox`,className:`w-96`,children:[(0,N.jsxs)(T,{children:[(0,N.jsx)(O,{value:`inbox`,badge:12,children:`Inbox`}),(0,N.jsx)(O,{value:`drafts`,badge:2,children:`Drafts`}),(0,N.jsx)(O,{value:`sent`,children:`Sent`})]}),(0,N.jsx)(k,{value:`inbox`,className:`text-p-std text-fg-secondary`,children:`12 unread messages.`}),(0,N.jsx)(k,{value:`drafts`,className:`text-p-std text-fg-secondary`,children:`2 unsent drafts.`}),(0,N.jsx)(k,{value:`sent`,className:`text-p-std text-fg-secondary`,children:`Nothing new here.`})]})},B={name:`Disabled tab`,render:e=>(0,N.jsxs)(w,{...e,defaultValue:`profile`,className:`w-96`,children:[(0,N.jsxs)(T,{children:[(0,N.jsx)(O,{value:`profile`,children:`Profile`}),(0,N.jsx)(O,{value:`legacy`,disabled:!0,children:`Legacy (unavailable)`}),(0,N.jsx)(O,{value:`security`,children:`Security`})]}),(0,N.jsx)(k,{value:`profile`,className:`text-p-std text-fg-secondary`,children:`Update your name, email, and avatar.`}),(0,N.jsx)(k,{value:`legacy`,className:`text-p-std text-fg-secondary`,children:`Legacy settings are no longer editable.`}),(0,N.jsx)(k,{value:`security`,className:`text-p-std text-fg-secondary`,children:`Configure two-factor authentication and active sessions.`})]})},V={render:e=>{function t(){let[t,n]=(0,M.useState)(`profile`);return(0,N.jsxs)(w,{...e,value:t,onValueChange:n,className:`w-96`,children:[(0,N.jsxs)(T,{children:[(0,N.jsx)(O,{value:`profile`,children:`Profile`}),(0,N.jsx)(O,{value:`billing`,children:`Billing`}),(0,N.jsx)(O,{value:`security`,children:`Security`})]}),(0,N.jsx)(k,{value:`profile`,className:`text-p-std text-fg-secondary`,children:`Update your name, email, and avatar.`}),(0,N.jsx)(k,{value:`billing`,className:`text-p-std text-fg-secondary`,children:`Manage your plan and payment methods.`}),(0,N.jsx)(k,{value:`security`,className:`text-p-std text-fg-secondary`,children:`Configure two-factor authentication and active sessions.`})]})}return(0,N.jsx)(t,{})}},H={name:`Numeric values (round-trip through onValueChange)`,render:e=>{function t(){let[t,n]=(0,M.useState)(1);return(0,N.jsxs)(w,{...e,value:t,onValueChange:e=>n(e),className:`w-96`,children:[(0,N.jsxs)(T,{children:[(0,N.jsx)(O,{value:1,children:`Step 1`}),(0,N.jsx)(O,{value:2,children:`Step 2`}),(0,N.jsx)(O,{value:3,children:`Step 3`})]}),(0,N.jsx)(k,{value:1,children:`Contents of step 1.`}),(0,N.jsx)(k,{value:2,children:`Contents of step 2.`}),(0,N.jsx)(k,{value:3,children:`Contents of step 3.`})]})}return(0,N.jsx)(t,{})}},U={name:`Overriding classes via className`,render:e=>(0,N.jsxs)(w,{...e,defaultValue:`profile`,className:`w-96`,children:[(0,N.jsxs)(T,{children:[(0,N.jsx)(O,{value:`profile`,className:`text-brand-600`,children:`Profile`}),(0,N.jsx)(O,{value:`billing`,children:`Billing`})]}),(0,N.jsx)(k,{value:`profile`,className:`text-p-std text-fg-secondary`,children:`Update your name, email, and avatar.`}),(0,N.jsx)(k,{value:`billing`,className:`text-p-std text-fg-secondary`,children:`Manage your plan and payment methods.`})]})},W=[`sm`,`md`,`lg`],G={render:e=>(0,N.jsx)(`div`,{className:`flex flex-col gap-6`,children:W.map(t=>(0,N.jsx)(w,{...e,size:t,defaultValue:`profile`,className:`w-96`,children:(0,N.jsxs)(T,{children:[(0,N.jsx)(O,{value:`profile`,children:`Profile`}),(0,N.jsx)(O,{value:`billing`,children:`Billing`}),(0,N.jsx)(O,{value:`security`,children:`Security`})]})},t))})},K={name:`Closable tabs`,render:e=>{function t(){let[t,n]=(0,M.useState)([{value:`report-1`,label:`Q1 Report`},{value:`report-2`,label:`Q2 Report`},{value:`report-3`,label:`Q3 Report`}]),[r,i]=(0,M.useState)(`report-1`),a=e=>{n(t=>{let n=t.filter(t=>t.value!==e);return e===r&&i(n[0]?.value??``),n})};return(0,N.jsxs)(w,{...e,value:r,onValueChange:i,className:`w-96`,children:[(0,N.jsx)(T,{children:t.map(e=>(0,N.jsx)(O,{value:e.value,rightIcon:(0,N.jsx)(s,{className:`size-3.5`}),rightIconLabel:`Close ${e.label}`,onRightIconClick:a,children:e.label},e.value))}),t.map(e=>(0,N.jsxs)(k,{value:e.value,className:`text-p-std text-fg-secondary`,children:[`Contents of `,e.label,`.`]},e.value))]})}return(0,N.jsx)(t,{})}},q={name:`Styled badge`,render:e=>(0,N.jsxs)(w,{...e,defaultValue:`inbox`,className:`w-96`,children:[(0,N.jsxs)(T,{children:[(0,N.jsx)(O,{value:`inbox`,badge:12,badgeProps:{variant:`danger`,appearance:`accent`},children:`Inbox`}),(0,N.jsx)(O,{value:`drafts`,badge:`New`,badgeProps:{variant:`brand`,appearance:`outline`},children:`Drafts`}),(0,N.jsx)(O,{value:`sent`,children:`Sent`})]}),(0,N.jsx)(k,{value:`inbox`,className:`text-p-std text-fg-secondary`,children:`12 unread messages.`}),(0,N.jsx)(k,{value:`drafts`,className:`text-p-std text-fg-secondary`,children:`A new draft was created.`}),(0,N.jsx)(k,{value:`sent`,className:`text-p-std text-fg-secondary`,children:`Nothing new here.`})]})},J={name:`Whole bar disabled`,args:{disabled:!0},render:e=>(0,N.jsxs)(w,{...e,defaultValue:`profile`,className:`w-96`,children:[(0,N.jsxs)(T,{children:[(0,N.jsx)(O,{value:`profile`,children:`Profile`}),(0,N.jsx)(O,{value:`billing`,children:`Billing`}),(0,N.jsx)(O,{value:`security`,children:`Security`})]}),(0,N.jsx)(k,{value:`profile`,className:`text-p-std text-fg-secondary`,children:`Update your name, email, and avatar.`})]})},Y=Array.from({length:15},(e,t)=>`tab-${t+1}`),X={name:`Scrollable overflow`,render:e=>(0,N.jsxs)(w,{...e,defaultValue:`tab-1`,className:`w-96`,children:[(0,N.jsx)(T,{scrollable:!0,children:Y.map((e,t)=>(0,N.jsxs)(O,{value:e,children:[`Tab `,t+1]},e))}),Y.map((e,t)=>(0,N.jsxs)(k,{value:e,className:`text-p-std text-fg-secondary`,children:[`Contents of tab `,t+1,`.`]},e))]})},Z={name:`keepMounted`,render:e=>(0,N.jsxs)(w,{...e,defaultValue:`long-list`,className:`w-96`,children:[(0,N.jsxs)(T,{children:[(0,N.jsx)(O,{value:`long-list`,children:`Long list`}),(0,N.jsx)(O,{value:`other`,children:`Other`})]}),(0,N.jsxs)(k,{value:`long-list`,keepMounted:!0,className:`h-40 overflow-y-auto text-p-std text-fg-secondary`,children:[(0,N.jsx)(`p`,{className:`mb-2 text-fg-tertiary text-p-sm`,children:'Scroll down, switch to "Other", then switch back — the scroll position survives because this panel stays mounted via `keepMounted`.'}),Array.from({length:30},(e,t)=>(0,N.jsxs)(`p`,{children:[`Item `,t+1]},t))]}),(0,N.jsx)(k,{value:`other`,className:`text-p-std text-fg-secondary`,children:`Switch back to "Long list" — its scroll position should still be where you left it.`})]})},Q={name:`Keyboard navigation`,render:e=>(0,N.jsxs)(w,{...e,defaultValue:`profile`,className:`w-96`,children:[(0,N.jsxs)(T,{children:[(0,N.jsx)(O,{value:`profile`,children:`Profile`}),(0,N.jsx)(O,{value:`billing`,children:`Billing`}),(0,N.jsx)(O,{value:`security`,children:`Security`})]}),(0,N.jsx)(k,{value:`profile`,className:`text-p-std text-fg-secondary`,children:`Update your name, email, and avatar.`}),(0,N.jsx)(k,{value:`billing`,className:`text-p-std text-fg-secondary`,children:`Manage your plan and payment methods.`}),(0,N.jsx)(k,{value:`security`,className:`text-p-std text-fg-secondary`,children:`Configure two-factor authentication and active sessions.`})]})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <Tabs {...args} defaultValue="profile" className="w-96">
      <TabList>
        <Tab value="profile">Profile</Tab>
        <Tab value="billing">Billing</Tab>
        <Tab value="security">Security</Tab>
      </TabList>
      <TabPanel value="profile" className="text-p-std text-fg-secondary">
        Update your name, email, and avatar.
      </TabPanel>
      <TabPanel value="billing" className="text-p-std text-fg-secondary">
        Manage your plan and payment methods.
      </TabPanel>
      <TabPanel value="security" className="text-p-std text-fg-secondary">
        Configure two-factor authentication and active sessions.
      </TabPanel>
    </Tabs>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pills'
  },
  render: args => <Tabs {...args} defaultValue="profile" className="w-96">
      <TabList>
        <Tab value="profile">Profile</Tab>
        <Tab value="billing">Billing</Tab>
        <Tab value="security">Security</Tab>
      </TabList>
      <TabPanel value="profile" className="text-p-std text-fg-secondary">
        Update your name, email, and avatar.
      </TabPanel>
      <TabPanel value="billing" className="text-p-std text-fg-secondary">
        Manage your plan and payment methods.
      </TabPanel>
      <TabPanel value="security" className="text-p-std text-fg-secondary">
        Configure two-factor authentication and active sessions.
      </TabPanel>
    </Tabs>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'boxed'
  },
  render: args => <Tabs {...args} defaultValue="profile" className="w-96">
      <TabList>
        <Tab value="profile">Profile</Tab>
        <Tab value="billing">Billing</Tab>
        <Tab value="security">Security</Tab>
      </TabList>
      <TabPanel value="profile" className="text-p-std text-fg-secondary">
        Update your name, email, and avatar.
      </TabPanel>
      <TabPanel value="billing" className="text-p-std text-fg-secondary">
        Manage your plan and payment methods.
      </TabPanel>
      <TabPanel value="security" className="text-p-std text-fg-secondary">
        Configure two-factor authentication and active sessions.
      </TabPanel>
    </Tabs>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => <Tabs {...args} defaultValue="profile" className="w-96">
      <TabList>
        <Tab value="profile" icon={<CreditCard className="size-4" />}>
          Billing
        </Tab>
        <Tab value="notifications" icon={<Bell className="size-4" />}>
          Notifications
        </Tab>
        <Tab value="security" icon={<Shield className="size-4" />}>
          Security
        </Tab>
        <Tab value="settings" icon={<Settings className="size-4" />}>
          Settings
        </Tab>
      </TabList>
      <TabPanel value="profile" className="text-p-std text-fg-secondary">
        Manage your plan and payment methods.
      </TabPanel>
      <TabPanel value="notifications" className="text-p-std text-fg-secondary">
        Configure which events trigger an email or in-app notification.
      </TabPanel>
      <TabPanel value="security" className="text-p-std text-fg-secondary">
        Configure two-factor authentication and active sessions.
      </TabPanel>
      <TabPanel value="settings" className="text-p-std text-fg-secondary">
        General workspace preferences.
      </TabPanel>
    </Tabs>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => <Tabs {...args} defaultValue="inbox" className="w-96">
      <TabList>
        <Tab value="inbox" badge={12}>
          Inbox
        </Tab>
        <Tab value="drafts" badge={2}>
          Drafts
        </Tab>
        <Tab value="sent">Sent</Tab>
      </TabList>
      <TabPanel value="inbox" className="text-p-std text-fg-secondary">
        12 unread messages.
      </TabPanel>
      <TabPanel value="drafts" className="text-p-std text-fg-secondary">
        2 unsent drafts.
      </TabPanel>
      <TabPanel value="sent" className="text-p-std text-fg-secondary">
        Nothing new here.
      </TabPanel>
    </Tabs>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Disabled tab',
  render: args => <Tabs {...args} defaultValue="profile" className="w-96">
      <TabList>
        <Tab value="profile">Profile</Tab>
        <Tab value="legacy" disabled>
          Legacy (unavailable)
        </Tab>
        <Tab value="security">Security</Tab>
      </TabList>
      <TabPanel value="profile" className="text-p-std text-fg-secondary">
        Update your name, email, and avatar.
      </TabPanel>
      <TabPanel value="legacy" className="text-p-std text-fg-secondary">
        Legacy settings are no longer editable.
      </TabPanel>
      <TabPanel value="security" className="text-p-std text-fg-secondary">
        Configure two-factor authentication and active sessions.
      </TabPanel>
    </Tabs>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => {
    function ControlledExample() {
      const [value, setValue] = useState<string | number>('profile');
      return <Tabs {...args} value={value} onValueChange={setValue} className="w-96">
          <TabList>
            <Tab value="profile">Profile</Tab>
            <Tab value="billing">Billing</Tab>
            <Tab value="security">Security</Tab>
          </TabList>
          <TabPanel value="profile" className="text-p-std text-fg-secondary">
            Update your name, email, and avatar.
          </TabPanel>
          <TabPanel value="billing" className="text-p-std text-fg-secondary">
            Manage your plan and payment methods.
          </TabPanel>
          <TabPanel value="security" className="text-p-std text-fg-secondary">
            Configure two-factor authentication and active sessions.
          </TabPanel>
        </Tabs>;
    }
    return <ControlledExample />;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Numeric values (round-trip through onValueChange)',
  render: args => {
    function NumericExample() {
      const [value, setValue] = useState<number>(1);
      return <Tabs {...args} value={value} onValueChange={v => setValue(v as number)} className="w-96">
          <TabList>
            <Tab value={1}>Step 1</Tab>
            <Tab value={2}>Step 2</Tab>
            <Tab value={3}>Step 3</Tab>
          </TabList>
          <TabPanel value={1}>Contents of step 1.</TabPanel>
          <TabPanel value={2}>Contents of step 2.</TabPanel>
          <TabPanel value={3}>Contents of step 3.</TabPanel>
        </Tabs>;
    }
    return <NumericExample />;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  render: args => <Tabs {...args} defaultValue="profile" className="w-96">
      <TabList>
        <Tab value="profile" className="text-brand-600">
          Profile
        </Tab>
        <Tab value="billing">Billing</Tab>
      </TabList>
      <TabPanel value="profile" className="text-p-std text-fg-secondary">
        Update your name, email, and avatar.
      </TabPanel>
      <TabPanel value="billing" className="text-p-std text-fg-secondary">
        Manage your plan and payment methods.
      </TabPanel>
    </Tabs>
}`,...U.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-6">
      {SIZES.map(size => <Tabs key={size} {...args} size={size} defaultValue="profile" className="w-96">
          <TabList>
            <Tab value="profile">Profile</Tab>
            <Tab value="billing">Billing</Tab>
            <Tab value="security">Security</Tab>
          </TabList>
        </Tabs>)}
    </div>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Closable tabs',
  render: args => {
    function ClosableTabsExample() {
      const [openTabs, setOpenTabs] = useState([{
        value: 'report-1',
        label: 'Q1 Report'
      }, {
        value: 'report-2',
        label: 'Q2 Report'
      }, {
        value: 'report-3',
        label: 'Q3 Report'
      }]);
      const [value, setValue] = useState('report-1');
      const closeTab = (closedValue: string) => {
        setOpenTabs(prev => {
          const next = prev.filter(tab => tab.value !== closedValue);
          if (closedValue === value) setValue(next[0]?.value ?? '');
          return next;
        });
      };
      return <Tabs {...args} value={value} onValueChange={setValue} className="w-96">
          <TabList>
            {openTabs.map(tab => <Tab key={tab.value} value={tab.value} rightIcon={<X className="size-3.5" />} rightIconLabel={\`Close \${tab.label}\`} onRightIconClick={closeTab}>
                {tab.label}
              </Tab>)}
          </TabList>
          {openTabs.map(tab => <TabPanel key={tab.value} value={tab.value} className="text-p-std text-fg-secondary">
              Contents of {tab.label}.
            </TabPanel>)}
        </Tabs>;
    }
    return <ClosableTabsExample />;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Styled badge',
  render: args => <Tabs {...args} defaultValue="inbox" className="w-96">
      <TabList>
        <Tab value="inbox" badge={12} badgeProps={{
        variant: 'danger',
        appearance: 'accent'
      }}>
          Inbox
        </Tab>
        <Tab value="drafts" badge="New" badgeProps={{
        variant: 'brand',
        appearance: 'outline'
      }}>
          Drafts
        </Tab>
        <Tab value="sent">Sent</Tab>
      </TabList>
      <TabPanel value="inbox" className="text-p-std text-fg-secondary">
        12 unread messages.
      </TabPanel>
      <TabPanel value="drafts" className="text-p-std text-fg-secondary">
        A new draft was created.
      </TabPanel>
      <TabPanel value="sent" className="text-p-std text-fg-secondary">
        Nothing new here.
      </TabPanel>
    </Tabs>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Whole bar disabled',
  args: {
    disabled: true
  },
  render: args => <Tabs {...args} defaultValue="profile" className="w-96">
      <TabList>
        <Tab value="profile">Profile</Tab>
        <Tab value="billing">Billing</Tab>
        <Tab value="security">Security</Tab>
      </TabList>
      <TabPanel value="profile" className="text-p-std text-fg-secondary">
        Update your name, email, and avatar.
      </TabPanel>
    </Tabs>
}`,...J.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Scrollable overflow',
  render: args => <Tabs {...args} defaultValue="tab-1" className="w-96">
      <TabList scrollable>
        {MANY_TABS.map((value, i) => <Tab key={value} value={value}>
            Tab {i + 1}
          </Tab>)}
      </TabList>
      {MANY_TABS.map((value, i) => <TabPanel key={value} value={value} className="text-p-std text-fg-secondary">
          Contents of tab {i + 1}.
        </TabPanel>)}
    </Tabs>
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'keepMounted',
  render: args => <Tabs {...args} defaultValue="long-list" className="w-96">
      <TabList>
        <Tab value="long-list">Long list</Tab>
        <Tab value="other">Other</Tab>
      </TabList>
      <TabPanel value="long-list" keepMounted className="h-40 overflow-y-auto text-p-std text-fg-secondary">
        <p className="mb-2 text-fg-tertiary text-p-sm">
          Scroll down, switch to &quot;Other&quot;, then switch back — the scroll position survives
          because this panel stays mounted via \`keepMounted\`.
        </p>
        {Array.from({
        length: 30
      }, (_, i) => <p key={i}>Item {i + 1}</p>)}
      </TabPanel>
      <TabPanel value="other" className="text-p-std text-fg-secondary">
        Switch back to &quot;Long list&quot; — its scroll position should still be where you left
        it.
      </TabPanel>
    </Tabs>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'Keyboard navigation',
  render: args => <Tabs {...args} defaultValue="profile" className="w-96">
      <TabList>
        <Tab value="profile">Profile</Tab>
        <Tab value="billing">Billing</Tab>
        <Tab value="security">Security</Tab>
      </TabList>
      <TabPanel value="profile" className="text-p-std text-fg-secondary">
        Update your name, email, and avatar.
      </TabPanel>
      <TabPanel value="billing" className="text-p-std text-fg-secondary">
        Manage your plan and payment methods.
      </TabPanel>
      <TabPanel value="security" className="text-p-std text-fg-secondary">
        Configure two-factor authentication and active sessions.
      </TabPanel>
    </Tabs>
}`,...Q.parameters?.docs?.source}}},$=[`Primary`,`Pills`,`Boxed`,`WithIcons`,`WithBadges`,`DisabledTab`,`Controlled`,`NumericValues`,`CustomClassName`,`AllSizes`,`ClosableTabs`,`StyledBadge`,`WholeBarDisabled`,`ScrollableOverflow`,`KeepMounted`,`KeyboardNavigation`]}));ee();export{G as AllSizes,L as Boxed,K as ClosableTabs,V as Controlled,U as CustomClassName,B as DisabledTab,Z as KeepMounted,Q as KeyboardNavigation,H as NumericValues,I as Pills,F as Primary,X as ScrollableOverflow,q as StyledBadge,J as WholeBarDisabled,z as WithBadges,R as WithIcons,$ as __namedExportsOrder,P as default,ee as n,j as t};