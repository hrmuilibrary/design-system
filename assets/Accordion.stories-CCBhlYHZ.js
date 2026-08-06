import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-CwcXNU-m.js";import{It as a,Wt as o,mt as s,t as c,v as l,wt as u}from"./lucide-react-lf4oV1Yb.js";import{n as d,t as f}from"./cn-BNhCYuha.js";import{n as p,t as m}from"./Divider-tMKELWX_.js";var h=t((()=>{p()}));function g(){let e=(0,v.useContext)(b);if(!e)throw Error(`AccordionItem must be used inside <Accordion>`);return e}function _(e){return e===void 0?[]:Array.isArray(e)?e:[e]}var v,y,b,x,S,C=t((()=>{v=n(r(),1),c(),d(),h(),y=i(),b=(0,v.createContext)(null),x=(0,v.forwardRef)(function({type:e=`single`,defaultValue:t,value:n,onValueChange:r,animated:i=!0,showDivider:a=!1,className:o,children:s,dataTestId:c,...l},u){let[d,p]=(0,v.useState)(()=>_(t)),m=n!==void 0,h=m?_(n):d;return(0,y.jsx)(b.Provider,{value:{openValues:h,toggle:t=>{let n;n=e===`single`?h.includes(t)?[]:[t]:h.includes(t)?h.filter(e=>e!==t):[...h,t],m||p(n),r?.(e===`single`?n[0]??``:n)},animated:i,showDivider:a},children:(0,y.jsx)(`div`,{ref:u,"data-test-id":c,className:f(`flex flex-col divide-y divide-border-default border border-border-default rounded-lg overflow-hidden bg-bg-default`,o),...l,children:s})})}),S=(0,v.forwardRef)(function({value:e,title:t,icon:n,disabled:r,className:i,children:o,dataTestId:s,...c},l){let{openValues:u,toggle:d,animated:p,showDivider:h}=g(),_=u.includes(e),b=(0,v.useId)(),x=(0,v.useId)(),S=(0,y.jsxs)(y.Fragment,{children:[h&&(0,y.jsx)(m,{className:`mb-4`}),o]});return(0,y.jsxs)(`div`,{ref:l,"data-test-id":s,"data-state":_?`open`:`closed`,className:f(`group`,i),...c,children:[(0,y.jsx)(`h3`,{children:(0,y.jsxs)(`button`,{id:x,type:`button`,onClick:()=>d(e),disabled:r,"aria-expanded":_,"aria-controls":b,className:f(`flex w-full items-center justify-between gap-3 px-5 py-4 text-left`,`text-p-md font-medium text-fg-default`,`hover:bg-bg-container transition-colors`,`focus-visible:outline-none focus-visible:bg-bg-container`,`disabled:opacity-50 disabled:cursor-not-allowed`),children:[(0,y.jsxs)(`span`,{className:`inline-flex items-center gap-3`,children:[n&&(0,y.jsx)(`span`,{className:`inline-flex text-fg-secondary`,children:n}),t]}),(0,y.jsx)(a,{className:f(`h-5 w-5 shrink-0 text-fg-secondary transition-transform duration-200`,_&&`rotate-180`),"aria-hidden":!0})]})}),p?(0,y.jsx)(`div`,{className:f(`grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none`,_?`grid-rows-[1fr]`:`grid-rows-[0fr]`),children:(0,y.jsx)(`div`,{className:`overflow-hidden min-h-0`,children:(0,y.jsx)(`div`,{id:b,role:`region`,"aria-labelledby":x,inert:!_||void 0,className:`px-5 pb-4 text-p-std text-fg-secondary`,children:S})})}):(0,y.jsx)(`div`,{id:b,role:`region`,"aria-labelledby":x,hidden:!_,className:`px-5 pb-4 text-p-std text-fg-secondary`,children:S})]})});try{x.displayName=`Accordion`,x.__docgenInfo={description:``,displayName:`Accordion`,filePath:`/home/runner/work/design-system/design-system/src/components/Accordion/Accordion.tsx`,methods:[],props:{type:{defaultValue:{value:`single`},declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`}],description:"`'single'` keeps at most one item open at a time; `'multiple'` allows any number.",name:`type`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`},required:!1,tags:{},type:{name:`enum`,raw:`AccordionType`,value:[{value:`"multiple"`},{value:`"single"`}]}},defaultValue:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`}],description:"Uncontrolled initial open value(s) — a single string for `'single'`, an array for `'multiple'`.",name:`defaultValue`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`},required:!1,tags:{},type:{name:`string | string[]`}},value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`}],description:"Controlled open value(s). Pass alongside `onValueChange` to fully control which item(s) are open.",name:`value`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`},required:!1,tags:{},type:{name:`string | string[]`}},onValueChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`}],description:``,name:`onValueChange`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`},required:!1,tags:{},type:{name:`((value: string | string[]) => void)`}},animated:{defaultValue:{value:`true`},declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`}],description:"Animates each panel open/closed. Set `false` for the pre-1.x instant toggle (also restores the plain `hidden` attribute instead of the animated grid wrapper).",name:`animated`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`},required:!1,tags:{},type:{name:`boolean`}},showDivider:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`}],description:`Renders a Divider between each item's header and its panel content.`,name:`showDivider`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`},required:!1,tags:{},type:{name:`boolean`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{S.displayName=`AccordionItem`,S.__docgenInfo={description:``,displayName:`AccordionItem`,filePath:`/home/runner/work/design-system/design-system/src/components/Accordion/Accordion.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionItemProps`}],description:"Unique identifier used to track open/closed state within the parent `Accordion`.",name:`value`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionItemProps`},required:!0,tags:{},type:{name:`string`}},title:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionItemProps`}],description:``,name:`title`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionItemProps`},required:!0,tags:{},type:{name:`ReactNode`}},icon:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionItemProps`}],description:``,name:`icon`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionItemProps`},required:!1,tags:{},type:{name:`ReactNode`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionItemProps`}],description:``,name:`disabled`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionItemProps`},required:!1,tags:{},type:{name:`boolean`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),w=e({Controlled:()=>M,CustomClassName:()=>N,DisabledItem:()=>j,DynamicContent:()=>I,Multiple:()=>k,NotAnimated:()=>F,Primary:()=>O,ShowDivider:()=>P,WithIcons:()=>A,__namedExportsOrder:()=>L,default:()=>D}),T,E,D,O,k,A,j,M,N,P,F,I,L,R=t((()=>{T=n(r(),1),c(),C(),E=i(),D={title:`Components/Accordion`,component:x,parameters:{layout:`centered`},argTypes:{type:{control:`select`,options:[`single`,`multiple`]}},args:{type:`single`}},O={render:e=>(0,E.jsxs)(x,{...e,defaultValue:`billing`,className:`w-96`,children:[(0,E.jsx)(S,{value:`billing`,title:`How does billing work?`,children:`Billing is monthly, based on active seats. Upgrading or downgrading prorates automatically on your next invoice.`}),(0,E.jsx)(S,{value:`cancel`,title:`Can I cancel anytime?`,children:`Yes — cancel from account settings and access continues through the end of the current billing period.`}),(0,E.jsx)(S,{value:`support`,title:`What support is included?`,children:`All plans include email support; Enterprise plans add a dedicated Slack channel and a 1-hour response SLA.`})]})},k={args:{type:`multiple`},render:e=>(0,E.jsxs)(x,{...e,defaultValue:[`billing`,`support`],className:`w-96`,children:[(0,E.jsx)(S,{value:`billing`,title:`How does billing work?`,children:`Billing is monthly, based on active seats. Upgrading or downgrading prorates automatically on your next invoice.`}),(0,E.jsx)(S,{value:`cancel`,title:`Can I cancel anytime?`,children:`Yes — cancel from account settings and access continues through the end of the current billing period.`}),(0,E.jsx)(S,{value:`support`,title:`What support is included?`,children:`All plans include email support; Enterprise plans add a dedicated Slack channel and a 1-hour response SLA.`})]})},A={render:e=>(0,E.jsxs)(x,{...e,defaultValue:`billing`,className:`w-96`,children:[(0,E.jsx)(S,{value:`billing`,title:`Billing`,icon:(0,E.jsx)(s,{className:`size-4`}),children:`Billing is monthly, based on active seats.`}),(0,E.jsx)(S,{value:`notifications`,title:`Notifications`,icon:(0,E.jsx)(o,{className:`size-4`}),children:`Configure which events trigger an email or in-app notification.`}),(0,E.jsx)(S,{value:`security`,title:`Security`,icon:(0,E.jsx)(l,{className:`size-4`}),children:`Enable SSO and enforce two-factor authentication for your workspace.`}),(0,E.jsx)(S,{value:`help`,title:`Help & FAQ`,icon:(0,E.jsx)(u,{className:`size-4`}),children:`Browse the knowledge base or contact support for anything else.`})]})},j={name:`Disabled item`,render:e=>(0,E.jsxs)(x,{...e,defaultValue:`billing`,className:`w-96`,children:[(0,E.jsx)(S,{value:`billing`,title:`How does billing work?`,children:`Billing is monthly, based on active seats.`}),(0,E.jsx)(S,{value:`legacy`,title:`Legacy plans (unavailable)`,disabled:!0,children:`Legacy plans are no longer available to new customers.`}),(0,E.jsx)(S,{value:`support`,title:`What support is included?`,children:`All plans include email support.`})]})},M={render:e=>{function t(){let[t,n]=(0,T.useState)(`billing`);return(0,E.jsxs)(x,{...e,value:t,onValueChange:e=>n(e),className:`w-96`,children:[(0,E.jsx)(S,{value:`billing`,title:`How does billing work?`,children:`Billing is monthly, based on active seats.`}),(0,E.jsx)(S,{value:`cancel`,title:`Can I cancel anytime?`,children:`Yes — cancel from account settings anytime.`})]})}return(0,E.jsx)(t,{})}},N={name:`Overriding classes via className`,render:e=>(0,E.jsxs)(x,{...e,defaultValue:`billing`,className:`w-96 border-brand-500 shadow-z3`,children:[(0,E.jsx)(S,{value:`billing`,title:`How does billing work?`,children:`Billing is monthly, based on active seats.`}),(0,E.jsx)(S,{value:`cancel`,title:`Can I cancel anytime?`,children:`Yes — cancel from account settings anytime.`})]})},P={name:`Divider between header and content`,args:{showDivider:!0},render:e=>(0,E.jsxs)(x,{...e,defaultValue:`billing`,className:`w-96`,children:[(0,E.jsx)(S,{value:`billing`,title:`How does billing work?`,children:`Billing is monthly, based on active seats.`}),(0,E.jsx)(S,{value:`cancel`,title:`Can I cancel anytime?`,children:`Yes — cancel from account settings anytime.`})]})},F={name:`animated={false}`,args:{animated:!1},render:e=>(0,E.jsxs)(x,{...e,defaultValue:`billing`,className:`w-96`,children:[(0,E.jsx)(S,{value:`billing`,title:`How does billing work?`,children:`Billing is monthly, based on active seats. This item toggles open/closed instantly, with no height transition — the pre-1.x behavior.`}),(0,E.jsx)(S,{value:`cancel`,title:`Can I cancel anytime?`,children:`Yes — cancel from account settings anytime.`})]})},I={name:`Content that changes height while open`,render:e=>{function t(){let[t,n]=(0,T.useState)(1);return(0,E.jsx)(x,{...e,defaultValue:`notes`,className:`w-96`,children:(0,E.jsx)(S,{value:`notes`,title:`Meeting notes`,children:(0,E.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[Array.from({length:t},(e,t)=>(0,E.jsxs)(`p`,{children:[`Note `,t+1,`: the panel height follows this content with no JS measurement.`]},t)),(0,E.jsx)(`button`,{type:`button`,onClick:()=>n(e=>e+1),className:`self-start text-fg-brand hover:underline text-p-sm font-medium`,children:`Add a note`})]})})})}return(0,E.jsx)(t,{})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <Accordion {...args} defaultValue="billing" className="w-96">
      <AccordionItem value="billing" title="How does billing work?">
        Billing is monthly, based on active seats. Upgrading or downgrading prorates automatically
        on your next invoice.
      </AccordionItem>
      <AccordionItem value="cancel" title="Can I cancel anytime?">
        Yes — cancel from account settings and access continues through the end of the current
        billing period.
      </AccordionItem>
      <AccordionItem value="support" title="What support is included?">
        All plans include email support; Enterprise plans add a dedicated Slack channel and a 1-hour
        response SLA.
      </AccordionItem>
    </Accordion>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'multiple'
  },
  render: args => <Accordion {...args} defaultValue={['billing', 'support']} className="w-96">
      <AccordionItem value="billing" title="How does billing work?">
        Billing is monthly, based on active seats. Upgrading or downgrading prorates automatically
        on your next invoice.
      </AccordionItem>
      <AccordionItem value="cancel" title="Can I cancel anytime?">
        Yes — cancel from account settings and access continues through the end of the current
        billing period.
      </AccordionItem>
      <AccordionItem value="support" title="What support is included?">
        All plans include email support; Enterprise plans add a dedicated Slack channel and a 1-hour
        response SLA.
      </AccordionItem>
    </Accordion>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => <Accordion {...args} defaultValue="billing" className="w-96">
      <AccordionItem value="billing" title="Billing" icon={<CreditCard className="size-4" />}>
        Billing is monthly, based on active seats.
      </AccordionItem>
      <AccordionItem value="notifications" title="Notifications" icon={<Bell className="size-4" />}>
        Configure which events trigger an email or in-app notification.
      </AccordionItem>
      <AccordionItem value="security" title="Security" icon={<Shield className="size-4" />}>
        Enable SSO and enforce two-factor authentication for your workspace.
      </AccordionItem>
      <AccordionItem value="help" title="Help & FAQ" icon={<HelpCircle className="size-4" />}>
        Browse the knowledge base or contact support for anything else.
      </AccordionItem>
    </Accordion>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Disabled item',
  render: args => <Accordion {...args} defaultValue="billing" className="w-96">
      <AccordionItem value="billing" title="How does billing work?">
        Billing is monthly, based on active seats.
      </AccordionItem>
      <AccordionItem value="legacy" title="Legacy plans (unavailable)" disabled>
        Legacy plans are no longer available to new customers.
      </AccordionItem>
      <AccordionItem value="support" title="What support is included?">
        All plans include email support.
      </AccordionItem>
    </Accordion>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    function ControlledExample() {
      const [value, setValue] = useState('billing');
      return <Accordion {...args} value={value} onValueChange={next => setValue(next as string)} className="w-96">
          <AccordionItem value="billing" title="How does billing work?">
            Billing is monthly, based on active seats.
          </AccordionItem>
          <AccordionItem value="cancel" title="Can I cancel anytime?">
            Yes — cancel from account settings anytime.
          </AccordionItem>
        </Accordion>;
    }
    return <ControlledExample />;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  render: args => <Accordion {...args} defaultValue="billing" className="w-96 border-brand-500 shadow-z3">
      <AccordionItem value="billing" title="How does billing work?">
        Billing is monthly, based on active seats.
      </AccordionItem>
      <AccordionItem value="cancel" title="Can I cancel anytime?">
        Yes — cancel from account settings anytime.
      </AccordionItem>
    </Accordion>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Divider between header and content',
  args: {
    showDivider: true
  },
  render: args => <Accordion {...args} defaultValue="billing" className="w-96">
      <AccordionItem value="billing" title="How does billing work?">
        Billing is monthly, based on active seats.
      </AccordionItem>
      <AccordionItem value="cancel" title="Can I cancel anytime?">
        Yes — cancel from account settings anytime.
      </AccordionItem>
    </Accordion>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'animated={false}',
  args: {
    animated: false
  },
  render: args => <Accordion {...args} defaultValue="billing" className="w-96">
      <AccordionItem value="billing" title="How does billing work?">
        Billing is monthly, based on active seats. This item toggles open/closed instantly, with no
        height transition — the pre-1.x behavior.
      </AccordionItem>
      <AccordionItem value="cancel" title="Can I cancel anytime?">
        Yes — cancel from account settings anytime.
      </AccordionItem>
    </Accordion>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Content that changes height while open',
  render: args => {
    function DynamicContentExample() {
      const [lines, setLines] = useState(1);
      return <Accordion {...args} defaultValue="notes" className="w-96">
          <AccordionItem value="notes" title="Meeting notes">
            <div className="flex flex-col gap-2">
              {Array.from({
              length: lines
            }, (_, i) => <p key={i}>Note {i + 1}: the panel height follows this content with no JS measurement.</p>)}
              <button type="button" onClick={() => setLines(n => n + 1)} className="self-start text-fg-brand hover:underline text-p-sm font-medium">
                Add a note
              </button>
            </div>
          </AccordionItem>
        </Accordion>;
    }
    return <DynamicContentExample />;
  }
}`,...I.parameters?.docs?.source}}},L=[`Primary`,`Multiple`,`WithIcons`,`DisabledItem`,`Controlled`,`CustomClassName`,`ShowDivider`,`NotAnimated`,`DynamicContent`]}));R();export{M as Controlled,N as CustomClassName,j as DisabledItem,I as DynamicContent,k as Multiple,F as NotAnimated,O as Primary,P as ShowDivider,A as WithIcons,L as __namedExportsOrder,D as default,R as n,w as t};