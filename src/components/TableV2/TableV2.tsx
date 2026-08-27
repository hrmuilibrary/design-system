import {
  forwardRef,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactElement,
  type Ref,
} from 'react';
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type Header,
  type OnChangeFn,
  type Row,
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { DndContext, type DragEndEvent } from '@dnd-kit/core';
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import {
  ArrowDown,
  ArrowUp,
  ChevronsUpDown,
  EyeOff,
  GripVertical,
  MoreHorizontal,
  Pin,
  PinOff,
} from 'lucide-react';
import { cn } from '../../lib/cn';
import { Empty } from '../Empty';
import { InlineAlert } from '../InlineAlert';
import { Skeleton } from '../Skeleton';
import {
  DropdownContent,
  DropdownItem,
  DropdownMenu,
  DropdownSeparator,
  DropdownTrigger,
} from '../DropdownMenu';
import { TableV2ColumnFilter } from './TableV2Filter';
import { TableV2Pagination } from './TableV2Pagination';
import { TableV2Skeleton } from './TableV2Skeleton';
import { TableV2Toolbar } from './TableV2Toolbar';
import { useColumnOrderDnd, useDraggableColumn } from './useTableV2ColumnDnd';
import {
  alignStyles,
  createSelectionColumn,
  densityStyles,
  getPinnedStyles,
} from './TableV2.utils';
import type { TableV2Props } from './TableV2.types';

function useControllableState<T>(
  controlledValue: T | undefined,
  onChange: OnChangeFn<T> | undefined,
  initial: T,
): [T, OnChangeFn<T>] {
  const [internal, setInternal] = useState(initial);
  const value = controlledValue !== undefined ? controlledValue : internal;
  const handleChange: OnChangeFn<T> = (updater) => {
    setInternal((old) =>
      typeof updater === 'function' ? (updater as (old: T) => T)(old) : updater,
    );
    onChange?.(updater);
  };
  return [value, handleChange];
}

interface HeaderCellProps<TData, TValue> {
  header: Header<TData, TValue>;
  density: 'comfortable' | 'compact';
  enableSorting: boolean;
  enableFiltering: boolean;
  enableColumnOrdering: boolean;
  enableColumnResizing: boolean;
  enablePinning: boolean;
  enableColumnVisibility: boolean;
}

const STRUCTURAL_COLUMN_IDS = new Set(['select', 'actions']);

