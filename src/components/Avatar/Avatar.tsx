import { forwardRef, useEffect, useRef, useState, type ReactNode } from 'react';
import { Pencil, User } from 'lucide-react';
import { cn } from '../../lib/cn';
import { validateSingleFile } from '../Upload';
import type { AvatarGroupProps, AvatarProps, AvatarSize, AvatarStatus } from './Avatar.types';

const sizeStyles: Record<AvatarSize, string> = {
  '2xs': 'h-5 w-5 text-p-xs',
  xs: 'h-6 w-6 text-p-xs',
  sm: 'h-8 w-8 text-p-sm',
  md: 'h-10 w-10 text-p-std',
  lg: 'h-12 w-12 text-p-md',
  xl: 'h-16 w-16 text-h-xs',
  '2xl': 'h-20 w-20 text-h-xs',
};

const statusSize: Record<AvatarSize, string> = {
  '2xs': 'h-1 w-1',
  xs: 'h-1.5 w-1.5',
  sm: 'h-2 w-2',
  md: 'h-2.5 w-2.5',
  lg: 'h-3 w-3',
  xl: 'h-3.5 w-3.5',
  '2xl': 'h-4 w-4',
};

const statusColor: Record<AvatarStatus, string> = {
  online: 'bg-green-500',
  offline: 'bg-gray-400 dark:bg-gray-500',
  away: 'bg-yellow-600',
  busy: 'bg-red-600',
};

const overlap: Record<AvatarSize, string> = {
  '2xs': '-ml-1',
  xs: '-ml-1.5',
  sm: '-ml-2',
  md: '-ml-2.5',
  lg: '-ml-3',
  xl: '-ml-4',
  '2xl': '-ml-5',
};

// Mirrors the corner-overlay approach in NotificationBadge.tsx (opposite
// corner) — no shared abstraction yet, but keep the two in sync if this
// pattern changes.
const editButtonSize: Record<AvatarSize, string> = {
  '2xs': 'h-2 w-2',
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-7 w-7',
  '2xl': 'h-8 w-8',
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return '';
  if (parts.length === 1) return parts[0]!.slice(0, 2).toUpperCase();
  return (parts[0]![0]! + parts[parts.length - 1]![0]!).toUpperCase();
}

