import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-BImE8qNI.js";import{Ot as a,ft as o,t as s}from"./lucide-react--b7fxlm9.js";import{i as c,n as l,o as u,t as d}from"./DropdownMenu-C7tADHNv.js";import{t as f}from"./DropdownMenu-Cl8eek2_.js";import{n as p,t as m}from"./SelectV2-Dupjq_P2.js";import{t as h}from"./Tooltip-BVdfRnA8.js";import{t as g}from"./Tooltip-4iYzp57p.js";import{n as _,t as ee}from"./Modal-BHvVutKX.js";var v=t((()=>{_()})),y=e({AllSizes:()=>X,Async:()=>W,AsyncCreatableStory:()=>K,Clearable:()=>F,Creatable:()=>G,Disabled:()=>N,Grouped:()=>I,InsideModal:()=>Z,Loading:()=>P,Localized:()=>V,MultiSelectStory:()=>B,OpensUpward:()=>J,Primary:()=>O,Required:()=>M,SaveSelection:()=>U,SingleLineStory:()=>H,Virtualized:()=>q,WithDescriptions:()=>L,WithError:()=>j,WithHelperText:()=>A,WithLabel:()=>k,WithLabelAddons:()=>z,WithOptionActions:()=>R,__namedExportsOrder:()=>Q,default:()=>D});function b(e,t){let n=t.trim().toLowerCase(),r=n?e.filter(e=>(typeof e.label==`string`?e.label:String(e.value)).toLowerCase().includes(n)):e;return new Promise(e=>setTimeout(()=>e(r),600))}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{x=n(r(),1),s(),p(),g(),v(),f(),S=i(),C=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`},{value:`durian`,label:`Durian (disabled)`,disabled:!0},{value:`elderberry`,label:`Elderberry`}],w=[{value:`banana`,label:`Banana`},{value:`apple`,label:`Apple`,group:`Pome`},{value:`pear`,label:`Pear`,group:`Pome`},{value:`cherry`,label:`Cherry`,group:`Stone`},{value:`peach`,label:`Peach`,group:`Stone`}],T=[{value:`ada`,label:`Ada Lovelace`,description:`Engineering · London`},{value:`grace`,label:`Grace Hopper`,description:`Engineering · Remote`},{value:`alan`,label:`Alan Turing`,description:`Research · Cambridge`},{value:`margaret`,label:`Margaret Hamilton`,description:`Engineering · Boston`},{value:`katherine`,label:`Katherine Johnson`,description:`Data Science · Remote (disabled)`,disabled:!0}],E=Array.from({length:5e3},(e,t)=>({value:t,label:`Option #${t+1}`})),D={title:`Components/SelectV2`,component:m,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},locale:{control:`select`,options:[`en-US`,`ru-RU`,`hy-AM`]}},args:{options:C,placeholder:`Select a fruit…`,size:`md`,disabled:!1,error:!1,required:!1,loading:!1,clearable:!1,searchable:!0},decorators:[e=>(0,S.jsx)(`div`,{className:`w-80`,children:(0,S.jsx)(e,{})})]},O={render:e=>{function t(){let[t,n]=(0,x.useState)(`apple`);return(0,S.jsx)(m,{...e,value:t,onChange:n})}return(0,S.jsx)(t,{})}},k={render:e=>{function t(){let[t,n]=(0,x.useState)();return(0,S.jsx)(m,{...e,value:t,onChange:n})}return(0,S.jsx)(t,{})},args:{label:`Favorite fruit`}},A={render:e=>{function t(){let[t,n]=(0,x.useState)();return(0,S.jsx)(m,{...e,value:t,onChange:n})}return(0,S.jsx)(t,{})},args:{label:`Favorite fruit`,helperText:`Pick the one you like best.`}},j={render:e=>{function t(){let[t,n]=(0,x.useState)();return(0,S.jsx)(m,{...e,value:t,onChange:n})}return(0,S.jsx)(t,{})},args:{label:`Favorite fruit`,error:!0,errorText:`This field is required.`}},M={render:e=>{function t(){let[t,n]=(0,x.useState)();return(0,S.jsx)(m,{...e,value:t,onChange:n})}return(0,S.jsx)(t,{})},args:{label:`Required`,required:!0}},N={render:e=>{function t(){let[t,n]=(0,x.useState)(`banana`);return(0,S.jsx)(m,{...e,value:t,onChange:n})}return(0,S.jsx)(t,{})},args:{label:`Favorite fruit`,disabled:!0}},P={args:{label:`Favorite fruit`,loading:!0}},F={render:e=>{function t(){let[t,n]=(0,x.useState)(`cherry`);return(0,S.jsx)(m,{...e,value:t,onChange:n})}return(0,S.jsx)(t,{})},args:{label:`Favorite fruit`,clearable:!0}},I={render:e=>{function t(){let[t,n]=(0,x.useState)();return(0,S.jsx)(m,{...e,value:t,onChange:n})}return(0,S.jsx)(t,{})},args:{label:`Favorite fruit`,options:w}},L={name:`Per-option descriptions`,render:e=>{function t(){let[t,n]=(0,x.useState)();return(0,S.jsx)(m,{...e,value:t,onChange:n})}return(0,S.jsx)(t,{})},args:{label:`Reviewer`,options:T,placeholder:`Choose a reviewer…`}},R={name:`Per-option actions`,render:e=>{function t(){let[t,n]=(0,x.useState)(`ceo`),r=[`ceo`,`board`].map(e=>({value:e,label:e===`ceo`?`Chairman of MB /CEO`:`Chairman of the board`,actions:(0,S.jsxs)(c,{children:[(0,S.jsx)(u,{children:(0,S.jsx)(`button`,{type:`button`,"aria-label":`Position actions`,className:`rounded-md p-1 text-fg-secondary hover:bg-bg-container hover:text-fg-default`,children:(0,S.jsx)(a,{className:`h-4 w-4`})})}),(0,S.jsxs)(d,{align:`end`,autoFocusFirstItem:!1,children:[(0,S.jsx)(l,{children:`Make position primary`}),(0,S.jsx)(l,{children:`Detach from Position`})]})]})}));return(0,S.jsx)(m,{...e,options:r,value:t,onChange:n})}return(0,S.jsx)(t,{})},args:{label:`Position`,options:[]}},z={name:`With label addons`,render:e=>{function t(){let[t,n]=(0,x.useState)();return(0,S.jsx)(m,{...e,value:t,onChange:n})}return(0,S.jsx)(t,{})},args:{label:`Favorite fruit`,labelAddons:(0,S.jsx)(h,{content:`This affects the suggestions on your dashboard.`,children:(0,S.jsx)(`button`,{type:`button`,"aria-label":`More info`,className:`text-fg-tertiary hover:text-fg-default`,children:(0,S.jsx)(o,{className:`h-3.5 w-3.5`})})})}},B={name:`Multi-select (isMulti)`,render:e=>{function t(){let[t,n]=(0,x.useState)([`design`]);return(0,S.jsx)(m,{...e,isMulti:!0,options:[{value:`design`,label:`Design`},{value:`engineering`,label:`Engineering`},{value:`product`,label:`Product`},{value:`marketing`,label:`Marketing`},{value:`sales`,label:`Sales (disabled)`,disabled:!0}],value:t,onChange:n})}return(0,S.jsx)(t,{})},args:{label:`Teams`,placeholder:`Select teams…`}},V={name:`Localized (locale)`,render:e=>{function t(){let[t,n]=(0,x.useState)([`design`]);return(0,S.jsx)(m,{...e,isMulti:!0,creatable:!0,onCreateOption:()=>{},options:[{value:`design`,label:`Design`},{value:`engineering`,label:`Engineering`},{value:`product`,label:`Product`}],value:t,onChange:n})}return(0,S.jsx)(t,{})},args:{label:`Teams`,locale:`hy-AM`,placeholder:void 0}},H={name:`Multi-select, single line (singleLine)`,render:e=>{function t(){let[t,n]=(0,x.useState)([`design`,`engineering`,`product`,`marketing`,`sales`]);return(0,S.jsx)(m,{...e,isMulti:!0,singleLine:!0,options:[{value:`design`,label:`Design`},{value:`engineering`,label:`Engineering`},{value:`product`,label:`Product`},{value:`marketing`,label:`Marketing`},{value:`sales`,label:`Sales`},{value:`customer-success`,label:`Customer Success`},{value:`legal`,label:`Legal`}],value:t,onChange:n})}return(0,S.jsx)(t,{})},args:{label:`Teams`,placeholder:`Select teams…`}},U={name:`Save selection (storageKey)`,render:e=>(0,S.jsx)(m,{...e,isMulti:!0,options:[{value:`design`,label:`Design`},{value:`engineering`,label:`Engineering`},{value:`product`,label:`Product`},{value:`marketing`,label:`Marketing`}],defaultValue:[`design`]}),args:{label:`Teams`,placeholder:`Select teams…`,storageKey:`storybook-select-v2-teams`}},W={name:`Async (loadOptions)`,render:e=>{function t(){let[t,n]=(0,x.useState)();return(0,S.jsx)(m,{...e,options:[],loadOptions:e=>b(T,e),defaultOptions:!0,value:t,onChange:n})}return(0,S.jsx)(t,{})},args:{label:`Reviewer`,placeholder:`Search people…`}},G={name:`Creatable`,render:e=>{function t(){let[t,n]=(0,x.useState)(C),[r,i]=(0,x.useState)();return(0,S.jsx)(m,{...e,options:t,creatable:!0,onCreateOption:e=>n(t=>[...t,{value:e,label:e}]),value:r,onChange:i})}return(0,S.jsx)(t,{})},args:{label:`Favorite fruit`,placeholder:`Select or type a fruit…`}},K={name:`Async + creatable (composed)`,render:e=>{function t(){let[t,n]=(0,x.useState)(T),[r,i]=(0,x.useState)();return(0,S.jsx)(m,{...e,options:[],loadOptions:e=>b(t,e),defaultOptions:!0,creatable:!0,onCreateOption:e=>n(t=>[...t,{value:e,label:e}]),value:r,onChange:i})}return(0,S.jsx)(t,{})},args:{label:`Reviewer`,placeholder:`Search or add someone…`}},q={name:`Virtualized (5,000 options)`,render:e=>{function t(){let[t,n]=(0,x.useState)();return(0,S.jsx)(m,{...e,options:E,virtualized:!0,value:t,onChange:n})}return(0,S.jsx)(t,{})},args:{label:`Pick one of 5,000`,placeholder:`Search…`}},J={name:`menuPlacement='top'`,render:e=>{function t(){let[t,n]=(0,x.useState)(`banana`);return(0,S.jsx)(m,{...e,value:t,onChange:n})}return(0,S.jsx)(t,{})},args:{label:`Favorite fruit`,menuPlacement:`top`},decorators:[e=>(0,S.jsx)(`div`,{className:`flex h-40 w-80 items-end`,children:(0,S.jsx)(e,{})})]},Y=[`sm`,`md`,`lg`],X={render:e=>{function t(){let[t,n]=(0,x.useState)(`apple`);return(0,S.jsx)(`div`,{className:`flex flex-col gap-4`,children:Y.map(r=>(0,S.jsx)(m,{...e,size:r,value:t,onChange:n,label:r},r))})}return(0,S.jsx)(t,{})}},Z={name:`Inside a Modal (menu portals to body)`,render:e=>{function t(){let[t,n]=(0,x.useState)(!0),[r,i]=(0,x.useState)();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(`button`,{type:`button`,onClick:()=>n(!0),children:`Open modal`}),(0,S.jsx)(ee,{open:t,onClose:()=>n(!1),title:`Select in a modal`,children:(0,S.jsxs)(`div`,{className:`max-h-48 overflow-auto`,children:[(0,S.jsx)(m,{...e,value:r,onChange:i}),(0,S.jsx)(`div`,{className:`h-64`})]})})]})}return(0,S.jsx)(t,{})},args:{label:`Favorite fruit`,options:C}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>('apple');
      return <SelectV2 {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite fruit',
    loading: true
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>('apple');
      return <div className="flex flex-col gap-4">
          {SIZES.map(size => <SelectV2 key={size} {...args} size={size} value={value} onChange={setValue} label={size} />)}
        </div>;
    }
    return <Controlled />;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Inside a Modal (menu portals to body)',
  render: args => {
    function Controlled() {
      const [open, setOpen] = useState(true);
      const [value, setValue] = useState<OptionValue | undefined>();
      return <>
          <button type="button" onClick={() => setOpen(true)}>
            Open modal
          </button>
          <Modal open={open} onClose={() => setOpen(false)} title="Select in a modal">
            <div className="max-h-48 overflow-auto">
              <SelectV2 {...args} value={value} onChange={setValue} />
              <div className="h-64" />
            </div>
          </Modal>
        </>;
    }
    return <Controlled />;
  },
  args: {
    label: 'Favorite fruit',
    options: fruitOptions
  }
}`,...Z.parameters?.docs?.source}}},Q=[`Primary`,`WithLabel`,`WithHelperText`,`WithError`,`Required`,`Disabled`,`Loading`,`Clearable`,`Grouped`,`WithDescriptions`,`WithOptionActions`,`WithLabelAddons`,`MultiSelectStory`,`Localized`,`SingleLineStory`,`SaveSelection`,`Async`,`Creatable`,`AsyncCreatableStory`,`Virtualized`,`OpensUpward`,`AllSizes`,`InsideModal`]}));$();export{X as AllSizes,W as Async,K as AsyncCreatableStory,F as Clearable,G as Creatable,N as Disabled,I as Grouped,Z as InsideModal,P as Loading,V as Localized,B as MultiSelectStory,J as OpensUpward,O as Primary,M as Required,U as SaveSelection,H as SingleLineStory,q as Virtualized,L as WithDescriptions,j as WithError,A as WithHelperText,k as WithLabel,z as WithLabelAddons,R as WithOptionActions,Q as __namedExportsOrder,D as default,$ as n,y as t};