import {
  Children,
  forwardRef,
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
  type ComponentProps,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from 'react';
import BaseSelect, { components as RSComponents } from 'react-select';
import AsyncSelect from 'react-select/async';
import CreatableSelect from 'react-select/creatable';
import AsyncCreatableSelect from 'react-select/async-creatable';
import type {
  ClassNamesConfig,
  FormatOptionLabelMeta,
  GroupBase,
  MenuListProps,
  MultiValue,
  SelectInstance,
  SingleValue,
} from 'react-select';
import { ChevronDown, Loader2, X } from 'lucide-react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { cn } from '../../lib/cn';
import { mergeRefs } from '../../lib/mergeRefs';
import type { SelectV2Option, SelectV2Props, SelectV2Size } from './SelectV2.types';
import type { OptionValue } from '../../types';

type Instance = SelectInstance<SelectV2Option, boolean, GroupBase<SelectV2Option>>;
type RSComponentType = ForwardRefExoticComponent<Record<string, unknown> & RefAttributes<Instance>>;

const sizeControlStyles: Record<SelectV2Size, string> = {
  lg: 'min-h-12 text-p-md',
  md: 'min-h-10 text-p-std',
  sm: 'min-h-8 text-p-sm',
};

const sizeValuePadding: Record<SelectV2Size, string> = {
  lg: 'px-3.5 py-1.5',
  md: 'px-3 py-1',
  sm: 'px-2.5 py-0.5',
};

// Estimated row height fed to the virtualizer when `virtualized` is on.
// Assumes a single-line option row (see the prop doc for caveats).
const OPTION_ROW_HEIGHT = 36;

function optionLabelText(option: SelectV2Option): string {
  return (
    option.searchText ?? (typeof option.label === 'string' ? option.label : String(option.value))
  );
}

function buildClassNames(
  size: SelectV2Size,
  hasError: boolean,
): ClassNamesConfig<SelectV2Option, boolean, GroupBase<SelectV2Option>> {
  return {
    container: () => 'w-full',
    control: ({ isFocused, isDisabled }) =>
      cn(
        'flex items-center rounded-lg border bg-bg-default transition-colors',
        isDisabled ? 'cursor-not-allowed' : 'cursor-text',
        sizeControlStyles[size],
        hasError ? 'border-red-600' : 'border-border-default',
        !isDisabled && !hasError && 'hover:border-border-strong',
        isFocused && !hasError && 'ring-2 ring-brand-300 border-brand-500',
        isFocused && hasError && 'ring-2 ring-red-300 border-red-600',
        isDisabled && 'bg-bg-container border-border-default',
      ),
    valueContainer: () =>
      cn('flex flex-1 flex-wrap items-center gap-1 min-w-0', sizeValuePadding[size]),
    placeholder: () => 'text-fg-tertiary truncate',
    singleValue: () => 'text-fg-default truncate min-w-0',
    input: () => 'text-fg-default',
    multiValue: () => 'flex items-center gap-1 rounded-md bg-bg-subtle pl-2 pr-1 py-0.5 max-w-full',
    multiValueLabel: () => 'truncate text-p-sm text-fg-default',
    multiValueRemove: () =>
      'rounded-sm text-fg-secondary hover:bg-bg-container hover:text-fg-default cursor-pointer',
    indicatorsContainer: () => 'flex items-center gap-1 pr-2 shrink-0',
    clearIndicator: () => 'text-fg-secondary hover:text-fg-default cursor-pointer p-0.5',
    dropdownIndicator: () => 'text-fg-secondary p-0.5',
    indicatorSeparator: () => 'hidden',
    menu: () =>
      'mt-1 rounded-lg border border-border-default bg-bg-default shadow-z4 overflow-hidden z-50',
    menuList: () => 'max-h-60 overflow-y-auto py-1',
    menuPortal: () => 'z-50',
    group: () => 'py-1',
    groupHeading: () =>
      'px-3 pt-2 pb-1 text-label-sm font-medium uppercase tracking-wide text-fg-tertiary select-none',
    option: ({ isFocused, isSelected, isDisabled }) =>
      cn(
        'flex items-center justify-between gap-2 px-3 py-2 cursor-pointer select-none',
        isDisabled && 'opacity-50 cursor-not-allowed',
        isFocused && !isDisabled && 'bg-bg-subtle',
        isSelected && 'font-medium',
      ),
    noOptionsMessage: () => 'px-3 py-6 text-center text-p-sm text-fg-secondary',
    loadingMessage: () => 'px-3 py-6 text-center text-p-sm text-fg-secondary',
  };
}

function DropdownIndicator(props: ComponentProps<typeof RSComponents.DropdownIndicator>) {
  return (
    <RSComponents.DropdownIndicator {...props}>
      <ChevronDown
        className={cn('h-4 w-4 transition-transform', props.selectProps.menuIsOpen && 'rotate-180')}
        aria-hidden
      />
    </RSComponents.DropdownIndicator>
  );
}

function ClearIndicator(props: ComponentProps<typeof RSComponents.ClearIndicator>) {
  return (
    <RSComponents.ClearIndicator {...props}>
      <X className="h-3.5 w-3.5" aria-hidden />
    </RSComponents.ClearIndicator>
  );
}

function MultiValueRemove(props: ComponentProps<typeof RSComponents.MultiValueRemove>) {
  return (
    <RSComponents.MultiValueRemove {...props}>
      <X className="h-3 w-3" aria-hidden />
    </RSComponents.MultiValueRemove>
  );
}

function LoadingIndicator() {
  return <Loader2 className="h-4 w-4 animate-spin text-fg-secondary" aria-hidden />;
}

/** Renders only the visible slice of `MenuList`'s children via
 *  `@tanstack/react-virtual`. Assumes uniform, single-line rows — grouped
 *  options or multi-line descriptions will misalign, and keyboard
 *  scroll-into-view for the active option is best-effort since off-screen
 *  rows have no real DOM node until they're scrolled into range. */
function VirtualizedMenuList(
  props: MenuListProps<SelectV2Option, boolean, GroupBase<SelectV2Option>>,
) {
  const { children, innerRef, innerProps, maxHeight } = props;
  const items = Children.toArray(children);
  const parentRef = useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => OPTION_ROW_HEIGHT,
    overscan: 8,
  });

  return (
    <div
      {...innerProps}
      ref={mergeRefs(innerRef, parentRef)}
      className="overflow-y-auto py-1"
      style={{ maxHeight }}
    >
      <div style={{ height: virtualizer.getTotalSize(), position: 'relative', width: '100%' }}>
        {virtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.key}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            {items[virtualRow.index]}
          </div>
        ))}
      </div>
    </div>
  );
}

