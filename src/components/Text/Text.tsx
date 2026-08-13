import { createElement, forwardRef, type ElementType } from 'react';
import { cn } from '../../lib/cn';
import type { TextProps, TextVariant, TextWeight, TextColor } from './Text.types';

const variantClass: Record<TextVariant, string> = {
  'h-xl': 'text-h-xl',
  'h-lg': 'text-h-lg',
  'h-md': 'text-h-md',
  'h-std': 'text-h-std',
  'h-sm': 'text-h-sm',
  'h-xs': 'text-h-xs',
  'p-lg': 'text-p-lg',
  'p-md': 'text-p-md',
  'p-std': 'text-p-std',
  'p-sm': 'text-p-sm',
  'p-xs': 'text-p-xs',
  'label-lg': 'text-label-lg',
  'label-md': 'text-label-md',
  'label-std': 'text-label-std',
  'label-sm': 'text-label-sm',
  'label-xs': 'text-label-xs',
  'label-xxs': 'text-label-xxs',
};

const weightClass: Record<TextWeight, string> = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const colorClass: Record<TextColor, string> = {
  default: 'text-fg-default',
  secondary: 'text-fg-secondary',
  tertiary: 'text-fg-tertiary',
  disabled: 'text-fg-disabled',
  inverse: 'text-fg-inverse',
  brand: 'text-fg-brand',
  info: 'text-fg-info',
  success: 'text-fg-success',
  warning: 'text-fg-warning',
  danger: 'text-fg-danger',
};

/** Sensible default element for each variant (can be overridden with `as`). */
const defaultAs: Record<TextVariant, ElementType> = {
  'h-xl': 'h1',
  'h-lg': 'h1',
  'h-md': 'h2',
  'h-std': 'h3',
  'h-sm': 'h4',
  'h-xs': 'h5',
  'p-lg': 'p',
  'p-md': 'p',
  'p-std': 'p',
  'p-sm': 'p',
  'p-xs': 'p',
  'label-lg': 'span',
  'label-md': 'span',
  'label-std': 'span',
  'label-sm': 'span',
  'label-xs': 'span',
  'label-xxs': 'span',
};

export const Text = forwardRef<HTMLElement, TextProps>(function Text(
  {
    variant = 'p-std',
    weight,
    color = 'default',
    as,
    truncate,
    clamp,
    style,
    className,
    children,
    dataTestId,
    ...rest
  },
  ref,
) {
  const Component = as ?? defaultAs[variant];
  return createElement(
    Component,
    {
      ref,
      'data-test-id': dataTestId,
      className: cn(
        variantClass[variant],
        weight && weightClass[weight],
        colorClass[color],
        truncate && 'truncate',
        clamp && !truncate && 'overflow-hidden [display:-webkit-box] [-webkit-box-orient:vertical]',
        className,
      ),
      style: clamp && !truncate ? { ...style, WebkitLineClamp: clamp } : style,
      ...rest,
    },
    children,
  );
});
