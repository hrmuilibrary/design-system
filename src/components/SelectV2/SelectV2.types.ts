import type { ReactNode } from 'react';
import type { BaseProps, OptionValue, TranslationLocale } from '../../types';

export type SelectV2Size = 'sm' | 'md' | 'lg';

export interface SelectV2Option {
  value: OptionValue;
  label: ReactNode;
  /** Optional second line under the label in the dropdown. */
  description?: string;
  /** Text used for search matching and `aria`/typeahead purposes when `label` isn't a plain string. */
  searchText?: string;
  disabled?: boolean;
  /** Group heading this option belongs under. */
  group?: string;
}

export interface SelectV2BaseProps extends BaseProps {
  /** Static option list, matching `Select`'s required `options` prop. Pass
   *  `[]` when `loadOptions` drives the list instead. */
  options: SelectV2Option[];
  /** Fetch options as the user types. Providing this switches SelectV2 into
   *  react-select's async variant (debounced internally by react-select). */
  loadOptions?: (inputValue: string) => Promise<SelectV2Option[]>;
  /** Options shown before the user types anything, when `loadOptions` is set.
   *  `true` triggers an initial `loadOptions('')` call on mount. */
  defaultOptions?: SelectV2Option[] | true;
  /** Lets the user type a value that isn't in the list and add it as a new
   *  option. Requires `onCreateOption`. */
  creatable?: boolean;
  /** Called with the raw typed text when the user commits a new option via
   *  `creatable`. SelectV2 adds the new option and selects it itself — this
   *  callback is for side effects (e.g. persisting the new option upstream). */
  onCreateOption?: (inputValue: string) => void;
  /** Label for the "create" row, e.g. `(v) => `Add "${v}"``. Defaults to
   *  react-select's own `Create "..."` wording. */
  formatCreateLabel?: (inputValue: string) => ReactNode;
  placeholder?: string;
  label?: ReactNode;
  /** Content rendered on the label row, right of the label text — e.g. an info tooltip trigger. */
  labelAddons?: ReactNode;
  helperText?: ReactNode;
  errorText?: ReactNode;
  error?: boolean;
  size?: SelectV2Size;
  disabled?: boolean;
  /** Renders a red asterisk next to the label. */
  required?: boolean;
  /** Shows a spinner in the indicator and blocks interaction. Independent of
   *  the automatic per-fetch loading state `loadOptions` already drives. */
  loading?: boolean;
  /** Shows a clear ("x") indicator once a value is selected. Default `false`. */
  clearable?: boolean;
  /** Type-to-filter the option list. Default `true` (react-select is a combobox by nature). */
  searchable?: boolean;
  /** Virtualizes the menu list with `@tanstack/react-virtual`, for option
   *  lists in the thousands. Assumes uniform, single-line option rows — off
   *  by default, and not recommended together with `group`ed options. */
  virtualized?: boolean;
  /** Shown when the list is empty (no matches, or nothing loaded yet). Defaults to `'No results'`. */
  emptyText?: string;
  /** Language for built-in strings ("Select all", "No results", the async
   *  loading message, and the default create-option label). Explicit
   *  `placeholder`/`emptyText`/`formatCreateLabel` props still take
   *  precedence over the translated defaults. Default `'en-US'`. */
  locale?: TranslationLocale;
  id?: string;
  className?: string;
  wrapperClassName?: string;
}

export type SelectV2Props =
  | (SelectV2BaseProps & {
      isMulti?: false;
      value?: OptionValue;
      defaultValue?: OptionValue;
      onChange?: (value: OptionValue | undefined) => void;
    })
  | (SelectV2BaseProps & {
      isMulti: true;
      value?: OptionValue[];
      defaultValue?: OptionValue[];
      onChange?: (values: OptionValue[]) => void;
      /** Keeps selected chips on a single line instead of wrapping, collapsing
       *  whatever doesn't fit into a trailing "+N" badge. Default `false`. */
      singleLine?: boolean;
    });
