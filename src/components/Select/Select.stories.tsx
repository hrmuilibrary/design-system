import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Info } from 'lucide-react';
import { Select } from './Select';
import { Tooltip } from '../Tooltip';
import type { SelectOption } from './Select.types';

const fruitOptions: SelectOption[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'durian', label: 'Durian (disabled)', disabled: true },
  { value: 'elderberry', label: 'Elderberry' },
];

const meta = {
  title: 'Components/Select',
  component: Select,
  // Docs page is authored by hand in Select.docs.mdx instead of the
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
    options: fruitOptions,
    placeholder: 'Select a fruit…',
    size: 'md',
    disabled: false,
    error: false,
  },
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Favorite fruit',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Favorite fruit',
    helperText: 'Pick the one you like best.',
  },
};

export const WithError: Story = {
  args: {
    label: 'Favorite fruit',
    error: true,
    errorText: 'This field is required.',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Favorite fruit',
    disabled: true,
    defaultValue: 'banana',
  },
};

export const DefaultValue: Story = {
  args: {
    label: 'Favorite fruit',
    defaultValue: 'cherry',
  },
};

export const Controlled: Story = {
  render: (args) => {
    function ControlledSelect() {
      const [value, setValue] = useState('apple');
      return <Select {...args} value={value} onChange={setValue} />;
    }
    return <ControlledSelect />;
  },
  args: {
    label: 'Favorite fruit',
  },
};

export const WithLabelAddons: Story = {
  name: 'With label addons',
  args: {
    label: 'Favorite fruit',
    labelAddons: (
      <Tooltip content="This affects the suggestions on your dashboard.">
        <button type="button" aria-label="More info" className="text-fg-tertiary hover:text-fg-default">
          <Info className="h-3.5 w-3.5" />
        </button>
      </Tooltip>
    ),
  },
};

const SIZES = ['sm', 'md', 'lg'] as const;

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {SIZES.map((size) => (
        <Select key={size} {...args} size={size} label={size} />
      ))}
    </div>
  ),
};
