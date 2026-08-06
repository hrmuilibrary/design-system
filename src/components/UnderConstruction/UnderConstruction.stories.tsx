import type { Meta, StoryObj } from '@storybook/react-vite';
import { UnderConstruction } from './UnderConstruction';

const meta = {
  title: 'Components/UnderConstruction',
  component: UnderConstruction,
  // Docs page is authored by hand in UnderConstruction.docs.mdx instead of
  // the `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['lg', 'sm'],
    },
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UnderConstruction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Small: Story = {
  args: { size: 'sm' },
};

export const CustomCopy: Story = {
  name: 'Custom title and description',
  args: {
    title: 'Scheduled maintenance',
    description: "We'll be back online at 2:00 AM UTC.",
  },
};
