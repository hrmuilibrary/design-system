import type { Meta, StoryObj } from '@storybook/react-vite';
import { Mail, Phone, Calendar, MapPin, Building2, Pencil } from 'lucide-react';
import { InfoField } from './InfoField';
import { Button } from '../Button';
import type { IconTileTone } from '../IconTile';

const meta = {
  title: 'Components/InfoField',
  component: InfoField,
  // Docs page is authored by hand in InfoField.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    iconTone: {
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
  },
  args: {
    icon: Mail,
    iconTone: 'brand',
    label: 'Email',
    value: 'jane.doe@company.com',
  },
} satisfies Meta<typeof InfoField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithAction: Story = {
  args: {
    action: (
      <Button variant="tertiary" size="sm" iconOnly aria-label="Edit email">
        <Pencil className="size-4" />
      </Button>
    ),
  },
};

export const LongValue: Story = {
  args: {
    icon: MapPin,
    iconTone: 'info',
    label: 'Address',
    value: '1234 Long Street Name, Building 5, Suite 6789, Springfield, IL 62704',
  },
  decorators: [
    (Story) => (
      <div className="w-64">
        <Story />
      </div>
    ),
  ],
};

export const CustomClassName: Story = {
  name: 'Overriding classes via className',
  args: {
    className: 'gap-4',
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

export const AllTones: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      {TONES.map((tone) => (
        <InfoField key={tone} {...args} iconTone={tone} label={tone} />
      ))}
    </div>
  ),
};

export const FieldGroup: Story = {
  render: () => (
    <div className="flex flex-col gap-5 w-80">
      <InfoField icon={Mail} iconTone="brand" label="Email" value="jane.doe@company.com" />
      <InfoField icon={Phone} iconTone="success" label="Phone" value="+1 (555) 123-4567" />
      <InfoField icon={Calendar} iconTone="purple" label="Start date" value="March 3, 2021" />
      <InfoField icon={Building2} iconTone="info" label="Department" value="Engineering" />
    </div>
  ),
};
