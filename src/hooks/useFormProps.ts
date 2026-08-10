import { useContext } from 'react';
import { FormContext, type FormContextValue } from '../lib/FormContext';

const noop = (() => undefined) as any;

const DEFAULT_FORM_CONTEXT: FormContextValue = {
  control: noop,
  register: noop,
  errors: {},
  setValue: noop,
  getValues: noop,
  watch: noop,
  reset: noop,
  trigger: noop,
  clearErrors: noop,
  setError: noop,
  getFieldState: noop,
  unregister: noop,
  isDirty: false,
  isSubmitted: false,
  isSubmitting: false,
  isValid: false,
  dirtyFields: {},
  submit: noop,
};

/** Reads the ambient form state provided by the nearest `FormContainer` —
 *  the same context `useFormContext` reads — but never throws outside
 *  one. Returns an inert default context instead, so call sites migrated
 *  from an existing `useFormProps()` (e.g. an app's own hrm_ui_lib-shaped
 *  shim) keep working without adding a null check. Prefer
 *  `useFormContext` in new code, where a missing `FormContainer` is
 *  usually a programmer error you want to surface immediately. */
export function useFormProps(): FormContextValue {
  const context = useContext(FormContext);
  return context ?? DEFAULT_FORM_CONTEXT;
}
