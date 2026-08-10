import { useContext } from 'react';
import { FormContext, type FormContextValue } from '../lib/FormContext';

/** Reads the ambient form state provided by the nearest `FormContainer`.
 *  Throws outside one, matching `FormField`'s existing null-check — the
 *  same failure whether a consumer uses `FormField` or this hook
 *  directly. */
export function useFormContext(): FormContextValue {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used inside a FormContainer.');
  }
  return context;
}
