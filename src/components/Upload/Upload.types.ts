import type { HTMLAttributes, ReactNode } from 'react';
import type { BaseProps } from '../../types';

export type UploadMode = 'dropzone' | 'button' | 'icon' | 'view';
export type UploadRejectionReason = 'size' | 'type' | 'maxFiles' | 'duplicate';

export interface UploadRejection {
  file: File;
  reason: UploadRejectionReason;
}

export interface UploadProps
  extends Omit<
      HTMLAttributes<HTMLDivElement>,
      | 'onClick'
      | 'onDrop'
      | 'onDragEnter'
      | 'onDragOver'
      | 'onDragLeave'
      | 'onKeyDown'
      | 'role'
      | 'tabIndex'
      | 'aria-disabled'
      | 'aria-invalid'
    >,
    BaseProps {
  /** Forwarded to the hidden native `<input type="file">`, e.g. `"image/png,image/jpeg"`. */
  accept?: string;
  multiple?: boolean;
  /** Shown in the default hint text (e.g. "PNG, up to 10 MB"). Enforced only when `validateFiles` is set. */
  maxSizeMB?: number;
  /** Overrides the auto-generated hint derived from `accept`/`maxSizeMB`. */
  hint?: ReactNode;
  /** Called with the files that passed validation (or every selected/dropped file, when `validateFiles` is `false`). */
  onFiles?: (files: File[]) => void;
  disabled?: boolean;
  /** Enforces `accept`, `maxSizeMB`, `maxFiles`, and de-duplication against `currentFiles`, routing rejected files to `onReject` instead of `onFiles`. Defaults to `false` — existing consumers keep receiving every file the user picked. */
  validateFiles?: boolean;
  /** Max total files, counted against `currentFiles.length` plus the new selection. Only enforced when `validateFiles` is set. */
  maxFiles?: number;
  /** Drops files already present in `currentFiles` (matched by name + size). Defaults to `validateFiles`'s value. */
  dedupe?: boolean;
  /** Files the consumer is already holding — enables `maxFiles`/`dedupe` enforcement without `Upload` owning any file state itself. */
  currentFiles?: File[];
  /** Files that failed validation, with the reason. Only called when `validateFiles` is set. */
  onReject?: (rejections: UploadRejection[]) => void;
  /** Renders `currentFiles` as `UploadItem`s below the trigger/dropzone. `Upload` stays stateless — `currentFiles` remains the source of truth. */
  showFileList?: boolean;
  /** Called when a self-rendered file-list item's remove button is clicked. Only reachable when `showFileList` is set and `mode` isn't `'view'`. */
  onRemoveFile?: (file: File, index: number) => void;
  /** `'dropzone'` (default) is the drag-and-drop area. `'button'` renders a secondary Button trigger. `'icon'` renders a compact icon-only trigger. `'view'` renders only the label and (with `showFileList`) the file list — no picker, no drag target, no remove affordance. */
  mode?: UploadMode;
  /** Label for the `'button'`-mode trigger. Ignored in other modes. */
  triggerLabel?: ReactNode;
  /** Overrides the default trigger icon (a paperclip for `'button'` mode, a pencil for `'icon'` mode). */
  triggerIcon?: ReactNode;
  label?: ReactNode;
  required?: boolean;
  /** Switches the dropzone (or, in `button`/`icon` mode, just the message below) to the danger styles. */
  error?: boolean;
  /** Message rendered below the control; also switches dropzone mode to the danger styles. */
  errorText?: ReactNode;
  /** Content rendered on the label row, right of the label text and required marker — e.g. an info tooltip trigger. */
  labelAddons?: ReactNode;
}

export type UploadItemStatus = 'processing' | 'completed' | 'error';

export interface UploadItemProps extends HTMLAttributes<HTMLDivElement>, BaseProps {
  name: ReactNode;
  meta?: ReactNode;
  status?: UploadItemStatus;
  /** 0-100, only rendered while `status="processing"`. */
  progress?: number;
  errorText?: ReactNode;
  onRetry?: () => void;
  onRemove?: () => void;
  /** Image thumbnail URL, rendered in place of the file-type icon. The consumer owns the URL's lifetime (e.g. call `URL.revokeObjectURL` on unmount). Falls back to the file icon on load failure. */
  previewSrc?: string;
}
