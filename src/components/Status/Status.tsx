import { forwardRef } from 'react';
import { cn } from '../../lib/cn';
import type { StatusProps, StatusSize, StatusVariant } from './Status.types';

const sizeStyles: Record<StatusSize, string> = {
  lg: 'h-7 px-2.5 text-p-std gap-1.5',
  md: 'h-6 px-2 text-p-sm gap-1.5',
  sm: 'h-5 px-1.5 text-p-sm gap-1',
};

const dotDim: Record<StatusSize, string> = {
  lg: 'h-2 w-2',
  md: 'h-1.5 w-1.5',
  sm: 'h-1.5 w-1.5',
};

const variantStyles: Record<StatusVariant, { container: string; dot: string }> = {
  general: {
    container: 'bg-bg-subtle text-fg-default dark:text-fg-default',
    dot: 'bg-gray-600 dark:bg-gray-400',
  },
  info: { container: 'bg-bg-info-lighter text-blue-800 dark:text-blue-300', dot: 'bg-blue-600' },
  brand: {
    container: 'bg-bg-brand-lighter text-brand-800 dark:text-brand-500',
    dot: 'bg-brand-500',
  },
  danger: { container: 'bg-bg-danger-lighter text-red-800 dark:text-red-300', dot: 'bg-red-600' },
  warning: {
    container: 'bg-bg-warning-lighter text-yellow-900 dark:text-yellow-300',
    dot: 'bg-yellow-600',
  },
  success: {
    container: 'bg-bg-success-lighter text-green-800 dark:text-green-300',
    dot: 'bg-green-600',
  },
  discovery: {
    container: 'bg-purple-50 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300',
    dot: 'bg-purple-500',
  },
  disabled: { container: 'bg-bg-subtle text-fg-disabled', dot: 'bg-border-strong' },
};

export const Status = forwardRef<HTMLSpanElement, StatusProps>(function Status(
  {
    variant = 'general',
    size = 'md',
    leftIcon,
    rightIcon,
    dot = true,
    className,
    children,
    dataTestId,
    ...rest
  },
  ref,
) {
  const { container, dot: dotColor } = variantStyles[variant];

  return (
    <span
      ref={ref}
      data-test-id={dataTestId}
      className={cn(
        'inline-flex items-center rounded-full font-medium whitespace-nowrap select-none',
        sizeStyles[size],
        container,
        className,
      )}
      {...rest}
    >
      {leftIcon ? (
        <span className="inline-flex shrink-0">{leftIcon}</span>
      ) : dot ? (
        <span
          className={cn('inline-block shrink-0 rounded-full', dotDim[size], dotColor)}
          aria-hidden
        />
      ) : null}
      {children}
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </span>
  );
});
