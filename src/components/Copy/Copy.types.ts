import type { ReactNode } from 'react';
import type { BaseProps } from '../../types';
import type { ButtonProps } from '../Button';

export interface CopyProps
  extends Omit<ButtonProps, 'children' | 'onClick' | 'leftIcon' | 'rightIcon' | 'onCopy'>,
    BaseProps {
  /** Text copied to the clipboard on click. */
  text: string;
  /** Feedback shown in the popover after copying. Default `'Copied'`. */
  copiedLabel?: string;
  /** Accessible name for the button (it has no visible text). Default `'Copy to clipboard'`. */
  label?: string;
  /** Milliseconds before the feedback clears. Default `1500`. */
  timeout?: number;
  /** Overrides the default copy icon. */
  icon?: ReactNode;
  onCopy?: (text: string) => void;
  onError?: (error: unknown) => void;
}
