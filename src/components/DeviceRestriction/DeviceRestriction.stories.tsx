import type { Meta, StoryObj } from '@storybook/react-vite';
import { Laptop } from 'lucide-react';
import { DeviceRestriction } from './DeviceRestriction';
import { IconTile } from '../IconTile';

const meta = {
  title: 'Components/DeviceRestriction',
  component: DeviceRestriction,
  // Docs page is authored by hand in DeviceRestriction.docs.mdx instead of
  // the `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['mobile', 'tablet', 'desktop', 'mobile-tablet'],
    },
    locale: {
      control: 'select',
      options: ['en-US', 'ru-RU', 'hy-AM'],
    },
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DeviceRestriction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mobile: Story = {
  args: { type: 'mobile' },
};

export const Tablet: Story = {
  args: { type: 'tablet' },
};

export const Desktop: Story = {
  args: { type: 'desktop' },
};

export const MobileTablet: Story = {
  name: 'Mobile + tablet',
  args: { type: 'mobile-tablet' },
};

export const CustomTitle: Story = {
  name: 'Custom title',
  args: {
    type: 'mobile-tablet',
    title: 'Continue on mobile',
  },
};

export const CustomDescription: Story = {
  name: 'Custom description',
  args: {
    type: 'mobile-tablet',
    description: 'For the best experience, open this page from your phone or tablet.',
  },
};

export const CustomIcon: Story = {
  name: 'Custom icon',
  args: {
    type: 'desktop',
    icon: <IconTile icon={Laptop} tone="brand" shape="circle" size="xl" />,
  },
};

export const LongContent: Story = {
  name: 'Long content',
  args: {
    type: 'mobile-tablet',
    title: 'This experience was designed exclusively for smaller, touch-first screens',
    description:
      'We rebuilt this flow around the way people actually hold and tap a phone or tablet — dense desktop layouts and mouse-driven interactions just don’t translate. Please switch to a mobile or tablet device to pick up right where you left off.',
  },
};

export const FillHeight: Story = {
  name: 'Full-height (fillHeight)',
  args: { type: 'desktop', fillHeight: true },
  decorators: [
    (Story) => (
      <div className="h-96 w-96 border border-dashed border-border-default">
        <Story />
      </div>
    ),
  ],
};
