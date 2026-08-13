import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  // Docs page is authored by hand in Checkbox.docs.mdx instead of the
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
    size: 'md',
    label: 'Accept terms and conditions',
    disabled: false,
    indeterminate: false,
    error: false,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const Indeterminate: Story = {
  args: { indeterminate: true, label: 'Select all' },
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
  args: { error: true, label: 'You must accept the terms' },
};

export const Required: Story = {
  args: { required: true, label: 'Accept terms and conditions' },
};

export const WithErrorText: Story = {
  args: {
    required: true,
    label: 'Accept terms and conditions',
    errorText: 'You must accept the terms to continue.',
  },
};

export const NoLabel: Story = {
  args: { label: undefined, 'aria-label': 'Select row' },
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
        <Checkbox key={size} {...args} size={size} label={size} />
      ))}
    </div>
  ),
};
