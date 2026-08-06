import { createContext } from 'react';
import type {
  Control,
  FieldErrors,
  FieldValues,
  UseFormClearErrors,
  UseFormGetFieldState,
  UseFormGetValues,
  UseFormRegister,
  UseFormReset,
  UseFormSetError,
  UseFormSetValue,
  UseFormTrigger,
  UseFormUnregister,
  UseFormWatch,
} from 'react-hook-form';

export interface FormContextValue {
  control: Control<FieldValues>;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  reset: UseFormReset<FieldValues>;
  trigger: UseFormTrigger<FieldValues>;
  clearErrors: UseFormClearErrors<FieldValues>;
  setError: UseFormSetError<FieldValues>;
  getFieldState: UseFormGetFieldState<FieldValues>;
  unregister: UseFormUnregister<FieldValues>;
  isDirty: boolean;
  isSubmitted: boolean;
  isSubmitting: boolean;
  isValid: boolean;
  dirtyFields: Partial<Readonly<Record<string, boolean>>>;
  submit: () => void;
}

export const FormContext = createContext<FormContextValue | null>(null);
