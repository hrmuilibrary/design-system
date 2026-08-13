import { forwardRef, type Ref } from 'react';
import { Avatar, type AvatarSize } from '../Avatar';
import { cn } from '../../lib/cn';
import type { PersonCardProps, PersonCardSize, PersonCardVariant } from './PersonCard.types';

/* Compact person tile — avatar + name + role inside a rounded card.
 * Used as nodes in the org chart on Profile, but the shape (small chip
 * with face + identity) shows up everywhere people are listed: directory
 * search, mention picker, team callouts. Centralising avoids the same
 * markup being rewritten in each context. */

const sizeStyles: Record<PersonCardSize, { padding: string; avatar: AvatarSize; gap: string }> = {
  sm: { padding: 'px-3 py-2', avatar: 'sm', gap: 'gap-2.5' },
  md: { padding: 'px-3.5 py-2.5', avatar: 'md', gap: 'gap-3' },
};

const variantStyles: Record<PersonCardVariant, string> = {
  default: 'border-border-default bg-bg-default hover:border-fg-tertiary/40',
  highlight: 'border-brand-500 bg-brand-200/15 dark:bg-brand-500/10 ring-1 ring-brand-500/40',
  warning: 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20',
};

export const PersonCard = forwardRef<HTMLDivElement, PersonCardProps>(function PersonCard(
  {
    name,
    role,
    avatar,
    variant = 'default',
    size = 'md',
    badge,
    onClick,
    className,
    dataTestId,
    ...rest
  },
  ref,
) {
  const s = sizeStyles[size];
  const v = variantStyles[variant];

  const inner = (
    <>
      <Avatar src={avatar} name={name} size={s.avatar} />
      <div className="min-w-0 flex-1">
        <div className="text-p-std font-semibold text-fg-default truncate leading-tight">
          {name}
        </div>
        {role && (
          <div className="text-p-sm text-fg-secondary truncate mt-0.5 leading-tight">{role}</div>
        )}
      </div>
      {badge && <span className="shrink-0 self-center">{badge}</span>}
    </>
  );

  const base = cn(
    'relative inline-flex items-center rounded-xl border transition',
    s.padding,
    s.gap,
    v,
    onClick && 'cursor-pointer hover:shadow-z1',
    className,
  );

  if (onClick) {
    return (
      <button
        ref={ref as Ref<HTMLButtonElement>}
        type="button"
        onClick={onClick}
        data-test-id={dataTestId}
        className={cn(base, 'text-left')}
        {...(rest as object)}
      >
        {inner}
      </button>
    );
  }
  return (
    <div ref={ref} data-test-id={dataTestId} className={base} {...rest}>
      {inner}
    </div>
  );
});
