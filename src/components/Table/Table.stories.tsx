import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState, type ComponentProps } from 'react';
import { Table, THead, TBody, TR, TH, TD, DataTable } from './Table';
import type { SortDir, TableColumn } from './Table.types';

interface Person {
  id: string;
  name: string;
  role: string;
  department: string;
  status: 'Active' | 'On leave' | 'Inactive';
}

const people: Person[] = [
  {
    id: '1',
    name: 'Ana Petrosyan',
    role: 'Engineering Manager',
    department: 'Engineering',
    status: 'Active',
  },
  {
    id: '2',
    name: 'Davit Sargsyan',
    role: 'Product Designer',
    department: 'Design',
    status: 'Active',
  },
  {
    id: '3',
    name: 'Lilit Hovhannisyan',
    role: 'Recruiter',
    department: 'People',
    status: 'On leave',
  },
  {
    id: '4',
    name: 'Narek Grigoryan',
    role: 'Backend Engineer',
    department: 'Engineering',
    status: 'Active',
  },
  {
    id: '5',
    name: 'Mariam Avetisyan',
    role: 'Finance Analyst',
    department: 'Finance',
    status: 'Inactive',
  },
];

const meta = {
  title: 'Components/Table',
  component: Table,
  // Docs page is authored by hand in Table.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    density: {
      control: 'select',
      options: ['comfortable', 'compact'],
    },
  },
  args: {
    density: 'comfortable',
    striped: false,
    hoverable: true,
    stickyHeader: false,
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

function renderBasicTable(args: ComponentProps<typeof Table>) {
  return (
    <Table {...args}>
      <THead>
        <TR>
          <TH>Name</TH>
          <TH>Role</TH>
          <TH>Department</TH>
          <TH align="right">Status</TH>
        </TR>
      </THead>
      <TBody>
        {people.map((person) => (
          <TR key={person.id}>
            <TD>{person.name}</TD>
            <TD>{person.role}</TD>
            <TD>{person.department}</TD>
            <TD align="right">{person.status}</TD>
          </TR>
        ))}
      </TBody>
    </Table>
  );
}

export const Primary: Story = {
  render: renderBasicTable,
};

export const Striped: Story = {
  args: { striped: true },
  render: renderBasicTable,
};

export const Compact: Story = {
  args: { density: 'compact' },
  render: renderBasicTable,
};

export const NoHover: Story = {
  name: 'Hover disabled',
  args: { hoverable: false },
  render: renderBasicTable,
};

export const StickyHeader: Story = {
  args: { stickyHeader: true },
  render: (args) => (
    <div className="h-48 overflow-y-auto">
      <Table {...args}>
        <THead>
          <TR>
            <TH>Name</TH>
            <TH>Role</TH>
            <TH>Department</TH>
            <TH align="right">Status</TH>
          </TR>
        </THead>
        <TBody>
          {[...people, ...people].map((person, i) => (
            <TR key={`${person.id}-${i}`}>
              <TD>{person.name}</TD>
              <TD>{person.role}</TD>
              <TD>{person.department}</TD>
              <TD align="right">{person.status}</TD>
            </TR>
          ))}
        </TBody>
      </Table>
    </div>
  ),
};

export const SortableColumns: Story = {
  render: (args) => {
    function SortableTable() {
      const [sortKey, setSortKey] = useState<string | null>('name');
      const [sortDir, setSortDir] = useState<SortDir>('asc');

      const sorted = [...people].sort((a, b) => {
        if (!sortKey || !sortDir) return 0;
        const key = sortKey as keyof Person;
        const cmp = String(a[key]).localeCompare(String(b[key]));
        return sortDir === 'asc' ? cmp : -cmp;
      });

      const onSortChange = (key: string, dir: SortDir) => {
        setSortKey(dir ? key : null);
        setSortDir(dir);
      };

      return (
        <Table {...args}>
          <THead>
            <TR>
              <TH
                sortable
                sortDir={sortKey === 'name' ? sortDir : null}
                onSortChange={(dir) => onSortChange('name', dir)}
              >
                Name
              </TH>
              <TH
                sortable
                sortDir={sortKey === 'department' ? sortDir : null}
                onSortChange={(dir) => onSortChange('department', dir)}
              >
                Department
              </TH>
              <TH align="right">Status</TH>
            </TR>
          </THead>
          <TBody>
            {sorted.map((person) => (
              <TR key={person.id}>
                <TD>{person.name}</TD>
                <TD>{person.department}</TD>
                <TD align="right">{person.status}</TD>
              </TR>
            ))}
          </TBody>
        </Table>
      );
    }

    return <SortableTable />;
  },
};

const columns: TableColumn<Person>[] = [
  { key: 'name', header: 'Name', accessor: (row) => row.name, sortable: true },
  { key: 'role', header: 'Role', accessor: (row) => row.role },
  { key: 'department', header: 'Department', accessor: (row) => row.department, sortable: true },
  { key: 'status', header: 'Status', accessor: (row) => row.status, align: 'right' },
];

export const DataTableBasic: Story = {
  name: 'DataTable',
  render: (args) => (
    <DataTable
      columns={columns}
      rows={people}
      rowKey={(row) => row.id}
      density={args.density}
      striped={args.striped}
      hoverable={args.hoverable}
    />
  ),
};

export const DataTableSortable: Story = {
  name: 'DataTable (sortable + row click)',
  render: (args) => {
    function SortableDataTable() {
      const [sortKey, setSortKey] = useState('name');
      const [sortDir, setSortDir] = useState<SortDir>('asc');

      const sorted = [...people].sort((a, b) => {
        if (!sortDir) return 0;
        const key = sortKey as keyof Person;
        const cmp = String(a[key]).localeCompare(String(b[key]));
        return sortDir === 'asc' ? cmp : -cmp;
      });

      return (
        <DataTable
          columns={columns}
          rows={sorted}
          rowKey={(row) => row.id}
          density={args.density}
          striped={args.striped}
          hoverable={args.hoverable}
          sortKey={sortKey}
          sortDir={sortDir}
          onSortChange={(key, dir) => {
            setSortKey(key);
            setSortDir(dir);
          }}
          onRowClick={(row) => console.log(`Clicked ${row.name}`)}
        />
      );
    }

    return <SortableDataTable />;
  },
};

export const DataTableEmpty: Story = {
  name: 'DataTable (empty state)',
  render: (args) => (
    <DataTable
      columns={columns}
      rows={[]}
      rowKey={(row) => row.id}
      density={args.density}
      striped={args.striped}
      hoverable={args.hoverable}
      empty="No employees match these filters."
    />
  ),
};

export const CustomClassName: Story = {
  name: 'Overriding classes via className / wrapperClassName',
  render: (args) => (
    <Table
      {...args}
      wrapperClassName="border-brand-500 bg-bg-container"
      className="[&_thead]:bg-brand-20"
    >
      <THead>
        <TR>
          <TH>Name</TH>
          <TH>Role</TH>
        </TR>
      </THead>
      <TBody>
        {people.slice(0, 3).map((person) => (
          <TR key={person.id}>
            <TD>{person.name}</TD>
            <TD>{person.role}</TD>
          </TR>
        ))}
      </TBody>
    </Table>
  ),
};
