import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-HYgm0KbA.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-t2KRTof2.js";import{t as c}from"./mdx-react-shim-BzsLUYLl.js";import{n as l,t as u}from"./DistributionBar.stories-DPy3IZB6.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`distributionbar`,children:`DistributionBar`}),`
`,(0,p.jsxs)(t.p,{children:[`A stacked, 100%-width bar showing how a total splits across categories,
with a legend underneath. Not a chart library integration — the geometry
is plain `,(0,p.jsx)(t.code,{children:`flex-basis`}),` percentages on divs, so it has zero charting
dependencies.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`empty-and-zero-value-data`,children:`Empty and zero-value data`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`segments={[]}`}),` and all-zero values both render an empty track with no
`,(0,p.jsx)(t.code,{children:`NaN`}),` widths — proportions are computed as `,(0,p.jsx)(t.code,{children:`total > 0 ? value / total : 0`}),`
per segment.`]}),`
`,(0,p.jsx)(t.h2,{id:`formatting-values`,children:`Formatting values`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`formatValue`}),` defaults to `,(0,p.jsx)(t.code,{children:`Intl.NumberFormat().format`}),` (locale-correct
digit grouping). Pass your own formatter for currency symbols, compact
notation, or a fixed locale.`]}),`
`,(0,p.jsx)(t.h2,{id:`series-colors`,children:`Series colors`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`color`}),` is a small fixed palette (`,(0,p.jsx)(t.code,{children:`brand`}),`/`,(0,p.jsx)(t.code,{children:`blue`}),`/`,(0,p.jsx)(t.code,{children:`purple`}),`/`,(0,p.jsx)(t.code,{children:`pink`}),`/`,(0,p.jsx)(t.code,{children:`yellow`}),`/`,(0,p.jsx)(t.code,{children:`red`}),`/`,(0,p.jsx)(t.code,{children:`gray`}),`)
rather than the semantic token set the rest of the library uses — a
distribution's categories are arbitrary, not a fixed set of statuses, so
there's no semantic alias to map them onto. This is a deliberate exception,
same precedent as `,(0,p.jsx)(t.code,{children:`IconTile`}),`'s tones.`]}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`DistributionBar`}),` resolves its `,(0,p.jsx)(t.code,{children:`className`}),` prop through the same `,(0,p.jsx)(t.code,{children:`cn()`}),`
merge utility the rest of the library uses, so an app-level override
always wins over the defaults.`]}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`DistributionBar`}),` forwards its ref to the root `,(0,p.jsx)(t.code,{children:`<div>`}),` and spreads all
native `,(0,p.jsx)(t.code,{children:`<div>`}),` attributes, so it composes with the rest of the library
without a separate "as child" API.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};