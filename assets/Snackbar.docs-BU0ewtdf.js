import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-B_LPFnTU.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-3Am95l4w.js";import{t as c}from"./mdx-react-shim-DrJ0tF8B.js";import{n as l,t as u}from"./Snackbar.stories-OrGxq6ZX.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`snackbar`,children:`Snackbar`}),`
`,(0,p.jsxs)(t.p,{children:[`A toast-notification system built as a context-provider + hook pair
instead of a plain presentational component. `,(0,p.jsx)(t.code,{children:`SnackbarProvider`}),` mounts a
portalled toast stack (rendered into `,(0,p.jsx)(t.code,{children:`document.body`}),`) alongside its
`,(0,p.jsx)(t.code,{children:`children`}),`, and `,(0,p.jsx)(t.code,{children:`useSnackbar()`}),` gives any descendant an imperative
`,(0,p.jsx)(t.code,{children:`show`}),`/`,(0,p.jsx)(t.code,{children:`dismiss`}),` API — there's no `,(0,p.jsx)(t.code,{children:`<Snackbar />`}),` element to place inline.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`setup`,children:`Setup`}),`
`,(0,p.jsxs)(t.p,{children:[`Mount one `,(0,p.jsx)(t.code,{children:`SnackbarProvider`}),` near the root of the app (or the root of a
Storybook decorator, as in these stories):`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { SnackbarProvider } from '@ps-tools/ui';

function App() {
  return (
    <SnackbarProvider>
      <YourApp />
    </SnackbarProvider>
  );
}
`})}),`
`,(0,p.jsx)(t.h2,{id:`usage`,children:`Usage`}),`
`,(0,p.jsxs)(t.p,{children:[`Call `,(0,p.jsx)(t.code,{children:`useSnackbar()`}),` from any component under the provider:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { useSnackbar } from '@ps-tools/ui';

function SaveButton() {
  const { show } = useSnackbar();

  return (
    <button
      onClick={() =>
        show({ message: 'Changes saved', variant: 'success' })
      }
    >
      Save
    </button>
  );
}
`})}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`show`}),` returns the toast's `,(0,p.jsx)(t.code,{children:`id`}),` (either the one you pass in, or an
auto-generated one), which you can hold onto to `,(0,p.jsx)(t.code,{children:`dismiss()`}),` it early —
see the "Persistent" story, which shows a toast with `,(0,p.jsx)(t.code,{children:`duration: 0`}),` and
dismisses it manually.`]}),`
`,(0,p.jsxs)(t.p,{children:[`Calling `,(0,p.jsx)(t.code,{children:`useSnackbar()`}),` outside a `,(0,p.jsx)(t.code,{children:`SnackbarProvider`}),` throws
(`,(0,p.jsx)(t.code,{children:`"useSnackbar must be used inside <SnackbarProvider>"`}),`), matching the
source implementation's fail-fast behavior rather than silently
no-op-ing.`]}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`variant`}),` selects the toast's icon and icon color: `,(0,p.jsx)(t.code,{children:`success`}),`, `,(0,p.jsx)(t.code,{children:`warning`}),`,
`,(0,p.jsx)(t.code,{children:`danger`}),`, `,(0,p.jsx)(t.code,{children:`info`}),`, or `,(0,p.jsx)(t.code,{children:`neutral`}),` (the default). All variants currently
share the same dark container styling (`,(0,p.jsx)(t.code,{children:`bg-gray-900`}),` / `,(0,p.jsx)(t.code,{children:`dark:bg-gray-700`}),`)
— only the icon and its color change, mirroring the source design
system exactly.`]}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`auto-dismiss`,children:`Auto-dismiss`}),`
`,(0,p.jsxs)(t.p,{children:[`Toasts auto-dismiss after `,(0,p.jsx)(t.code,{children:`duration`}),` milliseconds (default `,(0,p.jsx)(t.code,{children:`5000`}),`). Pass
`,(0,p.jsx)(t.code,{children:`duration: 0`}),` to keep a toast on screen until `,(0,p.jsx)(t.code,{children:`dismiss(id)`}),` is called
explicitly.`]}),`
`,(0,p.jsx)(t.h2,{id:`action-button`,children:`Action button`}),`
`,(0,p.jsxs)(t.p,{children:[`Pass `,(0,p.jsx)(t.code,{children:`action`}),` to render a trailing text button. Clicking it fires
`,(0,p.jsx)(t.code,{children:`action.onClick()`}),` and then dismisses the toast:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`show({
  message: 'Conversation archived',
  action: { label: 'Undo', onClick: () => restoreConversation() },
});
`})}),`
`,(0,p.jsx)(t.h2,{id:`qa-hooks`,children:`QA hooks`}),`
`,(0,p.jsxs)(t.p,{children:[`Because there's no `,(0,p.jsx)(t.code,{children:`<Snackbar />`}),` JSX element for a consumer to attach
`,(0,p.jsx)(t.code,{children:`dataTestId`}),` to, the QA hook surfaces in two places instead:`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`SnackbarProvider`}),`'s own `,(0,p.jsx)(t.code,{children:`dataTestId`}),` prop renders as `,(0,p.jsx)(t.code,{children:`data-test-id`}),` on
the portalled toast-stack container.`]}),`
`,(0,p.jsxs)(t.li,{children:[`Each `,(0,p.jsx)(t.code,{children:`show()`}),` call accepts an optional `,(0,p.jsx)(t.code,{children:`dataTestId`}),` (part of
`,(0,p.jsx)(t.code,{children:`SnackbarItem`}),`), rendered as `,(0,p.jsx)(t.code,{children:`data-test-id`}),` on that specific toast's
root element — see the "Tagging a toast with dataTestId" story.`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`SnackbarProvider`}),` renders its `,(0,p.jsx)(t.code,{children:`children`}),` in place and portals the toast
stack into `,(0,p.jsx)(t.code,{children:`document.body`}),`, so it composes with routers, layout
providers, and any other component in this library without affecting
document flow.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};