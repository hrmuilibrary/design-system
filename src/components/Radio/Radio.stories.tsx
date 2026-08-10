import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Radio, RadioGroup } from './Radio';

const meta = {
  title: 'Components/Radio',
  component: Radio,
  // Docs page is authored by hand in Radio.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'sm'],
    },
  },
  args: {
    value: 'option',
    size: 'md',
    label: 'Notify me by email',
    disabled: false,
    error: false,
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const WithDescription: Story = {
  args: {
    label: 'Email notifications',
    description: 'Receive updates about your account activity.',
  },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledChecked: Story = {
  args: { disabled: true, defaultChecked: true },
};

export const Error: Story = {
  args: { error: true, label: 'This option is currently unavailable' },
};

export const NoLabel: Story = {
  args: { label: undefined, 'aria-label': 'Select option' },
};

export const CustomClassName: Story = {
  name: 'Overriding classes via className',
  args: {
    className: 'gap-4',
    label: 'Custom gap spacing',
  },
};

const SIZES = ['md', 'sm'] as const;

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-3">
      {SIZES.map((size) => (
        <Radio key={size} {...args} size={size} value={size} label={size} />
      ))}
    </div>
  ),
};

export const Group: Story = {
  render: () => {
    function GroupDemo() {
      const [value, setValue] = useState('comfortable');
      return (
        <RadioGroup name="density" value={value} onChange={setValue}>
          <Radio value="compact" label="Compact" />
          <Radio value="comfortable" label="Comfortable" />
          <Radio value="spacious" label="Spacious" />
        </RadioGroup>
      );
    }
    return <GroupDemo />;
  },
};

export const GroupHorizontal: Story = {
  name: 'Group (horizontal)',
  render: () => {
    function GroupDemo() {
      const [value, setValue] = useState('yes');
      return (
        <RadioGroup name="confirm" value={value} onChange={setValue} orientation="horizontal">
          <Radio value="yes" label="Yes" />
          <Radio value="no" label="No" />
        </RadioGroup>
      );
    }
    return <GroupDemo />;
  },
};

export const GroupWithDescriptions: Story = {
  render: () => {
    function GroupDemo() {
      const [value, setValue] = useState('free');
      return (
        <RadioGroup name="plan" value={value} onChange={setValue} className="w-72">
          <Radio value="free" label="Free" description="Basic features for individuals." />
          <Radio value="pro" label="Pro" description="Advanced features for teams." />
          <Radio
            value="enterprise"
            label="Enterprise"
            description="Custom limits and dedicated support."
          />
        </RadioGroup>
      );
    }
    return <GroupDemo />;
  },
};

export const GroupSmall: Story = {
  name: 'Group (size: sm)',
  render: () => {
    function GroupDemo() {
      const [value, setValue] = useState('a');
      return (
        <RadioGroup name="small-group" value={value} onChange={setValue} size="sm">
          <Radio value="a" label="Option A" />
          <Radio value="b" label="Option B" />
        </RadioGroup>
      );
    }
    return <GroupDemo />;
  },
};

export const DisabledGroup: Story = {
  render: () => (
    <RadioGroup name="disabled-group" value="a" disabled onChange={() => {}}>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
    </RadioGroup>
  ),
};

export const GroupWithLabel: Story = {
  name: 'Group with label',
  render: () => {
    function GroupDemo() {
      const [value, setValue] = useState('comfortable');
      return (
        <RadioGroup name="density-labeled" label="Density" value={value} onChange={setValue}>
          <Radio value="compact" label="Compact" />
          <Radio value="comfortable" label="Comfortable" />
          <Radio value="spacious" label="Spacious" />
        </RadioGroup>
      );
    }
    return <GroupDemo />;
  },
};
