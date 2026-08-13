import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  // Docs page is authored by hand in Card.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
  args: {
    variant: 'outlined',
    padding: 'md',
    interactive: false,
    children: <p className="text-p-md text-fg-default">This is the card body content.</p>,
  },
  render: (args) => (
    <div className="w-80">
      <Card {...args} />
    </div>
  ),
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {};

export const Elevated: Story = {
  args: { variant: 'elevated' },
};

export const Filled: Story = {
  args: { variant: 'filled' },
};

export const Interactive: Story = {
  args: { interactive: true },
};

export const WithHeaderAndFooter: Story = {
  args: {
    header: <h3 className="text-h-xl text-fg-default">Card title</h3>,
    footer: <p className="text-label-md text-fg-secondary">Last updated 2 days ago</p>,
  },
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: <img src="https://placehold.co/320x160" alt="" className="block w-full" />,
  },
};

export const CustomClassName: Story = {
  name: 'Overriding classes via className',
  args: {
    className: 'border-brand-500 rounded-2xl',
  },
};

const VARIANTS = ['elevated', 'outlined', 'filled'] as const;
const PADDINGS = ['none', 'sm', 'md', 'lg'] as const;

export const AllVariants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      {VARIANTS.map((variant) => (
        <div key={variant} className="w-56">
          <Card {...args} variant={variant}>
            <p className="text-p-md text-fg-default capitalize">{variant}</p>
          </Card>
        </div>
      ))}
    </div>
  ),
};

export const AllPaddings: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-4">
      {PADDINGS.map((padding) => (
        <div key={padding} className="w-56">
          <Card {...args} padding={padding}>
            <p className="text-p-md text-fg-default capitalize">{padding}</p>
          </Card>
        </div>
      ))}
    </div>
  ),
};
