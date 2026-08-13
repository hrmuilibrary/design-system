import type { Table } from '@tanstack/react-table';
import { Columns3 } from 'lucide-react';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { DropdownContent, DropdownMenu, DropdownTrigger } from '../DropdownMenu';

export interface TableV2ColumnVisibilityMenuProps<TData> {
  table: Table<TData>;
}

function columnLabel<TData>(column: ReturnType<Table<TData>['getAllLeafColumns']>[number]) {
  const { header } = column.columnDef;
  return typeof header === 'string' ? header : column.id;
}

/** Dropdown letting users toggle which columns are visible. Skips columns marked `enableHiding: false`. */
export function TableV2ColumnVisibilityMenu<TData>({ table }: TableV2ColumnVisibilityMenuProps<TData>) {
  const columns = table.getAllLeafColumns().filter((column) => column.getCanHide());

  return (
    <DropdownMenu>
      <DropdownTrigger>
        <Button variant="secondary" size="sm" leftIcon={<Columns3 className="h-4 w-4" />}>
          Columns
        </Button>
      </DropdownTrigger>
      <DropdownContent align="end">
        {columns.map((column) => (
          <div key={column.id} className="px-3 py-1.5 hover:bg-bg-subtle">
            <Checkbox
              size="sm"
              label={columnLabel(column)}
              checked={column.getIsVisible()}
              onChange={() => column.toggleVisibility()}
            />
          </div>
        ))}
      </DropdownContent>
    </DropdownMenu>
  );
}
