import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{f as r,t as i}from"./iframe-LRtYaCwk.js";import{t as a}from"./DatePicker-BGk6gBYS.js";import{t as o}from"./DatePicker-CXGDOJOp.js";import{a as s,i as c,n as l,r as u,t as d}from"./TimePicker-C-VANCuB.js";var f=n({AllSizes:()=>E,DarkTheme:()=>D,Default:()=>_,Disabled:()=>w,DisabledTimes:()=>S,ErrorState:()=>C,MinMaxRange:()=>x,Mobile:()=>O,MobileDark:()=>k,NotSearchable:()=>T,Required:()=>y,ThirtyMinuteStep:()=>b,WithDatePicker:()=>A,WithValue:()=>v,__namedExportsOrder:()=>j,default:()=>g});function p({value:e=null,...t}){let[n,r]=(0,m.useState)(e);return(0,h.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,h.jsx)(d,{...t,value:n,onChange:r}),(0,h.jsxs)(`span`,{className:`text-p-sm text-fg-secondary`,children:[`Value: `,n??`null`]})]})}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=t((()=>{m=e(r(),1),o(),l(),c(),h=i(),g={title:`Components/TimePicker`,component:d,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`lg`,`md`,`sm`]},menuPlacement:{control:`select`,options:[`auto`,`bottom`,`top`]}},args:{label:`Start time`,placeholder:`Start time`,size:`md`,step:15,fullWidth:!1,searchable:!0,clearable:!0,disabled:!1,error:!1}},_={render:e=>(0,h.jsx)(p,{...e})},v={render:e=>(0,h.jsx)(p,{...e}),args:{value:`14:30`}},y={render:e=>(0,h.jsx)(p,{...e}),args:{required:!0}},b={render:e=>(0,h.jsx)(p,{...e}),args:{step:30}},x={render:e=>(0,h.jsx)(p,{...e}),args:{minTime:`09:00`,maxTime:`18:00`,helperText:`Between 09:00 and 18:00`}},S={render:e=>(0,h.jsx)(p,{...e}),args:{excludeTimes:[`09:30`,`10:45`],filterTime:e=>!e.startsWith(`13:`),helperText:`09:30, 10:45 and 13:00–13:59 are taken`}},C={render:e=>(0,h.jsx)(p,{...e}),args:{required:!0,errorText:`Start time is required`}},w={args:{disabled:!0,value:`10:00`}},T={render:e=>(0,h.jsx)(p,{...e}),args:{searchable:!1}},E={render:e=>(0,h.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,h.jsx)(p,{...e,size:`lg`,label:`Large`}),(0,h.jsx)(p,{...e,size:`md`,label:`Medium`}),(0,h.jsx)(p,{...e,size:`sm`,label:`Small`})]})},D={globals:{theme:`dark`},render:e=>(0,h.jsx)(p,{...e}),args:{required:!0}},O={render:e=>(0,h.jsx)(p,{...e}),args:{mobile:!0,required:!0,value:`09:30`}},k={globals:{theme:`dark`},render:e=>(0,h.jsx)(p,{...e}),args:{mobile:!0,required:!0,minTime:`09:00`,maxTime:`18:00`}},A={render:function(){let[e,t]=(0,m.useState)(null),[n,r]=(0,m.useState)(null),i=e&&n?s(n,e):null;return(0,h.jsxs)(`div`,{className:`flex w-[560px] max-w-full flex-col gap-3`,children:[(0,h.jsxs)(`div`,{className:`grid grid-cols-1 gap-4 sm:grid-cols-2`,children:[(0,h.jsx)(a,{label:`Start date`,required:!0,fullWidth:!0,value:e,onChange:t}),(0,h.jsx)(d,{label:`Start time`,placeholder:`Start time`,required:!0,fullWidth:!0,value:n,onChange:r})]}),(0,h.jsxs)(`p`,{className:`text-p-sm text-fg-secondary`,children:[`Combined:`,` `,i?`${i.toDateString()} ${u(i)}`:`pick a date and a time`]})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />
}`,..._.parameters?.docs?.source},description:{story:`Pick a suggestion, or type: "9" filters to the 09 hour, "0907" offers 09:07.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    value: '14:30'
  }
}`,...v.parameters?.docs?.source},description:{story:`The time is editable text: click between the digits (or use the arrow
 keys) and retype, e.g. 14:30 → click before the 0, Backspace, "4" → 14:40.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    required: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    step: 30
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    minTime: '09:00',
    maxTime: '18:00',
    helperText: 'Between 09:00 and 18:00'
  }
}`,...x.parameters?.docs?.source},description:{story:`Office hours: suggestions outside 09:00–18:00 stay visible but disabled, and can't be typed.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    excludeTimes: ['09:30', '10:45'],
    filterTime: (time: string) => !time.startsWith('13:'),
    helperText: '09:30, 10:45 and 13:00–13:59 are taken'
  }
}`,...S.parameters?.docs?.source},description:{story:"`excludeTimes` for specific slots, `filterTime` for a rule — here, the lunch hour.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    required: true,
    errorText: 'Start time is required'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: '10:00'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    searchable: false
  }
}`,...T.parameters?.docs?.source},description:{story:`Suggestions only, no typing.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-4">
      <Controlled {...args} size="lg" label="Large" />
      <Controlled {...args} size="md" label="Medium" />
      <Controlled {...args} size="sm" label="Small" />
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'dark'
  },
  render: args => <Controlled {...args} />,
  args: {
    required: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <Controlled {...args} />,
  args: {
    mobile: true,
    required: true,
    value: '09:30'
  }
}`,...O.parameters?.docs?.source},description:{story:"The mobile dialog (forced with `mobile`; it's automatic at viewports ≤ 768px).",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  globals: {
    theme: 'dark'
  },
  render: args => <Controlled {...args} />,
  args: {
    mobile: true,
    required: true,
    minTime: '09:00',
    maxTime: '18:00'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [date, setDate] = useState<Date | null>(null);
    const [time, setTime] = useState<string | null>(null);
    const combined = date && time ? timeToDate(time, date) : null;
    return <div className="flex w-[560px] max-w-full flex-col gap-3">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <DatePicker label="Start date" required fullWidth value={date} onChange={setDate} />
          <TimePicker label="Start time" placeholder="Start time" required fullWidth value={time} onChange={setTime} />
        </div>
        <p className="text-p-sm text-fg-secondary">
          Combined:{' '}
          {combined ? \`\${combined.toDateString()} \${dateToTime(combined)}\` : 'pick a date and a time'}
        </p>
      </div>;
  }
}`,...A.parameters?.docs?.source},description:{story:"A date + time pair like the leave-request form, combined into one `Date` with `timeToDate`.",...A.parameters?.docs?.description}}},j=[`Default`,`WithValue`,`Required`,`ThirtyMinuteStep`,`MinMaxRange`,`DisabledTimes`,`ErrorState`,`Disabled`,`NotSearchable`,`AllSizes`,`DarkTheme`,`Mobile`,`MobileDark`,`WithDatePicker`]}));M();export{E as AllSizes,D as DarkTheme,_ as Default,w as Disabled,S as DisabledTimes,C as ErrorState,x as MinMaxRange,O as Mobile,k as MobileDark,T as NotSearchable,y as Required,b as ThirtyMinuteStep,A as WithDatePicker,v as WithValue,j as __namedExportsOrder,g as default,M as n,f as t};