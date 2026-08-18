import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-e4ZNzK2_.js";import{Kt as a,t as o}from"./lucide-react-CtgFnAM3.js";import{n as s,t as c}from"./cn-BNhCYuha.js";var l,u,d,f,p,m=t((()=>{l=n(r(),1),s(),u=i(),d={md:`text-p-sm`,sm:`text-p-xs`},f=`rounded-sm text-fg-tertiary transition-colors hover:text-fg-secondary outline-none focus-visible:ring-2 focus-visible:ring-brand-300`,p=(0,l.forwardRef)(function({items:e,currentValue:t,onSelect:n,separator:r=`/`,size:i=`md`,className:a,dataTestId:o,...s},p){let m=t??e[e.length-1]?.value;return(0,u.jsx)(`nav`,{ref:p,"aria-label":`Breadcrumb`,"data-test-id":o,className:c(d[i],a),...s,children:(0,u.jsx)(`ol`,{className:`flex items-center`,children:e.map((e,t)=>{let i=e.value===m;return(0,u.jsxs)(l.Fragment,{children:[t>0&&(0,u.jsx)(`li`,{"aria-hidden":`true`,className:`px-1.5 text-fg-tertiary`,children:r}),(0,u.jsx)(`li`,{className:`flex items-center`,children:i?(0,u.jsx)(`span`,{"aria-current":`page`,className:`font-medium text-fg-default`,children:e.label}):e.disabled?(0,u.jsx)(`span`,{className:`cursor-not-allowed text-fg-disabled`,children:e.label}):e.href?(0,u.jsx)(`a`,{href:e.href,onClick:()=>n?.(e.value),className:f,children:e.label}):(0,u.jsx)(`button`,{type:`button`,onClick:()=>n?.(e.value),className:f,children:e.label})})]},e.value)})})})});try{p.displayName=`Breadcrumb`,p.__docgenInfo={description:``,displayName:`Breadcrumb`,filePath:`/home/runner/work/design-system/design-system/src/components/Breadcrumb/Breadcrumb.tsx`,methods:[],props:{items:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Breadcrumb/Breadcrumb.types.ts`,name:`BreadcrumbProps`}],description:``,name:`items`,parent:{fileName:`design-system/src/components/Breadcrumb/Breadcrumb.types.ts`,name:`BreadcrumbProps`},required:!0,tags:{},type:{name:`BreadcrumbItem[]`}},currentValue:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Breadcrumb/Breadcrumb.types.ts`,name:`BreadcrumbProps`}],description:'Value of the current-page crumb, rendered as plain text with `aria-current="page"`. Defaults to the last item.',name:`currentValue`,parent:{fileName:`design-system/src/components/Breadcrumb/Breadcrumb.types.ts`,name:`BreadcrumbProps`},required:!1,tags:{},type:{name:`string | number`}},onSelect:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Breadcrumb/Breadcrumb.types.ts`,name:`BreadcrumbProps`}],description:``,name:`onSelect`,parent:{fileName:`design-system/src/components/Breadcrumb/Breadcrumb.types.ts`,name:`BreadcrumbProps`},required:!1,tags:{},type:{name:`((value: string | number) => void)`}},separator:{defaultValue:{value:`/`},declarations:[{fileName:`design-system/src/components/Breadcrumb/Breadcrumb.types.ts`,name:`BreadcrumbProps`}],description:"Rendered between crumbs, hidden from assistive tech. Default `'/'`.",name:`separator`,parent:{fileName:`design-system/src/components/Breadcrumb/Breadcrumb.types.ts`,name:`BreadcrumbProps`},required:!1,tags:{},type:{name:`ReactNode`}},size:{defaultValue:{value:`md`},declarations:[{fileName:`design-system/src/components/Breadcrumb/Breadcrumb.types.ts`,name:`BreadcrumbProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/Breadcrumb/Breadcrumb.types.ts`,name:`BreadcrumbProps`},required:!1,tags:{},type:{name:`enum`,raw:`BreadcrumbSize`,value:[{value:`"md"`},{value:`"sm"`}]}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),h=e({CustomClassName:()=>C,CustomSeparator:()=>S,Primary:()=>v,Small:()=>y,WithDisabledCrumb:()=>x,WithOnSelect:()=>b,__namedExportsOrder:()=>w,default:()=>_}),g,_,v,y,b,x,S,C,w,T=t((()=>{o(),m(),g=i(),_={title:`Components/Breadcrumb`,component:p,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:[`md`,`sm`]}},args:{items:[{value:`home`,label:`Home`,href:`#`},{value:`settings`,label:`Settings`,href:`#`},{value:`profile`,label:`Profile`}],size:`md`}},v={},y={args:{size:`sm`}},b={name:`With onSelect (button crumbs)`,args:{items:[{value:`home`,label:`Home`},{value:`settings`,label:`Settings`},{value:`profile`,label:`Profile`}],onSelect:e=>console.log(`selected`,e)}},x={name:`With a disabled crumb`,args:{items:[{value:`home`,label:`Home`,href:`#`},{value:`archived`,label:`Archived project`,disabled:!0},{value:`profile`,label:`Profile`}]}},S={args:{separator:(0,g.jsx)(a,{className:`size-3.5`})}},C={name:`Overriding classes via className`,args:{className:`text-fg-brand`}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'With onSelect (button crumbs)',
  args: {
    items: [{
      value: 'home',
      label: 'Home'
    }, {
      value: 'settings',
      label: 'Settings'
    }, {
      value: 'profile',
      label: 'Profile'
    }],
    onSelect: value => console.log('selected', value)
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'With a disabled crumb',
  args: {
    items: [{
      value: 'home',
      label: 'Home',
      href: '#'
    }, {
      value: 'archived',
      label: 'Archived project',
      disabled: true
    }, {
      value: 'profile',
      label: 'Profile'
    }]
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    separator: <ChevronRight className="size-3.5" />
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'text-fg-brand'
  }
}`,...C.parameters?.docs?.source}}},w=[`Primary`,`Small`,`WithOnSelect`,`WithDisabledCrumb`,`CustomSeparator`,`CustomClassName`]}));T();export{C as CustomClassName,S as CustomSeparator,v as Primary,y as Small,x as WithDisabledCrumb,b as WithOnSelect,w as __namedExportsOrder,_ as default,T as n,h as t};