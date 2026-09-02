import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-DhNGfB7i.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-rOvT9z8X.js";import{t as c}from"./mdx-react-shim-C860QfmZ.js";import{n as l,t as u}from"./InlineAlert.stories-ozHT-kIs.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`inlinealert`,children:`InlineAlert`}),`
`,(0,p.jsxs)(t.p,{children:[`Surfaces a status message inline with the page content — success,
warning, danger, info, or discovery — with an optional title,
description, actions, and a dismiss control. Styled with plain Tailwind
utility classes resolved from a `,(0,p.jsx)(t.code,{children:`variant`}),` lookup table — no
variant-authoring abstraction on top, so consumer apps can override any
part of it via `,(0,p.jsx)(t.code,{children:`className`}),` (merged with `,(0,p.jsx)(t.code,{children:`tailwind-merge`}),`, last
conflicting class wins) rather than fighting a pre-hidden style layer.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[`Because `,(0,p.jsx)(t.code,{children:`InlineAlert`}),` resolves its `,(0,p.jsx)(t.code,{children:`className`}),` prop through the same
`,(0,p.jsx)(t.code,{children:`cn()`}),` merge utility the rest of the library uses, an app-level override
always wins over the variant defaults:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<InlineAlert
  variant="success"
  className="bg-green-100 border-green-300 rounded-2xl"
  title="Custom styling"
/>
`})}),`
`,(0,p.jsx)(t.h2,{id:`dismissible-alerts`,children:`Dismissible alerts`}),`
`,(0,p.jsxs)(t.p,{children:[`Passing `,(0,p.jsx)(t.code,{children:`onDismiss`}),` renders a trailing close button that calls the
handler on click:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<InlineAlert title="Session expiring soon" onDismiss={() => setVisible(false)} />
`})}),`
`,(0,p.jsx)(t.h2,{id:`actions`,children:`Actions`}),`
`,(0,p.jsxs)(t.p,{children:[`Pass `,(0,p.jsx)(t.code,{children:`actions`}),` to render buttons (or any other content) below the
description:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<InlineAlert
  variant="warning"
  title="Unsaved changes"
  description="You have unsaved changes that will be lost if you leave this page."
  actions={
    <>
      <Button size="sm" variant="secondary">
        Discard
      </Button>
      <Button size="sm" variant="primary">
        Save changes
      </Button>
    </>
  }
/>
`})}),`
`,(0,p.jsx)(t.h2,{id:`custom-icon`,children:`Custom icon`}),`
`,(0,p.jsxs)(t.p,{children:[`Pass `,(0,p.jsx)(t.code,{children:`icon`}),` to replace the variant's default icon entirely:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<InlineAlert icon={<Rocket className="h-5 w-5" />} title="New feature available" />
`})}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`InlineAlert`}),` forwards its ref to the root `,(0,p.jsx)(t.code,{children:`<div>`}),` (`,(0,p.jsx)(t.code,{children:`role="alert"`}),`) and
spreads all native `,(0,p.jsx)(t.code,{children:`<div>`}),` props, so it composes with the rest of this
library without a separate "as child" API.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};