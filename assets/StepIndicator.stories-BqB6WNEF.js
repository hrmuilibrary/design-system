import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-cZVKo6eo.js";import{Bt as a,It as o,t as s}from"./lucide-react-CxOTFfkd.js";import{n as c,t as l}from"./cn-BNhCYuha.js";import{n as u,r as d}from"./optionValue-DydacNfb.js";function f(e,t,n,r){return t===`completed`?(0,m.jsx)(a,{className:y[r]}):t===`rejected`?(0,m.jsx)(o,{className:y[r]}):e===`number`?n+1:e===`dot`?(0,m.jsx)(`span`,{className:l(`rounded-full`,b[r],t===`active`?`bg-brand-500`:`bg-transparent`)}):null}var p,m,h,g,_,v,y,b,x,S,C,w,T,E=t((()=>{p=n(r(),1),s(),c(),u(),m=i(),h={lg:`size-9`,sm:`size-6`},g={lg:`h-9`,sm:`h-6`},_={lg:`border-2`,sm:`border`},v={lg:`text-p-std`,sm:`text-p-xs`},y={lg:`size-5`,sm:`size-3.5`},b={lg:`size-3`,sm:`size-2`},x={lg:`text-p-std`,sm:`text-p-sm`},S={lg:`text-p-sm`,sm:`text-p-xs`},C={upcoming:`bg-bg-default border-border-strong text-fg-tertiary`,active:`bg-bg-default border-brand-500 text-brand-700`,completed:`bg-brand-500 border-brand-500 text-fg-inverse`,rejected:`bg-red-700 border-red-800 text-fg-inverse`},w={upcoming:`ring-4 ring-gray-100/80`,active:`ring-4 ring-brand-40/80`,completed:`ring-4 ring-brand-40/80`,rejected:`ring-4 ring-red-100/80`},T=(0,p.forwardRef)(function({steps:e,activeValue:t,onStepSelect:n,marker:r=`number`,orientation:i=`horizontal`,size:a=`lg`,className:o,dataTestId:s,...c},u){let p=i===`vertical`,y=e=>(e?.status??`upcoming`)===`completed`;return(0,m.jsx)(`ol`,{ref:u,"data-test-id":s,className:l(`flex`,p?`flex-col`:`w-full items-start`,o),...c,children:e.map((i,o)=>{let s=i.status??`upcoming`,c=o===0,u=o===e.length-1,b=!c&&y(e[o-1]),T=!u&&y(i),E=(0,m.jsx)(`span`,{className:l(`relative z-10 inline-flex shrink-0 items-center justify-center rounded-full font-semibold transition-colors`,h[a],_[a],v[a],C[s],i.highlighted&&w[s]),children:f(r,s,o,a)}),D=(0,m.jsxs)(`div`,{className:l(`flex flex-col`,p?`gap-0.5 pb-6`:`mt-2 items-center gap-0.5 text-center`),children:[(0,m.jsx)(`span`,{className:l(`font-medium text-fg-default`,x[a]),children:i.label}),i.description&&(0,m.jsx)(`span`,{className:l(`text-fg-secondary`,S[a]),children:i.description})]});return(0,m.jsxs)(`li`,{"aria-current":d(i.value,t)?`step`:void 0,className:l(`relative flex`,p?`flex-row gap-3`:`flex-1 basis-0 min-w-0 flex-col`),children:[(0,m.jsxs)(`div`,{className:l(`relative flex shrink-0`,p?`w-9 flex-col items-center justify-center`:l(`w-full items-center justify-center`,g[a])),children:[!c&&(0,m.jsx)(`span`,{"aria-hidden":!0,className:l(`absolute`,p?`left-1/2 top-0 bottom-1/2 w-0.5 -translate-x-1/2`:`left-0 right-1/2 top-1/2 h-0.5 -translate-y-1/2`,b?`bg-brand-500`:`bg-border-default`)}),!u&&(0,m.jsx)(`span`,{"aria-hidden":!0,className:l(`absolute`,p?`left-1/2 top-1/2 bottom-0 w-0.5 -translate-x-1/2`:`left-1/2 right-0 top-1/2 h-0.5 -translate-y-1/2`,T?`bg-brand-500`:`bg-border-default`)}),n?(0,m.jsx)(`button`,{type:`button`,onClick:()=>n(i.value),"aria-label":typeof i.label==`string`?i.label:void 0,className:`relative z-10 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2`,children:E}):E]}),D]},String(i.value))})})});try{T.displayName=`StepIndicator`,T.__docgenInfo={description:``,displayName:`StepIndicator`,filePath:`/home/runner/work/design-system/design-system/src/components/StepIndicator/StepIndicator.tsx`,methods:[],props:{steps:{defaultValue:null,declarations:[{fileName:`design-system/src/components/StepIndicator/StepIndicator.types.ts`,name:`StepIndicatorProps`}],description:``,name:`steps`,parent:{fileName:`design-system/src/components/StepIndicator/StepIndicator.types.ts`,name:`StepIndicatorProps`},required:!0,tags:{},type:{name:`StepIndicatorItem[]`}},activeValue:{defaultValue:null,declarations:[{fileName:`design-system/src/components/StepIndicator/StepIndicator.types.ts`,name:`StepIndicatorProps`}],description:'Marks the matching step `aria-current="step"`.',name:`activeValue`,parent:{fileName:`design-system/src/components/StepIndicator/StepIndicator.types.ts`,name:`StepIndicatorProps`},required:!1,tags:{},type:{name:`OptionValue`}},onStepSelect:{defaultValue:null,declarations:[{fileName:`design-system/src/components/StepIndicator/StepIndicator.types.ts`,name:`StepIndicatorProps`}],description:"Wraps each marker in a `<button>` when set. Omit to render a non-interactive indicator.",name:`onStepSelect`,parent:{fileName:`design-system/src/components/StepIndicator/StepIndicator.types.ts`,name:`StepIndicatorProps`},required:!1,tags:{},type:{name:`((value: OptionValue) => void)`}},marker:{defaultValue:{value:`number`},declarations:[{fileName:`design-system/src/components/StepIndicator/StepIndicator.types.ts`,name:`StepIndicatorProps`}],description:``,name:`marker`,parent:{fileName:`design-system/src/components/StepIndicator/StepIndicator.types.ts`,name:`StepIndicatorProps`},required:!1,tags:{},type:{name:`enum`,raw:`StepIndicatorMarker`,value:[{value:`"number"`},{value:`"dot"`},{value:`"icon"`}]}},orientation:{defaultValue:{value:`horizontal`},declarations:[{fileName:`design-system/src/components/StepIndicator/StepIndicator.types.ts`,name:`StepIndicatorProps`}],description:``,name:`orientation`,parent:{fileName:`design-system/src/components/StepIndicator/StepIndicator.types.ts`,name:`StepIndicatorProps`},required:!1,tags:{},type:{name:`enum`,raw:`StepIndicatorOrientation`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},size:{defaultValue:{value:`lg`},declarations:[{fileName:`design-system/src/components/StepIndicator/StepIndicator.types.ts`,name:`StepIndicatorProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/StepIndicator/StepIndicator.types.ts`,name:`StepIndicatorProps`},required:!1,tags:{},type:{name:`enum`,raw:`StepIndicatorSize`,value:[{value:`"lg"`},{value:`"sm"`}]}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),D=e({CustomClassName:()=>J,DotMarker:()=>P,EightSteps:()=>U,FullMatrix:()=>q,HighlightedStep:()=>z,IconMarker:()=>F,Interactive:()=>B,NumericValues:()=>V,Primary:()=>M,RejectedStep:()=>R,SingleStep:()=>H,Small:()=>I,Vertical:()=>N,WithDescriptions:()=>L,__namedExportsOrder:()=>Y,default:()=>j}),O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X=t((()=>{O=n(r(),1),E(),k=i(),A=[{value:`account`,label:`Account details`,status:`completed`},{value:`preferences`,label:`Preferences`,status:`active`},{value:`review`,label:`Review`,status:`upcoming`},{value:`done`,label:`Done`,status:`upcoming`}],j={title:`Components/StepIndicator`,component:T,parameters:{layout:`centered`},argTypes:{marker:{control:`select`,options:[`number`,`dot`,`icon`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`lg`,`sm`]}},args:{steps:A,marker:`number`,orientation:`horizontal`,size:`lg`},decorators:[e=>(0,k.jsx)(`div`,{className:`w-[480px]`,children:(0,k.jsx)(e,{})})]},M={},N={args:{orientation:`vertical`},decorators:[e=>(0,k.jsx)(`div`,{className:`w-64`,children:(0,k.jsx)(e,{})})]},P={name:`marker="dot"`,args:{marker:`dot`}},F={name:`marker="icon"`,args:{marker:`icon`}},I={args:{size:`sm`}},L={args:{steps:A.map((e,t)=>({...e,description:[`Name and email`,`Notification settings`,`Confirm everything`,`All set`][t]}))}},R={name:`Rejected step`,args:{steps:[{value:`submitted`,label:`Submitted`,status:`completed`},{value:`review`,label:`Under review`,status:`rejected`},{value:`resubmit`,label:`Resubmit`,status:`upcoming`}]}},z={name:`Highlighted (halo)`,args:{steps:[{value:`submitted`,label:`Submitted`,status:`completed`,highlighted:!0},{value:`review`,label:`Under review`,status:`active`,highlighted:!0},{value:`done`,label:`Done`,status:`upcoming`}]}},B={name:`Interactive (onStepSelect)`,render:e=>{function t(){let[t,n]=(0,O.useState)(`preferences`);return(0,k.jsx)(T,{...e,activeValue:t,onStepSelect:n})}return(0,k.jsx)(t,{})}},V={name:`Numeric values (round-trip through onStepSelect)`,render:e=>{function t(){let[t,n]=(0,O.useState)(1);return(0,k.jsx)(T,{...e,steps:[{value:1,label:`Step 1`,status:t===1?`active`:`completed`},{value:2,label:`Step 2`,status:t===2?`active`:t>2?`completed`:`upcoming`},{value:3,label:`Step 3`,status:t===3?`active`:`upcoming`}],activeValue:t,onStepSelect:e=>n(e)})}return(0,k.jsx)(t,{})}},H={name:`Single step (no connectors)`,args:{steps:[{value:`only`,label:`Only step`,status:`active`}]}},U={name:`Eight steps (crowded)`,args:{steps:Array.from({length:8},(e,t)=>({value:`step-${t}`,label:`Step ${t+1}`,status:t<3?`completed`:t===3?`active`:`upcoming`}))},decorators:[e=>(0,k.jsx)(`div`,{className:`w-[800px]`,children:(0,k.jsx)(e,{})})]},W=[`horizontal`,`vertical`],G=[`lg`,`sm`],K=[`upcoming`,`active`,`completed`,`rejected`],q={name:`Full matrix (orientation x size x status x highlighted)`,render:()=>(0,k.jsx)(`div`,{className:`flex flex-col gap-10`,children:W.map(e=>G.map(t=>(0,k.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,k.jsxs)(`p`,{className:`text-p-sm font-medium text-fg-secondary`,children:[`orientation=`,e,`, size=`,t]}),(0,k.jsx)(`div`,{className:e===`vertical`?`w-64`:`w-[640px]`,children:(0,k.jsx)(T,{orientation:e,size:t,steps:K.map((n,r)=>({value:`${e}-${t}-${r}`,label:n,status:n,highlighted:!0}))})})]},`${e}-${t}`)))})},J={name:`Overriding classes via className`,args:{className:`rounded-lg border border-border-default p-4`}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  decorators: [Story => <div className="w-64">
        <Story />
      </div>]
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'marker="dot"',
  args: {
    marker: 'dot'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'marker="icon"',
  args: {
    marker: 'icon'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    steps: BASE_STEPS.map((step, i) => ({
      ...step,
      description: ['Name and email', 'Notification settings', 'Confirm everything', 'All set'][i]
    }))
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Rejected step',
  args: {
    steps: [{
      value: 'submitted',
      label: 'Submitted',
      status: 'completed'
    }, {
      value: 'review',
      label: 'Under review',
      status: 'rejected'
    }, {
      value: 'resubmit',
      label: 'Resubmit',
      status: 'upcoming'
    }]
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Highlighted (halo)',
  args: {
    steps: [{
      value: 'submitted',
      label: 'Submitted',
      status: 'completed',
      highlighted: true
    }, {
      value: 'review',
      label: 'Under review',
      status: 'active',
      highlighted: true
    }, {
      value: 'done',
      label: 'Done',
      status: 'upcoming'
    }]
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Interactive (onStepSelect)',
  render: args => {
    function InteractiveExample() {
      const [active, setActive] = useState<OptionValue>('preferences');
      return <StepIndicator {...args} activeValue={active} onStepSelect={setActive} />;
    }
    return <InteractiveExample />;
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Numeric values (round-trip through onStepSelect)',
  render: args => {
    function NumericExample() {
      const [active, setActive] = useState<OptionValue>(1);
      return <StepIndicator {...args} steps={[{
        value: 1,
        label: 'Step 1',
        status: active === 1 ? 'active' : 'completed'
      }, {
        value: 2,
        label: 'Step 2',
        status: active === 2 ? 'active' : active > 2 ? 'completed' : 'upcoming'
      }, {
        value: 3,
        label: 'Step 3',
        status: active === 3 ? 'active' : 'upcoming'
      }]} activeValue={active} onStepSelect={v => setActive(v as number)} />;
    }
    return <NumericExample />;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Single step (no connectors)',
  args: {
    steps: [{
      value: 'only',
      label: 'Only step',
      status: 'active'
    }]
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Eight steps (crowded)',
  args: {
    steps: Array.from({
      length: 8
    }, (_, i) => ({
      value: \`step-\${i}\`,
      label: \`Step \${i + 1}\`,
      status: i < 3 ? 'completed' : i === 3 ? 'active' : 'upcoming'
    }))
  },
  decorators: [Story => <div className="w-[800px]">
        <Story />
      </div>]
}`,...U.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Full matrix (orientation x size x status x highlighted)',
  render: () => <div className="flex flex-col gap-10">
      {ORIENTATIONS.map(orientation => SIZES.map(size => <div key={\`\${orientation}-\${size}\`} className="flex flex-col gap-2">
            <p className="text-p-sm font-medium text-fg-secondary">
              orientation={orientation}, size={size}
            </p>
            <div className={orientation === 'vertical' ? 'w-64' : 'w-[640px]'}>
              <StepIndicator orientation={orientation} size={size} steps={STATUSES.map((status, i) => ({
          value: \`\${orientation}-\${size}-\${i}\`,
          label: status,
          status,
          highlighted: true
        }))} />
            </div>
          </div>))}
    </div>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'rounded-lg border border-border-default p-4'
  }
}`,...J.parameters?.docs?.source}}},Y=[`Primary`,`Vertical`,`DotMarker`,`IconMarker`,`Small`,`WithDescriptions`,`RejectedStep`,`HighlightedStep`,`Interactive`,`NumericValues`,`SingleStep`,`EightSteps`,`FullMatrix`,`CustomClassName`]}));X();export{J as CustomClassName,P as DotMarker,U as EightSteps,q as FullMatrix,z as HighlightedStep,F as IconMarker,B as Interactive,V as NumericValues,M as Primary,R as RejectedStep,H as SingleStep,I as Small,N as Vertical,L as WithDescriptions,Y as __namedExportsOrder,j as default,X as n,D as t};