import type { ReactNode } from 'react';
import type { BaseProps, OptionValue } from '../../types';

export type SelectSize = 'lg' | 'md' | 'sm';

export interface SelectOption {
  value: OptionValue;
  label: ReactNode;
  disabled?: boolean;
  /** Group heading this option belongs under. Options sharing a group MUST be
   *  contiguous in the `options` array — the heading is emitted whenever this
   *  value changes between consecutive options, so a non-contiguous group
   *  renders its heading more than once. */
  group?: string;
  /** Text used for `searchable` matching when `label` isn't a plain string. */
  searchText?: string;
}

export interface SelectProps extends BaseProps {
  options: SelectOption[];
  value?: OptionValue;
  defaultValue?: OptionValue;
  onChange?: (value: OptionValue) => void;
  placeholder?: string;
  label?: ReactNode;
  /** Content rendered on the label row, right of the label text — e.g. an info tooltip trigger. Rendered as a sibling of the `<label>`, not a child, so an interactive addon never steals focus into the trigger. */
  labelAddons?: ReactNode;
  helperText?: ReactNode;
  errorText?: ReactNode;
  error?: boolean;
  size?: SelectSize;
  disabled?: boolean;
  /** Renders a red asterisk next to the label and sets `aria-required` on the trigger. */
  required?: boolean;
  /** Shows a spinner in place of the chevron and blocks opening the list. Does not set the native `disabled` attribute. */
  loading?: boolean;
  /** Renders a text filter pinned above the open list. */
  searchable?: boolean;
  /** Placeholder for the `searchable` filter input. Defaults to `'Search…'`. */
  searchPlaceholder?: string;
  /** Shown in place of the list when the filter matches nothing. Defaults to `'No results'`. */
  emptyText?: string;
  id?: string;
  className?: string;
  wrapperClassName?: string;
}
