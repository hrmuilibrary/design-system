import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-HYgm0KbA.js";import{l as n,o as r,x as i}from"./blocks-t2KRTof2.js";import{t as a}from"./mdx-react-shim-BzsLUYLl.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Hooks/useFormContext`}),`
`,(0,c.jsx)(t.h1,{id:`useformcontext`,children:`useFormContext`}),`
`,(0,c.jsxs)(t.p,{children:[`Reads the ambient form state provided by the nearest `,(0,c.jsx)(t.code,{children:`FormContainer`}),` —
`,(0,c.jsx)(t.code,{children:`control`}),`, `,(0,c.jsx)(t.code,{children:`register`}),`, `,(0,c.jsx)(t.code,{children:`errors`}),`, and the rest of react-hook-form's form
API, plus a `,(0,c.jsx)(t.code,{children:`submit()`}),` callback. Useful for a custom field or control that
needs direct access to the form without going through `,(0,c.jsx)(t.code,{children:`FormField`}),`. Despite
the shared name, this is not react-hook-form's own `,(0,c.jsx)(t.code,{children:`useFormContext`}),` /
`,(0,c.jsx)(t.code,{children:`FormProvider`}),` — it reads the bespoke context this library's
`,(0,c.jsx)(t.code,{children:`FormContainer`}),` provides, not react-hook-form's.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { useFormContext } from '@dinofront/design_system';

function CustomField({ name }: { name: string }) {
  const { register, errors } = useFormContext();

  return (
    <div>
      <input {...register(name)} />
      {errors[name] && <span>{errors[name]?.message}</span>}
    </div>
  );
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`function useFormContext(): FormContextValue;
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Must be called from inside a `,(0,c.jsx)(t.code,{children:`FormContainer`}),` — throws
`,(0,c.jsx)(t.code,{children:`"useFormContext must be used inside a FormContainer."`}),` otherwise, the
same failure `,(0,c.jsx)(t.code,{children:`FormField`}),` raises when used outside one.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),n()}))();export{s as default};