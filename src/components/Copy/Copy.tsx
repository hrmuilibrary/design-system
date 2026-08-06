import { forwardRef, useEffect, useRef, useState } from 'react';
import { Check, Copy as CopyIcon } from 'lucide-react';
import { Button } from '../Button';
import { Popover } from '../Popover';
import type { CopyProps } from './Copy.types';

export const Copy = forwardRef<HTMLButtonElement, CopyProps>(function Copy(
  {
    text,
    copiedLabel = 'Copied',
    label = 'Copy to clipboard',
    timeout = 1500,
    icon,
    onCopy,
    onError,
    disabled,
    dataTestId,
    ...rest
  },
  ref,
) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const canCopy = typeof navigator !== 'undefined' && typeof navigator.clipboard?.writeText === 'function';

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleClick = () => {
    if (!canCopy) return;
    navigator.clipboard.writeText(text).then(
      () => {
        onCopy?.(text);
        setCopied(true);
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setCopied(false), timeout);
      },
      (err) => onError?.(err),
    );
  };

  return (
    <>
      <Popover open={copied} content={copiedLabel} side="top" align="center">
        <Button
          ref={ref}
          type="button"
          variant="tertiary"
          iconOnly
          size="sm"
          disabled={disabled || !canCopy}
          onClick={handleClick}
          aria-label={label}
          dataTestId={dataTestId}
          {...rest}
        >
          {copied ? <Check className="size-4" /> : icon ?? <CopyIcon className="size-4" />}
        </Button>
      </Popover>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? copiedLabel : ''}
      </span>
    </>
  );
});
