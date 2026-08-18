import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-e4ZNzK2_.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-bfqnlyNY.js";import{t as c}from"./mdx-react-shim-D5FwzP1_.js";import{n as l,t as u}from"./ThemeSwitch.stories-C9_IJUmV.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`themeswitch`,children:`ThemeSwitch`}),`
`,(0,p.jsxs)(t.p,{children:[`A sun/moon toggle for a light/dark theme control. `,(0,p.jsxs)(t.strong,{children:[(0,p.jsx)(t.code,{children:`ThemeSwitch`}),` owns no
theme state of its own`]}),` — it's a purely presentational controlled
checkbox, exactly like `,(0,p.jsx)(t.code,{children:`Switch`}),`. The consumer wires `,(0,p.jsx)(t.code,{children:`checked`}),`/`,(0,p.jsx)(t.code,{children:`onChange`}),` to
however their app actually applies a theme.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`wiring-it-to-a-real-theme-toggle`,children:`Wiring it to a real theme toggle`}),`
`,(0,p.jsxs)(t.p,{children:[`A typical consumer pairs it with a small piece of app state and toggles
the `,(0,p.jsx)(t.code,{children:`.dark`}),` class the same way this library's own dark-mode support
expects:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`const [isDark, setIsDark] = useState(false);

<ThemeSwitch
  checked={isDark}
  onChange={(e) => {
    setIsDark(e.target.checked);
    document.documentElement.classList.toggle('dark', e.target.checked);
  }}
/>;
`})}),`
`,(0,p.jsxs)(t.p,{children:[`(This Storybook instance already has its own theme toolbar — see
`,(0,p.jsx)(t.code,{children:`.storybook/preview.tsx`}),` — so `,(0,p.jsx)(t.code,{children:`ThemeSwitch`}),` isn't needed to preview dark
mode here; it's for consumer apps that want a user-facing toggle.)`]}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`ThemeSwitch`}),` forwards its ref to the native `,(0,p.jsx)(t.code,{children:`<input type="checkbox">`}),`
and spreads all native `,(0,p.jsx)(t.code,{children:`<input>`}),` attributes, so it composes with forms
without a separate "as child" API.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};