import{i as e}from"./preload-helper-BdFrVu1K.js";import{t}from"./iframe-04k_LSg4.js";import{l as n,o as r,x as i}from"./blocks-hGSMUV55.js";import{t as a}from"./mdx-react-shim-DZJTKzDp.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Hooks/useStepper`}),`
`,(0,c.jsx)(t.h1,{id:`usestepper`,children:`useStepper`}),`
`,(0,c.jsxs)(t.p,{children:[`Drives a multi-step flow's current index — the logic half of a wizard,
with no rendering of its own. Render `,(0,c.jsx)(t.code,{children:`list[step]`}),` (or whatever your steps
look like) yourself; `,(0,c.jsx)(t.code,{children:`useStepper`}),` only tracks which one is current.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { useStepper } from '@dinofront/design_system';

function Wizard() {
  const { step, isFirst, isLast, next, prev } = useStepper({ count: 3 });

  return (
    <div>
      {step === 0 && <AccountDetailsStep />}
      {step === 1 && <PreferencesStep />}
      {step === 2 && <ReviewStep />}

      <Button onClick={prev} disabled={isFirst}>Back</Button>
      <Button onClick={next} disabled={isLast}>Next</Button>
    </div>
  );
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`controlled-vs-uncontrolled`,children:`Controlled vs. uncontrolled`}),`
`,(0,c.jsxs)(t.p,{children:[`Uncontrolled usage passes `,(0,c.jsx)(t.code,{children:`initialStep`}),` (default `,(0,c.jsx)(t.code,{children:`0`}),`) and `,(0,c.jsx)(t.code,{children:`useStepper`}),`
tracks the current step internally. Controlled usage passes both `,(0,c.jsx)(t.code,{children:`step`}),`
and `,(0,c.jsx)(t.code,{children:`onStepChange`}),`, and the consumer owns the state entirely — same shape
as a controlled/uncontrolled form input.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`const [step, setStep] = useState(0);
const stepper = useStepper({ count: 3, step, onStepChange: setStep });
`})}),`
`,(0,c.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`function useStepper(options: {
  count: number;
  initialStep?: number;
  step?: number;
  onStepChange?: (step: number) => void;
  loop?: boolean;
}): {
  step: number;
  count: number;
  isFirst: boolean;
  isLast: boolean;
  next: () => void;
  prev: () => void;
  goTo: (step: number) => void;
  reset: () => void;
};
`})}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`next`}),`/`,(0,c.jsx)(t.code,{children:`prev`}),` clamp at the first/last step by default; pass `,(0,c.jsx)(t.code,{children:`loop`}),` to wrap
around instead. `,(0,c.jsx)(t.code,{children:`goTo`}),` clamps any out-of-range index into `,(0,c.jsx)(t.code,{children:`[0, count-1]`}),`.
`,(0,c.jsx)(t.code,{children:`reset`}),` returns to `,(0,c.jsx)(t.code,{children:`initialStep`}),`.`]})]})}function s(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=t(),a(),n()}))();export{s as default};