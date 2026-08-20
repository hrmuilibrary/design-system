import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-DIoW-LAR.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-eh44YEoF.js";import{t as c}from"./mdx-react-shim-BKjJsHpQ.js";import{n as l,t as u}from"./Avatar.stories-ChWYNzj3.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`avatar`,children:`Avatar`}),`
`,(0,p.jsxs)(t.p,{children:[`Represents a person or entity as a circular (or square) image, initials, or
icon. Falls back automatically: an image that fails to load (`,(0,p.jsx)(t.code,{children:`onError`}),`)
reverts to initials derived from `,(0,p.jsx)(t.code,{children:`name`}),`, and no `,(0,p.jsx)(t.code,{children:`name`}),` at all falls back to
a generic user icon (or a custom `,(0,p.jsx)(t.code,{children:`fallback`}),` node). When `,(0,p.jsx)(t.code,{children:`name`}),` drives the
initials, the background color is also derived deterministically from the
name so the same person always gets the same color.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`sizes`,children:`Sizes`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`size`}),` scales the avatar, its status dot, and its edit button together,
from `,(0,p.jsx)(t.code,{children:`2xs`}),` through `,(0,p.jsx)(t.code,{children:`2xl`}),`.`]}),`
`,(0,p.jsx)(t.h2,{id:`status-indicator`,children:`Status indicator`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`status`}),` renders a small ring-bordered dot (`,(0,p.jsx)(t.code,{children:`online`}),` / `,(0,p.jsx)(t.code,{children:`offline`}),` / `,(0,p.jsx)(t.code,{children:`away`}),` /
`,(0,p.jsx)(t.code,{children:`busy`}),`) anchored to the bottom-right corner — or the bottom-left corner
when `,(0,p.jsx)(t.code,{children:`editable`}),` is also set, since the edit button then takes the
bottom-right spot.`]}),`
`,(0,p.jsx)(t.h2,{id:`editable-upload-overlay`,children:`Editable (upload overlay)`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`editable`}),` renders a small pencil-icon button in the bottom-right corner,
scaled to `,(0,p.jsx)(t.code,{children:`size`}),`, that opens a native file picker. Picking a file shows an
immediate local preview (an object URL `,(0,p.jsx)(t.code,{children:`Avatar`}),` creates and revokes itself
on replacement or unmount) and calls `,(0,p.jsx)(t.code,{children:`onImageChange`}),` with the picked
`,(0,p.jsx)(t.code,{children:`File`}),`. The local preview takes precedence over `,(0,p.jsx)(t.code,{children:`src`}),` until `,(0,p.jsx)(t.code,{children:`src`}),` itself
changes to a new value (e.g. once your upload completes and you pass back
the real remote URL), at which point the new `,(0,p.jsx)(t.code,{children:`src`}),` wins and the local
preview is dropped.`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`accept`}),` and `,(0,p.jsx)(t.code,{children:`maxSizeMB`}),` validate the picked file before it's previewed —
the same matching rules as `,(0,p.jsx)(t.code,{children:`UploadProps.accept`}),`/`,(0,p.jsx)(t.code,{children:`maxSizeMB`}),`, but always
enforced here (unlike `,(0,p.jsx)(t.code,{children:`Upload`}),`, where enforcement is gated behind
`,(0,p.jsx)(t.code,{children:`validateFiles`}),`) — validated through the same `,(0,p.jsx)(t.code,{children:`validateSingleFile`}),` helper
`,(0,p.jsx)(t.code,{children:`Upload`}),` uses internally, so the two components can't drift on what counts
as a valid file. A file that fails validation never updates the preview;
`,(0,p.jsx)(t.code,{children:`onReject`}),` is called instead with the `,(0,p.jsx)(t.code,{children:`UploadRejection`}),` (a single object,
not an array — `,(0,p.jsx)(t.code,{children:`Avatar`}),` only ever picks one file at a time).`]}),`
`,(0,p.jsxs)(t.p,{children:[`The edit button's touch target falls below the WCAG 2.5.8 24×24px minimum
at `,(0,p.jsx)(t.code,{children:`'2xs'`}),`/`,(0,p.jsx)(t.code,{children:`'xs'`}),`/`,(0,p.jsx)(t.code,{children:`'sm'`}),`. `,(0,p.jsx)(t.code,{children:`editable`}),` is best suited to `,(0,p.jsx)(t.code,{children:`'sm'`}),` and above for
touch accessibility; consumers using it at smaller sizes should be aware
the target is below the recommended minimum.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Avatar
  name="Ada Lovelace"
  editable
  accept="image/*"
  maxSizeMB={5}
  onImageChange={(file) => uploadAvatar(file)}
  onReject={(rejection) => showError(rejection.reason)}
/>
`})}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`editable`}),` is fully opt-in: when it's unset, none of this preview state or
markup activates, so existing uncontrolled `,(0,p.jsx)(t.code,{children:`src`}),` usage is unaffected.`]}),`
`,(0,p.jsx)(t.h2,{id:`fallback-order`,children:`Fallback order`}),`
`,(0,p.jsxs)(t.ol,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`src`}),` renders as an `,(0,p.jsx)(t.code,{children:`<img>`}),` — until it fails to load.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.code,{children:`name`}),` renders as initials (max two characters) on a name-derived
background color.`]}),`
`,(0,p.jsxs)(t.li,{children:[`A generic user icon, or a caller-supplied `,(0,p.jsx)(t.code,{children:`fallback`}),` node, when neither
`,(0,p.jsx)(t.code,{children:`src`}),` nor `,(0,p.jsx)(t.code,{children:`name`}),` is present.`]}),`
`]}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`avatargroup`,children:`AvatarGroup`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`AvatarGroup`}),` stacks `,(0,p.jsx)(t.code,{children:`Avatar`}),` children with a slight negative margin and a
white ring separator, most recent first (`,(0,p.jsx)(t.code,{children:`z-index`}),` decreases left to
right). Pass `,(0,p.jsx)(t.code,{children:`max`}),` to cap how many are shown; anything beyond that renders
as a `,(0,p.jsx)(t.code,{children:`+N`}),` avatar using the same name-derived coloring as a regular avatar.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<AvatarGroup size="md" max={3}>
  <Avatar name="Ada Lovelace" />
  <Avatar name="Grace Hopper" />
  <Avatar src="/alan.jpg" alt="Alan Turing" />
  <Avatar name="Katherine Johnson" />
  <Avatar name="Margaret Hamilton" />
</AvatarGroup>
`})}),`
`,(0,p.jsx)(t.h2,{id:`overriding-styles`,children:`Overriding styles`}),`
`,(0,p.jsxs)(t.p,{children:[`Both `,(0,p.jsx)(t.code,{children:`Avatar`}),` and `,(0,p.jsx)(t.code,{children:`AvatarGroup`}),` resolve their `,(0,p.jsx)(t.code,{children:`className`}),` prop through the
same `,(0,p.jsx)(t.code,{children:`cn()`}),` merge utility the rest of the library uses, so an app-level
override always wins over the component defaults:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<Avatar name="Ada Lovelace" className="ring-2 ring-brand-500 ring-offset-2" />
`})}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[`Both components forward their ref (`,(0,p.jsx)(t.code,{children:`Avatar`}),` to the root `,(0,p.jsx)(t.code,{children:`<span>`}),`,
`,(0,p.jsx)(t.code,{children:`AvatarGroup`}),` to the root `,(0,p.jsx)(t.code,{children:`<div>`}),`) and spread all native attributes for
their element, so they compose with tooltips, links, and other components
in this library without a separate "as child" API.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};