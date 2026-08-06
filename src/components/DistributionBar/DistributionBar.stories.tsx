import type { Meta, StoryObj } from '@storybook/react-vite';
import { DistributionBar } from './DistributionBar';

const meta = {
  title: 'Components/DistributionBar',
  component: DistributionBar,
  // Docs page is authored by hand in DistributionBar.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  args: {
    segments: [
      { label: 'Salaries', value: 62000, color: 'brand', unit: 'AMD' },
      { label: 'Benefits', value: 18000, color: 'blue', unit: 'AMD' },
      { label: 'Equipment', value: 9000, color: 'purple', unit: 'AMD' },
      { label: 'Other', value: 4000, color: 'gray', unit: 'AMD' },
    ],
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DistributionBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Small: Story = {
  args: { size: 'sm' },
};

export const HiddenLegend: Story = {
  name: 'Hidden legend',
  args: { hideLegend: true },
};

export const HideOneFromLegend: Story = {
  name: 'One segment hidden from legend (still counted)',
  args: {
    segments: [
      { label: 'Salaries', value: 62000, color: 'brand', unit: 'AMD' },
      { label: 'Benefits', value: 18000, color: 'blue', unit: 'AMD' },
      { label: 'Misc (rounding)', value: 500, color: 'gray', unit: 'AMD', hideFromLegend: true },
    ],
  },
};

export const CustomFormatter: Story = {
  args: {
    formatValue: (value) => `${(value / 1000).toFixed(1)}k`,
  },
};

export const Empty: Story = {
  args: { segments: [] },
};

export const AllZero: Story = {
  name: 'All values zero',
  args: {
    segments: [
      { label: 'Salaries', value: 0, color: 'brand' },
      { label: 'Benefits', value: 0, color: 'blue' },
      { label: 'Other', value: 0, color: 'gray' },
    ],
  },
};

export const CustomClassName: Story = {
  name: 'Overriding classes via className',
  args: {
    className: 'gap-1',
  },
};