function colorFromName(name: string): string {
  const palette = [
    'bg-brand-500',
    'bg-blue-600',
    'bg-purple-500',
    'bg-pink-500',
    'bg-yellow-600',
    'bg-green-500',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash << 5) - hash + name.charCodeAt(i);
    hash |= 0;
  }
  return palette[Math.abs(hash) % palette.length]!;
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(function Avatar(
  {
    src,
    alt,
    name,
    size = 'md',
    status,
    shape = 'circle',
    fallback,
    editable,
    onImageChange,
    accept,
    maxSizeMB,
    onReject,
    className,
    dataTestId,
    ...rest
  },
  ref,
) {
  const [errored, setErrored] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const prevSrcRef = useRef(src);
  // Tracks whatever object URL is currently "live" (i.e. the one the
  // committed <img src> may be pointing at), independent of whether the
  // effect below ever got to observe it. This lets a true unmount always
  // revoke the right URL even if the parent tears Avatar down synchronously
  // in response to onImageChange, before this render's effect had a chance
  // to mount and register its own cleanup.
  const liveUrlRef = useRef<string | null>(null);

  // Replacement/unmount-while-mounted cleanup: relies on the closure
  // capturing *this* effect instance's own previewUrl, not a ref read, so
  // it stays correct even though handleFileChange also writes liveUrlRef
  // synchronously on every pick (a ref-comparison approach would otherwise
  // have its "stale" value clobbered by the very next pick before this
  // effect gets a chance to read it).
  useEffect(() => {
    liveUrlRef.current = previewUrl;
    if (!previewUrl) return;
    return () => URL.revokeObjectURL(previewUrl);
  }, [previewUrl]);

  // Catch-all for a true unmount when a freshly created URL never got a
  // chance to commit via the effect above (e.g. the parent unmounts/replaces
  // Avatar synchronously in response to onImageChange). Revoking the same
  // URL twice (once here, once via the effect above) is harmless — it's a
  // no-op on an already-revoked URL.
  useEffect(
    () => () => {
      if (liveUrlRef.current) URL.revokeObjectURL(liveUrlRef.current);
    },
    [],
  );

  useEffect(() => {
    if (src !== prevSrcRef.current) {
      prevSrcRef.current = src;
      setPreviewUrl(null);
      setErrored(false);
    }
  }, [src]);

  const handleFileChange = (files: FileList | null) => {
    const file = files?.[0];
    if (!file) return;
    const rejectionReason = validateSingleFile(file, { accept, maxSizeMB });
    if (rejectionReason) {
      onReject?.({ file, reason: rejectionReason });
      return;
    }
    const url = URL.createObjectURL(file);
    liveUrlRef.current = url;
    setPreviewUrl(url);
    setErrored(false);
    onImageChange?.(file);
  };

  const effectiveSrc = previewUrl ?? src;
  const showImage = !!effectiveSrc && !errored;
  const initials = name ? getInitials(name) : '';
  const bgColor = name ? colorFromName(name) : 'bg-gray-300 dark:bg-gray-600';

  return (
    <span
      ref={ref}
      data-test-id={dataTestId}
      className={cn('relative inline-flex shrink-0', className)}
      {...rest}
    >
      <span
        className={cn(
          'inline-flex items-center justify-center overflow-hidden font-semibold text-white select-none',
          sizeStyles[size],
          shape === 'circle' ? 'rounded-full' : 'rounded-md',
          !showImage && bgColor,
        )}
      >
        {showImage ? (
          <img
            src={effectiveSrc}
            alt={alt ?? name ?? ''}
            onError={() => setErrored(true)}
            className="h-full w-full object-cover"
          />
        ) : name ? (
          initials
        ) : (
          (fallback ?? <User className="h-1/2 w-1/2 text-white/90" />)
        )}
      </span>
      {status && (
        <span
          aria-label={status}
          className={cn(
            'absolute bottom-0 rounded-full ring-2 ring-white',
            editable ? 'left-0' : 'right-0',
            statusSize[size],
            statusColor[status],
          )}
        />
      )}
      {editable && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              inputRef.current?.click();
            }}
            aria-label="Change avatar image"
            className={cn(
              'absolute right-0 bottom-0 inline-flex items-center justify-center rounded-full ring-2 ring-white bg-brand-500 text-white hover:bg-brand-600 transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-1',
              editButtonSize[size],
            )}
          >
            <Pencil className="h-1/2 w-1/2" />
          </button>
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            onClick={(event) => event.stopPropagation()}
            onChange={(event) => {
              event.stopPropagation();
              handleFileChange(event.target.files);
              event.target.value = '';
            }}
            className="sr-only"
          />
        </>
      )}
    </span>
  );
});

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(function AvatarGroup(
  { size = 'md', max, children, className, dataTestId, ...rest },
  ref,
) {
  const items = Array.isArray(children) ? children : ([children] as ReactNode[]);
  const shown = max !== undefined ? items.slice(0, max) : items;
  const extra = max !== undefined ? items.length - max : 0;

  return (
    <div
      ref={ref}
      data-test-id={dataTestId}
      className={cn('inline-flex items-center', className)}
      {...rest}
    >
      {shown.map((child, i) => (
        <div
          key={i}
          className={cn('rounded-full ring-2 ring-white', i > 0 && overlap[size])}
          style={{ zIndex: shown.length - i }}
        >
          {child}
        </div>
      ))}
      {extra > 0 && (
        <div className={cn('rounded-full ring-2 ring-white', overlap[size])}>
          <Avatar size={size} name={`+${extra}`} />
        </div>
      )}
    </div>
  );
});
