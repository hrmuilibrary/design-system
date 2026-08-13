import type { ReactNode } from 'react';
import type {
  Column,
  ColumnDef,
  ColumnFiltersState,
  ColumnOrderState,
  ColumnPinningState,
  ColumnResizeMode,
  OnChangeFn,
  PaginationState,
  Row,
  RowSelectionState,
  SortingState,
  VisibilityState,
} from '@tanstack/react-table';
import type { BaseProps } from '../../types';

export type TableV2Density = 'comfortable' | 'compact';
export type TableV2Align = 'left' | 'center' | 'right';
export type TableV2FilterVariant = 'text' | 'select' | 'date' | 'custom';

export interface TableV2FilterOption {
  label: ReactNode;
  value: string;
}

/**
 * Augments TanStack Table's per-column `meta` with the fields TableV2 reads
 * to render header alignment and the per-column filter row. Declared here
 * (not per-consumer) so every TableV2 column definition gets it for free.
 */
declare module '@tanstack/react-table' {
  interface ColumnMeta<TData, TValue> {
    align?: TableV2Align;
    filterVariant?: TableV2FilterVariant;
    /** Options for `filterVariant: 'select'`. */
    filterOptions?: TableV2FilterOption[];
    /** Custom filter input for `filterVariant: 'custom'`. Receives the column and renders its own control. */
    filterComponent?: (column: Column<TData, TValue>) => ReactNode;
  }
}

export interface TableV2RowAction<TData> {
  label: ReactNode;
  icon?: ReactNode;
  onSelect: (row: TData) => void;
  destructive?: boolean;
  disabled?: (row: TData) => boolean;
}

export interface TableV2Props<TData, TValue = unknown> extends BaseProps {
  data: TData[];
  columns: ColumnDef<TData, TValue>[];

  loading?: boolean;
  /** Renders an inline error state in place of the table body. Clears once falsy again. */
  error?: ReactNode;
  emptyMessage?: ReactNode;

  /** Stable row identity, e.g. for row selection keys. Defaults to row index. */
  getRowId?: (row: TData, index: number) => string;

  // Sorting
  enableSorting?: boolean;
  enableMultiSort?: boolean;
  sorting?: SortingState;
  onSortingChange?: OnChangeFn<SortingState>;
  manualSorting?: boolean;

  // Filtering
  /** Renders the per-column filter row. Requires `meta.filterVariant` on the columns that should be filterable. */
  enableFiltering?: boolean;
  columnFilters?: ColumnFiltersState;
  onColumnFiltersChange?: OnChangeFn<ColumnFiltersState>;
  manualFiltering?: boolean;
  enableGlobalFilter?: boolean;
  globalFilter?: string;
  onGlobalFilterChange?: OnChangeFn<string>;

  // Row selection — combine with `createSelectionColumn()` prepended to `columns`,
  // or simply flip this on and TableV2 prepends one for you when absent.
  enableRowSelection?: boolean | ((row: Row<TData>) => boolean);
  enableMultiRowSelection?: boolean;
  rowSelection?: RowSelectionState;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;

  // Column visibility
  enableColumnVisibility?: boolean;
  columnVisibility?: VisibilityState;
  onColumnVisibilityChange?: OnChangeFn<VisibilityState>;

  // Column ordering (drag-and-drop)
  enableColumnOrdering?: boolean;
  columnOrder?: ColumnOrderState;
  onColumnOrderChange?: OnChangeFn<ColumnOrderState>;

  // Column pinning
  enablePinning?: boolean;
  columnPinning?: ColumnPinningState;
  onColumnPinningChange?: OnChangeFn<ColumnPinningState>;

  // Column resizing
  enableColumnResizing?: boolean;
  columnResizeMode?: ColumnResizeMode;

  // Pagination — client-side by default; pass `manualPagination` + `pageCount`/`rowCount`
  // and drive `pagination`/`onPaginationChange` yourself for server-side pagination.
  enablePagination?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];
  pagination?: PaginationState;
  onPaginationChange?: OnChangeFn<PaginationState>;
  manualPagination?: boolean;
  pageCount?: number;
  rowCount?: number;

  // Virtualization — for large datasets; renders a fixed-height scroll viewport.
  enableVirtualization?: boolean;
  estimatedRowHeight?: number;
  /**
   * Scroll viewport height. Applied to the outer scroll container whenever
   * `enableVirtualization` or `stickyHeader` is on, since both need a
   * bounded, scrollable ancestor to have any visible effect.
   * @default 480
   */
  maxBodyHeight?: number | string;

  onRowClick?: (row: TData) => void;

  /** Replaces the default toolbar entirely. Pass `false` to render no toolbar. */
  toolbar?: ReactNode | false;
  /** Extra actions rendered at the end of the default toolbar, alongside export/column-visibility. Ignored when `toolbar` is set. */
  toolbarActions?: ReactNode;
  searchPlaceholder?: string;
  onRefresh?: () => void;
  onExport?: () => void;

  density?: TableV2Density;
  stickyHeader?: boolean;
  wrapperClassName?: string;
  className?: string;
}
