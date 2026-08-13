import type { Meta, StoryObj } from '@storybook/react-vite';
import { Check, ChevronRight } from 'lucide-react';
import { Status } from './Status';

const meta = {
  title: 'Components/Status',
  component: Status,
  // Docs page is authored by hand in Status.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'general',
        'info',
        'brand',
        'danger',
        'warning',
        'success',
        'discovery',
        'disabled',
      ],
    },
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm'],
    },
  },
  args: {
    children: 'Status',
    variant: 'general',
    size: 'md',
    dot: true,
  },
} satisfies Meta<typeof Status>;

export default meta;
type Story = StoryObj<typeof meta>;

export const General: Story = {};

export const Info: Story = {
  args: { variant: 'info', children: 'In progress' },
};

export const Brand: Story = {
  args: { variant: 'brand', children: 'New' },
};

export const Danger: Story = {
  args: { variant: 'danger', children: 'Failed' },
};

export const Warning: Story = {
  args: { variant: 'warning', children: 'At risk' },
};

export const Success: Story = {
  args: { variant: 'success', children: 'Completed' },
};

export const Discovery: Story = {
  args: { variant: 'discovery', children: 'Beta' },
};

export const Disabled: Story = {
  args: { variant: 'disabled', children: 'Inactive' },
};

export const WithoutDot: Story = {
  args: { dot: false, variant: 'success', children: 'Approved' },
};

export const WithLeftIcon: Story = {
  args: {
    variant: 'success',
    leftIcon: <Check className="size-3.5" />,
    children: 'Verified',
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: 'info',
    rightIcon: <ChevronRight className="size-3.5" />,
    children: 'View details',
  },
};

export const CustomClassName: Story = {
  name: 'Overriding classes via className',
  args: {
    dot: false,
    className: 'bg-purple-100 text-purple-900 rounded-md',
    children: 'Custom',
  },
};

const VARIANTS = [
  'general',
  'info',
  'brand',
  'danger',
  'warning',
  'success',
  'discovery',
  'disabled',
] as const;
const SIZES = ['sm', 'md', 'lg'] as const;

export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      {VARIANTS.map((variant) => (
        <Status key={variant} {...args} variant={variant}>
          {variant}
        </Status>
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      {SIZES.map((size) => (
        <Status key={size} {...args} size={size}>
          {size}
        </Status>
      ))}
    </div>
  ),
};
