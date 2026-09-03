import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-p9i34dfU.js";import{It as a,Jt as o,nn as s,t as c,v as l,wt as u}from"./lucide-react-D8zEK72V.js";import{n as d,t as f}from"./cn-BNhCYuha.js";import{n as p,t as m}from"./Divider-Dkw7PUM8.js";import{n as h,r as g,t as _}from"./optionValue-DydacNfb.js";var v=t((()=>{p()}));function y(){let e=(0,x.useContext)(C);if(!e)throw Error(`AccordionItem must be used inside <Accordion>`);return e}function b(e){return e===void 0?[]:Array.isArray(e)?e:[e]}var x,S,C,w,T,E=t((()=>{x=n(r(),1),c(),d(),v(),h(),S=i(),C=(0,x.createContext)(null),w=(0,x.forwardRef)(function({type:e=`single`,defaultValue:t,value:n,onValueChange:r,animated:i=!0,showDivider:a=!1,className:o,children:s,dataTestId:c,...l},u){let[d,p]=(0,x.useState)(()=>b(t)),m=n!==void 0,h=m?b(n):d;return(0,S.jsx)(C.Provider,{value:{openValues:h,toggle:t=>{let n=_(h,t),i;i=e===`single`?n?[]:[t]:n?h.filter(e=>!g(e,t)):[...h,t],m||p(i),r?.(e===`single`?i[0]:i)},animated:i,showDivider:a},children:(0,S.jsx)(`div`,{ref:u,"data-test-id":c,className:f(`flex flex-col divide-y divide-border-default border border-border-default rounded-lg overflow-hidden bg-bg-default`,o),...l,children:s})})}),T=(0,x.forwardRef)(function({value:e,title:t,icon:n,disabled:r,className:i,children:a,dataTestId:s,...c},l){let{openValues:u,toggle:d,animated:p,showDivider:h}=y(),g=_(u,e),v=(0,x.useId)(),b=(0,x.useId)(),C=(0,S.jsxs)(S.Fragment,{children:[h&&(0,S.jsx)(m,{className:`mb-4`}),a]});return(0,S.jsxs)(`div`,{ref:l,"data-test-id":s,"data-state":g?`open`:`closed`,className:f(`group`,i),...c,children:[(0,S.jsx)(`h3`,{children:(0,S.jsxs)(`button`,{id:b,type:`button`,onClick:()=>d(e),disabled:r,"aria-expanded":g,"aria-controls":v,className:f(`flex w-full items-center justify-between gap-3 px-5 py-4 text-left`,`text-p-md font-medium text-fg-default`,`hover:bg-bg-container transition-colors`,`focus-visible:outline-none focus-visible:bg-bg-container`,`disabled:opacity-50 disabled:cursor-not-allowed`),children:[(0,S.jsxs)(`span`,{className:`inline-flex items-center gap-3`,children:[n&&(0,S.jsx)(`span`,{className:`inline-flex text-fg-secondary`,children:n}),t]}),(0,S.jsx)(o,{className:f(`h-5 w-5 shrink-0 text-fg-secondary transition-transform duration-200`,g&&`rotate-180`),"aria-hidden":!0})]})}),p?(0,S.jsx)(`div`,{className:f(`grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none`,g?`grid-rows-[1fr]`:`grid-rows-[0fr]`),children:(0,S.jsx)(`div`,{className:`overflow-hidden min-h-0`,children:(0,S.jsx)(`div`,{id:v,role:`region`,"aria-labelledby":b,inert:!g||void 0,className:`px-5 pb-4 text-p-std text-fg-secondary`,children:C})})}):(0,S.jsx)(`div`,{id:v,role:`region`,"aria-labelledby":b,hidden:!g,className:`px-5 pb-4 text-p-std text-fg-secondary`,children:C})]})});try{w.displayName=`Accordion`,w.__docgenInfo={description:``,displayName:`Accordion`,filePath:`/home/runner/work/design-system/design-system/src/components/Accordion/Accordion.tsx`,methods:[],props:{type:{defaultValue:{value:`single`},declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`}],description:"`'single'` keeps at most one item open at a time; `'multiple'` allows any number.",name:`type`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`},required:!1,tags:{},type:{name:`enum`,raw:`AccordionType`,value:[{value:`"single"`},{value:`"multiple"`}]}},defaultValue:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`}],description:"Uncontrolled initial open value(s) — a single value for `'single'`, an array for `'multiple'`.",name:`defaultValue`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`},required:!1,tags:{},type:{name:`OptionValue | OptionValue[]`}},value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`}],description:"Controlled open value(s). Pass alongside `onValueChange` to fully control which item(s) are open.",name:`value`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`},required:!1,tags:{},type:{name:`OptionValue | OptionValue[]`}},onValueChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`}],description:``,name:`onValueChange`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`},required:!1,tags:{},type:{name:`((value: OptionValue | OptionValue[]) => void)`}},animated:{defaultValue:{value:`true`},declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`}],description:"Animates each panel open/closed. Set `false` for the pre-1.x instant toggle (also restores the plain `hidden` attribute instead of the animated grid wrapper).",name:`animated`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`},required:!1,tags:{},type:{name:`boolean`}},showDivider:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`}],description:`Renders a Divider between each item's header and its panel content.`,name:`showDivider`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionProps`},required:!1,tags:{},type:{name:`boolean`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{T.displayName=`AccordionItem`,T.__docgenInfo={description:``,displayName:`AccordionItem`,filePath:`/home/runner/work/design-system/design-system/src/components/Accordion/Accordion.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionItemProps`}],description:"Unique identifier used to track open/closed state within the parent `Accordion`.",name:`value`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionItemProps`},required:!0,tags:{},type:{name:`OptionValue`}},title:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionItemProps`}],description:``,name:`title`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionItemProps`},required:!0,tags:{},type:{name:`ReactNode`}},icon:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionItemProps`}],description:``,name:`icon`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionItemProps`},required:!1,tags:{},type:{name:`ReactNode`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionItemProps`}],description:``,name:`disabled`,parent:{fileName:`design-system/src/components/Accordion/Accordion.types.ts`,name:`AccordionItemProps`},required:!1,tags:{},type:{name:`boolean`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),D=e({Controlled:()=>L,ControlledNumericValues:()=>P,CustomClassName:()=>R,DisabledItem:()=>I,DynamicContent:()=>V,Multiple:()=>M,NotAnimated:()=>B,NumericValues:()=>N,Primary:()=>j,ShowDivider:()=>z,WithIcons:()=>F,__namedExportsOrder:()=>H,default:()=>A}),O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U=t((()=>{O=n(r(),1),c(),E(),k=i(),A={title:`Components/Accordion`,component:w,parameters:{layout:`centered`},argTypes:{type:{control:`select`,options:[`single`,`multiple`]}},args:{type:`single`}},j={render:e=>(0,k.jsxs)(w,{...e,defaultValue:`billing`,className:`w-96`,children:[(0,k.jsx)(T,{value:`billing`,title:`How does billing work?`,children:`Billing is monthly, based on active seats. Upgrading or downgrading prorates automatically on your next invoice.`}),(0,k.jsx)(T,{value:`cancel`,title:`Can I cancel anytime?`,children:`Yes — cancel from account settings and access continues through the end of the current billing period.`}),(0,k.jsx)(T,{value:`support`,title:`What support is included?`,children:`All plans include email support; Enterprise plans add a dedicated Slack channel and a 1-hour response SLA.`})]})},M={args:{type:`multiple`},render:e=>(0,k.jsxs)(w,{...e,defaultValue:[`billing`,`support`],className:`w-96`,children:[(0,k.jsx)(T,{value:`billing`,title:`How does billing work?`,children:`Billing is monthly, based on active seats. Upgrading or downgrading prorates automatically on your next invoice.`}),(0,k.jsx)(T,{value:`cancel`,title:`Can I cancel anytime?`,children:`Yes — cancel from account settings and access continues through the end of the current billing period.`}),(0,k.jsx)(T,{value:`support`,title:`What support is included?`,children:`All plans include email support; Enterprise plans add a dedicated Slack channel and a 1-hour response SLA.`})]})},N={name:`Numeric values (round-trip through onValueChange)`,args:{defaultValue:1},render:e=>(0,k.jsxs)(w,{...e,className:`w-96`,children:[(0,k.jsx)(T,{value:1,title:`Step 1`,children:`Contents of step 1.`}),(0,k.jsx)(T,{value:2,title:`Step 2`,children:`Contents of step 2.`}),(0,k.jsx)(T,{value:3,title:`Step 3`,children:`Contents of step 3.`})]})},P={name:`Controlled numeric values (single mode)`,render:e=>{function t(){let[t,n]=(0,O.useState)(1);return(0,k.jsxs)(w,{...e,value:t,onValueChange:e=>n(e),className:`w-96`,children:[(0,k.jsx)(T,{value:1,title:`Step 1`,children:`Contents of step 1.`}),(0,k.jsx)(T,{value:2,title:`Step 2`,children:`Contents of step 2.`}),(0,k.jsx)(T,{value:3,title:`Step 3`,children:`Contents of step 3.`})]})}return(0,k.jsx)(t,{})}},F={render:e=>(0,k.jsxs)(w,{...e,defaultValue:`billing`,className:`w-96`,children:[(0,k.jsx)(T,{value:`billing`,title:`Billing`,icon:(0,k.jsx)(u,{className:`size-4`}),children:`Billing is monthly, based on active seats.`}),(0,k.jsx)(T,{value:`notifications`,title:`Notifications`,icon:(0,k.jsx)(s,{className:`size-4`}),children:`Configure which events trigger an email or in-app notification.`}),(0,k.jsx)(T,{value:`security`,title:`Security`,icon:(0,k.jsx)(l,{className:`size-4`}),children:`Enable SSO and enforce two-factor authentication for your workspace.`}),(0,k.jsx)(T,{value:`help`,title:`Help & FAQ`,icon:(0,k.jsx)(a,{className:`size-4`}),children:`Browse the knowledge base or contact support for anything else.`})]})},I={name:`Disabled item`,render:e=>(0,k.jsxs)(w,{...e,defaultValue:`billing`,className:`w-96`,children:[(0,k.jsx)(T,{value:`billing`,title:`How does billing work?`,children:`Billing is monthly, based on active seats.`}),(0,k.jsx)(T,{value:`legacy`,title:`Legacy plans (unavailable)`,disabled:!0,children:`Legacy plans are no longer available to new customers.`}),(0,k.jsx)(T,{value:`support`,title:`What support is included?`,children:`All plans include email support.`})]})},L={render:e=>{function t(){let[t,n]=(0,O.useState)(`billing`);return(0,k.jsxs)(w,{...e,value:t,onValueChange:e=>n(e),className:`w-96`,children:[(0,k.jsx)(T,{value:`billing`,title:`How does billing work?`,children:`Billing is monthly, based on active seats.`}),(0,k.jsx)(T,{value:`cancel`,title:`Can I cancel anytime?`,children:`Yes — cancel from account settings anytime.`})]})}return(0,k.jsx)(t,{})}},R={name:`Overriding classes via className`,render:e=>(0,k.jsxs)(w,{...e,defaultValue:`billing`,className:`w-96 border-brand-500 shadow-z3`,children:[(0,k.jsx)(T,{value:`billing`,title:`How does billing work?`,children:`Billing is monthly, based on active seats.`}),(0,k.jsx)(T,{value:`cancel`,title:`Can I cancel anytime?`,children:`Yes — cancel from account settings anytime.`})]})},z={name:`Divider between header and content`,args:{showDivider:!0},render:e=>(0,k.jsxs)(w,{...e,defaultValue:`billing`,className:`w-96`,children:[(0,k.jsx)(T,{value:`billing`,title:`How does billing work?`,children:`Billing is monthly, based on active seats.`}),(0,k.jsx)(T,{value:`cancel`,title:`Can I cancel anytime?`,children:`Yes — cancel from account settings anytime.`})]})},B={name:`animated={false}`,args:{animated:!1},render:e=>(0,k.jsxs)(w,{...e,defaultValue:`billing`,className:`w-96`,children:[(0,k.jsx)(T,{value:`billing`,title:`How does billing work?`,children:`Billing is monthly, based on active seats. This item toggles open/closed instantly, with no height transition — the pre-1.x behavior.`}),(0,k.jsx)(T,{value:`cancel`,title:`Can I cancel anytime?`,children:`Yes — cancel from account settings anytime.`})]})},V={name:`Content that changes height while open`,render:e=>{function t(){let[t,n]=(0,O.useState)(1);return(0,k.jsx)(w,{...e,defaultValue:`notes`,className:`w-96`,children:(0,k.jsx)(T,{value:`notes`,title:`Meeting notes`,children:(0,k.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[Array.from({length:t},(e,t)=>(0,k.jsxs)(`p`,{children:[`Note `,t+1,`: the panel height follows this content with no JS measurement.`]},t)),(0,k.jsx)(`button`,{type:`button`,onClick:()=>n(e=>e+1),className:`self-start text-fg-brand hover:underline text-p-sm font-medium`,children:`Add a note`})]})})})}return(0,k.jsx)(t,{})}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Numeric values (round-trip through onValueChange)',
  args: {
    defaultValue: 1
  },
  render: args => <Accordion {...args} className="w-96">
      <AccordionItem value={1} title="Step 1">
        Contents of step 1.
      </AccordionItem>
      <AccordionItem value={2} title="Step 2">
        Contents of step 2.
      </AccordionItem>
      <AccordionItem value={3} title="Step 3">
        Contents of step 3.
      </AccordionItem>
    </Accordion>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Controlled numeric values (single mode)',
  render: args => {
    function ControlledNumericDemo() {
      const [value, setValue] = useState<number | undefined>(1);
      return <Accordion {...args} value={value} onValueChange={next => setValue(next as number | undefined)} className="w-96">
          <AccordionItem value={1} title="Step 1">
            Contents of step 1.
          </AccordionItem>
          <AccordionItem value={2} title="Step 2">
            Contents of step 2.
          </AccordionItem>
          <AccordionItem value={3} title="Step 3">
            Contents of step 3.
          </AccordionItem>
        </Accordion>;
    }
    return <ControlledNumericDemo />;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    function ControlledExample() {
      const [value, setValue] = useState<string | number>('billing');
      return <Accordion {...args} value={value} onValueChange={next => setValue(next as string | number)} className="w-96">
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  render: args => <Accordion {...args} defaultValue="billing" className="w-96 border-brand-500 shadow-z3">
      <AccordionItem value="billing" title="How does billing work?">
        Billing is monthly, based on active seats.
      </AccordionItem>
      <AccordionItem value="cancel" title="Can I cancel anytime?">
        Yes — cancel from account settings anytime.
      </AccordionItem>
    </Accordion>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Content that changes height while open',
  render: args => {
    function DynamicContentExample() {
      const [lines, setLines] = useState(1);
      return <Accordion {...args} defaultValue="notes" className="w-96">
          <AccordionItem value="notes" title="Meeting notes">
            <div className="flex flex-col gap-2">
              {Array.from({
              length: lines
            }, (_, i) => <p key={i}>
                  Note {i + 1}: the panel height follows this content with no JS measurement.
                </p>)}
              <button type="button" onClick={() => setLines(n => n + 1)} className="self-start text-fg-brand hover:underline text-p-sm font-medium">
                Add a note
              </button>
            </div>
          </AccordionItem>
        </Accordion>;
    }
    return <DynamicContentExample />;
  }
}`,...V.parameters?.docs?.source}}},H=[`Primary`,`Multiple`,`NumericValues`,`ControlledNumericValues`,`WithIcons`,`DisabledItem`,`Controlled`,`CustomClassName`,`ShowDivider`,`NotAnimated`,`DynamicContent`]}));U();export{L as Controlled,P as ControlledNumericValues,R as CustomClassName,I as DisabledItem,V as DynamicContent,M as Multiple,B as NotAnimated,N as NumericValues,j as Primary,z as ShowDivider,F as WithIcons,H as __namedExportsOrder,A as default,U as n,D as t};