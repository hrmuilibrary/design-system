import { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Copy, LogOut, MoreVertical, Pencil, Settings, Trash2, User } from 'lucide-react';
import { Button } from '../Button';
import {
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
  DropdownSeparator,
  DropdownTrigger,
} from './DropdownMenu';

const meta = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  // Docs page is authored by hand in DropdownMenu.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownTrigger>
        <Button variant="secondary">Options</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem icon={<Pencil className="h-4 w-4" />}>Edit</DropdownItem>
        <DropdownItem icon={<Copy className="h-4 w-4" />}>Duplicate</DropdownItem>
        <DropdownSeparator />
        <DropdownItem icon={<Trash2 className="h-4 w-4" />} destructive>
          Delete
        </DropdownItem>
      </DropdownContent>
    </DropdownMenu>
  ),
};

export const IconTrigger: Story = {
  name: 'Icon-only trigger',
  render: () => (
    <DropdownMenu>
      <DropdownTrigger>
        <Button variant="tertiary" iconOnly aria-label="More actions">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownTrigger>
      <DropdownContent align="end">
        <DropdownItem icon={<Pencil className="h-4 w-4" />}>Edit</DropdownItem>
        <DropdownItem icon={<Copy className="h-4 w-4" />}>Duplicate</DropdownItem>
        <DropdownSeparator />
        <DropdownItem icon={<Trash2 className="h-4 w-4" />} destructive>
          Delete
        </DropdownItem>
      </DropdownContent>
    </DropdownMenu>
  ),
};

export const WithLabelAndShortcuts: Story = {
  name: 'Label, separator & shortcuts',
  render: () => (
    <DropdownMenu>
      <DropdownTrigger>
        <Button variant="secondary">Account</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownLabel>My account</DropdownLabel>
        <DropdownItem icon={<User className="h-4 w-4" />} shortcut="⌘P">
          Profile
        </DropdownItem>
        <DropdownItem icon={<Settings className="h-4 w-4" />} shortcut="⌘,">
          Settings
        </DropdownItem>
        <DropdownSeparator />
        <DropdownItem icon={<LogOut className="h-4 w-4" />} shortcut="⇧⌘Q">
          Log out
        </DropdownItem>
      </DropdownContent>
    </DropdownMenu>
  ),
};

export const CheckedItems: Story = {
  name: 'Checked items',
  render: () => {
    function CheckedExample() {
      const [view, setView] = useState<'list' | 'board'>('list');
      return (
        <DropdownMenu>
          <DropdownTrigger>
            <Button variant="secondary">View: {view === 'list' ? 'List' : 'Board'}</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem checked={view === 'list'} onSelect={() => setView('list')}>
              List
            </DropdownItem>
            <DropdownItem checked={view === 'board'} onSelect={() => setView('board')}>
              Board
            </DropdownItem>
          </DropdownContent>
        </DropdownMenu>
      );
    }
    return <CheckedExample />;
  },
};

export const DisabledItem: Story = {
  name: 'Disabled item',
  render: () => (
    <DropdownMenu>
      <DropdownTrigger>
        <Button variant="secondary">Options</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem icon={<Pencil className="h-4 w-4" />}>Edit</DropdownItem>
        <DropdownItem icon={<Copy className="h-4 w-4" />} disabled>
          Duplicate (unavailable)
        </DropdownItem>
        <DropdownItem icon={<Trash2 className="h-4 w-4" />} destructive>
          Delete
        </DropdownItem>
      </DropdownContent>
    </DropdownMenu>
  ),
};

export const AlignEnd: Story = {
  name: 'Aligned to trigger end',
  render: () => (
    <div className="flex justify-end w-80">
      <DropdownMenu>
        <DropdownTrigger>
          <Button variant="secondary">Options</Button>
        </DropdownTrigger>
        <DropdownContent align="end">
          <DropdownItem>Edit</DropdownItem>
          <DropdownItem>Duplicate</DropdownItem>
          <DropdownItem destructive>Delete</DropdownItem>
        </DropdownContent>
      </DropdownMenu>
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    function ControlledExample() {
      const [open, setOpen] = useState(false);
      return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownTrigger>
            <Button variant="secondary">{open ? 'Close menu' : 'Open menu'}</Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem onSelect={() => setOpen(false)}>Edit</DropdownItem>
            <DropdownItem onSelect={() => setOpen(false)}>Duplicate</DropdownItem>
          </DropdownContent>
        </DropdownMenu>
      );
    }
    return <ControlledExample />;
  },
};

export const CustomClassName: Story = {
  name: 'Overriding classes via className',
  render: () => (
    <DropdownMenu>
      <DropdownTrigger>
        <Button variant="secondary">Options</Button>
      </DropdownTrigger>
      <DropdownContent className="border-brand-500 min-w-[240px]">
        <DropdownItem className="text-brand-700">Edit</DropdownItem>
        <DropdownItem>Duplicate</DropdownItem>
      </DropdownContent>
    </DropdownMenu>
  ),
};

