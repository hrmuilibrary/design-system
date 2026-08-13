import { forwardRef, useId, useRef, useState, type DragEvent, type KeyboardEvent } from 'react';
import {
  UploadCloud,
  File as FileIcon,
  Trash2,
  X,
  CheckCircle2,
  AlertCircle,
  Paperclip,
  Pencil,
} from 'lucide-react';
import { cn } from '../../lib/cn';
import { Button } from '../Button';
import type {
  FileValidationOptions,
  UploadItemProps,
  UploadItemStatus,
  UploadProps,
  UploadRejection,
  UploadRejectionReason,
} from './Upload.types';

function matchesAccept(file: File, accept: string): boolean {
  const patterns = accept
    .split(',')
    .map((pattern) => pattern.trim().toLowerCase())
    .filter(Boolean);
  if (!patterns.length) return true;

  const fileName = file.name.toLowerCase();
  const fileType = file.type.toLowerCase();

  return patterns.some((pattern) => {
    if (pattern.endsWith('/*')) return fileType.startsWith(pattern.slice(0, -1));
    if (pattern.startsWith('.')) return fileName.endsWith(pattern);
    return fileType === pattern;
  });
}

const FILE_SIZE_UNITS = ['KB', 'MB', 'GB'] as const;

function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  let value = bytes / 1024;
  let unitIndex = 0;
  while (value >= 1024 && unitIndex < FILE_SIZE_UNITS.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }
  return `${value.toFixed(1)} ${FILE_SIZE_UNITS[unitIndex]}`;
}

/**
 * Also used by `Avatar`'s `editable` picker — changing these semantics
 * changes both components.
 */
export function validateSingleFile(
  file: File,
  { accept, maxSizeMB }: FileValidationOptions,
): UploadRejectionReason | null {
  if (accept && !matchesAccept(file, accept)) return 'type';
  if (maxSizeMB !== undefined && file.size > maxSizeMB * 1024 * 1024) return 'size';
  return null;
}

