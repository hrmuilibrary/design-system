import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from './Text';
import type { TextVariant } from './Text.types';

const meta = {
  title: 'Components/Text',
  component: Text,
  // Docs page is authored by hand in Text.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'h-xl',
        'h-lg',
        'h-md',
        'h-std',
        'h-sm',
        'h-xs',
        'p-lg',
        'p-md',
        'p-std',
        'p-sm',
        'p-xs',
        'label-lg',
        'label-md',
        'label-std',
        'label-sm',
        'label-xs',
        'label-xxs',
      ],
    },
    weight: {
      control: 'select',
      options: [undefined, 'normal', 'medium', 'semibold', 'bold'],
    },
    color: {
      control: 'select',
      options: [
        'default',
        'secondary',
        'tertiary',
        'disabled',
        'inverse',
        'brand',
        'info',
        'success',
        'warning',
        'danger',
      ],
    },
  },
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    variant: 'p-std',
    color: 'default',
    truncate: false,
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Heading: Story = {
  args: { variant: 'h-lg', children: 'Heading text' },
};

export const Paragraph: Story = {
  args: { variant: 'p-md', children: 'Paragraph text' },
};

export const Label: Story = {
  args: { variant: 'label-md', children: 'Label text' },
};

export const Weighted: Story = {
  args: { weight: 'semibold', children: 'Semibold text' },
};

export const Truncated: Story = {
  args: {
    truncate: true,
    children: 'This is a very long line of text that will be truncated with an ellipsis',
  },
  decorators: [
    (Story) => (
      <div className="w-48">
        <Story />
      </div>
    ),
  ],
};

export const Clamped: Story = {
  name: 'Clamped to N lines',
  args: {
    clamp: 2,
    children:
      'This is a much longer paragraph of text that will be clamped to exactly two lines with an ellipsis, no matter how much content follows after the cutoff point in the source string.',
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
};

export const CustomElement: Story = {
  name: 'Overriding the rendered element via `as`',
  args: {
    as: 'label',
    variant: 'label-std',
    children: 'Rendered as a <label>',
  },
};

export const CustomClassName: Story = {
  name: 'Overriding classes via className',
  args: {
    className: 'italic underline',
    children: 'Custom styled text',
  },
};

const HEADING_VARIANTS: TextVariant[] = ['h-xl', 'h-lg', 'h-md', 'h-std', 'h-sm', 'h-xs'];
const PARAGRAPH_VARIANTS: TextVariant[] = ['p-lg', 'p-md', 'p-std', 'p-sm', 'p-xs'];
const LABEL_VARIANTS: TextVariant[] = [
  'label-lg',
  'label-md',
  'label-std',
  'label-sm',
  'label-xs',
  'label-xxs',
];

export const AllHeadingVariants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      {HEADING_VARIANTS.map((variant) => (
        <Text key={variant} {...args} variant={variant}>
          {variant}
        </Text>
      ))}
    </div>
  ),
};

export const AllParagraphVariants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      {PARAGRAPH_VARIANTS.map((variant) => (
        <Text key={variant} {...args} variant={variant}>
          {variant}
        </Text>
      ))}
    </div>
  ),
};

export const AllLabelVariants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      {LABEL_VARIANTS.map((variant) => (
        <Text key={variant} {...args} variant={variant}>
          {variant}
        </Text>
      ))}
    </div>
  ),
};

const COLORS = [
  'default',
  'secondary',
  'tertiary',
  'disabled',
  'brand',
  'info',
  'success',
  'warning',
  'danger',
] as const;

export const AllColors: Story = {
  render: (args) => (
    <div className="flex flex-col gap-2">
      {COLORS.map((color) => (
        <Text key={color} {...args} color={color}>
          {color}
        </Text>
      ))}
    </div>
  ),
};
