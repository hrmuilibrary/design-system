import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-CwcXNU-m.js";import{Et as a,Q as o,St as s,c,g as l,n as u,t as d}from"./lucide-react-lf4oV1Yb.js";import{n as f,t as p}from"./cn-BNhCYuha.js";import{t as m}from"./Button-Dus381rO.js";import{t as h}from"./Button-BFazwA9a.js";var g,_,v,y,b=t((()=>{g=n(r(),1),d(),f(),_=i(),v={success:{container:`bg-green-50 border-green-200`,iconColor:`text-green-600`,DefaultIcon:a},warning:{container:`bg-yellow-50 border-yellow-200`,iconColor:`text-yellow-800`,DefaultIcon:c},danger:{container:`bg-red-50 border-red-200`,iconColor:`text-red-700`,DefaultIcon:s},info:{container:`bg-blue-50 border-blue-200`,iconColor:`text-blue-700`,DefaultIcon:o},discovery:{container:`bg-purple-50 border-purple-200`,iconColor:`text-purple-700`,DefaultIcon:l}},y=(0,g.forwardRef)(function({variant:e=`info`,title:t,description:n,onDismiss:r,actions:i,icon:a,className:o,dataTestId:s,...c},l){let{container:d,iconColor:f,DefaultIcon:m}=v[e];return(0,_.jsxs)(`div`,{ref:l,role:`alert`,"data-test-id":s,className:p(`flex gap-3 p-4 border rounded-lg`,d,o),...c,children:[(0,_.jsx)(`div`,{className:p(`flex-shrink-0 mt-0.5`,f),children:a??(0,_.jsx)(m,{className:`h-5 w-5`,"aria-hidden":!0})}),(0,_.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[t&&(0,_.jsx)(`div`,{className:`text-p-std font-semibold text-fg-default mb-0.5`,children:t}),n&&(0,_.jsx)(`div`,{className:`text-p-std text-fg-secondary`,children:n}),i&&(0,_.jsx)(`div`,{className:`mt-3 flex flex-wrap items-center gap-2`,children:i})]}),r&&(0,_.jsx)(`button`,{type:`button`,onClick:r,"aria-label":`Dismiss`,className:`flex-shrink-0 -mr-1 -mt-1 p-1 rounded-md text-fg-secondary hover:text-fg-default hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300`,children:(0,_.jsx)(u,{className:`h-4 w-4`})})]})});try{y.displayName=`InlineAlert`,y.__docgenInfo={description:``,displayName:`InlineAlert`,filePath:`/home/runner/work/design-system/design-system/src/components/InlineAlert/InlineAlert.tsx`,methods:[],props:{variant:{defaultValue:{value:`info`},declarations:[{fileName:`design-system/src/components/InlineAlert/InlineAlert.types.ts`,name:`InlineAlertProps`}],description:``,name:`variant`,parent:{fileName:`design-system/src/components/InlineAlert/InlineAlert.types.ts`,name:`InlineAlertProps`},required:!1,tags:{},type:{name:`enum`,raw:`InlineAlertVariant`,value:[{value:`"warning"`},{value:`"info"`},{value:`"success"`},{value:`"danger"`},{value:`"discovery"`}]}},title:{defaultValue:null,declarations:[{fileName:`design-system/src/components/InlineAlert/InlineAlert.types.ts`,name:`InlineAlertProps`}],description:"Overrides the native `title` (tooltip) attribute — rendered as the alert's heading.",name:`title`,parent:{fileName:`design-system/src/components/InlineAlert/InlineAlert.types.ts`,name:`InlineAlertProps`},required:!1,tags:{},type:{name:`ReactNode`}},description:{defaultValue:null,declarations:[{fileName:`design-system/src/components/InlineAlert/InlineAlert.types.ts`,name:`InlineAlertProps`}],description:``,name:`description`,parent:{fileName:`design-system/src/components/InlineAlert/InlineAlert.types.ts`,name:`InlineAlertProps`},required:!1,tags:{},type:{name:`ReactNode`}},onDismiss:{defaultValue:null,declarations:[{fileName:`design-system/src/components/InlineAlert/InlineAlert.types.ts`,name:`InlineAlertProps`}],description:`Renders a trailing dismiss button that calls this on click.`,name:`onDismiss`,parent:{fileName:`design-system/src/components/InlineAlert/InlineAlert.types.ts`,name:`InlineAlertProps`},required:!1,tags:{},type:{name:`(() => void)`}},actions:{defaultValue:null,declarations:[{fileName:`design-system/src/components/InlineAlert/InlineAlert.types.ts`,name:`InlineAlertProps`}],description:`Extra content (typically buttons) rendered below the description.`,name:`actions`,parent:{fileName:`design-system/src/components/InlineAlert/InlineAlert.types.ts`,name:`InlineAlertProps`},required:!1,tags:{},type:{name:`ReactNode`}},icon:{defaultValue:null,declarations:[{fileName:`design-system/src/components/InlineAlert/InlineAlert.types.ts`,name:`InlineAlertProps`}],description:`Overrides the variant's default icon.`,name:`icon`,parent:{fileName:`design-system/src/components/InlineAlert/InlineAlert.types.ts`,name:`InlineAlertProps`},required:!1,tags:{},type:{name:`ReactNode`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),x=e({AllVariants:()=>F,CustomClassName:()=>N,Danger:()=>D,Discovery:()=>O,Dismissible:()=>A,Info:()=>w,Success:()=>T,TitleOnly:()=>k,Warning:()=>E,WithActions:()=>j,WithCustomIcon:()=>M,__namedExportsOrder:()=>I,default:()=>C}),S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L=t((()=>{h(),b(),S=i(),C={title:`Components/InlineAlert`,component:y,parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:[`success`,`warning`,`danger`,`info`,`discovery`]}},args:{variant:`info`,title:`Heads up`,description:`This is an inline alert with a title and description.`},decorators:[e=>(0,S.jsx)(`div`,{className:`w-96`,children:(0,S.jsx)(e,{})})]},w={},T={args:{variant:`success`,title:`Changes saved`,description:`Your profile has been updated successfully.`}},E={args:{variant:`warning`,title:`Review required`,description:`Some fields need your attention before you can continue.`}},D={args:{variant:`danger`,title:`Something went wrong`,description:`We couldn’t process your request. Please try again.`}},O={args:{variant:`discovery`,title:`New feature available`,description:`Check out the new dashboard layout in your settings.`}},k={args:{title:`Saved as draft`,description:void 0}},A={args:{title:`Dismissible alert`,description:`Click the close button to dismiss this alert.`,onDismiss:()=>{}}},j={args:{variant:`warning`,title:`Unsaved changes`,description:`You have unsaved changes that will be lost if you leave this page.`,actions:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(m,{size:`sm`,variant:`secondary`,children:`Discard`}),(0,S.jsx)(m,{size:`sm`,variant:`primary`,children:`Save changes`})]})}},M={name:`Custom icon`,args:{icon:(0,S.jsx)(`span`,{className:`text-lg leading-none`,children:`🚀`}),title:`Custom icon override`,description:"The `icon` prop replaces the variant’s default icon."}},N={name:`Overriding classes via className`,args:{variant:`success`,className:`bg-green-100 border-green-300 rounded-2xl`,title:`Custom styling`,description:`className merges with tailwind-merge, so it wins over defaults.`}},P=[`success`,`warning`,`danger`,`info`,`discovery`],F={render:e=>(0,S.jsx)(`div`,{className:`flex flex-col gap-3`,children:P.map(t=>(0,S.jsx)(y,{...e,variant:t,title:t.charAt(0).toUpperCase()+t.slice(1)},t))})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Changes saved',
    description: 'Your profile has been updated successfully.'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Review required',
    description: 'Some fields need your attention before you can continue.'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    title: 'Something went wrong',
    description: 'We couldn’t process your request. Please try again.'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'discovery',
    title: 'New feature available',
    description: 'Check out the new dashboard layout in your settings.'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Saved as draft',
    description: undefined
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Dismissible alert',
    description: 'Click the close button to dismiss this alert.',
    onDismiss: () => {}
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Unsaved changes',
    description: 'You have unsaved changes that will be lost if you leave this page.',
    actions: <>
        <Button size="sm" variant="secondary">
          Discard
        </Button>
        <Button size="sm" variant="primary">
          Save changes
        </Button>
      </>
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Custom icon',
  args: {
    icon: <span className="text-lg leading-none">{'\\u{1F680}'}</span>,
    title: 'Custom icon override',
    description: 'The \`icon\` prop replaces the variant’s default icon.'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    variant: 'success',
    className: 'bg-green-100 border-green-300 rounded-2xl',
    title: 'Custom styling',
    description: 'className merges with tailwind-merge, so it wins over defaults.'
  }
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col gap-3">
      {VARIANTS.map(variant => <InlineAlert key={variant} {...args} variant={variant} title={variant.charAt(0).toUpperCase() + variant.slice(1)} />)}
    </div>
}`,...F.parameters?.docs?.source}}},I=[`Info`,`Success`,`Warning`,`Danger`,`Discovery`,`TitleOnly`,`Dismissible`,`WithActions`,`WithCustomIcon`,`CustomClassName`,`AllVariants`]}));L();export{F as AllVariants,N as CustomClassName,D as Danger,O as Discovery,A as Dismissible,w as Info,T as Success,k as TitleOnly,E as Warning,j as WithActions,M as WithCustomIcon,I as __namedExportsOrder,C as default,L as n,x as t};