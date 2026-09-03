import {
  Children,
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ComponentProps,
  type ForwardRefExoticComponent,
  type ReactNode,
  type RefAttributes,
} from 'react';
import BaseSelect, { components as RSComponents } from 'react-select';
import AsyncSelect from 'react-select/async';
import CreatableSelect from 'react-select/creatable';
import AsyncCreatableSelect from 'react-select/async-creatable';
import type {
  FormatOptionLabelMeta,
  GroupBase,
  MenuListProps,
  MultiValue,
  SelectInstance,
  SingleValue,
} from 'react-select';
import { Check, ChevronDown, Loader2, X } from 'lucide-react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { cn } from '../../lib/cn';
import { mergeRefs } from '../../lib/mergeRefs';
import { Checkbox } from '../Checkbox';
import { useVisibleTagCount } from './useVisibleTagCount';
import { SELECT_V2_TRANSLATIONS } from './SelectV2.i18n';
import {
  MULTI_VALUE_BADGE_CLASS,
  MULTI_VALUE_CLASS,
  MULTI_VALUE_LABEL_CLASS,
  MULTI_VALUE_REMOVE_CLASS,
  buildClassNames,
  clearStoredSelection,
  hasStoredSelection,
  matchesSearch,
  optionLabelText,
  readStoredSelection,
  writeStoredSelection,
} from './SelectV2.utils';
import type { SelectV2Option, SelectV2Props } from './SelectV2.types';
import type { OptionValue } from '../../types';

type Instance = SelectInstance<SelectV2Option, boolean, GroupBase<SelectV2Option>>;
type RSComponentType = ForwardRefExoticComponent<Record<string, unknown> & RefAttributes<Instance>>;

// Estimated row height fed to the virtualizer when `virtualized` is on.
// Assumes a single-line option row (see the prop doc for caveats).
const OPTION_ROW_HEIGHT = 36;

interface SelectAllState {
  count: number;
  checked: boolean;
  indeterminate: boolean;
  label: string;
}

