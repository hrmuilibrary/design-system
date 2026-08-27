import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BgbIOHHe.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-Nh8h27_7.js";import{t as c}from"./mdx-react-shim-Db0aMZLS.js";import{n as l,t as u}from"./FormField.stories-DxWf6edV.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`formfield`,children:`FormField`}),`
`,(0,p.jsxs)(t.p,{children:[`Connects one named field to a `,(0,p.jsx)(t.code,{children:`FormContainer`}),`'s react-hook-form `,(0,p.jsx)(t.code,{children:`control`}),`
via `,(0,p.jsx)(t.code,{children:`Controller`}),`, and hands the result to a render prop — so it works with
any input in the library, or your own.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`render-prop`,children:`Render prop`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`render`}),` receives `,(0,p.jsx)(t.code,{children:`name`}),`, `,(0,p.jsx)(t.code,{children:`value`}),`, `,(0,p.jsx)(t.code,{children:`onChange`}),`, `,(0,p.jsx)(t.code,{children:`onBlur`}),`, `,(0,p.jsx)(t.code,{children:`ref`}),` (react-hook-form's
`,(0,p.jsx)(t.code,{children:`Controller`}),` field bindings), `,(0,p.jsx)(t.code,{children:`error: boolean`}),`/`,(0,p.jsx)(t.code,{children:`errorText?: string`}),` derived
from that field's validation state, plus `,(0,p.jsx)(t.code,{children:`setFieldValue(value, options?)`}),` —
pre-bound to this field's `,(0,p.jsx)(t.code,{children:`name`}),`, for a component whose own change contract
doesn't fit `,(0,p.jsx)(t.code,{children:`onChange`}),`/`,(0,p.jsx)(t.code,{children:`onBlur`}),` directly — and `,(0,p.jsx)(t.code,{children:`isValid: boolean`}),` (touched,
dirty, and currently passing validation). Every input in this library
already renders its own error text via an `,(0,p.jsx)(t.code,{children:`error`}),`/`,(0,p.jsx)(t.code,{children:`errorText`}),` pair
(`,(0,p.jsx)(t.code,{children:`Input`}),`, `,(0,p.jsx)(t.code,{children:`TextArea`}),`, `,(0,p.jsx)(t.code,{children:`Select`}),`, ...), so `,(0,p.jsx)(t.code,{children:`FormField`}),` doesn't render a
separate error message of its own — just spread the render props onto
whichever input you're wiring up:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<FormField name="email" render={(props) => <Input {...props} label="Email" />} />
`})}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`must-be-inside-a-formcontainer`,children:`Must be inside a FormContainer`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`FormField`}),` reads react-hook-form's `,(0,p.jsx)(t.code,{children:`control`}),` from `,(0,p.jsx)(t.code,{children:`FormContainer`}),`'s
context and throws if that context isn't present — there's no standalone
mode, since a field with nothing to register against isn't meaningful.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};