import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from './Divider';

const meta = {
  title: 'Components/Divider',
  component: Divider,
  // Docs page is authored by hand in Divider.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'dashed'],
    },
    color: {
      control: 'select',
      options: ['default', 'subtle', 'strong', 'brand'],
    },
  },
  args: {
    orientation: 'horizontal',
    variant: 'solid',
    color: 'default',
  },
  decorators: [
    (Story) => (
      <div className="h-24 w-64">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {};

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  decorators: [
    (Story) => (
      <div className="flex h-24 items-center gap-4">
        <span>Left</span>
        <Story />
        <span>Right</span>
      </div>
    ),
  ],
};

export const Dashed: Story = {
  args: { variant: 'dashed' },
};

const COLORS = ['default', 'subtle', 'strong', 'brand'] as const;

export const AllColors: Story = {
  render: (args) => (
    <div className="flex w-64 flex-col gap-4">
      {COLORS.map((color) => (
        <Divider key={color} {...args} color={color} />
      ))}
    </div>
  ),
};
