import type { ReactNode } from 'react';
import type { Table } from '@tanstack/react-table';
import { Download, RefreshCw, Search } from 'lucide-react';
import { Button } from '../Button';
import { Input } from '../Input';
import { TableV2ColumnVisibilityMenu } from './TableV2ColumnVisibility';

export interface TableV2ToolbarProps<TData> {
  table: Table<TData>;
  enableGlobalFilter?: boolean;
  enableColumnVisibility?: boolean;
  searchPlaceholder?: string;
  onRefresh?: () => void;
  onExport?: () => void;
  actions?: ReactNode;
}

/** Default toolbar: global search, refresh, export, column visibility, and a custom actions slot. Replace entirely via the `toolbar` prop on `<TableV2>`. */
export function TableV2Toolbar<TData>({
  table,
  enableGlobalFilter,
  enableColumnVisibility,
  searchPlaceholder,
  onRefresh,
  onExport,
  actions,
}: TableV2ToolbarProps<TData>) {
  return (
    <div className="flex flex-wrap items-center gap-2 p-3 border-b border-border-default">
      {enableGlobalFilter && (
        <Input
          size="sm"
          leftIcon={<Search className="h-4 w-4" />}
          placeholder={searchPlaceholder ?? 'Search...'}
          aria-label="Search"
          value={String(table.getState().globalFilter ?? '')}
          onChange={(event) => table.setGlobalFilter(event.target.value)}
          wrapperClassName="max-w-xs w-full"
        />
      )}

      <div className="ml-auto flex items-center gap-2">
        {onRefresh && (
          <Button
            variant="secondary"
            size="sm"
            iconOnly
            aria-label="Refresh"
            leftIcon={<RefreshCw className="h-4 w-4" />}
            onClick={onRefresh}
          />
        )}
        {onExport && (
          <Button variant="secondary" size="sm" leftIcon={<Download className="h-4 w-4" />} onClick={onExport}>
            Export
          </Button>
        )}
        {enableColumnVisibility && <TableV2ColumnVisibilityMenu table={table} />}
        {actions}
      </div>
    </div>
  );
}
