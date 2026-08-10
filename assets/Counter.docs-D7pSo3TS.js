import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-DDx-spus.js";import{l as n,o as r,r as i,s as a,x as o}from"./blocks-BecSVnUb.js";import{t as s}from"./mdx-react-shim-DeOCAcWI.js";import{n as c,t as l}from"./Counter.stories-B6axvES7.js";function u(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...o(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r,{of:l}),`
`,(0,f.jsx)(t.h1,{id:`counter`,children:`Counter`}),`
`,(0,f.jsxs)(t.p,{children:[`A numeric stepper — a minus button, a number field, and a plus button —
built on `,(0,f.jsx)(t.code,{children:`Input`}),`'s `,(0,f.jsx)(t.code,{children:`leftAddon`}),`/`,(0,f.jsx)(t.code,{children:`rightAddon`}),` slots rather than reimplementing
the field shell. It inherits `,(0,f.jsx)(t.code,{children:`label`}),`, `,(0,f.jsx)(t.code,{children:`helperText`}),`, `,(0,f.jsx)(t.code,{children:`errorText`}),`, `,(0,f.jsx)(t.code,{children:`error`}),`,
and `,(0,f.jsx)(t.code,{children:`size`}),` from `,(0,f.jsx)(t.code,{children:`Input`}),` for free.`]}),`
`,(0,f.jsx)(a,{}),`
`,(0,f.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,f.jsx)(i,{}),`
`,(0,f.jsx)(t.h2,{id:`controlled-vs-uncontrolled`,children:`Controlled vs. uncontrolled`}),`
`,(0,f.jsxs)(t.p,{children:[`Uncontrolled usage passes `,(0,f.jsx)(t.code,{children:`defaultValue`}),` (default `,(0,f.jsx)(t.code,{children:`0`}),`) and `,(0,f.jsx)(t.code,{children:`Counter`}),`
tracks its value internally. Controlled usage passes both `,(0,f.jsx)(t.code,{children:`value`}),` and
`,(0,f.jsx)(t.code,{children:`onValueChange`}),`, and the consumer owns the state entirely.`]}),`
`,(0,f.jsx)(t.pre,{children:(0,f.jsx)(t.code,{className:`language-tsx`,children:`const [value, setValue] = useState(2);
<Counter value={value} onValueChange={setValue} min={0} max={10} />
`})}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`onValueChange`}),` is used instead of a native `,(0,f.jsx)(t.code,{children:`onChange`}),` because the value
can change from a button press, which has no corresponding
`,(0,f.jsx)(t.code,{children:`ChangeEvent`}),`.`]}),`
`,(0,f.jsx)(t.h2,{id:`typing-behavior`,children:`Typing behavior`}),`
`,(0,f.jsxs)(t.p,{children:[`The field tracks a plain string draft separately from the committed
numeric value, so clearing the field doesn't immediately snap back to a
number while you're typing. The typed value is parsed, clamped to
`,(0,f.jsx)(t.code,{children:`[min, max]`}),`, and committed on blur — an invalid or empty value reverts to
the last committed value instead of silently becoming `,(0,f.jsx)(t.code,{children:`0`}),`.`]}),`
`,(0,f.jsx)(t.h2,{id:`minmax`,children:`Min/max`}),`
`,(0,f.jsxs)(t.p,{children:[`The decrease button disables at `,(0,f.jsx)(t.code,{children:`min`}),`, the increase button disables at
`,(0,f.jsx)(t.code,{children:`max`}),`. `,(0,f.jsx)(t.code,{children:`step`}),` controls how much each button press changes the value.`]}),`
`,(0,f.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,f.jsxs)(t.p,{children:[(0,f.jsx)(t.code,{children:`Counter`}),` forwards its ref to the native `,(0,f.jsx)(t.code,{children:`<input>`}),` element (the same one
`,(0,f.jsx)(t.code,{children:`Input`}),` forwards to) and spreads all remaining native `,(0,f.jsx)(t.code,{children:`<input>`}),` attributes.`]})]})}function d(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,f.jsx)(t,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=t(),s(),n(),c()}))();export{d as default};