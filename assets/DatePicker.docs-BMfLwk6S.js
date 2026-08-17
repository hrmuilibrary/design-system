import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-C7HQ1jI3.js";import{c as n,l as r,o as i,r as a,s as o,x as s}from"./blocks-Dp7KrQ3V.js";import{t as c}from"./mdx-react-shim-aQVLqLK5.js";import{n as l,t as u}from"./DatePicker.stories-BpjyCqh5.js";function d(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...s(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`datepicker`,children:`DatePicker`}),`
`,(0,p.jsxs)(t.p,{children:[`A button-triggered calendar popover for picking a single date or a date
range. Styled with plain Tailwind utility classes resolved from a `,(0,p.jsx)(t.code,{children:`size`}),`
lookup table — same pattern as `,(0,p.jsx)(t.code,{children:`Button`}),`/`,(0,p.jsx)(t.code,{children:`Select`}),` — with heights, text sizes
and horizontal padding mirroring `,(0,p.jsx)(t.code,{children:`Input`}),`/`,(0,p.jsx)(t.code,{children:`Select`}),` exactly so it lines up
with other fields in a form grid. Supports outside-click dismissal and
month-by-month navigation. All date math uses plain JS `,(0,p.jsx)(t.code,{children:`Date`}),`, no date
library.`]}),`
`,(0,p.jsx)(o,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(n,{}),`
`,(0,p.jsx)(t.h2,{id:`single-date-vs-range`,children:`Single date vs. range`}),`
`,(0,p.jsxs)(t.p,{children:[`Pass `,(0,p.jsx)(t.code,{children:`value`}),` + `,(0,p.jsx)(t.code,{children:`onChange`}),` for a single controlled date. Pass `,(0,p.jsx)(t.code,{children:`range`}),` +
`,(0,p.jsx)(t.code,{children:`rangeValue`}),` + `,(0,p.jsx)(t.code,{children:`onChangeRange`}),` for range-selection mode instead — never mix
the two sets of props.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`// Single date
const [value, setValue] = useState<Date | null>(null);
<DatePicker value={value} onChange={setValue} />;

// Range
const [range, setRange] = useState<DateRange>({ start: null, end: null });
<DatePicker range rangeValue={range} onChangeRange={setRange} />;
`})}),`
`,(0,p.jsxs)(t.p,{children:[`In range mode, the first click sets `,(0,p.jsx)(t.code,{children:`start`}),`, the second sets `,(0,p.jsx)(t.code,{children:`end`}),` (dates
are swapped automatically if the second click lands before `,(0,p.jsx)(t.code,{children:`start`}),`), and
the popover closes once both ends are picked. Hovering a day after `,(0,p.jsx)(t.code,{children:`start`}),`
is chosen previews the in-between range before `,(0,p.jsx)(t.code,{children:`end`}),` is committed.`]}),`
`,(0,p.jsx)(t.h2,{id:`disabled`,children:`Disabled`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`disabled`}),` blocks the trigger natively — both mouse and keyboard activation
are prevented, and the popover closes immediately if `,(0,p.jsx)(t.code,{children:`disabled`}),` becomes
`,(0,p.jsx)(t.code,{children:`true`}),` while it's already open.`]}),`
`,(0,p.jsx)(t.h2,{id:`validation-state`,children:`Validation state`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`error`}),` switches the trigger to the danger border/ring styles; `,(0,p.jsx)(t.code,{children:`errorText`}),`
does the same and also renders below the control.`]}),`
`,(0,p.jsx)(t.h2,{id:`limiting-selectable-days`,children:`Limiting selectable days`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`minDate`}),`/`,(0,p.jsx)(t.code,{children:`maxDate`}),` (inclusive) and `,(0,p.jsx)(t.code,{children:`excludeDates`}),` disable individual days
in the calendar grid — time-of-day is ignored on all three, so passing
`,(0,p.jsx)(t.code,{children:`new Date()`}),` as `,(0,p.jsx)(t.code,{children:`minDate`}),` still leaves today itself selectable. In range
mode, only the two endpoints are validated against these constraints; a
committed range may still span an excluded day in the middle. `,(0,p.jsx)(t.code,{children:`filterDate`}),`
joins the same set of constraints — an arbitrary per-day predicate that
disables any day it rejects, evaluated alongside `,(0,p.jsx)(t.code,{children:`minDate`}),`/`,(0,p.jsx)(t.code,{children:`maxDate`}),`/
`,(0,p.jsx)(t.code,{children:`excludeDates`}),` rather than instead of them.`]}),`
`,(0,p.jsx)(t.h2,{id:`locale`,children:`Locale`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`locale`}),` takes a BCP-47 tag (e.g. `,(0,p.jsx)(t.code,{children:`'ru-RU'`}),`, `,(0,p.jsx)(t.code,{children:`'fr-FR'`}),`) and derives the
month names, weekday abbreviations, and first day of the week from it via
the platform's `,(0,p.jsx)(t.code,{children:`Intl`}),` APIs — no date library required. `,(0,p.jsx)(t.strong,{children:`The default
changed from Monday-first to Sunday-first`}),`: earlier versions hard-coded a
Monday-first grid, but the new default locale (`,(0,p.jsx)(t.code,{children:`'en'`}),`) starts the week on
Sunday. This is intentional, not a regression — pass a Monday-first locale
(e.g. `,(0,p.jsx)(t.code,{children:`'en-GB'`}),`) if you need the old grid shape.`]}),`
`,(0,p.jsx)(t.h2,{id:`custom-format`,children:`Custom format`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`format`}),` controls how the selected date renders in the trigger. It
supports `,(0,p.jsx)(t.code,{children:`dd`}),`/`,(0,p.jsx)(t.code,{children:`MM`}),`/`,(0,p.jsx)(t.code,{children:`yyyy`}),` tokens plus a literal separator (e.g.
`,(0,p.jsx)(t.code,{children:`'yyyy/MM/dd'`}),`, `,(0,p.jsx)(t.code,{children:`'MM-dd-yyyy'`}),`) and defaults to the pre-existing
`,(0,p.jsx)(t.code,{children:`'dd.MM.yyyy'`}),`. In range mode the same format is applied to both
endpoints.`]}),`
`,(0,p.jsx)(t.h2,{id:`clearing-a-value`,children:`Clearing a value`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`clearable`}),` swaps the trigger's calendar icon for a clear (X) affordance
whenever a value is selected. Clicking it fires `,(0,p.jsx)(t.code,{children:`onChange(null)`}),` (or
`,(0,p.jsx)(t.code,{children:`onChangeRange({ start: null, end: null })`}),` in range mode) without also
opening the popover, then the icon reverts to the calendar glyph. It has
no effect while `,(0,p.jsx)(t.code,{children:`disabled`}),` — the trigger stays inert either way.`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.strong,{children:`Migration note`}),`: `,(0,p.jsx)(t.code,{children:`onChange`}),`'s type widened from `,(0,p.jsx)(t.code,{children:`(date: Date) => void`}),`
to `,(0,p.jsx)(t.code,{children:`(date: Date | null) => void`}),` to support `,(0,p.jsx)(t.code,{children:`clearable`}),`. Under TypeScript
strict mode this is a compile-time breaking change — a handler typed to
accept only `,(0,p.jsx)(t.code,{children:`Date`}),` no longer satisfies the prop, even if you never pass
`,(0,p.jsx)(t.code,{children:`clearable`}),` — so on upgrade, widen your handler's parameter type to
`,(0,p.jsx)(t.code,{children:`Date | null`}),` (and, if you're storing the value in state, switch to
`,(0,p.jsx)(t.code,{children:`useState<Date | null>`}),`).`]}),`
`,(0,p.jsx)(t.h2,{id:`required--helper-text`,children:`Required & helper text`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`required`}),` renders a red asterisk next to the label and sets
`,(0,p.jsx)(t.code,{children:`aria-required`}),` on the trigger. `,(0,p.jsx)(t.code,{children:`helperText`}),` renders a neutral message
below the control; if `,(0,p.jsx)(t.code,{children:`errorText`}),` is also present, it takes over that
same slot and switches the control to the danger styles instead.`]}),`
`,(0,p.jsx)(t.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`DatePicker`}),` forwards its ref to the trigger `,(0,p.jsx)(t.code,{children:`<button>`}),` element. Its root
DOM node is the wrapping `,(0,p.jsx)(t.code,{children:`<div>`}),` (label + trigger + calendar popover),
which is where `,(0,p.jsx)(t.code,{children:`dataTestId`}),` is applied as `,(0,p.jsx)(t.code,{children:`data-test-id`}),`. Use
`,(0,p.jsx)(t.code,{children:`wrapperClassName`}),` to style that outer wrapper and `,(0,p.jsx)(t.code,{children:`className`}),` to style the
trigger button itself — same split as `,(0,p.jsx)(t.code,{children:`Select`}),`.`]})]})}function f(e={}){let{wrapper:t}={...s(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),r(),l()}))();export{f as default};