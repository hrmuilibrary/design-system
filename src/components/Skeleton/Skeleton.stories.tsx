import type { Meta, StoryObj } from '@storybook/react-vite';
import { Skeleton } from './Skeleton';

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  // Docs page is authored by hand in Skeleton.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular', 'rounded'],
    },
    animation: {
      control: 'select',
      options: ['pulse', 'wave', 'none'],
    },
  },
  args: {
    variant: 'text',
    animation: 'pulse',
    width: 280,
  },
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {};

export const Circular: Story = {
  args: { variant: 'circular', width: 56, height: 56 },
};

export const Rectangular: Story = {
  args: { variant: 'rectangular', width: 280, height: 120 },
};

export const Rounded: Story = {
  args: { variant: 'rounded', width: 280, height: 120 },
};

export const Wave: Story = {
  args: { variant: 'rounded', height: 80, animation: 'wave' },
};

export const NoAnimation: Story = {
  name: 'No animation',
  args: { variant: 'rounded', height: 80, animation: 'none' },
};

export const MultipleLines: Story = {
  render: (args) => (
    <div className="w-90">
      <Skeleton {...args} count={3} />
      <Skeleton {...args} width="60%" />
    </div>
  ),
};

export const InferredFromChildren: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Skeleton variant="circular">
        <div className="size-12" />
      </Skeleton>
      <Skeleton variant="text">
        <span className="text-h-xs font-semibold">The quick brown fox</span>
      </Skeleton>
    </div>
  ),
};

export const CardLoading: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-3 rounded-xl border border-border-default p-4">
      <div className="flex items-center gap-3">
        <Skeleton variant="circular" width={40} height={40} animation="wave" />
        <div className="flex-1">
          <Skeleton variant="text" width="60%" animation="wave" />
          <Skeleton variant="text" width="40%" animation="wave" />
        </div>
      </div>
      <Skeleton variant="rounded" width="100%" height={140} animation="wave" />
      <Skeleton variant="text" count={3} animation="wave" />
    </div>
  ),
};
