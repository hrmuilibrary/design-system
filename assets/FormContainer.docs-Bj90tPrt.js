import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-t6izEzqy.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-DuLxI8Rb.js";import{t as c}from"./mdx-react-shim-CyGLlu9P.js";import{n as l,t as u}from"./FormContainer.stories-YoVKKm8Q.js";function d(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`formcontainer`,children:`FormContainer`}),`
`,(0,p.jsxs)(t.p,{children:[`A `,(0,p.jsx)(t.code,{children:`<form>`}),` wired to `,(0,p.jsx)(t.a,{href:`https://react-hook-form.com`,rel:`nofollow`,children:`react-hook-form`}),`, validated
against a `,(0,p.jsx)(t.a,{href:`https://github.com/jquense/yup`,rel:`nofollow`,children:`yup`}),` schema via
`,(0,p.jsx)(t.code,{children:`@hookform/resolvers/yup`}),`. Pair it with `,(0,p.jsx)(t.code,{children:`FormField`}),` to connect any input
component in the library (or your own) to a field.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`installing`,children:`Installing`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`FormContainer`}),`/`,(0,p.jsx)(t.code,{children:`FormField`}),` are exported from a separate `,(0,p.jsx)(t.code,{children:`./form`}),` subpath,
not the root package:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-ts`,children:`import { FormContainer } from '@dinofront/design_system/form';
import { FormField } from '@dinofront/design_system/form';
`})}),`
`,(0,p.jsxs)(t.p,{children:[`They pull in `,(0,p.jsx)(t.code,{children:`react-hook-form`}),`, `,(0,p.jsx)(t.code,{children:`yup`}),`, and `,(0,p.jsx)(t.code,{children:`@hookform/resolvers`}),` — all
`,(0,p.jsx)(t.strong,{children:`optional peer dependencies`}),`. Every other component in this package has
none of these as a hard dependency; only import from `,(0,p.jsx)(t.code,{children:`./form`}),` if you're
actually building a form, and install the three peers alongside it:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{children:`npm install react-hook-form yup @hookform/resolvers
`})}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`buttons`,children:`Buttons`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`buttons`}),` renders a row of `,(0,p.jsx)(t.code,{children:`Button`}),`s below `,(0,p.jsx)(t.code,{children:`children`}),` — pass
`,(0,p.jsx)(t.code,{children:`{ type: 'submit', ... }`}),` on the one that should submit the form. Omit it
and render your own footer (e.g. inside a `,(0,p.jsx)(t.code,{children:`Card`}),` or `,(0,p.jsx)(t.code,{children:`Modal`}),` footer slot)
if the default row layout doesn't fit.`]}),`
`,(0,p.jsx)(t.h2,{id:`validation`,children:`Validation`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`onSubmit`}),` receives `,(0,p.jsx)(t.code,{children:`dirtyFields`}),` as a third argument (alongside `,(0,p.jsx)(t.code,{children:`data`}),` and
`,(0,p.jsx)(t.code,{children:`formState`}),`), for the common "PATCH only what changed" case, without having
to reach into `,(0,p.jsx)(t.code,{children:`formState.dirtyFields`}),` yourself.`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`revalidateKey`}),` re-runs validation on every field currently showing an
error — pass your app's current locale as the key. When your
`,(0,p.jsx)(t.code,{children:`validationSchema`}),` is rebuilt with translated messages after a language
switch, `,(0,p.jsx)(t.code,{children:`revalidateKey`}),` changing is what makes the on-screen error text
catch up, since react-hook-form doesn't re-validate automatically just
because the resolver was swapped. Note: if a field's error was set via
`,(0,p.jsx)(t.code,{children:`setError`}),` (e.g. a server-side error) rather than schema validation,
revalidating it on a `,(0,p.jsx)(t.code,{children:`revalidateKey`}),` change will replace that message with
whatever the schema resolves to.`]}),`
`,(0,p.jsx)(t.h2,{id:`context`,children:`Context`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`FormContainer`}),` provides `,(0,p.jsx)(t.code,{children:`control`}),`, `,(0,p.jsx)(t.code,{children:`errors`}),`, `,(0,p.jsx)(t.code,{children:`isSubmitting`}),`, and the rest
of react-hook-form's `,(0,p.jsx)(t.code,{children:`useForm()`}),` return value via an internal context —
`,(0,p.jsx)(t.code,{children:`FormField`}),` reads `,(0,p.jsx)(t.code,{children:`control`}),` from it to wire up `,(0,p.jsx)(t.code,{children:`Controller`}),`. The context
isn't exported publicly; reach for `,(0,p.jsx)(t.code,{children:`FormField`}),` rather than consuming the
context directly.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};