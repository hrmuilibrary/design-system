import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./iframe-LRtYaCwk.js";import{i as n}from"./react-7R5ZREk1.js";import{c as r,i,l as a,n as o,s,u as c}from"./blocks-Deu5e4xD.js";import{t as l}from"./mdx-react-shim-2kS8Pmap.js";import{MultiWordSearch as u,WithOptionActions as d,n as f,t as p}from"./SelectV2.stories-DcfTXslz.js";function m(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(s,{of:p}),`
`,(0,g.jsx)(t.h1,{id:`selectv2`,children:`SelectV2`}),`
`,(0,g.jsxs)(t.p,{children:[`A combobox built on `,(0,g.jsx)(t.a,{href:`https://react-select.com/`,rel:`nofollow`,children:(0,g.jsx)(t.code,{children:`react-select`})}),` — the
headless-behavior counterpart to `,(0,g.jsx)(t.code,{children:`Select`}),`/`,(0,g.jsx)(t.code,{children:`MultiSelect`}),`, in the same sense
that `,(0,g.jsx)(t.code,{children:`TableV2`}),` wraps `,(0,g.jsx)(t.code,{children:`@tanstack/react-table`}),` instead of hand-rolling table
behavior. Reach for `,(0,g.jsx)(t.code,{children:`SelectV2`}),` when you need async-loaded options,
user-creatable options, or option lists in the thousands — capabilities
`,(0,g.jsx)(t.code,{children:`Select`}),`/`,(0,g.jsx)(t.code,{children:`MultiSelect`}),` don't have. For everything else, `,(0,g.jsx)(t.code,{children:`Select`}),` and
`,(0,g.jsx)(t.code,{children:`MultiSelect`}),` remain the simpler, dependency-free choice.`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.strong,{children:`Peer dependency`}),`: `,(0,g.jsx)(t.code,{children:`react-select`}),` (`,(0,g.jsx)(t.code,{children:`^5.10.2`}),`) is an optional peer
dependency, the same treatment as `,(0,g.jsx)(t.code,{children:`react-hook-form`}),`/`,(0,g.jsx)(t.code,{children:`yup`}),` for
`,(0,g.jsx)(t.code,{children:`FormContainer`}),`/`,(0,g.jsx)(t.code,{children:`FormField`}),` — install it alongside this package if you use
`,(0,g.jsx)(t.code,{children:`SelectV2`}),`.`]}),`
`,(0,g.jsx)(r,{}),`
`,(0,g.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,g.jsx)(i,{}),`
`,(0,g.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,g.jsx)(a,{}),`
`,(0,g.jsx)(t.h2,{id:`single-vs-multi`,children:`Single vs. multi`}),`
`,(0,g.jsxs)(t.p,{children:[`One component covers both, via `,(0,g.jsx)(t.code,{children:`isMulti`}),` — matching react-select's own API.
`,(0,g.jsx)(t.code,{children:`isMulti`}),` also changes the type of `,(0,g.jsx)(t.code,{children:`value`}),`/`,(0,g.jsx)(t.code,{children:`defaultValue`}),`/`,(0,g.jsx)(t.code,{children:`onChange`}),`:`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`// Single (isMulti omitted or false)
<SelectV2 options={options} value={value} onChange={(v: OptionValue | undefined) => ...} />

// Multi
<SelectV2 isMulti options={options} value={values} onChange={(vs: OptionValue[]) => ...} />
`})}),`
`,(0,g.jsxs)(t.p,{children:[`As with `,(0,g.jsx)(t.code,{children:`Select`}),`, pass `,(0,g.jsx)(t.code,{children:`value`}),`/`,(0,g.jsx)(t.code,{children:`onChange`}),` for controlled usage or
`,(0,g.jsx)(t.code,{children:`defaultValue`}),` for uncontrolled — never both.`]}),`
`,(0,g.jsx)(t.h2,{id:`async-options`,children:`Async options`}),`
`,(0,g.jsxs)(t.p,{children:[`Pass `,(0,g.jsx)(t.code,{children:`loadOptions`}),` to fetch options as the user types (debounced internally
by react-select). `,(0,g.jsx)(t.code,{children:`defaultOptions`}),` controls what's shown before the first
keystroke: an array of options, or `,(0,g.jsx)(t.code,{children:`true`}),` to trigger an initial
`,(0,g.jsx)(t.code,{children:`loadOptions('')`}),` call.`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`<SelectV2
  loadOptions={(query) => fetchUsers(query)}
  defaultOptions
  value={value}
  onChange={setValue}
