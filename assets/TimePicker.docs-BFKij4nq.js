import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./iframe-LRtYaCwk.js";import{i as n}from"./react-7R5ZREk1.js";import{c as r,i,l as a,s as o,u as s}from"./blocks-Deu5e4xD.js";import{t as c}from"./mdx-react-shim-2kS8Pmap.js";import{n as l,t as u}from"./TimePicker.stories-B6laPWAP.js";function d(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{of:u}),`
`,(0,p.jsx)(t.h1,{id:`timepicker`,children:`TimePicker`}),`
`,(0,p.jsxs)(t.p,{children:[`A 24-hour time-of-day picker. Times are always shown as `,(0,p.jsx)(t.code,{children:`HH:mm`}),`, whatever
the user's browser or OS locale. That's why it deliberately doesn't use
`,(0,p.jsx)(t.code,{children:`<input type="time">`}),`, whose 12h/24h display follows the OS.`]}),`
`,(0,p.jsxs)(t.ul,{children:[`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`Desktop`}),`: a `,(0,p.jsx)(t.code,{children:`SelectV2`}),` (react-select) dropdown of suggested times every
`,(0,p.jsx)(t.code,{children:`step`}),` minutes. Shares SelectV2's trigger, menu, keyboard navigation,
sizes, error and helper text, and dark-mode tokens.`]}),`
`,(0,p.jsxs)(t.li,{children:[(0,p.jsx)(t.strong,{children:`Mobile`}),` (viewports ≤ 768px, or `,(0,p.jsx)(t.code,{children:`mobile`}),`): a select-like trigger that
opens a dialog with iOS-style hour and minute wheels
(`,(0,p.jsx)(t.a,{href:`https://react-wheel-picker.chanhdai.com`,rel:`nofollow`,children:(0,p.jsx)(t.code,{children:`@ncdai/react-wheel-picker`})}),`),
as in the previous library. Nothing changes until `,(0,p.jsx)(t.strong,{children:`Apply`}),`.`]}),`
`]}),`
`,(0,p.jsx)(r,{}),`
`,(0,p.jsx)(t.h2,{id:`props`,children:`Props`}),`
`,(0,p.jsx)(i,{}),`
`,(0,p.jsx)(t.h2,{id:`variants`,children:`Variants`}),`
`,(0,p.jsx)(a,{}),`
`,(0,p.jsx)(t.h2,{id:`value`,children:`Value`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`value`}),` is a 24-hour `,(0,p.jsx)(t.code,{children:`"HH:mm"`}),` string; `,(0,p.jsx)(t.code,{children:`onChange`}),` fires with the new time,
or `,(0,p.jsx)(t.code,{children:`null`}),` when cleared. Pass `,(0,p.jsx)(t.code,{children:`null`}),` for a controlled picker with nothing
selected, or leave `,(0,p.jsx)(t.code,{children:`value`}),` out (optionally with `,(0,p.jsx)(t.code,{children:`defaultValue`}),`) to let the
picker manage its own state.`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`const [time, setTime] = useState<string | null>(null);
<TimePicker label="Start time" value={time} onChange={setTime} />;
`})}),`
`,(0,p.jsxs)(t.p,{children:[`Inside a `,(0,p.jsx)(t.code,{children:`FormContainer`}),`, wire it up through `,(0,p.jsx)(t.code,{children:`FormField`}),` like any other field:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`<FormField
  name="startTime"
  render={({ value, onChange, error, errorText }) => (
    <TimePicker
      label="Start time"
      value={value}
      onChange={onChange}
      error={error}
      errorText={errorText}
    />
  )}
/>
`})}),`
`,(0,p.jsxs)(t.p,{children:[`Working with `,(0,p.jsx)(t.code,{children:`Date`}),`s? Two helpers convert in both directions:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { timeToDate, dateToTime } from '@dinofront/design_system';

timeToDate('09:30', someDay); // new Date on someDay's calendar day at 09:30:00 local
dateToTime(new Date()); // e.g. "14:05"
`})}),`
`,(0,p.jsx)(t.h2,{id:`typing-a-time`,children:`Typing a time`}),`
`,(0,p.jsxs)(t.p,{children:[`With `,(0,p.jsx)(t.code,{children:`searchable`}),` (default), users can type instead of scrolling:`]}),`
`,(0,p.jsxs)(t.p,{children:[`| Typed                     | Result                                                      |
| ------------------------- | ----------------------------------------------------------- |
| `,(0,p.jsx)(t.code,{children:`9`}),` / `,(0,p.jsx)(t.code,{children:`09`}),`                | the list narrows to the 09 hour                             |
| `,(0,p.jsx)(t.code,{children:`930`}),` / `,(0,p.jsx)(t.code,{children:`0930`}),` / `,(0,p.jsx)(t.code,{children:`09:30`}),`  | `,(0,p.jsx)(t.code,{children:`09:30`}),` is highlighted; Enter picks it                      |
| `,(0,p.jsx)(t.code,{children:`0907`}),` (not a suggestion) | a `,(0,p.jsx)(t.code,{children:`09:07`}),` row appears first, with the 09 hour's suggestions |`]}),`
`,(0,p.jsxs)(t.p,{children:[`A complete time is also kept if the user types it and leaves the field.
Partial or invalid text is discarded, never turned into `,(0,p.jsx)(t.code,{children:`00:00`}),`. Typing is a
desktop feature; on mobile the time is picked with the wheels.`]}),`
`,(0,p.jsx)(t.h2,{id:`limits`,children:`Limits`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`minTime`}),` / `,(0,p.jsx)(t.code,{children:`maxTime`}),` (inclusive), `,(0,p.jsx)(t.code,{children:`excludeTimes`}),` and `,(0,p.jsx)(t.code,{children:`filterTime`}),` make times
unavailable. Suggested times `,(0,p.jsx)(t.strong,{children:`stay in the list`}),`, greyed out and announced
as disabled, and unavailable times can't be typed either. Same naming as
DatePicker's `,(0,p.jsx)(t.code,{children:`minDate`}),` / `,(0,p.jsx)(t.code,{children:`maxDate`}),` / `,(0,p.jsx)(t.code,{children:`excludeDates`}),` / `,(0,p.jsx)(t.code,{children:`filterDate`}),`.`]}),`
`,(0,p.jsx)(t.h2,{id:`validation-state`,children:`Validation state`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`error`}),` switches the trigger to the danger border/ring; `,(0,p.jsx)(t.code,{children:`errorText`}),` does the
same and renders the message below the control, replacing `,(0,p.jsx)(t.code,{children:`helperText`}),`.
`,(0,p.jsx)(t.code,{children:`required`}),` adds the shared red asterisk. Unlike `,(0,p.jsx)(t.code,{children:`SelectV2`}),`, TimePicker is
`,(0,p.jsx)(t.strong,{children:`not`}),` required by default.`]}),`
`,(0,p.jsx)(t.h2,{id:`mobile`,children:`Mobile`}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`mobile`}),` forces either UI; by default it follows `,(0,p.jsx)(t.code,{children:`useIsMobile()`}),` (≤ 768px).`]}),`
`,(0,p.jsxs)(t.p,{children:[`The dialog shows two infinite wheels, hours `,(0,p.jsx)(t.code,{children:`00`}),`–`,(0,p.jsx)(t.code,{children:`23`}),` and minutes `,(0,p.jsx)(t.code,{children:`00`}),`–`,(0,p.jsx)(t.code,{children:`59`}),`
(every minute, regardless of `,(0,p.jsx)(t.code,{children:`step`}),`). It opens at the current value or, when
empty, at the current time. Unavailable times are greyed out on the wheels
and `,(0,p.jsx)(t.strong,{children:`Apply`}),` stays disabled while one is selected. Close the dialog with
its X to discard the change.`]}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:`mobileTitle`}),` (defaults to `,(0,p.jsx)(t.code,{children:`label`}),`) and `,(0,p.jsx)(t.code,{children:`mobileApplyText`}),` customize the
dialog. With `,(0,p.jsx)(t.code,{children:`clearable`}),`, it also gets a `,(0,p.jsx)(t.strong,{children:`Clear`}),` button.`]}),`
`,(0,p.jsxs)(t.p,{children:[`The wheels' structural CSS ships in `,(0,p.jsx)(t.code,{children:`dist/styles.css`}),`, so there's nothing
extra to import.`]})]})}function f(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=t(),c(),s(),l()}))();export{f as default};