export const InsideOverflowHiddenContainer: Story = {
  name: 'Inside an overflow-hidden container',
  render: () => (
    <div className="h-32 w-64 overflow-hidden border border-border-default p-4">
      <DropdownMenu>
        <DropdownTrigger>
          <Button variant="secondary">Options</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem>Edit</DropdownItem>
          <DropdownItem>Duplicate</DropdownItem>
          <DropdownItem destructive>Delete</DropdownItem>
        </DropdownContent>
      </DropdownMenu>
    </div>
  ),
};

export const AutoFlipNearViewportBottom: Story = {
  name: 'Auto flip near viewport bottom',
  render: () => (
    <div className="mt-[70vh]">
      <DropdownMenu>
        <DropdownTrigger>
          <Button variant="secondary">Options</Button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem>Edit</DropdownItem>
          <DropdownItem>Duplicate</DropdownItem>
          <DropdownItem destructive>Delete</DropdownItem>
        </DropdownContent>
      </DropdownMenu>
    </div>
  ),
};

export const KeyboardNavigation: Story = {
  name: 'Keyboard navigation',
  render: () => (
    <DropdownMenu>
      <DropdownTrigger>
        <Button variant="secondary">Options</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem icon={<Pencil className="h-4 w-4" />}>Edit</DropdownItem>
        <DropdownItem icon={<Copy className="h-4 w-4" />}>Duplicate</DropdownItem>
        <DropdownSeparator />
        <DropdownItem icon={<Trash2 className="h-4 w-4" />} destructive>
          Delete
        </DropdownItem>
      </DropdownContent>
    </DropdownMenu>
  ),
};

export const ExternalAnchor: Story = {
  name: 'External anchor (anchorRef)',
  render: () => {
    function ExternalAnchorExample() {
      const anchorRef = useRef<HTMLDivElement>(null);
      const [open, setOpen] = useState(false);
      return (
        <div className="flex items-center gap-3">
          <div
            ref={anchorRef}
            className="rounded-lg border border-dashed border-border-strong px-3 py-2 text-p-sm text-fg-secondary"
          >
            Anchor element
          </div>
          <DropdownMenu open={open} onOpenChange={setOpen} anchorRef={anchorRef}>
            <Button variant="secondary" onClick={() => setOpen((v) => !v)}>
              Toggle menu
            </Button>
            <DropdownContent>
              <DropdownItem onSelect={() => setOpen(false)}>Edit</DropdownItem>
              <DropdownItem onSelect={() => setOpen(false)}>Duplicate</DropdownItem>
            </DropdownContent>
          </DropdownMenu>
        </div>
      );
    }
    return <ExternalAnchorExample />;
  },
};

export const ExternalAnchorState: Story = {
  name: 'External anchor (useState)',
  render: () => {
    function ExternalAnchorStateExample() {
      const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
      const [open, setOpen] = useState(false);
      return (
        <div className="flex items-center gap-3">
          <div
            ref={setAnchorEl}
            className="rounded-lg border border-dashed border-border-strong px-3 py-2 text-p-sm text-fg-secondary"
          >
            Anchor element
          </div>
          <DropdownMenu open={open} onOpenChange={setOpen} anchorRef={anchorEl}>
            <Button variant="secondary" onClick={() => setOpen((v) => !v)}>
              Toggle menu
            </Button>
            <DropdownContent>
              <DropdownItem onSelect={() => setOpen(false)}>Edit</DropdownItem>
              <DropdownItem onSelect={() => setOpen(false)}>Duplicate</DropdownItem>
            </DropdownContent>
          </DropdownMenu>
        </div>
      );
    }
    return <ExternalAnchorStateExample />;
  },
};

export const ItemsWithMeta: Story = {
  name: 'Items with meta',
  render: () => (
    <DropdownMenu>
      <DropdownTrigger>
        <Button variant="secondary">Assign to</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem icon={<User className="h-4 w-4" />} meta="Product">
          Ani Petrosyan
        </DropdownItem>
        <DropdownItem icon={<User className="h-4 w-4" />} meta="Engineering">
          Davit Grigoryan
        </DropdownItem>
      </DropdownContent>
    </DropdownMenu>
  ),
};

export const LegacyAbsoluteStrategy: Story = {
  name: 'Legacy absolute strategy',
  render: () => (
    <DropdownMenu>
      <DropdownTrigger>
        <Button variant="secondary">Options</Button>
      </DropdownTrigger>
      <DropdownContent strategy="absolute">
        <DropdownItem>Edit</DropdownItem>
        <DropdownItem>Duplicate</DropdownItem>
        <DropdownItem destructive>Delete</DropdownItem>
      </DropdownContent>
    </DropdownMenu>
  ),
};
