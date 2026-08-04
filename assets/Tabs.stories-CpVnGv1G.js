import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-BgCNYJC5.js";import{Et as a,Q as o,b as s,g as c,t as l}from"./lucide-react-D8xGtw7t.js";import{n as u,t as d}from"./cn-CHNBg8JS.js";function f(){let e=(0,m.useContext)(g);if(!e)throw Error(`Tab components must be used inside <Tabs>`);return e}function p(e){let t=[];m.Children.forEach(e,e=>{(0,m.isValidElement)(e)&&t.push(e)});let n=t.find(e=>e.type?.displayName===`TabList`);if(!(0,m.isValidElement)(n))return``;let r=m.Children.toArray(n.props.children);for(let e of r)if((0,m.isValidElement)(e)){let t=e.props.value;if(t!==void 0)return t}return``}var m,h,g,_,v,y,b,x,S,C=t((()=>{m=n(r(),1),u(),h=i(),g=(0,m.createContext)(null),_=(0,m.forwardRef)(function({defaultValue:e,value:t,onValueChange:n,variant:r=`underline`,size:i=`md`,className:a,children:o,dataTestId:s,...c},l){let[u,f]=(0,m.useState)(()=>e??p(o)),_=t!==void 0,v=_?t:u;return(0,h.jsx)(g.Provider,{value:{value:v,setValue:e=>{_||f(e),n?.(e)},variant:r,size:i},children:(0,h.jsx)(`div`,{ref:l,"data-test-id":s,className:d(`flex flex-col gap-4`,a),...c,children:o})})}),v=(0,m.forwardRef)(function({children:e,className:t,dataTestId:n,...r},i){let{variant:a}=f();return(0,h.jsx)(`div`,{ref:i,role:`tablist`,"data-test-id":n,className:d(`inline-flex`,a===`underline`&&`border-b border-border-default gap-1 w-full`,a===`pills`&&`gap-1 p-1 rounded-full bg-bg-container`,a===`boxed`&&`gap-0 rounded-lg border border-border-default overflow-hidden bg-bg-container`,t),...r,children:e})}),v.displayName=`TabList`,y={lg:`h-11 px-4 text-p-md`,md:`h-10 px-3 text-p-std`,sm:`h-8 px-2.5 text-p-sm`},b={underline:{on:`bg-brand-500 text-white`,off:`bg-bg-subtle text-fg-secondary`},pills:{on:`bg-brand-500 text-white`,off:`bg-bg-subtle text-fg-secondary`},boxed:{on:`bg-brand-500 text-white`,off:`bg-bg-subtle text-fg-secondary`}},x=(0,m.forwardRef)(function({value:e,children:t,disabled:n,icon:r,badge:i,className:a,dataTestId:o,onClick:s,...c},l){let{value:u,setValue:p,variant:m,size:g}=f(),_=u===e,v=i!=null&&i!==!1;return(0,h.jsxs)(`button`,{ref:l,type:`button`,role:`tab`,"aria-selected":_,disabled:n,"data-test-id":o,onClick:t=>{n||(p(e),s?.(t))},className:d(d(`group relative inline-flex items-center justify-center gap-2 font-medium outline-none transition-colors`,`focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-1 focus-visible:rounded-md`,y[g],n&&`opacity-50 cursor-not-allowed`),m===`underline`?d(`rounded-t-lg`,_?`text-fg-default`:`text-fg-secondary hover:text-fg-default hover:bg-bg-subtle/60`):m===`pills`?d(`rounded-full`,_?`bg-bg-default text-fg-default shadow-z1`:`bg-transparent text-fg-secondary hover:text-fg-default`):d(`border-r border-border-default last:border-r-0`,_?`bg-bg-default text-fg-default`:`bg-transparent text-fg-secondary hover:bg-bg-subtle`),a),...c,children:[r&&(0,h.jsx)(`span`,{className:`inline-flex shrink-0`,children:r}),(0,h.jsx)(`span`,{className:`truncate`,children:t}),v&&(0,h.jsx)(`span`,{className:d(`inline-flex items-center justify-center shrink-0 rounded-full px-1.5 h-5 min-w-[1.25rem]`,`text-label-xs font-semibold tabular-nums leading-none transition-colors`,_?b[m].on:b[m].off),children:i}),m===`underline`&&(0,h.jsx)(`span`,{"aria-hidden":!0,className:d(`pointer-events-none absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-brand-500 transition-opacity duration-150`,_?`opacity-100`:`opacity-0`)})]})}),S=(0,m.forwardRef)(function({value:e,children:t,className:n,dataTestId:r,...i},a){let{value:o}=f();return o===e?(0,h.jsx)(`div`,{ref:a,role:`tabpanel`,"data-test-id":r,className:n,...i,children:t}):null});try{_.displayName=`Tabs`,_.__docgenInfo={description:``,displayName:`Tabs`,filePath:`/home/runner/work/design-system/design-system/src/components/Tabs/Tabs.tsx`,methods:[],props:{defaultValue:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabsProps`}],description:"Uncontrolled initial active tab value. Falls back to the first `<Tab>`'s value if omitted.",name:`defaultValue`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabsProps`},required:!1,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabsProps`}],description:"Controlled active tab value. Pass alongside `onValueChange` to fully control which tab is active.",name:`value`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabsProps`},required:!1,tags:{},type:{name:`string`}},onValueChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabsProps`}],description:``,name:`onValueChange`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabsProps`},required:!1,tags:{},type:{name:`((value: string) => void)`}},variant:{defaultValue:{value:`underline`},declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabsProps`}],description:``,name:`variant`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabsProps`},required:!1,tags:{},type:{name:`enum`,raw:`TabsVariant`,value:[{value:`"underline"`},{value:`"pills"`},{value:`"boxed"`}]}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabsProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabsProps`},required:!1,tags:{},type:{name:`enum`,raw:`TabsSize`,value:[{value:`"md"`},{value:`"sm"`},{value:`"lg"`}]}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{v.displayName=`TabList`,v.__docgenInfo={description:``,displayName:`TabList`,filePath:`/home/runner/work/design-system/design-system/src/components/Tabs/Tabs.tsx`,methods:[],props:{dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{x.displayName=`Tab`,x.__docgenInfo={description:``,displayName:`Tab`,filePath:`/home/runner/work/design-system/design-system/src/components/Tabs/Tabs.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabProps`}],description:"Unique identifier matched against the parent `Tabs`'s active value.",name:`value`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabProps`},required:!0,tags:{},type:{name:`string`}},icon:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabProps`}],description:``,name:`icon`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabProps`},required:!1,tags:{},type:{name:`ReactNode`}},badge:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabProps`}],description:"Count/indicator rendered after the label. Hidden when `undefined`, `null`, or `false`.",name:`badge`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabProps`},required:!1,tags:{},type:{name:`ReactNode`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{S.displayName=`TabPanel`,S.__docgenInfo={description:``,displayName:`TabPanel`,filePath:`/home/runner/work/design-system/design-system/src/components/Tabs/Tabs.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabPanelProps`}],description:"Matched against the parent `Tabs`'s active value; renders nothing (unmounted) when not active.",name:`value`,parent:{fileName:`design-system/src/components/Tabs/Tabs.types.ts`,name:`TabPanelProps`},required:!0,tags:{},type:{name:`string`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),w=e({AllSizes:()=>L,Boxed:()=>A,Controlled:()=>P,CustomClassName:()=>F,DisabledTab:()=>N,Pills:()=>k,Primary:()=>O,WithBadges:()=>M,WithIcons:()=>j,__namedExportsOrder:()=>R,default:()=>D}),T,E,D,O,k,A,j,M,N,P,F,I,L,R,z=t((()=>{T=n(r(),1),l(),C(),E=i(),D={title:`Components/Tabs`,component:_,parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:[`underline`,`pills`,`boxed`]},size:{control:`select`,options:[`lg`,`md`,`sm`]}},args:{variant:`underline`,size:`md`}},O={render:e=>(0,E.jsxs)(_,{...e,defaultValue:`profile`,className:`w-96`,children:[(0,E.jsxs)(v,{children:[(0,E.jsx)(x,{value:`profile`,children:`Profile`}),(0,E.jsx)(x,{value:`billing`,children:`Billing`}),(0,E.jsx)(x,{value:`security`,children:`Security`})]}),(0,E.jsx)(S,{value:`profile`,className:`text-p-std text-fg-secondary`,children:`Update your name, email, and avatar.`}),(0,E.jsx)(S,{value:`billing`,className:`text-p-std text-fg-secondary`,children:`Manage your plan and payment methods.`}),(0,E.jsx)(S,{value:`security`,className:`text-p-std text-fg-secondary`,children:`Configure two-factor authentication and active sessions.`})]})},k={args:{variant:`pills`},render:e=>(0,E.jsxs)(_,{...e,defaultValue:`profile`,className:`w-96`,children:[(0,E.jsxs)(v,{children:[(0,E.jsx)(x,{value:`profile`,children:`Profile`}),(0,E.jsx)(x,{value:`billing`,children:`Billing`}),(0,E.jsx)(x,{value:`security`,children:`Security`})]}),(0,E.jsx)(S,{value:`profile`,className:`text-p-std text-fg-secondary`,children:`Update your name, email, and avatar.`}),(0,E.jsx)(S,{value:`billing`,className:`text-p-std text-fg-secondary`,children:`Manage your plan and payment methods.`}),(0,E.jsx)(S,{value:`security`,className:`text-p-std text-fg-secondary`,children:`Configure two-factor authentication and active sessions.`})]})},A={args:{variant:`boxed`},render:e=>(0,E.jsxs)(_,{...e,defaultValue:`profile`,className:`w-96`,children:[(0,E.jsxs)(v,{children:[(0,E.jsx)(x,{value:`profile`,children:`Profile`}),(0,E.jsx)(x,{value:`billing`,children:`Billing`}),(0,E.jsx)(x,{value:`security`,children:`Security`})]}),(0,E.jsx)(S,{value:`profile`,className:`text-p-std text-fg-secondary`,children:`Update your name, email, and avatar.`}),(0,E.jsx)(S,{value:`billing`,className:`text-p-std text-fg-secondary`,children:`Manage your plan and payment methods.`}),(0,E.jsx)(S,{value:`security`,className:`text-p-std text-fg-secondary`,children:`Configure two-factor authentication and active sessions.`})]})},j={render:e=>(0,E.jsxs)(_,{...e,defaultValue:`profile`,className:`w-96`,children:[(0,E.jsxs)(v,{children:[(0,E.jsx)(x,{value:`profile`,icon:(0,E.jsx)(o,{className:`size-4`}),children:`Billing`}),(0,E.jsx)(x,{value:`notifications`,icon:(0,E.jsx)(a,{className:`size-4`}),children:`Notifications`}),(0,E.jsx)(x,{value:`security`,icon:(0,E.jsx)(c,{className:`size-4`}),children:`Security`}),(0,E.jsx)(x,{value:`settings`,icon:(0,E.jsx)(s,{className:`size-4`}),children:`Settings`})]}),(0,E.jsx)(S,{value:`profile`,className:`text-p-std text-fg-secondary`,children:`Manage your plan and payment methods.`}),(0,E.jsx)(S,{value:`notifications`,className:`text-p-std text-fg-secondary`,children:`Configure which events trigger an email or in-app notification.`}),(0,E.jsx)(S,{value:`security`,className:`text-p-std text-fg-secondary`,children:`Configure two-factor authentication and active sessions.`}),(0,E.jsx)(S,{value:`settings`,className:`text-p-std text-fg-secondary`,children:`General workspace preferences.`})]})},M={render:e=>(0,E.jsxs)(_,{...e,defaultValue:`inbox`,className:`w-96`,children:[(0,E.jsxs)(v,{children:[(0,E.jsx)(x,{value:`inbox`,badge:12,children:`Inbox`}),(0,E.jsx)(x,{value:`drafts`,badge:2,children:`Drafts`}),(0,E.jsx)(x,{value:`sent`,children:`Sent`})]}),(0,E.jsx)(S,{value:`inbox`,className:`text-p-std text-fg-secondary`,children:`12 unread messages.`}),(0,E.jsx)(S,{value:`drafts`,className:`text-p-std text-fg-secondary`,children:`2 unsent drafts.`}),(0,E.jsx)(S,{value:`sent`,className:`text-p-std text-fg-secondary`,children:`Nothing new here.`})]})},N={name:`Disabled tab`,render:e=>(0,E.jsxs)(_,{...e,defaultValue:`profile`,className:`w-96`,children:[(0,E.jsxs)(v,{children:[(0,E.jsx)(x,{value:`profile`,children:`Profile`}),(0,E.jsx)(x,{value:`legacy`,disabled:!0,children:`Legacy (unavailable)`}),(0,E.jsx)(x,{value:`security`,children:`Security`})]}),(0,E.jsx)(S,{value:`profile`,className:`text-p-std text-fg-secondary`,children:`Update your name, email, and avatar.`}),(0,E.jsx)(S,{value:`legacy`,className:`text-p-std text-fg-secondary`,children:`Legacy settings are no longer editable.`}),(0,E.jsx)(S,{value:`security`,className:`text-p-std text-fg-secondary`,children:`Configure two-factor authentication and active sessions.`})]})},P={render:e=>{function t(){let[t,n]=(0,T.useState)(`profile`);return(0,E.jsxs)(_,{...e,value:t,onValueChange:n,className:`w-96`,children:[(0,E.jsxs)(v,{children:[(0,E.jsx)(x,{value:`profile`,children:`Profile`}),(0,E.jsx)(x,{value:`billing`,children:`Billing`}),(0,E.jsx)(x,{value:`security`,children:`Security`})]}),(0,E.jsx)(S,{value:`profile`,className:`text-p-std text-fg-secondary`,children:`Update your name, email, and avatar.`}),(0,E.jsx)(S,{value:`billing`,className:`text-p-std text-fg-secondary`,children:`Manage your plan and payment methods.`}),(0,E.jsx)(S,{value:`security`,className:`text-p-std text-fg-secondary`,children:`Configure two-factor authentication and active sessions.`})]})}return(0,E.jsx)(t,{})}},F={name:`Overriding classes via className`,render:e=>(0,E.jsxs)(_,{...e,defaultValue:`profile`,className:`w-96`,children:[(0,E.jsxs)(v,{children:[(0,E.jsx)(x,{value:`profile`,className:`text-brand-600`,children:`Profile`}),(0,E.jsx)(x,{value:`billing`,children:`Billing`})]}),(0,E.jsx)(S,{value:`profile`,className:`text-p-std text-fg-secondary`,children:`Update your name, email, and avatar.`}),(0,E.jsx)(S,{value:`billing`,className:`text-p-std text-fg-secondary`,children:`Manage your plan and payment methods.`})]})},I=[`sm`,`md`,`lg`],L={render:e=>(0,E.jsx)(`div`,{className:`flex flex-col gap-6`,children:I.map(t=>(0,E.jsx)(_,{...e,size:t,defaultValue:`profile`,className:`w-96`,children:(0,E.jsxs)(v,{children:[(0,E.jsx)(x,{value:`profile`,children:`Profile`}),(0,E.jsx)(x,{value:`billing`,children:`Billing`}),(0,E.jsx)(x,{value:`security`,children:`Security`})]})},t))})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => {
    function ControlledExample() {
      const [value, setValue] = useState('profile');
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-6">
      {SIZES.map(size => <Tabs key={size} {...args} size={size} defaultValue="profile" className="w-96">
          <TabList>
            <Tab value="profile">Profile</Tab>
            <Tab value="billing">Billing</Tab>
            <Tab value="security">Security</Tab>
          </TabList>
        </Tabs>)}
    </div>
}`,...L.parameters?.docs?.source}}},R=[`Primary`,`Pills`,`Boxed`,`WithIcons`,`WithBadges`,`DisabledTab`,`Controlled`,`CustomClassName`,`AllSizes`]}));z();export{L as AllSizes,A as Boxed,P as Controlled,F as CustomClassName,N as DisabledTab,k as Pills,O as Primary,M as WithBadges,j as WithIcons,R as __namedExportsOrder,D as default,z as n,w as t};