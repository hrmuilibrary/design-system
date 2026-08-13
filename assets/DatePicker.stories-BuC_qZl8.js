import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-t6izEzqy.js";import{Jt as a,Kt as o,en as s,n as c,t as l}from"./lucide-react-B9RB1zgO.js";import{n as u,t as d}from"./cn-BNhCYuha.js";function f(e){try{return new Intl.Locale(e),e}catch{return`en`}}function p(e){try{let t=new Intl.Locale(e),n=t.weekInfo??t.getWeekInfo?.();if(n?.firstDay)return n.firstDay%7}catch{}let t=e.split(`-`)[1]?.toUpperCase();return!t&&e.toLowerCase()===`en`||t&&C.has(t)?0:1}function m(e){let t=new Intl.DateTimeFormat(e,{month:`short`});return Array.from({length:12},(e,n)=>t.format(new Date(2e3,n,1)))}function ee(e,t){let n=e.toLowerCase()===`en`?w:(()=>{let t=new Intl.DateTimeFormat(e,{weekday:`short`});return Array.from({length:7},(e,n)=>t.format(new Date(1970,0,4+n)))})();return[...n.slice(t),...n.slice(0,t)]}function h(e){return new Date(e.getFullYear(),e.getMonth(),1)}function g(e,t){return!!e&&!!t&&e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function _(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function v(e,t,n,r,i){let a=_(e).getTime();return t&&a<_(t).getTime()||n&&a>_(n).getTime()||r?.some(t=>g(t,e))?!0:!!i&&!i(e)}function y(e,t){let n=String(e.getDate()).padStart(2,`0`),r=String(e.getMonth()+1).padStart(2,`0`),i=String(e.getFullYear());return t.replace(/dd/g,n).replace(/MM/g,r).replace(/yyyy/g,i)}function te(e,t){let n=(h(e).getDay()-t+7)%7,r=new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),i=[];for(let e=0;e<n;e++)i.push(null);for(let t=1;t<=r;t++)i.push(new Date(e.getFullYear(),e.getMonth(),t));for(;i.length%7!=0;)i.push(null);return i}var b,x,S,C,w,T,E=t((()=>{b=n(r(),1),l(),u(),x=i(),S={lg:`h-12 text-p-md px-3.5`,md:`h-10 text-p-std px-3`,sm:`h-8 text-p-sm px-2.5`},C=new Set([`US`,`CA`,`MX`,`JP`,`BR`,`IL`,`PH`,`KR`,`TW`]),w=[`Su`,`Mo`,`Tu`,`We`,`Th`,`Fr`,`Sa`],T=(0,b.forwardRef)(function({value:e,onChange:t,clearable:n=!1,range:r=!1,rangeValue:i,onChangeRange:l,size:u=`md`,locale:h=`en`,format:_=`dd.MM.yyyy`,label:C,required:w=!1,helperText:T,placeholder:E=`Select date`,fullWidth:D=!1,disabled:O=!1,minDate:k,maxDate:A,excludeDates:j,filterDate:M,error:N=!1,errorText:P,id:F,className:I,wrapperClassName:L,dataTestId:R},z){let B=(0,b.useId)(),V=F??B,[H,U]=(0,b.useState)(!1),[W,G]=(0,b.useState)(e??i?.start??new Date),[K,q]=(0,b.useState)(null),J=(0,b.useRef)(null),Y=N||!!P,ne=P?`${V}-error`:T?`${V}-help`:void 0;(0,b.useEffect)(()=>{O&&U(!1)},[O]),(0,b.useEffect)(()=>{if(!H)return;let e=e=>{J.current&&!J.current.contains(e.target)&&U(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[H]);let X=r?i?.start?`${y(i.start,_)}${i.end?` – ${y(i.end,_)}`:``}`:``:e?y(e,_):``;function re(e){if(!r){t?.(e),U(!1);return}let n=i??{start:null,end:null};if(!n.start||n.start&&n.end){l?.({start:e,end:null});return}if(e<n.start){l?.({start:e,end:n.start});return}l?.({start:n.start,end:e}),U(!1)}function Z(e){e.stopPropagation(),r?(l?.({start:null,end:null}),q(null)):t?.(null)}let{firstDayOfWeek:ie,monthNames:ae,weekdayNames:oe}=(0,b.useMemo)(()=>{let e=f(h),t=p(e);return{firstDayOfWeek:t,monthNames:m(e),weekdayNames:ee(e,t)}},[h]),se=te(W,ie),Q=i??{start:null,end:null},$=Q.end??K;return(0,x.jsxs)(`div`,{ref:J,"data-test-id":R,className:d(`flex flex-col gap-1.5`,D&&`w-full`,L),children:[C&&(0,x.jsxs)(`label`,{htmlFor:V,className:`text-p-std font-medium text-fg-default inline-flex items-center gap-1`,children:[C,w&&(0,x.jsx)(`span`,{className:`text-red-600`,"aria-hidden":!0,children:`*`})]}),(0,x.jsxs)(`div`,{className:`relative`,children:[(0,x.jsxs)(`button`,{ref:z,id:V,type:`button`,disabled:O,"aria-invalid":Y||void 0,"aria-required":w||void 0,"aria-describedby":ne,onClick:()=>U(e=>!e),className:d(`inline-flex items-center gap-2 rounded-lg border bg-bg-default text-left transition-colors focus-visible:outline-none focus-visible:ring-2`,Y?`border-red-600`:`border-border-default`,!O&&!Y&&`hover:border-border-strong`,Y?`focus-visible:ring-red-300 focus-visible:border-red-600`:`focus-visible:ring-brand-300 focus-visible:border-brand-500`,O&&`bg-bg-container border-border-default cursor-not-allowed text-fg-disabled`,D?`w-full min-w-0`:`min-w-[260px]`,S[u],I),children:[(0,x.jsx)(`span`,{className:d(`flex-1 text-left truncate`,O?`text-fg-disabled`:X?`text-fg-default`:`text-fg-tertiary`),children:X||E}),n&&X&&!O?(0,x.jsx)(`span`,{role:`button`,tabIndex:0,"aria-label":`Clear date`,onClick:Z,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),Z(e))},className:`inline-flex items-center justify-center rounded-full p-0.5 hover:bg-bg-container`,children:(0,x.jsx)(c,{className:`w-4 h-4 text-fg-secondary`})}):(0,x.jsx)(s,{className:d(`w-4 h-4`,O?`text-fg-disabled`:`text-fg-secondary`)})]}),H&&(0,x.jsxs)(`div`,{className:`absolute z-50 mt-1 left-0 rounded-xl border border-border-default bg-bg-default shadow-z3 p-3 w-[300px]`,children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between mb-2`,children:[(0,x.jsx)(`button`,{type:`button`,className:`w-8 h-8 rounded-md hover:bg-bg-container flex items-center justify-center text-fg-secondary`,onClick:()=>G(new Date(W.getFullYear(),W.getMonth()-1,1)),"aria-label":`Previous month`,children:(0,x.jsx)(a,{className:`w-4 h-4`})}),(0,x.jsxs)(`div`,{className:`text-p-md font-semibold text-fg-default`,children:[ae[W.getMonth()],` `,W.getFullYear()]}),(0,x.jsx)(`button`,{type:`button`,className:`w-8 h-8 rounded-md hover:bg-bg-container flex items-center justify-center text-fg-secondary`,onClick:()=>G(new Date(W.getFullYear(),W.getMonth()+1,1)),"aria-label":`Next month`,children:(0,x.jsx)(o,{className:`w-4 h-4`})})]}),(0,x.jsxs)(`div`,{className:`grid grid-cols-7 gap-1 text-center`,children:[oe.map((e,t)=>(0,x.jsx)(`div`,{className:`text-p-xs text-fg-tertiary py-1`,children:e},t)),se.map((t,n)=>{if(!t)return(0,x.jsx)(`div`,{},n);let i=v(t,k,A,j,M),a=!r&&g(t,e??null),o=r&&g(t,Q.start),s=r&&g(t,$),c=r&&!!Q.start&&!!$&&t>Q.start&&t<$;return(0,x.jsx)(`button`,{type:`button`,disabled:i,"aria-disabled":i||void 0,onMouseEnter:()=>!i&&r&&Q.start&&!Q.end&&q(t),onClick:()=>!i&&re(t),className:d(`h-8 rounded-md text-p-sm font-medium`,i?`text-fg-disabled cursor-not-allowed`:a||o||s?`bg-brand-500 text-white`:c?`bg-bg-brand-lighter text-brand-700`:`text-fg-default hover:bg-bg-container`),children:t.getDate()},n)})]})]})]}),P?(0,x.jsx)(`p`,{id:`${V}-error`,className:`text-p-sm text-red-700`,children:P}):T?(0,x.jsx)(`p`,{id:`${V}-help`,className:`text-p-sm text-fg-secondary`,children:T}):null]})});try{T.displayName=`DatePicker`,T.__docgenInfo={description:``,displayName:`DatePicker`,filePath:`/home/runner/work/design-system/design-system/src/components/DatePicker/DatePicker.tsx`,methods:[],props:{value:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:``,name:`value`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`Date | null`}},onChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:``,name:`onChange`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`((date: Date | null) => void)`}},clearable:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:"Renders a clear affordance in the trigger (in place of the calendar icon) when a value is selected. Fires `onChange(null)` (or `onChangeRange({ start: null, end: null })` in range mode).",name:`clearable`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`boolean`}},range:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:`Enable range-selection mode.`,name:`range`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`boolean`}},rangeValue:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:``,name:`rangeValue`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`DateRange`}},onChangeRange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:``,name:`onChangeRange`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`((range: DateRange) => void)`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`enum`,raw:`DatePickerSize`,value:[{value:`"lg"`},{value:`"md"`},{value:`"sm"`}]}},locale:{defaultValue:{value:`en`},declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:`BCP-47 locale tag. Derives month names, weekday abbreviations, and the first day of the week.`,name:`locale`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`string`}},format:{defaultValue:{value:`dd.MM.yyyy`},declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:"Trigger display format. Supports `dd`/`MM`/`yyyy` tokens plus a literal\nseparator. Defaults to the pre-existing `'dd.MM.yyyy'`. Applied to both\nendpoints in range mode.",name:`format`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`string`}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:``,name:`label`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`ReactNode`}},required:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:"Renders a red asterisk next to the label and sets `aria-required` on the trigger.",name:`required`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`boolean`}},helperText:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:"Neutral message rendered below the control, replaced by `errorText` when present.",name:`helperText`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`ReactNode`}},placeholder:{defaultValue:{value:`Select date`},declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:``,name:`placeholder`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`string`}},fullWidth:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:`Fill the parent's width (like Input/Select) instead of the intrinsic
min-width. Use inside form grids so dates line up with other fields.`,name:`fullWidth`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`boolean`}},disabled:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:`Disable the trigger entirely — blocks both mouse and keyboard activation.`,name:`disabled`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`boolean`}},minDate:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:`Earliest selectable day, inclusive. Earlier days render disabled. Time-of-day is ignored.`,name:`minDate`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`Date`}},maxDate:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:`Latest selectable day, inclusive. Later days render disabled. Time-of-day is ignored.`,name:`maxDate`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`Date`}},excludeDates:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:`Individual days that can't be picked. Matched by calendar day; time-of-day is ignored.`,name:`excludeDates`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`Date[]`}},filterDate:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:"Arbitrary per-day predicate, evaluated alongside `minDate`/`maxDate`/`excludeDates`. Days it rejects render disabled.",name:`filterDate`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`((date: Date) => boolean)`}},error:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:`Switch the trigger to the danger border/ring styles.`,name:`error`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`boolean`}},errorText:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:`Message rendered below the control; also switches the trigger to the danger styles.`,name:`errorText`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`ReactNode`}},id:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:``,name:`id`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`string`}},className:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:``,name:`className`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`string`}},wrapperClassName:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`}],description:``,name:`wrapperClassName`,parent:{fileName:`design-system/src/components/DatePicker/DatePicker.types.ts`,name:`DatePickerProps`},required:!1,tags:{},type:{name:`string`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),D=e({AllSizes:()=>q,Clearable:()=>U,Controlled:()=>N,CustomFormat:()=>H,Disabled:()=>I,ExcludedDates:()=>z,FullWidth:()=>F,MinMaxDates:()=>R,Primary:()=>j,RangeMode:()=>P,RangeWithMinMax:()=>B,RequiredWithHelper:()=>W,RussianLocale:()=>V,WeekdaysOnly:()=>G,WithError:()=>L,WithLabel:()=>M,__namedExportsOrder:()=>J,default:()=>A}),O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y=t((()=>{O=n(r(),1),E(),k=i(),A={title:`Components/DatePicker`,component:T,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`lg`,`md`,`sm`]}},args:{placeholder:`Select date`,size:`md`,fullWidth:!1,range:!1,disabled:!1,error:!1}},j={},M={args:{label:`Start date`}},N={render:e=>{function t(){let[t,n]=(0,O.useState)(new Date);return(0,k.jsx)(T,{...e,value:t,onChange:n})}return(0,k.jsx)(t,{})},args:{label:`Start date`}},P={render:e=>{function t(){let[t,n]=(0,O.useState)({start:null,end:null});return(0,k.jsx)(T,{...e,range:!0,rangeValue:t,onChangeRange:n})}return(0,k.jsx)(t,{})},args:{label:`Trip dates`,placeholder:`Select date range`}},F={args:{fullWidth:!0,label:`Start date`},decorators:[e=>(0,k.jsx)(`div`,{className:`w-96`,children:(0,k.jsx)(e,{})})]},I={args:{disabled:!0,label:`Start date`}},L={args:{label:`Start date`,error:!0,errorText:`Please select a valid date.`}},R={name:`Min/max dates`,render:e=>{function t(){let[t,n]=(0,O.useState)(null),r=new Date,i=new Date(r.getFullYear(),r.getMonth(),r.getDate()),a=new Date(r.getFullYear(),r.getMonth(),r.getDate()+14);return(0,k.jsx)(T,{...e,value:t,onChange:n,minDate:i,maxDate:a})}return(0,k.jsx)(t,{})},args:{label:`Appointment date`}},z={name:`Excluded dates`,render:e=>{function t(){let[t,n]=(0,O.useState)(null),r=new Date,i=[new Date(r.getFullYear(),r.getMonth(),r.getDate()+3),new Date(r.getFullYear(),r.getMonth(),r.getDate()+4)];return(0,k.jsx)(T,{...e,value:t,onChange:n,excludeDates:i})}return(0,k.jsx)(t,{})},args:{label:`Delivery date`}},B={name:`Range with min/max`,render:e=>{function t(){let[t,n]=(0,O.useState)({start:null,end:null}),r=new Date,i=new Date(r.getFullYear(),r.getMonth(),r.getDate()),a=new Date(r.getFullYear(),r.getMonth(),r.getDate()+30);return(0,k.jsx)(T,{...e,range:!0,rangeValue:t,onChangeRange:n,minDate:i,maxDate:a})}return(0,k.jsx)(t,{})},args:{label:`Trip dates`,placeholder:`Select date range`}},V={name:`Locale (ru-RU, Monday-first)`,args:{locale:`ru-RU`,label:`Date`}},H={name:`Custom format (yyyy/MM/dd)`,render:e=>{function t(){let[t,n]=(0,O.useState)(null);return(0,k.jsx)(T,{...e,value:t,onChange:n})}return(0,k.jsx)(t,{})},args:{format:`yyyy/MM/dd`,label:`Date`}},U={render:e=>{function t(){let[t,n]=(0,O.useState)(new Date);return(0,k.jsx)(T,{...e,clearable:!0,value:t,onChange:n})}return(0,k.jsx)(t,{})},args:{label:`Date`}},W={name:`Required + helper text`,args:{label:`Start date`,required:!0,helperText:`Choose the first day of your stay.`}},G={name:`filterDate (weekdays only)`,args:{label:`Business day`,filterDate:e=>e.getDay()!==0&&e.getDay()!==6}},K=[`sm`,`md`,`lg`],q={render:e=>(0,k.jsx)(`div`,{className:`flex flex-col gap-4`,children:K.map(t=>(0,k.jsx)(T,{...e,size:t,label:t},t))})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start date'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    label: 'Start date'
  },
  decorators: [Story => <div className="w-96">
        <Story />
      </div>]
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Start date'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start date',
    error: true,
    errorText: 'Please select a valid date.'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Locale (ru-RU, Monday-first)',
  args: {
    locale: 'ru-RU',
    label: 'Date'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Custom format (yyyy/MM/dd)',
  render: args => {
    function CustomFormatDatePicker() {
      const [value, setValue] = useState<Date | null>(null);
      return <DatePicker {...args} value={value} onChange={setValue} />;
    }
    return <CustomFormatDatePicker />;
  },
  args: {
    format: 'yyyy/MM/dd',
    label: 'Date'
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => {
    function ClearableDatePicker() {
      const [value, setValue] = useState<Date | null>(new Date());
      return <DatePicker {...args} clearable value={value} onChange={setValue} />;
    }
    return <ClearableDatePicker />;
  },
  args: {
    label: 'Date'
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Required + helper text',
  args: {
    label: 'Start date',
    required: true,
    helperText: 'Choose the first day of your stay.'
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'filterDate (weekdays only)',
  args: {
    label: 'Business day',
    filterDate: (date: Date) => date.getDay() !== 0 && date.getDay() !== 6
  }
}`,...G.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      {SIZES.map(size => <DatePicker key={size} {...args} size={size} label={size} />)}
    </div>
}`,...q.parameters?.docs?.source}}},J=[`Primary`,`WithLabel`,`Controlled`,`RangeMode`,`FullWidth`,`Disabled`,`WithError`,`MinMaxDates`,`ExcludedDates`,`RangeWithMinMax`,`RussianLocale`,`CustomFormat`,`Clearable`,`RequiredWithHelper`,`WeekdaysOnly`,`AllSizes`]}));Y();export{q as AllSizes,U as Clearable,N as Controlled,H as CustomFormat,I as Disabled,z as ExcludedDates,F as FullWidth,R as MinMaxDates,j as Primary,P as RangeMode,B as RangeWithMinMax,W as RequiredWithHelper,V as RussianLocale,G as WeekdaysOnly,L as WithError,M as WithLabel,J as __namedExportsOrder,A as default,Y as n,D as t};