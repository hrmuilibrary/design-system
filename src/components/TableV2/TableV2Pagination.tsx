import type { Table } from '@tanstack/react-table';
import { Pagination } from '../Pagination';
import { Select } from '../Select';

export interface TableV2PaginationProps<TData> {
  table: Table<TData>;
  pageSizeOptions?: number[];
}

/** Footer bar: page-size select, row-range summary, and page controls. Works for both client and manual (server) pagination. */
export function TableV2Pagination<TData>({
  table,
  pageSizeOptions = [10, 25, 50, 100],
}: TableV2PaginationProps<TData>) {
  const { pageIndex, pageSize } = table.getState().pagination;
  const totalRows = table.options.rowCount ?? table.getPrePaginationRowModel().rows.length;
  const pageCount = Math.max(1, table.getPageCount());
  const rangeStart = totalRows === 0 ? 0 : pageIndex * pageSize + 1;
  const rangeEnd = Math.min(totalRows, (pageIndex + 1) * pageSize);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 p-3 border-t border-border-default">
      <div className="flex items-center gap-2">
        <span className="text-p-sm text-fg-secondary">Rows per page</span>
        <Select
          size="sm"
          value={String(pageSize)}
          onChange={(value) => table.setPageSize(Number(value))}
          options={pageSizeOptions.map((size) => ({ value: String(size), label: String(size) }))}
        />
      </div>

      <span className="text-p-sm text-fg-secondary">
        {totalRows === 0 ? 'No results' : `${rangeStart}–${rangeEnd} of ${totalRows}`}
      </span>

      <Pagination
        page={pageIndex + 1}
        pageCount={pageCount}
        onPageChange={(page) => table.setPageIndex(page - 1)}
      />
    </div>
  );
}
