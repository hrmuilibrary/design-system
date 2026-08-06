import type { CSSProperties } from 'react';
import type { Column, ColumnDef } from '@tanstack/react-table';
import { Checkbox } from '../Checkbox';
import { TableV2RowActionsMenu } from './TableV2RowActions';
import type { TableV2Align, TableV2Density, TableV2RowAction } from './TableV2.types';

export const densityStyles: Record<TableV2Density, string> = {
  comfortable: 'py-3',
  compact: 'py-2',
};

export const alignStyles: Record<TableV2Align, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

/** Prepended to `columns` when `enableRowSelection` is on and no `'select'` column exists already. */
export function createSelectionColumn<TData>(): ColumnDef<TData, unknown> {
  return {
    id: 'select',
    size: 40,
    minSize: 40,
    maxSize: 40,
    enableSorting: false,
    enableHiding: false,
    enableResizing: false,
    enableColumnFilter: false,
    header: ({ table }) => (
      <Checkbox
        aria-label="Select all rows"
        checked={table.getIsAllRowsSelected()}
        indeterminate={table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        aria-label="Select row"
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        indeterminate={row.getIsSomeSelected()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
  };
}

/** A trailing `'actions'` column rendering a kebab menu built from `getActions(row)`. */
export function createRowActionsColumn<TData>(
  getActions: (row: TData) => TableV2RowAction<TData>[],
  options?: { header?: string; size?: number },
): ColumnDef<TData, unknown> {
  return {
    id: 'actions',
    header: options?.header ?? '',
    size: options?.size ?? 56,
    enableSorting: false,
    enableColumnFilter: false,
    enableResizing: false,
    cell: ({ row }) => (
      <TableV2RowActionsMenu row={row.original} actions={getActions(row.original)} />
    ),
  };
}

/** Sticky inline styles for a pinned column/header cell — offsets by the running width of columns pinned ahead of it. */
export function getPinnedStyles<TData, TValue>(column: Column<TData, TValue>): CSSProperties {
  const isPinned = column.getIsPinned();
  if (!isPinned) return {};

  return {
    position: 'sticky',
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    zIndex: 1,
  };
}
