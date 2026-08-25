import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Modal } from './Modal';
import type { ModalProps } from './Modal.types';
import { Button } from '../Button';

// Modal is a controlled component (`open` / `onClose`), so every story wraps
// it with local state and a trigger button instead of rendering it
// permanently open — that keeps the docs canvas usable (the Docs page renders
// all stories into one shared DOM, so several always-open portaled overlays
// would stack on top of each other) and demonstrates the real open/close
// interaction (overlay click, Escape, close button).
function Template(args: ModalProps) {
  const [open, setOpen] = useState(args.open);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal {...args} open={open} onClose={() => setOpen(false)} />
    </>
  );
}

const meta = {
  title: 'Components/Modal',
  component: Modal,
  // Docs page is authored by hand in Modal.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    onClose: { table: { disable: true } },
  },
  args: {
    open: false,
    onClose: () => {},
    title: 'Modal title',
    description: 'A short supporting description of what this modal is for.',
    children: 'Modal body content goes here.',
    size: 'md',
    closeOnOverlayClick: true,
    showClose: true,
  },
  render: Template,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithFooter: Story = {
  args: {
    footer: (
      <>
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Confirm</Button>
      </>
    ),
  },
};

export const WithoutDescription: Story = {
  args: { description: undefined },
};

export const WithoutTitle: Story = {
  name: 'Content only (no title, no close button)',
  args: { title: undefined, description: undefined, showClose: false },
};

export const CloseOnOverlayClickDisabled: Story = {
  args: { closeOnOverlayClick: false },
};

export const ScrollableContent: Story = {
  args: {
    children: (
      <div className="space-y-3">
        {Array.from({ length: 12 }, (_, i) => (
          <p key={i} className="text-p-std text-fg-secondary">
            Paragraph {i + 1} of long body content, demonstrating that the content area scrolls
            independently while the header and footer stay pinned.
          </p>
        ))}
      </div>
    ),
    footer: <Button variant="primary">Done</Button>,
  },
};

export const Small: Story = {
  args: { size: 'sm' },
};

export const Large: Story = {
  args: { size: 'lg' },
};

export const ExtraLarge: Story = {
  args: { size: 'xl' },
};

export const DoubleExtraLarge: Story = {
  args: { size: '2xl' },
};

export const CustomClassName: Story = {
  name: 'Overriding classes via className',
  args: {
    className: 'bg-bg-container border-2 border-brand-500',
  },
};
