import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '../Checkbox';
import { Filter } from './Filter';

const meta = {
  title: 'Components/Filter',
  component: Filter,
  // Docs page is authored by hand in Filter.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm'],
    },
  },
  args: {
    label: 'Status',
    size: 'md',
    active: false,
    disabled: false,
  },
} satisfies Meta<typeof Filter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Active: Story = {
  args: { active: true },
};

export const WithValue: Story = {
  args: { value: 'Active' },
};

export const WithClearButton: Story = {
  name: 'With value and clear affordance',
  render: (args) => {
    function Demo() {
      const [value, setValue] = useState<string | undefined>('Active');
      return <Filter {...args} value={value} onClear={() => setValue(undefined)} />;
    }
    return <Demo />;
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledWithValue: Story = {
  args: { disabled: true, value: 'Active' },
};

export const WithPopoverContent: Story = {
  name: 'With popover content',
  args: {
    label: 'Department',
  },
  render: (args) => (
    <Filter {...args}>
      <div className="flex flex-col gap-2">
        <Checkbox label="Engineering" size="sm" />
        <Checkbox label="Design" size="sm" />
        <Checkbox label="Product" size="sm" />
      </div>
    </Filter>
  ),
};

export const CustomClassName: Story = {
  name: 'Overriding classes via className',
  args: {
    label: 'Region',
    value: 'EMEA',
    className: 'shadow-z2',
  },
};

const SIZES = ['sm', 'md', 'lg'] as const;

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {SIZES.map((size) => (
        <Filter key={size} {...args} size={size} label={size} value="Active" />
      ))}
    </div>
  ),
};