function HeaderCell<TData, TValue>({
  header,
  density,
  enableSorting,
  enableFiltering,
  enableColumnOrdering,
  enableColumnResizing,
  enablePinning,
  enableColumnVisibility,
}: HeaderCellProps<TData, TValue>) {
  const column = header.column;
  const isStructural = STRUCTURAL_COLUMN_IDS.has(column.id);
  const canDrag = enableColumnOrdering && !isStructural;
  const drag = useDraggableColumn(column.id);
  const align = column.columnDef.meta?.align ?? 'left';
  const sortDir = column.getIsSorted();
  const canShowMenu =
    !isStructural &&
    ((enablePinning && column.getCanPin()) || (enableColumnVisibility && column.getCanHide()));

  const label = flexRender(column.columnDef.header, header.getContext());

  return (
    <th
      ref={canDrag ? drag.setNodeRef : undefined}
      colSpan={header.colSpan}
      scope="col"
      style={{
        width: enableColumnResizing ? header.getSize() : undefined,
        ...getPinnedStyles(column),
        ...(canDrag ? drag.style : null),
      }}
      aria-sort={sortDir === 'asc' ? 'ascending' : sortDir === 'desc' ? 'descending' : undefined}
      className={cn(
        'relative px-4 whitespace-nowrap bg-bg-container',
        densityStyles[density],
        alignStyles[align],
      )}
    >
      <div className="flex items-center gap-1">
        {canDrag && (
          <button
            type="button"
            className="shrink-0 cursor-grab touch-none text-fg-tertiary hover:text-fg-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 rounded-sm"
            aria-label={`Reorder ${typeof label === 'string' ? label : column.id} column`}
            {...drag.attributes}
            {...drag.listeners}
          >
            <GripVertical className="h-3.5 w-3.5" />
          </button>
        )}

        {enableSorting && column.getCanSort() ? (
          <button
            type="button"
            onClick={column.getToggleSortingHandler()}
            className="inline-flex items-center gap-1 hover:text-fg-default focus-visible:outline-none min-w-0"
          >
            <span className="truncate">{label}</span>
            <span className="inline-flex shrink-0 text-fg-tertiary">
              {sortDir === 'asc' ? (
                <ArrowUp className="h-3.5 w-3.5" />
              ) : sortDir === 'desc' ? (
                <ArrowDown className="h-3.5 w-3.5" />
              ) : (
                <ChevronsUpDown className="h-3.5 w-3.5" />
              )}
            </span>
          </button>
        ) : (
          <span className="truncate">{label}</span>
        )}

        {canShowMenu && (
          <DropdownMenu>
            <DropdownTrigger>
              <button
                type="button"
                aria-label={`${typeof label === 'string' ? label : column.id} column options`}
                className="ml-auto shrink-0 text-fg-tertiary hover:text-fg-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 rounded-sm"
              >
                <MoreHorizontal className="h-3.5 w-3.5" />
              </button>
            </DropdownTrigger>
            <DropdownContent align="start">
              {enablePinning && column.getCanPin() && (
                <>
                  {column.getIsPinned() !== 'left' && (
                    <DropdownItem
                      icon={<Pin className="h-4 w-4" />}
                      onSelect={() => column.pin('left')}
                    >
                      Pin left
                    </DropdownItem>
                  )}
                  {column.getIsPinned() !== 'right' && (
                    <DropdownItem
                      icon={<Pin className="h-4 w-4" />}
                      onSelect={() => column.pin('right')}
                    >
                      Pin right
                    </DropdownItem>
                  )}
                  {column.getIsPinned() && (
                    <DropdownItem
                      icon={<PinOff className="h-4 w-4" />}
                      onSelect={() => column.pin(false)}
                    >
                      Unpin
                    </DropdownItem>
                  )}
                </>
              )}
              {enablePinning &&
                column.getCanPin() &&
                enableColumnVisibility &&
                column.getCanHide() && <DropdownSeparator />}
              {enableColumnVisibility && column.getCanHide() && (
                <DropdownItem
                  icon={<EyeOff className="h-4 w-4" />}
                  onSelect={() => column.toggleVisibility(false)}
                >
                  Hide column
                </DropdownItem>
              )}
            </DropdownContent>
          </DropdownMenu>
        )}
      </div>

      {enableFiltering && column.getCanFilter() && (
        <div className="mt-2 normal-case" onClick={(event) => event.stopPropagation()}>
          <TableV2ColumnFilter column={column} />
        </div>
      )}

      {enableColumnResizing && column.getCanResize() && (
        <div
          onMouseDown={header.getResizeHandler()}
          onTouchStart={header.getResizeHandler()}
          data-resizing={column.getIsResizing() || undefined}
          className="absolute right-0 top-0 z-10 h-full w-1.5 cursor-col-resize touch-none select-none bg-transparent hover:bg-brand-300 data-[resizing]:bg-brand-500"
        />
      )}
    </th>
  );
}

function MobileRow<TData>({
  row,
  onRowClick,
}: {
  row: Row<TData>;
  onRowClick?: (row: TData) => void;
}) {
  const cells = row.getVisibleCells();
  const leadCell = cells.find((cell) => !STRUCTURAL_COLUMN_IDS.has(cell.column.id));
  const selectCell = cells.find((cell) => cell.column.id === 'select');
  const actionsCell = cells.find((cell) => cell.column.id === 'actions');
  const detailCells = cells.filter(
    (cell) => cell !== leadCell && !STRUCTURAL_COLUMN_IDS.has(cell.column.id),
  );

  return (
    <div
      data-selected={row.getIsSelected() || undefined}
      onClick={onRowClick ? () => onRowClick(row.original) : undefined}
      role={onRowClick ? 'button' : undefined}
      tabIndex={onRowClick ? 0 : undefined}
      className={cn(
        'flex flex-col gap-2 border-b border-border-default p-4',
        onRowClick && 'cursor-pointer hover:bg-bg-container',
        row.getIsSelected() && 'bg-brand-50',
      )}
    >
      <div className="flex items-center gap-2">
        {selectCell && flexRender(selectCell.column.columnDef.cell, selectCell.getContext())}
        <div className="flex-1 min-w-0 text-p-std font-medium text-fg-default truncate">
          {leadCell && flexRender(leadCell.column.columnDef.cell, leadCell.getContext())}
        </div>
        {actionsCell && flexRender(actionsCell.column.columnDef.cell, actionsCell.getContext())}
      </div>
      {detailCells.length > 0 && (
        <dl className="grid grid-cols-2 gap-2">
          {detailCells.map((cell) => {
            const header = cell.column.columnDef.header;
            return (
              <div key={cell.id} className="min-w-0">
                <dt className="text-p-xs text-fg-tertiary uppercase tracking-wide">
                  {typeof header === 'string' ? header : cell.column.id}
                </dt>
                <dd className="text-p-sm text-fg-default truncate">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </dd>
              </div>
            );
          })}
        </dl>
      )}
    </div>
  );
}

