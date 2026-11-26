import{a as e,n as t,r as n}from"./rolldown-runtime-DaJ6WEGw.js";import{f as r,t as i}from"./iframe-LRtYaCwk.js";import{n as a,r as o,t as s}from"./Radio-D6zL5kDp.js";var c=n({AllSizes:()=>S,Checked:()=>p,CustomClassName:()=>b,Default:()=>f,Disabled:()=>g,DisabledChecked:()=>_,DisabledGroup:()=>D,Error:()=>v,Group:()=>C,GroupBooleanValues:()=>N,GroupError:()=>j,GroupHelperText:()=>A,GroupHorizontal:()=>w,GroupNumericValues:()=>M,GroupRequired:()=>k,GroupSmall:()=>E,GroupWithDescriptions:()=>T,GroupWithLabel:()=>O,NoLabel:()=>y,Small:()=>h,WithDescription:()=>m,__namedExportsOrder:()=>P,default:()=>d}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F=t((()=>{l=e(r(),1),o(),u=i(),d={title:`Components/Radio`,component:s,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`md`,`sm`]}},args:{value:`option`,size:`md`,label:`Notify me by email`,disabled:!1,error:!1}},f={},p={args:{defaultChecked:!0}},m={args:{label:`Email notifications`,description:`Receive updates about your account activity.`}},h={args:{size:`sm`}},g={args:{disabled:!0}},_={args:{disabled:!0,defaultChecked:!0}},v={args:{error:!0,label:`This option is currently unavailable`}},y={args:{label:void 0,"aria-label":`Select option`}},b={name:`Overriding classes via className`,args:{className:`gap-4`,label:`Custom gap spacing`}},x=[`md`,`sm`],S={render:e=>(0,u.jsx)(`div`,{className:`flex flex-col gap-3`,children:x.map(t=>(0,u.jsx)(s,{...e,size:t,value:t,label:t},t))})},C={render:()=>{function e(){let[e,t]=(0,l.useState)(`comfortable`);return(0,u.jsxs)(a,{name:`density`,value:e,onChange:t,children:[(0,u.jsx)(s,{value:`compact`,label:`Compact`}),(0,u.jsx)(s,{value:`comfortable`,label:`Comfortable`}),(0,u.jsx)(s,{value:`spacious`,label:`Spacious`})]})}return(0,u.jsx)(e,{})}},w={name:`Group (horizontal)`,render:()=>{function e(){let[e,t]=(0,l.useState)(`yes`);return(0,u.jsxs)(a,{name:`confirm`,value:e,onChange:t,orientation:`horizontal`,children:[(0,u.jsx)(s,{value:`yes`,label:`Yes`}),(0,u.jsx)(s,{value:`no`,label:`No`})]})}return(0,u.jsx)(e,{})}},T={render:()=>{function e(){let[e,t]=(0,l.useState)(`free`);return(0,u.jsxs)(a,{name:`plan`,value:e,onChange:t,className:`w-72`,children:[(0,u.jsx)(s,{value:`free`,label:`Free`,description:`Basic features for individuals.`}),(0,u.jsx)(s,{value:`pro`,label:`Pro`,description:`Advanced features for teams.`}),(0,u.jsx)(s,{value:`enterprise`,label:`Enterprise`,description:`Custom limits and dedicated support.`})]})}return(0,u.jsx)(e,{})}},E={name:`Group (size: sm)`,render:()=>{function e(){let[e,t]=(0,l.useState)(`a`);return(0,u.jsxs)(a,{name:`small-group`,value:e,onChange:t,size:`sm`,children:[(0,u.jsx)(s,{value:`a`,label:`Option A`}),(0,u.jsx)(s,{value:`b`,label:`Option B`})]})}return(0,u.jsx)(e,{})}},D={render:()=>(0,u.jsxs)(a,{name:`disabled-group`,value:`a`,disabled:!0,onChange:()=>{},children:[(0,u.jsx)(s,{value:`a`,label:`Option A`}),(0,u.jsx)(s,{value:`b`,label:`Option B`})]})},O={name:`Group with label`,render:()=>{function e(){let[e,t]=(0,l.useState)(`comfortable`);return(0,u.jsxs)(a,{name:`density-labeled`,label:`Density`,value:e,onChange:t,children:[(0,u.jsx)(s,{value:`compact`,label:`Compact`}),(0,u.jsx)(s,{value:`comfortable`,label:`Comfortable`}),(0,u.jsx)(s,{value:`spacious`,label:`Spacious`})]})}return(0,u.jsx)(e,{})}},k={name:`Group required`,render:()=>(0,u.jsxs)(a,{name:`required-density`,label:`Density`,required:!0,children:[(0,u.jsx)(s,{value:`compact`,label:`Compact`}),(0,u.jsx)(s,{value:`comfortable`,label:`Comfortable`}),(0,u.jsx)(s,{value:`spacious`,label:`Spacious`})]})},A={name:`Group with helper text`,render:()=>(0,u.jsxs)(a,{name:`helper-density`,label:`Density`,helperText:`Choose the layout density for your workspace.`,children:[(0,u.jsx)(s,{value:`compact`,label:`Compact`}),(0,u.jsx)(s,{value:`comfortable`,label:`Comfortable`}),(0,u.jsx)(s,{value:`spacious`,label:`Spacious`})]})},j={name:`Group error state`,render:()=>(0,u.jsxs)(a,{name:`error-density`,label:`Density`,required:!0,errorText:`Choose a density to continue.`,children:[(0,u.jsx)(s,{value:`compact`,label:`Compact`}),(0,u.jsx)(s,{value:`comfortable`,label:`Comfortable`}),(0,u.jsx)(s,{value:`spacious`,label:`Spacious`})]})},M={name:`Group with numeric values`,render:()=>{function e(){let[e,t]=(0,l.useState)(1);return(0,u.jsxs)(a,{name:`rating`,value:e,onChange:t,children:[(0,u.jsx)(s,{value:1,label:`1 star`}),(0,u.jsx)(s,{value:2,label:`2 stars`}),(0,u.jsx)(s,{value:3,label:`3 stars`})]})}return(0,u.jsx)(e,{})}},N={name:`Group with boolean values (yes/no)`,render:()=>{function e(){let[e,t]=(0,l.useState)(!0);return(0,u.jsxs)(a,{name:`confirm`,value:e,onChange:t,children:[(0,u.jsx)(s,{value:!0,label:`Yes`}),(0,u.jsx)(s,{value:!1,label:`No`})]})}return(0,u.jsx)(e,{})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email notifications',
    description: 'Receive updates about your account activity.'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    error: true,
    label: 'This option is currently unavailable'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: undefined,
    'aria-label': 'Select option'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'gap-4',
    label: 'Custom gap spacing'
  }
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-3">
      {SIZES.map(size => <Radio key={size} {...args} size={size} value={size} label={size} />)}
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    function GroupDemo() {
      const [value, setValue] = useState<RadioValue>('comfortable');
      return <RadioGroup name="density" value={value} onChange={setValue}>
          <Radio value="compact" label="Compact" />
          <Radio value="comfortable" label="Comfortable" />
          <Radio value="spacious" label="Spacious" />
        </RadioGroup>;
    }
    return <GroupDemo />;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Group (horizontal)',
  render: () => {
    function GroupDemo() {
      const [value, setValue] = useState<RadioValue>('yes');
      return <RadioGroup name="confirm" value={value} onChange={setValue} orientation="horizontal">
          <Radio value="yes" label="Yes" />
          <Radio value="no" label="No" />
        </RadioGroup>;
    }
    return <GroupDemo />;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    function GroupDemo() {
      const [value, setValue] = useState<RadioValue>('free');
      return <RadioGroup name="plan" value={value} onChange={setValue} className="w-72">
          <Radio value="free" label="Free" description="Basic features for individuals." />
          <Radio value="pro" label="Pro" description="Advanced features for teams." />
          <Radio value="enterprise" label="Enterprise" description="Custom limits and dedicated support." />
        </RadioGroup>;
    }
    return <GroupDemo />;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Group (size: sm)',
  render: () => {
    function GroupDemo() {
      const [value, setValue] = useState<RadioValue>('a');
      return <RadioGroup name="small-group" value={value} onChange={setValue} size="sm">
          <Radio value="a" label="Option A" />
          <Radio value="b" label="Option B" />
        </RadioGroup>;
    }
    return <GroupDemo />;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup name="disabled-group" value="a" disabled onChange={() => {}}>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
    </RadioGroup>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Group with label',
  render: () => {
    function GroupDemo() {
      const [value, setValue] = useState<RadioValue>('comfortable');
      return <RadioGroup name="density-labeled" label="Density" value={value} onChange={setValue}>
          <Radio value="compact" label="Compact" />
          <Radio value="comfortable" label="Comfortable" />
          <Radio value="spacious" label="Spacious" />
        </RadioGroup>;
    }
    return <GroupDemo />;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Group required',
  render: () => <RadioGroup name="required-density" label="Density" required>
      <Radio value="compact" label="Compact" />
      <Radio value="comfortable" label="Comfortable" />
      <Radio value="spacious" label="Spacious" />
    </RadioGroup>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Group with helper text',
  render: () => <RadioGroup name="helper-density" label="Density" helperText="Choose the layout density for your workspace.">
      <Radio value="compact" label="Compact" />
      <Radio value="comfortable" label="Comfortable" />
      <Radio value="spacious" label="Spacious" />
    </RadioGroup>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Group error state',
  render: () => <RadioGroup name="error-density" label="Density" required errorText="Choose a density to continue.">
      <Radio value="compact" label="Compact" />
      <Radio value="comfortable" label="Comfortable" />
      <Radio value="spacious" label="Spacious" />
    </RadioGroup>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Group with numeric values',
  render: () => {
    function NumericGroupDemo() {
      const [value, setValue] = useState<RadioValue>(1);
      return <RadioGroup name="rating" value={value} onChange={setValue}>
          <Radio value={1} label="1 star" />
          <Radio value={2} label="2 stars" />
          <Radio value={3} label="3 stars" />
        </RadioGroup>;
    }
    return <NumericGroupDemo />;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Group with boolean values (yes/no)',
  render: () => {
    function BooleanGroupDemo() {
      const [value, setValue] = useState<RadioValue>(true);
      return <RadioGroup name="confirm" value={value} onChange={setValue}>
          <Radio value={true} label="Yes" />
          <Radio value={false} label="No" />
        </RadioGroup>;
    }
    return <BooleanGroupDemo />;
  }
}`,...N.parameters?.docs?.source}}},P=[`Default`,`Checked`,`WithDescription`,`Small`,`Disabled`,`DisabledChecked`,`Error`,`NoLabel`,`CustomClassName`,`AllSizes`,`Group`,`GroupHorizontal`,`GroupWithDescriptions`,`GroupSmall`,`DisabledGroup`,`GroupWithLabel`,`GroupRequired`,`GroupHelperText`,`GroupError`,`GroupNumericValues`,`GroupBooleanValues`]}));F();export{S as AllSizes,p as Checked,b as CustomClassName,f as Default,g as Disabled,_ as DisabledChecked,D as DisabledGroup,v as Error,C as Group,N as GroupBooleanValues,j as GroupError,A as GroupHelperText,w as GroupHorizontal,M as GroupNumericValues,k as GroupRequired,E as GroupSmall,T as GroupWithDescriptions,O as GroupWithLabel,y as NoLabel,h as Small,m as WithDescription,P as __namedExportsOrder,d as default,F as n,c as t};