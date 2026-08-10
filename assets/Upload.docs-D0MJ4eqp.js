import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-DDx-spus.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-BecSVnUb.js";import{t as c}from"./mdx-react-shim-DeOCAcWI.js";import{n as l,t as u}from"./Upload.stories-Dslhhfal.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`upload`,children:`Upload`}),`
`,(0,p.jsxs)(t.p,{children:[`A drag-and-drop file dropzone (`,(0,p.jsx)(t.code,{children:`Upload`}),`) paired with a row component for
listing files as they're processed (`,(0,p.jsx)(t.code,{children:`UploadItem`}),`). Both live in a single
`,(0,p.jsx)(t.code,{children:`Upload.tsx`}),` file since they're always used together — `,(0,p.jsx)(t.code,{children:`Upload`}),` never
renders the list itself, it just hands files to `,(0,p.jsx)(t.code,{children:`onFiles`}),` and leaves
tracking/rendering upload state to the consumer via `,(0,p.jsx)(t.code,{children:`UploadItem`}),`.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`choosing-a-file`,children:`Choosing a file`}),`
`,(0,p.jsxs)(t.p,{children:[`Clicking or dragging a file onto the dropzone calls `,(0,p.jsx)(t.code,{children:`onFiles(files: File[])`}),`.
There's no internal file list — `,(0,p.jsx)(t.code,{children:`Upload`}),` is a pure trigger. Pair it with
your own state (or a list of `,(0,p.jsx)(t.code,{children:`UploadItem`}),`s) to track what's in flight:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`const [fileNames, setFileNames] = useState<string[]>([]);

<Upload
  accept=".png,.jpg"
  maxSizeMB={10}
  onFiles={(files) => setFileNames(files.map((f) => f.name))}
/>
`})}),`
`,(0,p.jsx)(t.h2,{id:`hint-text`,children:`Hint text`}),`
`,(0,p.jsxs)(t.p,{children:[`The hint under "Choose a file or drag & drop it here" is derived
automatically from `,(0,p.jsx)(t.code,{children:`accept`}),`/`,(0,p.jsx)(t.code,{children:`maxSizeMB`}),` (e.g. `,(0,p.jsx)(t.code,{children:`"PNG, up to 10 MB"`}),`) unless
you pass `,(0,p.jsx)(t.code,{children:`hint`}),` explicitly. `,(0,p.jsx)(t.code,{children:`maxSizeMB`}),` is display-only — `,(0,p.jsx)(t.code,{children:`Upload`}),` doesn't
reject oversized files itself; enforce that limit in your `,(0,p.jsx)(t.code,{children:`onFiles`}),` handler
and surface it via `,(0,p.jsx)(t.code,{children:`UploadItem`}),`'s `,(0,p.jsx)(t.code,{children:`error`}),` status.`]}),`
`,(0,p.jsx)(t.h2,{id:`validation-state`,children:`Validation state`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`error`}),`/`,(0,p.jsx)(t.code,{children:`errorText`}),` on `,(0,p.jsx)(t.code,{children:`Upload`}),` itself switch the dropzone to the danger
styles and render a message below it — separate from `,(0,p.jsx)(t.code,{children:`UploadItem`}),`'s own
per-file `,(0,p.jsx)(t.code,{children:`error`}),` status below, which is about an individual file's upload
outcome rather than the control's overall validity.`]}),`
`,(0,p.jsx)(t.h2,{id:`uploaditem-statuses`,children:`UploadItem statuses`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`UploadItem`}),` renders one of three states via its `,(0,p.jsx)(t.code,{children:`status`}),` prop:`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`"processing"`}),` (default) — shows a progress bar driven by `,(0,p.jsx)(t.code,{children:`progress`}),` (0-100).`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`"completed"`}),` — shows a success check and swaps the remove button's icon
to a trash can.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`"error"`}),` — tints the row red and shows `,(0,p.jsx)(t.code,{children:`errorText`}),`, with an optional
"Try again" link when `,(0,p.jsx)(t.code,{children:`onRetry`}),` is passed.`]}),`
`]}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[`Both `,(0,p.jsx)(t.code,{children:`Upload`}),` and `,(0,p.jsx)(t.code,{children:`UploadItem`}),` resolve their `,(0,p.jsx)(t.code,{children:`className`}),` prop through the
same `,(0,p.jsx)(t.code,{children:`cn()`}),` merge utility the rest of the library uses, so an app-level
override always wins over the component defaults:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Upload className="border-brand-500 bg-brand-20" />
`})}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`Upload`}),` forwards its ref to the dropzone `,(0,p.jsx)(t.code,{children:`<div>`}),` and `,(0,p.jsx)(t.code,{children:`UploadItem`}),` forwards
its ref to its own row `,(0,p.jsx)(t.code,{children:`<div>`}),`; both spread the remaining native `,(0,p.jsx)(t.code,{children:`<div>`}),`
attributes, so they compose with the rest of the library without a
separate "as child" API. The dropzone's own interactive attributes
(`,(0,p.jsx)(t.code,{children:`role`}),`, `,(0,p.jsx)(t.code,{children:`tabIndex`}),`, click/drag/keyboard handlers) are owned internally and
excluded from the prop type — pass `,(0,p.jsx)(t.code,{children:`id`}),`, `,(0,p.jsx)(t.code,{children:`aria-label`}),`, `,(0,p.jsx)(t.code,{children:`style`}),`, etc. as
usual.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};