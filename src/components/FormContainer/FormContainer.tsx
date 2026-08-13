import { forwardRef, useEffect } from 'react';
import { useForm, type FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { cn } from '../../lib/cn';
import { FormContext, type FormContextValue } from '../../lib/FormContext';
import { Button } from '../Button';
import type { FormContainerProps } from './FormContainer.types';

export const FormContainer = forwardRef<HTMLFormElement, FormContainerProps>(function FormContainer(
  {
    children,
    className,
    validationSchema,
    defaultValues,
    buttons,
    mode = 'onBlur',
    shouldUnregister,
    shouldFocusError = true,
    formId,
    onSubmit,
    revalidateKey,
    dataTestId,
    ...rest
  },
  ref,
) {
  const {
    handleSubmit,
    register,
    setValue,
    control,
    formState,
    getValues,
    watch,
    reset,
    clearErrors,
    setError,
    trigger,
    getFieldState,
    unregister,
  } = useForm<FieldValues>({
    mode,
    resolver: yupResolver(validationSchema),
    defaultValues,
    shouldFocusError,
    shouldUnregister,
  });

  const { errors, isDirty, isSubmitted, isSubmitting, dirtyFields, isValid } = formState;

  useEffect(() => {
    const fieldNames = Object.keys(errors).filter((key) => key !== 'root' && key !== 'form');
    if (fieldNames.length > 0) trigger(fieldNames);
    // Deliberately keyed only on revalidateKey: including `errors`/`trigger`
    // would re-fire this effect every time trigger() itself updates the error set.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [revalidateKey]);

  const submit = handleSubmit((data) => {
    onSubmit?.(data, formState, dirtyFields);
  });

  const contextValue: FormContextValue = {
    control,
    register,
    errors,
    setValue,
    getValues,
    watch,
    reset,
    trigger,
    clearErrors,
    setError,
    getFieldState,
    unregister,
    isDirty,
    isSubmitted,
    isSubmitting,
    isValid,
    dirtyFields,
    submit,
  };

  return (
    <form
      ref={ref}
      id={formId}
      onSubmit={submit}
      data-test-id={dataTestId}
      className={cn('flex flex-col gap-4', className)}
      {...rest}
    >
      <FormContext.Provider value={contextValue}>
        {children}
        {buttons && buttons.length > 0 && (
          <div
            className="flex items-center gap-3"
            data-test-id={dataTestId ? `${dataTestId}-buttons` : undefined}
          >
            {buttons.map((buttonProps, index) => (
              <Button key={index} {...buttonProps} />
            ))}
          </div>
        )}
      </FormContext.Provider>
    </form>
  );
});
