import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-e4ZNzK2_.js";import{n as a,t as o}from"./cn-BNhCYuha.js";var s,c,l,u,d,f,p=t((()=>{s=n(r(),1),a(),c=i(),l={brand:`bg-brand-500`,blue:`bg-blue-500`,purple:`bg-purple-500`,pink:`bg-pink-500`,yellow:`bg-yellow-500`,red:`bg-red-500`,gray:`bg-gray-400`},u={sm:`h-1`,lg:`h-2`},d=e=>new Intl.NumberFormat().format(e),f=(0,s.forwardRef)(function({segments:e,hideLegend:t=!1,formatValue:n=d,size:r=`lg`,className:i,dataTestId:a,...s},f){let p=e.reduce((e,t)=>e+t.value,0);return(0,c.jsxs)(`div`,{ref:f,"data-test-id":a,className:o(`flex flex-col gap-3`,i),...s,children:[(0,c.jsx)(`div`,{className:o(`flex w-full overflow-hidden rounded-full bg-bg-subtle`,u[r]),children:e.map((e,t)=>(0,c.jsx)(`div`,{style:{flexBasis:`${p>0?e.value/p*100:0}%`},className:o(`transition-[flex-basis] duration-700 ease-out`,l[e.color])},t))}),!t&&(0,c.jsx)(`ul`,{className:`flex flex-col [&>li:not(:last-child)]:border-b [&>li:not(:last-child)]:border-border-default`,children:e.filter(e=>!e.hideFromLegend).map((e,t)=>(0,c.jsxs)(`li`,{className:`flex items-center justify-between gap-3 py-1.5`,children:[(0,c.jsxs)(`span`,{className:`flex min-w-0 items-center gap-2`,children:[(0,c.jsx)(`span`,{className:o(`size-2 shrink-0 rounded-full`,l[e.color])}),(0,c.jsx)(`span`,{className:`truncate text-p-sm text-fg-tertiary`,children:e.label})]}),(0,c.jsxs)(`span`,{className:`shrink-0 text-p-sm text-fg-default tabular-nums`,children:[n(e.value),e.unit?` ${e.unit}`:``]})]},t))})]})});try{f.displayName=`DistributionBar`,f.__docgenInfo={description:``,displayName:`DistributionBar`,filePath:`/home/runner/work/design-system/design-system/src/components/DistributionBar/DistributionBar.tsx`,methods:[],props:{segments:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DistributionBar/DistributionBar.types.ts`,name:`DistributionBarProps`}],description:``,name:`segments`,parent:{fileName:`design-system/src/components/DistributionBar/DistributionBar.types.ts`,name:`DistributionBarProps`},required:!0,tags:{},type:{name:`DistributionSegment[]`}},hideLegend:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/DistributionBar/DistributionBar.types.ts`,name:`DistributionBarProps`}],description:``,name:`hideLegend`,parent:{fileName:`design-system/src/components/DistributionBar/DistributionBar.types.ts`,name:`DistributionBarProps`},required:!1,tags:{},type:{name:`boolean`}},formatValue:{defaultValue:{value:`(value: number) => new Intl.NumberFormat().format(value)`},declarations:[{fileName:`design-system/src/components/DistributionBar/DistributionBar.types.ts`,name:`DistributionBarProps`}],description:"Default: `Intl.NumberFormat().format`.",name:`formatValue`,parent:{fileName:`design-system/src/components/DistributionBar/DistributionBar.types.ts`,name:`DistributionBarProps`},required:!1,tags:{},type:{name:`((value: number) => string)`}},size:{defaultValue:{value:`lg`},declarations:[{fileName:`design-system/src/components/DistributionBar/DistributionBar.types.ts`,name:`DistributionBarProps`}],description:``,name:`size`,parent:{fileName:`design-system/src/components/DistributionBar/DistributionBar.types.ts`,name:`DistributionBarProps`},required:!1,tags:{},type:{name:`enum`,raw:`DistributionBarSize`,value:[{value:`"lg"`},{value:`"sm"`}]}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),m=e({AllZero:()=>C,CustomClassName:()=>w,CustomFormatter:()=>x,Empty:()=>S,HiddenLegend:()=>y,HideOneFromLegend:()=>b,Primary:()=>_,Small:()=>v,__namedExportsOrder:()=>T,default:()=>g}),h,g,_,v,y,b,x,S,C,w,T,E=t((()=>{p(),h=i(),g={title:`Components/DistributionBar`,component:f,parameters:{layout:`centered`},args:{segments:[{label:`Salaries`,value:62e3,color:`brand`,unit:`AMD`},{label:`Benefits`,value:18e3,color:`blue`,unit:`AMD`},{label:`Equipment`,value:9e3,color:`purple`,unit:`AMD`},{label:`Other`,value:4e3,color:`gray`,unit:`AMD`}]},decorators:[e=>(0,h.jsx)(`div`,{className:`w-96`,children:(0,h.jsx)(e,{})})]},_={},v={args:{size:`sm`}},y={name:`Hidden legend`,args:{hideLegend:!0}},b={name:`One segment hidden from legend (still counted)`,args:{segments:[{label:`Salaries`,value:62e3,color:`brand`,unit:`AMD`},{label:`Benefits`,value:18e3,color:`blue`,unit:`AMD`},{label:`Misc (rounding)`,value:500,color:`gray`,unit:`AMD`,hideFromLegend:!0}]}},x={args:{formatValue:e=>`${(e/1e3).toFixed(1)}k`}},S={args:{segments:[]}},C={name:`All values zero`,args:{segments:[{label:`Salaries`,value:0,color:`brand`},{label:`Benefits`,value:0,color:`blue`},{label:`Other`,value:0,color:`gray`}]}},w={name:`Overriding classes via className`,args:{className:`gap-1`}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Hidden legend',
  args: {
    hideLegend: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'One segment hidden from legend (still counted)',
  args: {
    segments: [{
      label: 'Salaries',
      value: 62000,
      color: 'brand',
      unit: 'AMD'
    }, {
      label: 'Benefits',
      value: 18000,
      color: 'blue',
      unit: 'AMD'
    }, {
      label: 'Misc (rounding)',
      value: 500,
      color: 'gray',
      unit: 'AMD',
      hideFromLegend: true
    }]
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    formatValue: value => \`\${(value / 1000).toFixed(1)}k\`
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    segments: []
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'All values zero',
  args: {
    segments: [{
      label: 'Salaries',
      value: 0,
      color: 'brand'
    }, {
      label: 'Benefits',
      value: 0,
      color: 'blue'
    }, {
      label: 'Other',
      value: 0,
      color: 'gray'
    }]
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    className: 'gap-1'
  }
}`,...w.parameters?.docs?.source}}},T=[`Primary`,`Small`,`HiddenLegend`,`HideOneFromLegend`,`CustomFormatter`,`Empty`,`AllZero`,`CustomClassName`]}));E();export{C as AllZero,w as CustomClassName,x as CustomFormatter,S as Empty,y as HiddenLegend,b as HideOneFromLegend,_ as Primary,v as Small,T as __namedExportsOrder,g as default,E as n,m as t};