/>
`})}),`
`,(0,g.jsxs)(t.p,{children:[`Because a controlled `,(0,g.jsx)(t.code,{children:`value`}),` needs the full option object (label, etc.) to
render — not just the bare value — SelectV2 remembers every option it has
ever seen (from `,(0,g.jsx)(t.code,{children:`options`}),`, `,(0,g.jsx)(t.code,{children:`defaultOptions`}),`, `,(0,g.jsx)(t.code,{children:`loadOptions`}),` results, and
anything the user selects or creates). If you set a controlled `,(0,g.jsx)(t.code,{children:`value`}),` to an
id `,(0,g.jsx)(t.code,{children:`loadOptions`}),` hasn't returned yet, it renders with a fallback label equal
to the raw value until a matching option is seen — pass that option via
`,(0,g.jsx)(t.code,{children:`defaultOptions`}),` up front to avoid the flash.`]}),`
`,(0,g.jsx)(t.h2,{id:`creatable-options`,children:`Creatable options`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`creatable`}),` lets the user type a value that isn't in the list and add it.
SelectV2 handles adding and selecting the new option itself; `,(0,g.jsx)(t.code,{children:`onCreateOption`}),`
is for your own side effects (e.g. persisting it upstream) — it does not
need to call back into `,(0,g.jsx)(t.code,{children:`value`}),`/`,(0,g.jsx)(t.code,{children:`onChange`}),` itself.`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`<SelectV2
  options={options}
  creatable
  onCreateOption={(text) => saveNewOption(text)}
  value={value}
  onChange={setValue}
/>
`})}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`creatable`}),` composes with `,(0,g.jsx)(t.code,{children:`loadOptions`}),` — SelectV2 picks react-select's
`,(0,g.jsx)(t.code,{children:`AsyncCreatableSelect`}),` under the hood when both are set.`]}),`
`,(0,g.jsx)(t.h2,{id:`per-option-actions`,children:`Per-option actions`}),`
`,(0,g.jsxs)(t.p,{children:[`Set `,(0,g.jsx)(t.code,{children:`actions`}),` on an option to pin content to the end of its menu row — e.g.
a "⋯" button that opens a `,(0,g.jsx)(t.code,{children:`DropdownMenu`}),` of per-option commands. It is
rendered in the menu only, not in the closed control's selected value.
Clicks inside the actions area never select the option or close the
select; what the interaction does is up to the content you pass. It is
pointer-oriented, and a `,(0,g.jsx)(t.code,{children:`DropdownMenu`}),` used here needs
`,(0,g.jsx)(t.code,{children:`autoFocusFirstItem={false}`}),` on its `,(0,g.jsx)(t.code,{children:`DropdownContent`}),` — otherwise focus
moving into it closes the select, taking the actions with it. The row's arrow-key navigation doesn't move focus into
it.`]}),`
`,(0,g.jsx)(o,{of:d}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`const options = [
  {
    value: 'ceo',
    label: 'Chairman of MB /CEO',
    actions: (
      <DropdownMenu>
        <DropdownTrigger>
          <button aria-label="Actions">⋯</button>
        </DropdownTrigger>
        <DropdownContent align="end" autoFocusFirstItem={false}>
          <DropdownItem>Make position primary</DropdownItem>
        </DropdownContent>
      </DropdownMenu>
    ),
  },
];
`})}),`
`,(0,g.jsx)(t.h2,{id:`virtualized-menu`,children:`Virtualized menu`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`virtualized`}),` renders the open menu's rows through
`,(0,g.jsx)(t.code,{children:`@tanstack/react-virtual`}),` instead of all at once, for option lists in the
thousands. It assumes uniform, single-line rows: grouped options or
multi-line `,(0,g.jsx)(t.code,{children:`description`}),`s will misalign, and keyboard scroll-into-view for
the active row is best-effort, since off-screen rows have no real DOM node
until they scroll into range. Leave it off unless your option count is
large enough to need it.`]}),`
`,(0,g.jsx)(t.h2,{id:`save-selection`,children:`Save selection`}),`
`,(0,g.jsxs)(t.p,{children:[`Pass `,(0,g.jsx)(t.code,{children:`storageKey`}),` to pin a "Save selection" checkbox below the option list.
Checking it writes the current selection to `,(0,g.jsx)(t.code,{children:`localStorage`}),` under that key
and keeps it in sync on every further change until unchecked, which clears
it. If the select is uncontrolled, a previously saved selection is restored
automatically on mount — taking priority over `,(0,g.jsx)(t.code,{children:`defaultValue`}),`.`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`<SelectV2
  isMulti
  options={teamOptions}
  defaultValue={['design']}
  storageKey="dashboard-team-filter"
