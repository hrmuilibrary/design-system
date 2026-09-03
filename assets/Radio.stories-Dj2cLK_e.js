import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-NGpJ9wog.js";import{n as a,t as o}from"./cn-BNhCYuha.js";import{n as s,r as c}from"./optionValue-DydacNfb.js";var l,u,d,f,p,m,h,g=t((()=>{l=n(r(),1),a(),s(),u=i(),d=(0,l.createContext)(null),f=(0,l.forwardRef)(function({name:e,label:t,value:n,defaultValue:r,onChange:i,disabled:a,required:s,error:c,errorText:f,helperText:p,size:m=`md`,orientation:h=`vertical`,children:g,className:_,wrapperClassName:v,dataTestId:y},b){let x=(0,l.useId)(),S=e??x,C=`${x}-label`,w=c||!!f,T=f?`${x}-error`:p?`${x}-help`:void 0,E=(0,u.jsx)(`div`,{ref:b,role:`radiogroup`,"aria-labelledby":t?C:void 0,"aria-required":s||void 0,"aria-invalid":w||void 0,"aria-describedby":T,"data-test-id":y,className:o(`flex gap-3`,h===`vertical`?`flex-col`:`flex-row flex-wrap items-center gap-4`,_),children:g});return(0,u.jsx)(d.Provider,{value:{name:S,value:n,defaultValue:r,onChange:i,disabled:a,size:m,error:w},children:t||f||p?(0,u.jsxs)(`div`,{className:o(`flex flex-col gap-1.5`,v),children:[t&&(0,u.jsxs)(`span`,{id:C,className:`text-p-std font-medium text-fg-default inline-flex items-center gap-1`,children:[t,s&&(0,u.jsx)(`span`,{className:`text-red-600`,"aria-hidden":!0,children:`*`})]}),E,f?(0,u.jsx)(`p`,{id:`${x}-error`,className:`text-p-sm text-red-700`,children:f}):p?(0,u.jsx)(`p`,{id:`${x}-help`,className:`text-p-sm text-fg-secondary`,children:p}):null]}):E})}),p={md:`h-5 w-5`,sm:`h-4 w-4`},m={md:`h-2 w-2`,sm:`h-1.5 w-1.5`},h=(0,l.forwardRef)(function({value:e,size:t,label:n,description:r,error:i=!1,id:a,disabled:s,checked:f,defaultChecked:h,onChange:g,className:_,dataTestId:v,...y},b){let x=(0,l.useContext)(d),S=(0,l.useId)(),C=a??S,w=t??x?.size??`md`,T=s??x?.disabled,E=i||!!x?.error,D=x!==null,O=D&&x.value!==void 0?c(x.value,e):void 0,k=D&&x.defaultValue!==void 0?c(x.defaultValue,e):void 0,A=D?O:f,j=D?k:h;return(0,u.jsxs)(`label`,{htmlFor:C,"data-test-id":v,className:o(`inline-flex items-center gap-2.5`,T?`cursor-not-allowed opacity-60`:`cursor-pointer`,_),children:[(0,u.jsxs)(`span`,{className:`relative inline-flex shrink-0 items-center justify-center mt-0.5`,children:[(0,u.jsx)(`input`,{ref:b,id:C,type:`radio`,name:x?.name,value:String(e),checked:A,defaultChecked:j,disabled:T,onChange:t=>{x?.onChange?.(e),g?.(t)},className:`peer sr-only`,"aria-invalid":E||void 0,...y}),(0,u.jsx)(`span`,{className:o(`flex items-center justify-center rounded-full border bg-bg-default transition-colors`,p[w],E?`border-red-600`:`border-border-strong`,!T&&!E&&`peer-hover:border-fg-tertiary`,`peer-focus-visible:ring-2 peer-focus-visible:ring-brand-300 peer-focus-visible:ring-offset-1`,`peer-checked:border-brand-500`,T&&`!bg-bg-subtle !border-border-default`,`[&>span]:opacity-0 peer-checked:[&>span]:opacity-100`),children:(0,u.jsx)(`span`,{className:o(`rounded-full bg-brand-500 transition-opacity`,m[w],T&&`!bg-fg-disabled`)})})]}),(n||r)&&(0,u.jsxs)(`span`,{className:`flex flex-col gap-0.5`,children:[n&&(0,u.jsx)(`span`,{className:`text-p-std font-medium text-fg-default leading-tight`,children:n}),r&&(0,u.jsx)(`span`,{className:`text-p-sm text-fg-secondary leading-snug`,children:r})]})]})});try{f.displayName=`RadioGroup`,f.__docgenInfo={description:``,displayName:`RadioGroup`,filePath:`/home/runner/work/design-system/design-system/src/components/Radio/Radio.tsx`,methods:[],props:{name:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`}],description:``,name:`name`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`}],description:``,name:`label`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`ReactNode`}},value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`}],description:``,name:`value`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`RadioValue`}},defaultValue:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`}],description:``,name:`defaultValue`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`RadioValue`}},onChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`}],description:``,name:`onChange`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`((value: RadioValue) => void)`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`}],description:``,name:`disabled`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`boolean`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`enum`,raw:`RadioSize`,value:[{value:`"sm"`},{value:`"md"`}]}},orientation:{defaultValue:{value:`vertical`},declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`}],description:``,name:`orientation`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},required:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`}],description:"Renders a red asterisk next to `label` and sets `aria-required` on the group.",name:`required`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`boolean`}},error:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`}],description:"Cascades to every child `Radio`, OR'd with each `Radio`'s own `error` — unlike `disabled`/`size`, a child cannot opt out with `error={false}`. Implied by `errorText`.",name:`error`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`boolean`}},errorText:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`}],description:"Message rendered below the group in the danger style; implies `error`. Replaces `helperText` when set.",name:`errorText`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`ReactNode`}},helperText:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`}],description:"Neutral message rendered below the group, replaced by `errorText` when present.",name:`helperText`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`ReactNode`}},className:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`}],description:``,name:`className`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`string`}},wrapperClassName:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`}],description:"Applied to the outermost wrapper, for layout purposes (e.g. grid positioning) — use `className` to target the radiogroup container itself.",name:`wrapperClassName`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`string`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{h.displayName=`Radio`,h.__docgenInfo={description:``,displayName:`Radio`,filePath:`/home/runner/work/design-system/design-system/src/components/Radio/Radio.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioProps`}],description:``,name:`value`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioProps`},required:!0,tags:{},type:{name:`RadioValue`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioProps`},required:!1,tags:{},type:{name:`enum`,raw:`RadioSize`,value:[{value:`"sm"`},{value:`"md"`}]}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioProps`}],description:``,name:`label`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioProps`},required:!1,tags:{},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioProps`}],description:``,name:`description`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioProps`},required:!1,tags:{},type:{name:`ReactNode`}},error:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioProps`}],description:``,name:`error`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioProps`},required:!1,tags:{},type:{name:`boolean`}},onChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioProps`}],description:``,name:`onChange`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioProps`},required:!1,tags:{},type:{name:`((e: ChangeEvent<HTMLInputElement, Element>) => void)`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),_=e({AllSizes:()=>j,Checked:()=>S,CustomClassName:()=>k,Default:()=>x,Disabled:()=>T,DisabledChecked:()=>E,DisabledGroup:()=>I,Error:()=>D,Group:()=>M,GroupBooleanValues:()=>H,GroupError:()=>B,GroupHelperText:()=>z,GroupHorizontal:()=>N,GroupNumericValues:()=>V,GroupRequired:()=>R,GroupSmall:()=>F,GroupWithDescriptions:()=>P,GroupWithLabel:()=>L,NoLabel:()=>O,Small:()=>w,WithDescription:()=>C,__namedExportsOrder:()=>U,default:()=>b}),v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W=t((()=>{v=n(r(),1),g(),y=i(),b={title:`Components/Radio`,component:h,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`md`,`sm`]}},args:{value:`option`,size:`md`,label:`Notify me by email`,disabled:!1,error:!1}},x={},S={args:{defaultChecked:!0}},C={args:{label:`Email notifications`,description:`Receive updates about your account activity.`}},w={args:{size:`sm`}},T={args:{disabled:!0}},E={args:{disabled:!0,defaultChecked:!0}},D={args:{error:!0,label:`This option is currently unavailable`}},O={args:{label:void 0,"aria-label":`Select option`}},k={name:`Overriding classes via className`,args:{className:`gap-4`,label:`Custom gap spacing`}},A=[`md`,`sm`],j={render:e=>(0,y.jsx)(`div`,{className:`flex flex-col gap-3`,children:A.map(t=>(0,y.jsx)(h,{...e,size:t,value:t,label:t},t))})},M={render:()=>{function e(){let[e,t]=(0,v.useState)(`comfortable`);return(0,y.jsxs)(f,{name:`density`,value:e,onChange:t,children:[(0,y.jsx)(h,{value:`compact`,label:`Compact`}),(0,y.jsx)(h,{value:`comfortable`,label:`Comfortable`}),(0,y.jsx)(h,{value:`spacious`,label:`Spacious`})]})}return(0,y.jsx)(e,{})}},N={name:`Group (horizontal)`,render:()=>{function e(){let[e,t]=(0,v.useState)(`yes`);return(0,y.jsxs)(f,{name:`confirm`,value:e,onChange:t,orientation:`horizontal`,children:[(0,y.jsx)(h,{value:`yes`,label:`Yes`}),(0,y.jsx)(h,{value:`no`,label:`No`})]})}return(0,y.jsx)(e,{})}},P={render:()=>{function e(){let[e,t]=(0,v.useState)(`free`);return(0,y.jsxs)(f,{name:`plan`,value:e,onChange:t,className:`w-72`,children:[(0,y.jsx)(h,{value:`free`,label:`Free`,description:`Basic features for individuals.`}),(0,y.jsx)(h,{value:`pro`,label:`Pro`,description:`Advanced features for teams.`}),(0,y.jsx)(h,{value:`enterprise`,label:`Enterprise`,description:`Custom limits and dedicated support.`})]})}return(0,y.jsx)(e,{})}},F={name:`Group (size: sm)`,render:()=>{function e(){let[e,t]=(0,v.useState)(`a`);return(0,y.jsxs)(f,{name:`small-group`,value:e,onChange:t,size:`sm`,children:[(0,y.jsx)(h,{value:`a`,label:`Option A`}),(0,y.jsx)(h,{value:`b`,label:`Option B`})]})}return(0,y.jsx)(e,{})}},I={render:()=>(0,y.jsxs)(f,{name:`disabled-group`,value:`a`,disabled:!0,onChange:()=>{},children:[(0,y.jsx)(h,{value:`a`,label:`Option A`}),(0,y.jsx)(h,{value:`b`,label:`Option B`})]})},L={name:`Group with label`,render:()=>{function e(){let[e,t]=(0,v.useState)(`comfortable`);return(0,y.jsxs)(f,{name:`density-labeled`,label:`Density`,value:e,onChange:t,children:[(0,y.jsx)(h,{value:`compact`,label:`Compact`}),(0,y.jsx)(h,{value:`comfortable`,label:`Comfortable`}),(0,y.jsx)(h,{value:`spacious`,label:`Spacious`})]})}return(0,y.jsx)(e,{})}},R={name:`Group required`,render:()=>(0,y.jsxs)(f,{name:`required-density`,label:`Density`,required:!0,children:[(0,y.jsx)(h,{value:`compact`,label:`Compact`}),(0,y.jsx)(h,{value:`comfortable`,label:`Comfortable`}),(0,y.jsx)(h,{value:`spacious`,label:`Spacious`})]})},z={name:`Group with helper text`,render:()=>(0,y.jsxs)(f,{name:`helper-density`,label:`Density`,helperText:`Choose the layout density for your workspace.`,children:[(0,y.jsx)(h,{value:`compact`,label:`Compact`}),(0,y.jsx)(h,{value:`comfortable`,label:`Comfortable`}),(0,y.jsx)(h,{value:`spacious`,label:`Spacious`})]})},B={name:`Group error state`,render:()=>(0,y.jsxs)(f,{name:`error-density`,label:`Density`,required:!0,errorText:`Choose a density to continue.`,children:[(0,y.jsx)(h,{value:`compact`,label:`Compact`}),(0,y.jsx)(h,{value:`comfortable`,label:`Comfortable`}),(0,y.jsx)(h,{value:`spacious`,label:`Spacious`})]})},V={name:`Group with numeric values`,render:()=>{function e(){let[e,t]=(0,v.useState)(1);return(0,y.jsxs)(f,{name:`rating`,value:e,onChange:t,children:[(0,y.jsx)(h,{value:1,label:`1 star`}),(0,y.jsx)(h,{value:2,label:`2 stars`}),(0,y.jsx)(h,{value:3,label:`3 stars`})]})}return(0,y.jsx)(e,{})}},H={name:`Group with boolean values (yes/no)`,render:()=>{function e(){let[e,t]=(0,v.useState)(!0);return(0,y.jsxs)(f,{name:`confirm`,value:e,onChange:t,children:[(0,y.jsx)(h,{value:!0,label:`Yes`}),(0,y.jsx)(h,{value:!1,label:`No`})]})}return(0,y.jsx)(e,{})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email notifications',
    description: 'Receive updates about your account activity.'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    error: true,
    label: 'This option is currently unavailable'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    'aria-label': 'Select option'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'gap-4',
    label: 'Custom gap spacing'
  }
}`,...k.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-3">
      {SIZES.map(size => <Radio key={size} {...args} size={size} value={size} label={size} />)}
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    function GroupDemo() {
      const [value, setValue] = useState<RadioValue>('comfortable');
      return <RadioGroup name="density" value={value} onChange={setValue}>
          <Radio value="compact" label="Compact" />
          <Radio value="comfortable" label="Comfortable" />
          <Radio value="spacious" label="Spacious" />
        </RadioGroup>;
    }
    return <GroupDemo />;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Group (horizontal)',
  render: () => {
    function GroupDemo() {
      const [value, setValue] = useState<RadioValue>('yes');
      return <RadioGroup name="confirm" value={value} onChange={setValue} orientation="horizontal">
          <Radio value="yes" label="Yes" />
          <Radio value="no" label="No" />
        </RadioGroup>;
    }
    return <GroupDemo />;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    function GroupDemo() {
      const [value, setValue] = useState<RadioValue>('free');
      return <RadioGroup name="plan" value={value} onChange={setValue} className="w-72">
          <Radio value="free" label="Free" description="Basic features for individuals." />
          <Radio value="pro" label="Pro" description="Advanced features for teams." />
          <Radio value="enterprise" label="Enterprise" description="Custom limits and dedicated support." />
        </RadioGroup>;
    }
    return <GroupDemo />;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Group (size: sm)',
  render: () => {
    function GroupDemo() {
      const [value, setValue] = useState<RadioValue>('a');
      return <RadioGroup name="small-group" value={value} onChange={setValue} size="sm">
          <Radio value="a" label="Option A" />
          <Radio value="b" label="Option B" />
        </RadioGroup>;
    }
    return <GroupDemo />;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup name="disabled-group" value="a" disabled onChange={() => {}}>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
    </RadioGroup>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Group with label',
  render: () => {
    function GroupDemo() {
      const [value, setValue] = useState<RadioValue>('comfortable');
      return <RadioGroup name="density-labeled" label="Density" value={value} onChange={setValue}>
          <Radio value="compact" label="Compact" />
          <Radio value="comfortable" label="Comfortable" />
          <Radio value="spacious" label="Spacious" />
        </RadioGroup>;
    }
    return <GroupDemo />;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Group required',
  render: () => <RadioGroup name="required-density" label="Density" required>
      <Radio value="compact" label="Compact" />
      <Radio value="comfortable" label="Comfortable" />
      <Radio value="spacious" label="Spacious" />
    </RadioGroup>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Group with helper text',
  render: () => <RadioGroup name="helper-density" label="Density" helperText="Choose the layout density for your workspace.">
      <Radio value="compact" label="Compact" />
      <Radio value="comfortable" label="Comfortable" />
      <Radio value="spacious" label="Spacious" />
    </RadioGroup>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Group error state',
  render: () => <RadioGroup name="error-density" label="Density" required errorText="Choose a density to continue.">
      <Radio value="compact" label="Compact" />
      <Radio value="comfortable" label="Comfortable" />
      <Radio value="spacious" label="Spacious" />
    </RadioGroup>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Group with numeric values',
  render: () => {
    function NumericGroupDemo() {
      const [value, setValue] = useState<RadioValue>(1);
      return <RadioGroup name="rating" value={value} onChange={setValue}>
          <Radio value={1} label="1 star" />
          <Radio value={2} label="2 stars" />
          <Radio value={3} label="3 stars" />
        </RadioGroup>;
    }
    return <NumericGroupDemo />;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Group with boolean values (yes/no)',
  render: () => {
    function BooleanGroupDemo() {
      const [value, setValue] = useState<RadioValue>(true);
      return <RadioGroup name="confirm" value={value} onChange={setValue}>
          <Radio value={true} label="Yes" />
          <Radio value={false} label="No" />
        </RadioGroup>;
    }
    return <BooleanGroupDemo />;
  }
}`,...H.parameters?.docs?.source}}},U=[`Default`,`Checked`,`WithDescription`,`Small`,`Disabled`,`DisabledChecked`,`Error`,`NoLabel`,`CustomClassName`,`AllSizes`,`Group`,`GroupHorizontal`,`GroupWithDescriptions`,`GroupSmall`,`DisabledGroup`,`GroupWithLabel`,`GroupRequired`,`GroupHelperText`,`GroupError`,`GroupNumericValues`,`GroupBooleanValues`]}));W();export{j as AllSizes,S as Checked,k as CustomClassName,x as Default,T as Disabled,E as DisabledChecked,I as DisabledGroup,D as Error,M as Group,H as GroupBooleanValues,B as GroupError,z as GroupHelperText,N as GroupHorizontal,V as GroupNumericValues,R as GroupRequired,F as GroupSmall,P as GroupWithDescriptions,L as GroupWithLabel,O as NoLabel,w as Small,C as WithDescription,U as __namedExportsOrder,b as default,W as n,_ as t};