export const Upload = forwardRef<HTMLDivElement, UploadProps>(function Upload(
  {
    accept,
    multiple = false,
    maxSizeMB,
    hint,
    onFiles,
    disabled,
    validateFiles = false,
    maxFiles,
    dedupe = validateFiles,
    currentFiles = [],
    onReject,
    showFileList = false,
    onRemoveFile,
    mode = 'dropzone',
    triggerLabel,
    triggerIcon,
    label,
    required,
    error = false,
    errorText,
    labelAddons,
    className,
    dataTestId,
    ...rest
  },
  ref,
) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  // `dragleave` bubbles from any child the pointer crosses, so a naive
  // `setDragOver(false)` on every dragleave flickers the highlight off and
  // on as the user drags across the inner icon/text. Track nesting depth
  // instead and only clear once the pointer has left every descendant too.
  const dragDepth = useRef(0);
  const hasError = error || !!errorText;
  const reactId = useId();
  const describedBy = errorText ? `${reactId}-error` : undefined;

  const processFiles = (incoming: File[]) => {
    if (!incoming.length) return;

    if (!validateFiles) {
      onFiles?.(incoming);
      return;
    }

    const accepted: File[] = [];
    const rejections: UploadRejection[] = [];
    const seen = [...currentFiles];
    let remainingSlots =
      maxFiles !== undefined ? Math.max(0, maxFiles - currentFiles.length) : Infinity;

    for (const file of incoming) {
      if (
        dedupe &&
        seen.some((existing) => existing.name === file.name && existing.size === file.size)
      ) {
        rejections.push({ file, reason: 'duplicate' });
        continue;
      }
      const rejectionReason = validateSingleFile(file, { accept, maxSizeMB });
      if (rejectionReason) {
        rejections.push({ file, reason: rejectionReason });
        continue;
      }
      if (remainingSlots <= 0) {
        rejections.push({ file, reason: 'maxFiles' });
        continue;
      }
      accepted.push(file);
      seen.push(file);
      remainingSlots -= 1;
    }

    if (accepted.length) onFiles?.(accepted);
    if (rejections.length) onReject?.(rejections);
  };

  const onDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    dragDepth.current = 0;
    setDragOver(false);
    if (disabled) return;
    processFiles(Array.from(event.dataTransfer.files ?? []));
  };

  const hintText =
    hint ??
    `${accept ? accept.toUpperCase().replace(/\./g, '') : 'Any file'}${
      maxSizeMB ? `, up to ${maxSizeMB} MB` : ''
    }`;

  const fileInput = (
    <input
      ref={inputRef}
      type="file"
      accept={accept}
      multiple={multiple}
      disabled={disabled}
      onChange={(event) => {
        processFiles(Array.from(event.target.files ?? []));
        event.target.value = '';
      }}
      className="sr-only"
    />
  );

  const labelRow = (label || labelAddons) && (
    <div className="flex items-center gap-1.5">
      {label && (
        <span className="text-p-std font-medium text-fg-default inline-flex items-center gap-1">
          {label}
          {required && (
            <span className="text-red-600" aria-hidden>
              *
            </span>
          )}
        </span>
      )}
      {labelAddons && <span className="inline-flex items-center gap-1">{labelAddons}</span>}
    </div>
  );

  const errorRow = errorText ? (
    <p id={`${reactId}-error`} className="text-p-sm text-red-700">
      {errorText}
    </p>
  ) : null;

  const fileListEl = showFileList && currentFiles.length > 0 && (
    <div className="flex flex-col gap-2">
      {currentFiles.map((file, i) => (
        <UploadItem
          key={`${i}-${file.name}-${file.size}`}
          name={file.name}
          meta={formatFileSize(file.size)}
          status="completed"
          onRemove={mode !== 'view' && onRemoveFile ? () => onRemoveFile(file, i) : undefined}
        />
      ))}
    </div>
  );

  if (mode === 'view') {
    return (
      <div
        ref={ref}
        data-test-id={dataTestId}
        className={cn('flex flex-col gap-1.5', className)}
        {...rest}
      >
        {labelRow}
        {fileListEl}
        {errorRow}
      </div>
    );
  }

  if (mode !== 'dropzone') {
    const isIcon = mode === 'icon';
    return (
      <div
        ref={ref}
        data-test-id={dataTestId}
        className={cn('flex flex-col gap-1.5', className)}
        {...rest}
      >
        {labelRow}
        <Button
          type="button"
          variant="secondary"
          iconOnly={isIcon}
          disabled={disabled}
          onClick={() => inputRef.current?.click()}
          leftIcon={isIcon ? undefined : (triggerIcon ?? <Paperclip className="h-4 w-4" />)}
          aria-label={isIcon ? 'Upload file' : undefined}
        >
          {isIcon
            ? (triggerIcon ?? <Pencil className="h-4 w-4" />)
            : (triggerLabel ?? 'Choose a file')}
        </Button>
        {fileInput}
        {fileListEl}
        {errorRow}
      </div>
    );
  }

  const dropzone = (
    <div
      ref={ref}
      onDragEnter={() => {
        dragDepth.current += 1;
        if (!disabled) setDragOver(true);
      }}
      onDragOver={(event) => event.preventDefault()}
      onDragLeave={() => {
        dragDepth.current = Math.max(0, dragDepth.current - 1);
        if (dragDepth.current === 0) setDragOver(false);
      }}
      onDrop={onDrop}
      onClick={() => !disabled && inputRef.current?.click()}
      role="button"
      tabIndex={0}
      onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
        if ((event.key === 'Enter' || event.key === ' ') && !disabled) {
          event.preventDefault();
          inputRef.current?.click();
        }
      }}
      aria-disabled={disabled || undefined}
      aria-invalid={hasError || undefined}
      aria-describedby={describedBy}
      data-test-id={dataTestId}
      className={cn(
        'flex flex-col items-center justify-center text-center gap-2 px-6 py-8 rounded-lg border-2 border-dashed cursor-pointer transition-colors outline-none',
        hasError
          ? 'border-red-300 bg-bg-danger-lighter'
          : dragOver
            ? 'border-brand-500 bg-brand-20'
            : 'border-border-default bg-bg-container hover:bg-bg-subtle',
        'focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-1',
        disabled && 'opacity-50 cursor-not-allowed',
        className,
      )}
      {...rest}
    >
      <div className="h-10 w-10 rounded-full bg-bg-default flex items-center justify-center text-fg-secondary shadow-z1">
        <UploadCloud className="h-5 w-5" />
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-p-std text-fg-default">
          <span className="font-semibold text-brand-700">Choose a file</span> or drag &amp; drop it
          here.
        </p>
        <p className="text-p-sm text-fg-tertiary">{hintText}</p>
      </div>
      {fileInput}
    </div>
  );

  if (!labelRow && !errorRow && !fileListEl) return dropzone;

  return (
    <div className="flex flex-col gap-1.5">
      {labelRow}
      {dropzone}
      {fileListEl}
      {errorRow}
    </div>
  );
});

