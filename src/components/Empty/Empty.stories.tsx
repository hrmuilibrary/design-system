import type { Meta, StoryObj } from '@storybook/react-vite';
import { Inbox, Plus } from 'lucide-react';
import { Empty } from './Empty';
import { Button } from '../Button';
import { IconTile } from '../IconTile';

const meta = {
  title: 'Components/Empty',
  component: Empty,
  // Docs page is authored by hand in Empty.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['lg', 'sm'],
    },
  },
  args: {
    title: 'No results found',
    description: 'Try adjusting your search or filters to find what you’re looking for.',
    size: 'lg',
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Small: Story = {
  args: { size: 'sm' },
};

export const WithAction: Story = {
  name: 'With a call-to-action',
  args: {
    title: 'No projects yet',
    description: 'Create your first project to get started.',
    action: (
      <Button leftIcon={<Plus className="size-4" />} onClick={() => {}}>
        New project
      </Button>
    ),
  },
};

export const CustomIllustration: Story = {
  name: 'Custom illustration',
  args: {
    title: 'Your inbox is empty',
    description: 'New messages will show up here.',
    illustration: <IconTile icon={Inbox} tone="brand" shape="circle" size="xl" />,
  },
};

export const TitleOnly: Story = {
  name: 'Title only, no description',
  args: {
    description: undefined,
  },
};

export const CustomClassName: Story = {
  name: 'Overriding classes via className',
  args: {
    className: 'bg-bg-container rounded-xl',
  },
};
