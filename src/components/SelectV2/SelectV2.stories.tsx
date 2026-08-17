import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Info } from 'lucide-react';
import { SelectV2 } from './SelectV2';
import { Tooltip } from '../Tooltip';
import type { SelectV2BaseProps, SelectV2Option } from './SelectV2.types';
import type { OptionValue } from '../../types';

const fruitOptions: SelectV2Option[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'durian', label: 'Durian (disabled)', disabled: true },
  { value: 'elderberry', label: 'Elderberry' },
];

const groupedFruitOptions: SelectV2Option[] = [
  { value: 'banana', label: 'Banana' },
  { value: 'apple', label: 'Apple', group: 'Pome' },
  { value: 'pear', label: 'Pear', group: 'Pome' },
  { value: 'cherry', label: 'Cherry', group: 'Stone' },
  { value: 'peach', label: 'Peach', group: 'Stone' },
];

const peopleOptions: SelectV2Option[] = [
  { value: 'ada', label: 'Ada Lovelace', description: 'Engineering · London' },
  { value: 'grace', label: 'Grace Hopper', description: 'Engineering · Remote' },
  { value: 'alan', label: 'Alan Turing', description: 'Research · Cambridge' },
  { value: 'margaret', label: 'Margaret Hamilton', description: 'Engineering · Boston' },
  {
    value: 'katherine',
    label: 'Katherine Johnson',
    description: 'Data Science · Remote (disabled)',
    disabled: true,
  },
];

const bigOptions: SelectV2Option[] = Array.from({ length: 5000 }, (_, i) => ({
  value: i,
  label: `Option #${i + 1}`,
}));

function fakeSearch(all: SelectV2Option[], query: string): Promise<SelectV2Option[]> {
  const q = query.trim().toLowerCase();
  const matches = q
    ? all.filter((o) =>
        (typeof o.label === 'string' ? o.label : String(o.value)).toLowerCase().includes(q),
      )
    : all;
  return new Promise((resolve) => setTimeout(() => resolve(matches), 600));
}

const meta = {
  title: 'Components/SelectV2',
  component: SelectV2,
  // Docs page is authored by hand in SelectV2.docs.mdx instead of the
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
    options: fruitOptions,
    placeholder: 'Select a fruit…',
    size: 'md',
    disabled: false,
    error: false,
    required: false,
    loading: false,
    clearable: false,
    searchable: true,
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof SelectV2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>('apple');
      return <SelectV2 {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
};

export const WithLabel: Story = {
  render: (args: SelectV2BaseProps) => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>();
      return <SelectV2 {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: { label: 'Favorite fruit' },
};

export const WithHelperText: Story = {
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>();
      return <SelectV2 {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: { label: 'Favorite fruit', helperText: 'Pick the one you like best.' },
};

export const WithError: Story = {
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>();
      return <SelectV2 {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: { label: 'Favorite fruit', error: true, errorText: 'This field is required.' },
};

export const Required: Story = {
  render: (args: SelectV2BaseProps) => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>();
      return <SelectV2 {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: { label: 'Required', required: true },
};

export const Disabled: Story = {
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>('banana');
      return <SelectV2 {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: { label: 'Favorite fruit', disabled: true },
};

export const Loading: Story = {
  args: { label: 'Favorite fruit', loading: true },
};

export const Clearable: Story = {
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>('cherry');
      return <SelectV2 {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: { label: 'Favorite fruit', clearable: true },
};

export const Grouped: Story = {
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>();
      return <SelectV2 {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: { label: 'Favorite fruit', options: groupedFruitOptions },
};

export const WithDescriptions: Story = {
  name: 'Per-option descriptions',
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>();
      return <SelectV2 {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: { label: 'Reviewer', options: peopleOptions, placeholder: 'Choose a reviewer…' },
};

export const WithLabelAddons: Story = {
  name: 'With label addons',
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>();
      return <SelectV2 {...args} value={value} onChange={setValue} />;
    }
    return <Controlled />;
  },
  args: {
    label: 'Favorite fruit',
    labelAddons: (
      <Tooltip content="This affects the suggestions on your dashboard.">
        <button
          type="button"
          aria-label="More info"
          className="text-fg-tertiary hover:text-fg-default"
        >
          <Info className="h-3.5 w-3.5" />
        </button>
      </Tooltip>
    ),
  },
};

export const MultiSelectStory: Story = {
  name: 'Multi-select (isMulti)',
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue[]>(['design']);
      return (
        <SelectV2
          {...args}
          isMulti
          options={[
            { value: 'design', label: 'Design' },
            { value: 'engineering', label: 'Engineering' },
            { value: 'product', label: 'Product' },
            { value: 'marketing', label: 'Marketing' },
            { value: 'sales', label: 'Sales (disabled)', disabled: true },
          ]}
          value={value}
          onChange={setValue}
        />
      );
    }
    return <Controlled />;
  },
  args: { label: 'Teams', placeholder: 'Select teams…' },
};

export const Async: Story = {
  name: 'Async (loadOptions)',
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>();
      return (
        <SelectV2
          {...args}
          options={[]}
          loadOptions={(input) => fakeSearch(peopleOptions, input)}
          defaultOptions
          value={value}
          onChange={setValue}
        />
      );
    }
    return <Controlled />;
  },
  args: { label: 'Reviewer', placeholder: 'Search people…' },
};

export const Creatable: Story = {
  name: 'Creatable',
  render: (args) => {
    function Controlled() {
      const [options, setOptions] = useState(fruitOptions);
      const [value, setValue] = useState<OptionValue | undefined>();
      return (
        <SelectV2
          {...args}
          options={options}
          creatable
          onCreateOption={(text) => setOptions((prev) => [...prev, { value: text, label: text }])}
          value={value}
          onChange={setValue}
        />
      );
    }
    return <Controlled />;
  },
  args: { label: 'Favorite fruit', placeholder: 'Select or type a fruit…' },
};

export const AsyncCreatableStory: Story = {
  name: 'Async + creatable (composed)',
  render: (args) => {
    function Controlled() {
      const [known, setKnown] = useState(peopleOptions);
      const [value, setValue] = useState<OptionValue | undefined>();
      return (
        <SelectV2
          {...args}
          options={[]}
          loadOptions={(input) => fakeSearch(known, input)}
          defaultOptions
          creatable
          onCreateOption={(text) => setKnown((prev) => [...prev, { value: text, label: text }])}
          value={value}
          onChange={setValue}
        />
      );
    }
    return <Controlled />;
  },
  args: { label: 'Reviewer', placeholder: 'Search or add someone…' },
};

export const Virtualized: Story = {
  name: 'Virtualized (5,000 options)',
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>();
      return (
        <SelectV2 {...args} options={bigOptions} virtualized value={value} onChange={setValue} />
      );
    }
    return <Controlled />;
  },
  args: { label: 'Pick one of 5,000', placeholder: 'Search…' },
};

const SIZES = ['sm', 'md', 'lg'] as const;

export const AllSizes: Story = {
  render: (args) => {
    function Controlled() {
      const [value, setValue] = useState<OptionValue | undefined>('apple');
      return (
        <div className="flex flex-col gap-4">
          {SIZES.map((size) => (
            <SelectV2
              key={size}
              {...args}
              size={size}
              value={value}
              onChange={setValue}
              label={size}
            />
          ))}
        </div>
      );
    }
    return <Controlled />;
  },
};
