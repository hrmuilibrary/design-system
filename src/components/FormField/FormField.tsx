import { forwardRef, useContext } from 'react';
import { Controller } from 'react-hook-form';
import { cn } from '../../lib/cn';
import { FormContext } from '../../lib/FormContext';
import type { FormFieldProps } from './FormField.types';

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(function FormField(
  { name, defaultValue, render, className, dataTestId, ...rest },
  ref,
) {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('FormField must be rendered inside a FormContainer.');
  }

  return (
    <div ref={ref} className={cn(className)} data-test-id={dataTestId} {...rest}>
      <Controller
        control={context.control}
        name={name}
        defaultValue={defaultValue}
        render={({ field, fieldState }) =>
          render({
            ...field,
            error: !!fieldState.error,
            errorText: fieldState.error?.message,
            dataTestId,
            setFieldValue: (value, options) =>
              context.setValue(name, value, {
                shouldValidate: true,
                shouldDirty: true,
                shouldTouch: true,
                ...options,
              }),
            isValid: fieldState.isTouched && fieldState.isDirty && !fieldState.invalid,
          })
        }
      />
    </div>
  );
});
