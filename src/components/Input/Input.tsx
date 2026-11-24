import { forwardRef, useId, type ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';
import { cn } from '../../lib/cn';
import { RequiredMark } from '../../lib/RequiredMark';
import type { InputProps, InputSize } from './Input.types';
import { createTestId } from '../../lib/testId';

const sizeStyles: Record<InputSize, string> = {
  lg: 'h-12 text-p-md',
  md: 'h-10 text-p-std',
  sm: 'h-8 text-p-sm',
};

const sidePaddingByIcon: Record<InputSize, string> = {
  lg: 'pl-10',
  md: 'pl-9',
  sm: 'pl-8',
};

const sidePaddingByRightIcon: Record<InputSize, string> = {
  lg: 'pr-10',
  md: 'pr-9',
  sm: 'pr-8',
};

const iconSlotSize: Record<InputSize, string> = {
  lg: 'w-10',
  md: 'w-9',
  sm: 'w-8',
};

interface InputMessageProps {
  id: string;
  isError: boolean;
  children: ReactNode;
}

function InputMessage({ id, isError, children }: Readonly<InputMessageProps>) {
  return (
    <p id={id} className={cn('text-p-sm', isError ? 'text-red-700' : 'text-fg-secondary')}>
      {children}
    </p>
  );
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    labelAddons,
    helperText,
    errorText,
    size = 'md',
    leftIcon,
    rightIcon,
    leftAddon,
    rightAddon,
    error = false,
    id,
    disabled,
    className,
    wrapperClassName,
    required,
    dataTestId,
    ...rest
  },
  ref,
) {
  const reactId = useId();
  const inputId = id ?? reactId;
  const hasError = error || !!errorText;

  const messageId = `${inputId}-${errorText ? 'error' : 'help'}`;
  const message = errorText || helperText;
  const describedBy = message ? messageId : undefined;

  const testId = createTestId(dataTestId);

  return (
    <div className={cn('flex flex-col gap-1.5 w-full', wrapperClassName)} data-test-id={dataTestId}>
      {(label || labelAddons) && (
        <div className="flex items-center gap-1.5">
          {label && (
            <label
              htmlFor={inputId}
              className="text-p-std font-medium text-fg-default inline-flex items-center gap-1"
            >
              {label}
              {required && <RequiredMark />}
            </label>
          )}
          {labelAddons && <span className="inline-flex items-center gap-1">{labelAddons}</span>}
        </div>
      )}
      <div
        className={cn(
          'flex items-stretch w-full rounded-lg bg-bg-default transition-colors',
          'border',
          hasError ? 'border-red-600' : 'border-border-default',
          !disabled && !hasError && 'hover:border-border-strong',
          'focus-within:ring-2 focus-within:ring-offset-0',
          hasError
            ? 'focus-within:ring-red-300 focus-within:border-red-600'
            : 'focus-within:ring-brand-300 focus-within:border-brand-500',
          disabled && 'bg-bg-container border-border-default cursor-not-allowed',
          sizeStyles[size],
        )}
      >
        {leftAddon && (
          <span className="inline-flex items-center px-3 text-fg-secondary bg-bg-container border-r border-border-default rounded-l-lg whitespace-nowrap">
            {leftAddon}
          </span>
        )}
        <div className="relative flex-1 min-w-0">
          {leftIcon && (
            <span
              aria-hidden
              className={cn(
                'absolute inset-y-0 left-0 flex items-center justify-center text-fg-secondary pointer-events-none',
                iconSlotSize[size],
              )}
            >
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            required={required}
            aria-invalid={hasError || undefined}
            aria-describedby={describedBy}
            data-test-id={testId('input')}
            className={cn(
              'w-full h-full bg-transparent outline-none',
              'placeholder:text-fg-tertiary text-fg-default',
              'disabled:cursor-not-allowed disabled:text-fg-disabled',
              leftIcon ? sidePaddingByIcon[size] : 'pl-3',
              rightIcon || hasError ? sidePaddingByRightIcon[size] : 'pr-3',
              className,
            )}
            {...rest}
          />
          {(rightIcon || hasError) && (
            <span
              aria-hidden
              className={cn(
                'absolute inset-y-0 right-0 flex items-center justify-center pointer-events-none',
                iconSlotSize[size],
                hasError ? 'text-red-600' : 'text-fg-secondary',
              )}
            >
              {hasError ? <AlertCircle className="h-4 w-4" /> : rightIcon}
            </span>
          )}
        </div>
        {rightAddon && (
          <span className="inline-flex items-center px-3 text-fg-secondary bg-bg-container border-l border-border-default rounded-r-lg whitespace-nowrap">
            {rightAddon}
          </span>
        )}
      </div>
      {message && (
        <InputMessage id={messageId} isError={!!errorText}>
          {message}
        </InputMessage>
      )}
    </div>
  );
});
