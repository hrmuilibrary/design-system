import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-p9i34dfU.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-BakqR_Jw.js";import{t as c}from"./mdx-react-shim-CE2bDRHD.js";import{n as l,t as u}from"./Link.stories-CU0NH5t7.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`link`,children:`Link`}),`
`,(0,p.jsxs)(t.p,{children:[`A semantic-colored anchor, built directly on `,(0,p.jsx)(t.code,{children:`Text`}),` (`,(0,p.jsx)(t.code,{children:`<Text as="a">`}),`) so it
shares the same typography scale, semantic color aliases, and `,(0,p.jsx)(t.code,{children:`truncate`}),`
behavior rather than maintaining a second color map.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`underline`,children:`Underline`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`underline`}),` defaults to `,(0,p.jsx)(t.code,{children:`'hover'`}),` (underlines only on hover/focus).
`,(0,p.jsx)(t.code,{children:`'always'`}),` keeps the underline at rest; `,(0,p.jsx)(t.code,{children:`'none'`}),` never underlines — useful
when the link is already visually distinct (an icon button, a nav item).`]}),`
`,(0,p.jsx)(t.h2,{id:`icons`,children:`Icons`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`leftIcon`}),`/`,(0,p.jsx)(t.code,{children:`rightIcon`}),` render inside the anchor itself
(`,(0,p.jsx)(t.code,{children:`inline-flex items-center gap-1`}),`), so the whole label — icon included —
stays one clickable target and wraps together.`]}),`
`,(0,p.jsx)(t.h2,{id:`external-links`,children:`External links`}),`
`,(0,p.jsxs)(t.p,{children:[`Setting `,(0,p.jsx)(t.code,{children:`target="_blank"`}),` automatically adds `,(0,p.jsx)(t.code,{children:`rel="noopener noreferrer"`}),`
unless you pass your own `,(0,p.jsx)(t.code,{children:`rel`}),`.`]}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[`Because `,(0,p.jsx)(t.code,{children:`Link`}),` resolves its `,(0,p.jsx)(t.code,{children:`className`}),` prop through the same `,(0,p.jsx)(t.code,{children:`cn()`}),` merge
utility the rest of the library uses, an app-level override always wins
over the color/variant defaults.`]}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Link`}),` forwards its ref to the rendered `,(0,p.jsx)(t.code,{children:`<a>`}),` element and spreads all
native `,(0,p.jsx)(t.code,{children:`<a>`}),` attributes, so it composes with routers and any other
component in this library without a separate "as child" API.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};