function MobileSkeleton({ rowCount }: { rowCount: number }) {
  return (
    <div>
      {Array.from({ length: rowCount }, (_, index) => (
        <div
          key={index}
          aria-hidden={index > 0 || undefined}
          className="flex flex-col gap-2 border-b border-border-default p-4"
        >
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="90%" />
        </div>
      ))}
    </div>
  );
}

function TableV2Inner<TData, TValue = unknown>(
  props: TableV2Props<TData, TValue>,
  ref: Ref<HTMLDivElement>,
) {
  const {
    data,
    columns,
    loading = false,
    error,
    emptyMessage = 'No results',
    getRowId,
    enableSorting = false,
    enableMultiSort = false,
    sorting: controlledSorting,
    onSortingChange: onSortingChangeProp,
    manualSorting = false,
    enableFiltering = false,
    columnFilters: controlledColumnFilters,
    onColumnFiltersChange: onColumnFiltersChangeProp,
    manualFiltering = false,
    enableGlobalFilter = false,
    globalFilter: controlledGlobalFilter,
    onGlobalFilterChange: onGlobalFilterChangeProp,
    enableRowSelection = false,
    enableMultiRowSelection = true,
    rowSelection: controlledRowSelection,
    onRowSelectionChange: onRowSelectionChangeProp,
    enableColumnVisibility = false,
    columnVisibility: controlledColumnVisibility,
    onColumnVisibilityChange: onColumnVisibilityChangeProp,
    enableColumnOrdering = false,
    columnOrder: controlledColumnOrder,
    onColumnOrderChange: onColumnOrderChangeProp,
    enablePinning = false,
    columnPinning: controlledColumnPinning,
    onColumnPinningChange: onColumnPinningChangeProp,
    enableColumnResizing = false,
    columnResizeMode = 'onChange',
    enablePagination = false,
    pageSize = 10,
    pageSizeOptions,
    pagination: controlledPagination,
    onPaginationChange: onPaginationChangeProp,
    locale = 'en-US',
    manualPagination = false,
    pageCount,
    rowCount,
    enableVirtualization = false,
    estimatedRowHeight = 44,
    maxBodyHeight = 480,
    onRowClick,
    toolbar = false,
    toolbarActions,
    searchPlaceholder,
    onRefresh,
    onExport,
    density = 'comfortable',
    stickyHeader = false,
    fillHeight = false,
    wrapperClassName,
    className,
    dataTestId,
  } = props;

  const [sorting, onSortingChange] = useControllableState(
    controlledSorting,
    onSortingChangeProp,
    [],
  );
  const [columnFilters, onColumnFiltersChange] = useControllableState(
    controlledColumnFilters,
    onColumnFiltersChangeProp,
    [],
  );
  const [globalFilter, onGlobalFilterChange] = useControllableState(
    controlledGlobalFilter,
    onGlobalFilterChangeProp,
    '',
  );
  const [rowSelection, onRowSelectionChange] = useControllableState(
    controlledRowSelection,
    onRowSelectionChangeProp,
    {},
  );
  const [columnVisibility, onColumnVisibilityChange] = useControllableState(
    controlledColumnVisibility,
    onColumnVisibilityChangeProp,
    {},
  );
  const [columnOrder, onColumnOrderChange] = useControllableState(
    controlledColumnOrder,
    onColumnOrderChangeProp,
    [],
  );
  const [columnPinning, onColumnPinningChange] = useControllableState(
    controlledColumnPinning,
    onColumnPinningChangeProp,
    {},
  );
  const [pagination, onPaginationChange] = useControllableState(
    controlledPagination,
    onPaginationChangeProp,
    {
      pageIndex: 0,
      pageSize,
    },
  );

  const resolvedColumns = useMemo(() => {
    if (!enableRowSelection || columns.some((column) => column.id === 'select')) return columns;
    return [createSelectionColumn<TData>(), ...columns];
  }, [columns, enableRowSelection]);

  const table = useReactTable({
    data,
    columns: resolvedColumns,
    getRowId,
    state: {
      sorting,
      columnFilters,
      globalFilter,
      rowSelection,
      columnVisibility,
      columnOrder,
      columnPinning,
      pagination,
    },
    onSortingChange,
    onColumnFiltersChange,
    onGlobalFilterChange,
    onRowSelectionChange,
    onColumnVisibilityChange,
    onColumnOrderChange,
    onColumnPinningChange,
    onPaginationChange,
    enableSorting,
    enableMultiSort,
    manualSorting,
    enableFilters: enableFiltering || enableGlobalFilter,
    enableGlobalFilter,
    manualFiltering,
    enableRowSelection,
    enableMultiRowSelection,
    enableColumnResizing,
    columnResizeMode,
    manualPagination,
    pageCount,
    rowCount,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
    getFilteredRowModel: enableFiltering || enableGlobalFilter ? getFilteredRowModel() : undefined,
    getPaginationRowModel: enablePagination ? getPaginationRowModel() : undefined,
  });

  const rows = table.getRowModel().rows;
  const leafColumnCount = table.getVisibleLeafColumns().length;

  const firstRowRef = useRef<HTMLTableRowElement>(null);
  const [measuredRowHeight, setMeasuredRowHeight] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (!enablePagination || enableVirtualization) return;
    const height = firstRowRef.current?.getBoundingClientRect().height;
    if (height && height !== measuredRowHeight) setMeasuredRowHeight(height);
  }, [enablePagination, enableVirtualization, density, rows, measuredRowHeight]);

  const rowHeight = measuredRowHeight ?? estimatedRowHeight;
  const fillerRowHeight =
    enablePagination && !enableVirtualization
      ? Math.max(0, pagination.pageSize - rows.length) * rowHeight
      : 0;

  const currentColumnOrder = useMemo(
    () =>
      columnOrder.length > 0 ? columnOrder : table.getAllLeafColumns().map((column) => column.id),
    [columnOrder, table],
  );

  const dnd = useColumnOrderDnd({ columnOrder: currentColumnOrder, onColumnOrderChange });
  const handleDragEnd = (event: DragEndEvent) => dnd.handleDragEnd(event);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => scrollContainerRef.current,
    estimateSize: () => estimatedRowHeight,
    overscan: 10,
    enabled: enableVirtualization,
  });

  const virtualRows = enableVirtualization ? virtualizer.getVirtualItems() : null;
  const paddingTop = virtualRows && virtualRows.length > 0 ? (virtualRows[0]?.start ?? 0) : 0;
  const paddingBottom =
    virtualRows && virtualRows.length > 0
      ? virtualizer.getTotalSize() - (virtualRows[virtualRows.length - 1]?.end ?? 0)
      : 0;

  const renderRow = (row: Row<TData>, rowRef?: Ref<HTMLTableRowElement>) => (
    <tr
      key={row.id}
      ref={rowRef}
      data-selected={row.getIsSelected() || undefined}
      onClick={onRowClick ? () => onRowClick(row.original) : undefined}
      className={cn('group border-t border-border-default', onRowClick && 'cursor-pointer')}
    >
      {row.getVisibleCells().map((cell) => (
        <td
          key={cell.id}
          style={getPinnedStyles(cell.column)}
          className={cn(
            'bg-bg-default px-4 group-hover:bg-bg-container group-data-[selected]:bg-brand-50',
            densityStyles[density],
            alignStyles[cell.column.columnDef.meta?.align ?? 'left'],
          )}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
      ))}
    </tr>
  );

  const headerRow = (headerGroupId: string, headerGroupHeaders: Header<TData, unknown>[]) => (
    <tr key={headerGroupId}>
      {headerGroupHeaders.map((header) => (
        <HeaderCell
          key={header.id}
          header={header}
          density={density}
          enableSorting={enableSorting}
          enableFiltering={enableFiltering}
          enableColumnOrdering={enableColumnOrdering}
          enableColumnResizing={enableColumnResizing}
          enablePinning={enablePinning}
          enableColumnVisibility={enableColumnVisibility}
        />
      ))}
    </tr>
  );

  const tableEl = (
    <table
      className="w-full border-collapse text-p-std text-fg-default"
      style={{ width: enableColumnResizing ? table.getTotalSize() : '100%' }}
    >
      <thead
        className={cn(
          'text-p-sm font-semibold text-fg-secondary uppercase tracking-wider',
          (stickyHeader || fillHeight) && 'sticky top-0 z-10',
        )}
      >
        {table
          .getHeaderGroups()
          .map((headerGroup) => headerRow(headerGroup.id, headerGroup.headers))}
      </thead>
      <tbody>
        {loading ? (
          <TableV2Skeleton columnCount={leafColumnCount} rowCount={pagination.pageSize} />
        ) : rows.length === 0 ? (
          <tr>
            <td colSpan={leafColumnCount} className="p-0">
              <Empty size="sm" title={emptyMessage as string} />
            </td>
          </tr>
        ) : enableVirtualization && virtualRows ? (
          <>
            {paddingTop > 0 && (
              <tr aria-hidden>
                <td style={{ height: paddingTop }} colSpan={leafColumnCount} />
              </tr>
            )}
            {virtualRows.map((virtualRow) => {
              const row = rows[virtualRow.index];
              return row ? renderRow(row) : null;
            })}
            {paddingBottom > 0 && (
              <tr aria-hidden>
                <td style={{ height: paddingBottom }} colSpan={leafColumnCount} />
              </tr>
            )}
          </>
        ) : (
          <>
            {rows.map((row, index) => renderRow(row, index === 0 ? firstRowRef : undefined))}
            {fillerRowHeight > 0 && (
              <tr aria-hidden>
                <td style={{ height: fillerRowHeight }} colSpan={leafColumnCount} className="p-0" />
              </tr>
            )}
          </>
        )}
      </tbody>
    </table>
  );

  return (
    <div
      ref={ref}
      data-test-id={dataTestId}
      className={cn(
        'w-full rounded-lg border border-border-default bg-bg-default',
        fillHeight && 'h-full flex flex-col',
        wrapperClassName,
        className,
      )}
    >
      {toolbar === false
        ? null
        : (toolbar ?? (
            <TableV2Toolbar
              table={table}
              enableGlobalFilter={enableGlobalFilter}
              enableColumnVisibility={enableColumnVisibility}
              searchPlaceholder={searchPlaceholder}
              onRefresh={onRefresh}
              onExport={onExport}
              actions={toolbarActions}
            />
          ))}

      {error ? (
        <div className="p-4">
          <InlineAlert variant="danger" title="Couldn't load data" description={error} />
        </div>
      ) : (
        <>
          <div
            className={cn('hidden', fillHeight ? 'md:flex md:flex-col md:flex-1 md:min-h-0' : 'md:block')}
          >
            <div
              ref={scrollContainerRef}
              className={cn(
                'w-full overflow-auto',
                toolbar === false ? 'rounded-lg' : 'rounded-b-lg',
                fillHeight && 'flex-1 min-h-0',
              )}
              style={
                fillHeight
                  ? undefined
                  : enableVirtualization || stickyHeader
                    ? { maxHeight: maxBodyHeight }
                    : undefined
              }
            >
              {enableColumnOrdering ? (
                <DndContext
                  sensors={dnd.sensors}
                  collisionDetection={dnd.collisionDetection}
                  modifiers={dnd.modifiers}
                  onDragEnd={handleDragEnd}
                >
                  <SortableContext
                    items={currentColumnOrder}
                    strategy={horizontalListSortingStrategy}
                  >
                    {tableEl}
                  </SortableContext>
                </DndContext>
              ) : (
                tableEl
              )}
            </div>
          </div>

          <div className="md:hidden">
            {loading ? (
              <MobileSkeleton rowCount={pagination.pageSize} />
            ) : rows.length === 0 ? (
              <Empty size="sm" title={emptyMessage as string} />
            ) : (
              rows.map((row) => <MobileRow key={row.id} row={row} onRowClick={onRowClick} />)
            )}
          </div>
        </>
      )}

      {enablePagination && !error && (
        <TableV2Pagination table={table} pageSizeOptions={pageSizeOptions} locale={locale} />
      )}
    </div>
  );
}

type TableV2Component = (<TData, TValue = unknown>(
  props: TableV2Props<TData, TValue> & { ref?: Ref<HTMLDivElement> },
) => ReactElement) & { displayName?: string };

export const TableV2 = forwardRef(TableV2Inner) as unknown as TableV2Component;
TableV2.displayName = 'TableV2';
