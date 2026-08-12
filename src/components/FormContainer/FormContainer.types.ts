import type { FormHTMLAttributes, ReactNode } from 'react';
import type { FieldValues, FormState, Mode } from 'react-hook-form';
import type { ObjectSchema } from 'yup';
import type { BaseProps } from '../../types';
import type { ButtonProps } from '../Button';

export interface FormContainerProps extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'>, BaseProps {
  children?: ReactNode;
  /** A yup object schema — resolved via `@hookform/resolvers/yup`. */
  validationSchema: ObjectSchema<FieldValues>;
  defaultValues: FieldValues;
  /** Rendered as a row of `Button`s below `children` — omit and render your own footer instead. */
  buttons?: ButtonProps[];
  mode?: Mode;
  shouldUnregister?: boolean;
  shouldFocusError?: boolean;
  formId?: string;
  onSubmit?: (
    data: FieldValues,
    formState: FormState<FieldValues>,
    dirtyFields: FormState<FieldValues>['dirtyFields'],
  ) => void;
  /** When this changes AND the form has already been submitted, re-validates every field currently holding an error — use to refresh translated validation messages after rebuilding `validationSchema` for a new locale. */
  revalidateKey?: string | number;
}
