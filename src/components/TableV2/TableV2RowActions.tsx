import { MoreVertical } from 'lucide-react';
import { Button } from '../Button';
import { DropdownContent, DropdownItem, DropdownMenu, DropdownTrigger } from '../DropdownMenu';
import type { TableV2RowAction } from './TableV2.types';

export interface TableV2RowActionsMenuProps<TData> {
  row: TData;
  actions: TableV2RowAction<TData>[];
}

/** Kebab-menu action list for a single row. Used by `createRowActionsColumn`. */
export function TableV2RowActionsMenu<TData>({ row, actions }: TableV2RowActionsMenuProps<TData>) {
  if (actions.length === 0) return null;

  return (
    <DropdownMenu>
      <DropdownTrigger>
        <Button
          variant="tertiary"
          size="sm"
          iconOnly
          aria-label="Row actions"
          leftIcon={<MoreVertical className="h-4 w-4" />}
        />
      </DropdownTrigger>
      <DropdownContent align="end">
        {actions.map((action, index) => (
          <DropdownItem
            key={index}
            icon={action.icon}
            destructive={action.destructive}
            disabled={action.disabled?.(row)}
            onSelect={() => action.onSelect(row)}
          >
            {action.label}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownMenu>
  );
}
