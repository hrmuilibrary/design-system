import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ReadMore } from './ReadMore';

const LONG_TEXT =
  'The quick brown fox jumps over the lazy dog. This sentence is repeated several times to produce enough text to actually overflow a few lines of a narrow container. The quick brown fox jumps over the lazy dog. This sentence is repeated several times to produce enough text to actually overflow a few lines of a narrow container. The quick brown fox jumps over the lazy dog.';

const meta = {
  title: 'Components/ReadMore',
  component: ReadMore,
  // Docs page is authored by hand in ReadMore.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  args: {
    children: LONG_TEXT,
    clamp: 3,
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ReadMore>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const ClampTwoLines: Story = {
  name: 'clamp={2}',
  args: { clamp: 2 },
};

export const CustomLabels: Story = {
  args: {
    expandLabel: 'Read the full bio',
    collapseLabel: 'Collapse',
  },
};

export const CollapsedContentEscapeHatch: Story = {
  name: 'collapsedContent (different copy while collapsed)',
  args: {
    collapsedContent: 'A short one-line summary shown only while collapsed.',
  },
};

export const Controlled: Story = {
  render: (args) => {
    function ControlledExample() {
      const [expanded, setExpanded] = useState(false);
      return (
        <div className="flex flex-col gap-3">
          <ReadMore {...args} expanded={expanded} onExpandedChange={setExpanded} />
          <button
            type="button"
            onClick={() => setExpanded((e) => !e)}
            className="self-start text-p-sm text-fg-secondary underline"
          >
            Toggle from outside ({expanded ? 'expanded' : 'collapsed'})
          </button>
        </div>
      );
    }
    return <ControlledExample />;
  },
};

export const InsideClickableCard: Story = {
  name: 'Inside a clickable card (stopPropagation)',
  render: (args) => (
    <div
      onClick={() => alert('Card clicked')}
      className="cursor-pointer rounded-lg border border-border-default p-4 hover:bg-bg-subtle"
    >
      <p className="mb-2 text-p-sm font-medium text-fg-default">Card title</p>
      <ReadMore {...args} />
    </div>
  ),
};

export const CustomTextProps: Story = {
  name: 'Custom typography via textProps',
  args: {
    textProps: { variant: 'p-sm', color: 'secondary' },
  },
};