const statusStyles: Record<UploadItemStatus, string> = {
  processing: 'border-border-default bg-bg-default',
  completed: 'border-border-default bg-bg-default',
  error: 'border-red-300 bg-bg-danger-lighter',
};

export const UploadItem = forwardRef<HTMLDivElement, UploadItemProps>(function UploadItem(
  {
    name,
    meta,
    status = 'processing',
    progress = 0,
    errorText,
    onRetry,
    onRemove,
    onOpen,
    previewSrc,
    className,
    dataTestId,
    ...rest
  },
  ref,
) {
  const [previewFailed, setPreviewFailed] = useState(false);
  const showPreview = !!previewSrc && !previewFailed;

  return (
    <div
      ref={ref}
      data-test-id={dataTestId}
      className={cn(
        'flex items-start gap-3 px-3 py-2.5 rounded-lg border',
        statusStyles[status],
        className,
      )}
      {...rest}
    >
      <div
        className={cn(
          'shrink-0 flex items-center justify-center h-9 w-9 rounded-md overflow-hidden',
          !showPreview &&
            (status === 'error'
              ? 'bg-red-100 dark:bg-red-900/30 text-red-700'
              : 'bg-bg-subtle text-fg-secondary'),
        )}
      >
        {showPreview ? (
          <img
            src={previewSrc}
            alt=""
            className="h-full w-full object-cover"
            onError={() => setPreviewFailed(true)}
          />
        ) : (
          <FileIcon className="h-4 w-4" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline justify-between gap-2">
          {onOpen ? (
            <button
              type="button"
              onClick={onOpen}
              className="truncate text-p-std font-medium text-fg-default text-left rounded-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 min-w-0"
            >
              {name}
            </button>
          ) : (
            <p className="truncate text-p-std font-medium text-fg-default">{name}</p>
          )}
          <div className="flex items-center gap-1 shrink-0">
            {status === 'completed' && (
              <CheckCircle2 className="h-4 w-4 text-green-600" aria-label="Completed" />
            )}
            {status === 'error' && (
              <AlertCircle className="h-4 w-4 text-red-600" aria-label="Failed" />
            )}
          </div>
        </div>
        {meta && <p className="text-p-sm text-fg-tertiary mt-0.5">{meta}</p>}
        {status === 'processing' && (
          <div className="mt-2 h-1 w-full rounded-full bg-bg-subtle overflow-hidden">
            <div
              className="h-full bg-brand-500 transition-[width] duration-200"
              style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            />
          </div>
        )}
        {status === 'error' && errorText && (
          <p className="text-p-sm text-red-700 mt-1">
            {errorText}
            {onRetry && (
              <button
                type="button"
                onClick={onRetry}
                className="ml-2 underline font-medium hover:no-underline"
              >
                Try again
              </button>
            )}
          </p>
        )}
      </div>
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label="Remove"
          className="shrink-0 p-1 rounded-md text-fg-tertiary hover:text-fg-default hover:bg-bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
        >
          {status === 'completed' ? <Trash2 className="h-4 w-4" /> : <X className="h-4 w-4" />}
        </button>
      )}
    </div>
  );
});
