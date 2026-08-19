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
import { Checkbox } from '../Checkbox';
import { useVisibleTagCount } from './useVisibleTagCount';
import { SELECT_V2_TRANSLATIONS } from './SelectV2.i18n';
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

// Shared between `buildClassNames`' real chip/badge classNames and the
// hidden measuring row in `useVisibleTagCount`, so both stay in lockstep.
const MULTI_VALUE_CLASS =
  'flex items-center gap-1 rounded-md bg-bg-subtle pl-2 pr-1 py-0.5 max-w-full';
const MULTI_VALUE_LABEL_CLASS = 'truncate text-p-sm text-fg-default';
const MULTI_VALUE_REMOVE_CLASS =
  'rounded-sm text-fg-secondary hover:bg-bg-container hover:text-fg-default cursor-pointer';
const MULTI_VALUE_BADGE_CLASS =
  'flex items-center rounded-md bg-bg-info-lighter px-2 py-0.5 text-p-sm text-blue-800 dark:text-blue-300 shrink-0';

// Estimated row height fed to the virtualizer when `virtualized` is on.
// Assumes a single-line option row (see the prop doc for caveats).
const OPTION_ROW_HEIGHT = 36;

function optionLabelText(option: SelectV2Option): string {
  return (
    option.searchText ?? (typeof option.label === 'string' ? option.label : String(option.value))
  );
}

function matchesSearch(option: SelectV2Option, inputValue: string): boolean {
  const needle = inputValue.trim().toLowerCase();
  if (!needle) return true;
  const haystack = `${optionLabelText(option)} ${String(option.value)}`.toLowerCase();
  return haystack.includes(needle);
}

interface SelectAllState {
  count: number;
  checked: boolean;
  indeterminate: boolean;
  label: string;
}

