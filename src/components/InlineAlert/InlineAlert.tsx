import { forwardRef } from 'react';
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Info,
  Sparkles,
  X,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '../../lib/cn';
import type { InlineAlertProps, InlineAlertVariant } from './InlineAlert.types';

const variantStyles: Record<
  InlineAlertVariant,
  { container: string; iconColor: string; DefaultIcon: LucideIcon }
> = {
  success: {
    container: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
    DefaultIcon: CheckCircle2,
  },
  warning: {
    container: 'bg-yellow-50 border-yellow-200',
    iconColor: 'text-yellow-800',
    DefaultIcon: AlertTriangle,
  },
  danger: {
    container: 'bg-red-50 border-red-200',
    iconColor: 'text-red-700',
    DefaultIcon: XCircle,
  },
  info: {
    container: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-700',
    DefaultIcon: Info,
  },
  discovery: {
    container: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-700',
    DefaultIcon: Sparkles,
  },
};

export const InlineAlert = forwardRef<HTMLDivElement, InlineAlertProps>(function InlineAlert(
  {
    variant = 'info',
    title,
    description,
    onDismiss,
    actions,
    icon,
    className,
    dataTestId,
    ...rest
  },
  ref,
) {
  const { container, iconColor, DefaultIcon } = variantStyles[variant];

  return (
    <div
      ref={ref}
      role="alert"
      data-test-id={dataTestId}
      className={cn('flex gap-3 p-4 border rounded-lg', container, className)}
      {...rest}
    >
      <div className={cn('flex-shrink-0 mt-0.5', iconColor)}>
        {icon ?? <DefaultIcon className="h-5 w-5" aria-hidden />}
      </div>
      <div className="flex-1 min-w-0">
        {title && <div className="text-p-std font-semibold text-fg-default mb-0.5">{title}</div>}
        {description && <div className="text-p-std text-fg-secondary">{description}</div>}
        {actions && <div className="mt-3 flex flex-wrap items-center gap-2">{actions}</div>}
      </div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss"
          className="flex-shrink-0 -mr-1 -mt-1 p-1 rounded-md text-fg-secondary hover:text-fg-default hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
});
