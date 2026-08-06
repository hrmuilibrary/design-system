import { forwardRef, useId } from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '../../lib/cn';
import type { ThemeSwitchProps } from './ThemeSwitch.types';

export const ThemeSwitch = forwardRef<HTMLInputElement, ThemeSwitchProps>(function ThemeSwitch(
  { checked, label, id, disabled, className, dataTestId, ...rest },
  ref,
) {
  const reactId = useId();
  const inputId = id ?? reactId;

  return (
    <label
      htmlFor={inputId}
      data-test-id={dataTestId}
      className={cn(
        'inline-flex items-center gap-3',
        disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer',
        className,
      )}
    >
      <span className="relative inline-flex shrink-0">
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          role="switch"
          checked={checked}
          disabled={disabled}
          aria-label={label ? undefined : 'Dark mode'}
          className="peer sr-only"
          {...rest}
        />
        <span
          className={cn(
            'inline-flex h-8 w-16 items-center justify-between rounded-full px-2 transition-colors',
            'bg-gray-200 peer-checked:bg-gray-700 dark:bg-gray-700 dark:peer-checked:bg-gray-900',
            'peer-focus-visible:ring-2 peer-focus-visible:ring-brand-300 peer-focus-visible:ring-offset-2',
          )}
        >
          <Sun className="size-4 text-yellow-500" aria-hidden />
          <Moon className="size-4 text-gray-400" aria-hidden />
        </span>
        <span
          aria-hidden
          className="absolute left-1 top-1 size-6 rounded-full bg-white shadow-z1 transition-transform peer-checked:translate-x-8"
        />
      </span>
      {label && <span className="text-p-std font-medium text-fg-default">{label}</span>}
    </label>
  );
});
