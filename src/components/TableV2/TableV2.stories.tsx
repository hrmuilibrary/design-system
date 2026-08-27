import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ColumnDef } from '@tanstack/react-table';
import { BadgeCheck, Mail, Pencil, Trash2, Copy, Archive } from 'lucide-react';
import { TableV2 } from './TableV2';
import { createRowActionsColumn } from './TableV2.utils';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Link } from '../Link';
import { Progress } from '../Progress';
import { Status } from '../Status';
import type { StatusVariant } from '../Status';

interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
  department: 'Engineering' | 'Design' | 'People' | 'Finance' | 'Sales';
  status: 'Active' | 'On leave' | 'Inactive';
  verified: boolean;
  progress: number;
  joinDate: string;
}

const FIRST_NAMES = [
  'Ana',
  'Davit',
  'Lilit',
  'Narek',
  'Mariam',
  'Gor',
  'Sona',
  'Vahe',
  'Nane',
  'Armen',
];
const LAST_NAMES = ['Petrosyan', 'Sargsyan', 'Hovhannisyan', 'Grigoryan', 'Avetisyan', 'Manukyan'];
const ROLES = [
  'Engineering Manager',
  'Product Designer',
  'Recruiter',
  'Backend Engineer',
  'Finance Analyst',
  'Sales Lead',
];
const DEPARTMENTS: Employee['department'][] = [
  'Engineering',
  'Design',
  'People',
  'Finance',
  'Sales',
];
const STATUSES: Employee['status'][] = ['Active', 'On leave', 'Inactive'];

function buildEmployees(count: number): Employee[] {
  return Array.from({ length: count }, (_, i) => ({
    id: String(i + 1),
    name: `${FIRST_NAMES[i % FIRST_NAMES.length]} ${LAST_NAMES[i % LAST_NAMES.length]}`,
    email: `user${i + 1}@company.com`,
    role: ROLES[i % ROLES.length]!,
    department: DEPARTMENTS[i % DEPARTMENTS.length]!,
    status: STATUSES[i % STATUSES.length]!,
    verified: i % 3 !== 0,
    progress: (i * 7) % 100,
    joinDate: `202${1 + (i % 4)}-0${1 + (i % 9)}-1${i % 9}`,
  }));
}

const employees = buildEmployees(6);
const manyEmployees = buildEmployees(48);
const hugeEmployees = buildEmployees(5000);

const statusVariant: Record<Employee['status'], StatusVariant> = {
  Active: 'success',
  'On leave': 'warning',
  Inactive: 'disabled',
};

const baseColumns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    meta: { filterVariant: 'text' },
  },
  {
    accessorKey: 'role',
    header: 'Role',
    meta: { filterVariant: 'text' },
  },
  {
    accessorKey: 'department',
    header: 'Department',
    meta: {
      filterVariant: 'select',
      filterOptions: DEPARTMENTS.map((d) => ({ label: d, value: d })),
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    meta: {
      align: 'right',
      filterVariant: 'select',
      filterOptions: STATUSES.map((s) => ({ label: s, value: s })),
    },
    cell: ({ getValue }) => (
      <Status variant={statusVariant[getValue<Employee['status']>()]} dot size="sm">
        {getValue<Employee['status']>()}
      </Status>
    ),
  },
];

const meta = {
  title: 'Components/TableV2',
  component: TableV2,
  // Docs page is authored by hand in TableV2.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof TableV2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => <TableV2 data={employees} columns={baseColumns} toolbar={false} />,
};

export const Sorting: Story = {
  render: () => <TableV2 data={employees} columns={baseColumns} enableSorting enableMultiSort />,
};

export const Pagination: Story = {
  render: () => (
    <TableV2
      data={manyEmployees}
      columns={baseColumns}
      enableSorting
      enablePagination
      pageSize={10}
    />
  ),
};

export const LocalizedPagination: Story = {
  name: 'Pagination (locale)',
  render: () => (
    <TableV2
      data={manyEmployees}
      columns={baseColumns}
      enablePagination
      pageSize={10}
      locale="hy-AM"
    />
  ),
};

