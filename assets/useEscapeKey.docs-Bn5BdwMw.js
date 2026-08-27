import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-BgbIOHHe.js";import{l as n,o as r,x as i}from"./blocks-Nh8h27_7.js";import{t as a}from"./mdx-react-shim-Db0aMZLS.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Hooks/useEscapeKey`}),`
`,(0,c.jsx)(t.h1,{id:`useescapekey`,children:`useEscapeKey`}),`
`,(0,c.jsxs)(t.p,{children:[`Fires a callback when the user presses `,(0,c.jsx)(t.code,{children:`Escape`}),` — the logic half of a
dismissible overlay's keyboard handling, with no rendering of its own.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { useEscapeKey } from '@dinofront/design_system';

function Drawer({ onClose }: { onClose: () => void }) {
  useEscapeKey(onClose);

  return <div>...</div>;
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`function useEscapeKey(onEscape: () => void, enabled?: boolean): void; // enabled default true
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Listens on `,(0,c.jsx)(t.code,{children:`document`}),`, so it fires regardless of which element inside your
overlay currently has focus. Pass `,(0,c.jsx)(t.code,{children:`false`}),` as the last argument — e.g.
`,(0,c.jsx)(t.code,{children:`useEscapeKey(onClose, false)`}),` — to skip attaching the listener entirely —
useful when the overlay is closed.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),n()}))();export{s as default};