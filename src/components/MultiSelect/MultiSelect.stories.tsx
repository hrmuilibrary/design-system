import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Info } from 'lucide-react';
import { MultiSelect } from './MultiSelect';
import { Tooltip } from '../Tooltip';
import type { MultiSelectOption } from './MultiSelect.types';

const tagOptions: MultiSelectOption[] = [
  { value: 'design', label: 'Design' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'product', label: 'Product' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'sales', label: 'Sales' },
  { value: 'legal', label: 'Legal (disabled)', disabled: true },
  { value: 'hr', label: 'People Ops' },
];

const peopleOptions: MultiSelectOption[] = [
  {
    value: 'ada',
    label: 'Ada Lovelace',
    description: 'Engineering · London',
    avatarSrc: 'https://i.pravatar.cc/64?img=47',
  },
  {
    value: 'grace',
    label: 'Grace Hopper',
    description: 'Engineering · Remote',
    avatarSrc: 'https://i.pravatar.cc/64?img=48',
    badge: 'You',
  },
  {
    value: 'alan',
    label: 'Alan Turing',
    description: 'Research · Cambridge',
    avatarSrc: 'https://i.pravatar.cc/64?img=12',
  },
  {
    value: 'margaret',
    label: 'Margaret Hamilton',
    description: 'Engineering · Boston',
    avatarSrc: 'https://i.pravatar.cc/64?img=32',
  },
  {
    value: 'katherine',
    label: 'Katherine Johnson',
    description: 'Data Science · Remote (disabled)',
    avatarSrc: 'https://i.pravatar.cc/64?img=44',
    disabled: true,
  },
];

const idOptions: MultiSelectOption[] = [
  { value: 101, label: 'Ticket #101' },
  { value: 102, label: 'Ticket #102' },
  { value: 103, label: 'Ticket #103' },
];

const meta = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  // Docs page is authored by hand in MultiSelect.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    options: tagOptions,
    placeholder: 'Select teams…',
    size: 'md',
    disabled: false,
    error: false,
    searchable: true,
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MultiSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>(['design']);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
};

export const WithLabel: Story = {
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>([]);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    required: true,
  },
};

export const WithHelperText: Story = {
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>(['engineering']);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    helperText: 'Select every team involved in this project.',
  },
};

export const WithError: Story = {
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>([]);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    error: true,
    errorText: 'Select at least one team.',
  },
};

export const Disabled: Story = {
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>(['design', 'product']);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    disabled: true,
  },
};

export const WithAvatarsAndBadges: Story = {
  name: 'People picker (avatars, descriptions, badges)',
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>(['grace']);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    options: peopleOptions,
    label: 'Reviewers',
    placeholder: 'Add reviewers…',
    suggestionsLabel: 'Team members',
  },
};

export const LockedValues: Story = {
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>(['grace', 'ada']);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    options: peopleOptions,
    label: 'Reviewers',
    lockedValues: ['grace'],
    helperText: '"Grace Hopper" is the requester and can\'t be removed.',
  },
};

export const MaxReached: Story = {
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>(['design', 'engineering']);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    max: 2,
    helperText: 'Up to 2 teams.',
  },
};

export const NotSearchable: Story = {
  name: 'Click-to-open (searchable=false)',
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>([]);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    searchable: false,
  },
};

export const Empty: Story = {
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>([]);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    options: [],
    label: 'Teams',
  },
};

export const WithLabelAddons: Story = {
  name: 'With label addons',
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>([]);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    labelAddons: (
      <Tooltip content="Teams determine who gets notified about this project.">
        <button type="button" aria-label="More info" className="text-fg-tertiary hover:text-fg-default">
          <Info className="h-3.5 w-3.5" />
        </button>
      </Tooltip>
    ),
  },
};

export const WithInitialsAvatars: Story = {
  name: 'With initials avatars',
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>(['design']);
      return <MultiSelect {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
    showAvatars: true,
  },
};

export const GranularCallbacks: Story = {
  name: 'Granular add/remove callbacks',
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>(['design']);
      const [log, setLog] = useState<(string | number)[]>([]);
      return (
        <div className="flex flex-col gap-3">
          <MultiSelect
            {...args}
            value={value}
            onChange={setValue}
            onAdd={(option) => setLog((prev) => [`+ ${option.label}`, ...prev])}
            onRemove={(removedValue) => setLog((prev) => [`- ${removedValue}`, ...prev])}
          />
          <ul className="text-p-sm text-fg-secondary font-mono">
            {log.map((entry, i) => (
              <li key={i}>{entry}</li>
            ))}
          </ul>
        </div>
      );
    }
    return <Controlled />;
  },
  args: {
    label: 'Teams',
  },
};

export const NumericValues: Story = {
  name: 'Numeric values (round-trip through onChange)',
  render: (args) => {
    function NumericMultiSelect() {
      const [value, setValue] = useState<(string | number)[]>([101]);
      return (
        <MultiSelect
          {...args}
          options={idOptions}
          value={value}
          onChange={(vals) => setValue(vals)}
        />
      );
    }
    return <NumericMultiSelect />;
  },
};

const SIZES = ['sm', 'md', 'lg'] as const;

export const AllSizes: Story = {
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<(string | number)[]>(['design']);
      return (
        <div className="flex flex-col gap-4">
          {SIZES.map((size) => (
            <MultiSelect key={size} {...args} size={size} value={value} onChange={setValue} label={size} />
          ))}
        </div>
      );
    }
    return <Controlled />;
  },
};
