import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-Bhpt2FsH.js";import{Xt as a,n as o,t as s}from"./lucide-react-CUN-FJsr.js";import{n as c,t as l}from"./cn-BNhCYuha.js";import{t as u}from"./Checkbox-BCUH2f7s.js";import{t as d}from"./Checkbox-BOgWgjr2.js";function f(...e){return t=>{for(let n of e)n&&(typeof n==`function`?n(t):n.current=t)}}var p,m,h,g,_=t((()=>{p=n(r(),1),s(),c(),m=i(),h={lg:`h-10 px-3 text-p-std gap-2`,md:`h-9 px-2.5 text-p-std gap-1.5`,sm:`h-8 px-2 text-p-sm gap-1.5`},g=(0,p.forwardRef)(function({label:e,value:t,active:n=!1,size:r=`md`,disabled:i,onClear:s,children:c,className:u,dataTestId:d,...g},_){let[v,y]=(0,p.useState)(!1),b=(0,p.useRef)(null);(0,p.useEffect)(()=>{if(!v)return;let e=e=>{b.current?.contains(e.target)||y(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[v]);let x=n||t!==void 0;return(0,m.jsxs)(`div`,{ref:f(_,b),"data-test-id":d,className:l(`relative inline-flex`,u),...g,children:[(0,m.jsxs)(`button`,{type:`button`,disabled:i,onClick:()=>y(e=>!e),"aria-haspopup":`dialog`,"aria-expanded":v,className:l(`inline-flex items-center rounded-full border transition-colors outline-none`,h[r],x?`bg-brand-20 text-brand-800 border-brand-500`:`bg-bg-default text-fg-default border-border-default`,!i&&`hover:border-border-strong`,`focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-1`,i&&`bg-bg-container text-fg-disabled cursor-not-allowed`),children:[(0,m.jsx)(`span`,{className:`font-medium`,children:e}),t!==void 0&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`span`,{className:`mx-0.5 text-fg-tertiary`,"aria-hidden":!0,children:`•`}),(0,m.jsx)(`span`,{className:`font-semibold truncate max-w-[140px]`,children:t})]}),x&&s?(0,m.jsx)(`span`,{role:`button`,tabIndex:0,"aria-label":`Clear filter`,onClick:e=>{e.stopPropagation(),s()},onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),e.stopPropagation(),s())},className:`inline-flex items-center justify-center rounded-full p-0.5 hover:bg-black/10`,children:(0,m.jsx)(o,{className:`h-3 w-3`})}):(0,m.jsx)(a,{className:l(`h-4 w-4 text-fg-secondary transition-transform`,v&&`rotate-180`),"aria-hidden":!0})]}),v&&c&&(0,m.jsx)(`div`,{className:`absolute left-0 top-full mt-1 min-w-[220px] rounded-lg border border-border-default bg-bg-default shadow-z4 z-50 p-3`,children:c})]})});try{g.displayName=`Filter`,g.__docgenInfo={description:``,displayName:`Filter`,filePath:`/home/runner/work/design-system/design-system/src/components/Filter/Filter.tsx`,methods:[],props:{label:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Filter/Filter.types.ts`,name:`FilterProps`}],description:`Trigger label, always visible.`,name:`label`,parent:{fileName:`design-system/src/components/Filter/Filter.types.ts`,name:`FilterProps`},required:!0,tags:{},type:{name:`ReactNode`}},value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Filter/Filter.types.ts`,name:`FilterProps`}],description:'Selected value rendered after the label, separated by a dot. Its presence (even `""`) marks the filter as active.',name:`value`,parent:{fileName:`design-system/src/components/Filter/Filter.types.ts`,name:`FilterProps`},required:!1,tags:{},type:{name:`ReactNode`}},active:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/Filter/Filter.types.ts`,name:`FilterProps`}],description:"Forces the active (selected) visual style regardless of `value`.",name:`active`,parent:{fileName:`design-system/src/components/Filter/Filter.types.ts`,name:`FilterProps`},required:!1,tags:{},type:{name:`boolean`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/components/Filter/Filter.types.ts`,name:`FilterProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/Filter/Filter.types.ts`,name:`FilterProps`},required:!1,tags:{},type:{name:`enum`,raw:`FilterSize`,value:[{value:`"md"`},{value:`"sm"`},{value:`"lg"`}]}},disabled:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Filter/Filter.types.ts`,name:`FilterProps`}],description:``,name:`disabled`,parent:{fileName:`design-system/src/components/Filter/Filter.types.ts`,name:`FilterProps`},required:!1,tags:{},type:{name:`boolean`}},onClear:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Filter/Filter.types.ts`,name:`FilterProps`}],description:`Called when the clear (×) affordance is activated. Only rendered when the filter is active.`,name:`onClear`,parent:{fileName:`design-system/src/components/Filter/Filter.types.ts`,name:`FilterProps`},required:!1,tags:{},type:{name:`(() => void)`}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Filter/Filter.types.ts`,name:`FilterProps`}],description:`Popover content shown below the trigger while open.`,name:`children`,parent:{fileName:`design-system/src/components/Filter/Filter.types.ts`,name:`FilterProps`},required:!1,tags:{},type:{name:`ReactNode`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),v=e({Active:()=>C,AllSizes:()=>j,CustomClassName:()=>k,Default:()=>S,Disabled:()=>E,DisabledWithValue:()=>D,WithClearButton:()=>T,WithPopoverContent:()=>O,WithValue:()=>w,__namedExportsOrder:()=>M,default:()=>x}),y,b,x,S,C,w,T,E,D,O,k,A,j,M,N=t((()=>{y=n(r(),1),d(),_(),b=i(),x={title:`Components/Filter`,component:g,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`lg`,`md`,`sm`]}},args:{label:`Status`,size:`md`,active:!1,disabled:!1}},S={},C={args:{active:!0}},w={args:{value:`Active`}},T={name:`With value and clear affordance`,render:e=>{function t(){let[t,n]=(0,y.useState)(`Active`);return(0,b.jsx)(g,{...e,value:t,onClear:()=>n(void 0)})}return(0,b.jsx)(t,{})}},E={args:{disabled:!0}},D={args:{disabled:!0,value:`Active`}},O={name:`With popover content`,args:{label:`Department`},render:e=>(0,b.jsx)(g,{...e,children:(0,b.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,b.jsx)(u,{label:`Engineering`,size:`sm`}),(0,b.jsx)(u,{label:`Design`,size:`sm`}),(0,b.jsx)(u,{label:`Product`,size:`sm`})]})})},k={name:`Overriding classes via className`,args:{label:`Region`,value:`EMEA`,className:`shadow-z2`}},A=[`sm`,`md`,`lg`],j={render:e=>(0,b.jsx)(`div`,{className:`flex flex-wrap items-center gap-3`,children:A.map(t=>(0,b.jsx)(g,{...e,size:t,label:t,value:`Active`},t))})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    active: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Active'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'With value and clear affordance',
  render: args => {
    function Demo() {
      const [value, setValue] = useState<string | undefined>('Active');
      return <Filter {...args} value={value} onClear={() => setValue(undefined)} />;
    }
    return <Demo />;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: 'Active'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'With popover content',
  args: {
    label: 'Department'
  },
  render: args => <Filter {...args}>
      <div className="flex flex-col gap-2">
        <Checkbox label="Engineering" size="sm" />
        <Checkbox label="Design" size="sm" />
        <Checkbox label="Product" size="sm" />
      </div>
    </Filter>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    label: 'Region',
    value: 'EMEA',
    className: 'shadow-z2'
  }
}`,...k.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-wrap items-center gap-3">
      {SIZES.map(size => <Filter key={size} {...args} size={size} label={size} value="Active" />)}
    </div>
}`,...j.parameters?.docs?.source}}},M=[`Default`,`Active`,`WithValue`,`WithClearButton`,`Disabled`,`DisabledWithValue`,`WithPopoverContent`,`CustomClassName`,`AllSizes`]}));N();export{C as Active,j as AllSizes,k as CustomClassName,S as Default,E as Disabled,D as DisabledWithValue,T as WithClearButton,O as WithPopoverContent,w as WithValue,M as __namedExportsOrder,x as default,N as n,v as t};