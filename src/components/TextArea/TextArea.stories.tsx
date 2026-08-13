import type { Meta, StoryObj } from '@storybook/react-vite';
import { Info } from 'lucide-react';
import { TextArea } from './TextArea';
import { Tooltip } from '../Tooltip';

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  // Docs page is authored by hand in TextArea.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    error: {
      control: 'boolean',
    },
    showCount: {
      control: 'boolean',
    },
    rows: {
      control: 'number',
    },
    maxLength: {
      control: 'number',
    },
  },
  args: {
    label: 'Description',
    placeholder: 'Enter a description...',
    helperText: undefined,
    errorText: undefined,
    error: false,
    disabled: false,
    required: false,
    showCount: false,
    rows: 4,
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithHelperText: Story = {
  args: {
    helperText: 'Share a few sentences about yourself.',
  },
};

export const WithError: Story = {
  args: {
    error: true,
    errorText: 'Description is required.',
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'This field is disabled.',
  },
};

export const WithCharacterCount: Story = {
  args: {
    showCount: true,
    maxLength: 200,
    defaultValue: 'Some starting text.',
  },
};

export const NoLabel: Story = {
  args: {
    label: undefined,
  },
};

export const WithLabelAddons: Story = {
  name: 'With label addons',
  args: {
    labelAddons: (
      <Tooltip content="Shown to reviewers on your public profile.">
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

export const CustomClassName: Story = {
  name: 'Overriding classes via className',
  args: {
    className: 'rounded-full',
  },
};
