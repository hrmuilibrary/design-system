import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-04k_LSg4.js";import{Mt as a,Pt as o,t as s,ut as c}from"./lucide-react-BwflW6FD.js";import{n as l,t as u}from"./cn-BNhCYuha.js";function d(e,t,n,r){if(t<=n*2+3+r*2)return Array.from({length:t},(e,t)=>t+1);let i=Math.max(e-n,r+2),a=Math.min(e+n,t-r-1),o=i>r+2,s=a<t-r-1,c=Array.from({length:r},(e,t)=>t+1),l=Array.from({length:r},(e,n)=>t-r+1+n),u=[];if(o){u.push(`ellipsis-left`);for(let e=i;e<=a;e++)u.push(e)}else for(let e=r+1;e<=a;e++)u.push(e);if(s)u.push(`ellipsis-right`);else for(let e=a+1;e<=t-r;e++)u.push(e);return[...c,...u,...l]}var f,p,m,h,g,_=t((()=>{f=n(r(),1),s(),l(),p=i(),m=`inline-flex items-center justify-center min-w-9 h-9 px-2 text-p-std rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300`,h=`text-fg-default hover:bg-bg-subtle disabled:text-fg-disabled disabled:hover:bg-transparent disabled:cursor-not-allowed`,g=(0,f.forwardRef)(function({page:e,pageCount:t,onPageChange:n,siblingCount:r=1,boundaryCount:i=1,className:s,dataTestId:l,"aria-label":f,...g},_){let v=d(e,t,r,i),y=e<=1,b=e>=t;return(0,p.jsxs)(`nav`,{ref:_,"aria-label":f??`Pagination`,"data-test-id":l,className:u(`inline-flex items-center gap-1`,s),...g,children:[(0,p.jsx)(`button`,{type:`button`,onClick:()=>!y&&n(e-1),disabled:y,"aria-label":`Previous page`,className:u(m,h),children:(0,p.jsx)(o,{className:`h-4 w-4`})}),v.map((t,r)=>{if(t===`ellipsis-left`||t===`ellipsis-right`)return(0,p.jsx)(`span`,{"aria-hidden":!0,className:`inline-flex items-center justify-center w-9 h-9 text-fg-tertiary`,children:(0,p.jsx)(c,{className:`h-4 w-4`})},`${t}-${r}`);let i=t===e;return(0,p.jsx)(`button`,{type:`button`,onClick:()=>n(t),"aria-current":i?`page`:void 0,className:u(m,i?`bg-brand-500 text-white font-semibold hover:bg-brand-600`:`text-fg-default hover:bg-bg-subtle`),children:t},t)}),(0,p.jsx)(`button`,{type:`button`,onClick:()=>!b&&n(e+1),disabled:b,"aria-label":`Next page`,className:u(m,h),children:(0,p.jsx)(a,{className:`h-4 w-4`})})]})});try{g.displayName=`Pagination`,g.__docgenInfo={description:``,displayName:`Pagination`,filePath:`/home/runner/work/design-system/design-system/src/components/Pagination/Pagination.tsx`,methods:[],props:{page:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Pagination/Pagination.types.ts`,name:`PaginationProps`}],description:`Current active page, 1-indexed.`,name:`page`,parent:{fileName:`design-system/src/components/Pagination/Pagination.types.ts`,name:`PaginationProps`},required:!0,tags:{},type:{name:`number`}},pageCount:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Pagination/Pagination.types.ts`,name:`PaginationProps`}],description:`Total number of pages.`,name:`pageCount`,parent:{fileName:`design-system/src/components/Pagination/Pagination.types.ts`,name:`PaginationProps`},required:!0,tags:{},type:{name:`number`}},onPageChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/Pagination/Pagination.types.ts`,name:`PaginationProps`}],description:`Called with the target page number when a page, previous, or next control is activated.`,name:`onPageChange`,parent:{fileName:`design-system/src/components/Pagination/Pagination.types.ts`,name:`PaginationProps`},required:!0,tags:{},type:{name:`(page: number) => void`}},siblingCount:{defaultValue:{value:`1`},declarations:[{fileName:`design-system/src/components/Pagination/Pagination.types.ts`,name:`PaginationProps`}],description:`How many page numbers to show on each side of the current page.`,name:`siblingCount`,parent:{fileName:`design-system/src/components/Pagination/Pagination.types.ts`,name:`PaginationProps`},required:!1,tags:{default:`1`},type:{name:`number`}},boundaryCount:{defaultValue:{value:`1`},declarations:[{fileName:`design-system/src/components/Pagination/Pagination.types.ts`,name:`PaginationProps`}],description:`How many page numbers to always show at the start and end of the range.`,name:`boundaryCount`,parent:{fileName:`design-system/src/components/Pagination/Pagination.types.ts`,name:`PaginationProps`},required:!1,tags:{default:`1`},type:{name:`number`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),v=e({CustomAriaLabel:()=>A,CustomClassName:()=>j,FewPages:()=>E,LastPage:()=>T,ManyPages:()=>D,MiddleOfRange:()=>w,Primary:()=>C,WiderBoundaryCount:()=>k,WiderSiblingCount:()=>O,__namedExportsOrder:()=>M,default:()=>S});function y(e){let[t,n]=(0,b.useState)(e.page);return(0,x.jsx)(g,{...e,page:t,onPageChange:n})}var b,x,S,C,w,T,E,D,O,k,A,j,M,N=t((()=>{b=n(r(),1),_(),x=i(),S={title:`Components/Pagination`,component:g,parameters:{layout:`centered`},args:{page:1,pageCount:10,siblingCount:1,boundaryCount:1},render:e=>(0,x.jsx)(y,{...e})},C={},w={args:{page:5,pageCount:10}},T={args:{page:10,pageCount:10}},E={name:`Few pages (no ellipsis needed)`,args:{page:2,pageCount:4}},D={name:`Many pages (both ellipses)`,args:{page:50,pageCount:100}},O={args:{page:10,pageCount:20,siblingCount:2}},k={args:{page:10,pageCount:20,boundaryCount:2}},A={name:`Custom aria-label`,args:{"aria-label":`Search results pages`}},j={name:`Overriding classes via className`,args:{page:3,pageCount:8,className:`gap-2 p-2 bg-bg-container rounded-lg`}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    page: 5,
    pageCount: 10
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    page: 10,
    pageCount: 10
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Few pages (no ellipsis needed)',
  args: {
    page: 2,
    pageCount: 4
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Many pages (both ellipses)',
  args: {
    page: 50,
    pageCount: 100
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    page: 10,
    pageCount: 20,
    siblingCount: 2
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    page: 10,
    pageCount: 20,
    boundaryCount: 2
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Custom aria-label',
  args: {
    'aria-label': 'Search results pages'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    page: 3,
    pageCount: 8,
    className: 'gap-2 p-2 bg-bg-container rounded-lg'
  }
}`,...j.parameters?.docs?.source}}},M=[`Primary`,`MiddleOfRange`,`LastPage`,`FewPages`,`ManyPages`,`WiderSiblingCount`,`WiderBoundaryCount`,`CustomAriaLabel`,`CustomClassName`]}));N();export{A as CustomAriaLabel,j as CustomClassName,E as FewPages,T as LastPage,D as ManyPages,w as MiddleOfRange,C as Primary,k as WiderBoundaryCount,O as WiderSiblingCount,M as __namedExportsOrder,S as default,N as n,v as t};