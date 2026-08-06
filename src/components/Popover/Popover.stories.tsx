import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
import { Input } from '../Input';
import { Popover } from './Popover';

const meta = {
  title: 'Components/Popover',
  component: Popover,
  // Docs page is authored by hand in Popover.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    side: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <Popover {...args} content="Interactive content goes here.">
      <Button variant="secondary">Click me</Button>
    </Popover>
  ),
};

export const WithInteractiveContent: Story = {
  name: 'With interactive content',
  render: (args) => (
    <Popover
      {...args}
      autoFocus
      content={
        <div className="flex w-48 flex-col gap-2">
          <Input placeholder="Type here..." />
          <Button size="sm" onClick={() => {}}>
            Submit
          </Button>
        </div>
      }
    >
      <Button variant="secondary">Open form</Button>
    </Popover>
  ),
};

const SIDES = ['top', 'bottom', 'left', 'right'] as const;

export const AllSides: Story = {
  render: (args) => (
    <div className="grid grid-cols-2 gap-16 p-16">
      {SIDES.map((side) => (
        <Popover key={side} {...args} side={side} content={`Side: ${side}`}>
          <Button variant="secondary">{side}</Button>
        </Popover>
      ))}
    </div>
  ),
};

const ALIGNS = ['start', 'center', 'end'] as const;

export const AllAligns: Story = {
  render: (args) => (
    <div className="flex gap-8 p-16">
      {ALIGNS.map((align) => (
        <Popover key={align} {...args} align={align} content={`Align: ${align}`}>
          <Button variant="secondary">{align}</Button>
        </Popover>
      ))}
    </div>
  ),
};

export const NoArrow: Story = {
  args: { showArrow: false },
  render: (args) => (
    <Popover {...args} content="No arrow on this one.">
      <Button variant="secondary">Click me</Button>
    </Popover>
  ),
};

export const Controlled: Story = {
  render: (args) => {
    function ControlledExample() {
      const [open, setOpen] = useState(false);
      return (
        <Popover {...args} open={open} onOpenChange={setOpen} content="Controlled popover">
          <Button variant="secondary">{open ? 'Close' : 'Open'}</Button>
        </Popover>
      );
    }
    return <ControlledExample />;
  },
};

export const NearViewportEdge: Story = {
  name: 'Near the viewport edge (auto-flip)',
  render: (args) => (
    <div style={{ marginTop: '75vh' }}>
      <Popover {...args} content="This flips to the top since there's no room below.">
        <Button variant="secondary">Near the bottom</Button>
      </Popover>
    </div>
  ),
};

export const InsideOverflowContainer: Story = {
  name: 'Inside an overflow-auto container',
  render: (args) => (
    <div className="h-32 w-64 overflow-auto border border-border-default p-4">
      <Popover {...args} content="This should not be clipped by the container.">
        <Button variant="secondary">Open</Button>
      </Popover>
    </div>
  ),
};
