import type { Meta, StoryObj } from '@storybook/react-vite';
import { Star } from 'lucide-react';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  // Docs page is authored by hand in Badge.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'brand', 'success', 'warning', 'danger', 'info', 'privacy'],
    },
    appearance: {
      control: 'select',
      options: ['filled', 'outline', 'accent'],
    },
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm', 'xs'],
    },
  },
  args: {
    children: 'Badge',
    variant: 'neutral',
    appearance: 'filled',
    size: 'md',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {};

export const Outline: Story = {
  args: { appearance: 'outline' },
};

export const Accent: Story = {
  args: { appearance: 'accent' },
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <Star className="size-3" />,
    children: 'Featured',
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: <Star className="size-3" />,
    children: 'Featured',
  },
};

export const Dismissible: Story = {
  args: {
    children: 'Removable',
    onDismiss: () => {},
  },
};

export const CustomClassName: Story = {
  name: 'Overriding classes via className',
  args: {
    className: 'bg-purple-100 text-purple-900 border-purple-300 rounded-full',
    children: 'Custom',
  },
};

const VARIANTS = ['neutral', 'brand', 'success', 'warning', 'danger', 'info', 'privacy'] as const;
const APPEARANCES = ['filled', 'outline', 'accent'] as const;
const SIZES = ['xs', 'sm', 'md', 'lg'] as const;

export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      {VARIANTS.map((variant) => (
        <Badge key={variant} {...args} variant={variant}>
          {variant}
        </Badge>
      ))}
    </div>
  ),
};

export const AllAppearances: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      {APPEARANCES.map((appearance) => (
        <Badge key={appearance} {...args} appearance={appearance}>
          {appearance}
        </Badge>
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      {SIZES.map((size) => (
        <Badge key={size} {...args} size={size}>
          {size}
        </Badge>
      ))}
    </div>
  ),
};

export const Pill: Story = {
  name: 'Pill shape',
  args: { shape: 'pill' },
};

export const Dot: Story = {
  name: 'Standalone dot',
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {VARIANTS.map((variant) => (
        <Badge key={variant} {...args} variant={variant} dot aria-label={variant} />
      ))}
    </div>
  ),
};

export const WithDot: Story = {
  name: 'With leading dot',
  args: { withDot: true, variant: 'success', children: 'Active' },
};

export const Disabled: Story = {
  args: { disabled: true, children: 'Disabled' },
};

export const Interactive: Story = {
  args: { interactive: true, children: 'Click me', onClick: () => {} },
};

export const IconOnly: Story = {
  name: 'Icon only',
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      {SIZES.map((size) => (
        <Badge key={size} {...args} size={size} leftIcon={<Star className="size-3" />} aria-label="Featured" />
      ))}
    </div>
  ),
};
