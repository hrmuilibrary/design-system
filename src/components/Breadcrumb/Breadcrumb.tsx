import { forwardRef, Fragment } from 'react';
import { cn } from '../../lib/cn';
import type { BreadcrumbProps, BreadcrumbSize } from './Breadcrumb.types';

const sizeStyles: Record<BreadcrumbSize, string> = {
  md: 'text-p-sm',
  sm: 'text-p-xs',
};

const crumbLinkClass =
  'rounded-sm text-fg-tertiary transition-colors hover:text-fg-secondary outline-none focus-visible:ring-2 focus-visible:ring-brand-300';

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(function Breadcrumb(
  { items, currentValue, onSelect, separator = '/', size = 'md', className, dataTestId, ...rest },
  ref,
) {
  const current = currentValue ?? items[items.length - 1]?.value;

  return (
    <nav
      ref={ref}
      aria-label="Breadcrumb"
      data-test-id={dataTestId}
      className={cn(sizeStyles[size], className)}
      {...rest}
    >
      <ol className="flex items-center">
        {items.map((item, index) => {
          const isCurrent = item.value === current;
          return (
            <Fragment key={item.value}>
              {index > 0 && (
                <li aria-hidden="true" className="px-1.5 text-fg-tertiary">
                  {separator}
                </li>
              )}
              <li className="flex items-center">
                {isCurrent ? (
                  <span aria-current="page" className="font-medium text-fg-default">
                    {item.label}
                  </span>
                ) : item.disabled ? (
                  <span className="cursor-not-allowed text-fg-disabled">{item.label}</span>
                ) : item.href ? (
                  <a
                    href={item.href}
                    onClick={() => onSelect?.(item.value)}
                    className={crumbLinkClass}
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => onSelect?.(item.value)}
                    className={crumbLinkClass}
                  >
                    {item.label}
                  </button>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
});