export const SelectV2 = forwardRef<Instance, SelectV2Props>(function SelectV2(
  {
    options,
    loadOptions,
    defaultOptions,
    creatable = false,
    onCreateOption,
    formatCreateLabel,
    isMulti,
    value,
    defaultValue,
    onChange,
    placeholder = 'Select…',
    label,
    labelAddons,
    helperText,
    errorText,
    error = false,
    required = true,
    loading = false,
    clearable = false,
    searchable = true,
    virtualized = false,
    emptyText = 'No results',
    size = 'md',
    disabled = false,
    id,
    className,
    wrapperClassName,
    dataTestId,
  },
  ref,
) {
  const reactId = useId();
  const inputId = id ?? reactId;
  const hasError = error || !!errorText;
  const isControlled = value !== undefined;

  const [internalSingle, setInternalSingle] = useState<OptionValue | undefined>(
    isMulti ? undefined : (defaultValue as OptionValue | undefined),
  );
  const [internalMulti, setInternalMulti] = useState<OptionValue[]>(
    isMulti ? ((defaultValue as OptionValue[] | undefined) ?? []) : [],
  );

  // Options are only known by value from `options`/`defaultOptions` at first;
  // async results and freshly-created options are merged in as they appear,
  // so a controlled `value` can always be resolved to a full option object —
  // react-select compares and displays selections by object, not bare value.
  const [knownOptions, setKnownOptions] = useState<Map<string, SelectV2Option>>(() => {
    const map = new Map<string, SelectV2Option>();
    for (const o of options) map.set(String(o.value), o);
    if (Array.isArray(defaultOptions)) {
      for (const o of defaultOptions) map.set(String(o.value), o);
    }
    return map;
  });

  const mergeKnown = useCallback((opts: SelectV2Option[]) => {
    if (opts.length === 0) return;
    setKnownOptions((prev) => {
      let changed = false;
      const next = new Map(prev);
      for (const o of opts) {
        const key = String(o.value);
        if (next.get(key) !== o) {
          next.set(key, o);
          changed = true;
        }
      }
      return changed ? next : prev;
    });
  }, []);

  useMemo(() => {
    mergeKnown(options);
  }, [options, mergeKnown]);

  const resolveOption = useCallback(
    (v: OptionValue): SelectV2Option =>
      knownOptions.get(String(v)) ?? { value: v, label: String(v) },
    [knownOptions],
  );

  const currentSingle = isControlled ? (value as OptionValue | undefined) : internalSingle;
  const currentMulti = useMemo(
    () => (isControlled ? (value as OptionValue[] | undefined) : internalMulti) ?? [],
    [isControlled, value, internalMulti],
  );

  const selectedSingle: SingleValue<SelectV2Option> =
    !isMulti && currentSingle !== undefined ? resolveOption(currentSingle) : null;
  const selectedMulti: MultiValue<SelectV2Option> = isMulti ? currentMulti.map(resolveOption) : [];

  const wrappedLoadOptions = useMemo(() => {
    if (!loadOptions) return undefined;
    return (inputValue: string) =>
      Promise.resolve(loadOptions(inputValue)).then((opts) => {
        mergeKnown(opts);
        return opts;
      });
  }, [loadOptions, mergeKnown]);

  const handleChange = useCallback(
    (selected: SingleValue<SelectV2Option> | MultiValue<SelectV2Option>) => {
      if (isMulti) {
        const arr = [...((selected as MultiValue<SelectV2Option>) ?? [])];
        mergeKnown(arr);
        const values = arr.map((o) => o.value);
        setInternalMulti(values);
        (onChange as ((v: OptionValue[]) => void) | undefined)?.(values);
      } else {
        const opt = selected as SingleValue<SelectV2Option>;
        if (opt) mergeKnown([opt]);
        setInternalSingle(opt?.value);
        (onChange as ((v: OptionValue | undefined) => void) | undefined)?.(opt?.value ?? undefined);
      }
    },
    [isMulti, mergeKnown, onChange],
  );

  const handleCreate = useCallback(
    (inputValue: string) => {
      const newOption: SelectV2Option = { value: inputValue, label: inputValue };
      mergeKnown([newOption]);
      onCreateOption?.(inputValue);
      if (isMulti) {
        const next = [...currentMulti, newOption.value];
        setInternalMulti(next);
        (onChange as ((v: OptionValue[]) => void) | undefined)?.(next);
      } else {
        setInternalSingle(newOption.value);
        (onChange as ((v: OptionValue | undefined) => void) | undefined)?.(newOption.value);
      }
    },
    [isMulti, currentMulti, mergeKnown, onChange, onCreateOption],
  );

  const isAsync = !!loadOptions;
  const Component = (isAsync
    ? creatable
      ? AsyncCreatableSelect
      : AsyncSelect
    : creatable
      ? CreatableSelect
      : BaseSelect) as unknown as RSComponentType;

  const classNames = useMemo(() => buildClassNames(size, hasError), [size, hasError]);

  const anyOptionHasDescription = useMemo(() => options.some((o) => !!o.description), [options]);

  const commonProps: Record<string, unknown> = {
    inputId,
    unstyled: true,
    classNames,
    className,
    isMulti,
    options,
    loadOptions: wrappedLoadOptions,
    defaultOptions,
    value: isMulti ? selectedMulti : selectedSingle,
    onChange: handleChange,
    onCreateOption: creatable ? handleCreate : undefined,
    formatCreateLabel,
    getOptionValue: (o: SelectV2Option) => String(o.value),
    getOptionLabel: optionLabelText,
    formatOptionLabel: (opt: SelectV2Option, meta: FormatOptionLabelMeta<SelectV2Option>) => {
      if (meta.context === 'value') return opt.label;
      return anyOptionHasDescription && opt.description ? (
        <span className="flex flex-col min-w-0">
          <span className="truncate">{opt.label}</span>
          <span className="truncate text-p-sm text-fg-secondary">{opt.description}</span>
        </span>
      ) : (
        opt.label
      );
    },
    isOptionDisabled: (o: SelectV2Option) => !!o.disabled,
    placeholder,
    isDisabled: disabled || loading,
    isClearable: clearable,
    isSearchable: searchable,
    isLoading: loading || undefined,
    noOptionsMessage: () => emptyText,
    'aria-invalid': hasError || undefined,
    'aria-required': required || undefined,
    components: {
      DropdownIndicator,
      ClearIndicator,
      MultiValueRemove,
      LoadingIndicator,
      IndicatorSeparator: () => null,
      ...(virtualized ? { MenuList: VirtualizedMenuList } : {}),
    },
  };

  return (
    <div data-test-id={dataTestId} className={cn('flex flex-col gap-1.5 w-full', wrapperClassName)}>
      {(label || labelAddons) && (
        <div className="flex items-center gap-1.5">
          {label && (
            <label
              htmlFor={inputId}
              className="text-p-std font-medium text-fg-default inline-flex items-center gap-1"
            >
              {label}
              {required && (
                <span className="text-fg-danger" aria-hidden>
                  *
                </span>
              )}
            </label>
          )}
          {labelAddons && <span className="inline-flex items-center gap-1">{labelAddons}</span>}
        </div>
      )}
      <Component ref={ref} {...commonProps} />
      {errorText ? (
        <p id={`${inputId}-error`} className="text-p-sm text-fg-danger">
          {errorText}
        </p>
      ) : helperText ? (
        <p id={`${inputId}-help`} className="text-p-sm text-fg-secondary">
          {helperText}
        </p>
      ) : null}
    </div>
  );
});
