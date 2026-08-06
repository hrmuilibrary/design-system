import type { TextareaHTMLAttributes, ReactNode } from 'react';
import type { BaseProps } from '../../types';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, BaseProps {
  label?: ReactNode;
  /** Content rendered on the label row, right of the label text and required marker — e.g. an info tooltip trigger. Rendered as a sibling of the `<label>`, not a child, so an interactive addon never steals focus into the field. */
  labelAddons?: ReactNode;
  helperText?: ReactNode;
  errorText?: ReactNode;
  error?: boolean;
  wrapperClassName?: string;
  showCount?: boolean;
}
