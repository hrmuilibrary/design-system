import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-frnzeJW9.js";import{l as n,o as r,x as i}from"./blocks-D3700PHj.js";import{t as a}from"./mdx-react-shim-BeKI_iHL.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Hooks/useHideBodyScroll`}),`
`,(0,c.jsx)(t.h1,{id:`usehidebodyscroll`,children:`useHideBodyScroll`}),`
`,(0,c.jsx)(t.p,{children:`Locks page scrolling while a full-screen or modal-style overlay is open,
restoring the page's previous scroll behavior when it closes.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { useHideBodyScroll } from '@dinofront/design_system';

function Modal({ open }: { open: boolean }) {
  useHideBodyScroll(open);

  return open ? <div>...</div> : null;
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`function useHideBodyScroll(active: boolean): void;
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Sets `,(0,c.jsx)(t.code,{children:`document.body.style.overflow = 'hidden'`}),` while `,(0,c.jsx)(t.code,{children:`active`}),` is `,(0,c.jsx)(t.code,{children:`true`}),`,
and restores whatever value was present immediately before activation
once `,(0,c.jsx)(t.code,{children:`active`}),` becomes `,(0,c.jsx)(t.code,{children:`false`}),` (or the component unmounts). Concurrent
active callers (e.g. a drawer opened from within a modal) are
reference-counted, so nesting multiple overlays that each call this hook
is safe — the body only unlocks once the last one deactivates.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),n()}))();export{s as default};