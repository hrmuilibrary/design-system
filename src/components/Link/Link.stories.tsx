import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from './Link';

const meta = {
  title: 'Components/Link',
  component: Link,
  // Docs page is authored by hand in Link.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'tertiary',
        'disabled',
        'inverse',
        'brand',
        'info',
        'success',
        'warning',
        'danger',
      ],
    },
    underline: {
      control: 'select',
      options: ['hover', 'always', 'none'],
    },
  },
  args: {
    href: '#',
    children: 'Visit the docs',
    color: 'brand',
    underline: 'hover',
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const AlwaysUnderlined: Story = {
  args: { underline: 'always' },
};

export const NoUnderline: Story = {
  args: { underline: 'none' },
};

export const InsideBodyText: Story = {
  name: 'Inside body text',
  render: (args) => (
    <p className="text-p-std text-fg-default max-w-sm">
      Read our <Link {...args}>terms of service</Link> before continuing — it only takes a minute.
    </p>
  ),
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <ArrowRight className="size-3.5" />,
    children: 'Back to dashboard',
  },
};

export const ExternalWithRightIcon: Story = {
  name: 'External link (target="_blank")',
  args: {
    href: 'https://example.com',
    target: '_blank',
    rightIcon: <ExternalLink className="size-3.5" />,
    children: 'View on example.com',
  },
};

export const Truncated: Story = {
  args: {
    truncate: true,
    children: 'This is a very long link label that will be truncated with an ellipsis',
  },
  decorators: [
    (Story) => (
      <div className="w-48">
        <Story />
      </div>
    ),
  ],
};

const COLORS = [
  'default',
  'secondary',
  'tertiary',
  'brand',
  'info',
  'success',
  'warning',
  'danger',
] as const;

export const AllColors: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      {COLORS.map((color) => (
        <Link key={color} {...args} color={color}>
          {color}
        </Link>
      ))}
    </div>
  ),
};

export const CustomClassName: Story = {
  name: 'Overriding classes via className',
  args: {
    className: 'text-h-xs font-bold',
  },
};
