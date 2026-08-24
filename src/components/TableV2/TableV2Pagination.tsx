import type { Table } from '@tanstack/react-table';
import { Pagination } from '../Pagination';
import { SelectV2 } from '../SelectV2';
import { TABLE_V2_PAGINATION_TRANSLATIONS } from './TableV2Pagination.i18n';
import type { TranslationLocale } from '../../types';

export interface TableV2PaginationProps<TData> {
  table: Table<TData>;
  pageSizeOptions?: number[];
  locale?: TranslationLocale;
}

/** Footer bar: page-size select, row-range summary, and page controls. Works for both client and manual (server) pagination. */
export function TableV2Pagination<TData>({
  table,
  pageSizeOptions = [10, 25, 50, 100],
  locale = 'en-US',
}: TableV2PaginationProps<TData>) {
  const { pageIndex, pageSize } = table.getState().pagination;
  const totalRows = table.options.rowCount ?? table.getPrePaginationRowModel().rows.length;
  const pageCount = Math.max(1, table.getPageCount());
  const rangeStart = totalRows === 0 ? 0 : pageIndex * pageSize + 1;
  const rangeEnd = Math.min(totalRows, (pageIndex + 1) * pageSize);
  const t = TABLE_V2_PAGINATION_TRANSLATIONS[locale];

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 p-3 border-t border-border-default">
      <div className="flex items-center gap-2">
        <span className="text-p-sm text-fg-secondary whitespace-nowrap">{t.rowsPerPage}</span>
        <SelectV2
          size="sm"
          menuPlacement="top"
          searchable={false}
          required={false}
          locale={locale}
          value={pageSize}
          onChange={(value) => value !== undefined && table.setPageSize(Number(value))}
          options={pageSizeOptions.map((size) => ({ value: size, label: String(size) }))}
        />
      </div>

      <span className="text-p-sm text-fg-secondary whitespace-nowrap">
        {totalRows === 0 ? t.noResults : t.rangeSummary(rangeStart, rangeEnd, totalRows)}
      </span>

      <Pagination
        page={pageIndex + 1}
        pageCount={pageCount}
        onPageChange={(page) => table.setPageIndex(page - 1)}
      />
    </div>
  );
}
