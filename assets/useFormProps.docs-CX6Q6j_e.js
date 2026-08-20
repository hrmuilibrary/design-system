import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-cZVKo6eo.js";import{l as n,o as r,x as i}from"./blocks-Dy_JJ05Q.js";import{t as a}from"./mdx-react-shim-BCFI0Wtm.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Hooks/useFormProps`}),`
`,(0,c.jsx)(t.h1,{id:`useformprops`,children:`useFormProps`}),`
`,(0,c.jsxs)(t.p,{children:[`Reads the ambient form state provided by the nearest `,(0,c.jsx)(t.code,{children:`FormContainer`}),` — the
same context `,(0,c.jsx)(t.code,{children:`useFormContext`}),` reads — but never throws outside one.
Returns an inert default context instead, so an existing `,(0,c.jsx)(t.code,{children:`useFormProps()`}),`
call site (migrated from an app's own hrm_ui_lib-shaped shim, for example)
keeps working without adding a null check.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { useFormProps } from '@dinofront/design_system';

function CustomField({ name }: { name: string }) {
  const { register, errors } = useFormProps();

  return (
    <div>
      <input {...register(name)} />
      {errors[name] && <span>{errors[name]?.message}</span>}
    </div>
  );
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`function useFormProps(): FormContextValue;
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Prefer `,(0,c.jsx)(t.code,{children:`useFormContext`}),` for new code — a missing `,(0,c.jsx)(t.code,{children:`FormContainer`}),` is
usually a programmer error you want to surface immediately, not silently
paper over. Reach for `,(0,c.jsx)(t.code,{children:`useFormProps`}),` only when migrating an existing call
site that already assumes a non-null return.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),n()}))();export{s as default};