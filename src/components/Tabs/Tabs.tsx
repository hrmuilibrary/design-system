import {
  Children,
  createContext,
  forwardRef,
  isValidElement,
  useContext,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactElement,
  type ReactNode,
} from 'react';
import { cn } from '../../lib/cn';
import { mergeRefs } from '../../lib/mergeRefs';
import { isSameOptionValue } from '../../lib/optionValue';
import { Badge } from '../Badge';
import type {
  TabListProps,
  TabPanelProps,
  TabProps,
  TabsProps,
  TabsSize,
  TabsVariant,
} from './Tabs.types';
import type { OptionValue } from '../../types';

interface TabsContextValue {
  value: OptionValue;
  setValue: (v: OptionValue) => void;
  variant: TabsVariant;
  size: TabsSize;
  tabsId: string;
  disabled: boolean;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabs() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('Tab components must be used inside <Tabs>');
  return ctx;
}

/** Walks `children` for a `<TabList>` and returns its first `<Tab>`'s value, used
 *  as the default active tab when `Tabs` is uncontrolled and no `defaultValue` is given. */
function findFirstValue(children: ReactNode): OptionValue {
  const items: ReactElement[] = [];
  Children.forEach(children, (child) => {
    if (isValidElement(child)) items.push(child);
  });
  const list = items.find(
    (child) => (child.type as { displayName?: string })?.displayName === 'TabList',
  );
  if (!isValidElement(list)) return '';
  const listChildren = Children.toArray((list.props as { children?: ReactNode }).children);
  for (const child of listChildren) {
    if (isValidElement(child)) {
      const value = (child.props as { value?: OptionValue }).value;
      if (value !== undefined) return value;
    }
  }
  return '';
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(function Tabs(
  {
    defaultValue,
    value,
    onValueChange,
    variant = 'underline',
    size = 'md',
    disabled = false,
    className,
    children,
    dataTestId,
    ...rest
  },
  ref,
) {
  const [internal, setInternal] = useState<OptionValue>(() => defaultValue ?? findFirstValue(children));
  const controlled = value !== undefined;
  const current = controlled ? value : internal;
  const tabsId = useId();

  const setValue = (v: OptionValue) => {
    if (!controlled) setInternal(v);
    onValueChange?.(v);
  };

  return (
    <TabsContext.Provider value={{ value: current, setValue, variant, size, tabsId, disabled }}>
      <div
        ref={ref}
        data-test-id={dataTestId}
        className={cn('flex flex-col gap-4', className)}
        {...rest}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
});

export const TabList = forwardRef<HTMLDivElement, TabListProps>(function TabList(
  { children, scrollable = false, className, dataTestId, onKeyDown, ...rest },
  ref,
) {
  const { variant } = useTabs();
  const listRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event);
    const tabs = Array.from(
      listRef.current?.querySelectorAll<HTMLElement>('[role="tab"]:not(:disabled)') ?? [],
    );
    if (!tabs.length) return;
    const currentIndex = tabs.indexOf(document.activeElement as HTMLElement);

    let nextIndex: number | null = null;
    if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1 + tabs.length) % tabs.length;
    else if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = tabs.length - 1;
    if (nextIndex === null) return;

    const next = tabs[nextIndex];
    if (!next) return;
    event.preventDefault();
    next.focus();
    next.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    // WAI-ARIA "automatic activation": moving focus activates the tab.
    next.click();
  };

  return (
    <div
      ref={mergeRefs(ref, listRef)}
      role="tablist"
      onKeyDown={handleKeyDown}
      data-test-id={dataTestId}
      className={cn(
        'inline-flex',
        variant === 'underline' && 'border-b border-border-default gap-1 w-full',
        variant === 'pills' && 'gap-1 p-1 rounded-full bg-bg-container',
        variant === 'boxed' &&
          'gap-0 rounded-lg border border-border-default overflow-hidden bg-bg-container',
        scrollable &&
          cn(
            'overflow-x-auto flex-nowrap scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
            '[mask-image:linear-gradient(to_right,transparent,black_16px,black_calc(100%-16px),transparent)]',
          ),
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
});
TabList.displayName = 'TabList';

const sizeStyles: Record<TabsSize, string> = {
  lg: 'h-11 px-4 text-p-md',
  md: 'h-10 px-3 text-p-std',
  sm: 'h-8 px-2.5 text-p-sm',
};

/** Count/indicator pill rendered after the label. Recolours with the tab's
 *  active state so the active tab's count reads as the primary one. */
const badgeStyles: Record<TabsVariant, { on: string; off: string }> = {
  underline: { on: 'bg-brand-500 text-white', off: 'bg-bg-subtle text-fg-secondary' },
  pills: { on: 'bg-brand-500 text-white', off: 'bg-bg-subtle text-fg-secondary' },
  boxed: { on: 'bg-brand-500 text-white', off: 'bg-bg-subtle text-fg-secondary' },
};

export const Tab = forwardRef<HTMLButtonElement, TabProps>(function Tab(
  {
    value,
    children,
    disabled: tabDisabled,
    icon,
    badge,
    badgeProps,
    rightIcon,
    onRightIconClick,
    rightIconLabel,
    className,
    dataTestId,
    onClick,
    id,
    ...rest
  },
  ref,
) {
  const { value: current, setValue, variant, size, tabsId, disabled: barDisabled } = useTabs();
  const active = isSameOptionValue(current, value);
  const disabled = barDisabled || tabDisabled;
  const hasBadge = badge !== undefined && badge !== null && badge !== false;
  const tabId = id ?? `${tabsId}-tab-${value}`;
  const panelId = `${tabsId}-panel-${value}`;

  const base = cn(
    'group relative inline-flex items-center justify-center gap-2 font-medium outline-none transition-colors',
    'focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-1 focus-visible:rounded-md',
    sizeStyles[size],
    disabled && 'opacity-50 cursor-not-allowed',
  );

  const variantCls = (() => {
    if (variant === 'underline') {
      return cn(
        'rounded-t-lg',
        active ? 'text-fg-default' : 'text-fg-secondary hover:text-fg-default hover:bg-bg-subtle/60',
      );
    }
    if (variant === 'pills') {
      return cn(
        'rounded-full',
        active
          ? 'bg-bg-default text-fg-default shadow-z1'
          : 'bg-transparent text-fg-secondary hover:text-fg-default',
      );
    }
    return cn(
      'border-r border-border-default last:border-r-0',
      active ? 'bg-bg-default text-fg-default' : 'bg-transparent text-fg-secondary hover:bg-bg-subtle',
    );
  })();

  const tabButton = (
    <button
      ref={ref}
      id={tabId}
      type="button"
      role="tab"
      aria-selected={active}
      aria-controls={panelId}
      tabIndex={active ? 0 : -1}
      disabled={disabled}
      data-test-id={dataTestId}
      onClick={(event) => {
        if (disabled) return;
        setValue(value);
        onClick?.(event);
      }}
      className={cn(base, variantCls, rightIcon && 'pr-9', className)}
      {...rest}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span className="truncate">{children}</span>
      {hasBadge &&
        (badgeProps ? (
          <Badge size="xs" {...badgeProps}>
            {badge}
          </Badge>
        ) : (
          <span
            className={cn(
              'inline-flex items-center justify-center shrink-0 rounded-full px-1.5 h-5 min-w-[1.25rem]',
              'text-label-xs font-semibold tabular-nums leading-none transition-colors',
              active ? badgeStyles[variant].on : badgeStyles[variant].off,
            )}
          >
            {badge}
          </span>
        ))}
      {variant === 'underline' && (
        <span
          aria-hidden
          className={cn(
            'pointer-events-none absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-brand-500 transition-opacity duration-150',
            active ? 'opacity-100' : 'opacity-0',
          )}
        />
      )}
    </button>
  );

  if (!rightIcon) return tabButton;

  return (
    <span className="relative inline-flex">
      {tabButton}
      <button
        type="button"
        aria-label={rightIconLabel}
        disabled={disabled}
        onClick={(event) => {
          event.stopPropagation();
          if (!disabled) onRightIconClick?.(value);
        }}
        className="absolute right-1.5 top-1/2 -translate-y-1/2 inline-flex items-center justify-center size-5 rounded text-fg-tertiary hover:text-fg-default hover:bg-bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
      >
        {rightIcon}
      </button>
    </span>
  );
});

export const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>(function TabPanel(
  { value, children, className, dataTestId, id, keepMounted = false, ...rest },
  ref,
) {
  const { value: current, tabsId } = useTabs();
  const active = isSameOptionValue(current, value);
  if (!active && !keepMounted) return null;
  const panelId = id ?? `${tabsId}-panel-${value}`;
  const tabId = `${tabsId}-tab-${value}`;
  return (
    <div
      ref={ref}
      id={panelId}
      role="tabpanel"
      aria-labelledby={tabId}
      hidden={!active}
      data-test-id={dataTestId}
      className={className}
      {...rest}
    >
      {children}
    </div>
  );
});