/>
`})}),`
`,(0,g.jsxs)(t.p,{children:[`If you pass a controlled `,(0,g.jsx)(t.code,{children:`value`}),` instead, saving and clearing still work,
but the saved value is never used to override `,(0,g.jsx)(t.code,{children:`value`}),` — read it back
yourself (e.g. on initial mount) if you want that. `,(0,g.jsx)(t.code,{children:`saveSelectionLabel`}),`
overrides the row's default translated label.`]}),`
`,(0,g.jsx)(t.h2,{id:`localization`,children:`Localization`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`locale`}),` (`,(0,g.jsx)(t.code,{children:`'en-US'`}),` | `,(0,g.jsx)(t.code,{children:`'ru-RU'`}),` | `,(0,g.jsx)(t.code,{children:`'hy-AM'`}),`, default `,(0,g.jsx)(t.code,{children:`'en-US'`}),`) translates
SelectV2's built-in strings — the "Select all" checkbox label, the "Save
selection" checkbox label, the "No results" empty state, the async loading
message, and the default `,(0,g.jsx)(t.code,{children:`creatable`}),` label — without needing a
`,(0,g.jsx)(t.code,{children:`formatCreateLabel`}),`/`,(0,g.jsx)(t.code,{children:`emptyText`}),`/`,(0,g.jsx)(t.code,{children:`placeholder`}),` override for each. Explicit
`,(0,g.jsx)(t.code,{children:`placeholder`}),`, `,(0,g.jsx)(t.code,{children:`emptyText`}),`, and `,(0,g.jsx)(t.code,{children:`formatCreateLabel`}),` props still take
precedence over the translated defaults.`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`<SelectV2 options={options} value={value} onChange={setValue} locale="hy-AM" />
`})}),`
`,(0,g.jsx)(t.h2,{id:`validation-state`,children:`Validation state`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`error`}),` switches the control to the danger border/ring styles; `,(0,g.jsx)(t.code,{children:`errorText`}),`
does the same and renders below the control in place of `,(0,g.jsx)(t.code,{children:`helperText`}),`.`]}),`
`,(0,g.jsx)(t.h2,{id:`menu-placement`,children:`Menu placement`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`menuPlacement`}),` (`,(0,g.jsx)(t.code,{children:`'auto'`}),` | `,(0,g.jsx)(t.code,{children:`'bottom'`}),` | `,(0,g.jsx)(t.code,{children:`'top'`}),`, default `,(0,g.jsx)(t.code,{children:`'auto'`}),`) is
react-select's own prop, passed straight through — SelectV2 doesn't wrap or
rename it. `,(0,g.jsx)(t.code,{children:`'auto'`}),` flips to whichever side has room; pass `,(0,g.jsx)(t.code,{children:`'top'`}),` to force
it open upward regardless of available space, e.g. a control pinned near
the bottom of a scroll container.`]}),`
`,(0,g.jsx)(t.h2,{id:`styling`,children:`Styling`}),`
`,(0,g.jsxs)(t.p,{children:[`SelectV2 renders react-select in `,(0,g.jsx)(t.code,{children:`unstyled`}),` mode and maps every part
(control, menu, option, chips, indicators, ...) to Tailwind utility classes
built from the same semantic tokens as `,(0,g.jsx)(t.code,{children:`Select`}),`/`,(0,g.jsx)(t.code,{children:`MultiSelect`}),`, so it looks
like a native sibling rather than a third-party widget.`]}),`
`,(0,g.jsx)(t.h2,{id:`search-matching`,children:`Search matching`}),`
`,(0,g.jsxs)(t.p,{children:[`Typing filters options word by word: every word in the search box must
appear somewhere in the option's `,(0,g.jsx)(t.code,{children:`searchText`}),` (or its string `,(0,g.jsx)(t.code,{children:`label`}),`), in any
order and ignoring case. `,(0,g.jsx)(t.code,{children:`Abel Emm`}),` and `,(0,g.jsx)(t.code,{children:`Emmerich Abel`}),` both find
`,(0,g.jsx)(t.code,{children:`Abel Macejkovic Emmerich`}),`. The multi-select "Select all" row counts with the
same rule. Pass your own `,(0,g.jsx)(t.code,{children:`filterOption`}),` to replace it; async selects
(`,(0,g.jsx)(t.code,{children:`loadOptions`}),`) leave filtering to the server and are not affected.`]}),`
`,(0,g.jsx)(o,{of:u}),`
`,(0,g.jsx)(t.h2,{id:`controlling-the-search-text`,children:`Controlling the search text`}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`inputValue`}),` and `,(0,g.jsx)(t.code,{children:`onInputChange`}),` pass straight through to react-select.
SelectV2 keeps its own input state either way, so leaving both off behaves
exactly as before; pass them to read or drive what's in the search box.`]}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`onInputChange`}),` fires for every react-select action, not only typing — the
automatic clears on select, menu close and blur come through it too, so a
controlled `,(0,g.jsx)(t.code,{children:`inputValue`}),` keeps emptying itself the way an uncontrolled one
would. Seeding the box with the current selection is the main reason to
reach for this, and lets the user amend a value instead of retyping it:`]}),`
`,(0,g.jsx)(t.pre,{children:(0,g.jsx)(t.code,{className:`language-tsx`,children:`const [text, setText] = useState('');

