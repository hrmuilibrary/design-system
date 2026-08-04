import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BgCNYJC5.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-CpjVkczv.js";import{t as c}from"./mdx-react-shim-peawkiiJ.js";import{n as l,t as u}from"./Radio.stories-B6FnGma6.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`radio`,children:`Radio`}),`
`,(0,p.jsxs)(t.p,{children:[`A labeled radio input. The native `,(0,p.jsx)(t.code,{children:`<input type="radio">`}),` is visually hidden
(`,(0,p.jsx)(t.code,{children:`sr-only`}),`) but stays in the tab order and drives every visual state of a
custom dot via the `,(0,p.jsx)(t.code,{children:`peer`}),` variant, so the component keeps full native
keyboard/form/a11y behavior while looking however the design wants.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`radiogroup`,children:`RadioGroup`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Radio`}),` is almost always used inside a `,(0,p.jsx)(t.code,{children:`RadioGroup`}),`, which renders a
`,(0,p.jsx)(t.code,{children:`role="radiogroup"`}),` container and provides `,(0,p.jsx)(t.code,{children:`name`}),`, `,(0,p.jsx)(t.code,{children:`size`}),`, and `,(0,p.jsx)(t.code,{children:`disabled`}),` to
every `,(0,p.jsx)(t.code,{children:`Radio`}),` descendant via context — so those don't need to be repeated on
each `,(0,p.jsx)(t.code,{children:`Radio`}),`. The group also owns the controlled/uncontrolled selection:
pass `,(0,p.jsx)(t.code,{children:`value`}),`/`,(0,p.jsx)(t.code,{children:`onChange`}),` for a controlled group, or `,(0,p.jsx)(t.code,{children:`defaultValue`}),` for an
uncontrolled one, and compare against each `,(0,p.jsx)(t.code,{children:`Radio`}),`'s own `,(0,p.jsx)(t.code,{children:`value`}),` prop.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`const [value, setValue] = useState('comfortable');

<RadioGroup name="density" value={value} onChange={setValue}>
  <Radio value="compact" label="Compact" />
  <Radio value="comfortable" label="Comfortable" />
  <Radio value="spacious" label="Spacious" />
</RadioGroup>;
`})}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`orientation`}),` (`,(0,p.jsx)(t.code,{children:`'vertical'`}),` default, or `,(0,p.jsx)(t.code,{children:`'horizontal'`}),`) controls the layout
of the group's children. A `,(0,p.jsx)(t.code,{children:`Radio`}),` rendered outside any `,(0,p.jsx)(t.code,{children:`RadioGroup`}),` falls
back to its own `,(0,p.jsx)(t.code,{children:`checked`}),`/`,(0,p.jsx)(t.code,{children:`defaultChecked`}),`/`,(0,p.jsx)(t.code,{children:`onChange`}),` props and behaves like
a standalone controlled/uncontrolled input.`]}),`
`,(0,p.jsx)(t.h2,{id:`error-state`,children:`Error state`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`error`}),` swaps the border (and the ring color stays brand) to the danger
palette and sets `,(0,p.jsx)(t.code,{children:`aria-invalid`}),` on the input, for use alongside form
validation messaging rendered by the consumer.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Radio value="option" error label="This option is currently unavailable" />
`})}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Radio`}),` forwards its ref to the native `,(0,p.jsx)(t.code,{children:`<input>`}),` and spreads all native input
props (minus `,(0,p.jsx)(t.code,{children:`size`}),`/`,(0,p.jsx)(t.code,{children:`type`}),`/`,(0,p.jsx)(t.code,{children:`name`}),`/`,(0,p.jsx)(t.code,{children:`onChange`}),`, which the component or its
`,(0,p.jsx)(t.code,{children:`RadioGroup`}),` own), so it composes with forms and validation libraries without
a separate API.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};