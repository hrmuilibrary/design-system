import { forwardRef } from 'react';
import { ArrowUp, ArrowDown, ChevronsUpDown } from 'lucide-react';
import { cn } from '../../lib/cn';
import type {
  TableProps,
  THeadProps,
  TBodyProps,
  TRProps,
  THProps,
  TDProps,
  TableAlign,
  DataTableProps,
} from './Table.types';

const densityStyles: Record<NonNullable<TableProps['density']>, string> = {
  comfortable: '[&_td]:py-3 [&_th]:py-3',
  compact: '[&_td]:py-2 [&_th]:py-2',
};

const alignStyles: Record<TableAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const Table = forwardRef<HTMLTableElement, TableProps>(function Table(
  {
    density = 'comfortable',
    striped = false,
    hoverable = true,
    stickyHeader = false,
    wrapperClassName,
    className,
    children,
    dataTestId,
    ...rest
  },
  ref,
) {
  return (
    <div
      data-test-id={dataTestId}
      className={cn(
        'w-full overflow-x-auto rounded-lg border border-border-default bg-bg-default',
        wrapperClassName,
      )}
    >
      <table
        ref={ref}
        className={cn(
          'w-full border-collapse text-p-std text-fg-default',
          densityStyles[density],
          className,
        )}
        data-striped={striped || undefined}
        data-hoverable={hoverable || undefined}
        data-sticky={stickyHeader || undefined}
        {...rest}
      >
        {children}
      </table>
    </div>
  );
});

export const THead = forwardRef<HTMLTableSectionElement, THeadProps>(function THead(
  { className, children, dataTestId, ...rest },
  ref,
) {
  return (
    <thead
      ref={ref}
      data-test-id={dataTestId}
      className={cn(
        'bg-bg-container text-p-sm font-semibold text-fg-secondary uppercase tracking-wider',
        '[[data-sticky]_&]:sticky [[data-sticky]_&]:top-0 [[data-sticky]_&]:z-10',
        className,
      )}
      {...rest}
    >
      {children}
    </thead>
  );
});

export const TBody = forwardRef<HTMLTableSectionElement, TBodyProps>(function TBody(
  { className, children, dataTestId, ...rest },
  ref,
) {
  return (
    <tbody
      ref={ref}
      data-test-id={dataTestId}
      className={cn(
        '[&>tr]:border-t [&>tr]:border-border-default',
        '[[data-striped]_&>tr:nth-child(even)]:bg-bg-container',
        '[[data-hoverable]_&>tr:hover]:bg-bg-container',
        className,
      )}
      {...rest}
    >
      {children}
    </tbody>
  );
});

export const TR = forwardRef<HTMLTableRowElement, TRProps>(function TR(
  { className, children, dataTestId, ...rest },
  ref,
) {
  return (
    <tr ref={ref} data-test-id={dataTestId} className={className} {...rest}>
      {children}
    </tr>
  );
});

export const TH = forwardRef<HTMLTableCellElement, THProps>(function TH(
  {
    sortable = false,
    sortDir = null,
    onSortChange,
    align = 'left',
    className,
    children,
    dataTestId,
    ...rest
  },
  ref,
) {
  const content = (
    <>
      {children}
      {sortable && (
        <span className="inline-flex ml-1 align-middle text-fg-tertiary">
          {sortDir === 'asc' ? (
            <ArrowUp className="h-3.5 w-3.5" />
          ) : sortDir === 'desc' ? (
            <ArrowDown className="h-3.5 w-3.5" />
          ) : (
            <ChevronsUpDown className="h-3.5 w-3.5" />
          )}
        </span>
      )}
    </>
  );

  return (
    <th
      ref={ref}
      scope="col"
      data-test-id={dataTestId}
      className={cn('px-4 whitespace-nowrap', alignStyles[align], className)}
      aria-sort={sortDir === 'asc' ? 'ascending' : sortDir === 'desc' ? 'descending' : undefined}
      {...rest}
    >
      {sortable ? (
        <button
          type="button"
          onClick={() => {
            const next = sortDir === 'asc' ? 'desc' : sortDir === 'desc' ? null : 'asc';
            onSortChange?.(next);
          }}
          className="inline-flex items-center hover:text-fg-default focus-visible:outline-none"
        >
          {content}
        </button>
      ) : (
        content
      )}
    </th>
  );
});

export const TD = forwardRef<HTMLTableCellElement, TDProps>(function TD(
  { align = 'left', className, children, dataTestId, ...rest },
  ref,
) {
  return (
    <td
      ref={ref}
      data-test-id={dataTestId}
      className={cn('px-4', alignStyles[align], className)}
      {...rest}
    >
      {children}
    </td>
  );
});

export function DataTable<T>({
  columns,
  rows,
  rowKey,
  empty = 'No results',
  density,
  striped,
  hoverable,
  sortKey,
  sortDir = null,
  onSortChange,
  onRowClick,
  className,
  dataTestId,
}: DataTableProps<T>) {
  return (
    <Table
      density={density}
      striped={striped}
      hoverable={hoverable}
      className={className}
      dataTestId={dataTestId}
    >
      <THead>
        <TR>
          {columns.map((col) => (
            <TH
              key={col.key}
              align={col.align}
              sortable={col.sortable}
              sortDir={sortKey === col.key ? sortDir : null}
              onSortChange={(d) => onSortChange?.(col.key, d)}
            >
              {col.header}
            </TH>
          ))}
        </TR>
      </THead>
      <TBody>
        {rows.length === 0 ? (
          <TR>
            <TD
              colSpan={columns.length}
              className="text-center text-fg-tertiary py-10"
              align="center"
            >
              {empty}
            </TD>
          </TR>
        ) : (
          rows.map((row, i) => (
            <TR
              key={rowKey(row, i)}
              onClick={onRowClick ? () => onRowClick(row) : undefined}
              className={onRowClick ? 'cursor-pointer' : undefined}
            >
              {columns.map((col) => (
                <TD key={col.key} align={col.align}>
                  {col.render ? col.render(row) : col.accessor ? col.accessor(row) : null}
                </TD>
              ))}
            </TR>
          ))
        )}
      </TBody>
    </Table>
  );
}
