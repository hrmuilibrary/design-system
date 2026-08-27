import { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../../lib/cn';
import type { ButtonProps, ButtonSize, ButtonVariant } from './Button.types';

const sizeStyles: Record<ButtonSize, string> = {
  lg: 'h-12 px-5 text-p-md gap-2 rounded-lg',
  md: 'h-10 px-4 text-p-std gap-2 rounded-lg',
  sm: 'h-8 px-3 text-p-sm gap-1.5 rounded-md',
};

const iconOnlySize: Record<ButtonSize, string> = {
  lg: 'h-12 w-12 rounded-lg',
  md: 'h-10 w-10 rounded-lg',
  sm: 'h-8 w-8 rounded-md',
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    'bg-brand-500 text-white border border-transparent',
    'hover:bg-brand-600 active:bg-brand-700',
    'disabled:bg-bg-subtle disabled:text-fg-disabled disabled:cursor-not-allowed',
    'focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2',
  ].join(' '),
  secondary: [
    'bg-bg-default text-fg-default border border-border-default',
    'hover:bg-bg-container active:bg-bg-subtle',
    'disabled:bg-bg-container disabled:text-fg-disabled disabled:cursor-not-allowed',
    'focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2',
  ].join(' '),
  tertiary: [
    'bg-transparent text-fg-default border border-transparent',
    'hover:bg-bg-subtle active:bg-bg-subtle',
    'disabled:text-fg-disabled disabled:cursor-not-allowed',
    'focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2',
  ].join(' '),
  danger: [
    'bg-red-700 text-white border border-transparent',
    'hover:bg-red-800 active:bg-red-900',
    'disabled:bg-bg-subtle disabled:text-fg-disabled disabled:cursor-not-allowed',
    'focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:ring-offset-2',
  ].join(' '),
};

// Same shade each variant already uses for `active:`, applied persistently
// while `pressed` is true instead of only during the mousedown instant.
const pressedStyles: Record<ButtonVariant, string> = {
  primary: 'bg-brand-700',
  secondary: 'bg-bg-subtle',
  tertiary: 'bg-bg-subtle',
  danger: 'bg-red-900',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = 'primary',
    size = 'md',
    leftIcon,
    rightIcon,
    loading = false,
    iconOnly = false,
    fullWidth = false,
    pressed = false,
    disabled,
    className,
    children,
    onClick,
    dataTestId,
    ...rest
  },
  ref,
) {
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      aria-pressed={pressed}
      data-test-id={dataTestId}
      onClick={(event) => {
        if (pressed || disabled || loading) {
          event.preventDefault();
          return;
        }
        onClick?.(event);
      }}
      className={cn(
        'inline-flex items-center justify-center font-medium transition-colors outline-none cursor-pointer',
        iconOnly ? iconOnlySize[size] : sizeStyles[size],
        variantStyles[variant],
        pressed && pressedStyles[variant],
        fullWidth && 'w-full',
        className,
      )}
      {...rest}
    >
      {loading ? (
        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
      ) : (
        <>
          {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  );
});
