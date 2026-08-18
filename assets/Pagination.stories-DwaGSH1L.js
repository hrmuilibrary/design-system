import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-e4ZNzK2_.js";import{n as a,t as o}from"./Pagination-B0-x0xZ4.js";var s=e({CustomAriaLabel:()=>y,CustomClassName:()=>b,FewPages:()=>h,LastPage:()=>m,ManyPages:()=>g,MiddleOfRange:()=>p,Primary:()=>f,WiderBoundaryCount:()=>v,WiderSiblingCount:()=>_,__namedExportsOrder:()=>x,default:()=>d});function c(e){let[t,n]=(0,l.useState)(e.page);return(0,u.jsx)(o,{...e,page:t,onPageChange:n})}var l,u,d,f,p,m,h,g,_,v,y,b,x,S=t((()=>{l=n(r(),1),a(),u=i(),d={title:`Components/Pagination`,component:o,parameters:{layout:`centered`},args:{page:1,pageCount:10,siblingCount:1,boundaryCount:1},render:e=>(0,u.jsx)(c,{...e})},f={},p={args:{page:5,pageCount:10}},m={args:{page:10,pageCount:10}},h={name:`Few pages (no ellipsis needed)`,args:{page:2,pageCount:4}},g={name:`Many pages (both ellipses)`,args:{page:50,pageCount:100}},_={args:{page:10,pageCount:20,siblingCount:2}},v={args:{page:10,pageCount:20,boundaryCount:2}},y={name:`Custom aria-label`,args:{"aria-label":`Search results pages`}},b={name:`Overriding classes via className`,args:{page:3,pageCount:8,className:`gap-2 p-2 bg-bg-container rounded-lg`}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    page: 5,
    pageCount: 10
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    page: 10,
    pageCount: 10
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Few pages (no ellipsis needed)',
  args: {
    page: 2,
    pageCount: 4
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Many pages (both ellipses)',
  args: {
    page: 50,
    pageCount: 100
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    page: 10,
    pageCount: 20,
    siblingCount: 2
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    page: 10,
    pageCount: 20,
    boundaryCount: 2
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Custom aria-label',
  args: {
    'aria-label': 'Search results pages'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  args: {
    page: 3,
    pageCount: 8,
    className: 'gap-2 p-2 bg-bg-container rounded-lg'
  }
}`,...b.parameters?.docs?.source}}},x=[`Primary`,`MiddleOfRange`,`LastPage`,`FewPages`,`ManyPages`,`WiderSiblingCount`,`WiderBoundaryCount`,`CustomAriaLabel`,`CustomClassName`]}));S();export{y as CustomAriaLabel,b as CustomClassName,h as FewPages,m as LastPage,g as ManyPages,p as MiddleOfRange,f as Primary,v as WiderBoundaryCount,_ as WiderSiblingCount,x as __namedExportsOrder,d as default,S as n,s as t};