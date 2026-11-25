import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { DatePicker } from '../DatePicker';
import { TimePicker } from './TimePicker';
import type { TimePickerProps } from './TimePicker.types';
import { dateToTime, timeToDate } from './TimePicker.utils';

const meta = {
  title: 'Components/TimePicker',
  component: TimePicker,
  // Docs page is authored by hand in TimePicker.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm'],
    },
    menuPlacement: {
      control: 'select',
      options: ['auto', 'bottom', 'top'],
    },
  },
  args: {
    label: 'Start time',
    placeholder: 'Start time',
    size: 'md',
    step: 15,
    fullWidth: false,
    searchable: true,
    clearable: true,
    disabled: false,
    error: false,
  },
} satisfies Meta<typeof TimePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Controlled wrapper that also prints the current value. */
function Controlled({ value: initial = null, ...args }: TimePickerProps) {
  const [value, setValue] = useState<string | null>(initial);
  return (
    <div className="flex flex-col gap-2">
      <TimePicker {...args} value={value} onChange={setValue} />
      <span className="text-p-sm text-fg-secondary">Value: {value ?? 'null'}</span>
    </div>
  );
}

/** Pick a suggestion, or type: "9" filters to the 09 hour, "0907" offers 09:07. */
export const Default: Story = {
  render: (args) => <Controlled {...args} />,
};

/** The time is editable text: click between the digits (or use the arrow
 *  keys) and retype, e.g. 14:30 → click before the 0, Backspace, "4" → 14:40. */
export const WithValue: Story = {
  render: (args) => <Controlled {...args} />,
  args: { value: '14:30' },
};

export const Required: Story = {
  render: (args) => <Controlled {...args} />,
  args: { required: true },
};

export const ThirtyMinuteStep: Story = {
  render: (args) => <Controlled {...args} />,
  args: { step: 30 },
};

/** Office hours: suggestions outside 09:00–18:00 stay visible but disabled, and can't be typed. */
export const MinMaxRange: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    minTime: '09:00',
    maxTime: '18:00',
    helperText: 'Between 09:00 and 18:00',
  },
};

/** `excludeTimes` for specific slots, `filterTime` for a rule — here, the lunch hour. */
export const DisabledTimes: Story = {
  render: (args) => <Controlled {...args} />,
  args: {
    excludeTimes: ['09:30', '10:45'],
    filterTime: (time: string) => !time.startsWith('13:'),
    helperText: '09:30, 10:45 and 13:00–13:59 are taken',
  },
};

export const ErrorState: Story = {
  render: (args) => <Controlled {...args} />,
  args: { required: true, errorText: 'Start time is required' },
};

export const Disabled: Story = {
  args: { disabled: true, value: '10:00' },
};

/** Suggestions only, no typing. */
export const NotSearchable: Story = {
  render: (args) => <Controlled {...args} />,
  args: { searchable: false },
};

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Controlled {...args} size="lg" label="Large" />
      <Controlled {...args} size="md" label="Medium" />
      <Controlled {...args} size="sm" label="Small" />
    </div>
  ),
};

export const DarkTheme: Story = {
  globals: { theme: 'dark' },
  render: (args) => <Controlled {...args} />,
  args: { required: true },
};

/** The mobile dialog (forced with `mobile`; it's automatic at viewports ≤ 768px). */
export const Mobile: Story = {
  render: (args) => <Controlled {...args} />,
  args: { mobile: true, required: true, value: '09:30' },
};

export const MobileDark: Story = {
  globals: { theme: 'dark' },
  render: (args) => <Controlled {...args} />,
  args: { mobile: true, required: true, minTime: '09:00', maxTime: '18:00' },
};

/** A date + time pair like the leave-request form, combined into one `Date` with `timeToDate`. */
export const WithDatePicker: Story = {
  render: function Render() {
    const [date, setDate] = useState<Date | null>(null);
    const [time, setTime] = useState<string | null>(null);
    const combined = date && time ? timeToDate(time, date) : null;
    return (
      <div className="flex w-[560px] max-w-full flex-col gap-3">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <DatePicker label="Start date" required fullWidth value={date} onChange={setDate} />
          <TimePicker
            label="Start time"
            placeholder="Start time"
            required
            fullWidth
            value={time}
            onChange={setTime}
          />
        </div>
        <p className="text-p-sm text-fg-secondary">
          Combined:{' '}
          {combined
            ? `${combined.toDateString()} ${dateToTime(combined)}`
            : 'pick a date and a time'}
        </p>
      </div>
    );
  },
};
