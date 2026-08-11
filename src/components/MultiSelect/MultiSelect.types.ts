import type { ReactNode } from 'react';
import type { BaseProps, OptionValue } from '../../types';

export type MultiSelectSize = 'sm' | 'md' | 'lg';

export interface MultiSelectOption {
  value: OptionValue;
  label: string;
  /** Optional second line under the label in the dropdown. */
  description?: string;
  /** Optional avatar image — shown on the chip and the dropdown row. */
  avatarSrc?: string;
  /** Non-selectable option (shown dimmed in the list). */
  disabled?: boolean;
  /** Small tag rendered on the chip, e.g. "You". */
  badge?: ReactNode;
}

export interface MultiSelectProps extends BaseProps {
  options: MultiSelectOption[];
  /** Selected option values (controlled). */
  value: OptionValue[];
  onChange: (values: OptionValue[]) => void;
  /** Called with the option that was just added, alongside `onChange` (never instead of it). */
  onAdd?: (option: MultiSelectOption) => void;
  /** Called with the value that was just removed, alongside `onChange` (never instead of it). */
  onRemove?: (value: OptionValue) => void;
  size?: MultiSelectSize;
  placeholder?: string;
  /** Placeholder once at least one chip exists. Defaults to "Add another…". */
  addMorePlaceholder?: string;
  disabled?: boolean;
  error?: boolean;
  label?: ReactNode;
  /** Content rendered on the label row, right of the label text and required marker — e.g. an info tooltip trigger. Rendered as a sibling of the `<label>`, not a child, so an interactive addon never steals focus into the field. */
  labelAddons?: ReactNode;
  helperText?: ReactNode;
  errorText?: ReactNode;
  required?: boolean;
  /** Values whose chips can't be removed. */
  lockedValues?: OptionValue[];
  /** Cap on how many can be selected (default: unlimited). */
  max?: number;
  /** Renders an Avatar on every chip and dropdown row, falling back to initials derived from the option's `label` when it has no `avatarSrc`. Default `false` — avatars still render for options that already set `avatarSrc` regardless. */
  showAvatars?: boolean;
  /** Set false for a click-to-open picker with no text filter. */
  searchable?: boolean;
  /** Dropdown header shown when the query is empty. */
  suggestionsLabel?: string;
  /** Message shown when nothing matches. */
  emptyText?: string;
  id?: string;
  className?: string;
  wrapperClassName?: string;
  /** Shows a spinner in place of the trailing icon and blocks opening the list. Does not set the native `disabled` attribute. */
  loading?: boolean;
  language?: string
}
