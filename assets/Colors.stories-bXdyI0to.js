import{a as e,i as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./iframe-C7HQ1jI3.js";import{f as r,t as i,u as a}from"./tokens-CmveXG68.js";var o=e({RawPalette:()=>p,SemanticAliases:()=>v,__namedExportsOrder:()=>y,default:()=>d});function s({name:e,detail:t}){return(0,u.jsxs)(`div`,{className:`flex flex-col`,children:[(0,u.jsx)(`span`,{className:`text-label-sm text-fg-default font-medium`,children:e}),(0,u.jsx)(`span`,{className:`text-p-xs text-fg-tertiary font-mono`,children:t})]})}function c({token:e}){return e.kind===`fill`?(0,u.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,u.jsx)(`div`,{className:`border-border-default h-16 w-full rounded-md border`,style:{background:`var(${e.cssVar})`}}),(0,u.jsx)(s,{name:e.name,detail:e.cssVar})]}):e.kind===`border`?(0,u.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,u.jsx)(`div`,{className:`bg-bg-default h-16 w-full rounded-md border-2`,style:{borderColor:`var(${e.cssVar})`}}),(0,u.jsx)(s,{name:e.name,detail:e.cssVar})]}):(0,u.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,u.jsx)(`div`,{className:`flex h-16 w-full items-center justify-center rounded-md`,style:{background:e.kind===`text-inverse`?`#0e121b`:`var(--color-bg-subtle)`},children:(0,u.jsx)(`span`,{className:`text-p-md font-semibold`,style:{color:`var(${e.cssVar})`},children:`Ag`})}),(0,u.jsx)(s,{name:e.name,detail:e.cssVar})]})}function l({title:e,tokens:t}){return(0,u.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,u.jsx)(`h3`,{className:`text-h-xs text-fg-default`,children:e}),(0,u.jsx)(`div`,{className:`grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-4`,children:t.map(e=>(0,u.jsx)(c,{token:e},e.name))})]})}var u,d,f,p,m,h,g,_,v,y,b=t((()=>{i(),u=n(),d={title:`Foundations/Colors`,parameters:{layout:`padded`,docs:{description:{component:`Reference page for the color tokens, not a component. Swatches read the
actual CSS custom properties (registered via the \`@theme\` blocks in
styles/tokens.css and styles/theme.css) through inline styles rather than
Tailwind utility classes, since the raw scale × shade combinations here
are built dynamically and Tailwind's class scanner can't statically
extract interpolated class names. Semantic swatches update live with the
toolbar's light/dark toggle because CSS variables resolve at the point of
use, same as the utilities themselves.`}}}},f=[`brand`,`gray`,`green`,`blue`,`purple`,`pink`,`red`,`yellow`],p={render:()=>(0,u.jsxs)(`div`,{className:`flex max-w-5xl flex-col gap-10`,children:[(0,u.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,u.jsx)(`h3`,{className:`text-h-xs text-fg-default`,children:`white`}),(0,u.jsx)(`div`,{className:`grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-4`,children:(0,u.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,u.jsx)(`div`,{className:`border-border-default h-16 w-full rounded-md border`,style:{background:`var(--color-white)`}}),(0,u.jsx)(s,{name:`white`,detail:r})]})})]}),f.map(e=>(0,u.jsxs)(`div`,{className:`flex flex-col gap-3`,children:[(0,u.jsx)(`h3`,{className:`text-h-xs text-fg-default capitalize`,children:e}),(0,u.jsx)(`div`,{className:`grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-4`,children:Object.entries(a[e]).sort(([e],[t])=>Number(t)-Number(e)).map(([t,n])=>(0,u.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,u.jsx)(`div`,{className:`border-border-default h-16 w-full rounded-md border`,style:{background:`var(--color-${e}-${t})`}}),(0,u.jsx)(s,{name:`${e}-${t}`,detail:n})]},t))})]},e))]})},m=[{name:`bg-default`,cssVar:`--color-bg-default`,kind:`fill`},{name:`bg-container`,cssVar:`--color-bg-container`,kind:`fill`},{name:`bg-subtle`,cssVar:`--color-bg-subtle`,kind:`fill`},{name:`bg-brand-lighter`,cssVar:`--color-bg-brand-lighter`,kind:`fill`},{name:`bg-info-lighter`,cssVar:`--color-bg-info-lighter`,kind:`fill`},{name:`bg-success-lighter`,cssVar:`--color-bg-success-lighter`,kind:`fill`},{name:`bg-warning-lighter`,cssVar:`--color-bg-warning-lighter`,kind:`fill`},{name:`bg-danger-lighter`,cssVar:`--color-bg-danger-lighter`,kind:`fill`}],h=[{name:`fg-default`,cssVar:`--color-fg-default`,kind:`text`},{name:`fg-secondary`,cssVar:`--color-fg-secondary`,kind:`text`},{name:`fg-tertiary`,cssVar:`--color-fg-tertiary`,kind:`text`},{name:`fg-disabled`,cssVar:`--color-fg-disabled`,kind:`text`},{name:`fg-inverse`,cssVar:`--color-fg-inverse`,kind:`text-inverse`},{name:`fg-brand`,cssVar:`--color-fg-brand`,kind:`text`},{name:`fg-info`,cssVar:`--color-fg-info`,kind:`text`},{name:`fg-success`,cssVar:`--color-fg-success`,kind:`text`},{name:`fg-warning`,cssVar:`--color-fg-warning`,kind:`text`},{name:`fg-danger`,cssVar:`--color-fg-danger`,kind:`text`}],g=[{name:`border-default`,cssVar:`--color-border-default`,kind:`border`},{name:`border-subtle`,cssVar:`--color-border-subtle`,kind:`border`},{name:`border-strong`,cssVar:`--color-border-strong`,kind:`border`},{name:`border-brand`,cssVar:`--color-border-brand`,kind:`border`}],_=[{name:`icon-primary`,cssVar:`--color-icon-primary`,kind:`text`},{name:`icon-secondary`,cssVar:`--color-icon-secondary`,kind:`text`},{name:`icon-inverse`,cssVar:`--color-icon-inverse`,kind:`text-inverse`},{name:`icon-brand`,cssVar:`--color-icon-brand`,kind:`text`},{name:`icon-info`,cssVar:`--color-icon-info`,kind:`text`},{name:`icon-danger`,cssVar:`--color-icon-danger`,kind:`text`},{name:`icon-warning`,cssVar:`--color-icon-warning`,kind:`text`}],v={render:()=>(0,u.jsxs)(`div`,{className:`flex max-w-5xl flex-col gap-10`,children:[(0,u.jsx)(l,{title:`Surfaces`,tokens:m}),(0,u.jsx)(l,{title:`Foreground`,tokens:h}),(0,u.jsx)(l,{title:`Borders`,tokens:g}),(0,u.jsx)(l,{title:`Icons`,tokens:_})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex max-w-5xl flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h3 className="text-h-xs text-fg-default">white</h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-4">
          <div className="flex flex-col gap-2">
            <div className="border-border-default h-16 w-full rounded-md border" style={{
            background: 'var(--color-white)'
          }} />
            <SwatchLabel name="white" detail={white} />
          </div>
        </div>
      </div>
      {SCALES.map(scale => <div key={scale} className="flex flex-col gap-3">
          <h3 className="text-h-xs text-fg-default capitalize">{scale}</h3>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-4">
            {Object.entries(colorPrimitives[scale]).sort(([a], [b]) => Number(b) - Number(a)).map(([shade, hex]) => <div key={shade} className="flex flex-col gap-2">
                  <div className="border-border-default h-16 w-full rounded-md border" style={{
            background: \`var(--color-\${scale}-\${shade})\`
          }} />
                  <SwatchLabel name={\`\${scale}-\${shade}\`} detail={hex} />
                </div>)}
          </div>
        </div>)}
    </div>
}`,...p.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex max-w-5xl flex-col gap-10">
      <SemanticGroup title="Surfaces" tokens={SURFACES} />
      <SemanticGroup title="Foreground" tokens={FOREGROUND} />
      <SemanticGroup title="Borders" tokens={BORDERS} />
      <SemanticGroup title="Icons" tokens={ICONS} />
    </div>
}`,...v.parameters?.docs?.source}}},y=[`RawPalette`,`SemanticAliases`]}));b();export{p as RawPalette,v as SemanticAliases,y as __namedExportsOrder,d as default,b as n,o as t};