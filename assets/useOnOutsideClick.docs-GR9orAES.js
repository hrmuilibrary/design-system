import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-DhNGfB7i.js";import{l as n,o as r,x as i}from"./blocks-rOvT9z8X.js";import{t as a}from"./mdx-react-shim-C860QfmZ.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Hooks/useOnOutsideClick`}),`
`,(0,c.jsx)(t.h1,{id:`useonoutsideclick`,children:`useOnOutsideClick`}),`
`,(0,c.jsx)(t.p,{children:`Fires a handler when the user clicks or taps outside a given element —
the logic half of a dismissible overlay (menu, popover, dropdown), with no
rendering of its own.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { useRef } from 'react';
import { useOnOutsideClick } from '@dinofront/design_system';

function Menu({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  useOnOutsideClick(ref, onClose);

  return <div ref={ref}>...</div>;
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`function useOnOutsideClick(
  ref: RefObject<HTMLElement | null> | null | undefined,
  handler: (event: MouseEvent | TouchEvent) => void,
  enabled?: boolean, // default true
): void;
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Listens on `,(0,c.jsx)(t.code,{children:`document`}),` for `,(0,c.jsx)(t.code,{children:`mousedown`}),` and `,(0,c.jsx)(t.code,{children:`touchstart`}),`, not scoped to the
element's own subtree, so it also catches clicks on other overlays or the
page background. Pass `,(0,c.jsx)(t.code,{children:`false`}),` as the last argument — e.g.
`,(0,c.jsx)(t.code,{children:`useOnOutsideClick(ref, onClose, false)`}),` — to skip attaching listeners
entirely — useful when the overlay is closed and you don't want the
listener live.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),n()}))();export{s as default};