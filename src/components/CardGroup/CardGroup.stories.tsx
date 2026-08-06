import type { Meta, StoryObj } from '@storybook/react-vite';
import { CardGroup } from './CardGroup';

const meta = {
  title: 'Components/CardGroup',
  component: CardGroup,
  // Docs page is authored by hand in CardGroup.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CardGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: { text: 'Billing' },
    children: (
      <>
        <div className="p-4 text-p-std text-fg-default">Plan: Enterprise</div>
        <div className="p-4 text-p-std text-fg-default">Next invoice: Jan 1</div>
      </>
    ),
  },
};

export const TitleOnRight: Story = {
  name: 'Title placement: right',
  args: {
    title: { text: 'Security', placement: 'right', color: 'blue' },
    children: (
      <>
        <div className="p-4 text-p-std text-fg-default">Two-factor auth: On</div>
        <div className="p-4 text-p-std text-fg-default">Active sessions: 2</div>
      </>
    ),
  },
};

export const TitleOnTop: Story = {
  name: 'Title placement: top',
  args: {
    title: { text: 'Notifications', placement: 'top', color: 'purple' },
    children: (
      <>
        <div className="p-4 text-p-std text-fg-default">Email: On</div>
        <div className="p-4 text-p-std text-fg-default">Push: Off</div>
      </>
    ),
  },
};

const COLORS = ['brand', 'blue', 'purple', 'pink', 'yellow', 'gray'] as const;

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {COLORS.map((color) => (
        <CardGroup key={color} title={{ text: color, color }}>
          <div className="p-4 text-p-std text-fg-default">Content for {color}</div>
        </CardGroup>
      ))}
    </div>
  ),
};

export const WithHeaderAndNoDivider: Story = {
  name: 'header slot, noDivider',
  args: {
    title: { text: 'Team' },
    noDivider: true,
    header: <div className="p-4 text-p-sm font-medium text-fg-secondary">4 members</div>,
    children: (
      <>
        <div className="p-4 text-p-std text-fg-default">Ada Lovelace</div>
        <div className="p-4 text-p-std text-fg-default">Grace Hopper</div>
      </>
    ),
  },
};

export const NoTitle: Story = {
  name: 'No title (plain bordered box)',
  args: {
    children: (
      <>
        <div className="p-4 text-p-std text-fg-default">Section one</div>
        <div className="p-4 text-p-std text-fg-default">Section two</div>
      </>
    ),
  },
};

export const CustomClassName: Story = {
  name: 'Overriding classes via className',
  args: {
    title: { text: 'Custom' },
    className: 'border-brand-500 shadow-z3',
    children: <div className="p-4 text-p-std text-fg-default">Content</div>,
  },
};
