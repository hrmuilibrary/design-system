import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-CwcXNU-m.js";import{Et as a,St as o,t as s}from"./lucide-react-lf4oV1Yb.js";import{n as c,t as l}from"./cn-BNhCYuha.js";function u(e,t,n,r){return t===`completed`?(0,f.jsx)(a,{className:_[r]}):t===`rejected`?(0,f.jsx)(o,{className:_[r]}):e===`number`?n+1:e===`dot`?(0,f.jsx)(`span`,{className:l(`rounded-full`,v[r],t===`active`?`bg-brand-500`:`bg-transparent`)}):null}var d,f,p,m,h,g,_,v,y,b,x,S,C,w=t((()=>{d=n(r(),1),s(),c(),f=i(),p={lg:`size-9`,sm:`size-6`},m={lg:`h-9`,sm:`h-6`},h={lg:`border-2`,sm:`border`},g={lg:`text-p-std`,sm:`text-p-xs`},_={lg:`size-5`,sm:`size-3.5`},v={lg:`size-3`,sm:`size-2`},y={lg:`text-p-std`,sm:`text-p-sm`},b={lg:`text-p-sm`,sm:`text-p-xs`},x={upcoming:`bg-bg-default border-border-strong text-fg-tertiary`,active:`bg-bg-default border-brand-500 text-brand-700`,completed:`bg-brand-500 border-brand-500 text-fg-inverse`,rejected:`bg-red-700 border-red-800 text-fg-inverse`},S={upcoming:`ring-4 ring-gray-100/80`,active:`ring-4 ring-brand-40/80`,completed:`ring-4 ring-brand-40/80`,rejected:`ring-4 ring-red-100/80`},C=(0,d.forwardRef)(function({steps:e,activeValue:t,onStepSelect:n,marker:r=`number`,orientation:i=`horizontal`,size:a=`lg`,className:o,dataTestId:s,...c},d){let _=i===`vertical`,v=e=>(e?.status??`upcoming`)===`completed`;return(0,f.jsx)(`ol`,{ref:d,"data-test-id":s,className:l(`flex`,_?`flex-col`:`w-full items-start`,o),...c,children:e.map((i,o)=>{let s=i.status??`upcoming`,c=o===0,d=o===e.length-1,C=!c&&v(e[o-1]),w=!d&&v(i),T=(0,f.jsx)(`span`,{className:l(`relative z-10 inline-flex shrink-0 items-center justify-center rounded-full font-semibold transition-colors`,p[a],h[a],g[a],x[s],i.highlighted&&S[s]),children:u(r,s,o,a)}),E=(0,f.jsxs)(`div`,{className:l(`flex flex-col`,_?`gap-0.5 pb-6`:`mt-2 items-center gap-0.5 text-center`),children:[(0,f.jsx)(`span`,{className:l(`font-medium text-fg-default`,y[a]),children:i.label}),i.description&&(0,f.jsx)(`span`,{className:l(`text-fg-secondary`,b[a]),children:i.description})]});return(0,f.jsxs)(`li`,{"aria-current":i.value===t?`step`:void 0,className:l(`relative flex`,_?`flex-row gap-3`:`flex-1 basis-0 min-w-0 flex-col`),children:[(0,f.jsxs)(`div`,{className:l(`relative flex shrink-0`,_?`w-9 flex-col items-center justify-center`:l(`w-full items-center justify-center`,m[a])),children:[!c&&(0,f.jsx)(`span`,{"aria-hidden":!0,className:l(`absolute`,_?`left-1/2 top-0 bottom-1/2 w-0.5 -translate-x-1/2`:`left-0 right-1/2 top-1/2 h-0.5 -translate-y-1/2`,C?`bg-brand-500`:`bg-border-default`)}),!d&&(0,f.jsx)(`span`,{"aria-hidden":!0,className:l(`absolute`,_?`left-1/2 top-1/2 bottom-0 w-0.5 -translate-x-1/2`:`left-1/2 right-0 top-1/2 h-0.5 -translate-y-1/2`,w?`bg-brand-500`:`bg-border-default`)}),n?(0,f.jsx)(`button`,{type:`button`,onClick:()=>n(i.value),"aria-label":typeof i.label==`string`?i.label:void 0,className:`relative z-10 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2`,children:T}):T]}),E]},i.value)})})});try{C.displayName=`StepIndicator`,C.__docgenInfo={description:``,displayName:`StepIndicator`,filePath:`/home/runner/work/design-system/design-system/src/components/StepIndicator/StepIndicator.tsx`,methods:[],props:{steps:{defaultValue:null,declarations:[{fileName:`design-system/src/components/StepIndicator/StepIndicator.types.ts`,name:`StepIndicatorProps`}],description:``,name:`steps`,parent:{fileName:`design-system/src/components/StepIndicator/StepIndicator.types.ts`,name:`StepIndicatorProps`},required:!0,tags:{},type:{name:`StepIndicatorItem[]`}},activeValue:{defaultValue:null,declarations:[{fileName:`design-system/src/components/StepIndicator/StepIndicator.types.ts`,name:`StepIndicatorProps`}],description:'Marks the matching step `aria-current="step"`.',name:`activeValue`,parent:{fileName:`design-system/src/components/StepIndicator/StepIndicator.types.ts`,name:`StepIndicatorProps`},required:!1,tags:{},type:{name:`string | number`}},onStepSelect:{defaultValue:null,declarations:[{fileName:`design-system/src/components/StepIndicator/StepIndicator.types.ts`,name:`StepIndicatorProps`}],description:"Wraps each marker in a `<button>` when set. Omit to render a non-interactive indicator.",name:`onStepSelect`,parent:{fileName:`design-system/src/components/StepIndicator/StepIndicator.types.ts`,name:`StepIndicatorProps`},required:!1,tags:{},type:{name:`((value: string | number) => void)`}},marker:{defaultValue:{value:`number`},declarations:[{fileName:`design-system/src/components/StepIndicator/StepIndicator.types.ts`,name:`StepIndicatorProps`}],description:``,name:`marker`,parent:{fileName:`design-system/src/components/StepIndicator/StepIndicator.types.ts`,name:`StepIndicatorProps`},required:!1,tags:{},type:{name:`enum`,raw:`StepIndicatorMarker`,value:[{value:`"number"`},{value:`"icon"`},{value:`"dot"`}]}},orientation:{defaultValue:{value:`horizontal`},declarations:[{fileName:`design-system/src/components/StepIndicator/StepIndicator.types.ts`,name:`StepIndicatorProps`}],description:``,name:`orientation`,parent:{fileName:`design-system/src/components/StepIndicator/StepIndicator.types.ts`,name:`StepIndicatorProps`},required:!1,tags:{},type:{name:`enum`,raw:`StepIndicatorOrientation`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},size:{defaultValue:{value:`lg`},declarations:[{fileName:`design-system/src/components/StepIndicator/StepIndicator.types.ts`,name:`StepIndicatorProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/StepIndicator/StepIndicator.types.ts`,name:`StepIndicatorProps`},required:!1,tags:{},type:{name:`enum`,raw:`StepIndicatorSize`,value:[{value:`"sm"`},{value:`"lg"`}]}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),T=e({CustomClassName:()=>G,DotMarker:()=>M,EightSteps:()=>B,FullMatrix:()=>W,HighlightedStep:()=>L,IconMarker:()=>N,Interactive:()=>R,Primary:()=>A,RejectedStep:()=>I,SingleStep:()=>z,Small:()=>P,Vertical:()=>j,WithDescriptions:()=>F,__namedExportsOrder:()=>K,default:()=>k}),E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q=t((()=>{E=n(r(),1),w(),D=i(),O=[{value:`account`,label:`Account details`,status:`completed`},{value:`preferences`,label:`Preferences`,status:`active`},{value:`review`,label:`Review`,status:`upcoming`},{value:`done`,label:`Done`,status:`upcoming`}],k={title:`Components/StepIndicator`,component:C,parameters:{layout:`centered`},argTypes:{marker:{control:`select`,options:[`number`,`dot`,`icon`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},size:{control:`select`,options:[`lg`,`sm`]}},args:{steps:O,marker:`number`,orientation:`horizontal`,size:`lg`},decorators:[e=>(0,D.jsx)(`div`,{className:`w-[480px]`,children:(0,D.jsx)(e,{})})]},A={},j={args:{orientation:`vertical`},decorators:[e=>(0,D.jsx)(`div`,{className:`w-64`,children:(0,D.jsx)(e,{})})]},M={name:`marker="dot"`,args:{marker:`dot`}},N={name:`marker="icon"`,args:{marker:`icon`}},P={args:{size:`sm`}},F={args:{steps:O.map((e,t)=>({...e,description:[`Name and email`,`Notification settings`,`Confirm everything`,`All set`][t]}))}},I={name:`Rejected step`,args:{steps:[{value:`submitted`,label:`Submitted`,status:`completed`},{value:`review`,label:`Under review`,status:`rejected`},{value:`resubmit`,label:`Resubmit`,status:`upcoming`}]}},L={name:`Highlighted (halo)`,args:{steps:[{value:`submitted`,label:`Submitted`,status:`completed`,highlighted:!0},{value:`review`,label:`Under review`,status:`active`,highlighted:!0},{value:`done`,label:`Done`,status:`upcoming`}]}},R={name:`Interactive (onStepSelect)`,render:e=>{function t(){let[t,n]=(0,E.useState)(`preferences`);return(0,D.jsx)(C,{...e,activeValue:t,onStepSelect:n})}return(0,D.jsx)(t,{})}},z={name:`Single step (no connectors)`,args:{steps:[{value:`only`,label:`Only step`,status:`active`}]}},B={name:`Eight steps (crowded)`,args:{steps:Array.from({length:8},(e,t)=>({value:`step-${t}`,label:`Step ${t+1}`,status:t<3?`completed`:t===3?`active`:`upcoming`}))},decorators:[e=>(0,D.jsx)(`div`,{className:`w-[800px]`,children:(0,D.jsx)(e,{})})]},V=[`horizontal`,`vertical`],H=[`lg`,`sm`],U=[`upcoming`,`active`,`completed`,`rejected`],W={name:`Full matrix (orientation x size x status x highlighted)`,render:()=>(0,D.jsx)(`div`,{className:`flex flex-col gap-10`,children:V.map(e=>H.map(t=>(0,D.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,D.jsxs)(`p`,{className:`text-p-sm font-medium text-fg-secondary`,children:[`orientation=`,e,`, size=`,t]}),(0,D.jsx)(`div`,{className:e===`vertical`?`w-64`:`w-[640px]`,children:(0,D.jsx)(C,{orientation:e,size:t,steps:U.map((n,r)=>({value:`${e}-${t}-${r}`,label:n,status:n,highlighted:!0}))})})]},`${e}-${t}`)))})},G={name:`Overriding classes via className`,args:{className:`rounded-lg border border-border-default p-4`}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  decorators: [Story => <div className="w-64">
        <Story />
      </div>]
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'marker="dot"',
  args: {
    marker: 'dot'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'marker="icon"',
  args: {
    marker: 'icon'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    steps: BASE_STEPS.map((step, i) => ({
      ...step,
      description: ['Name and email', 'Notification settings', 'Confirm everything', 'All set'][i]
    }))
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Interactive (onStepSelect)',
  render: args => {
    function InteractiveExample() {
      const [active, setActive] = useState('preferences');
      return <StepIndicator {...args} activeValue={active} onStepSelect={setActive} />;
    }
    return <InteractiveExample />;
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Single step (no connectors)',
  args: {
    steps: [{
      value: 'only',
      label: 'Only step',
      status: 'active'
    }]
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'rounded-lg border border-border-default p-4'
  }
}`,...G.parameters?.docs?.source}}},K=[`Primary`,`Vertical`,`DotMarker`,`IconMarker`,`Small`,`WithDescriptions`,`RejectedStep`,`HighlightedStep`,`Interactive`,`SingleStep`,`EightSteps`,`FullMatrix`,`CustomClassName`]}));q();export{G as CustomClassName,M as DotMarker,B as EightSteps,W as FullMatrix,L as HighlightedStep,N as IconMarker,R as Interactive,A as Primary,I as RejectedStep,z as SingleStep,P as Small,j as Vertical,F as WithDescriptions,K as __namedExportsOrder,k as default,q as n,T as t};