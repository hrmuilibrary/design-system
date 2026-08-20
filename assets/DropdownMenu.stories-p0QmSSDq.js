import{a as e,i as t,s as n}from"./preload-helper-BdFrVu1K.js";import{O as r,t as i}from"./iframe-cZVKo6eo.js";import{Et as a,Q as o,R as s,S as c,bt as l,o as u,t as d,u as f}from"./lucide-react-CxOTFfkd.js";import{t as p}from"./Button-BzbERSZ9.js";import{t as m}from"./Button-DE0bSdl8.js";import{a as h,i as g,n as _,o as v,r as y,s as b,t as x}from"./DropdownMenu-DrkqBFtJ.js";var S=e({AlignEnd:()=>j,AutoFlipNearViewportBottom:()=>F,CheckedItems:()=>k,Controlled:()=>M,CustomClassName:()=>N,DisabledItem:()=>A,ExternalAnchor:()=>L,ExternalAnchorState:()=>R,IconTrigger:()=>D,InsideOverflowHiddenContainer:()=>P,ItemsWithMeta:()=>z,KeyboardNavigation:()=>I,LegacyAbsoluteStrategy:()=>B,Primary:()=>E,WithLabelAndShortcuts:()=>O,__namedExportsOrder:()=>V,default:()=>T}),C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H=t((()=>{C=n(r(),1),d(),m(),b(),w=i(),T={title:`Components/DropdownMenu`,component:g,parameters:{layout:`centered`}},E={render:()=>(0,w.jsxs)(g,{children:[(0,w.jsx)(v,{children:(0,w.jsx)(p,{variant:`secondary`,children:`Options`})}),(0,w.jsxs)(x,{children:[(0,w.jsx)(_,{icon:(0,w.jsx)(s,{className:`h-4 w-4`}),children:`Edit`}),(0,w.jsx)(_,{icon:(0,w.jsx)(a,{className:`h-4 w-4`}),children:`Duplicate`}),(0,w.jsx)(h,{}),(0,w.jsx)(_,{icon:(0,w.jsx)(f,{className:`h-4 w-4`}),destructive:!0,children:`Delete`})]})]})},D={name:`Icon-only trigger`,render:()=>(0,w.jsxs)(g,{children:[(0,w.jsx)(v,{children:(0,w.jsx)(p,{variant:`tertiary`,iconOnly:!0,"aria-label":`More actions`,children:(0,w.jsx)(l,{className:`h-4 w-4`})})}),(0,w.jsxs)(x,{align:`end`,children:[(0,w.jsx)(_,{icon:(0,w.jsx)(s,{className:`h-4 w-4`}),children:`Edit`}),(0,w.jsx)(_,{icon:(0,w.jsx)(a,{className:`h-4 w-4`}),children:`Duplicate`}),(0,w.jsx)(h,{}),(0,w.jsx)(_,{icon:(0,w.jsx)(f,{className:`h-4 w-4`}),destructive:!0,children:`Delete`})]})]})},O={name:`Label, separator & shortcuts`,render:()=>(0,w.jsxs)(g,{children:[(0,w.jsx)(v,{children:(0,w.jsx)(p,{variant:`secondary`,children:`Account`})}),(0,w.jsxs)(x,{children:[(0,w.jsx)(y,{children:`My account`}),(0,w.jsx)(_,{icon:(0,w.jsx)(u,{className:`h-4 w-4`}),shortcut:`⌘P`,children:`Profile`}),(0,w.jsx)(_,{icon:(0,w.jsx)(c,{className:`h-4 w-4`}),shortcut:`⌘,`,children:`Settings`}),(0,w.jsx)(h,{}),(0,w.jsx)(_,{icon:(0,w.jsx)(o,{className:`h-4 w-4`}),shortcut:`⇧⌘Q`,children:`Log out`})]})]})},k={name:`Checked items`,render:()=>{function e(){let[e,t]=(0,C.useState)(`list`);return(0,w.jsxs)(g,{children:[(0,w.jsx)(v,{children:(0,w.jsxs)(p,{variant:`secondary`,children:[`View: `,e===`list`?`List`:`Board`]})}),(0,w.jsxs)(x,{children:[(0,w.jsx)(_,{checked:e===`list`,onSelect:()=>t(`list`),children:`List`}),(0,w.jsx)(_,{checked:e===`board`,onSelect:()=>t(`board`),children:`Board`})]})]})}return(0,w.jsx)(e,{})}},A={name:`Disabled item`,render:()=>(0,w.jsxs)(g,{children:[(0,w.jsx)(v,{children:(0,w.jsx)(p,{variant:`secondary`,children:`Options`})}),(0,w.jsxs)(x,{children:[(0,w.jsx)(_,{icon:(0,w.jsx)(s,{className:`h-4 w-4`}),children:`Edit`}),(0,w.jsx)(_,{icon:(0,w.jsx)(a,{className:`h-4 w-4`}),disabled:!0,children:`Duplicate (unavailable)`}),(0,w.jsx)(_,{icon:(0,w.jsx)(f,{className:`h-4 w-4`}),destructive:!0,children:`Delete`})]})]})},j={name:`Aligned to trigger end`,render:()=>(0,w.jsx)(`div`,{className:`flex justify-end w-80`,children:(0,w.jsxs)(g,{children:[(0,w.jsx)(v,{children:(0,w.jsx)(p,{variant:`secondary`,children:`Options`})}),(0,w.jsxs)(x,{align:`end`,children:[(0,w.jsx)(_,{children:`Edit`}),(0,w.jsx)(_,{children:`Duplicate`}),(0,w.jsx)(_,{destructive:!0,children:`Delete`})]})]})})},M={render:()=>{function e(){let[e,t]=(0,C.useState)(!1);return(0,w.jsxs)(g,{open:e,onOpenChange:t,children:[(0,w.jsx)(v,{children:(0,w.jsx)(p,{variant:`secondary`,children:e?`Close menu`:`Open menu`})}),(0,w.jsxs)(x,{children:[(0,w.jsx)(_,{onSelect:()=>t(!1),children:`Edit`}),(0,w.jsx)(_,{onSelect:()=>t(!1),children:`Duplicate`})]})]})}return(0,w.jsx)(e,{})}},N={name:`Overriding classes via className`,render:()=>(0,w.jsxs)(g,{children:[(0,w.jsx)(v,{children:(0,w.jsx)(p,{variant:`secondary`,children:`Options`})}),(0,w.jsxs)(x,{className:`border-brand-500 min-w-[240px]`,children:[(0,w.jsx)(_,{className:`text-brand-700`,children:`Edit`}),(0,w.jsx)(_,{children:`Duplicate`})]})]})},P={name:`Inside an overflow-hidden container`,render:()=>(0,w.jsx)(`div`,{className:`h-32 w-64 overflow-hidden border border-border-default p-4`,children:(0,w.jsxs)(g,{children:[(0,w.jsx)(v,{children:(0,w.jsx)(p,{variant:`secondary`,children:`Options`})}),(0,w.jsxs)(x,{children:[(0,w.jsx)(_,{children:`Edit`}),(0,w.jsx)(_,{children:`Duplicate`}),(0,w.jsx)(_,{destructive:!0,children:`Delete`})]})]})})},F={name:`Auto flip near viewport bottom`,render:()=>(0,w.jsx)(`div`,{className:`mt-[70vh]`,children:(0,w.jsxs)(g,{children:[(0,w.jsx)(v,{children:(0,w.jsx)(p,{variant:`secondary`,children:`Options`})}),(0,w.jsxs)(x,{children:[(0,w.jsx)(_,{children:`Edit`}),(0,w.jsx)(_,{children:`Duplicate`}),(0,w.jsx)(_,{destructive:!0,children:`Delete`})]})]})})},I={name:`Keyboard navigation`,render:()=>(0,w.jsxs)(g,{children:[(0,w.jsx)(v,{children:(0,w.jsx)(p,{variant:`secondary`,children:`Options`})}),(0,w.jsxs)(x,{children:[(0,w.jsx)(_,{icon:(0,w.jsx)(s,{className:`h-4 w-4`}),children:`Edit`}),(0,w.jsx)(_,{icon:(0,w.jsx)(a,{className:`h-4 w-4`}),children:`Duplicate`}),(0,w.jsx)(h,{}),(0,w.jsx)(_,{icon:(0,w.jsx)(f,{className:`h-4 w-4`}),destructive:!0,children:`Delete`})]})]})},L={name:`External anchor (anchorRef)`,render:()=>{function e(){let e=(0,C.useRef)(null),[t,n]=(0,C.useState)(!1);return(0,w.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,w.jsx)(`div`,{ref:e,className:`rounded-lg border border-dashed border-border-strong px-3 py-2 text-p-sm text-fg-secondary`,children:`Anchor element`}),(0,w.jsxs)(g,{open:t,onOpenChange:n,anchorRef:e,children:[(0,w.jsx)(p,{variant:`secondary`,onClick:()=>n(e=>!e),children:`Toggle menu`}),(0,w.jsxs)(x,{children:[(0,w.jsx)(_,{onSelect:()=>n(!1),children:`Edit`}),(0,w.jsx)(_,{onSelect:()=>n(!1),children:`Duplicate`})]})]})]})}return(0,w.jsx)(e,{})}},R={name:`External anchor (useState)`,render:()=>{function e(){let[e,t]=(0,C.useState)(null),[n,r]=(0,C.useState)(!1);return(0,w.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,w.jsx)(`div`,{ref:t,className:`rounded-lg border border-dashed border-border-strong px-3 py-2 text-p-sm text-fg-secondary`,children:`Anchor element`}),(0,w.jsxs)(g,{open:n,onOpenChange:r,anchorRef:e,children:[(0,w.jsx)(v,{children:(0,w.jsx)(p,{variant:`secondary`,onClick:()=>r(e=>!e),children:`Toggle menu`})}),(0,w.jsxs)(x,{children:[(0,w.jsx)(_,{onSelect:()=>r(!1),children:`Edit`}),(0,w.jsx)(_,{onSelect:()=>r(!1),children:`Duplicate`})]})]})]})}return(0,w.jsx)(e,{})}},z={name:`Items with meta`,render:()=>(0,w.jsxs)(g,{children:[(0,w.jsx)(v,{children:(0,w.jsx)(p,{variant:`secondary`,children:`Assign to`})}),(0,w.jsxs)(x,{children:[(0,w.jsx)(_,{icon:(0,w.jsx)(u,{className:`h-4 w-4`}),meta:`Product`,children:`Ani Petrosyan`}),(0,w.jsx)(_,{icon:(0,w.jsx)(u,{className:`h-4 w-4`}),meta:`Engineering`,children:`Davit Grigoryan`})]})]})},B={name:`Legacy absolute strategy`,render:()=>(0,w.jsxs)(g,{children:[(0,w.jsx)(v,{children:(0,w.jsx)(p,{variant:`secondary`,children:`Options`})}),(0,w.jsxs)(x,{strategy:`absolute`,children:[(0,w.jsx)(_,{children:`Edit`}),(0,w.jsx)(_,{children:`Duplicate`}),(0,w.jsx)(_,{destructive:!0,children:`Delete`})]})]})},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Inside an overflow-hidden container',
  render: () => <div className="h-32 w-64 overflow-hidden border border-border-default p-4">
      <DropdownMenu>
        <DropdownTrigger>
          <Button variant="secondary">Options</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem>Edit</DropdownItem>
          <DropdownItem>Duplicate</DropdownItem>
          <DropdownItem destructive>Delete</DropdownItem>
        </DropdownContent>
      </DropdownMenu>
    </div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Auto flip near viewport bottom',
  render: () => <div className="mt-[70vh]">
      <DropdownMenu>
        <DropdownTrigger>
          <Button variant="secondary">Options</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem>Edit</DropdownItem>
          <DropdownItem>Duplicate</DropdownItem>
          <DropdownItem destructive>Delete</DropdownItem>
        </DropdownContent>
      </DropdownMenu>
    </div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Keyboard navigation',
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'External anchor (anchorRef)',
  render: () => {
    function ExternalAnchorExample() {
      const anchorRef = useRef<HTMLDivElement>(null);
      const [open, setOpen] = useState(false);
      return <div className="flex items-center gap-3">
          <div ref={anchorRef} className="rounded-lg border border-dashed border-border-strong px-3 py-2 text-p-sm text-fg-secondary">
            Anchor element
          </div>
          <DropdownMenu open={open} onOpenChange={setOpen} anchorRef={anchorRef}>
            <Button variant="secondary" onClick={() => setOpen(v => !v)}>
              Toggle menu
            </Button>
            <DropdownContent>
              <DropdownItem onSelect={() => setOpen(false)}>Edit</DropdownItem>
              <DropdownItem onSelect={() => setOpen(false)}>Duplicate</DropdownItem>
            </DropdownContent>
          </DropdownMenu>
        </div>;
    }
    return <ExternalAnchorExample />;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'External anchor (useState)',
  render: () => {
    function ExternalAnchorStateExample() {
      const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
      const [open, setOpen] = useState(false);
      return <div className="flex items-center gap-3">
          <div ref={setAnchorEl} className="rounded-lg border border-dashed border-border-strong px-3 py-2 text-p-sm text-fg-secondary">
            Anchor element
          </div>
          <DropdownMenu open={open} onOpenChange={setOpen} anchorRef={anchorEl}>
            <DropdownTrigger>
              <Button variant="secondary" onClick={() => setOpen(v => !v)}>
                Toggle menu
              </Button>
            </DropdownTrigger>
            <DropdownContent>
              <DropdownItem onSelect={() => setOpen(false)}>Edit</DropdownItem>
              <DropdownItem onSelect={() => setOpen(false)}>Duplicate</DropdownItem>
            </DropdownContent>
          </DropdownMenu>
        </div>;
    }
    return <ExternalAnchorStateExample />;
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Items with meta',
  render: () => <DropdownMenu>
      <DropdownTrigger>
        <Button variant="secondary">Assign to</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem icon={<User className="h-4 w-4" />} meta="Product">
          Ani Petrosyan
        </DropdownItem>
        <DropdownItem icon={<User className="h-4 w-4" />} meta="Engineering">
          Davit Grigoryan
        </DropdownItem>
      </DropdownContent>
    </DropdownMenu>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Legacy absolute strategy',
  render: () => <DropdownMenu>
      <DropdownTrigger>
        <Button variant="secondary">Options</Button>
      </DropdownTrigger>
      <DropdownContent strategy="absolute">
        <DropdownItem>Edit</DropdownItem>
        <DropdownItem>Duplicate</DropdownItem>
        <DropdownItem destructive>Delete</DropdownItem>
      </DropdownContent>
    </DropdownMenu>
}`,...B.parameters?.docs?.source}}},V=[`Primary`,`IconTrigger`,`WithLabelAndShortcuts`,`CheckedItems`,`DisabledItem`,`AlignEnd`,`Controlled`,`CustomClassName`,`InsideOverflowHiddenContainer`,`AutoFlipNearViewportBottom`,`KeyboardNavigation`,`ExternalAnchor`,`ExternalAnchorState`,`ItemsWithMeta`,`LegacyAbsoluteStrategy`]}));H();export{j as AlignEnd,F as AutoFlipNearViewportBottom,k as CheckedItems,M as Controlled,N as CustomClassName,A as DisabledItem,L as ExternalAnchor,R as ExternalAnchorState,D as IconTrigger,P as InsideOverflowHiddenContainer,z as ItemsWithMeta,I as KeyboardNavigation,B as LegacyAbsoluteStrategy,E as Primary,O as WithLabelAndShortcuts,V as __namedExportsOrder,T as default,H as n,S as t};