export const ServerPagination: Story = {
  render: function ServerPaginationStory() {
    const [pageIndex, setPageIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const pageSize = 10;
    const pageStart = pageIndex * pageSize;
    const page = manyEmployees.slice(pageStart, pageStart + pageSize);

    return (
      <TableV2
        data={page}
        columns={baseColumns}
        enablePagination
        manualPagination
        pageCount={Math.ceil(manyEmployees.length / pageSize)}
        rowCount={manyEmployees.length}
        pagination={{ pageIndex, pageSize }}
        onPaginationChange={(updater) => {
          const next = typeof updater === 'function' ? updater({ pageIndex, pageSize }) : updater;
          setLoading(true);
          setPageIndex(next.pageIndex);
          // Simulates a network round-trip for the newly requested page.
          setTimeout(() => setLoading(false), 400);
        }}
        loading={loading}
      />
    );
  },
};

export const Filtering: Story = {
  render: () => (
    <TableV2
      data={manyEmployees}
      columns={baseColumns}
      enableFiltering
      enableGlobalFilter
      enablePagination
    />
  ),
};

export const RowSelection: Story = {
  render: function RowSelectionStory() {
    const [selection, setSelection] = useState({});
    return (
      <div className="flex flex-col gap-3">
        <p className="text-p-sm text-fg-secondary">Selected: {Object.keys(selection).length}</p>
        <TableV2
          data={employees}
          columns={baseColumns}
          enableRowSelection
          rowSelection={selection}
          onRowSelectionChange={setSelection}
        />
      </div>
    );
  },
};

export const Loading: Story = {
  render: () => <TableV2 data={[]} columns={baseColumns} loading />,
};

export const Empty: Story = {
  render: () => (
    <TableV2 data={[]} columns={baseColumns} emptyMessage="No employees match your filters" />
  ),
};

export const ErrorState: Story = {
  render: () => (
    <TableV2
      data={[]}
      columns={baseColumns}
      error="Failed to load employees. Check your connection and try again."
      enableColumnVisibility
      enableGlobalFilter
    />
  ),
};

export const Mobile: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The mobile card layout is driven by the real browser viewport width (Tailwind `md:` breakpoint), not container width. Shrink this preview window below 768px to see it.',
      },
    },
  },
  render: () => <TableV2 data={employees} columns={baseColumns} enableRowSelection />,
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-bg-default p-6 rounded-lg">
      <TableV2 data={employees} columns={baseColumns} enableSorting enablePagination pageSize={5} />
    </div>
  ),
};

export const Virtualized: Story = {
  render: () => (
    <TableV2
      data={hugeEmployees}
      columns={baseColumns}
      enableSorting
      enableVirtualization
      maxBodyHeight={480}
    />
  ),
};

export const StickyHeader: Story = {
  name: 'Sticky header (bounded scroll height)',
  render: () => <TableV2 data={manyEmployees} columns={baseColumns} enableSorting stickyHeader />,
};

export const FillHeight: Story = {
  name: 'Fill height (pinned footer)',
  parameters: {
    docs: {
      description: {
        story:
          '`fillHeight` stretches the table to its parent\'s height, scrolling rows internally with a pinned header and pinning the pagination footer to the bottom. The parent must provide a definite height — here a 500px wrapper.',
      },
    },
  },
  render: () => (
    <div className="h-[500px]">
      <TableV2
        data={manyEmployees}
        columns={baseColumns}
        enableSorting
        enablePagination
        pageSize={5}
        fillHeight
      />
    </div>
  ),
};

const customCellColumns: ColumnDef<Employee>[] = [
  {
    accessorKey: 'name',
    header: 'Employee',
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar name={row.original.name} size="sm" />
        <div className="min-w-0">
          <div className="text-p-std font-medium text-fg-default truncate">{row.original.name}</div>
          <Link
            href={`mailto:${row.original.email}`}
            variant="p-sm"
            leftIcon={<Mail className="h-3.5 w-3.5" />}
          >
            {row.original.email}
          </Link>
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'department',
    header: 'Department',
    cell: ({ getValue }) => <Badge variant="brand">{getValue<string>()}</Badge>,
  },
  {
    accessorKey: 'verified',
    header: 'Verified',
    meta: { align: 'center' },
    cell: ({ getValue }) =>
      getValue<boolean>() ? (
        <BadgeCheck className="mx-auto h-5 w-5 text-green-600" aria-label="Verified" />
      ) : null,
  },
  {
    accessorKey: 'progress',
    header: 'Onboarding',
    cell: ({ getValue }) => (
      <Progress variant="linear" size="sm" percent={getValue<number>()} className="w-32" />
    ),
  },
  {
    id: 'view',
    header: '',
    cell: () => (
      <Button variant="tertiary" size="sm">
        View
      </Button>
    ),
  },
];

export const CustomCells: Story = {
  render: () => <TableV2 data={employees} columns={customCellColumns} />,
};

const rowActionsColumns: ColumnDef<Employee>[] = [
  ...baseColumns,
  createRowActionsColumn<Employee>((employee) => [
    {
      label: 'Edit',
      icon: <Pencil className="h-4 w-4" />,
      onSelect: (row) => alert(`Edit ${row.name}`),
    },
    {
      label: 'Duplicate',
      icon: <Copy className="h-4 w-4" />,
      onSelect: (row) => alert(`Duplicate ${row.name}`),
    },
    {
      label: 'Archive',
      icon: <Archive className="h-4 w-4" />,
      onSelect: (row) => alert(`Archive ${row.name}`),
    },
    {
      label: 'Delete',
      icon: <Trash2 className="h-4 w-4" />,
      destructive: true,
      onSelect: (row) => alert(`Delete ${row.name}`),
      disabled: () => employee.status === 'Inactive',
    },
  ]),
];

export const RowActions: Story = {
  render: () => <TableV2 data={employees} columns={rowActionsColumns} />,
};

export const AllFeatures: Story = {
  name: 'Kitchen sink (all features)',
  render: () => (
    <TableV2
      data={manyEmployees}
      columns={rowActionsColumns}
      enableSorting
      enableMultiSort
      enableFiltering
      enableGlobalFilter
      enableRowSelection
      enableColumnVisibility
      enableColumnOrdering
      enablePinning
      enableColumnResizing
      enablePagination
      pageSize={10}
      onRefresh={() => alert('Refresh')}
      onExport={() => alert('Export')}
    />
  ),
};
