import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-BgCNYJC5.js";import{E as a,I as o,X as s,b as c,bt as l,et as u,o as d,t as f,u as p}from"./lucide-react-D8xGtw7t.js";import{n as m,t as h}from"./cn-CHNBg8JS.js";import{t as g}from"./Button-pCbQguxX.js";import{t as _}from"./Button-CJ5ck7Yc.js";function v(){let e=(0,x.useContext)(C);if(!e)throw Error(`Dropdown parts must be used inside <DropdownMenu>`);return e}function y(...e){return t=>{for(let n of e)n&&(typeof n==`function`?n(t):n.current=t)}}function b({children:e}){let{open:t,setOpen:n,triggerRef:r}=v();if(!(0,x.isValidElement)(e))return e;let i=e.props??{};return(0,x.cloneElement)(e,{ref:r,onClick:e=>{let r=i.onClick;r?.(e),e.defaultPrevented||n(!t)},"aria-haspopup":`menu`,"aria-expanded":t})}var x,S,C,w,T,E,D,O,k=t((()=>{x=n(r(),1),f(),m(),S=i(),C=(0,x.createContext)(null),w=(0,x.forwardRef)(function({children:e,defaultOpen:t=!1,open:n,onOpenChange:r,className:i,dataTestId:a,...o},s){let[c,l]=(0,x.useState)(t),u=n!==void 0,d=u?n:c,f=(0,x.useRef)(null),p=e=>{u||l(e),r?.(e)};return(0,x.useEffect)(()=>{if(!d)return;let e=e=>{e.key===`Escape`&&p(!1)};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[d]),(0,S.jsx)(C.Provider,{value:{open:d,setOpen:p,triggerRef:f},children:(0,S.jsx)(`div`,{ref:s,"data-test-id":a,className:h(`relative inline-block`,i),...o,children:e})})}),T=(0,x.forwardRef)(function({children:e,align:t=`start`,className:n,dataTestId:r,...i},a){let{open:o,setOpen:s,triggerRef:c}=v(),l=(0,x.useRef)(null);return(0,x.useEffect)(()=>{if(!o)return;let e=e=>{let t=e.target;l.current?.contains(t)||c.current?.contains(t)||s(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[o,s,c]),o?(0,S.jsx)(`div`,{ref:y(a,l),role:`menu`,"data-test-id":r,className:h(`absolute top-full mt-1 min-w-[200px] rounded-lg border border-border-default bg-bg-default shadow-z4 z-50 py-1`,t===`end`?`right-0`:`left-0`,n),...i,children:e}):null}),E=(0,x.forwardRef)(function({children:e,onSelect:t,disabled:n,icon:r,shortcut:i,destructive:a,checked:o,className:s,dataTestId:c,onClick:u,...d},f){let{setOpen:p}=v();return(0,S.jsxs)(`button`,{ref:f,type:`button`,role:`menuitem`,disabled:n,"data-test-id":c,onClick:e=>{u?.(e),t?.(),p(!1)},className:h(`flex w-full items-center gap-2 px-3 py-2 text-left text-p-std text-fg-default`,`hover:bg-bg-subtle focus-visible:outline-none focus-visible:bg-bg-subtle`,n&&`opacity-50 cursor-not-allowed hover:bg-transparent`,a&&`text-red-700 hover:bg-red-50`,s),...d,children:[o!==void 0&&(0,S.jsx)(`span`,{className:`w-4 shrink-0`,children:o&&(0,S.jsx)(l,{className:`h-4 w-4 text-brand-500`})}),r&&(0,S.jsx)(`span`,{className:`inline-flex shrink-0 text-fg-secondary`,children:r}),(0,S.jsx)(`span`,{className:`flex-1 truncate`,children:e}),i&&(0,S.jsx)(`span`,{className:`text-p-sm text-fg-tertiary shrink-0 tabular-nums`,children:i})]})}),D=(0,x.forwardRef)(function({className:e,dataTestId:t,...n},r){return(0,S.jsx)(`div`,{ref:r,role:`separator`,"data-test-id":t,className:h(`my-1 h-px bg-border-default`,e),...n})}),O=(0,x.forwardRef)(function({children:e,className:t,dataTestId:n,...r},i){return(0,S.jsx)(`div`,{ref:i,"data-test-id":n,className:h(`px-3 py-1.5 text-p-xs font-semibold uppercase tracking-wider text-fg-tertiary`,t),...r,children:e})});try{b.displayName=`DropdownTrigger`,b.__docgenInfo={description:``,displayName:`DropdownTrigger`,filePath:`/home/runner/work/design-system/design-system/src/components/DropdownMenu/DropdownMenu.tsx`,methods:[],props:{children:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownTriggerProps`}],description:"A single element cloned with the click handler and `aria-haspopup`/`aria-expanded` that open the menu.",name:`children`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownTriggerProps`},required:!0,tags:{},type:{name:`ReactElement<unknown, string | JSXElementConstructor<any>>`}}},tags:{}}}catch{}try{w.displayName=`DropdownMenu`,w.__docgenInfo={description:``,displayName:`DropdownMenu`,filePath:`/home/runner/work/design-system/design-system/src/components/DropdownMenu/DropdownMenu.tsx`,methods:[],props:{defaultOpen:{defaultValue:{value:`false`},declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownMenuProps`}],description:`Uncontrolled initial open state.`,name:`defaultOpen`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownMenuProps`},required:!1,tags:{},type:{name:`boolean`}},open:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownMenuProps`}],description:"Controlled open state. Pass alongside `onOpenChange` to fully control the menu.",name:`open`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownMenuProps`},required:!1,tags:{},type:{name:`boolean`}},onOpenChange:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownMenuProps`}],description:``,name:`onOpenChange`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownMenuProps`},required:!1,tags:{},type:{name:`((open: boolean) => void)`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{T.displayName=`DropdownContent`,T.__docgenInfo={description:``,displayName:`DropdownContent`,filePath:`/home/runner/work/design-system/design-system/src/components/DropdownMenu/DropdownMenu.tsx`,methods:[],props:{align:{defaultValue:{value:`start`},declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownContentProps`}],description:`Horizontal alignment of the panel relative to the trigger.`,name:`align`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownContentProps`},required:!1,tags:{},type:{name:`enum`,raw:`DropdownContentAlign`,value:[{value:`"start"`},{value:`"end"`}]}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{E.displayName=`DropdownItem`,E.__docgenInfo={description:``,displayName:`DropdownItem`,filePath:`/home/runner/work/design-system/design-system/src/components/DropdownMenu/DropdownMenu.tsx`,methods:[],props:{onSelect:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownItemProps`}],description:"Called on click, after any native `onClick`, then closes the menu.",name:`onSelect`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownItemProps`},required:!1,tags:{},type:{name:`(() => void)`}},icon:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownItemProps`}],description:``,name:`icon`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownItemProps`},required:!1,tags:{},type:{name:`ReactNode`}},shortcut:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownItemProps`}],description:`Trailing hint text, e.g. a keyboard shortcut.`,name:`shortcut`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownItemProps`},required:!1,tags:{},type:{name:`ReactNode`}},destructive:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownItemProps`}],description:`Renders the item in the danger palette for destructive actions.`,name:`destructive`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownItemProps`},required:!1,tags:{},type:{name:`boolean`}},checked:{defaultValue:null,declarations:[{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownItemProps`}],description:"Renders a leading check mark when `true`; reserves the space (unchecked) when `false`. Omit entirely for items with no check state.",name:`checked`,parent:{fileName:`design-system/src/components/DropdownMenu/DropdownMenu.types.ts`,name:`DropdownItemProps`},required:!1,tags:{},type:{name:`boolean`}},dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{D.displayName=`DropdownSeparator`,D.__docgenInfo={description:``,displayName:`DropdownSeparator`,filePath:`/home/runner/work/design-system/design-system/src/components/DropdownMenu/DropdownMenu.tsx`,methods:[],props:{dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}try{O.displayName=`DropdownLabel`,O.__docgenInfo={description:``,displayName:`DropdownLabel`,filePath:`/home/runner/work/design-system/design-system/src/components/DropdownMenu/DropdownMenu.tsx`,methods:[],props:{dataTestId:{defaultValue:null,declarations:[{fileName:`design-system/src/types/base.ts`,name:`BaseProps`}],description:"Rendered as `data-test-id` for test selectors.",name:`dataTestId`,parent:{fileName:`design-system/src/types/base.ts`,name:`BaseProps`},required:!1,tags:{},type:{name:`string`}}},tags:{}}}catch{}})),A=e({AlignEnd:()=>z,CheckedItems:()=>L,Controlled:()=>B,CustomClassName:()=>V,DisabledItem:()=>R,IconTrigger:()=>F,Primary:()=>P,WithLabelAndShortcuts:()=>I,__namedExportsOrder:()=>H,default:()=>N}),j,M,N,P,F,I,L,R,z,B,V,H,U=t((()=>{j=n(r(),1),f(),_(),k(),M=i(),N={title:`Components/DropdownMenu`,component:w,parameters:{layout:`centered`}},P={render:()=>(0,M.jsxs)(w,{children:[(0,M.jsx)(b,{children:(0,M.jsx)(g,{variant:`secondary`,children:`Options`})}),(0,M.jsxs)(T,{children:[(0,M.jsx)(E,{icon:(0,M.jsx)(a,{className:`h-4 w-4`}),children:`Edit`}),(0,M.jsx)(E,{icon:(0,M.jsx)(u,{className:`h-4 w-4`}),children:`Duplicate`}),(0,M.jsx)(D,{}),(0,M.jsx)(E,{icon:(0,M.jsx)(p,{className:`h-4 w-4`}),destructive:!0,children:`Delete`})]})]})},F={name:`Icon-only trigger`,render:()=>(0,M.jsxs)(w,{children:[(0,M.jsx)(b,{children:(0,M.jsx)(g,{variant:`tertiary`,iconOnly:!0,"aria-label":`More actions`,children:(0,M.jsx)(s,{className:`h-4 w-4`})})}),(0,M.jsxs)(T,{align:`end`,children:[(0,M.jsx)(E,{icon:(0,M.jsx)(a,{className:`h-4 w-4`}),children:`Edit`}),(0,M.jsx)(E,{icon:(0,M.jsx)(u,{className:`h-4 w-4`}),children:`Duplicate`}),(0,M.jsx)(D,{}),(0,M.jsx)(E,{icon:(0,M.jsx)(p,{className:`h-4 w-4`}),destructive:!0,children:`Delete`})]})]})},I={name:`Label, separator & shortcuts`,render:()=>(0,M.jsxs)(w,{children:[(0,M.jsx)(b,{children:(0,M.jsx)(g,{variant:`secondary`,children:`Account`})}),(0,M.jsxs)(T,{children:[(0,M.jsx)(O,{children:`My account`}),(0,M.jsx)(E,{icon:(0,M.jsx)(d,{className:`h-4 w-4`}),shortcut:`⌘P`,children:`Profile`}),(0,M.jsx)(E,{icon:(0,M.jsx)(c,{className:`h-4 w-4`}),shortcut:`⌘,`,children:`Settings`}),(0,M.jsx)(D,{}),(0,M.jsx)(E,{icon:(0,M.jsx)(o,{className:`h-4 w-4`}),shortcut:`⇧⌘Q`,children:`Log out`})]})]})},L={name:`Checked items`,render:()=>{function e(){let[e,t]=(0,j.useState)(`list`);return(0,M.jsxs)(w,{children:[(0,M.jsx)(b,{children:(0,M.jsxs)(g,{variant:`secondary`,children:[`View: `,e===`list`?`List`:`Board`]})}),(0,M.jsxs)(T,{children:[(0,M.jsx)(E,{checked:e===`list`,onSelect:()=>t(`list`),children:`List`}),(0,M.jsx)(E,{checked:e===`board`,onSelect:()=>t(`board`),children:`Board`})]})]})}return(0,M.jsx)(e,{})}},R={name:`Disabled item`,render:()=>(0,M.jsxs)(w,{children:[(0,M.jsx)(b,{children:(0,M.jsx)(g,{variant:`secondary`,children:`Options`})}),(0,M.jsxs)(T,{children:[(0,M.jsx)(E,{icon:(0,M.jsx)(a,{className:`h-4 w-4`}),children:`Edit`}),(0,M.jsx)(E,{icon:(0,M.jsx)(u,{className:`h-4 w-4`}),disabled:!0,children:`Duplicate (unavailable)`}),(0,M.jsx)(E,{icon:(0,M.jsx)(p,{className:`h-4 w-4`}),destructive:!0,children:`Delete`})]})]})},z={name:`Aligned to trigger end`,render:()=>(0,M.jsx)(`div`,{className:`flex justify-end w-80`,children:(0,M.jsxs)(w,{children:[(0,M.jsx)(b,{children:(0,M.jsx)(g,{variant:`secondary`,children:`Options`})}),(0,M.jsxs)(T,{align:`end`,children:[(0,M.jsx)(E,{children:`Edit`}),(0,M.jsx)(E,{children:`Duplicate`}),(0,M.jsx)(E,{destructive:!0,children:`Delete`})]})]})})},B={render:()=>{function e(){let[e,t]=(0,j.useState)(!1);return(0,M.jsxs)(w,{open:e,onOpenChange:t,children:[(0,M.jsx)(b,{children:(0,M.jsx)(g,{variant:`secondary`,children:e?`Close menu`:`Open menu`})}),(0,M.jsxs)(T,{children:[(0,M.jsx)(E,{onSelect:()=>t(!1),children:`Edit`}),(0,M.jsx)(E,{onSelect:()=>t(!1),children:`Duplicate`})]})]})}return(0,M.jsx)(e,{})}},V={name:`Overriding classes via className`,render:()=>(0,M.jsxs)(w,{children:[(0,M.jsx)(b,{children:(0,M.jsx)(g,{variant:`secondary`,children:`Options`})}),(0,M.jsxs)(T,{className:`border-brand-500 min-w-[240px]`,children:[(0,M.jsx)(E,{className:`text-brand-700`,children:`Edit`}),(0,M.jsx)(E,{children:`Duplicate`})]})]})},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <DropdownMenu>
      <DropdownTrigger>
        <Button variant="secondary">Options</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem icon={<Pencil className="h-4 w-4" />}>Edit</DropdownItem>
        <DropdownItem icon={<Copy className="h-4 w-4" />}>Duplicate</DropdownItem>
        <DropdownSeparator />
        <DropdownItem icon={<Trash2 className="h-4 w-4" />} destructive>
          Delete
        </DropdownItem>
      </DropdownContent>
    </DropdownMenu>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Icon-only trigger',
  render: () => <DropdownMenu>
      <DropdownTrigger>
        <Button variant="tertiary" iconOnly aria-label="More actions">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownTrigger>
      <DropdownContent align="end">
        <DropdownItem icon={<Pencil className="h-4 w-4" />}>Edit</DropdownItem>
        <DropdownItem icon={<Copy className="h-4 w-4" />}>Duplicate</DropdownItem>
        <DropdownSeparator />
        <DropdownItem icon={<Trash2 className="h-4 w-4" />} destructive>
          Delete
        </DropdownItem>
      </DropdownContent>
    </DropdownMenu>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Label, separator & shortcuts',
  render: () => <DropdownMenu>
      <DropdownTrigger>
        <Button variant="secondary">Account</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownLabel>My account</DropdownLabel>
        <DropdownItem icon={<User className="h-4 w-4" />} shortcut="⌘P">
          Profile
        </DropdownItem>
        <DropdownItem icon={<Settings className="h-4 w-4" />} shortcut="⌘,">
          Settings
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem icon={<LogOut className="h-4 w-4" />} shortcut="⇧⌘Q">
          Log out
        </DropdownItem>
      </DropdownContent>
    </DropdownMenu>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Checked items',
  render: () => {
    function CheckedExample() {
      const [view, setView] = useState<'list' | 'board'>('list');
      return <DropdownMenu>
          <DropdownTrigger>
            <Button variant="secondary">View: {view === 'list' ? 'List' : 'Board'}</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem checked={view === 'list'} onSelect={() => setView('list')}>
              List
            </DropdownItem>
            <DropdownItem checked={view === 'board'} onSelect={() => setView('board')}>
              Board
            </DropdownItem>
          </DropdownContent>
        </DropdownMenu>;
    }
    return <CheckedExample />;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Disabled item',
  render: () => <DropdownMenu>
      <DropdownTrigger>
        <Button variant="secondary">Options</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem icon={<Pencil className="h-4 w-4" />}>Edit</DropdownItem>
        <DropdownItem icon={<Copy className="h-4 w-4" />} disabled>
          Duplicate (unavailable)
        </DropdownItem>
        <DropdownItem icon={<Trash2 className="h-4 w-4" />} destructive>
          Delete
        </DropdownItem>
      </DropdownContent>
    </DropdownMenu>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Aligned to trigger end',
  render: () => <div className="flex justify-end w-80">
      <DropdownMenu>
        <DropdownTrigger>
          <Button variant="secondary">Options</Button>
        </DropdownTrigger>
        <DropdownContent align="end">
          <DropdownItem>Edit</DropdownItem>
          <DropdownItem>Duplicate</DropdownItem>
          <DropdownItem destructive>Delete</DropdownItem>
        </DropdownContent>
      </DropdownMenu>
    </div>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    function ControlledExample() {
      const [open, setOpen] = useState(false);
      return <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownTrigger>
            <Button variant="secondary">{open ? 'Close menu' : 'Open menu'}</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem onSelect={() => setOpen(false)}>Edit</DropdownItem>
            <DropdownItem onSelect={() => setOpen(false)}>Duplicate</DropdownItem>
          </DropdownContent>
        </DropdownMenu>;
    }
    return <ControlledExample />;
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Overriding classes via className',
  render: () => <DropdownMenu>
      <DropdownTrigger>
        <Button variant="secondary">Options</Button>
      </DropdownTrigger>
      <DropdownContent className="border-brand-500 min-w-[240px]">
        <DropdownItem className="text-brand-700">Edit</DropdownItem>
        <DropdownItem>Duplicate</DropdownItem>
      </DropdownContent>
    </DropdownMenu>
}`,...V.parameters?.docs?.source}}},H=[`Primary`,`IconTrigger`,`WithLabelAndShortcuts`,`CheckedItems`,`DisabledItem`,`AlignEnd`,`Controlled`,`CustomClassName`]}));U();export{z as AlignEnd,L as CheckedItems,B as Controlled,V as CustomClassName,R as DisabledItem,F as IconTrigger,P as Primary,I as WithLabelAndShortcuts,H as __namedExportsOrder,N as default,U as n,A as t};