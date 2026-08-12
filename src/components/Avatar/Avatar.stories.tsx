import type { Meta, StoryObj } from '@storybook/react-vite';
import { Ghost } from 'lucide-react';
import { useState } from 'react';
import { Avatar, AvatarGroup } from './Avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  // Docs page is authored by hand in Avatar.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
    status: {
      control: 'select',
      options: [undefined, 'online', 'offline', 'away', 'busy'],
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
    },
  },
  args: {
    name: 'Ada Lovelace',
    size: 'md',
    shape: 'circle',
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=12',
    alt: 'Ada Lovelace',
  },
};

export const WithInitials: Story = {
  args: { name: 'Ada Lovelace' },
};

export const BrokenImageFallsBackToInitials: Story = {
  name: 'Broken image falls back to initials',
  args: {
    src: 'https://example.invalid/broken.jpg',
    name: 'Grace Hopper',
  },
};

export const IconFallback: Story = {
  args: { name: undefined },
};

export const CustomFallback: Story = {
  args: {
    name: undefined,
    fallback: <Ghost className="h-1/2 w-1/2 text-white/90" />,
  },
};

export const Square: Story = {
  args: { shape: 'square', name: 'Ada Lovelace' },
};

export const WithStatus: Story = {
  name: 'Status - online',
  args: { status: 'online' },
};

const STATUSES = ['online', 'offline', 'away', 'busy'] as const;

export const AllStatuses: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4">
      {STATUSES.map((status) => (
        <div key={status} className="flex flex-col items-center gap-2">
          <Avatar {...args} status={status} />
          <span className="text-p-sm text-fg-secondary">{status}</span>
        </div>
      ))}
    </div>
  ),
};

const SIZES = ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-end gap-4">
      {SIZES.map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Avatar {...args} size={size} status="online" />
          <span className="text-p-sm text-fg-secondary">{size}</span>
        </div>
      ))}
    </div>
  ),
};

export const CustomClassName: Story = {
  name: 'Overriding classes via className',
  args: {
    name: 'Ada Lovelace',
    className: 'ring-2 ring-brand-500 ring-offset-2 rounded-full',
  },
};

export const Editable: Story = {
  name: 'Editable (upload overlay)',
  render: () => (
    <div className="flex items-end gap-4">
      {(['xs', 'md', '2xl'] as const).map((s) => (
        <Avatar
          key={s}
          size={s}
          name="Ada Lovelace"
          editable
          onImageChange={(file) => window.alert(`Picked: ${file.name}`)}
        />
      ))}
    </div>
  ),
};

// `maxSizeMB={1}` needs a real file over 1 MB to see the rejection path —
// there's no way to construct a synthetic oversized `File` here the way a
// unit test could, so exercising this in the browser means manually
// picking a file larger than 1 MB through the OS file dialog.
export const EditableRejected: Story = {
  name: 'Editable — oversized file rejected',
  render: () => {
    function EditableRejectedDemo() {
      const [rejection, setRejection] = useState<string | null>(null);
      return (
        <div className="flex flex-col items-start gap-2">
          <Avatar
            name="Ada Lovelace"
            editable
            maxSizeMB={1}
            onReject={(r) => setRejection(`Rejected "${r.file.name}" (${r.reason})`)}
          />
          {rejection && <p className="text-p-sm text-red-700">{rejection}</p>}
        </div>
      );
    }
    return <EditableRejectedDemo />;
  },
};

export const Group: Story = {
  render: () => (
    <AvatarGroup size="md">
      <Avatar name="Ada Lovelace" />
      <Avatar name="Grace Hopper" />
      <Avatar src="https://i.pravatar.cc/150?img=12" alt="Alan Turing" />
      <Avatar name="Katherine Johnson" />
      <Avatar name="Margaret Hamilton" />
    </AvatarGroup>
  ),
};

export const GroupWithMax: Story = {
  name: 'AvatarGroup with max + overflow count',
  render: () => (
    <AvatarGroup size="md" max={3}>
      <Avatar name="Ada Lovelace" />
      <Avatar name="Grace Hopper" />
      <Avatar src="https://i.pravatar.cc/150?img=12" alt="Alan Turing" />
      <Avatar name="Katherine Johnson" />
      <Avatar name="Margaret Hamilton" />
    </AvatarGroup>
  ),
};

export const GroupSizes: Story = {
  name: 'AvatarGroup across sizes',
  render: () => (
    <div className="flex flex-col gap-4">
      {SIZES.map((size) => (
        <AvatarGroup key={size} size={size} max={4}>
          <Avatar name="Ada Lovelace" />
          <Avatar name="Grace Hopper" />
          <Avatar name="Katherine Johnson" />
          <Avatar name="Margaret Hamilton" />
          <Avatar name="Hedy Lamarr" />
        </AvatarGroup>
      ))}
    </div>
  ),
};
