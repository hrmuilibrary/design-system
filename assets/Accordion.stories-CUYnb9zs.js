import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-BgCNYJC5.js";import{Et as a,Q as o,g as s,ot as c,t as l,vt as u}from"./lucide-react-D8xGtw7t.js";import{n as d,t as f}from"./cn-CHNBg8JS.js";function p(){let e=(0,h.useContext)(_);if(!e)throw Error(`AccordionItem must be used inside <Accordion>`);return e}function m(e){return e===void 0?[]:Array.isArray(e)?e:[e]}var h,g,_,v,y,b=t((()=>{h=n(r(),1),l(),d(),g=i(),_=(0,h.createContext)(null),v=(0,h.forwardRef)(function({type:e=`single`,defaultValue:t,value:n,onValueChange:r,className:i,children:a,dataTestId:o,...s},c){let[l,u]=(0,h.useState)(()=>m(t)),d=n!==void 0,p=d?m(n):l;return(0,g.jsx)(_.Provider,{value:{openValues:p,toggle:t=>{let n;n=e===`single`?p.includes(t)?[]:[t]:p.includes(t)?p.filter(e=>e!==t):[...p,t],d||u(n),r?.(e===`single`?n[0]??``:n)}},children:(0,g.jsx)(`div`,{ref:c,"data-test-id":o,className:f(`flex flex-col divide-y divide-border-default border border-border-default rounded-lg overflow-hidden bg-bg-default`,i),...s,children:a})})}),y=(0,h.forwardRef)(function({value:e,title:t,icon:n,disabled:r,className:i,children:a,dataTestId:o,...s},c){let{openValues:l,toggle:d}=p(),m=l.includes(e),_=(0,h.useId)();return(0,g.jsxs)(`div`,{ref:c,"data-test-id":o,"data-state":m?`open`:`closed`,className:f(`group`,i),...s,children:[(0,g.jsx)(`h3`,{children:(0,g.jsxs)(`button`,{type:`button`,onClick:()=>d(e),disabled:r,"aria-expanded":m,"aria-controls":_,className:f(`flex w-full items-center justify-between gap-3 px-5 py-4 text-left`,`text-p-md font-medium text-fg-default`,`hover:bg-bg-container transition-colors`,`focus-visible:outline-none focus-visible:bg-bg-container`,`disabled:opacity-50 disabled:cursor-not-allowed`),children:[(0,g.jsxs)(`span`,{className:`inline-flex items-center gap-3`,children:[n&&(0,g.jsx)(`span`,{className:`inline-flex text-fg-secondary`,children:n}),t]}),(0,g.jsx)(u,{className:f(`h-5 w-5 shrink-0 text-fg-secondary transition-transform duration-200`,m&&`rotate-180`),"aria-hidden":!0})]})}),(0,g.jsx)(`div`,{id:_,role:`region`,hidden:!m,className:`px-5 pb-4 text-p-std text-fg-secondary`,children:a})]})});try{v.displayName=`Accordion`,v.__docgenInfo={description:``,displayName:`Accordion`,filePath:`/home/runner/work/design-system/design-system/src/components/Accordion/Accordion.tsx`,methods:[],props:{type:{defaultValue:{value:`single`},declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`}],description:"`'single'` keeps at most one item open at a time; `'multiple'` allows any number.",name:`type`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`},required:!1,tags:{},type:{name:`enum`,raw:`AccordionType`,value:[{value:`"multiple"`},{value:`"single"`}]}},defaultValue:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`}],description:"Uncontrolled initial open value(s) — a single string for `'single'`, an array for `'multiple'`.",name:`defaultValue`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`},required:!1,tags:{},type:{name:`string | string[]`}},value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`}],description:"Controlled open value(s). Pass alongside `onValueChange` to fully control which item(s) are open.",name:`value`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`},required:!1,tags:{},type:{name:`string | string[]`}},onValueChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`}],description:``,name:`onValueChange`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`},required:!1,tags:{},type:{name:`((value: string | string[]) => void)`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{y.displayName=`AccordionItem`,y.__docgenInfo={description:``,displayName:`AccordionItem`,filePath:`/home/runner/work/design-system/design-system/src/components/Accordion/Accordion.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionItemProps`}],description:"Unique identifier used to track open/closed state within the parent `Accordion`.",name:`value`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionItemProps`},required:!0,tags:{},type:{name:`string`}},title:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionItemProps`}],description:``,name:`title`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionItemProps`},required:!0,tags:{},type:{name:`ReactNode`}},icon:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionItemProps`}],description:``,name:`icon`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionItemProps`},required:!1,tags:{},type:{name:`ReactNode`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionItemProps`}],description:``,name:`disabled`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionItemProps`},required:!1,tags:{},type:{name:`boolean`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),x=e({Controlled:()=>k,CustomClassName:()=>A,DisabledItem:()=>O,Multiple:()=>E,Primary:()=>T,WithIcons:()=>D,__namedExportsOrder:()=>j,default:()=>w}),S,C,w,T,E,D,O,k,A,j,M=t((()=>{S=n(r(),1),l(),b(),C=i(),w={title:`Components/Accordion`,component:v,parameters:{layout:`centered`},argTypes:{type:{control:`select`,options:[`single`,`multiple`]}},args:{type:`single`}},T={render:e=>(0,C.jsxs)(v,{...e,defaultValue:`billing`,className:`w-96`,children:[(0,C.jsx)(y,{value:`billing`,title:`How does billing work?`,children:`Billing is monthly, based on active seats. Upgrading or downgrading prorates automatically on your next invoice.`}),(0,C.jsx)(y,{value:`cancel`,title:`Can I cancel anytime?`,children:`Yes — cancel from account settings and access continues through the end of the current billing period.`}),(0,C.jsx)(y,{value:`support`,title:`What support is included?`,children:`All plans include email support; Enterprise plans add a dedicated Slack channel and a 1-hour response SLA.`})]})},E={args:{type:`multiple`},render:e=>(0,C.jsxs)(v,{...e,defaultValue:[`billing`,`support`],className:`w-96`,children:[(0,C.jsx)(y,{value:`billing`,title:`How does billing work?`,children:`Billing is monthly, based on active seats. Upgrading or downgrading prorates automatically on your next invoice.`}),(0,C.jsx)(y,{value:`cancel`,title:`Can I cancel anytime?`,children:`Yes — cancel from account settings and access continues through the end of the current billing period.`}),(0,C.jsx)(y,{value:`support`,title:`What support is included?`,children:`All plans include email support; Enterprise plans add a dedicated Slack channel and a 1-hour response SLA.`})]})},D={render:e=>(0,C.jsxs)(v,{...e,defaultValue:`billing`,className:`w-96`,children:[(0,C.jsx)(y,{value:`billing`,title:`Billing`,icon:(0,C.jsx)(o,{className:`size-4`}),children:`Billing is monthly, based on active seats.`}),(0,C.jsx)(y,{value:`notifications`,title:`Notifications`,icon:(0,C.jsx)(a,{className:`size-4`}),children:`Configure which events trigger an email or in-app notification.`}),(0,C.jsx)(y,{value:`security`,title:`Security`,icon:(0,C.jsx)(s,{className:`size-4`}),children:`Enable SSO and enforce two-factor authentication for your workspace.`}),(0,C.jsx)(y,{value:`help`,title:`Help & FAQ`,icon:(0,C.jsx)(c,{className:`size-4`}),children:`Browse the knowledge base or contact support for anything else.`})]})},O={name:`Disabled item`,render:e=>(0,C.jsxs)(v,{...e,defaultValue:`billing`,className:`w-96`,children:[(0,C.jsx)(y,{value:`billing`,title:`How does billing work?`,children:`Billing is monthly, based on active seats.`}),(0,C.jsx)(y,{value:`legacy`,title:`Legacy plans (unavailable)`,disabled:!0,children:`Legacy plans are no longer available to new customers.`}),(0,C.jsx)(y,{value:`support`,title:`What support is included?`,children:`All plans include email support.`})]})},k={render:e=>{function t(){let[t,n]=(0,S.useState)(`billing`);return(0,C.jsxs)(v,{...e,value:t,onValueChange:e=>n(e),className:`w-96`,children:[(0,C.jsx)(y,{value:`billing`,title:`How does billing work?`,children:`Billing is monthly, based on active seats.`}),(0,C.jsx)(y,{value:`cancel`,title:`Can I cancel anytime?`,children:`Yes — cancel from account settings anytime.`})]})}return(0,C.jsx)(t,{})}},A={name:`Overriding classes via className`,render:e=>(0,C.jsxs)(v,{...e,defaultValue:`billing`,className:`w-96 border-brand-500 shadow-z3`,children:[(0,C.jsx)(y,{value:`billing`,title:`How does billing work?`,children:`Billing is monthly, based on active seats.`}),(0,C.jsx)(y,{value:`cancel`,title:`Can I cancel anytime?`,children:`Yes — cancel from account settings anytime.`})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  render: args => <Accordion {...args} defaultValue="billing" className="w-96 border-brand-500 shadow-z3">
      <AccordionItem value="billing" title="How does billing work?">
        Billing is monthly, based on active seats.
      </AccordionItem>
      <AccordionItem value="cancel" title="Can I cancel anytime?">
        Yes — cancel from account settings anytime.
      </AccordionItem>
    </Accordion>
}`,...A.parameters?.docs?.source}}},j=[`Primary`,`Multiple`,`WithIcons`,`DisabledItem`,`Controlled`,`CustomClassName`]}));M();export{k as Controlled,A as CustomClassName,O as DisabledItem,E as Multiple,T as Primary,D as WithIcons,j as __namedExportsOrder,w as default,M as n,x as t};