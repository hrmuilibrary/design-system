import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-DDx-spus.js";import{l as n,o as r,x as i}from"./blocks-BecSVnUb.js";import{t as a}from"./mdx-react-shim-DeOCAcWI.js";function o(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,ul:`ul`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Foundations`}),`
`,(0,c.jsx)(t.h1,{id:`foundations`,children:`Foundations`}),`
`,(0,c.jsx)(t.p,{children:`The design tokens everything else in this library builds on: a raw palette
scale, semantic aliases, radii, shadows, and typography. They're mirrored in
two parallel representations that are kept in sync by hand:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`CSS custom properties`}),` — `,(0,c.jsx)(t.code,{children:`src/styles/tokens.css`}),` (raw palette scales,
radii, shadows, typography) and `,(0,c.jsx)(t.code,{children:`src/styles/theme.css`}),` (semantic
aliases), both declared inside Tailwind v4 `,(0,c.jsx)(t.code,{children:`@theme { ... }`}),` blocks.
Declaring a variable inside `,(0,c.jsx)(t.code,{children:`@theme`}),` both registers the CSS custom
property `,(0,c.jsx)(t.em,{children:`and`}),` auto-generates the matching utility class — e.g.
`,(0,c.jsx)(t.code,{children:`--color-brand-500`}),` gives you `,(0,c.jsx)(t.code,{children:`bg-brand-500`}),`, `,(0,c.jsx)(t.code,{children:`text-brand-500`}),`, etc. for
free, no extra mapping layer needed.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`JS/TS token objects`}),` — `,(0,c.jsx)(t.code,{children:`src/tokens/*.ts`}),` (`,(0,c.jsx)(t.code,{children:`colors`}),`, `,(0,c.jsx)(t.code,{children:`typography`}),`,
`,(0,c.jsx)(t.code,{children:`spacing`}),`, `,(0,c.jsx)(t.code,{children:`radius`}),`, `,(0,c.jsx)(t.code,{children:`shadows`}),`), for consumers who need token values in
JS rather than as CSS classes.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`semantic-aliases-over-raw-scale`,children:`Semantic aliases over raw scale`}),`
`,(0,c.jsxs)(t.p,{children:[`Components should reference semantic aliases (`,(0,c.jsx)(t.code,{children:`bg-default`}),`, `,(0,c.jsx)(t.code,{children:`fg-brand`}),`,
`,(0,c.jsx)(t.code,{children:`border-danger`}),`, ...) rather than the raw palette scale (`,(0,c.jsx)(t.code,{children:`brand-500`}),`,
`,(0,c.jsx)(t.code,{children:`red-700`}),`, ...) directly, except for a handful of deliberate cases (e.g.
`,(0,c.jsx)(t.code,{children:`bg-brand-500`}),` for a primary button). Semantic aliases are what make dark
mode work without touching component code — `,(0,c.jsx)(t.code,{children:`theme.css`}),` reassigns the same
custom property names inside a `,(0,c.jsx)(t.code,{children:`.dark { ... }`}),` block, and Tailwind
utilities always read the variable at the point of use rather than at
declaration time. Toggle the `,(0,c.jsx)(t.strong,{children:`Theme`}),` control in the toolbar above to see
this live on the `,(0,c.jsx)(t.a,{href:`/docs/foundations-colors--docs`,children:`Colors`}),` page.`]}),`
`,(0,c.jsx)(t.h2,{id:`typography-scale`,children:`Typography scale`}),`
`,(0,c.jsxs)(t.p,{children:[`Typography uses a semantic scale, not Tailwind's default `,(0,c.jsx)(t.code,{children:`xs`}),`/`,(0,c.jsx)(t.code,{children:`sm`}),`/`,(0,c.jsx)(t.code,{children:`base`}),`/
`,(0,c.jsx)(t.code,{children:`lg`}),`: `,(0,c.jsx)(t.code,{children:`text-h-*`}),` (headline), `,(0,c.jsx)(t.code,{children:`text-p-*`}),` (body), `,(0,c.jsx)(t.code,{children:`text-label-*`}),` (labels).
Each step is a `,(0,c.jsx)(t.code,{children:`[fontSize, lineHeight]`}),` pair — see
`,(0,c.jsx)(t.a,{href:`/docs/foundations-typography--docs`,children:`Typography`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`pages-in-this-section`,children:`Pages in this section`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`/docs/foundations-colors--docs`,children:`Colors`})}),` — the raw palette scale
(brand, gray, green, blue, purple, pink, red, yellow) and the semantic
aliases built on top of it (surfaces, foreground, borders, icons).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`/docs/foundations-typography--docs`,children:`Typography`})}),` — the headline,
paragraph, and label scales.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`/docs/foundations-radius--docs`,children:`Radius`})}),` — the border-radius scale,
from `,(0,c.jsx)(t.code,{children:`rounded-xs`}),` to `,(0,c.jsx)(t.code,{children:`rounded-full`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.a,{href:`/docs/foundations-shadows--docs`,children:`Shadows`})}),` — the elevation scale,
from `,(0,c.jsx)(t.code,{children:`shadow-z1`}),` to `,(0,c.jsx)(t.code,{children:`shadow-z5`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),n()}))();export{s as default};