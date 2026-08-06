import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Counter } from './Counter';

const meta = {
  title: 'Components/Counter',
  component: Counter,
  // Docs page is authored by hand in Counter.docs.mdx instead of the
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
    label: 'Quantity',
    defaultValue: 1,
    min: 0,
    max: 10,
    step: 1,
    size: 'md',
    disabled: false,
  },
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const AtMin: Story = {
  name: 'At the minimum (decrease disabled)',
  args: { defaultValue: 0 },
};

export const AtMax: Story = {
  name: 'At the maximum (increase disabled)',
  args: { defaultValue: 10 },
};

export const CustomStep: Story = {
  args: { step: 5, max: 100, defaultValue: 10 },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithError: Story = {
  args: { error: true, errorText: 'Must be at least 1.' },
};

export const Controlled: Story = {
  render: (args) => {
    function ControlledExample() {
      const [value, setValue] = useState(2);
      return <Counter {...args} value={value} onValueChange={setValue} />;
    }
    return <ControlledExample />;
  },
};

const SIZES = ['sm', 'md', 'lg'] as const;

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex items-end gap-4">
      {SIZES.map((size) => (
        <Counter key={size} {...args} size={size} label={size} />
      ))}
    </div>
  ),
};
