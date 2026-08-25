import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-DGIhpTmD.js";import{l as n,o as r,x as i}from"./blocks-DXoKWi1Y.js";import{t as a}from"./mdx-react-shim-zeAQp5Q3.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Hooks/useIsMobile`}),`
`,(0,c.jsx)(t.h1,{id:`useismobile`,children:`useIsMobile`}),`
`,(0,c.jsx)(t.p,{children:`Tracks whether the viewport is at or below a breakpoint, for components
that need a distinct mobile rendering path.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { useIsMobile } from '@dinofront/design_system';

function Nav() {
  const isMobile = useIsMobile();

  return isMobile ? <MobileNav /> : <DesktopNav />;
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`function useIsMobile(breakpoint?: number): boolean; // default 768
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Backed by `,(0,c.jsx)(t.code,{children:"window.matchMedia('(max-width: ${breakpoint}px)')"}),`. Returns
`,(0,c.jsx)(t.code,{children:`false`}),` during SSR and during the very first client render, then updates
to the real value once the effect runs after mount — so the
server-rendered markup and the client's first render always agree (no
hydration mismatch), at the cost of one extra render after mount when the
viewport actually is narrow.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),n()}))();export{s as default};