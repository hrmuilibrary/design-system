import type { Column } from '@tanstack/react-table';
import { Input } from '../Input';
import { SelectV2 } from '../SelectV2';

export interface TableV2ColumnFilterProps<TData, TValue> {
  column: Column<TData, TValue>;
}

/**
 * Renders the header filter-row input for a single column, driven by
 * `column.columnDef.meta.filterVariant`. Columns without a `filterVariant`
 * render nothing, leaving their filter cell empty.
 */
export function TableV2ColumnFilter<TData, TValue>({
  column,
}: TableV2ColumnFilterProps<TData, TValue>) {
  const variant = column.columnDef.meta?.filterVariant;
  if (!variant) return null;

  const value = column.getFilterValue();

  if (variant === 'custom') {
    return <>{column.columnDef.meta?.filterComponent?.(column) ?? null}</>;
  }

  if (variant === 'select') {
    return (
      <SelectV2
        size="sm"
        searchable={false}
        required={false}
        options={column.columnDef.meta?.filterOptions ?? []}
        placeholder="All"
        value={typeof value === 'string' ? value : undefined}
        onChange={(next) => column.setFilterValue(next || undefined)}
      />
    );
  }

  return (
    <Input
      size="sm"
      type={variant === 'date' ? 'date' : 'text'}
      aria-label={`Filter by ${column.id}`}
      placeholder={variant === 'date' ? undefined : 'Filter...'}
      value={typeof value === 'string' ? value : ''}
      onChange={(event) => column.setFilterValue(event.target.value || undefined)}
    />
  );
}
