import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-BgCNYJC5.js";import{S as a,i as o,n as s,t as c}from"./lucide-react-D8xGtw7t.js";import{n as l,t as u}from"./cn-CHNBg8JS.js";import{t as d}from"./Avatar-COOx71V1.js";import{t as f}from"./Avatar-CVUcoryf.js";var p,m,h,g,_=t((()=>{p=n(r(),1),c(),f(),l(),m=i(),h={sm:{box:`px-1.5 py-1.5 gap-1`,chip:`h-6 pl-0.5 pr-1.5`,chipText:`text-p-xs`,input:`h-6 text-p-sm min-w-[100px]`,avatar:`xs`},md:{box:`px-2 py-2 gap-1.5`,chip:`h-7 pl-1 pr-2`,chipText:`text-p-sm`,input:`h-7 text-p-std min-w-[120px]`,avatar:`xs`},lg:{box:`px-2.5 py-2.5 gap-2`,chip:`h-8 pl-1 pr-2.5`,chipText:`text-p-std`,input:`h-8 text-p-md min-w-[140px]`,avatar:`sm`}},g=(0,p.forwardRef)(function({options:e,value:t,onChange:n,size:r=`md`,placeholder:i=`Select…`,addMorePlaceholder:c=`Add another…`,disabled:l=!1,error:f=!1,label:g,helperText:_,errorText:v,required:y=!1,lockedValues:b=[],max:x,searchable:S=!0,suggestionsLabel:C=`Suggestions`,emptyText:w=`No matches. Try a different search.`,id:T,className:E,wrapperClassName:D,dataTestId:O},k){let A=(0,p.useId)(),j=T??A,M=`${j}-listbox`,N=f||!!v,[P,F]=(0,p.useState)(``),[I,L]=(0,p.useState)(!1),[R,z]=(0,p.useState)(0),B=(0,p.useRef)(null),V=(0,p.useRef)(null),H=e=>{V.current=e,typeof k==`function`?k(e):k&&(k.current=e)},U=(0,p.useMemo)(()=>new Map(e.map(e=>[e.value,e])),[e]),W=(0,p.useMemo)(()=>t.map(e=>U.get(e)).filter(e=>!!e),[t,U]),G=(0,p.useMemo)(()=>{let n=P.trim().toLowerCase();return e.filter(e=>!t.includes(e.value)&&(n===``||e.label.toLowerCase().includes(n)||(e.description??``).toLowerCase().includes(n)))},[e,t,P]),K=x!==void 0&&t.length>=x;(0,p.useEffect)(()=>{if(!I)return;let e=e=>{B.current&&!B.current.contains(e.target)&&L(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[I]),(0,p.useEffect)(()=>{z(e=>Math.min(e,Math.max(0,G.length-1)))},[G.length]);let q=e=>{let r=U.get(e);l||K||!r||r.disabled||(n([...t,e]),F(``),z(0),V.current?.focus())},J=e=>{l||b.includes(e)||n(t.filter(t=>t!==e))},Y=e=>{if(!G.length)return;let t=R;for(let n=0;n<G.length&&(t=(t+e+G.length)%G.length,G[t]?.disabled);n++);z(t)},X=e=>{if(e.key===`ArrowDown`)e.preventDefault(),I?Y(1):L(!0);else if(e.key===`ArrowUp`)e.preventDefault(),Y(-1);else if(e.key===`Enter`)I&&G[R]&&!G[R].disabled&&(e.preventDefault(),q(G[R].value));else if(e.key===`Escape`)L(!1);else if(e.key===`Backspace`&&P===``&&W.length>0){let e=[...W].reverse().find(e=>!b.includes(e.value));e&&J(e.value)}},Z=v?`${j}-error`:_?`${j}-help`:void 0;return(0,m.jsxs)(`div`,{"data-test-id":O,className:u(`flex flex-col gap-1.5 w-full`,D),children:[g&&(0,m.jsxs)(`label`,{htmlFor:j,className:`text-p-std font-medium text-fg-default inline-flex items-center gap-1`,children:[g,y&&(0,m.jsx)(`span`,{className:`text-red-600`,"aria-hidden":!0,children:`*`})]}),(0,m.jsxs)(`div`,{ref:B,className:`relative`,children:[(0,m.jsxs)(`div`,{className:u(`flex flex-wrap items-center rounded-lg border bg-bg-default transition-colors`,h[r].box,l?`opacity-60 cursor-not-allowed border-border-default`:N?`border-red-500 focus-within:ring-2 focus-within:ring-red-300 focus-within:ring-offset-1 cursor-text`:`border-border-default hover:border-border-strong focus-within:border-fg-tertiary focus-within:ring-2 focus-within:ring-brand-300 focus-within:ring-offset-1 cursor-text`,E),onClick:()=>!l&&V.current?.focus(),children:[W.map(e=>{let t=b.includes(e.value);return(0,m.jsxs)(`span`,{className:u(`inline-flex items-center gap-1.5 rounded-full text-fg-default bg-bg-subtle`,h[r].chip,h[r].chipText),title:e.description,children:[e.avatarSrc&&(0,m.jsx)(d,{src:e.avatarSrc,name:e.label,size:h[r].avatar}),(0,m.jsx)(`span`,{className:`font-medium`,children:e.label}),e.badge&&(0,m.jsx)(`span`,{className:`text-label-xxs uppercase tracking-wider opacity-70`,children:e.badge}),!t&&!l&&(0,m.jsx)(`button`,{type:`button`,onClick:t=>{t.stopPropagation(),J(e.value)},"aria-label":`Remove ${e.label}`,className:`-mr-0.5 ml-0.5 text-fg-tertiary hover:text-fg-default p-0.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300`,children:(0,m.jsx)(s,{className:`w-3 h-3`})})]},e.value)}),(0,m.jsx)(`input`,{ref:H,id:j,type:`text`,role:`combobox`,"aria-expanded":I,"aria-controls":M,"aria-autocomplete":`list`,"aria-activedescendant":I&&G[R]?`${M}-opt-${R}`:void 0,"aria-invalid":N||void 0,"aria-describedby":Z,value:P,readOnly:!S,disabled:l||K,onChange:e=>{F(e.target.value),L(!0)},onFocus:()=>L(!0),onKeyDown:X,placeholder:W.length===0?i:K?`Limit ${x} reached`:c,className:u(`flex-1 bg-transparent outline-none text-fg-default placeholder:text-fg-tertiary disabled:cursor-not-allowed`,!S&&`cursor-pointer`,h[r].input)})]}),I&&!l&&!K&&(0,m.jsxs)(`div`,{className:`absolute top-full left-0 right-0 mt-1 z-20 max-h-80 overflow-y-auto rounded-lg border border-border-default bg-bg-default shadow-z4`,children:[(0,m.jsxs)(`div`,{className:`px-3 py-2 border-b border-border-subtle flex items-center gap-2 text-p-sm text-fg-tertiary`,children:[(0,m.jsx)(a,{className:`w-3.5 h-3.5 shrink-0`}),(0,m.jsx)(`span`,{className:`truncate`,children:P?`Matches for "${P}"`:C})]}),G.length===0?(0,m.jsxs)(`div`,{className:`px-3 py-6 text-center`,children:[(0,m.jsx)(o,{className:`w-5 h-5 mx-auto text-fg-tertiary mb-2`}),(0,m.jsx)(`span`,{className:`text-p-sm text-fg-secondary`,children:w})]}):(0,m.jsx)(`ul`,{role:`listbox`,id:M,className:`py-1`,children:G.map((e,t)=>(0,m.jsx)(`li`,{role:`option`,id:`${M}-opt-${t}`,"aria-selected":t===R,"aria-disabled":e.disabled||void 0,children:(0,m.jsxs)(`button`,{type:`button`,disabled:e.disabled,onMouseEnter:()=>z(t),onMouseDown:t=>{t.preventDefault(),q(e.value)},className:u(`w-full px-3 py-2 flex items-center gap-3 text-left transition`,e.disabled?`opacity-50 cursor-not-allowed`:t===R?`bg-bg-subtle`:`hover:bg-bg-subtle`),children:[e.avatarSrc&&(0,m.jsx)(d,{src:e.avatarSrc,name:e.label,size:`sm`}),(0,m.jsxs)(`span`,{className:`flex-1 min-w-0`,children:[(0,m.jsx)(`span`,{className:`block text-p-std font-medium text-fg-default truncate`,children:e.label}),e.description&&(0,m.jsx)(`span`,{className:`block text-p-sm text-fg-secondary truncate`,children:e.description})]})]})},e.value))})]})]}),v?(0,m.jsx)(`p`,{id:`${j}-error`,className:`text-p-sm text-red-700`,children:v}):_?(0,m.jsx)(`p`,{id:`${j}-help`,className:`text-p-sm text-fg-secondary`,children:_}):null]})});try{g.displayName=`MultiSelect`,g.__docgenInfo={description:``,displayName:`MultiSelect`,filePath:`/home/runner/work/design-system/design-system/src/components/MultiSelect/MultiSelect.tsx`,methods:[],props:{options:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`options`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!0,tags:{},type:{name:`MultiSelectOption[]`}},value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:`Selected option values (controlled).`,name:`value`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!0,tags:{},type:{name:`string[]`}},onChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`onChange`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!0,tags:{},type:{name:`(values: string[]) => void`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`enum`,raw:`MultiSelectSize`,value:[{value:`"md"`},{value:`"sm"`},{value:`"lg"`}]}},placeholder:{defaultValue:{value:`Select…`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`placeholder`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},addMorePlaceholder:{defaultValue:{value:`Add another…`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:`Placeholder once at least one chip exists. Defaults to "Add another…".`,name:`addMorePlaceholder`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`disabled`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`boolean`}},error:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`error`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`boolean`}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`label`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`ReactNode`}},helperText:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`helperText`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`ReactNode`}},errorText:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`errorText`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`ReactNode`}},required:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`required`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`boolean`}},lockedValues:{defaultValue:{value:`[]`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:`Values whose chips can't be removed.`,name:`lockedValues`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string[]`}},max:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:`Cap on how many can be selected (default: unlimited).`,name:`max`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`number`}},searchable:{defaultValue:{value:`true`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:`Set false for a click-to-open picker with no text filter.`,name:`searchable`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`boolean`}},suggestionsLabel:{defaultValue:{value:`Suggestions`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:`Dropdown header shown when the query is empty.`,name:`suggestionsLabel`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},emptyText:{defaultValue:{value:`No matches. Try a different search.`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:`Message shown when nothing matches.`,name:`emptyText`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},id:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`id`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`className`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},wrapperClassName:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`wrapperClassName`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),v=e({AllSizes:()=>F,Disabled:()=>O,Empty:()=>N,LockedValues:()=>A,MaxReached:()=>j,NotSearchable:()=>M,Primary:()=>w,WithAvatarsAndBadges:()=>k,WithError:()=>D,WithHelperText:()=>E,WithLabel:()=>T,__namedExportsOrder:()=>I,default:()=>C}),y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L=t((()=>{y=n(r(),1),_(),b=i(),x=[{value:`design`,label:`Design`},{value:`engineering`,label:`Engineering`},{value:`product`,label:`Product`},{value:`marketing`,label:`Marketing`},{value:`sales`,label:`Sales`},{value:`legal`,label:`Legal (disabled)`,disabled:!0},{value:`hr`,label:`People Ops`}],S=[{value:`ada`,label:`Ada Lovelace`,description:`Engineering · London`,avatarSrc:`https://i.pravatar.cc/64?img=47`},{value:`grace`,label:`Grace Hopper`,description:`Engineering · Remote`,avatarSrc:`https://i.pravatar.cc/64?img=48`,badge:`You`},{value:`alan`,label:`Alan Turing`,description:`Research · Cambridge`,avatarSrc:`https://i.pravatar.cc/64?img=12`},{value:`margaret`,label:`Margaret Hamilton`,description:`Engineering · Boston`,avatarSrc:`https://i.pravatar.cc/64?img=32`},{value:`katherine`,label:`Katherine Johnson`,description:`Data Science · Remote (disabled)`,avatarSrc:`https://i.pravatar.cc/64?img=44`,disabled:!0}],C={title:`Components/MultiSelect`,component:g,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]}},args:{options:x,placeholder:`Select teams…`,size:`md`,disabled:!1,error:!1,searchable:!0},decorators:[e=>(0,b.jsx)(`div`,{className:`w-96`,children:(0,b.jsx)(e,{})})]},w={render:e=>{function t(){let[t,n]=(0,y.useState)([`design`]);return(0,b.jsx)(g,{...e,value:t,onChange:n})}return(0,b.jsx)(t,{})}},T={render:e=>{function t(){let[t,n]=(0,y.useState)([]);return(0,b.jsx)(g,{...e,value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{label:`Teams`,required:!0}},E={render:e=>{function t(){let[t,n]=(0,y.useState)([`engineering`]);return(0,b.jsx)(g,{...e,value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{label:`Teams`,helperText:`Select every team involved in this project.`}},D={render:e=>{function t(){let[t,n]=(0,y.useState)([]);return(0,b.jsx)(g,{...e,value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{label:`Teams`,error:!0,errorText:`Select at least one team.`}},O={render:e=>{function t(){let[t,n]=(0,y.useState)([`design`,`product`]);return(0,b.jsx)(g,{...e,value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{label:`Teams`,disabled:!0}},k={name:`People picker (avatars, descriptions, badges)`,render:e=>{function t(){let[t,n]=(0,y.useState)([`grace`]);return(0,b.jsx)(g,{...e,value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{options:S,label:`Reviewers`,placeholder:`Add reviewers…`,suggestionsLabel:`Team members`}},A={render:e=>{function t(){let[t,n]=(0,y.useState)([`grace`,`ada`]);return(0,b.jsx)(g,{...e,value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{options:S,label:`Reviewers`,lockedValues:[`grace`],helperText:`"Grace Hopper" is the requester and can't be removed.`}},j={render:e=>{function t(){let[t,n]=(0,y.useState)([`design`,`engineering`]);return(0,b.jsx)(g,{...e,value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{label:`Teams`,max:2,helperText:`Up to 2 teams.`}},M={name:`Click-to-open (searchable=false)`,render:e=>{function t(){let[t,n]=(0,y.useState)([]);return(0,b.jsx)(g,{...e,value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{label:`Teams`,searchable:!1}},N={render:e=>{function t(){let[t,n]=(0,y.useState)([]);return(0,b.jsx)(g,{...e,value:t,onChange:n})}return(0,b.jsx)(t,{})},args:{options:[],label:`Teams`}},P=[`sm`,`md`,`lg`],F={render:e=>{function t(){let[t,n]=(0,y.useState)([`design`]);return(0,b.jsx)(`div`,{className:`flex flex-col gap-4`,children:P.map(r=>(0,b.jsx)(g,{...e,size:r,value:t,onChange:n,label:r},r))})}return(0,b.jsx)(t,{})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<string[]>(['design']);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<string[]>([]);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    required: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<string[]>(['engineering']);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    helperText: 'Select every team involved in this project.'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<string[]>([]);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    error: true,
    errorText: 'Select at least one team.'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<string[]>(['design', 'product']);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    disabled: true
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'People picker (avatars, descriptions, badges)',
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<string[]>(['grace']);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    options: peopleOptions,
    label: 'Reviewers',
    placeholder: 'Add reviewers…',
    suggestionsLabel: 'Team members'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<string[]>(['grace', 'ada']);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    options: peopleOptions,
    label: 'Reviewers',
    lockedValues: ['grace'],
    helperText: '"Grace Hopper" is the requester and can\\'t be removed.'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<string[]>(['design', 'engineering']);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    max: 2,
    helperText: 'Up to 2 teams.'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Click-to-open (searchable=false)',
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<string[]>([]);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    searchable: false
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<string[]>([]);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    options: [],
    label: 'Teams'
  }
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<string[]>(['design']);
      return <div className="flex flex-col gap-4">
          {SIZES.map(size => <MultiSelect key={size} {...args} size={size} value={value} onChange={setValue} label={size} />)}
        </div>;
    }
    return <Controlled />;
  }
}`,...F.parameters?.docs?.source}}},I=[`Primary`,`WithLabel`,`WithHelperText`,`WithError`,`Disabled`,`WithAvatarsAndBadges`,`LockedValues`,`MaxReached`,`NotSearchable`,`Empty`,`AllSizes`]}));L();export{F as AllSizes,O as Disabled,N as Empty,A as LockedValues,j as MaxReached,M as NotSearchable,w as Primary,k as WithAvatarsAndBadges,D as WithError,E as WithHelperText,T as WithLabel,I as __namedExportsOrder,C as default,L as n,v as t};