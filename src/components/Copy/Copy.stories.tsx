import type { Meta, StoryObj } from '@storybook/react-vite';
import { Copy } from './Copy';

const meta = {
  title: 'Components/Copy',
  component: Copy,
  // Docs page is authored by hand in Copy.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  args: {
    text: 'npm install @dinofront/design_system',
  },
} satisfies Meta<typeof Copy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const InlineWithCode: Story = {
  name: 'Inline next to a code snippet',
  render: (args) => (
    <div className="flex items-center gap-2 rounded-lg border border-border-default bg-bg-container px-3 py-2">
      <code className="text-p-sm text-fg-default">{args.text}</code>
      <Copy {...args} />
    </div>
  ),
};

export const CustomCopiedLabel: Story = {
  args: {
    copiedLabel: 'Copied to clipboard!',
  },
};

export const CustomTimeout: Story = {
  name: 'Longer feedback timeout',
  args: {
    timeout: 4000,
  },
};

export const WithCallbacks: Story = {
  name: 'onCopy / onError callbacks',
  args: {
    onCopy: (text) => console.log('copied:', text),
    onError: (error) => console.error('copy failed:', error),
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};
