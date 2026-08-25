import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-TTyREUKy.js";import{nt as a,t as o}from"./lucide-react-RDpMokDK.js";import{t as s}from"./Tooltip-CvvH9jyD.js";import{t as c}from"./Tooltip-DXSR88Ia.js";import{n as l,t as u}from"./SelectV2-CjzTt2tW.js";var d=e({AllSizes:()=>B,Async:()=>P,AsyncCreatableStory:()=>I,Clearable:()=>D,Creatable:()=>F,Disabled:()=>T,Grouped:()=>O,Loading:()=>E,Localized:()=>M,MultiSelectStory:()=>j,OpensUpward:()=>R,Primary:()=>b,Required:()=>w,SingleLineStory:()=>N,Virtualized:()=>L,WithDescriptions:()=>k,WithError:()=>C,WithHelperText:()=>S,WithLabel:()=>x,WithLabelAddons:()=>A,__namedExportsOrder:()=>V,default:()=>y});function f(e,t){let n=t.trim().toLowerCase(),r=n?e.filter(e=>(typeof e.label==`string`?e.label:String(e.value)).toLowerCase().includes(n)):e;return new Promise(e=>setTimeout(()=>e(r),600))}var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H=t((()=>{p=n(r(),1),o(),l(),c(),m=i(),h=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`},{value:`durian`,label:`Durian (disabled)`,disabled:!0},{value:`elderberry`,label:`Elderberry`}],g=[{value:`banana`,label:`Banana`},{value:`apple`,label:`Apple`,group:`Pome`},{value:`pear`,label:`Pear`,group:`Pome`},{value:`cherry`,label:`Cherry`,group:`Stone`},{value:`peach`,label:`Peach`,group:`Stone`}],_=[{value:`ada`,label:`Ada Lovelace`,description:`Engineering · London`},{value:`grace`,label:`Grace Hopper`,description:`Engineering · Remote`},{value:`alan`,label:`Alan Turing`,description:`Research · Cambridge`},{value:`margaret`,label:`Margaret Hamilton`,description:`Engineering · Boston`},{value:`katherine`,label:`Katherine Johnson`,description:`Data Science · Remote (disabled)`,disabled:!0}],v=Array.from({length:5e3},(e,t)=>({value:t,label:`Option #${t+1}`})),y={title:`Components/SelectV2`,component:u,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},locale:{control:`select`,options:[`en-US`,`ru-RU`,`hy-AM`]}},args:{options:h,placeholder:`Select a fruit…`,size:`md`,disabled:!1,error:!1,required:!1,loading:!1,clearable:!1,searchable:!0},decorators:[e=>(0,m.jsx)(`div`,{className:`w-80`,children:(0,m.jsx)(e,{})})]},b={render:e=>{function t(){let[t,n]=(0,p.useState)(`apple`);return(0,m.jsx)(u,{...e,value:t,onChange:n})}return(0,m.jsx)(t,{})}},x={render:e=>{function t(){let[t,n]=(0,p.useState)();return(0,m.jsx)(u,{...e,value:t,onChange:n})}return(0,m.jsx)(t,{})},args:{label:`Favorite fruit`}},S={render:e=>{function t(){let[t,n]=(0,p.useState)();return(0,m.jsx)(u,{...e,value:t,onChange:n})}return(0,m.jsx)(t,{})},args:{label:`Favorite fruit`,helperText:`Pick the one you like best.`}},C={render:e=>{function t(){let[t,n]=(0,p.useState)();return(0,m.jsx)(u,{...e,value:t,onChange:n})}return(0,m.jsx)(t,{})},args:{label:`Favorite fruit`,error:!0,errorText:`This field is required.`}},w={render:e=>{function t(){let[t,n]=(0,p.useState)();return(0,m.jsx)(u,{...e,value:t,onChange:n})}return(0,m.jsx)(t,{})},args:{label:`Required`,required:!0}},T={render:e=>{function t(){let[t,n]=(0,p.useState)(`banana`);return(0,m.jsx)(u,{...e,value:t,onChange:n})}return(0,m.jsx)(t,{})},args:{label:`Favorite fruit`,disabled:!0}},E={args:{label:`Favorite fruit`,loading:!0}},D={render:e=>{function t(){let[t,n]=(0,p.useState)(`cherry`);return(0,m.jsx)(u,{...e,value:t,onChange:n})}return(0,m.jsx)(t,{})},args:{label:`Favorite fruit`,clearable:!0}},O={render:e=>{function t(){let[t,n]=(0,p.useState)();return(0,m.jsx)(u,{...e,value:t,onChange:n})}return(0,m.jsx)(t,{})},args:{label:`Favorite fruit`,options:g}},k={name:`Per-option descriptions`,render:e=>{function t(){let[t,n]=(0,p.useState)();return(0,m.jsx)(u,{...e,value:t,onChange:n})}return(0,m.jsx)(t,{})},args:{label:`Reviewer`,options:_,placeholder:`Choose a reviewer…`}},A={name:`With label addons`,render:e=>{function t(){let[t,n]=(0,p.useState)();return(0,m.jsx)(u,{...e,value:t,onChange:n})}return(0,m.jsx)(t,{})},args:{label:`Favorite fruit`,labelAddons:(0,m.jsx)(s,{content:`This affects the suggestions on your dashboard.`,children:(0,m.jsx)(`button`,{type:`button`,"aria-label":`More info`,className:`text-fg-tertiary hover:text-fg-default`,children:(0,m.jsx)(a,{className:`h-3.5 w-3.5`})})})}},j={name:`Multi-select (isMulti)`,render:e=>{function t(){let[t,n]=(0,p.useState)([`design`]);return(0,m.jsx)(u,{...e,isMulti:!0,options:[{value:`design`,label:`Design`},{value:`engineering`,label:`Engineering`},{value:`product`,label:`Product`},{value:`marketing`,label:`Marketing`},{value:`sales`,label:`Sales (disabled)`,disabled:!0}],value:t,onChange:n})}return(0,m.jsx)(t,{})},args:{label:`Teams`,placeholder:`Select teams…`}},M={name:`Localized (locale)`,render:e=>{function t(){let[t,n]=(0,p.useState)([`design`]);return(0,m.jsx)(u,{...e,isMulti:!0,creatable:!0,onCreateOption:()=>{},options:[{value:`design`,label:`Design`},{value:`engineering`,label:`Engineering`},{value:`product`,label:`Product`}],value:t,onChange:n})}return(0,m.jsx)(t,{})},args:{label:`Teams`,locale:`hy-AM`,placeholder:void 0}},N={name:`Multi-select, single line (singleLine)`,render:e=>{function t(){let[t,n]=(0,p.useState)([`design`,`engineering`,`product`,`marketing`,`sales`]);return(0,m.jsx)(u,{...e,isMulti:!0,singleLine:!0,options:[{value:`design`,label:`Design`},{value:`engineering`,label:`Engineering`},{value:`product`,label:`Product`},{value:`marketing`,label:`Marketing`},{value:`sales`,label:`Sales`},{value:`customer-success`,label:`Customer Success`},{value:`legal`,label:`Legal`}],value:t,onChange:n})}return(0,m.jsx)(t,{})},args:{label:`Teams`,placeholder:`Select teams…`}},P={name:`Async (loadOptions)`,render:e=>{function t(){let[t,n]=(0,p.useState)();return(0,m.jsx)(u,{...e,options:[],loadOptions:e=>f(_,e),defaultOptions:!0,value:t,onChange:n})}return(0,m.jsx)(t,{})},args:{label:`Reviewer`,placeholder:`Search people…`}},F={name:`Creatable`,render:e=>{function t(){let[t,n]=(0,p.useState)(h),[r,i]=(0,p.useState)();return(0,m.jsx)(u,{...e,options:t,creatable:!0,onCreateOption:e=>n(t=>[...t,{value:e,label:e}]),value:r,onChange:i})}return(0,m.jsx)(t,{})},args:{label:`Favorite fruit`,placeholder:`Select or type a fruit…`}},I={name:`Async + creatable (composed)`,render:e=>{function t(){let[t,n]=(0,p.useState)(_),[r,i]=(0,p.useState)();return(0,m.jsx)(u,{...e,options:[],loadOptions:e=>f(t,e),defaultOptions:!0,creatable:!0,onCreateOption:e=>n(t=>[...t,{value:e,label:e}]),value:r,onChange:i})}return(0,m.jsx)(t,{})},args:{label:`Reviewer`,placeholder:`Search or add someone…`}},L={name:`Virtualized (5,000 options)`,render:e=>{function t(){let[t,n]=(0,p.useState)();return(0,m.jsx)(u,{...e,options:v,virtualized:!0,value:t,onChange:n})}return(0,m.jsx)(t,{})},args:{label:`Pick one of 5,000`,placeholder:`Search…`}},R={name:`menuPlacement='top'`,render:e=>{function t(){let[t,n]=(0,p.useState)(`banana`);return(0,m.jsx)(u,{...e,value:t,onChange:n})}return(0,m.jsx)(t,{})},args:{label:`Favorite fruit`,menuPlacement:`top`},decorators:[e=>(0,m.jsx)(`div`,{className:`flex h-40 w-80 items-end`,children:(0,m.jsx)(e,{})})]},z=[`sm`,`md`,`lg`],B={render:e=>{function t(){let[t,n]=(0,p.useState)(`apple`);return(0,m.jsx)(`div`,{className:`flex flex-col gap-4`,children:z.map(r=>(0,m.jsx)(u,{...e,size:r,value:t,onChange:n,label:r},r))})}return(0,m.jsx)(t,{})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>('apple');
      return <SelectV2 {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (args: SelectV2BaseProps) => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>();
      return <SelectV2 {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Favorite fruit'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>();
      return <SelectV2 {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Favorite fruit',
    helperText: 'Pick the one you like best.'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>();
      return <SelectV2 {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Favorite fruit',
    error: true,
    errorText: 'This field is required.'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: (args: SelectV2BaseProps) => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>();
      return <SelectV2 {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Required',
    required: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>('banana');
      return <SelectV2 {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Favorite fruit',
    disabled: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite fruit',
    loading: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>('cherry');
      return <SelectV2 {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Favorite fruit',
    clearable: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>();
      return <SelectV2 {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Favorite fruit',
    options: groupedFruitOptions
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Per-option descriptions',
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>();
      return <SelectV2 {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Reviewer',
    options: peopleOptions,
    placeholder: 'Choose a reviewer…'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'With label addons',
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>();
      return <SelectV2 {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Favorite fruit',
    labelAddons: <Tooltip content="This affects the suggestions on your dashboard.">
        <button type="button" aria-label="More info" className="text-fg-tertiary hover:text-fg-default">
          <Info className="h-3.5 w-3.5" />
        </button>
      </Tooltip>
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Multi-select (isMulti)',
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue[]>(['design']);
      return <SelectV2 {...args} isMulti options={[{
        value: 'design',
        label: 'Design'
      }, {
        value: 'engineering',
        label: 'Engineering'
      }, {
        value: 'product',
        label: 'Product'
      }, {
        value: 'marketing',
        label: 'Marketing'
      }, {
        value: 'sales',
        label: 'Sales (disabled)',
        disabled: true
      }]} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    placeholder: 'Select teams…'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Localized (locale)',
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue[]>(['design']);
      return <SelectV2 {...args} isMulti creatable onCreateOption={() => {}} options={[{
        value: 'design',
        label: 'Design'
      }, {
        value: 'engineering',
        label: 'Engineering'
      }, {
        value: 'product',
        label: 'Product'
      }]} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    locale: 'hy-AM',
    placeholder: undefined
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Multi-select, single line (singleLine)',
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue[]>(['design', 'engineering', 'product', 'marketing', 'sales']);
      return <SelectV2 {...args} isMulti singleLine options={[{
        value: 'design',
        label: 'Design'
      }, {
        value: 'engineering',
        label: 'Engineering'
      }, {
        value: 'product',
        label: 'Product'
      }, {
        value: 'marketing',
        label: 'Marketing'
      }, {
        value: 'sales',
        label: 'Sales'
      }, {
        value: 'customer-success',
        label: 'Customer Success'
      }, {
        value: 'legal',
        label: 'Legal'
      }]} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    placeholder: 'Select teams…'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Async (loadOptions)',
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>();
      return <SelectV2 {...args} options={[]} loadOptions={input => fakeSearch(peopleOptions, input)} defaultOptions value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Reviewer',
    placeholder: 'Search people…'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Creatable',
  render: args => {
    function Controlled() {
      const [options, setOptions] = useState(fruitOptions);
      const [value, setValue] = useState<OptionValue | undefined>();
      return <SelectV2 {...args} options={options} creatable onCreateOption={text => setOptions(prev => [...prev, {
        value: text,
        label: text
      }])} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Favorite fruit',
    placeholder: 'Select or type a fruit…'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Async + creatable (composed)',
  render: args => {
    function Controlled() {
      const [known, setKnown] = useState(peopleOptions);
      const [value, setValue] = useState<OptionValue | undefined>();
      return <SelectV2 {...args} options={[]} loadOptions={input => fakeSearch(known, input)} defaultOptions creatable onCreateOption={text => setKnown(prev => [...prev, {
        value: text,
        label: text
      }])} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Reviewer',
    placeholder: 'Search or add someone…'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Virtualized (5,000 options)',
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>();
      return <SelectV2 {...args} options={bigOptions} virtualized value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Pick one of 5,000',
    placeholder: 'Search…'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "menuPlacement='top'",
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>('banana');
      return <SelectV2 {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Favorite fruit',
    menuPlacement: 'top'
  },
  decorators: [Story => <div className="flex h-40 w-80 items-end">
        <Story />
      </div>]
}`,...R.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>('apple');
      return <div className="flex flex-col gap-4">
          {SIZES.map(size => <SelectV2 key={size} {...args} size={size} value={value} onChange={setValue} label={size} />)}
        </div>;
    }
    return <Controlled />;
  }
}`,...B.parameters?.docs?.source}}},V=[`Primary`,`WithLabel`,`WithHelperText`,`WithError`,`Required`,`Disabled`,`Loading`,`Clearable`,`Grouped`,`WithDescriptions`,`WithLabelAddons`,`MultiSelectStory`,`Localized`,`SingleLineStory`,`Async`,`Creatable`,`AsyncCreatableStory`,`Virtualized`,`OpensUpward`,`AllSizes`]}));H();export{B as AllSizes,P as Async,I as AsyncCreatableStory,D as Clearable,F as Creatable,T as Disabled,O as Grouped,E as Loading,M as Localized,j as MultiSelectStory,R as OpensUpward,b as Primary,w as Required,N as SingleLineStory,L as Virtualized,k as WithDescriptions,C as WithError,S as WithHelperText,x as WithLabel,A as WithLabelAddons,V as __namedExportsOrder,y as default,H as n,d as t};