import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ArrowLeft, Pin } from 'lucide-react';
import { Button } from '../Button';
import { Drawer } from './Drawer';
import type { DrawerProps } from './Drawer.types';

// Drawer is a controlled component (`open` / `onClose`), so every story
// wraps it with local state and a trigger button instead of rendering it
// permanently open — that keeps the docs canvas usable and demonstrates the
// real open/close interaction (overlay click, Escape, close button).
function Template(args: DrawerProps) {
  const [open, setOpen] = useState(args.open);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open drawer</Button>
      <Drawer {...args} open={open} onClose={() => setOpen(false)} />
    </>
  );
}

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  // Docs page is authored by hand in Drawer.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    side: {
      control: 'select',
      options: ['right', 'left', 'top', 'bottom'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    onClose: { table: { disable: true } },
  },
  args: {
    open: false,
    onClose: () => {},
    side: 'right',
    size: 'md',
    title: 'Drawer title',
    description: 'A short supporting description for this drawer.',
    children: 'Drawer content goes here.',
    closeOnOverlayClick: true,
    showClose: true,
  },
  render: Template,
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const LeftSide: Story = {
  args: { side: 'left' },
};

export const TopSide: Story = {
  args: {
    side: 'top',
    title: 'Notification settings',
    description: 'Slides in from the top edge of the viewport.',
  },
};

export const BottomSide: Story = {
  args: {
    side: 'bottom',
    title: 'Quick actions',
    description: 'Slides in from the bottom edge of the viewport.',
  },
};

const SIZES = ['sm', 'md', 'lg', 'xl'] as const;

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      {SIZES.map((size) => (
        <Template key={size} {...args} size={size} title={`Size: ${size}`} />
      ))}
    </div>
  ),
};

export const WithFooter: Story = {
  args: {
    title: 'Edit profile',
    description: 'Update your profile details below.',
    footer: (
      <>
        <Button variant="tertiary" onClick={() => {}}>
          Cancel
        </Button>
        <Button variant="primary" onClick={() => {}}>
          Save changes
        </Button>
      </>
    ),
  },
};

export const WithoutCloseButton: Story = {
  args: {
    showClose: false,
    title: 'No close button',
    description: 'Dismiss via the overlay click or Escape key instead.',
  },
};

export const WithoutOverlayClose: Story = {
  args: {
    closeOnOverlayClick: false,
    title: 'Overlay click disabled',
    description: 'Clicking the backdrop does nothing — use the close button or Escape.',
  },
};

export const NoTitleOrDescription: Story = {
  args: {
    title: undefined,
    description: undefined,
    children: 'Just body content, no header.',
  },
};

export const LongContent: Story = {
  args: {
    title: 'Scrollable content',
    description: 'The body scrolls independently while the header and footer stay fixed.',
    children: (
      <div className="flex flex-col gap-3">
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} className="text-p-std text-fg-secondary">
            Paragraph {i + 1} of scrollable drawer content.
          </p>
        ))}
      </div>
    ),
    footer: (
      <Button variant="primary" onClick={() => {}}>
        Done
      </Button>
    ),
  },
};

export const CustomClassName: Story = {
  name: 'Overriding classes via className',
  args: {
    className: 'bg-bg-container',
    title: 'Custom background',
    description: 'className is merged last, so it wins over the default panel background.',
  },
};

export const WithHeaderActions: Story = {
  name: 'With headerActions',
  args: {
    title: 'Edit item',
    description: 'headerActions renders left of the close button — e.g. pin or back.',
    headerActions: (
      <>
        <button
          type="button"
          aria-label="Back"
          className="p-2 rounded-md text-fg-secondary hover:text-fg-default hover:bg-bg-subtle"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Pin"
          className="p-2 rounded-md text-fg-secondary hover:text-fg-default hover:bg-bg-subtle"
        >
          <Pin className="h-5 w-5" />
        </button>
      </>
    ),
  },
};

export const NotAnimated: Story = {
  name: 'animated={false}',
  args: {
    animated: false,
    title: 'Instant open/close',
    description: 'The pre-1.x behavior — mounts and unmounts synchronously, with no slide/fade.',
  },
};
