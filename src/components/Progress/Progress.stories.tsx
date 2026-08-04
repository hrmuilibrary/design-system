import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from './Progress';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  // Docs page is authored by hand in Progress.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['linear', 'circular'],
    },
    size: {
      control: 'select',
      options: ['sm', 'lg'],
    },
  },
  args: {
    variant: 'linear',
    size: 'lg',
    percent: 40,
    hideLabel: false,
    loop: false,
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Linear: Story = {};

export const LinearSmall: Story = {
  args: { size: 'sm' },
};

export const LinearNoLabel: Story = {
  args: { hideLabel: true },
};

export const Steps: Story = {
  args: { stepCount: 4, currentStep: 2 },
};

export const Circular: Story = {
  args: { variant: 'circular', percent: 65 },
  decorators: [(Story) => <Story />],
};

export const CircularSmall: Story = {
  args: { variant: 'circular', size: 'sm', percent: 65 },
  decorators: [(Story) => <Story />],
};

export const CircularLoop: Story = {
  name: 'Circular (indeterminate loop)',
  args: { variant: 'circular', loop: true },
  decorators: [(Story) => <Story />],
};