function buildClassNames(
  size: SelectV2Size,
  hasError: boolean,
  singleLine: boolean,
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
      cn(
        'flex flex-1 items-center gap-1 min-w-0 sv2-value-container',
        singleLine ? 'flex-nowrap overflow-hidden' : 'flex-wrap',
        sizeValuePadding[size],
      ),
    placeholder: () => 'text-fg-tertiary truncate',
    singleValue: () => 'text-fg-default truncate min-w-0',
    input: () => 'text-fg-default',
    multiValue: () => MULTI_VALUE_CLASS,
    multiValueLabel: () => MULTI_VALUE_LABEL_CLASS,
    multiValueRemove: () => MULTI_VALUE_REMOVE_CLASS,
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

/** Only registered when `isMulti` and `singleLine` are both on. Renders chips
 *  up to `visibleTagCount` as usual, replaces the next one with a "+N" badge
 *  summarizing the rest, and drops the remainder — `visibleTagCount` and the
 *  live selection count are threaded through `selectProps`, same pattern as
 *  `selectAllState` on `SelectAllMenu`. */
function MultiValue(props: ComponentProps<typeof RSComponents.MultiValue>) {
  const { visibleTagCount } = props.selectProps as unknown as { visibleTagCount?: number };
  if (visibleTagCount === undefined || props.index < visibleTagCount) {
    return <RSComponents.MultiValue {...props} />;
  }
  if (props.index === visibleTagCount) {
    const total = Array.isArray(props.selectProps.value) ? props.selectProps.value.length : 0;
    return <span className={MULTI_VALUE_BADGE_CLASS}>+{total - visibleTagCount}</span>;
  }
  return null;
}

function LoadingIndicator() {
  return <Loader2 className="h-4 w-4 animate-spin text-fg-secondary" aria-hidden />;
}

/** Wraps `Menu` to pin a "Select all" row above the option list — works for
 *  both the default and virtualized `MenuList` since `Menu` wraps `MenuList`
 *  regardless. Only registered when the select is multi and non-async. */
function SelectAllMenu(props: ComponentProps<typeof RSComponents.Menu>) {
  const { selectAllState, onSelectAllToggle } = props.selectProps as unknown as {
    selectAllState?: SelectAllState | null;
    onSelectAllToggle?: () => void;
  };

  return (
    <RSComponents.Menu {...props}>
      {selectAllState && (
        <div
          className="border-b border-border-default px-3 py-2"
          onMouseDown={(e) => e.preventDefault()}
          onClick={(e) => {
            e.preventDefault();
            onSelectAllToggle?.();
          }}
        >
          <Checkbox
            size="sm"
            checked={selectAllState.checked}
            indeterminate={selectAllState.indeterminate}
            label={selectAllState.label}
            readOnly
          />
        </div>
      )}
      {props.children}
    </RSComponents.Menu>
  );
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

export const SelectV2 = forwardRef<Instance, SelectV2Props>(function SelectV2(props, ref) {
  const {
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
    placeholder,
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
    emptyText,
    locale = 'en-US',
    size = 'md',
    disabled = false,
    id,
    className,
    wrapperClassName,
    dataTestId,
  } = props;
  // `singleLine` only exists on the `isMulti: true` branch of the
  // discriminated union, so it can't be pulled in by the plain destructure
  // above without widening every other field to a union type.
  const singleLine = props.isMulti ? !!props.singleLine : false;

  const t = SELECT_V2_TRANSLATIONS[locale];
  const resolvedPlaceholder = placeholder ?? t.placeholder;
  const resolvedEmptyText = emptyText ?? t.noResults;
  const resolvedFormatCreateLabel = formatCreateLabel ?? ((value: string) => t.createLabel(value));

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

  const classNames = useMemo(
    () => buildClassNames(size, hasError, singleLine),
    [size, hasError, singleLine],
  );

  const wrapperRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const singleLineEnabled = !!isMulti && singleLine;
  const visibleTagCount = useVisibleTagCount({
    wrapperRef,
    measureRef,
    total: selectedMulti.length,
    labelsKey: selectedMulti.map(optionLabelText).join(' '),
    enabled: singleLineEnabled,
  });

  const anyOptionHasDescription = useMemo(() => options.some((o) => !!o.description), [options]);

  // "Select all" only covers the static `options` case — async results
  // stream in from the server and aren't retained as a stable "currently
  // visible" list, so select-all isn't offered there.
  const isSelectAllEligible = !!isMulti && !isAsync;

  const [inputValue, setInputValue] = useState('');
  const handleInputChange = useCallback((nextInputValue: string, meta: { action: string }) => {
    if (meta.action === 'input-change') setInputValue(nextInputValue);
  }, []);

  const visibleSelectableOptions = useMemo(() => {
    if (!isSelectAllEligible) return [];
    return options.filter((o) => !o.disabled && matchesSearch(o, inputValue));
  }, [isSelectAllEligible, options, inputValue]);

  const selectAllState = useMemo<SelectAllState | null>(() => {
    if (!isSelectAllEligible || visibleSelectableOptions.length === 0) return null;
    const selectedValues = new Set(currentMulti.map(String));
    const selectedVisibleCount = visibleSelectableOptions.filter((o) =>
      selectedValues.has(String(o.value)),
    ).length;
    return {
      count: visibleSelectableOptions.length,
      checked: selectedVisibleCount === visibleSelectableOptions.length,
      indeterminate:
        selectedVisibleCount > 0 && selectedVisibleCount < visibleSelectableOptions.length,
      label: t.selectAllLabel(visibleSelectableOptions.length),
    };
  }, [isSelectAllEligible, visibleSelectableOptions, currentMulti, t]);

  const handleSelectAllToggle = useCallback(() => {
    if (!selectAllState) return;
    const visibleValues = new Set(visibleSelectableOptions.map((o) => String(o.value)));
    let next: OptionValue[];
    if (selectAllState.checked) {
      next = currentMulti.filter((v) => !visibleValues.has(String(v)));
    } else {
      mergeKnown(visibleSelectableOptions);
      const existing = new Set(currentMulti.map(String));
      next = [
        ...currentMulti,
        ...visibleSelectableOptions
          .filter((o) => !existing.has(String(o.value)))
          .map((o) => o.value),
      ];
    }
    setInternalMulti(next);
    (onChange as ((v: OptionValue[]) => void) | undefined)?.(next);
  }, [selectAllState, visibleSelectableOptions, currentMulti, mergeKnown, onChange]);

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
    formatCreateLabel: creatable ? resolvedFormatCreateLabel : undefined,
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
    placeholder: resolvedPlaceholder,
    isDisabled: disabled || loading,
    isClearable: clearable,
    isSearchable: searchable,
    isLoading: loading || undefined,
    noOptionsMessage: () => resolvedEmptyText,
    loadingMessage: () => t.loadingMessage,
    'aria-invalid': hasError || undefined,
    'aria-required': required || undefined,
    ...(isSelectAllEligible
      ? {
          inputValue,
          onInputChange: handleInputChange,
          selectAllState,
          onSelectAllToggle: handleSelectAllToggle,
        }
      : {}),
    ...(singleLineEnabled ? { visibleTagCount } : {}),
    components: {
      DropdownIndicator,
      ClearIndicator,
      MultiValueRemove,
      LoadingIndicator,
      IndicatorSeparator: () => null,
      ...(virtualized ? { MenuList: VirtualizedMenuList } : {}),
      ...(isSelectAllEligible ? { Menu: SelectAllMenu } : {}),
      ...(singleLineEnabled ? { MultiValue } : {}),
    },
  };

  return (
    <div
      ref={wrapperRef}
      data-test-id={dataTestId}
      className={cn('flex flex-col gap-1.5 w-full', wrapperClassName)}
    >
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
      {singleLineEnabled && (
        <div
          ref={measureRef}
          aria-hidden
          className="flex items-center gap-1 whitespace-nowrap"
          style={{ position: 'absolute', top: -9999, left: -9999, visibility: 'hidden' }}
        >
          {selectedMulti.map((opt) => (
            <span key={String(opt.value)} data-measure-chip className={MULTI_VALUE_CLASS}>
              <span className={MULTI_VALUE_LABEL_CLASS}>{optionLabelText(opt)}</span>
              <span className={MULTI_VALUE_REMOVE_CLASS}>
                <X className="h-3 w-3" aria-hidden />
              </span>
            </span>
          ))}
          <span data-measure-badge className={MULTI_VALUE_BADGE_CLASS} />
        </div>
      )}
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
