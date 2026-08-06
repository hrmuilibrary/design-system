import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { StepIndicator } from './StepIndicator';
import type { StepIndicatorItem } from './StepIndicator.types';

const BASE_STEPS: StepIndicatorItem[] = [
  { value: 'account', label: 'Account details', status: 'completed' },
  { value: 'preferences', label: 'Preferences', status: 'active' },
  { value: 'review', label: 'Review', status: 'upcoming' },
  { value: 'done', label: 'Done', status: 'upcoming' },
];

const meta = {
  title: 'Components/StepIndicator',
  component: StepIndicator,
  // Docs page is authored by hand in StepIndicator.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    marker: {
      control: 'select',
      options: ['number', 'dot', 'icon'],
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: 'select',
      options: ['lg', 'sm'],
    },
  },
  args: {
    steps: BASE_STEPS,
    marker: 'number',
    orientation: 'horizontal',
    size: 'lg',
  },
  decorators: [
    (Story) => (
      <div className="w-[480px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof StepIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Vertical: Story = {
  args: { orientation: 'vertical' },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
};

export const DotMarker: Story = {
  name: 'marker="dot"',
  args: { marker: 'dot' },
};

export const IconMarker: Story = {
  name: 'marker="icon"',
  args: { marker: 'icon' },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const WithDescriptions: Story = {
  args: {
    steps: BASE_STEPS.map((step, i) => ({
      ...step,
      description: ['Name and email', 'Notification settings', 'Confirm everything', 'All set'][i],
    })),
  },
};

export const RejectedStep: Story = {
  name: 'Rejected step',
  args: {
    steps: [
      { value: 'submitted', label: 'Submitted', status: 'completed' },
      { value: 'review', label: 'Under review', status: 'rejected' },
      { value: 'resubmit', label: 'Resubmit', status: 'upcoming' },
    ],
  },
};

export const HighlightedStep: Story = {
  name: 'Highlighted (halo)',
  args: {
    steps: [
      { value: 'submitted', label: 'Submitted', status: 'completed', highlighted: true },
      { value: 'review', label: 'Under review', status: 'active', highlighted: true },
      { value: 'done', label: 'Done', status: 'upcoming' },
    ],
  },
};

export const Interactive: Story = {
  name: 'Interactive (onStepSelect)',
  render: (args) => {
    function InteractiveExample() {
      const [active, setActive] = useState('preferences');
      return <StepIndicator {...args} activeValue={active} onStepSelect={setActive} />;
    }
    return <InteractiveExample />;
  },
};

export const SingleStep: Story = {
  name: 'Single step (no connectors)',
  args: {
    steps: [{ value: 'only', label: 'Only step', status: 'active' }],
  },
};

export const EightSteps: Story = {
  name: 'Eight steps (crowded)',
  args: {
    steps: Array.from({ length: 8 }, (_, i) => ({
      value: `step-${i}`,
      label: `Step ${i + 1}`,
      status: i < 3 ? 'completed' : i === 3 ? 'active' : 'upcoming',
    })),
  },
  decorators: [
    (Story) => (
      <div className="w-[800px]">
        <Story />
      </div>
    ),
  ],
};

// Full matrix: orientation x size x all 4 statuses x highlighted.
const ORIENTATIONS = ['horizontal', 'vertical'] as const;
const SIZES = ['lg', 'sm'] as const;
const STATUSES = ['upcoming', 'active', 'completed', 'rejected'] as const;

export const FullMatrix: Story = {
  name: 'Full matrix (orientation x size x status x highlighted)',
  render: () => (
    <div className="flex flex-col gap-10">
      {ORIENTATIONS.map((orientation) =>
        SIZES.map((size) => (
          <div key={`${orientation}-${size}`} className="flex flex-col gap-2">
            <p className="text-p-sm font-medium text-fg-secondary">
              orientation={orientation}, size={size}
            </p>
            <div className={orientation === 'vertical' ? 'w-64' : 'w-[640px]'}>
              <StepIndicator
                orientation={orientation}
                size={size}
                steps={STATUSES.map((status, i) => ({
                  value: `${orientation}-${size}-${i}`,
                  label: status,
                  status,
                  highlighted: true,
                }))}
              />
            </div>
          </div>
        )),
      )}
    </div>
  ),
};

export const CustomClassName: Story = {
  name: 'Overriding classes via className',
  args: {
    className: 'rounded-lg border border-border-default p-4',
  },
};