interface SaveSelectionState {
  checked: boolean;
  label: ReactNode;
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

function Option(props: ComponentProps<typeof RSComponents.Option>) {
  return (
    <RSComponents.Option {...props}>
      {props.children}
      {props.isSelected && <Check className="h-4 w-4 text-fg-brand shrink-0" aria-hidden />}
    </RSComponents.Option>
  );
}

function LoadingIndicator() {
  return <Loader2 className="h-4 w-4 animate-spin text-fg-secondary" aria-hidden />;
}

/** Wraps `Menu` to pin a "Select all" row above the option list and a "Save
 *  selection" row below it — works for both the default and virtualized
 *  `MenuList` since `Menu` wraps `MenuList` regardless. Registered whenever
 *  either row applies (select is multi and non-async, and/or `storageKey`
 *  is set). */
function PinnedRowsMenu(props: ComponentProps<typeof RSComponents.Menu>) {
  const { selectAllState, onSelectAllToggle, saveSelectionState, onSaveSelectionToggle } =
    props.selectProps as unknown as {
      selectAllState?: SelectAllState | null;
      onSelectAllToggle?: () => void;
      saveSelectionState?: SaveSelectionState | null;
      onSaveSelectionToggle?: () => void;
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
      {saveSelectionState && (
        <div
          className="border-t border-border-default px-3 py-2"
          onMouseDown={(e) => e.preventDefault()}
          onClick={(e) => {
            e.preventDefault();
            onSaveSelectionToggle?.();
          }}
        >
          <Checkbox
            size="sm"
            checked={saveSelectionState.checked}
            label={saveSelectionState.label}
            readOnly
          />
        </div>
      )}
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
    searchable,
    virtualized = false,
    emptyText,
    locale = 'en-US',
    storageKey,
    saveSelectionLabel,
    size = 'md',
    disabled = false,
    id,
    className,
    wrapperClassName,
    dataTestId,
    ...reactSelectProps
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

  const [internalSingle, setInternalSingle] = useState<OptionValue | undefined>(() => {
    if (isMulti) return undefined;
    if (storageKey && !isControlled) {
      const stored = readStoredSelection(storageKey);
      if (stored !== undefined) return stored as OptionValue;
    }
    return defaultValue as OptionValue | undefined;
  });
  const [internalMulti, setInternalMulti] = useState<OptionValue[]>(() => {
    if (!isMulti) return [];
    if (storageKey && !isControlled) {
      const stored = readStoredSelection(storageKey);
      if (Array.isArray(stored)) return stored as OptionValue[];
    }
    return (defaultValue as OptionValue[] | undefined) ?? [];
  });
  // Reflects whether a saved selection is currently pinned in storage for
  // `storageKey` — drives both the checkbox and whether further selection
  // changes keep getting written until unchecked.
  const [savePinned, setSavePinned] = useState<boolean>(
    () => !!storageKey && hasStoredSelection(storageKey),
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
  // Static, non-creatable selects with few options don't need a search box
  // cluttering the menu — hide it once `options.length` drops under 10,
  // unless the consumer explicitly set `searchable`. Async selects need the
  // input to drive `loadOptions`, and creatable ones need it to type a new
  // value, so both keep search on regardless of option count.
  const resolvedSearchable = searchable ?? (isAsync || creatable ? true : options.length >= 10);
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
  const instanceRef = useRef<Instance>(null);
  const singleLineEnabled = !!isMulti && singleLine;
  const visibleTagCount = useVisibleTagCount({
    wrapperRef,
    measureRef,
    total: selectedMulti.length,
    labelsKey: selectedMulti.map(optionLabelText).join(' '),
    enabled: singleLineEnabled,
  });

  const anyOptionHasDescription = useMemo(() => options.some((o) => !!o.description), [options]);

  // `options` is a flat array with an optional per-item `group` label —
  // react-select only renders group headings for its own nested
  // `GroupBase[]` shape, so fold same-group items together here. Items
  // without a `group` stay top-level, in their original relative order.
  const groupedOptions = useMemo((): SelectV2Option[] | GroupBase<SelectV2Option>[] => {
    if (!options.some((o) => o.group)) return options;

    const groups = new Map<string, SelectV2Option[]>();
    const result: Array<SelectV2Option | GroupBase<SelectV2Option>> = [];

    for (const option of options) {
      if (!option.group) {
        result.push(option);
        continue;
      }
      let group = groups.get(option.group);
      if (!group) {
        group = [];
        groups.set(option.group, group);
        result.push({ label: option.group, options: group });
      }
      group.push(option);
    }

    return result as SelectV2Option[] | GroupBase<SelectV2Option>[];
  }, [options]);

  // "Select all" only covers the static `options` case — async results
  // stream in from the server and aren't retained as a stable "currently
  // visible" list, so select-all isn't offered there.
  const isSelectAllEligible = !!isMulti && !isAsync;

  const currentSelection = isMulti ? currentMulti : currentSingle;
  // Keeps writing the live selection to storage as long as `savePinned` is
  // on — including while controlled, so a parent-driven `value` still gets
  // persisted even though it won't be auto-restored on mount (see prop doc).
  useEffect(() => {
    if (!storageKey || !savePinned) return;
    writeStoredSelection(storageKey, currentSelection);
  }, [storageKey, savePinned, currentSelection]);

  const handleSaveSelectionToggle = useCallback(() => {
    if (!storageKey) return;
    setSavePinned((prev) => {
      const next = !prev;
      if (next) {
        writeStoredSelection(storageKey, currentSelection);
      } else {
        clearStoredSelection(storageKey);
      }
      return next;
    });
  }, [storageKey, currentSelection]);

  const saveSelectionState = useMemo<SaveSelectionState | null>(() => {
    if (!storageKey) return null;
    return { checked: savePinned, label: saveSelectionLabel ?? t.saveSelectionLabel };
  }, [storageKey, savePinned, saveSelectionLabel, t]);

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
    const checked = selectedVisibleCount === visibleSelectableOptions.length;
    return {
      count: visibleSelectableOptions.length,
      checked,
      indeterminate:
        selectedVisibleCount > 0 && selectedVisibleCount < visibleSelectableOptions.length,
      label: checked
        ? t.clearAllLabel(visibleSelectableOptions.length)
        : t.selectAllLabel(visibleSelectableOptions.length),
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
    instanceRef.current?.onMenuClose();
  }, [selectAllState, visibleSelectableOptions, currentMulti, mergeKnown, onChange]);

  const commonProps: Record<string, unknown> = {
    ...reactSelectProps,
    inputId,
    unstyled: true,
    classNames,
    className,
    isMulti,
    options: groupedOptions,
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
    isSearchable: resolvedSearchable,
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
    ...(saveSelectionState
      ? { saveSelectionState, onSaveSelectionToggle: handleSaveSelectionToggle }
      : {}),
    ...(singleLineEnabled ? { visibleTagCount } : {}),
    ...(isMulti
      ? {
          closeMenuOnSelect: reactSelectProps.closeMenuOnSelect ?? false,
          hideSelectedOptions: reactSelectProps.hideSelectedOptions ?? false,
        }
      : {}),
    menuPlacement: reactSelectProps.menuPlacement ?? 'auto',
    components: {
      DropdownIndicator,
      ClearIndicator,
      MultiValueRemove,
      LoadingIndicator,
      IndicatorSeparator: () => null,
      ...(virtualized ? { MenuList: VirtualizedMenuList } : {}),
      ...(isSelectAllEligible || saveSelectionState ? { Menu: PinnedRowsMenu } : {}),
      ...(singleLineEnabled ? { MultiValue } : {}),
      Option,
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
      <Component ref={mergeRefs(ref, instanceRef)} {...commonProps} />
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
