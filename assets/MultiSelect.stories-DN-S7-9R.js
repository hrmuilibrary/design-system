import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-CwcXNU-m.js";import{Q as a,i as o,n as s,t as c,w as l}from"./lucide-react-lf4oV1Yb.js";import{n as u,t as d}from"./cn-BNhCYuha.js";import{t as f}from"./Avatar-TxDfHDQ6.js";import{t as p}from"./Tooltip-CLZ09uc8.js";import{t as m}from"./Tooltip-CbBJxIIa.js";import{t as h}from"./Avatar-B3-e35aD.js";var g,_,v,y,b=t((()=>{g=n(r(),1),c(),h(),u(),_=i(),v={sm:{box:`px-1.5 py-1.5 gap-1`,chip:`h-6 pl-0.5 pr-1.5`,chipText:`text-p-xs`,input:`h-6 text-p-sm min-w-[100px]`,avatar:`xs`},md:{box:`px-2 py-2 gap-1.5`,chip:`h-7 pl-1 pr-2`,chipText:`text-p-sm`,input:`h-7 text-p-std min-w-[120px]`,avatar:`xs`},lg:{box:`px-2.5 py-2.5 gap-2`,chip:`h-8 pl-1 pr-2.5`,chipText:`text-p-std`,input:`h-8 text-p-md min-w-[140px]`,avatar:`sm`}},y=(0,g.forwardRef)(function({options:e,value:t,onChange:n,onAdd:r,onRemove:i,size:a=`md`,placeholder:c=`Select…`,addMorePlaceholder:u=`Add another…`,disabled:p=!1,error:m=!1,label:h,labelAddons:y,helperText:b,errorText:x,required:S=!1,lockedValues:C=[],max:w,searchable:T=!0,suggestionsLabel:E=`Suggestions`,emptyText:D=`No matches. Try a different search.`,showAvatars:O=!1,id:k,className:A,wrapperClassName:j,dataTestId:M},N){let P=(0,g.useId)(),F=k??P,I=`${F}-listbox`,L=m||!!x,[R,z]=(0,g.useState)(``),[B,V]=(0,g.useState)(!1),[H,U]=(0,g.useState)(0),W=(0,g.useRef)(null),G=(0,g.useRef)(null),K=e=>{G.current=e,typeof N==`function`?N(e):N&&(N.current=e)},q=(0,g.useMemo)(()=>new Map(e.map(e=>[e.value,e])),[e]),J=(0,g.useMemo)(()=>t.map(e=>q.get(e)).filter(e=>!!e),[t,q]),Y=(0,g.useMemo)(()=>{let n=R.trim().toLowerCase();return e.filter(e=>!t.includes(e.value)&&(n===``||e.label.toLowerCase().includes(n)||(e.description??``).toLowerCase().includes(n)))},[e,t,R]),X=w!==void 0&&t.length>=w;(0,g.useEffect)(()=>{if(!B)return;let e=e=>{W.current&&!W.current.contains(e.target)&&V(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[B]),(0,g.useEffect)(()=>{U(e=>Math.min(e,Math.max(0,Y.length-1)))},[Y.length]);let Z=e=>{let i=q.get(e);p||X||!i||i.disabled||(n([...t,e]),r?.(i),z(``),U(0),G.current?.focus())},Q=e=>{p||C.includes(e)||(n(t.filter(t=>t!==e)),i?.(e))},$=e=>{if(!Y.length)return;let t=H;for(let n=0;n<Y.length&&(t=(t+e+Y.length)%Y.length,Y[t]?.disabled);n++);U(t)},ee=e=>{if(e.key===`ArrowDown`)e.preventDefault(),B?$(1):V(!0);else if(e.key===`ArrowUp`)e.preventDefault(),$(-1);else if(e.key===`Enter`)B&&Y[H]&&!Y[H].disabled&&(e.preventDefault(),Z(Y[H].value));else if(e.key===`Escape`)V(!1);else if(e.key===`Backspace`&&R===``&&J.length>0){let e=[...J].reverse().find(e=>!C.includes(e.value));e&&Q(e.value)}},te=x?`${F}-error`:b?`${F}-help`:void 0;return(0,_.jsxs)(`div`,{"data-test-id":M,className:d(`flex flex-col gap-1.5 w-full`,j),children:[(h||y)&&(0,_.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[h&&(0,_.jsxs)(`label`,{htmlFor:F,className:`text-p-std font-medium text-fg-default inline-flex items-center gap-1`,children:[h,S&&(0,_.jsx)(`span`,{className:`text-red-600`,"aria-hidden":!0,children:`*`})]}),y&&(0,_.jsx)(`span`,{className:`inline-flex items-center gap-1`,children:y})]}),(0,_.jsxs)(`div`,{ref:W,className:`relative`,children:[(0,_.jsxs)(`div`,{className:d(`flex flex-wrap items-center rounded-lg border bg-bg-default transition-colors`,v[a].box,p?`opacity-60 cursor-not-allowed border-border-default`:L?`border-red-500 focus-within:ring-2 focus-within:ring-red-300 focus-within:ring-offset-1 cursor-text`:`border-border-default hover:border-border-strong focus-within:border-fg-tertiary focus-within:ring-2 focus-within:ring-brand-300 focus-within:ring-offset-1 cursor-text`,A),onClick:()=>!p&&G.current?.focus(),children:[J.map(e=>{let t=C.includes(e.value);return(0,_.jsxs)(`span`,{className:d(`inline-flex items-center gap-1.5 rounded-full text-fg-default bg-bg-subtle`,v[a].chip,v[a].chipText),title:e.description,children:[(O||e.avatarSrc)&&(0,_.jsx)(f,{src:e.avatarSrc,name:e.label,size:v[a].avatar}),(0,_.jsx)(`span`,{className:`font-medium`,children:e.label}),e.badge&&(0,_.jsx)(`span`,{className:`text-label-xxs uppercase tracking-wider opacity-70`,children:e.badge}),!t&&!p&&(0,_.jsx)(`button`,{type:`button`,onClick:t=>{t.stopPropagation(),Q(e.value)},"aria-label":`Remove ${e.label}`,className:`-mr-0.5 ml-0.5 text-fg-tertiary hover:text-fg-default p-0.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300`,children:(0,_.jsx)(s,{className:`w-3 h-3`})})]},e.value)}),(0,_.jsx)(`input`,{ref:K,id:F,type:`text`,role:`combobox`,"aria-expanded":B,"aria-controls":I,"aria-autocomplete":`list`,"aria-activedescendant":B&&Y[H]?`${I}-opt-${H}`:void 0,"aria-invalid":L||void 0,"aria-describedby":te,value:R,readOnly:!T,disabled:p||X,onChange:e=>{z(e.target.value),V(!0)},onFocus:()=>V(!0),onKeyDown:ee,placeholder:J.length===0?c:X?`Limit ${w} reached`:u,className:d(`flex-1 bg-transparent outline-none text-fg-default placeholder:text-fg-tertiary disabled:cursor-not-allowed`,!T&&`cursor-pointer`,v[a].input)})]}),B&&!p&&!X&&(0,_.jsxs)(`div`,{className:`absolute top-full left-0 right-0 mt-1 z-20 max-h-80 overflow-y-auto rounded-lg border border-border-default bg-bg-default shadow-z4`,children:[(0,_.jsxs)(`div`,{className:`px-3 py-2 border-b border-border-subtle flex items-center gap-2 text-p-sm text-fg-tertiary`,children:[(0,_.jsx)(l,{className:`w-3.5 h-3.5 shrink-0`}),(0,_.jsx)(`span`,{className:`truncate`,children:R?`Matches for "${R}"`:E})]}),Y.length===0?(0,_.jsxs)(`div`,{className:`px-3 py-6 text-center`,children:[(0,_.jsx)(o,{className:`w-5 h-5 mx-auto text-fg-tertiary mb-2`}),(0,_.jsx)(`span`,{className:`text-p-sm text-fg-secondary`,children:D})]}):(0,_.jsx)(`ul`,{role:`listbox`,id:I,className:`py-1`,children:Y.map((e,t)=>(0,_.jsx)(`li`,{role:`option`,id:`${I}-opt-${t}`,"aria-selected":t===H,"aria-disabled":e.disabled||void 0,children:(0,_.jsxs)(`button`,{type:`button`,disabled:e.disabled,onMouseEnter:()=>U(t),onMouseDown:t=>{t.preventDefault(),Z(e.value)},className:d(`w-full px-3 py-2 flex items-center gap-3 text-left transition`,e.disabled?`opacity-50 cursor-not-allowed`:t===H?`bg-bg-subtle`:`hover:bg-bg-subtle`),children:[(O||e.avatarSrc)&&(0,_.jsx)(f,{src:e.avatarSrc,name:e.label,size:`sm`}),(0,_.jsxs)(`span`,{className:`flex-1 min-w-0`,children:[(0,_.jsx)(`span`,{className:`block text-p-std font-medium text-fg-default truncate`,children:e.label}),e.description&&(0,_.jsx)(`span`,{className:`block text-p-sm text-fg-secondary truncate`,children:e.description})]})]})},e.value))})]})]}),x?(0,_.jsx)(`p`,{id:`${F}-error`,className:`text-p-sm text-red-700`,children:x}):b?(0,_.jsx)(`p`,{id:`${F}-help`,className:`text-p-sm text-fg-secondary`,children:b}):null]})});try{y.displayName=`MultiSelect`,y.__docgenInfo={description:``,displayName:`MultiSelect`,filePath:`/home/runner/work/design-system/design-system/src/components/MultiSelect/MultiSelect.tsx`,methods:[],props:{options:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`options`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!0,tags:{},type:{name:`MultiSelectOption[]`}},value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:`Selected option values (controlled).`,name:`value`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!0,tags:{},type:{name:`string[]`}},onChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`onChange`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!0,tags:{},type:{name:`(values: string[]) => void`}},onAdd:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:"Called with the option that was just added, alongside `onChange` (never instead of it).",name:`onAdd`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`((option: MultiSelectOption) => void)`}},onRemove:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:"Called with the value that was just removed, alongside `onChange` (never instead of it).",name:`onRemove`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`((value: string) => void)`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`enum`,raw:`MultiSelectSize`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}},placeholder:{defaultValue:{value:`Select…`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`placeholder`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},addMorePlaceholder:{defaultValue:{value:`Add another…`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:`Placeholder once at least one chip exists. Defaults to "Add another…".`,name:`addMorePlaceholder`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`disabled`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`boolean`}},error:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`error`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`boolean`}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`label`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`ReactNode`}},labelAddons:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:"Content rendered on the label row, right of the label text and required marker — e.g. an info tooltip trigger. Rendered as a sibling of the `<label>`, not a child, so an interactive addon never steals focus into the field.",name:`labelAddons`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`ReactNode`}},helperText:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`helperText`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`ReactNode`}},errorText:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`errorText`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`ReactNode`}},required:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`required`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`boolean`}},lockedValues:{defaultValue:{value:`[]`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:`Values whose chips can't be removed.`,name:`lockedValues`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string[]`}},max:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:`Cap on how many can be selected (default: unlimited).`,name:`max`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`number`}},showAvatars:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:"Renders an Avatar on every chip and dropdown row, falling back to initials derived from the option's `label` when it has no `avatarSrc`. Default `false` — avatars still render for options that already set `avatarSrc` regardless.",name:`showAvatars`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`boolean`}},searchable:{defaultValue:{value:`true`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:`Set false for a click-to-open picker with no text filter.`,name:`searchable`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`boolean`}},suggestionsLabel:{defaultValue:{value:`Suggestions`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:`Dropdown header shown when the query is empty.`,name:`suggestionsLabel`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},emptyText:{defaultValue:{value:`No matches. Try a different search.`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:`Message shown when nothing matches.`,name:`emptyText`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},id:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`id`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`className`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},wrapperClassName:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`wrapperClassName`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),x=e({AllSizes:()=>V,Disabled:()=>j,Empty:()=>I,GranularCallbacks:()=>z,LockedValues:()=>N,MaxReached:()=>P,NotSearchable:()=>F,Primary:()=>D,WithAvatarsAndBadges:()=>M,WithError:()=>A,WithHelperText:()=>k,WithInitialsAvatars:()=>R,WithLabel:()=>O,WithLabelAddons:()=>L,__namedExportsOrder:()=>H,default:()=>E}),S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U=t((()=>{S=n(r(),1),c(),b(),m(),C=i(),w=[{value:`design`,label:`Design`},{value:`engineering`,label:`Engineering`},{value:`product`,label:`Product`},{value:`marketing`,label:`Marketing`},{value:`sales`,label:`Sales`},{value:`legal`,label:`Legal (disabled)`,disabled:!0},{value:`hr`,label:`People Ops`}],T=[{value:`ada`,label:`Ada Lovelace`,description:`Engineering · London`,avatarSrc:`https://i.pravatar.cc/64?img=47`},{value:`grace`,label:`Grace Hopper`,description:`Engineering · Remote`,avatarSrc:`https://i.pravatar.cc/64?img=48`,badge:`You`},{value:`alan`,label:`Alan Turing`,description:`Research · Cambridge`,avatarSrc:`https://i.pravatar.cc/64?img=12`},{value:`margaret`,label:`Margaret Hamilton`,description:`Engineering · Boston`,avatarSrc:`https://i.pravatar.cc/64?img=32`},{value:`katherine`,label:`Katherine Johnson`,description:`Data Science · Remote (disabled)`,avatarSrc:`https://i.pravatar.cc/64?img=44`,disabled:!0}],E={title:`Components/MultiSelect`,component:y,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]}},args:{options:w,placeholder:`Select teams…`,size:`md`,disabled:!1,error:!1,searchable:!0},decorators:[e=>(0,C.jsx)(`div`,{className:`w-96`,children:(0,C.jsx)(e,{})})]},D={render:e=>{function t(){let[t,n]=(0,S.useState)([`design`]);return(0,C.jsx)(y,{...e,value:t,onChange:n})}return(0,C.jsx)(t,{})}},O={render:e=>{function t(){let[t,n]=(0,S.useState)([]);return(0,C.jsx)(y,{...e,value:t,onChange:n})}return(0,C.jsx)(t,{})},args:{label:`Teams`,required:!0}},k={render:e=>{function t(){let[t,n]=(0,S.useState)([`engineering`]);return(0,C.jsx)(y,{...e,value:t,onChange:n})}return(0,C.jsx)(t,{})},args:{label:`Teams`,helperText:`Select every team involved in this project.`}},A={render:e=>{function t(){let[t,n]=(0,S.useState)([]);return(0,C.jsx)(y,{...e,value:t,onChange:n})}return(0,C.jsx)(t,{})},args:{label:`Teams`,error:!0,errorText:`Select at least one team.`}},j={render:e=>{function t(){let[t,n]=(0,S.useState)([`design`,`product`]);return(0,C.jsx)(y,{...e,value:t,onChange:n})}return(0,C.jsx)(t,{})},args:{label:`Teams`,disabled:!0}},M={name:`People picker (avatars, descriptions, badges)`,render:e=>{function t(){let[t,n]=(0,S.useState)([`grace`]);return(0,C.jsx)(y,{...e,value:t,onChange:n})}return(0,C.jsx)(t,{})},args:{options:T,label:`Reviewers`,placeholder:`Add reviewers…`,suggestionsLabel:`Team members`}},N={render:e=>{function t(){let[t,n]=(0,S.useState)([`grace`,`ada`]);return(0,C.jsx)(y,{...e,value:t,onChange:n})}return(0,C.jsx)(t,{})},args:{options:T,label:`Reviewers`,lockedValues:[`grace`],helperText:`"Grace Hopper" is the requester and can't be removed.`}},P={render:e=>{function t(){let[t,n]=(0,S.useState)([`design`,`engineering`]);return(0,C.jsx)(y,{...e,value:t,onChange:n})}return(0,C.jsx)(t,{})},args:{label:`Teams`,max:2,helperText:`Up to 2 teams.`}},F={name:`Click-to-open (searchable=false)`,render:e=>{function t(){let[t,n]=(0,S.useState)([]);return(0,C.jsx)(y,{...e,value:t,onChange:n})}return(0,C.jsx)(t,{})},args:{label:`Teams`,searchable:!1}},I={render:e=>{function t(){let[t,n]=(0,S.useState)([]);return(0,C.jsx)(y,{...e,value:t,onChange:n})}return(0,C.jsx)(t,{})},args:{options:[],label:`Teams`}},L={name:`With label addons`,render:e=>{function t(){let[t,n]=(0,S.useState)([]);return(0,C.jsx)(y,{...e,value:t,onChange:n})}return(0,C.jsx)(t,{})},args:{label:`Teams`,labelAddons:(0,C.jsx)(p,{content:`Teams determine who gets notified about this project.`,children:(0,C.jsx)(`button`,{type:`button`,"aria-label":`More info`,className:`text-fg-tertiary hover:text-fg-default`,children:(0,C.jsx)(a,{className:`h-3.5 w-3.5`})})})}},R={name:`With initials avatars`,render:e=>{function t(){let[t,n]=(0,S.useState)([`design`]);return(0,C.jsx)(y,{...e,value:t,onChange:n})}return(0,C.jsx)(t,{})},args:{label:`Teams`,showAvatars:!0}},z={name:`Granular add/remove callbacks`,render:e=>{function t(){let[t,n]=(0,S.useState)([`design`]),[r,i]=(0,S.useState)([]);return(0,C.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,C.jsx)(y,{...e,value:t,onChange:n,onAdd:e=>i(t=>[`+ ${e.label}`,...t]),onRemove:e=>i(t=>[`- ${e}`,...t])}),(0,C.jsx)(`ul`,{className:`text-p-sm text-fg-secondary font-mono`,children:r.map((e,t)=>(0,C.jsx)(`li`,{children:e},t))})]})}return(0,C.jsx)(t,{})},args:{label:`Teams`}},B=[`sm`,`md`,`lg`],V={render:e=>{function t(){let[t,n]=(0,S.useState)([`design`]);return(0,C.jsx)(`div`,{className:`flex flex-col gap-4`,children:B.map(r=>(0,C.jsx)(y,{...e,size:r,value:t,onChange:n,label:r},r))})}return(0,C.jsx)(t,{})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<string[]>(['design']);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'With label addons',
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<string[]>([]);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    labelAddons: <Tooltip content="Teams determine who gets notified about this project.">
        <button type="button" aria-label="More info" className="text-fg-tertiary hover:text-fg-default">
          <Info className="h-3.5 w-3.5" />
        </button>
      </Tooltip>
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'With initials avatars',
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<string[]>(['design']);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    showAvatars: true
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Granular add/remove callbacks',
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<string[]>(['design']);
      const [log, setLog] = useState<string[]>([]);
      return <div className="flex flex-col gap-3">
          <MultiSelect {...args} value={value} onChange={setValue} onAdd={option => setLog(prev => [\`+ \${option.label}\`, ...prev])} onRemove={removedValue => setLog(prev => [\`- \${removedValue}\`, ...prev])} />
          <ul className="text-p-sm text-fg-secondary font-mono">
            {log.map((entry, i) => <li key={i}>{entry}</li>)}
          </ul>
        </div>;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams'
  }
}`,...z.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<string[]>(['design']);
      return <div className="flex flex-col gap-4">
          {SIZES.map(size => <MultiSelect key={size} {...args} size={size} value={value} onChange={setValue} label={size} />)}
        </div>;
    }
    return <Controlled />;
  }
}`,...V.parameters?.docs?.source}}},H=[`Primary`,`WithLabel`,`WithHelperText`,`WithError`,`Disabled`,`WithAvatarsAndBadges`,`LockedValues`,`MaxReached`,`NotSearchable`,`Empty`,`WithLabelAddons`,`WithInitialsAvatars`,`GranularCallbacks`,`AllSizes`]}));U();export{V as AllSizes,j as Disabled,I as Empty,z as GranularCallbacks,N as LockedValues,P as MaxReached,F as NotSearchable,D as Primary,M as WithAvatarsAndBadges,A as WithError,k as WithHelperText,R as WithInitialsAvatars,O as WithLabel,L as WithLabelAddons,H as __namedExportsOrder,E as default,U as n,x as t};