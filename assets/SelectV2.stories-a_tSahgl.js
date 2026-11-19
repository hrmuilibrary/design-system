import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-SsRVWvIt.js";import{Ot as a,ft as o,t as s}from"./lucide-react-CbcowyjP.js";import{i as c,n as l,o as u,t as d}from"./DropdownMenu-ClSe8AQZ.js";import{t as f}from"./Tooltip-hhaa-Gjn.js";import{t as p}from"./Tooltip-0yaCn5Cq.js";import{n as m,r as h,t as g}from"./DropdownMenu-D_wCeGg0.js";var _=e({AllSizes:()=>J,Async:()=>H,AsyncCreatableStory:()=>W,Clearable:()=>N,Creatable:()=>U,Disabled:()=>j,Grouped:()=>P,Loading:()=>M,Localized:()=>z,MultiSelectStory:()=>R,OpensUpward:()=>K,Primary:()=>E,Required:()=>A,SaveSelection:()=>V,SingleLineStory:()=>B,Virtualized:()=>G,WithDescriptions:()=>F,WithError:()=>k,WithHelperText:()=>O,WithLabel:()=>D,WithLabelAddons:()=>L,WithOptionActions:()=>I,__namedExportsOrder:()=>Y,default:()=>T});function v(e,t){let n=t.trim().toLowerCase(),r=n?e.filter(e=>(typeof e.label==`string`?e.label:String(e.value)).toLowerCase().includes(n)):e;return new Promise(e=>setTimeout(()=>e(r),600))}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X=t((()=>{y=n(r(),1),s(),h(),p(),g(),b=i(),x=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`},{value:`durian`,label:`Durian (disabled)`,disabled:!0},{value:`elderberry`,label:`Elderberry`}],S=[{value:`banana`,label:`Banana`},{value:`apple`,label:`Apple`,group:`Pome`},{value:`pear`,label:`Pear`,group:`Pome`},{value:`cherry`,label:`Cherry`,group:`Stone`},{value:`peach`,label:`Peach`,group:`Stone`}],C=[{value:`ada`,label:`Ada Lovelace`,description:`Engineering · London`},{value:`grace`,label:`Grace Hopper`,description:`Engineering · Remote`},{value:`alan`,label:`Alan Turing`,description:`Research · Cambridge`},{value:`margaret`,label:`Margaret Hamilton`,description:`Engineering · Boston`},{value:`katherine`,label:`Katherine Johnson`,description:`Data Science · Remote (disabled)`,disabled:!0}],w=Array.from({length:5e3},(e,t)=>({value:t,label:`Option #${t+1}`})),T={title:`Components/SelectV2`,component:m,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},locale:{control:`select`,options:[`en-US`,`ru-RU`,`hy-AM`]}},args:{options:x,placeholder:`Select a fruit…`,size:`md`,disabled:!1,error:!1,required:!1,loading:!1,clearable:!1,searchable:!0},decorators:[e=>(0,b.jsx)(`div`,{className:`w-80`,children:(0,b.jsx)(e,{})})]},E={render:e=>{function t(){let[t,n]=(0,y.useState)(`apple`);return(0,b.jsx)(m,{...e,value:t,onChange:n})}return(0,b.jsx)(t,{})}},D={render:e=>{function t(){let[t,n]=(0,y.useState)();return(0,b.jsx)(m,{...e,value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{label:`Favorite fruit`}},O={render:e=>{function t(){let[t,n]=(0,y.useState)();return(0,b.jsx)(m,{...e,value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{label:`Favorite fruit`,helperText:`Pick the one you like best.`}},k={render:e=>{function t(){let[t,n]=(0,y.useState)();return(0,b.jsx)(m,{...e,value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{label:`Favorite fruit`,error:!0,errorText:`This field is required.`}},A={render:e=>{function t(){let[t,n]=(0,y.useState)();return(0,b.jsx)(m,{...e,value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{label:`Required`,required:!0}},j={render:e=>{function t(){let[t,n]=(0,y.useState)(`banana`);return(0,b.jsx)(m,{...e,value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{label:`Favorite fruit`,disabled:!0}},M={args:{label:`Favorite fruit`,loading:!0}},N={render:e=>{function t(){let[t,n]=(0,y.useState)(`cherry`);return(0,b.jsx)(m,{...e,value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{label:`Favorite fruit`,clearable:!0}},P={render:e=>{function t(){let[t,n]=(0,y.useState)();return(0,b.jsx)(m,{...e,value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{label:`Favorite fruit`,options:S}},F={name:`Per-option descriptions`,render:e=>{function t(){let[t,n]=(0,y.useState)();return(0,b.jsx)(m,{...e,value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{label:`Reviewer`,options:C,placeholder:`Choose a reviewer…`}},I={name:`Per-option actions`,render:e=>{function t(){let[t,n]=(0,y.useState)(`ceo`),r=[`ceo`,`board`].map(e=>({value:e,label:e===`ceo`?`Chairman of MB /CEO`:`Chairman of the board`,actions:(0,b.jsxs)(c,{children:[(0,b.jsx)(u,{children:(0,b.jsx)(`button`,{type:`button`,"aria-label":`Position actions`,className:`rounded-md p-1 text-fg-secondary hover:bg-bg-container hover:text-fg-default`,children:(0,b.jsx)(a,{className:`h-4 w-4`})})}),(0,b.jsxs)(d,{align:`end`,autoFocusFirstItem:!1,children:[(0,b.jsx)(l,{children:`Make position primary`}),(0,b.jsx)(l,{children:`Detach from Position`})]})]})}));return(0,b.jsx)(m,{...e,options:r,value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{label:`Position`,options:[]}},L={name:`With label addons`,render:e=>{function t(){let[t,n]=(0,y.useState)();return(0,b.jsx)(m,{...e,value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{label:`Favorite fruit`,labelAddons:(0,b.jsx)(f,{content:`This affects the suggestions on your dashboard.`,children:(0,b.jsx)(`button`,{type:`button`,"aria-label":`More info`,className:`text-fg-tertiary hover:text-fg-default`,children:(0,b.jsx)(o,{className:`h-3.5 w-3.5`})})})}},R={name:`Multi-select (isMulti)`,render:e=>{function t(){let[t,n]=(0,y.useState)([`design`]);return(0,b.jsx)(m,{...e,isMulti:!0,options:[{value:`design`,label:`Design`},{value:`engineering`,label:`Engineering`},{value:`product`,label:`Product`},{value:`marketing`,label:`Marketing`},{value:`sales`,label:`Sales (disabled)`,disabled:!0}],value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{label:`Teams`,placeholder:`Select teams…`}},z={name:`Localized (locale)`,render:e=>{function t(){let[t,n]=(0,y.useState)([`design`]);return(0,b.jsx)(m,{...e,isMulti:!0,creatable:!0,onCreateOption:()=>{},options:[{value:`design`,label:`Design`},{value:`engineering`,label:`Engineering`},{value:`product`,label:`Product`}],value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{label:`Teams`,locale:`hy-AM`,placeholder:void 0}},B={name:`Multi-select, single line (singleLine)`,render:e=>{function t(){let[t,n]=(0,y.useState)([`design`,`engineering`,`product`,`marketing`,`sales`]);return(0,b.jsx)(m,{...e,isMulti:!0,singleLine:!0,options:[{value:`design`,label:`Design`},{value:`engineering`,label:`Engineering`},{value:`product`,label:`Product`},{value:`marketing`,label:`Marketing`},{value:`sales`,label:`Sales`},{value:`customer-success`,label:`Customer Success`},{value:`legal`,label:`Legal`}],value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{label:`Teams`,placeholder:`Select teams…`}},V={name:`Save selection (storageKey)`,render:e=>(0,b.jsx)(m,{...e,isMulti:!0,options:[{value:`design`,label:`Design`},{value:`engineering`,label:`Engineering`},{value:`product`,label:`Product`},{value:`marketing`,label:`Marketing`}],defaultValue:[`design`]}),args:{label:`Teams`,placeholder:`Select teams…`,storageKey:`storybook-select-v2-teams`}},H={name:`Async (loadOptions)`,render:e=>{function t(){let[t,n]=(0,y.useState)();return(0,b.jsx)(m,{...e,options:[],loadOptions:e=>v(C,e),defaultOptions:!0,value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{label:`Reviewer`,placeholder:`Search people…`}},U={name:`Creatable`,render:e=>{function t(){let[t,n]=(0,y.useState)(x),[r,i]=(0,y.useState)();return(0,b.jsx)(m,{...e,options:t,creatable:!0,onCreateOption:e=>n(t=>[...t,{value:e,label:e}]),value:r,onChange:i})}return(0,b.jsx)(t,{})},args:{label:`Favorite fruit`,placeholder:`Select or type a fruit…`}},W={name:`Async + creatable (composed)`,render:e=>{function t(){let[t,n]=(0,y.useState)(C),[r,i]=(0,y.useState)();return(0,b.jsx)(m,{...e,options:[],loadOptions:e=>v(t,e),defaultOptions:!0,creatable:!0,onCreateOption:e=>n(t=>[...t,{value:e,label:e}]),value:r,onChange:i})}return(0,b.jsx)(t,{})},args:{label:`Reviewer`,placeholder:`Search or add someone…`}},G={name:`Virtualized (5,000 options)`,render:e=>{function t(){let[t,n]=(0,y.useState)();return(0,b.jsx)(m,{...e,options:w,virtualized:!0,value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{label:`Pick one of 5,000`,placeholder:`Search…`}},K={name:`menuPlacement='top'`,render:e=>{function t(){let[t,n]=(0,y.useState)(`banana`);return(0,b.jsx)(m,{...e,value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{label:`Favorite fruit`,menuPlacement:`top`},decorators:[e=>(0,b.jsx)(`div`,{className:`flex h-40 w-80 items-end`,children:(0,b.jsx)(e,{})})]},q=[`sm`,`md`,`lg`],J={render:e=>{function t(){let[t,n]=(0,y.useState)(`apple`);return(0,b.jsx)(`div`,{className:`flex flex-col gap-4`,children:q.map(r=>(0,b.jsx)(m,{...e,size:r,value:t,onChange:n,label:r},r))})}return(0,b.jsx)(t,{})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>('apple');
      return <SelectV2 {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
    helperText: 'Pick the one you like best.'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite fruit',
    loading: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Per-option actions',
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>('ceo');
      const options: SelectV2Option[] = ['ceo', 'board'].map(v => ({
        value: v,
        label: v === 'ceo' ? 'Chairman of MB /CEO' : 'Chairman of the board',
        actions: <DropdownMenu>
            <DropdownTrigger>
              <button type="button" aria-label="Position actions" className="rounded-md p-1 text-fg-secondary hover:bg-bg-container hover:text-fg-default">
                <MoreHorizontal className="h-4 w-4" />
              </button>
            </DropdownTrigger>
            <DropdownContent align="end" autoFocusFirstItem={false}>
              <DropdownItem>Make position primary</DropdownItem>
              <DropdownItem>Detach from Position</DropdownItem>
            </DropdownContent>
          </DropdownMenu>
      }));
      return <SelectV2 {...args} options={options} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Position',
    options: []
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Save selection (storageKey)',
  render: args => <SelectV2 {...args} isMulti options={[{
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
  }]} defaultValue={['design']} />,
  args: {
    label: 'Teams',
    placeholder: 'Select teams…',
    storageKey: 'storybook-select-v2-teams'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>('apple');
      return <div className="flex flex-col gap-4">
          {SIZES.map(size => <SelectV2 key={size} {...args} size={size} value={value} onChange={setValue} label={size} />)}
        </div>;
    }
    return <Controlled />;
  }
}`,...J.parameters?.docs?.source}}},Y=[`Primary`,`WithLabel`,`WithHelperText`,`WithError`,`Required`,`Disabled`,`Loading`,`Clearable`,`Grouped`,`WithDescriptions`,`WithOptionActions`,`WithLabelAddons`,`MultiSelectStory`,`Localized`,`SingleLineStory`,`SaveSelection`,`Async`,`Creatable`,`AsyncCreatableStory`,`Virtualized`,`OpensUpward`,`AllSizes`]}));X();export{J as AllSizes,H as Async,W as AsyncCreatableStory,N as Clearable,U as Creatable,j as Disabled,P as Grouped,M as Loading,z as Localized,R as MultiSelectStory,K as OpensUpward,E as Primary,A as Required,V as SaveSelection,B as SingleLineStory,G as Virtualized,F as WithDescriptions,k as WithError,O as WithHelperText,D as WithLabel,L as WithLabelAddons,I as WithOptionActions,Y as __namedExportsOrder,T as default,X as n,_ as t};