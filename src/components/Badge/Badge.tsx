import { forwardRef, type KeyboardEvent, type MouseEvent } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../lib/cn';
import type { BadgeProps, BadgeSize, BadgeStyle, BadgeVariant } from './Badge.types';

const sizeStyles: Record<BadgeSize, string> = {
  lg: 'h-7 px-2.5 text-p-std gap-1.5',
  md: 'h-6 px-2 text-p-sm gap-1',
  sm: 'h-5 px-1.5 text-p-sm gap-1',
  xs: 'h-4 px-1 text-p-xs gap-0.5',
};

const radiusStyles: Record<BadgeSize, string> = {
  lg: 'rounded-md',
  md: 'rounded-md',
  sm: 'rounded',
  xs: 'rounded',
};

const dotSizeStyles: Record<BadgeSize, string> = {
  lg: 'size-2.5',
  md: 'size-2',
  sm: 'size-1.5',
  xs: 'size-1',
};

const iconOnlyStyles: Record<BadgeSize, string> = {
  lg: 'min-w-7 px-0 justify-center',
  md: 'min-w-6 px-0 justify-center',
  sm: 'min-w-5 px-0 justify-center',
  xs: 'min-w-4 px-0 justify-center',
};

const filledStyles: Record<BadgeVariant, string> = {
  neutral: 'bg-bg-subtle text-fg-default border border-border-default',
  brand: 'bg-brand-20 text-brand-800 border border-brand-100',
  success: 'bg-green-50 text-green-800 border border-green-100',
  warning: 'bg-yellow-50 text-yellow-900 border border-yellow-100',
  danger: 'bg-red-50 text-red-800 border border-red-100',
  info: 'bg-blue-50 text-blue-800 border border-blue-100',
  privacy: 'bg-purple-50 text-purple-800 border border-purple-100',
};

const outlineStyles: Record<BadgeVariant, string> = {
  neutral: 'bg-transparent text-fg-default border border-border-strong',
  brand: 'bg-transparent text-brand-700 border border-brand-500',
  success: 'bg-transparent text-green-700 border border-green-500',
  warning: 'bg-transparent text-yellow-800 border border-yellow-600',
  danger: 'bg-transparent text-red-700 border border-red-500',
  info: 'bg-transparent text-blue-700 border border-blue-500',
  privacy: 'bg-transparent text-purple-700 border border-purple-500',
};

const accentStyles: Record<BadgeVariant, string> = {
  neutral: 'bg-fg-default text-bg-default',
  brand: 'bg-brand-500 text-white',
  success: 'bg-green-600 text-white',
  warning: 'bg-yellow-600 text-gray-900 dark:text-gray-900',
  danger: 'bg-red-700 text-white',
  info: 'bg-blue-600 text-white',
  privacy: 'bg-purple-500 text-white',
};

// Uniform per-appearance hover/active treatment rather than a 21-entry
// (appearance x variant) table — brightness/neutral-tint reads consistently
// across every color without hand-tuning a "one shade darker" value per
// variant.
const interactiveStyles: Record<BadgeStyle, string> = {
  filled: 'hover:brightness-95 active:brightness-90',
  outline: 'hover:bg-bg-subtle active:bg-bg-container',
  accent: 'hover:brightness-90 active:brightness-80',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(function Badge(
  {
    variant = 'neutral',
    appearance = 'filled',
    size = 'md',
    shape = 'rounded',
    leftIcon,
    rightIcon,
    onDismiss,
    dot = false,
    withDot = false,
    disabled = false,
    interactive = false,
    className,
    children,
    dataTestId,
    onClick,
    onKeyDown,
    ...rest
  },
  ref,
) {
  const palette =
    appearance === 'filled'
      ? filledStyles[variant]
      : appearance === 'outline'
        ? outlineStyles[variant]
        : accentStyles[variant];

  if (dot) {
    return (
      <span
        ref={ref}
        data-test-id={dataTestId}
        aria-hidden={rest['aria-label'] ? undefined : true}
        onClick={disabled ? undefined : onClick}
        className={cn(
          'inline-block shrink-0 rounded-full',
          dotSizeStyles[size],
          accentStyles[variant],
          disabled && 'opacity-50',
          className,
        )}
        {...rest}
      />
    );
  }

  const isIconOnly = children == null && !withDot && !!(leftIcon || rightIcon);
  const radius = shape === 'pill' ? 'rounded-full' : radiusStyles[size];

  const handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
    onKeyDown?.(event);
    if (disabled || !onClick) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick(event as unknown as MouseEvent<HTMLSpanElement>);
    }
  };

  return (
    <span
      ref={ref}
      data-test-id={dataTestId}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive && !disabled ? 0 : undefined}
      aria-disabled={interactive && disabled ? true : undefined}
      onClick={disabled ? undefined : onClick}
      onKeyDown={interactive ? handleKeyDown : onKeyDown}
      className={cn(
        'inline-flex items-center font-medium whitespace-nowrap select-none',
        sizeStyles[size],
        radius,
        palette,
        isIconOnly && iconOnlyStyles[size],
        interactive &&
          !disabled &&
          cn(
            'cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-1',
            interactiveStyles[appearance],
          ),
        disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
        className,
      )}
      {...rest}
    >
      {withDot ? (
        <span
          className={cn('inline-block shrink-0 rounded-full', dotSizeStyles[size], accentStyles[variant])}
          aria-hidden
        />
      ) : (
        leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
      )}
      {children}
      {rightIcon && !onDismiss && <span className="inline-flex shrink-0">{rightIcon}</span>}
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          disabled={disabled}
          aria-label="Dismiss"
          className="inline-flex shrink-0 -mr-0.5 rounded-full p-0.5 hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
        >
          <X className="h-3 w-3" />
        </button>
      )}
    </span>
  );
});
