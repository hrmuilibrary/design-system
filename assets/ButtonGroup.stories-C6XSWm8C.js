import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-p9i34dfU.js";import{S as a,X as o,nn as s,t as c}from"./lucide-react-D8zEK72V.js";import{n as l,t as u}from"./cn-BNhCYuha.js";import{t as d}from"./Button-Dba_t5FG.js";import{t as f}from"./Button-xn7zhBmS.js";var p,m,h,g,_=t((()=>{p=n(r(),1),l(),m=i(),h={horizontal:`flex-row [&>*]:rounded-none [&>*:first-child]:rounded-l-lg [&>*:last-child]:rounded-r-lg [&>*:not(:first-child)]:-ml-px`,vertical:`flex-col [&>*]:rounded-none [&>*:first-child]:rounded-t-lg [&>*:last-child]:rounded-b-lg [&>*:not(:first-child)]:-mt-px`},g=(0,p.forwardRef)(function({orientation:e=`horizontal`,className:t,children:n,dataTestId:r,...i},a){return(0,m.jsx)(`div`,{ref:a,role:`group`,"data-test-id":r,className:u(`inline-flex isolate`,h[e],`[&>*]:relative [&>*:hover]:z-10 [&>*:focus-visible]:z-10`,t),...i,children:n})});try{g.displayName=`ButtonGroup`,g.__docgenInfo={description:``,displayName:`ButtonGroup`,filePath:`/home/runner/work/design-system/design-system/src/components/ButtonGroup/ButtonGroup.tsx`,methods:[],props:{orientation:{defaultValue:{value:`horizontal`},declarations:[{fileName:`design-system/src/components/ButtonGroup/ButtonGroup.types.ts`,name:`ButtonGroupProps`}],description:``,name:`orientation`,parent:{fileName:`design-system/src/components/ButtonGroup/ButtonGroup.types.ts`,name:`ButtonGroupProps`},required:!1,tags:{},type:{name:`enum`,raw:`ButtonGroupOrientation`,value:[{value:`"horizontal"`},{value:`"vertical"`}]}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),v=e({CustomClassName:()=>E,Horizontal:()=>S,IconOnly:()=>w,Primary:()=>x,Vertical:()=>C,WithPressedButton:()=>T,__namedExportsOrder:()=>D,default:()=>b}),y,b,x,S,C,w,T,E,D,O=t((()=>{c(),_(),f(),y=i(),b={title:`Components/ButtonGroup`,component:g,parameters:{layout:`centered`},argTypes:{orientation:{control:`select`,options:[`horizontal`,`vertical`]}},args:{orientation:`horizontal`}},x={render:e=>(0,y.jsxs)(g,{...e,children:[(0,y.jsx)(d,{variant:`secondary`,children:`One`}),(0,y.jsx)(d,{variant:`secondary`,children:`Two`}),(0,y.jsx)(d,{variant:`secondary`,children:`Three`})]})},S={args:{orientation:`horizontal`},render:e=>(0,y.jsxs)(g,{...e,children:[(0,y.jsx)(d,{variant:`secondary`,children:`Day`}),(0,y.jsx)(d,{variant:`secondary`,children:`Week`}),(0,y.jsx)(d,{variant:`secondary`,children:`Month`})]})},C={args:{orientation:`vertical`},render:e=>(0,y.jsxs)(g,{...e,children:[(0,y.jsx)(d,{variant:`secondary`,children:`Day`}),(0,y.jsx)(d,{variant:`secondary`,children:`Week`}),(0,y.jsx)(d,{variant:`secondary`,children:`Month`})]})},w={render:e=>(0,y.jsxs)(g,{...e,children:[(0,y.jsx)(d,{variant:`secondary`,iconOnly:!0,"aria-label":`Mail`,children:(0,y.jsx)(o,{className:`size-4`})}),(0,y.jsx)(d,{variant:`secondary`,iconOnly:!0,"aria-label":`Notifications`,children:(0,y.jsx)(s,{className:`size-4`})}),(0,y.jsx)(d,{variant:`secondary`,iconOnly:!0,"aria-label":`Settings`,children:(0,y.jsx)(a,{className:`size-4`})})]})},T={name:`With a pressed/active button`,render:e=>(0,y.jsxs)(g,{...e,children:[(0,y.jsx)(d,{variant:`secondary`,pressed:!0,children:`Day`}),(0,y.jsx)(d,{variant:`secondary`,children:`Week`}),(0,y.jsx)(d,{variant:`secondary`,children:`Month`})]})},E={name:`Overriding classes via className`,render:e=>(0,y.jsxs)(g,{...e,className:`shadow-z3`,children:[(0,y.jsx)(d,{variant:`secondary`,children:`One`}),(0,y.jsx)(d,{variant:`secondary`,children:`Two`})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>
      <Button variant="secondary">One</Button>
      <Button variant="secondary">Two</Button>
      <Button variant="secondary">Three</Button>
    </ButtonGroup>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  render: args => <ButtonGroup {...args}>
      <Button variant="secondary">Day</Button>
      <Button variant="secondary">Week</Button>
      <Button variant="secondary">Month</Button>
    </ButtonGroup>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: args => <ButtonGroup {...args}>
      <Button variant="secondary">Day</Button>
      <Button variant="secondary">Week</Button>
      <Button variant="secondary">Month</Button>
    </ButtonGroup>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <ButtonGroup {...args}>
      <Button variant="secondary" iconOnly aria-label="Mail">
        <Mail className="size-4" />
      </Button>
      <Button variant="secondary" iconOnly aria-label="Notifications">
        <Bell className="size-4" />
      </Button>
      <Button variant="secondary" iconOnly aria-label="Settings">
        <Settings className="size-4" />
      </Button>
    </ButtonGroup>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'With a pressed/active button',
  render: args => <ButtonGroup {...args}>
      <Button variant="secondary" pressed>
        Day
      </Button>
      <Button variant="secondary">Week</Button>
      <Button variant="secondary">Month</Button>
    </ButtonGroup>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  render: args => <ButtonGroup {...args} className="shadow-z3">
      <Button variant="secondary">One</Button>
      <Button variant="secondary">Two</Button>
    </ButtonGroup>
}`,...E.parameters?.docs?.source}}},D=[`Primary`,`Horizontal`,`Vertical`,`IconOnly`,`WithPressedButton`,`CustomClassName`]}));O();export{E as CustomClassName,S as Horizontal,w as IconOnly,x as Primary,C as Vertical,T as WithPressedButton,D as __namedExportsOrder,b as default,O as n,v as t};