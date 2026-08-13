import type { Meta, StoryObj } from '@storybook/react-vite';
import { Bell } from 'lucide-react';
import { IconTile } from './IconTile';
import type { IconTileShape, IconTileSize, IconTileTone } from './IconTile.types';

const meta = {
  title: 'Components/IconTile',
  component: IconTile,
  // Docs page is authored by hand in IconTile.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    tone: {
      control: 'select',
      options: [
        'brand',
        'info',
        'gray',
        'purple',
        'pink',
        'yellow',
        'success',
        'warning',
        'danger',
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['rounded', 'circle'],
    },
  },
  args: {
    icon: Bell,
    tone: 'gray',
    size: 'md',
    shape: 'rounded',
  },
} satisfies Meta<typeof IconTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Brand: Story = { args: { tone: 'brand' } };

export const Info: Story = { args: { tone: 'info' } };

export const Purple: Story = { args: { tone: 'purple' } };

export const Pink: Story = { args: { tone: 'pink' } };

export const Yellow: Story = { args: { tone: 'yellow' } };

export const Success: Story = { args: { tone: 'success' } };

export const Warning: Story = { args: { tone: 'warning' } };

export const Danger: Story = { args: { tone: 'danger' } };

export const Circle: Story = {
  args: { shape: 'circle', tone: 'brand' },
};

export const WithAccessibleLabel: Story = {
  name: 'With an aria-label (non-decorative)',
  args: { tone: 'brand', 'aria-label': 'Notifications' },
};

export const CustomClassName: Story = {
  name: 'Overriding classes via className',
  args: {
    tone: 'success',
    className: 'bg-green-100 dark:bg-green-900/30',
  },
};

const TONES: IconTileTone[] = [
  'brand',
  'info',
  'gray',
  'purple',
  'pink',
  'yellow',
  'success',
  'warning',
  'danger',
];
const SIZES: IconTileSize[] = ['sm', 'md', 'lg', 'xl'];
const SHAPES: IconTileShape[] = ['rounded', 'circle'];

export const AllTones: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      {TONES.map((tone) => (
        <IconTile key={tone} {...args} tone={tone} />
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {SIZES.map((size) => (
        <IconTile key={size} {...args} size={size} />
      ))}
    </div>
  ),
};

export const AllShapes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      {SHAPES.map((shape) => (
        <IconTile key={shape} {...args} shape={shape} />
      ))}
    </div>
  ),
};
