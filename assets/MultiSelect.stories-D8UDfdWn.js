import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-B_LPFnTU.js";import{Q as a,i as o,n as s,t as c,w as ee}from"./lucide-react-BozxDv4M.js";import{n as l,t as u}from"./cn-BNhCYuha.js";import{n as d,r as te,t as f}from"./optionValue-DydacNfb.js";import{t as p}from"./Avatar-d_o3koRv.js";import{t as m}from"./Tooltip-B7my4tDa.js";import{t as h}from"./Tooltip-DiafQc2E.js";import{t as g}from"./Avatar-B2E3Y6g9.js";var _,v,y,b,x=t((()=>{_=n(r(),1),c(),g(),l(),d(),v=i(),y={sm:{box:`px-1.5 py-1.5 gap-1`,chip:`h-6 pl-0.5 pr-1.5`,chipText:`text-p-xs`,input:`h-6 text-p-sm min-w-[100px]`,avatar:`xs`},md:{box:`px-2 py-2 gap-1.5`,chip:`h-7 pl-1 pr-2`,chipText:`text-p-sm`,input:`h-7 text-p-std min-w-[120px]`,avatar:`xs`},lg:{box:`px-2.5 py-2.5 gap-2`,chip:`h-8 pl-1 pr-2.5`,chipText:`text-p-std`,input:`h-8 text-p-md min-w-[140px]`,avatar:`sm`}},b=(0,_.forwardRef)(function({options:e,value:t,onChange:n,onAdd:r,onRemove:i,size:a=`md`,placeholder:c=`Select…`,addMorePlaceholder:l=`Add another…`,disabled:d=!1,error:m=!1,label:h,labelAddons:g,helperText:b,errorText:x,required:S=!1,lockedValues:C=[],max:w,searchable:T=!0,suggestionsLabel:E=`Suggestions`,emptyText:D=`No matches. Try a different search.`,showAvatars:O=!1,id:k,className:A,wrapperClassName:j,dataTestId:M},N){let P=(0,_.useId)(),F=k??P,I=`${F}-listbox`,L=m||!!x,[R,z]=(0,_.useState)(``),[B,V]=(0,_.useState)(!1),[H,U]=(0,_.useState)(0),W=(0,_.useRef)(null),G=(0,_.useRef)(null),K=e=>{G.current=e,typeof N==`function`?N(e):N&&(N.current=e)},q=(0,_.useMemo)(()=>new Map(e.map(e=>[String(e.value),e])),[e]),J=(0,_.useMemo)(()=>t.map(e=>q.get(String(e))).filter(e=>!!e),[t,q]),Y=(0,_.useMemo)(()=>{let n=R.trim().toLowerCase();return e.filter(e=>!f(t,e.value)&&(n===``||e.label.toLowerCase().includes(n)||(e.description??``).toLowerCase().includes(n)))},[e,t,R]),X=w!==void 0&&t.length>=w;(0,_.useEffect)(()=>{if(!B)return;let e=e=>{W.current&&!W.current.contains(e.target)&&V(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[B]),(0,_.useEffect)(()=>{U(e=>Math.min(e,Math.max(0,Y.length-1)))},[Y.length]);let Z=e=>{let i=q.get(String(e));d||X||!i||i.disabled||(n([...t,e]),r?.(i),z(``),U(0),G.current?.focus())},Q=e=>{d||f(C,e)||(n(t.filter(t=>!te(t,e))),i?.(e))},$=e=>{if(!Y.length)return;let t=H;for(let n=0;n<Y.length&&(t=(t+e+Y.length)%Y.length,Y[t]?.disabled);n++);U(t)},ne=e=>{if(e.key===`ArrowDown`)e.preventDefault(),B?$(1):V(!0);else if(e.key===`ArrowUp`)e.preventDefault(),$(-1);else if(e.key===`Enter`)B&&Y[H]&&!Y[H].disabled&&(e.preventDefault(),Z(Y[H].value));else if(e.key===`Escape`)V(!1);else if(e.key===`Backspace`&&R===``&&J.length>0){let e=[...J].reverse().find(e=>!f(C,e.value));e&&Q(e.value)}},re=x?`${F}-error`:b?`${F}-help`:void 0;return(0,v.jsxs)(`div`,{"data-test-id":M,className:u(`flex flex-col gap-1.5 w-full`,j),children:[(h||g)&&(0,v.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[h&&(0,v.jsxs)(`label`,{htmlFor:F,className:`text-p-std font-medium text-fg-default inline-flex items-center gap-1`,children:[h,S&&(0,v.jsx)(`span`,{className:`text-red-600`,"aria-hidden":!0,children:`*`})]}),g&&(0,v.jsx)(`span`,{className:`inline-flex items-center gap-1`,children:g})]}),(0,v.jsxs)(`div`,{ref:W,className:`relative`,children:[(0,v.jsxs)(`div`,{className:u(`flex flex-wrap items-center rounded-lg border bg-bg-default transition-colors`,y[a].box,d?`opacity-60 cursor-not-allowed border-border-default`:L?`border-red-500 focus-within:ring-2 focus-within:ring-red-300 focus-within:ring-offset-1 cursor-text`:`border-border-default hover:border-border-strong focus-within:border-fg-tertiary focus-within:ring-2 focus-within:ring-brand-300 focus-within:ring-offset-1 cursor-text`,A),onClick:()=>!d&&G.current?.focus(),children:[J.map(e=>{let t=f(C,e.value);return(0,v.jsxs)(`span`,{className:u(`inline-flex items-center gap-1.5 rounded-full text-fg-default bg-bg-subtle`,y[a].chip,y[a].chipText),title:e.description,children:[(O||e.avatarSrc)&&(0,v.jsx)(p,{src:e.avatarSrc,name:e.label,size:y[a].avatar}),(0,v.jsx)(`span`,{className:`font-medium`,children:e.label}),e.badge&&(0,v.jsx)(`span`,{className:`text-label-xxs uppercase tracking-wider opacity-70`,children:e.badge}),!t&&!d&&(0,v.jsx)(`button`,{type:`button`,onClick:t=>{t.stopPropagation(),Q(e.value)},"aria-label":`Remove ${e.label}`,className:`-mr-0.5 ml-0.5 text-fg-tertiary hover:text-fg-default p-0.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300`,children:(0,v.jsx)(s,{className:`w-3 h-3`})})]},String(e.value))}),(0,v.jsx)(`input`,{ref:K,id:F,type:`text`,role:`combobox`,"aria-expanded":B,"aria-controls":I,"aria-autocomplete":`list`,"aria-activedescendant":B&&Y[H]?`${I}-opt-${H}`:void 0,"aria-invalid":L||void 0,"aria-describedby":re,value:R,readOnly:!T,disabled:d||X,onChange:e=>{z(e.target.value),V(!0)},onFocus:()=>V(!0),onKeyDown:ne,placeholder:J.length===0?c:X?`Limit ${w} reached`:l,className:u(`flex-1 bg-transparent outline-none text-fg-default placeholder:text-fg-tertiary disabled:cursor-not-allowed`,!T&&`cursor-pointer`,y[a].input)})]}),B&&!d&&!X&&(0,v.jsxs)(`div`,{className:`absolute top-full left-0 right-0 mt-1 z-20 max-h-80 overflow-y-auto rounded-lg border border-border-default bg-bg-default shadow-z4`,children:[(0,v.jsxs)(`div`,{className:`px-3 py-2 border-b border-border-subtle flex items-center gap-2 text-p-sm text-fg-tertiary`,children:[(0,v.jsx)(ee,{className:`w-3.5 h-3.5 shrink-0`}),(0,v.jsx)(`span`,{className:`truncate`,children:R?`Matches for "${R}"`:E})]}),Y.length===0?(0,v.jsxs)(`div`,{className:`px-3 py-6 text-center`,children:[(0,v.jsx)(o,{className:`w-5 h-5 mx-auto text-fg-tertiary mb-2`}),(0,v.jsx)(`span`,{className:`text-p-sm text-fg-secondary`,children:D})]}):(0,v.jsx)(`ul`,{role:`listbox`,id:I,className:`py-1`,children:Y.map((e,t)=>(0,v.jsx)(`li`,{role:`option`,id:`${I}-opt-${t}`,"aria-selected":t===H,"aria-disabled":e.disabled||void 0,children:(0,v.jsxs)(`button`,{type:`button`,disabled:e.disabled,onMouseEnter:()=>U(t),onMouseDown:t=>{t.preventDefault(),Z(e.value)},className:u(`w-full px-3 py-2 flex items-center gap-3 text-left transition`,e.disabled?`opacity-50 cursor-not-allowed`:t===H?`bg-bg-subtle`:`hover:bg-bg-subtle`),children:[(O||e.avatarSrc)&&(0,v.jsx)(p,{src:e.avatarSrc,name:e.label,size:`sm`}),(0,v.jsxs)(`span`,{className:`flex-1 min-w-0`,children:[(0,v.jsx)(`span`,{className:`block text-p-std font-medium text-fg-default truncate`,children:e.label}),e.description&&(0,v.jsx)(`span`,{className:`block text-p-sm text-fg-secondary truncate`,children:e.description})]})]})},String(e.value)))})]})]}),x?(0,v.jsx)(`p`,{id:`${F}-error`,className:`text-p-sm text-red-700`,children:x}):b?(0,v.jsx)(`p`,{id:`${F}-help`,className:`text-p-sm text-fg-secondary`,children:b}):null]})});try{b.displayName=`MultiSelect`,b.__docgenInfo={description:``,displayName:`MultiSelect`,filePath:`/home/runner/work/design-system/design-system/src/components/MultiSelect/MultiSelect.tsx`,methods:[],props:{options:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`options`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!0,tags:{},type:{name:`MultiSelectOption[]`}},value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:`Selected option values (controlled).`,name:`value`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!0,tags:{},type:{name:`OptionValue[]`}},onChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`onChange`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!0,tags:{},type:{name:`(values: OptionValue[]) => void`}},onAdd:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:"Called with the option that was just added, alongside `onChange` (never instead of it).",name:`onAdd`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`((option: MultiSelectOption) => void)`}},onRemove:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:"Called with the value that was just removed, alongside `onChange` (never instead of it).",name:`onRemove`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`((value: OptionValue) => void)`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`enum`,raw:`MultiSelectSize`,value:[{value:`"lg"`},{value:`"md"`},{value:`"sm"`}]}},placeholder:{defaultValue:{value:`Select…`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`placeholder`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},addMorePlaceholder:{defaultValue:{value:`Add another…`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:`Placeholder once at least one chip exists. Defaults to "Add another…".`,name:`addMorePlaceholder`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`disabled`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`boolean`}},error:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`error`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`boolean`}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`label`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`ReactNode`}},labelAddons:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:"Content rendered on the label row, right of the label text and required marker — e.g. an info tooltip trigger. Rendered as a sibling of the `<label>`, not a child, so an interactive addon never steals focus into the field.",name:`labelAddons`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`ReactNode`}},helperText:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`helperText`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`ReactNode`}},errorText:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`errorText`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`ReactNode`}},required:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`required`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`boolean`}},lockedValues:{defaultValue:{value:`[]`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:`Values whose chips can't be removed.`,name:`lockedValues`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`OptionValue[]`}},max:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:`Cap on how many can be selected (default: unlimited).`,name:`max`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`number`}},showAvatars:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:"Renders an Avatar on every chip and dropdown row, falling back to initials derived from the option's `label` when it has no `avatarSrc`. Default `false` — avatars still render for options that already set `avatarSrc` regardless.",name:`showAvatars`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`boolean`}},searchable:{defaultValue:{value:`true`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:`Set false for a click-to-open picker with no text filter.`,name:`searchable`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`boolean`}},suggestionsLabel:{defaultValue:{value:`Suggestions`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:`Dropdown header shown when the query is empty.`,name:`suggestionsLabel`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},emptyText:{defaultValue:{value:`No matches. Try a different search.`},declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:`Message shown when nothing matches.`,name:`emptyText`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},id:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`id`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`className`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},wrapperClassName:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`wrapperClassName`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},isLoading:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`isLoading`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`boolean`}},language:{defaultValue:null,declarations:[{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`}],description:``,name:`language`,parent:{fileName:`design-system/src/components/MultiSelect/MultiSelect.types.ts`,name:`MultiSelectProps`},required:!1,tags:{},type:{name:`string`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),S=e({AllSizes:()=>W,Disabled:()=>N,Empty:()=>R,GranularCallbacks:()=>V,LockedValues:()=>F,MaxReached:()=>I,NotSearchable:()=>L,NumericValues:()=>H,Primary:()=>k,WithAvatarsAndBadges:()=>P,WithError:()=>M,WithHelperText:()=>j,WithInitialsAvatars:()=>B,WithLabel:()=>A,WithLabelAddons:()=>z,__namedExportsOrder:()=>G,default:()=>O}),C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K=t((()=>{C=n(r(),1),c(),x(),h(),w=i(),T=[{value:`design`,label:`Design`},{value:`engineering`,label:`Engineering`},{value:`product`,label:`Product`},{value:`marketing`,label:`Marketing`},{value:`sales`,label:`Sales`},{value:`legal`,label:`Legal (disabled)`,disabled:!0},{value:`hr`,label:`People Ops`}],E=[{value:`ada`,label:`Ada Lovelace`,description:`Engineering · London`,avatarSrc:`https://i.pravatar.cc/64?img=47`},{value:`grace`,label:`Grace Hopper`,description:`Engineering · Remote`,avatarSrc:`https://i.pravatar.cc/64?img=48`,badge:`You`},{value:`alan`,label:`Alan Turing`,description:`Research · Cambridge`,avatarSrc:`https://i.pravatar.cc/64?img=12`},{value:`margaret`,label:`Margaret Hamilton`,description:`Engineering · Boston`,avatarSrc:`https://i.pravatar.cc/64?img=32`},{value:`katherine`,label:`Katherine Johnson`,description:`Data Science · Remote (disabled)`,avatarSrc:`https://i.pravatar.cc/64?img=44`,disabled:!0}],D=[{value:101,label:`Ticket #101`},{value:102,label:`Ticket #102`},{value:103,label:`Ticket #103`}],O={title:`Components/MultiSelect`,component:b,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]}},args:{options:T,placeholder:`Select teams…`,size:`md`,disabled:!1,error:!1,searchable:!0},decorators:[e=>(0,w.jsx)(`div`,{className:`w-96`,children:(0,w.jsx)(e,{})})]},k={render:e=>{function t(){let[t,n]=(0,C.useState)([`design`]);return(0,w.jsx)(b,{...e,value:t,onChange:n})}return(0,w.jsx)(t,{})}},A={render:e=>{function t(){let[t,n]=(0,C.useState)([]);return(0,w.jsx)(b,{...e,value:t,onChange:n})}return(0,w.jsx)(t,{})},args:{label:`Teams`,required:!0}},j={render:e=>{function t(){let[t,n]=(0,C.useState)([`engineering`]);return(0,w.jsx)(b,{...e,value:t,onChange:n})}return(0,w.jsx)(t,{})},args:{label:`Teams`,helperText:`Select every team involved in this project.`}},M={render:e=>{function t(){let[t,n]=(0,C.useState)([]);return(0,w.jsx)(b,{...e,value:t,onChange:n})}return(0,w.jsx)(t,{})},args:{label:`Teams`,error:!0,errorText:`Select at least one team.`}},N={render:e=>{function t(){let[t,n]=(0,C.useState)([`design`,`product`]);return(0,w.jsx)(b,{...e,value:t,onChange:n})}return(0,w.jsx)(t,{})},args:{label:`Teams`,disabled:!0}},P={name:`People picker (avatars, descriptions, badges)`,render:e=>{function t(){let[t,n]=(0,C.useState)([`grace`]);return(0,w.jsx)(b,{...e,value:t,onChange:n})}return(0,w.jsx)(t,{})},args:{options:E,label:`Reviewers`,placeholder:`Add reviewers…`,suggestionsLabel:`Team members`}},F={render:e=>{function t(){let[t,n]=(0,C.useState)([`grace`,`ada`]);return(0,w.jsx)(b,{...e,value:t,onChange:n})}return(0,w.jsx)(t,{})},args:{options:E,label:`Reviewers`,lockedValues:[`grace`],helperText:`"Grace Hopper" is the requester and can't be removed.`}},I={render:e=>{function t(){let[t,n]=(0,C.useState)([`design`,`engineering`]);return(0,w.jsx)(b,{...e,value:t,onChange:n})}return(0,w.jsx)(t,{})},args:{label:`Teams`,max:2,helperText:`Up to 2 teams.`}},L={name:`Click-to-open (searchable=false)`,render:e=>{function t(){let[t,n]=(0,C.useState)([]);return(0,w.jsx)(b,{...e,value:t,onChange:n})}return(0,w.jsx)(t,{})},args:{label:`Teams`,searchable:!1}},R={render:e=>{function t(){let[t,n]=(0,C.useState)([]);return(0,w.jsx)(b,{...e,value:t,onChange:n})}return(0,w.jsx)(t,{})},args:{options:[],label:`Teams`}},z={name:`With label addons`,render:e=>{function t(){let[t,n]=(0,C.useState)([]);return(0,w.jsx)(b,{...e,value:t,onChange:n})}return(0,w.jsx)(t,{})},args:{label:`Teams`,labelAddons:(0,w.jsx)(m,{content:`Teams determine who gets notified about this project.`,children:(0,w.jsx)(`button`,{type:`button`,"aria-label":`More info`,className:`text-fg-tertiary hover:text-fg-default`,children:(0,w.jsx)(a,{className:`h-3.5 w-3.5`})})})}},B={name:`With initials avatars`,render:e=>{function t(){let[t,n]=(0,C.useState)([`design`]);return(0,w.jsx)(b,{...e,value:t,onChange:n})}return(0,w.jsx)(t,{})},args:{label:`Teams`,showAvatars:!0}},V={name:`Granular add/remove callbacks`,render:e=>{function t(){let[t,n]=(0,C.useState)([`design`]),[r,i]=(0,C.useState)([]);return(0,w.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,w.jsx)(b,{...e,value:t,onChange:n,onAdd:e=>i(t=>[`+ ${e.label}`,...t]),onRemove:e=>i(t=>[`- ${e}`,...t])}),(0,w.jsx)(`ul`,{className:`text-p-sm text-fg-secondary font-mono`,children:r.map((e,t)=>(0,w.jsx)(`li`,{children:e},t))})]})}return(0,w.jsx)(t,{})},args:{label:`Teams`}},H={name:`Numeric values (round-trip through onChange)`,render:e=>{function t(){let[t,n]=(0,C.useState)([101]);return(0,w.jsx)(b,{...e,options:D,value:t,onChange:e=>n(e)})}return(0,w.jsx)(t,{})}},U=[`sm`,`md`,`lg`],W={render:e=>{function t(){let[t,n]=(0,C.useState)([`design`]);return(0,w.jsx)(`div`,{className:`flex flex-col gap-4`,children:U.map(r=>(0,w.jsx)(b,{...e,size:r,value:t,onChange:n,label:r},r))})}return(0,w.jsx)(t,{})}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>(['design']);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>([]);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    required: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>(['engineering']);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    helperText: 'Select every team involved in this project.'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>([]);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    error: true,
    errorText: 'Select at least one team.'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>(['design', 'product']);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    disabled: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'People picker (avatars, descriptions, badges)',
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>(['grace']);
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>(['grace', 'ada']);
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>(['design', 'engineering']);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    max: 2,
    helperText: 'Up to 2 teams.'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Click-to-open (searchable=false)',
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>([]);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    searchable: false
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>([]);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    options: [],
    label: 'Teams'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'With label addons',
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>([]);
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'With initials avatars',
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>(['design']);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    showAvatars: true
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Granular add/remove callbacks',
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>(['design']);
      const [log, setLog] = useState<(string | number)[]>([]);
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Numeric values (round-trip through onChange)',
  render: args => {
    function NumericMultiSelect() {
      const [value, setValue] = useState<(string | number)[]>([101]);
      return <MultiSelect {...args} options={idOptions} value={value} onChange={vals => setValue(vals)} />;
    }
    return <NumericMultiSelect />;
  }
}`,...H.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>(['design']);
      return <div className="flex flex-col gap-4">
          {SIZES.map(size => <MultiSelect key={size} {...args} size={size} value={value} onChange={setValue} label={size} />)}
        </div>;
    }
    return <Controlled />;
  }
}`,...W.parameters?.docs?.source}}},G=[`Primary`,`WithLabel`,`WithHelperText`,`WithError`,`Disabled`,`WithAvatarsAndBadges`,`LockedValues`,`MaxReached`,`NotSearchable`,`Empty`,`WithLabelAddons`,`WithInitialsAvatars`,`GranularCallbacks`,`NumericValues`,`AllSizes`]}));K();export{W as AllSizes,N as Disabled,R as Empty,V as GranularCallbacks,F as LockedValues,I as MaxReached,L as NotSearchable,H as NumericValues,k as Primary,P as WithAvatarsAndBadges,M as WithError,j as WithHelperText,B as WithInitialsAvatars,A as WithLabel,z as WithLabelAddons,G as __namedExportsOrder,O as default,K as n,S as t};