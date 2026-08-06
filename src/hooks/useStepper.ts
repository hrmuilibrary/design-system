import { useState } from 'react';

export interface UseStepperOptions {
  /** Total number of steps. */
  count: number;
  /** Uncontrolled initial step index. Default `0`. */
  initialStep?: number;
  /** Controlled step index. Pass alongside `onStepChange` to fully control the step. */
  step?: number;
  onStepChange?: (step: number) => void;
  /** Wraps `next`/`prev` past the last/first step instead of clamping. Default `false`. */
  loop?: boolean;
}

export interface UseStepperResult {
  step: number;
  count: number;
  isFirst: boolean;
  isLast: boolean;
  next: () => void;
  prev: () => void;
  goTo: (step: number) => void;
  reset: () => void;
}

function clampStep(value: number, count: number): number {
  if (count <= 0) return 0;
  return Math.min(Math.max(value, 0), count - 1);
}

/** Drives a multi-step flow's current index — the logic half of a wizard,
 *  with no rendering of its own; render `list[step]` (or similar) yourself.
 *  Supports both controlled (`step` + `onStepChange`) and uncontrolled
 *  (`initialStep`) usage, the same shape as a controlled/uncontrolled form
 *  input. */
export function useStepper({
  count,
  initialStep = 0,
  step: controlledStep,
  onStepChange,
  loop = false,
}: UseStepperOptions): UseStepperResult {
  const [internalStep, setInternalStep] = useState(() => clampStep(initialStep, count));
  const isControlled = controlledStep !== undefined;
  const step = isControlled ? clampStep(controlledStep, count) : internalStep;

  const setStep = (next: number) => {
    const clamped = clampStep(next, count);
    if (!isControlled) setInternalStep(clamped);
    onStepChange?.(clamped);
  };

  const next = () => {
    if (step >= count - 1) {
      if (loop) setStep(0);
      return;
    }
    setStep(step + 1);
  };

  const prev = () => {
    if (step <= 0) {
      if (loop) setStep(count - 1);
      return;
    }
    setStep(step - 1);
  };

  return {
    step,
    count,
    isFirst: step === 0,
    isLast: step === count - 1,
    next,
    prev,
    goTo: setStep,
    reset: () => setStep(initialStep),
  };
}
