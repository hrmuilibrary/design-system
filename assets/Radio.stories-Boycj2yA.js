import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-04k_LSg4.js";import{n as a,t as o}from"./cn-BNhCYuha.js";var s,c,l,u,d,f,p,m=t((()=>{s=n(r(),1),a(),c=i(),l=(0,s.createContext)(null),u=(0,s.forwardRef)(function({name:e,value:t,defaultValue:n,onChange:r,disabled:i,size:a=`md`,orientation:u=`vertical`,children:d,className:f,dataTestId:p},m){let h=(0,s.useId)(),g=e??h;return(0,c.jsx)(l.Provider,{value:{name:g,value:t,defaultValue:n,onChange:r,disabled:i,size:a},children:(0,c.jsx)(`div`,{ref:m,role:`radiogroup`,"data-test-id":p,className:o(`flex gap-3`,u===`vertical`?`flex-col`:`flex-row flex-wrap items-center gap-4`,f),children:d})})}),d={md:`h-5 w-5`,sm:`h-4 w-4`},f={md:`h-2 w-2`,sm:`h-1.5 w-1.5`},p=(0,s.forwardRef)(function({value:e,size:t,label:n,description:r,error:i=!1,id:a,disabled:u,checked:p,defaultChecked:m,onChange:h,className:g,dataTestId:_,...v},y){let b=(0,s.useContext)(l),x=(0,s.useId)(),S=a??x,C=t??b?.size??`md`,w=u??b?.disabled,T=b!==null,E=T&&b.value!==void 0?b.value===e:void 0,D=T&&b.defaultValue!==void 0?b.defaultValue===e:void 0,O=T?E:p,k=T?D:m;return(0,c.jsxs)(`label`,{htmlFor:S,"data-test-id":_,className:o(`inline-flex items-start gap-2.5`,w?`cursor-not-allowed opacity-60`:`cursor-pointer`,g),children:[(0,c.jsxs)(`span`,{className:`relative inline-flex shrink-0 items-center justify-center mt-0.5`,children:[(0,c.jsx)(`input`,{ref:y,id:S,type:`radio`,name:b?.name,value:e,checked:O,defaultChecked:k,disabled:w,onChange:t=>{b?.onChange?.(e),h?.(t)},className:`peer sr-only`,"aria-invalid":i||void 0,...v}),(0,c.jsx)(`span`,{className:o(`flex items-center justify-center rounded-full border bg-bg-default transition-colors`,d[C],i?`border-red-600`:`border-border-strong`,!w&&!i&&`peer-hover:border-fg-tertiary`,`peer-focus-visible:ring-2 peer-focus-visible:ring-brand-300 peer-focus-visible:ring-offset-1`,`peer-checked:border-brand-500`,w&&`!bg-bg-subtle !border-border-default`,`[&>span]:opacity-0 peer-checked:[&>span]:opacity-100`),children:(0,c.jsx)(`span`,{className:o(`rounded-full bg-brand-500 transition-opacity`,f[C],w&&`!bg-fg-disabled`)})})]}),(n||r)&&(0,c.jsxs)(`span`,{className:`flex flex-col gap-0.5`,children:[n&&(0,c.jsx)(`span`,{className:`text-p-std font-medium text-fg-default leading-tight`,children:n}),r&&(0,c.jsx)(`span`,{className:`text-p-sm text-fg-secondary leading-snug`,children:r})]})]})});try{u.displayName=`RadioGroup`,u.__docgenInfo={description:``,displayName:`RadioGroup`,filePath:`/home/runner/work/design-system/design-system/src/components/Radio/Radio.tsx`,methods:[],props:{name:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`}],description:``,name:`name`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`string`}},value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`}],description:``,name:`value`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`string`}},defaultValue:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`}],description:``,name:`defaultValue`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`string`}},onChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`}],description:``,name:`onChange`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`((value: string) => void)`}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`}],description:``,name:`disabled`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`boolean`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`enum`,raw:`RadioSize`,value:[{value:`"md"`},{value:`"sm"`}]}},orientation:{defaultValue:{value:`vertical`},declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`}],description:``,name:`orientation`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`enum`,raw:`"horizontal" | "vertical"`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},className:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`}],description:``,name:`className`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioGroupProps`},required:!1,tags:{},type:{name:`string`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{p.displayName=`Radio`,p.__docgenInfo={description:``,displayName:`Radio`,filePath:`/home/runner/work/design-system/design-system/src/components/Radio/Radio.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioProps`}],description:``,name:`value`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioProps`},required:!0,tags:{},type:{name:`string`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioProps`},required:!1,tags:{},type:{name:`enum`,raw:`RadioSize`,value:[{value:`"md"`},{value:`"sm"`}]}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioProps`}],description:``,name:`label`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioProps`},required:!1,tags:{},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioProps`}],description:``,name:`description`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioProps`},required:!1,tags:{},type:{name:`ReactNode`}},error:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioProps`}],description:``,name:`error`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioProps`},required:!1,tags:{},type:{name:`boolean`}},onChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioProps`}],description:``,name:`onChange`,parent:{fileName:`design-system/src/components/Radio/Radio.types.ts`,name:`RadioProps`},required:!1,tags:{},type:{name:`((e: ChangeEvent<HTMLInputElement, Element>) => void)`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),h=e({AllSizes:()=>k,Checked:()=>b,CustomClassName:()=>D,Default:()=>y,Disabled:()=>C,DisabledChecked:()=>w,DisabledGroup:()=>P,Error:()=>T,Group:()=>A,GroupHorizontal:()=>j,GroupSmall:()=>N,GroupWithDescriptions:()=>M,NoLabel:()=>E,Small:()=>S,WithDescription:()=>x,__namedExportsOrder:()=>F,default:()=>v}),g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I=t((()=>{g=n(r(),1),m(),_=i(),v={title:`Components/Radio`,component:p,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`md`,`sm`]}},args:{value:`option`,size:`md`,label:`Notify me by email`,disabled:!1,error:!1}},y={},b={args:{defaultChecked:!0}},x={args:{label:`Email notifications`,description:`Receive updates about your account activity.`}},S={args:{size:`sm`}},C={args:{disabled:!0}},w={args:{disabled:!0,defaultChecked:!0}},T={args:{error:!0,label:`This option is currently unavailable`}},E={args:{label:void 0,"aria-label":`Select option`}},D={name:`Overriding classes via className`,args:{className:`gap-4`,label:`Custom gap spacing`}},O=[`md`,`sm`],k={render:e=>(0,_.jsx)(`div`,{className:`flex flex-col gap-3`,children:O.map(t=>(0,_.jsx)(p,{...e,size:t,value:t,label:t},t))})},A={render:()=>{function e(){let[e,t]=(0,g.useState)(`comfortable`);return(0,_.jsxs)(u,{name:`density`,value:e,onChange:t,children:[(0,_.jsx)(p,{value:`compact`,label:`Compact`}),(0,_.jsx)(p,{value:`comfortable`,label:`Comfortable`}),(0,_.jsx)(p,{value:`spacious`,label:`Spacious`})]})}return(0,_.jsx)(e,{})}},j={name:`Group (horizontal)`,render:()=>{function e(){let[e,t]=(0,g.useState)(`yes`);return(0,_.jsxs)(u,{name:`confirm`,value:e,onChange:t,orientation:`horizontal`,children:[(0,_.jsx)(p,{value:`yes`,label:`Yes`}),(0,_.jsx)(p,{value:`no`,label:`No`})]})}return(0,_.jsx)(e,{})}},M={render:()=>{function e(){let[e,t]=(0,g.useState)(`free`);return(0,_.jsxs)(u,{name:`plan`,value:e,onChange:t,className:`w-72`,children:[(0,_.jsx)(p,{value:`free`,label:`Free`,description:`Basic features for individuals.`}),(0,_.jsx)(p,{value:`pro`,label:`Pro`,description:`Advanced features for teams.`}),(0,_.jsx)(p,{value:`enterprise`,label:`Enterprise`,description:`Custom limits and dedicated support.`})]})}return(0,_.jsx)(e,{})}},N={name:`Group (size: sm)`,render:()=>{function e(){let[e,t]=(0,g.useState)(`a`);return(0,_.jsxs)(u,{name:`small-group`,value:e,onChange:t,size:`sm`,children:[(0,_.jsx)(p,{value:`a`,label:`Option A`}),(0,_.jsx)(p,{value:`b`,label:`Option B`})]})}return(0,_.jsx)(e,{})}},P={render:()=>(0,_.jsxs)(u,{name:`disabled-group`,value:`a`,disabled:!0,onChange:()=>{},children:[(0,_.jsx)(p,{value:`a`,label:`Option A`}),(0,_.jsx)(p,{value:`b`,label:`Option B`})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email notifications',
    description: 'Receive updates about your account activity.'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    error: true,
    label: 'This option is currently unavailable'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    'aria-label': 'Select option'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'gap-4',
    label: 'Custom gap spacing'
  }
}`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-3">
      {SIZES.map(size => <Radio key={size} {...args} size={size} value={size} label={size} />)}
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    function GroupDemo() {
      const [value, setValue] = useState('comfortable');
      return <RadioGroup name="density" value={value} onChange={setValue}>
          <Radio value="compact" label="Compact" />
          <Radio value="comfortable" label="Comfortable" />
          <Radio value="spacious" label="Spacious" />
        </RadioGroup>;
    }
    return <GroupDemo />;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Group (horizontal)',
  render: () => {
    function GroupDemo() {
      const [value, setValue] = useState('yes');
      return <RadioGroup name="confirm" value={value} onChange={setValue} orientation="horizontal">
          <Radio value="yes" label="Yes" />
          <Radio value="no" label="No" />
        </RadioGroup>;
    }
    return <GroupDemo />;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    function GroupDemo() {
      const [value, setValue] = useState('free');
      return <RadioGroup name="plan" value={value} onChange={setValue} className="w-72">
          <Radio value="free" label="Free" description="Basic features for individuals." />
          <Radio value="pro" label="Pro" description="Advanced features for teams." />
          <Radio value="enterprise" label="Enterprise" description="Custom limits and dedicated support." />
        </RadioGroup>;
    }
    return <GroupDemo />;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Group (size: sm)',
  render: () => {
    function GroupDemo() {
      const [value, setValue] = useState('a');
      return <RadioGroup name="small-group" value={value} onChange={setValue} size="sm">
          <Radio value="a" label="Option A" />
          <Radio value="b" label="Option B" />
        </RadioGroup>;
    }
    return <GroupDemo />;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup name="disabled-group" value="a" disabled onChange={() => {}}>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
    </RadioGroup>
}`,...P.parameters?.docs?.source}}},F=[`Default`,`Checked`,`WithDescription`,`Small`,`Disabled`,`DisabledChecked`,`Error`,`NoLabel`,`CustomClassName`,`AllSizes`,`Group`,`GroupHorizontal`,`GroupWithDescriptions`,`GroupSmall`,`DisabledGroup`]}));I();export{k as AllSizes,b as Checked,D as CustomClassName,y as Default,C as Disabled,w as DisabledChecked,P as DisabledGroup,T as Error,A as Group,j as GroupHorizontal,N as GroupSmall,M as GroupWithDescriptions,E as NoLabel,S as Small,x as WithDescription,F as __namedExportsOrder,v as default,I as n,h as t};