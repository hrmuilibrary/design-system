import type { ClassNamesConfig, GroupBase } from 'react-select';
import { cn } from '../../lib/cn';
import type { SelectV2Option, SelectV2Size } from './SelectV2.types';

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

// Shared between `buildClassNames`' real chip/badge classNames and
// `SelectV2`'s own multi-value chip rendering (the visible `MultiValue`
// override and its hidden measuring row), so both stay in lockstep.
export const MULTI_VALUE_CLASS =
  'flex items-center gap-1 rounded-md bg-bg-subtle pl-2 pr-1 py-0.5 max-w-full';
export const MULTI_VALUE_LABEL_CLASS = 'truncate text-p-sm text-fg-default';
export const MULTI_VALUE_REMOVE_CLASS =
  'rounded-sm text-fg-secondary hover:bg-bg-container hover:text-fg-default cursor-pointer';
export const MULTI_VALUE_BADGE_CLASS =
  'flex items-center rounded-md bg-bg-info-lighter px-2 py-0.5 text-p-sm text-blue-800 dark:text-blue-300 shrink-0';

export function optionLabelText(option: SelectV2Option): string {
  return (
    option.searchText ?? (typeof option.label === 'string' ? option.label : String(option.value))
  );
}

export function matchesSearch(option: SelectV2Option, inputValue: string): boolean {
  const needle = inputValue.trim().toLowerCase();
  if (!needle) return true;
  const haystack = `${optionLabelText(option)} ${String(option.value)}`.toLowerCase();
  return haystack.includes(needle);
}

export function readStoredSelection(storageKey: string): unknown {
  try {
    const raw = window.localStorage.getItem(storageKey);
    return raw === null ? undefined : (JSON.parse(raw) as unknown);
  } catch {
    return undefined;
  }
}

export function hasStoredSelection(storageKey: string): boolean {
  try {
    return window.localStorage.getItem(storageKey) !== null;
  } catch {
    return false;
  }
}

export function writeStoredSelection(storageKey: string, value: unknown): void {
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(value));
  } catch {
    // Private browsing, quota exceeded, SSR (no window), etc. — non-critical, no-op.
  }
}

export function clearStoredSelection(storageKey: string): void {
  try {
    window.localStorage.removeItem(storageKey);
  } catch {
    // See writeStoredSelection.
  }
}

export function buildClassNames(
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
        singleLine ? 'flex-nowrap! overflow-hidden' : 'flex-wrap',
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
    menu: ({ placement }) =>
      cn(
        'rounded-lg border border-border-default bg-bg-default shadow-z4 overflow-hidden z-50!',
        placement === 'top' ? 'mb-1' : 'mt-1',
      ),
    menuList: () => 'max-h-60 overflow-y-auto py-1',
    menuPortal: () => 'z-50!',
    group: () => 'py-1',
    groupHeading: () =>
      'px-3 pt-2 pb-1 text-label-sm font-medium uppercase tracking-wide text-fg-tertiary select-none',
    option: ({ isFocused, isSelected, isDisabled }) =>
      cn(
        'flex! items-center justify-between gap-2 px-3 py-2 cursor-pointer select-none',
        isDisabled && 'opacity-50 cursor-not-allowed',
        isFocused && !isDisabled && 'bg-bg-subtle',
        isSelected && 'font-medium',
      ),
    noOptionsMessage: () => 'px-3 py-6 text-center text-p-sm text-fg-secondary',
    loadingMessage: () => 'px-3 py-6 text-center text-p-sm text-fg-secondary',
  };
}
