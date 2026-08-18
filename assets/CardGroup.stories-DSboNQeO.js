import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-e4ZNzK2_.js";import{n as a,t as o}from"./cn-BNhCYuha.js";import{n as s,t as c}from"./Card-Cvi4zNMS.js";var l=t((()=>{s()})),u,d,f,p,m=t((()=>{u=n(r(),1),a(),l(),d=i(),f={brand:`bg-bg-brand-lighter text-brand-800`,blue:`bg-bg-info-lighter text-blue-800`,purple:`bg-purple-50 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200`,pink:`bg-pink-50 text-pink-800 dark:bg-pink-900/30 dark:text-pink-200`,yellow:`bg-bg-warning-lighter text-yellow-900`,gray:`bg-bg-subtle text-fg-secondary`},p=(0,u.forwardRef)(function({title:e,header:t,children:n,noDivider:r=!1,className:i,dataTestId:a,...s},l){let u=e?.placement??`left`,p=!!e&&u!==`top`,m=e&&(0,d.jsx)(`div`,{className:o(`flex shrink-0 items-center justify-center text-center text-label-md font-bold`,p?o(`px-2 [writing-mode:vertical-rl]`,u===`left`&&`rotate-180`):`px-4 py-2`,f[e.color??`gray`]),children:e.text});return(0,d.jsx)(c,{ref:l,dataTestId:a,variant:`outlined`,padding:`none`,className:i,...s,children:(0,d.jsxs)(`div`,{className:o(`flex`,p?u===`right`?`flex-row-reverse`:`flex-row`:`flex-col`),children:[m,(0,d.jsxs)(`div`,{className:o(`min-w-0 flex-1`,!r&&`[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-border-default`),children:[t,n]})]})})});try{p.displayName=`CardGroup`,p.__docgenInfo={description:``,displayName:`CardGroup`,filePath:`/home/runner/work/design-system/design-system/src/components/CardGroup/CardGroup.tsx`,methods:[],props:{title:{defaultValue:null,declarations:[{fileName:`design-system/src/components/CardGroup/CardGroup.types.ts`,name:`CardGroupProps`}],description:``,name:`title`,parent:{fileName:`design-system/src/components/CardGroup/CardGroup.types.ts`,name:`CardGroupProps`},required:!1,tags:{},type:{name:`CardGroupTitle`}},header:{defaultValue:null,declarations:[{fileName:`design-system/src/components/CardGroup/CardGroup.types.ts`,name:`CardGroupProps`}],description:`Extra content beside the title, rendered as the first divided section.`,name:`header`,parent:{fileName:`design-system/src/components/CardGroup/CardGroup.types.ts`,name:`CardGroupProps`},required:!1,tags:{},type:{name:`ReactNode`}},noDivider:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/CardGroup/CardGroup.types.ts`,name:`CardGroupProps`}],description:`Disables the automatic divider between the header and each child.`,name:`noDivider`,parent:{fileName:`design-system/src/components/CardGroup/CardGroup.types.ts`,name:`CardGroupProps`},required:!1,tags:{},type:{name:`boolean`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),h=e({AllColors:()=>S,CustomClassName:()=>T,NoTitle:()=>w,Primary:()=>v,TitleOnRight:()=>y,TitleOnTop:()=>b,WithHeaderAndNoDivider:()=>C,__namedExportsOrder:()=>E,default:()=>_}),g,_,v,y,b,x,S,C,w,T,E,D=t((()=>{m(),g=i(),_={title:`Components/CardGroup`,component:p,parameters:{layout:`centered`},decorators:[e=>(0,g.jsx)(`div`,{className:`w-96`,children:(0,g.jsx)(e,{})})]},v={args:{title:{text:`Billing`},children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`div`,{className:`p-4 text-p-std text-fg-default`,children:`Plan: Enterprise`}),(0,g.jsx)(`div`,{className:`p-4 text-p-std text-fg-default`,children:`Next invoice: Jan 1`})]})}},y={name:`Title placement: right`,args:{title:{text:`Security`,placement:`right`,color:`blue`},children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`div`,{className:`p-4 text-p-std text-fg-default`,children:`Two-factor auth: On`}),(0,g.jsx)(`div`,{className:`p-4 text-p-std text-fg-default`,children:`Active sessions: 2`})]})}},b={name:`Title placement: top`,args:{title:{text:`Notifications`,placement:`top`,color:`purple`},children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`div`,{className:`p-4 text-p-std text-fg-default`,children:`Email: On`}),(0,g.jsx)(`div`,{className:`p-4 text-p-std text-fg-default`,children:`Push: Off`})]})}},x=[`brand`,`blue`,`purple`,`pink`,`yellow`,`gray`],S={render:()=>(0,g.jsx)(`div`,{className:`flex flex-col gap-4`,children:x.map(e=>(0,g.jsx)(p,{title:{text:e,color:e},children:(0,g.jsxs)(`div`,{className:`p-4 text-p-std text-fg-default`,children:[`Content for `,e]})},e))})},C={name:`header slot, noDivider`,args:{title:{text:`Team`},noDivider:!0,header:(0,g.jsx)(`div`,{className:`p-4 text-p-sm font-medium text-fg-secondary`,children:`4 members`}),children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`div`,{className:`p-4 text-p-std text-fg-default`,children:`Ada Lovelace`}),(0,g.jsx)(`div`,{className:`p-4 text-p-std text-fg-default`,children:`Grace Hopper`})]})}},w={name:`No title (plain bordered box)`,args:{children:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`div`,{className:`p-4 text-p-std text-fg-default`,children:`Section one`}),(0,g.jsx)(`div`,{className:`p-4 text-p-std text-fg-default`,children:`Section two`})]})}},T={name:`Overriding classes via className`,args:{title:{text:`Custom`},className:`border-brand-500 shadow-z3`,children:(0,g.jsx)(`div`,{className:`p-4 text-p-std text-fg-default`,children:`Content`})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: {
      text: 'Billing'
    },
    children: <>
        <div className="p-4 text-p-std text-fg-default">Plan: Enterprise</div>
        <div className="p-4 text-p-std text-fg-default">Next invoice: Jan 1</div>
      </>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Title placement: right',
  args: {
    title: {
      text: 'Security',
      placement: 'right',
      color: 'blue'
    },
    children: <>
        <div className="p-4 text-p-std text-fg-default">Two-factor auth: On</div>
        <div className="p-4 text-p-std text-fg-default">Active sessions: 2</div>
      </>
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Title placement: top',
  args: {
    title: {
      text: 'Notifications',
      placement: 'top',
      color: 'purple'
    },
    children: <>
        <div className="p-4 text-p-std text-fg-default">Email: On</div>
        <div className="p-4 text-p-std text-fg-default">Push: Off</div>
      </>
  }
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      {COLORS.map(color => <CardGroup key={color} title={{
      text: color,
      color
    }}>
          <div className="p-4 text-p-std text-fg-default">Content for {color}</div>
        </CardGroup>)}
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'header slot, noDivider',
  args: {
    title: {
      text: 'Team'
    },
    noDivider: true,
    header: <div className="p-4 text-p-sm font-medium text-fg-secondary">4 members</div>,
    children: <>
        <div className="p-4 text-p-std text-fg-default">Ada Lovelace</div>
        <div className="p-4 text-p-std text-fg-default">Grace Hopper</div>
      </>
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'No title (plain bordered box)',
  args: {
    children: <>
        <div className="p-4 text-p-std text-fg-default">Section one</div>
        <div className="p-4 text-p-std text-fg-default">Section two</div>
      </>
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    title: {
      text: 'Custom'
    },
    className: 'border-brand-500 shadow-z3',
    children: <div className="p-4 text-p-std text-fg-default">Content</div>
  }
}`,...T.parameters?.docs?.source}}},E=[`Primary`,`TitleOnRight`,`TitleOnTop`,`AllColors`,`WithHeaderAndNoDivider`,`NoTitle`,`CustomClassName`]}));D();export{S as AllColors,T as CustomClassName,w as NoTitle,v as Primary,y as TitleOnRight,b as TitleOnTop,C as WithHeaderAndNoDivider,E as __namedExportsOrder,_ as default,D as n,h as t};