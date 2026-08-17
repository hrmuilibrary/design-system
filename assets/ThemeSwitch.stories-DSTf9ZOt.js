import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-C7HQ1jI3.js";import{H as a,f as o,t as s}from"./lucide-react-DTRKqpO6.js";import{n as c,t as l}from"./cn-BNhCYuha.js";var u,d,f,p=t((()=>{u=n(r(),1),s(),c(),d=i(),f=(0,u.forwardRef)(function({checked:e,label:t,id:n,disabled:r,className:i,dataTestId:s,...c},f){let p=(0,u.useId)(),m=n??p;return(0,d.jsxs)(`label`,{htmlFor:m,"data-test-id":s,className:l(`inline-flex items-center gap-3`,r?`cursor-not-allowed opacity-60`:`cursor-pointer`,i),children:[(0,d.jsxs)(`span`,{className:`relative inline-flex shrink-0`,children:[(0,d.jsx)(`input`,{ref:f,id:m,type:`checkbox`,role:`switch`,checked:e,disabled:r,"aria-label":t?void 0:`Dark mode`,className:`peer sr-only`,...c}),(0,d.jsxs)(`span`,{className:l(`inline-flex h-8 w-16 items-center justify-between rounded-full px-2 transition-colors`,`bg-gray-200 peer-checked:bg-gray-700 dark:bg-gray-700 dark:peer-checked:bg-gray-900`,`peer-focus-visible:ring-2 peer-focus-visible:ring-brand-300 peer-focus-visible:ring-offset-2`),children:[(0,d.jsx)(o,{className:`size-4 text-yellow-500 z-1`,"aria-hidden":!0}),(0,d.jsx)(a,{className:`size-4 text-gray-400 z-1`,"aria-hidden":!0})]}),(0,d.jsx)(`span`,{"aria-hidden":!0,className:`absolute left-1 top-1 size-6 rounded-full bg-white shadow-z1 transition-transform peer-checked:translate-x-8 peer-checked:bg-gray-600`})]}),t&&(0,d.jsx)(`span`,{className:`text-p-std font-medium text-fg-default`,children:t})]})});try{f.displayName=`ThemeSwitch`,f.__docgenInfo={description:``,displayName:`ThemeSwitch`,filePath:`/home/runner/work/design-system/design-system/src/components/ThemeSwitch/ThemeSwitch.tsx`,methods:[],props:{checked:{defaultValue:null,declarations:[{fileName:`design-system/src/components/ThemeSwitch/ThemeSwitch.types.ts`,name:`ThemeSwitchProps`}],description:'`true` renders the "dark" thumb position. Purely presentational — `ThemeSwitch` owns no theme state; wire `onChange` to your own theme toggle.',name:`checked`,parent:{fileName:`design-system/src/components/ThemeSwitch/ThemeSwitch.types.ts`,name:`ThemeSwitchProps`},required:!1,tags:{},type:{name:`boolean`}},label:{defaultValue:null,declarations:[{fileName:`design-system/src/components/ThemeSwitch/ThemeSwitch.types.ts`,name:`ThemeSwitchProps`}],description:``,name:`label`,parent:{fileName:`design-system/src/components/ThemeSwitch/ThemeSwitch.types.ts`,name:`ThemeSwitchProps`},required:!1,tags:{},type:{name:`ReactNode`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),m=e({BoundToThemeToolbar:()=>S,Disabled:()=>x,Primary:()=>y,WithLabel:()=>b,__namedExportsOrder:()=>C,default:()=>v}),h,g,_,v,y,b,x,S,C,w=t((()=>{h=n(r(),1),p(),g=i(),{useGlobals:_}=__STORYBOOK_MODULE_PREVIEW_API__,v={title:`Components/ThemeSwitch`,component:f,parameters:{layout:`centered`},args:{disabled:!1}},y={render:e=>{function t(){let[t,n]=(0,h.useState)(!1);return(0,g.jsx)(f,{...e,checked:t,onChange:e=>n(e.target.checked)})}return(0,g.jsx)(t,{})}},b={render:e=>{function t(){let[t,n]=(0,h.useState)(!1);return(0,g.jsx)(f,{...e,checked:t,onChange:e=>n(e.target.checked),label:t?`Dark mode`:`Light mode`})}return(0,g.jsx)(t,{})}},x={args:{disabled:!0,checked:!1}},S={name:`Bound to the theme toolbar`,render:function(e){let[t,n]=_(),r=t.theme===`dark`;return(0,g.jsx)(f,{...e,checked:r,onChange:e=>n({theme:e.target.checked?`dark`:`light`}),label:r?`Dark mode`:`Light mode`})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Uncontrolled() {
      const [checked, setChecked] = useState(false);
      return <ThemeSwitch {...args} checked={checked} onChange={e => setChecked(e.target.checked)} />;
    }
    return <Uncontrolled />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    function Uncontrolled() {
      const [checked, setChecked] = useState(false);
      return <ThemeSwitch {...args} checked={checked} onChange={e => setChecked(e.target.checked)} label={checked ? 'Dark mode' : 'Light mode'} />;
    }
    return <Uncontrolled />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    checked: false
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Bound to the theme toolbar',
  // Storybook's own hooks (useGlobals) must be called directly in the story
  // function's body — nesting them inside a separately-defined React
  // component (as the other stories on this page do for plain useState)
  // breaks Storybook's hooks context. No local useState is needed here
  // anyway: updateGlobals already re-renders this story with fresh globals.
  // Named (capitalized) so eslint-plugin-react-hooks recognizes this as a
  // component body rather than a plain function.
  render: function Render(args) {
    const [globals, updateGlobals] = useGlobals();
    const isDark = globals.theme === 'dark';
    return <ThemeSwitch {...args} checked={isDark} onChange={e => updateGlobals({
      theme: e.target.checked ? 'dark' : 'light'
    })} label={isDark ? 'Dark mode' : 'Light mode'} />;
  }
}`,...S.parameters?.docs?.source}}},C=[`Primary`,`WithLabel`,`Disabled`,`BoundToThemeToolbar`]}));w();export{S as BoundToThemeToolbar,x as Disabled,y as Primary,b as WithLabel,C as __namedExportsOrder,v as default,w as n,m as t};