import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-B_LPFnTU.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-3Am95l4w.js";import{t as c}from"./mdx-react-shim-DrJ0tF8B.js";import{n as l,t as u}from"./Avatar.stories-BBhLXdMH.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`avatar`,children:`Avatar`}),`
`,(0,p.jsxs)(t.p,{children:[`Represents a person or entity as a circular (or square) image, initials, or
icon. Falls back automatically: an image that fails to load (`,(0,p.jsx)(t.code,{children:`onError`}),`)
reverts to initials derived from `,(0,p.jsx)(t.code,{children:`name`}),`, and no `,(0,p.jsx)(t.code,{children:`name`}),` at all falls back to
a generic user icon (or a custom `,(0,p.jsx)(t.code,{children:`fallback`}),` node). When `,(0,p.jsx)(t.code,{children:`name`}),` drives the
initials, the background color is also derived deterministically from the
name so the same person always gets the same color.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`sizes`,children:`Sizes`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`size`}),` scales both the avatar and its status dot together, from `,(0,p.jsx)(t.code,{children:`xs`}),` through
`,(0,p.jsx)(t.code,{children:`2xl`}),`.`]}),`
`,(0,p.jsx)(t.h2,{id:`status-indicator`,children:`Status indicator`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`status`}),` renders a small ring-bordered dot (`,(0,p.jsx)(t.code,{children:`online`}),` / `,(0,p.jsx)(t.code,{children:`offline`}),` / `,(0,p.jsx)(t.code,{children:`away`}),` /
`,(0,p.jsx)(t.code,{children:`busy`}),`) anchored to the bottom-right corner.`]}),`
`,(0,p.jsx)(t.h2,{id:`fallback-order`,children:`Fallback order`}),`
`,(0,p.jsxs)(t.ol,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`src`}),` renders as an `,(0,p.jsx)(t.code,{children:`<img>`}),` — until it fails to load.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`name`}),` renders as initials (max two characters) on a name-derived
background color.`]}),`
`,(0,p.jsxs)(t.li,{children:[`A generic user icon, or a caller-supplied `,(0,p.jsx)(t.code,{children:`fallback`}),` node, when neither
`,(0,p.jsx)(t.code,{children:`src`}),` nor `,(0,p.jsx)(t.code,{children:`name`}),` is present.`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`avatargroup`,children:`AvatarGroup`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`AvatarGroup`}),` stacks `,(0,p.jsx)(t.code,{children:`Avatar`}),` children with a slight negative margin and a
white ring separator, most recent first (`,(0,p.jsx)(t.code,{children:`z-index`}),` decreases left to
right). Pass `,(0,p.jsx)(t.code,{children:`max`}),` to cap how many are shown; anything beyond that renders
as a `,(0,p.jsx)(t.code,{children:`+N`}),` avatar using the same name-derived coloring as a regular avatar.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<AvatarGroup size="md" max={3}>
  <Avatar name="Ada Lovelace" />
  <Avatar name="Grace Hopper" />
  <Avatar src="/alan.jpg" alt="Alan Turing" />
  <Avatar name="Katherine Johnson" />
  <Avatar name="Margaret Hamilton" />
</AvatarGroup>
`})}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[`Both `,(0,p.jsx)(t.code,{children:`Avatar`}),` and `,(0,p.jsx)(t.code,{children:`AvatarGroup`}),` resolve their `,(0,p.jsx)(t.code,{children:`className`}),` prop through the
same `,(0,p.jsx)(t.code,{children:`cn()`}),` merge utility the rest of the library uses, so an app-level
override always wins over the component defaults:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Avatar name="Ada Lovelace" className="ring-2 ring-brand-500 ring-offset-2" />
`})}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[`Both components forward their ref (`,(0,p.jsx)(t.code,{children:`Avatar`}),` to the root `,(0,p.jsx)(t.code,{children:`<span>`}),`,
`,(0,p.jsx)(t.code,{children:`AvatarGroup`}),` to the root `,(0,p.jsx)(t.code,{children:`<div>`}),`) and spread all native attributes for
their element, so they compose with tooltips, links, and other components
in this library without a separate "as child" API.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};