<SelectV2
  options={options}
  value={value}
  onChange={setValue}
  inputValue={text}
  onInputChange={setText}
  onFocus={() => value && setText(String(value))}
/>;
`})}),`
`,(0,g.jsxs)(t.p,{children:[(0,g.jsx)(t.code,{children:`TimePicker`}),` uses exactly this to make a selected `,(0,g.jsx)(t.code,{children:`01:00`}),` editable down to
`,(0,g.jsx)(t.code,{children:`01:20`}),`.`]}),`
`,(0,g.jsx)(t.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(t.p,{children:[`Keyboard navigation, combobox ARIA roles, and live-region announcements are
handled by react-select itself — one of the reasons to reach for `,(0,g.jsx)(t.code,{children:`SelectV2`}),`
over hand-rolling a combobox.`]}),`
`,(0,g.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,g.jsxs)(t.p,{children:[`SelectV2 forwards its ref to react-select's own instance (`,(0,g.jsx)(t.code,{children:`SelectInstance`}),`
from `,(0,g.jsx)(t.code,{children:`react-select`}),`, exposing `,(0,g.jsx)(t.code,{children:`.focus()`}),`/`,(0,g.jsx)(t.code,{children:`.blur()`}),`), not a plain DOM node —
react-select doesn't render a single native form control. Its root DOM node
is the wrapping `,(0,g.jsx)(t.code,{children:`<div>`}),` (label + control + menu + helper/error text), which
is where `,(0,g.jsx)(t.code,{children:`dataTestId`}),` is applied as `,(0,g.jsx)(t.code,{children:`data-test-id`}),`.`]})]})}function h(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,g.jsx)(t,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=t(),l(),c(),f()}))();export{h as default};