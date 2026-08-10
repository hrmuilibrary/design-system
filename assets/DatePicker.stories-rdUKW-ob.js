import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-DDx-spus.js";import{Bt as a,Mt as o,Pt as s,t as c}from"./lucide-react-CzpjM2Un.js";import{n as l,t as u}from"./cn-BNhCYuha.js";function d(e){return new Date(e.getFullYear(),e.getMonth(),1)}function f(e,t){return!!e&&!!t&&e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function p(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function m(e,t,n,r){let i=p(e).getTime();return t&&i<p(t).getTime()||n&&i>p(n).getTime()?!0:!!r?.some(t=>f(t,e))}function h(e){return`${String(e.getDate()).padStart(2,`0`)}.${String(e.getMonth()+1).padStart(2,`0`)}.${e.getFullYear()}`}function g(e){let t=(d(e).getDay()+6)%7,n=new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),r=[];for(let e=0;e<t;e++)r.push(null);for(let t=1;t<=n;t++)r.push(new Date(e.getFullYear(),e.getMonth(),t));for(;r.length%7!=0;)r.push(null);return r}var _,v,y,b,x,S,C=t((()=>{_=n(r(),1),c(),l(),v=i(),y={lg:`h-12 text-p-md px-3.5`,md:`h-10 text-p-std px-3`,sm:`h-8 text-p-sm px-2.5`},b=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],x=[`Mo`,`Tu`,`We`,`Th`,`Fr`,`Sa`,`Su`],S=(0,_.forwardRef)(function({value:e,onChange:t,range:n=!1,rangeValue:r,onChangeRange:i,size:c=`md`,label:l,placeholder:d=`Select date`,fullWidth:p=!1,disabled:S=!1,minDate:C,maxDate:w,excludeDates:T,error:E=!1,errorText:D,id:O,className:k,wrapperClassName:A,dataTestId:j},M){let N=(0,_.useId)(),P=O??N,[F,I]=(0,_.useState)(!1),[L,R]=(0,_.useState)(e??r?.start??new Date),[z,B]=(0,_.useState)(null),V=(0,_.useRef)(null),H=E||!!D,U=D?`${P}-error`:void 0;(0,_.useEffect)(()=>{S&&I(!1)},[S]),(0,_.useEffect)(()=>{if(!F)return;let e=e=>{V.current&&!V.current.contains(e.target)&&I(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[F]);let W=n?r?.start?`${h(r.start)}${r.end?` – ${h(r.end)}`:``}`:``:e?h(e):``;function G(e){if(!n){t?.(e),I(!1);return}let a=r??{start:null,end:null};if(!a.start||a.start&&a.end){i?.({start:e,end:null});return}if(e<a.start){i?.({start:e,end:a.start});return}i?.({start:a.start,end:e}),I(!1)}let K=g(L),q=r??{start:null,end:null},J=q.end??z;return(0,v.jsxs)(`div`,{ref:V,"data-test-id":j,className:u(`flex flex-col gap-1.5`,p&&`w-full`,A),children:[l&&(0,v.jsx)(`label`,{htmlFor:P,className:`text-p-std font-medium text-fg-default inline-flex`,children:l}),(0,v.jsxs)(`div`,{className:`relative`,children:[(0,v.jsxs)(`button`,{ref:M,id:P,type:`button`,disabled:S,"aria-invalid":H||void 0,"aria-describedby":U,onClick:()=>I(e=>!e),className:u(`inline-flex items-center gap-2 rounded-lg border bg-bg-default text-left transition-colors focus-visible:outline-none focus-visible:ring-2`,H?`border-red-600`:`border-border-default`,!S&&!H&&`hover:border-border-strong`,H?`focus-visible:ring-red-300 focus-visible:border-red-600`:`focus-visible:ring-brand-300 focus-visible:border-brand-500`,S&&`bg-bg-container border-border-default cursor-not-allowed text-fg-disabled`,p?`w-full min-w-0`:`min-w-[260px]`,y[c],k),children:[(0,v.jsx)(`span`,{className:u(`flex-1 text-left truncate`,S?`text-fg-disabled`:W?`text-fg-default`:`text-fg-tertiary`),children:W||d}),(0,v.jsx)(a,{className:u(`w-4 h-4`,S?`text-fg-disabled`:`text-fg-secondary`)})]}),F&&(0,v.jsxs)(`div`,{className:`absolute z-50 mt-1 left-0 rounded-xl border border-border-default bg-bg-default shadow-z3 p-3 w-[300px]`,children:[(0,v.jsxs)(`div`,{className:`flex items-center justify-between mb-2`,children:[(0,v.jsx)(`button`,{type:`button`,className:`w-8 h-8 rounded-md hover:bg-bg-container flex items-center justify-center text-fg-secondary`,onClick:()=>R(new Date(L.getFullYear(),L.getMonth()-1,1)),"aria-label":`Previous month`,children:(0,v.jsx)(s,{className:`w-4 h-4`})}),(0,v.jsxs)(`div`,{className:`text-p-md font-semibold text-fg-default`,children:[b[L.getMonth()],` `,L.getFullYear()]}),(0,v.jsx)(`button`,{type:`button`,className:`w-8 h-8 rounded-md hover:bg-bg-container flex items-center justify-center text-fg-secondary`,onClick:()=>R(new Date(L.getFullYear(),L.getMonth()+1,1)),"aria-label":`Next month`,children:(0,v.jsx)(o,{className:`w-4 h-4`})})]}),(0,v.jsxs)(`div`,{className:`grid grid-cols-7 gap-1 text-center`,children:[x.map(e=>(0,v.jsx)(`div`,{className:`text-p-xs text-fg-tertiary py-1`,children:e},e)),K.map((t,r)=>{if(!t)return(0,v.jsx)(`div`,{},r);let i=m(t,C,w,T),a=!n&&f(t,e??null),o=n&&f(t,q.start),s=n&&f(t,J),c=n&&!!q.start&&!!J&&t>q.start&&t<J;return(0,v.jsx)(`button`,{type:`button`,disabled:i,"aria-disabled":i||void 0,onMouseEnter:()=>!i&&n&&q.start&&!q.end&&B(t),onClick:()=>!i&&G(t),className:u(`h-8 rounded-md text-p-sm font-medium`,i?`text-fg-disabled cursor-not-allowed`:a||o||s?`bg-brand-500 text-white`:c?`bg-bg-brand-lighter text-brand-700`:`text-fg-default hover:bg-bg-container`),children:t.getDate()},r)})]})]})]}),D?(0,v.jsx)(`p`,{id:`${P}-error`,className:`text-p-sm text-red-700`,children:D}):null]})});try{S.displayName=`DatePicker`,S.__docgenInfo={description:``,displayName:`DatePicker`,filePath:`/home/runner/work/design-system/design-system/src/components/DatePicker/DatePicker.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:``,name:`value`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`Date | null`}},onChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:``,name:`onChange`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`((date: Date) => void)`}},range:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:`Enable range-selection mode.`,name:`range`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`boolean`}},rangeValue:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:``,name:`rangeValue`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`DateRange`}},onChangeRange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:``,name:`onChangeRange`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`((range: DateRange) => void)`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`enum`,raw:`DatePickerSize`,value:[{value:`"sm"`},{value:`"md"`},{value:`"lg"`}]}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:``,name:`label`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`ReactNode`}},placeholder:{defaultValue:{value:`Select date`},declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:``,name:`placeholder`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`string`}},fullWidth:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:`Fill the parent's width (like Input/Select) instead of the intrinsic
min-width. Use inside form grids so dates line up with other fields.`,name:`fullWidth`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`boolean`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:`Disable the trigger entirely — blocks both mouse and keyboard activation.`,name:`disabled`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`boolean`}},minDate:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:`Earliest selectable day, inclusive. Earlier days render disabled. Time-of-day is ignored.`,name:`minDate`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`Date`}},maxDate:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:`Latest selectable day, inclusive. Later days render disabled. Time-of-day is ignored.`,name:`maxDate`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`Date`}},excludeDates:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:`Individual days that can't be picked. Matched by calendar day; time-of-day is ignored.`,name:`excludeDates`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`Date[]`}},error:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:`Switch the trigger to the danger border/ring styles.`,name:`error`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`boolean`}},errorText:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:`Message rendered below the control; also switches the trigger to the danger styles.`,name:`errorText`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`ReactNode`}},id:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:``,name:`id`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:``,name:`className`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`string`}},wrapperClassName:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:``,name:`wrapperClassName`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`string`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),w=e({AllSizes:()=>z,Controlled:()=>A,Disabled:()=>N,ExcludedDates:()=>I,FullWidth:()=>M,MinMaxDates:()=>F,Primary:()=>O,RangeMode:()=>j,RangeWithMinMax:()=>L,WithError:()=>P,WithLabel:()=>k,__namedExportsOrder:()=>B,default:()=>D}),T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V=t((()=>{T=n(r(),1),C(),E=i(),D={title:`Components/DatePicker`,component:S,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`lg`,`md`,`sm`]}},args:{placeholder:`Select date`,size:`md`,fullWidth:!1,range:!1,disabled:!1,error:!1}},O={},k={args:{label:`Start date`}},A={render:e=>{function t(){let[t,n]=(0,T.useState)(new Date);return(0,E.jsx)(S,{...e,value:t,onChange:n})}return(0,E.jsx)(t,{})},args:{label:`Start date`}},j={render:e=>{function t(){let[t,n]=(0,T.useState)({start:null,end:null});return(0,E.jsx)(S,{...e,range:!0,rangeValue:t,onChangeRange:n})}return(0,E.jsx)(t,{})},args:{label:`Trip dates`,placeholder:`Select date range`}},M={args:{fullWidth:!0,label:`Start date`},decorators:[e=>(0,E.jsx)(`div`,{className:`w-96`,children:(0,E.jsx)(e,{})})]},N={args:{disabled:!0,label:`Start date`}},P={args:{label:`Start date`,error:!0,errorText:`Please select a valid date.`}},F={name:`Min/max dates`,render:e=>{function t(){let[t,n]=(0,T.useState)(null),r=new Date,i=new Date(r.getFullYear(),r.getMonth(),r.getDate()),a=new Date(r.getFullYear(),r.getMonth(),r.getDate()+14);return(0,E.jsx)(S,{...e,value:t,onChange:n,minDate:i,maxDate:a})}return(0,E.jsx)(t,{})},args:{label:`Appointment date`}},I={name:`Excluded dates`,render:e=>{function t(){let[t,n]=(0,T.useState)(null),r=new Date,i=[new Date(r.getFullYear(),r.getMonth(),r.getDate()+3),new Date(r.getFullYear(),r.getMonth(),r.getDate()+4)];return(0,E.jsx)(S,{...e,value:t,onChange:n,excludeDates:i})}return(0,E.jsx)(t,{})},args:{label:`Delivery date`}},L={name:`Range with min/max`,render:e=>{function t(){let[t,n]=(0,T.useState)({start:null,end:null}),r=new Date,i=new Date(r.getFullYear(),r.getMonth(),r.getDate()),a=new Date(r.getFullYear(),r.getMonth(),r.getDate()+30);return(0,E.jsx)(S,{...e,range:!0,rangeValue:t,onChangeRange:n,minDate:i,maxDate:a})}return(0,E.jsx)(t,{})},args:{label:`Trip dates`,placeholder:`Select date range`}},R=[`sm`,`md`,`lg`],z={render:e=>(0,E.jsx)(`div`,{className:`flex flex-col gap-4`,children:R.map(t=>(0,E.jsx)(S,{...e,size:t,label:t},t))})},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start date'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    function ControlledDatePicker() {
      const [value, setValue] = useState<Date | null>(new Date());
      return <DatePicker {...args} value={value} onChange={setValue} />;
    }
    return <ControlledDatePicker />;
  },
  args: {
    label: 'Start date'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    function ControlledRangePicker() {
      const [range, setRange] = useState<DateRange>({
        start: null,
        end: null
      });
      return <DatePicker {...args} range rangeValue={range} onChangeRange={setRange} />;
    }
    return <ControlledRangePicker />;
  },
  args: {
    label: 'Trip dates',
    placeholder: 'Select date range'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    label: 'Start date'
  },
  decorators: [Story => <div className="w-96">
        <Story />
      </div>]
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Start date'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start date',
    error: true,
    errorText: 'Please select a valid date.'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Min/max dates',
  render: args => {
    function MinMaxDemo() {
      const [value, setValue] = useState<Date | null>(null);
      const today = new Date();
      const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14);
      return <DatePicker {...args} value={value} onChange={setValue} minDate={minDate} maxDate={maxDate} />;
    }
    return <MinMaxDemo />;
  },
  args: {
    label: 'Appointment date'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Excluded dates',
  render: args => {
    function ExcludedDemo() {
      const [value, setValue] = useState<Date | null>(null);
      const today = new Date();
      const excludeDates = [new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3), new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4)];
      return <DatePicker {...args} value={value} onChange={setValue} excludeDates={excludeDates} />;
    }
    return <ExcludedDemo />;
  },
  args: {
    label: 'Delivery date'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Range with min/max',
  render: args => {
    function RangeMinMaxDemo() {
      const [range, setRange] = useState<DateRange>({
        start: null,
        end: null
      });
      const today = new Date();
      const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
      return <DatePicker {...args} range rangeValue={range} onChangeRange={setRange} minDate={minDate} maxDate={maxDate} />;
    }
    return <RangeMinMaxDemo />;
  },
  args: {
    label: 'Trip dates',
    placeholder: 'Select date range'
  }
}`,...L.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      {SIZES.map(size => <DatePicker key={size} {...args} size={size} label={size} />)}
    </div>
}`,...z.parameters?.docs?.source}}},B=[`Primary`,`WithLabel`,`Controlled`,`RangeMode`,`FullWidth`,`Disabled`,`WithError`,`MinMaxDates`,`ExcludedDates`,`RangeWithMinMax`,`AllSizes`]}));V();export{z as AllSizes,A as Controlled,N as Disabled,I as ExcludedDates,M as FullWidth,F as MinMaxDates,O as Primary,j as RangeMode,L as RangeWithMinMax,P as WithError,k as WithLabel,B as __namedExportsOrder,D as default,V as n,w as t};