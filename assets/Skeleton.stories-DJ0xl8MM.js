import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-BgCNYJC5.js";import{n as a,t as o}from"./cn-CHNBg8JS.js";function s(e){if(e!==void 0)return typeof e==`number`?`${e}px`:e}var c,l,u,d,f,p=t((()=>{c=n(r(),1),a(),l=i(),u={text:`h-[1em] mb-[0.4em] origin-[0%_55%] scale-y-[0.6] rounded-sm`,circular:`size-10 rounded-full`,rectangular:`h-4 w-full`,rounded:`h-4 w-full rounded-md`},d={pulse:`animate-pulse`,wave:[`relative overflow-hidden`,`after:absolute after:inset-0 after:content-[''] after:-translate-x-full`,`after:bg-gradient-to-r after:from-transparent after:via-white/60 after:to-transparent`,`after:animate-skeleton-wave dark:after:via-white/10`].join(` `),none:``},f=(0,c.forwardRef)(function({variant:e=`text`,animation:t=`pulse`,width:n,height:r,count:i=1,children:a,style:c,className:f,dataTestId:p,...m},h){let g=a!=null,_=Math.max(1,i),v={...n===void 0?null:{width:s(n)},...r===void 0?null:{height:s(r)},...c},y=o(`block bg-bg-subtle leading-none`,u[e],d[t]);return g?(0,l.jsx)(`span`,{ref:h,"data-test-id":p,className:o(y,`inline-block h-auto w-auto scale-100`,f),style:v,...m,children:(0,l.jsx)(`span`,{className:`invisible inline-block`,"aria-hidden":!0,children:a})}):_===1?(0,l.jsx)(`span`,{ref:h,"data-test-id":p,className:o(y,f),style:v,role:`status`,"aria-label":`Loading`,...m}):(0,l.jsx)(`span`,{ref:h,"data-test-id":p,className:o(`block`,f),...m,children:Array.from({length:_},(e,t)=>(0,l.jsx)(`span`,{className:y,style:v,"aria-hidden":t!==0||void 0,role:t===0?`status`:void 0,"aria-label":t===0?`Loading`:void 0},t))})});try{f.displayName=`Skeleton`,f.__docgenInfo={description:``,displayName:`Skeleton`,filePath:`/home/runner/work/design-system/design-system/src/components/Skeleton/Skeleton.tsx`,methods:[],props:{variant:{defaultValue:{value:`text`},declarations:[{fileName:`design-system/src/components/Skeleton/Skeleton.types.ts`,name:`SkeletonProps`}],description:`Visual shape of the placeholder.`,name:`variant`,parent:{fileName:`design-system/src/components/Skeleton/Skeleton.types.ts`,name:`SkeletonProps`},required:!1,tags:{},type:{name:`enum`,raw:`SkeletonVariant`,value:[{value:`"text"`},{value:`"rounded"`},{value:`"circular"`},{value:`"rectangular"`}]}},animation:{defaultValue:{value:`pulse`},declarations:[{fileName:`design-system/src/components/Skeleton/Skeleton.types.ts`,name:`SkeletonProps`}],description:"Animation style. Pass `'none'` to disable.",name:`animation`,parent:{fileName:`design-system/src/components/Skeleton/Skeleton.types.ts`,name:`SkeletonProps`},required:!1,tags:{},type:{name:`enum`,raw:`SkeletonAnimation`,value:[{value:`"none"`},{value:`"pulse"`},{value:`"wave"`}]}},width:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Skeleton/Skeleton.types.ts`,name:`SkeletonProps`}],description:`Width as a number (px) or any valid CSS length / percentage.`,name:`width`,parent:{fileName:`design-system/src/components/Skeleton/Skeleton.types.ts`,name:`SkeletonProps`},required:!1,tags:{},type:{name:`string | number`}},height:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Skeleton/Skeleton.types.ts`,name:`SkeletonProps`}],description:`Height as a number (px) or any valid CSS length / percentage.`,name:`height`,parent:{fileName:`design-system/src/components/Skeleton/Skeleton.types.ts`,name:`SkeletonProps`},required:!1,tags:{},type:{name:`string | number`}},count:{defaultValue:{value:`1`},declarations:[{fileName:`design-system/src/components/Skeleton/Skeleton.types.ts`,name:`SkeletonProps`}],description:`Render N stacked skeletons. Useful for placeholder paragraphs.`,name:`count`,parent:{fileName:`design-system/src/components/Skeleton/Skeleton.types.ts`,name:`SkeletonProps`},required:!1,tags:{},type:{name:`number`}},children:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Skeleton/Skeleton.types.ts`,name:`SkeletonProps`}],description:`If provided, the skeleton wraps the children and infers its size from
them while the children remain invisible (used as a layout guide).`,name:`children`,parent:{fileName:`design-system/src/components/Skeleton/Skeleton.types.ts`,name:`SkeletonProps`},required:!1,tags:{},type:{name:`ReactNode`}},style:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Skeleton/Skeleton.types.ts`,name:`SkeletonProps`}],description:``,name:`style`,parent:{fileName:`design-system/src/components/Skeleton/Skeleton.types.ts`,name:`SkeletonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),m=e({CardLoading:()=>T,Circular:()=>v,InferredFromChildren:()=>w,MultipleLines:()=>C,NoAnimation:()=>S,Rectangular:()=>y,Rounded:()=>b,Text:()=>_,Wave:()=>x,__namedExportsOrder:()=>E,default:()=>g}),h,g,_,v,y,b,x,S,C,w,T,E,D=t((()=>{p(),h=i(),g={title:`Components/Skeleton`,component:f,parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:[`text`,`circular`,`rectangular`,`rounded`]},animation:{control:`select`,options:[`pulse`,`wave`,`none`]}},args:{variant:`text`,animation:`pulse`,width:280},decorators:[e=>(0,h.jsx)(`div`,{className:`w-72`,children:(0,h.jsx)(e,{})})]},_={},v={args:{variant:`circular`,width:56,height:56}},y={args:{variant:`rectangular`,width:280,height:120}},b={args:{variant:`rounded`,width:280,height:120}},x={args:{variant:`rounded`,height:80,animation:`wave`}},S={name:`No animation`,args:{variant:`rounded`,height:80,animation:`none`}},C={render:e=>(0,h.jsxs)(`div`,{className:`w-90`,children:[(0,h.jsx)(f,{...e,count:3}),(0,h.jsx)(f,{...e,width:`60%`})]})},w={render:()=>(0,h.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,h.jsx)(f,{variant:`circular`,children:(0,h.jsx)(`div`,{className:`size-12`})}),(0,h.jsx)(f,{variant:`text`,children:(0,h.jsx)(`span`,{className:`text-h-xs font-semibold`,children:`The quick brown fox`})})]})},T={render:()=>(0,h.jsxs)(`div`,{className:`flex w-80 flex-col gap-3 rounded-xl border border-border-default p-4`,children:[(0,h.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,h.jsx)(f,{variant:`circular`,width:40,height:40,animation:`wave`}),(0,h.jsxs)(`div`,{className:`flex-1`,children:[(0,h.jsx)(f,{variant:`text`,width:`60%`,animation:`wave`}),(0,h.jsx)(f,{variant:`text`,width:`40%`,animation:`wave`})]})]}),(0,h.jsx)(f,{variant:`rounded`,width:`100%`,height:140,animation:`wave`}),(0,h.jsx)(f,{variant:`text`,count:3,animation:`wave`})]})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'circular',
    width: 56,
    height: 56
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'rectangular',
    width: 280,
    height: 120
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'rounded',
    width: 280,
    height: 120
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'rounded',
    height: 80,
    animation: 'wave'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'No animation',
  args: {
    variant: 'rounded',
    height: 80,
    animation: 'none'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-90">
      <Skeleton {...args} count={3} />
      <Skeleton {...args} width="60%" />
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Skeleton variant="circular">
        <div className="size-12" />
      </Skeleton>
      <Skeleton variant="text">
        <span className="text-h-xs font-semibold">The quick brown fox</span>
      </Skeleton>
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex w-80 flex-col gap-3 rounded-xl border border-border-default p-4">
      <div className="flex items-center gap-3">
        <Skeleton variant="circular" width={40} height={40} animation="wave" />
        <div className="flex-1">
          <Skeleton variant="text" width="60%" animation="wave" />
          <Skeleton variant="text" width="40%" animation="wave" />
        </div>
      </div>
      <Skeleton variant="rounded" width="100%" height={140} animation="wave" />
      <Skeleton variant="text" count={3} animation="wave" />
    </div>
}`,...T.parameters?.docs?.source}}},E=[`Text`,`Circular`,`Rectangular`,`Rounded`,`Wave`,`NoAnimation`,`MultipleLines`,`InferredFromChildren`,`CardLoading`]}));D();export{T as CardLoading,v as Circular,w as InferredFromChildren,C as MultipleLines,S as NoAnimation,y as Rectangular,b as Rounded,_ as Text,x as Wave,E as __namedExportsOrder,g as default,D as n,m as t};