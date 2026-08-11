import { createContext, forwardRef, useContext, useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/cn';
import { Divider } from '../Divider';
import type { AccordionItemProps, AccordionProps } from './Accordion.types';
import type { OptionValue } from '../../types';

interface AccordionContextValue {
  openValues: OptionValue[];
  toggle: (value: OptionValue) => void;
  animated: boolean;
  showDivider: boolean;
}

const AccordionContext = createContext<AccordionContextValue | null>(null);

function useAccordion() {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error('AccordionItem must be used inside <Accordion>');
  return ctx;
}

function normalize(value: OptionValue | OptionValue[] | undefined): OptionValue[] {
  return value === undefined ? [] : Array.isArray(value) ? value : [value];
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(function Accordion(
  {
    type = 'single',
    defaultValue,
    value,
    onValueChange,
    animated = true,
    showDivider = false,
    className,
    children,
    dataTestId,
    ...rest
  },
  ref,
) {
  const [internal, setInternal] = useState<OptionValue[]>(() => normalize(defaultValue));
  const isControlled = value !== undefined;
  const openValues = isControlled ? normalize(value) : internal;

  const toggle = (val: OptionValue) => {
    const isOpen = openValues.some((v) => String(v) === String(val));
    let next: OptionValue[];
    if (type === 'single') {
      next = isOpen ? [] : [val];
    } else {
      next = isOpen
        ? openValues.filter((v) => String(v) !== String(val))
        : [...openValues, val];
    }
    if (!isControlled) setInternal(next);
    onValueChange?.(type === 'single' ? (next[0] ?? '') : next);
  };

  return (
    <AccordionContext.Provider value={{ openValues, toggle, animated, showDivider }}>
      <div
        ref={ref}
        data-test-id={dataTestId}
        className={cn(
          'flex flex-col divide-y divide-border-default border border-border-default rounded-lg overflow-hidden bg-bg-default',
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
});

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(function AccordionItem(
  { value, title, icon, disabled, className, children, dataTestId, ...rest },
  ref,
) {
  const { openValues, toggle, animated, showDivider } = useAccordion();
  const isOpen = openValues.some((v) => String(v) === String(value));
  const panelId = useId();
  const triggerId = useId();
  const panelContent = (
    <>
      {showDivider && <Divider className="mb-4" />}
      {children}
    </>
  );

  return (
    <div
      ref={ref}
      data-test-id={dataTestId}
      data-state={isOpen ? 'open' : 'closed'}
      className={cn('group', className)}
      {...rest}
    >
      <h3>
        <button
          id={triggerId}
          type="button"
          onClick={() => toggle(value)}
          disabled={disabled}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className={cn(
            'flex w-full items-center justify-between gap-3 px-5 py-4 text-left',
            'text-p-md font-medium text-fg-default',
            'hover:bg-bg-container transition-colors',
            'focus-visible:outline-none focus-visible:bg-bg-container',
            'disabled:opacity-50 disabled:cursor-not-allowed',
          )}
        >
          <span className="inline-flex items-center gap-3">
            {icon && <span className="inline-flex text-fg-secondary">{icon}</span>}
            {title}
          </span>
          <ChevronDown
            className={cn(
              'h-5 w-5 shrink-0 text-fg-secondary transition-transform duration-200',
              isOpen && 'rotate-180',
            )}
            aria-hidden
          />
        </button>
      </h3>
      {animated ? (
        <div
          className={cn(
            'grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none',
            isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
          )}
        >
          <div className="overflow-hidden min-h-0">
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              inert={!isOpen || undefined}
              className="px-5 pb-4 text-p-std text-fg-secondary"
            >
              {panelContent}
            </div>
          </div>
        </div>
      ) : (
        <div
          id={panelId}
          role="region"
          aria-labelledby={triggerId}
          hidden={!isOpen}
          className="px-5 pb-4 text-p-std text-fg-secondary"
        >
          {panelContent}
        </div>
      )}
    </div>
  );
});
