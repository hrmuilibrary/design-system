import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { DatePicker } from './DatePicker';
import type { DateRange } from './DatePicker.types';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  // Docs page is authored by hand in DatePicker.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm'],
    },
  },
  args: {
    placeholder: 'Select date',
    size: 'md',
    fullWidth: false,
    range: false,
    disabled: false,
    error: false,
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Start date',
  },
};

export const Controlled: Story = {
  render: (args) => {
    function ControlledDatePicker() {
      const [value, setValue] = useState<Date | null>(new Date());
      return <DatePicker {...args} value={value} onChange={setValue} />;
    }
    return <ControlledDatePicker />;
  },
  args: {
    label: 'Start date',
  },
};

export const RangeMode: Story = {
  render: (args) => {
    function ControlledRangePicker() {
      const [range, setRange] = useState<DateRange>({ start: null, end: null });
      return <DatePicker {...args} range rangeValue={range} onChangeRange={setRange} />;
    }
    return <ControlledRangePicker />;
  },
  args: {
    label: 'Trip dates',
    placeholder: 'Select date range',
  },
};

export const FullWidth: Story = {
  args: { fullWidth: true, label: 'Start date' },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export const Disabled: Story = {
  args: { disabled: true, label: 'Start date' },
};

export const WithError: Story = {
  args: { label: 'Start date', error: true, errorText: 'Please select a valid date.' },
};

export const MinMaxDates: Story = {
  name: 'Min/max dates',
  render: (args) => {
    function MinMaxDemo() {
      const [value, setValue] = useState<Date | null>(null);
      const today = new Date();
      const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14);
      return <DatePicker {...args} value={value} onChange={setValue} minDate={minDate} maxDate={maxDate} />;
    }
    return <MinMaxDemo />;
  },
  args: {
    label: 'Appointment date',
  },
};

export const ExcludedDates: Story = {
  name: 'Excluded dates',
  render: (args) => {
    function ExcludedDemo() {
      const [value, setValue] = useState<Date | null>(null);
      const today = new Date();
      const excludeDates = [
        new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3),
        new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4),
      ];
      return <DatePicker {...args} value={value} onChange={setValue} excludeDates={excludeDates} />;
    }
    return <ExcludedDemo />;
  },
  args: {
    label: 'Delivery date',
  },
};

export const RangeWithMinMax: Story = {
  name: 'Range with min/max',
  render: (args) => {
    function RangeMinMaxDemo() {
      const [range, setRange] = useState<DateRange>({ start: null, end: null });
      const today = new Date();
      const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
      return (
        <DatePicker
          {...args}
          range
          rangeValue={range}
          onChangeRange={setRange}
          minDate={minDate}
          maxDate={maxDate}
        />
      );
    }
    return <RangeMinMaxDemo />;
  },
  args: {
    label: 'Trip dates',
    placeholder: 'Select date range',
  },
};

const SIZES = ['sm', 'md', 'lg'] as const;

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {SIZES.map((size) => (
        <DatePicker key={size} {...args} size={size} label={size} />
      ))}
    </div>
  ),
};
