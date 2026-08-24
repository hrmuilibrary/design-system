import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-Bhpt2FsH.js";import{Mt as a,f as o,nt as s,t as c}from"./lucide-react-CUN-FJsr.js";import{t as l}from"./Tooltip-DmS9PQhr.js";import{t as u}from"./Tooltip-BsHf1hel.js";import{n as d,t as f}from"./Select-CPJjs_X6.js";var p=e({AllSizes:()=>L,Controlled:()=>D,DefaultValue:()=>E,Disabled:()=>T,Grouped:()=>M,Loading:()=>j,NumericValues:()=>O,Primary:()=>x,Required:()=>A,Searchable:()=>N,SearchableGroupedLoading:()=>P,WithError:()=>w,WithHelperText:()=>C,WithIcons:()=>F,WithLabel:()=>S,WithLabelAddons:()=>k,__namedExportsOrder:()=>R,default:()=>b}),m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z=t((()=>{m=n(r(),1),c(),d(),u(),h=i(),g=[{value:`apple`,label:`Apple`},{value:`banana`,label:`Banana`},{value:`cherry`,label:`Cherry`},{value:`durian`,label:`Durian (disabled)`,disabled:!0},{value:`elderberry`,label:`Elderberry`}],_=[{value:`banana`,label:`Banana`},{value:`apple`,label:`Apple`,group:`Pome`},{value:`pear`,label:`Pear`,group:`Pome`},{value:`cherry`,label:`Cherry`,group:`Stone`},{value:`peach`,label:`Peach`,group:`Stone`}],v=[{value:1,label:`Low`},{value:2,label:`Medium`},{value:3,label:`High`}],y=[{value:`sunny`,label:`Sunny`,icon:(0,h.jsx)(o,{className:`text-yellow-500`})},{value:`cloudy`,label:`Cloudy`,icon:(0,h.jsx)(a,{className:`text-fg-secondary`})},{value:`calm`,label:`Calm (no icon)`},{value:`windy`,label:`Windy`,rightIcon:(0,h.jsx)(`span`,{className:`text-p-xs text-fg-tertiary`,children:`32 km/h`})}],b={title:`Components/Select`,component:f,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`lg`,`md`,`sm`]}},args:{options:g,placeholder:`Select a fruit…`,size:`md`,disabled:!1,error:!1,required:!1,loading:!1,searchable:!1},decorators:[e=>(0,h.jsx)(`div`,{className:`w-72`,children:(0,h.jsx)(e,{})})]},x={},S={args:{label:`Favorite fruit`}},C={args:{label:`Favorite fruit`,helperText:`Pick the one you like best.`}},w={args:{label:`Favorite fruit`,error:!0,errorText:`This field is required.`}},T={args:{label:`Favorite fruit`,disabled:!0,defaultValue:`banana`}},E={args:{label:`Favorite fruit`,defaultValue:`cherry`}},D={render:e=>{function t(){let[t,n]=(0,m.useState)(`apple`);return(0,h.jsx)(f,{...e,value:t,onChange:n})}return(0,h.jsx)(t,{})},args:{label:`Favorite fruit`}},O={name:`Numeric values (round-trip through onChange)`,render:e=>{function t(){let[t,n]=(0,m.useState)(2);return(0,h.jsx)(f,{...e,options:v,value:t,onChange:e=>n(e)})}return(0,h.jsx)(t,{})},args:{label:`Priority`}},k={name:`With label addons`,args:{label:`Favorite fruit`,labelAddons:(0,h.jsx)(l,{content:`This affects the suggestions on your dashboard.`,children:(0,h.jsx)(`button`,{type:`button`,"aria-label":`More info`,className:`text-fg-tertiary hover:text-fg-default`,children:(0,h.jsx)(s,{className:`h-3.5 w-3.5`})})})}},A={args:{label:`Favorite fruit`,required:!0}},j={args:{label:`Favorite fruit`,loading:!0}},M={args:{label:`Favorite fruit`,options:_}},N={args:{label:`Favorite fruit`,searchable:!0}},P={name:`Searchable + grouped + loading (composed)`,render:e=>{function t(){let[t,n]=(0,m.useState)(!0);return(0,m.useEffect)(()=>{let e=setTimeout(()=>n(!1),1e3);return()=>clearTimeout(e)},[]),(0,h.jsx)(f,{...e,loading:t})}return(0,h.jsx)(t,{})},args:{label:`Favorite fruit`,options:_,searchable:!0}},F={name:`Per-option icons`,render:e=>{function t(){let[t,n]=(0,m.useState)(`sunny`);return(0,h.jsx)(f,{...e,options:y,value:t,onChange:n})}return(0,h.jsx)(t,{})},args:{label:`Weather`}},I=[`sm`,`md`,`lg`],L={render:e=>(0,h.jsx)(`div`,{className:`flex flex-col gap-4`,children:I.map(t=>(0,h.jsx)(f,{...e,size:t,label:t},t))})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite fruit'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite fruit',
    helperText: 'Pick the one you like best.'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite fruit',
    error: true,
    errorText: 'This field is required.'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite fruit',
    disabled: true,
    defaultValue: 'banana'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite fruit',
    defaultValue: 'cherry'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    function ControlledSelect() {
      const [value, setValue] = useState<string | number>('apple');
      return <Select {...args} value={value} onChange={setValue} />;
    }
    return <ControlledSelect />;
  },
  args: {
    label: 'Favorite fruit'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Numeric values (round-trip through onChange)',
  render: args => {
    function NumericSelect() {
      const [value, setValue] = useState<number>(2);
      return <Select {...args} options={priorityOptions} value={value} onChange={v => setValue(v as number)} />;
    }
    return <NumericSelect />;
  },
  args: {
    label: 'Priority'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'With label addons',
  args: {
    label: 'Favorite fruit',
    labelAddons: <Tooltip content="This affects the suggestions on your dashboard.">
        <button type="button" aria-label="More info" className="text-fg-tertiary hover:text-fg-default">
          <Info className="h-3.5 w-3.5" />
        </button>
      </Tooltip>
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite fruit',
    required: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite fruit',
    loading: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite fruit',
    options: groupedFruitOptions
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Favorite fruit',
    searchable: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Searchable + grouped + loading (composed)',
  render: args => {
    function ComposedDemo() {
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        const t = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(t);
      }, []);
      return <Select {...args} loading={loading} />;
    }
    return <ComposedDemo />;
  },
  args: {
    label: 'Favorite fruit',
    options: groupedFruitOptions,
    searchable: true
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Per-option icons',
  render: args => {
    function ControlledIcons() {
      const [value, setValue] = useState<string | number>('sunny');
      return <Select {...args} options={weatherOptions} value={value} onChange={setValue} />;
    }
    return <ControlledIcons />;
  },
  args: {
    label: 'Weather'
  }
}`,...F.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      {SIZES.map(size => <Select key={size} {...args} size={size} label={size} />)}
    </div>
}`,...L.parameters?.docs?.source}}},R=[`Primary`,`WithLabel`,`WithHelperText`,`WithError`,`Disabled`,`DefaultValue`,`Controlled`,`NumericValues`,`WithLabelAddons`,`Required`,`Loading`,`Grouped`,`Searchable`,`SearchableGroupedLoading`,`WithIcons`,`AllSizes`]}));z();export{L as AllSizes,D as Controlled,E as DefaultValue,T as Disabled,M as Grouped,j as Loading,O as NumericValues,x as Primary,A as Required,N as Searchable,P as SearchableGroupedLoading,w as WithError,C as WithHelperText,F as WithIcons,S as WithLabel,k as WithLabelAddons,R as __namedExportsOrder,b as default,z as n,p as t};