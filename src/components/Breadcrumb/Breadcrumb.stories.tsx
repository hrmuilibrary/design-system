import type { Meta, StoryObj } from '@storybook/react-vite';
import { ChevronRight } from 'lucide-react';
import { Breadcrumb } from './Breadcrumb';

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  // Docs page is authored by hand in Breadcrumb.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['md', 'sm'],
    },
  },
  args: {
    items: [
      { value: 'home', label: 'Home', href: '#' },
      { value: 'settings', label: 'Settings', href: '#' },
      { value: 'profile', label: 'Profile' },
    ],
    size: 'md',
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Small: Story = {
  args: { size: 'sm' },
};

export const WithOnSelect: Story = {
  name: 'With onSelect (button crumbs)',
  args: {
    items: [
      { value: 'home', label: 'Home' },
      { value: 'settings', label: 'Settings' },
      { value: 'profile', label: 'Profile' },
    ],
    onSelect: (value) => console.log('selected', value),
  },
};

export const WithDisabledCrumb: Story = {
  name: 'With a disabled crumb',
  args: {
    items: [
      { value: 'home', label: 'Home', href: '#' },
      { value: 'archived', label: 'Archived project', disabled: true },
      { value: 'profile', label: 'Profile' },
    ],
  },
};

export const CustomSeparator: Story = {
  args: {
    separator: <ChevronRight className="size-3.5" />,
  },
};

export const CustomClassName: Story = {
  name: 'Overriding classes via className',
  args: {
    className: 'text-fg-brand',
  },
};
