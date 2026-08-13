import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Bell, CreditCard, HelpCircle, Shield } from 'lucide-react';
import { Accordion, AccordionItem } from './Accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  // Docs page is authored by hand in Accordion.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
    },
  },
  args: {
    type: 'single',
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <Accordion {...args} defaultValue="billing" className="w-96">
      <AccordionItem value="billing" title="How does billing work?">
        Billing is monthly, based on active seats. Upgrading or downgrading prorates automatically
        on your next invoice.
      </AccordionItem>
      <AccordionItem value="cancel" title="Can I cancel anytime?">
        Yes — cancel from account settings and access continues through the end of the current
        billing period.
      </AccordionItem>
      <AccordionItem value="support" title="What support is included?">
        All plans include email support; Enterprise plans add a dedicated Slack channel and a 1-hour
        response SLA.
      </AccordionItem>
    </Accordion>
  ),
};

export const Multiple: Story = {
  args: { type: 'multiple' },
  render: (args) => (
    <Accordion {...args} defaultValue={['billing', 'support']} className="w-96">
      <AccordionItem value="billing" title="How does billing work?">
        Billing is monthly, based on active seats. Upgrading or downgrading prorates automatically
        on your next invoice.
      </AccordionItem>
      <AccordionItem value="cancel" title="Can I cancel anytime?">
        Yes — cancel from account settings and access continues through the end of the current
        billing period.
      </AccordionItem>
      <AccordionItem value="support" title="What support is included?">
        All plans include email support; Enterprise plans add a dedicated Slack channel and a 1-hour
        response SLA.
      </AccordionItem>
    </Accordion>
  ),
};

export const NumericValues: Story = {
  name: 'Numeric values (round-trip through onValueChange)',
  args: { defaultValue: 1 },
  render: (args) => (
    <Accordion {...args} className="w-96">
      <AccordionItem value={1} title="Step 1">
        Contents of step 1.
      </AccordionItem>
      <AccordionItem value={2} title="Step 2">
        Contents of step 2.
      </AccordionItem>
      <AccordionItem value={3} title="Step 3">
        Contents of step 3.
      </AccordionItem>
    </Accordion>
  ),
};

export const ControlledNumericValues: Story = {
  name: 'Controlled numeric values (single mode)',
  render: (args) => {
    function ControlledNumericDemo() {
      const [value, setValue] = useState<number | undefined>(1);
      return (
        <Accordion
          {...args}
          value={value}
          onValueChange={(next) => setValue(next as number | undefined)}
          className="w-96"
        >
          <AccordionItem value={1} title="Step 1">
            Contents of step 1.
          </AccordionItem>
          <AccordionItem value={2} title="Step 2">
            Contents of step 2.
          </AccordionItem>
          <AccordionItem value={3} title="Step 3">
            Contents of step 3.
          </AccordionItem>
        </Accordion>
      );
    }
    return <ControlledNumericDemo />;
  },
};

export const WithIcons: Story = {
  render: (args) => (
    <Accordion {...args} defaultValue="billing" className="w-96">
      <AccordionItem value="billing" title="Billing" icon={<CreditCard className="size-4" />}>
        Billing is monthly, based on active seats.
      </AccordionItem>
      <AccordionItem value="notifications" title="Notifications" icon={<Bell className="size-4" />}>
        Configure which events trigger an email or in-app notification.
      </AccordionItem>
      <AccordionItem value="security" title="Security" icon={<Shield className="size-4" />}>
        Enable SSO and enforce two-factor authentication for your workspace.
      </AccordionItem>
      <AccordionItem value="help" title="Help & FAQ" icon={<HelpCircle className="size-4" />}>
        Browse the knowledge base or contact support for anything else.
      </AccordionItem>
    </Accordion>
  ),
};

export const DisabledItem: Story = {
  name: 'Disabled item',
  render: (args) => (
    <Accordion {...args} defaultValue="billing" className="w-96">
      <AccordionItem value="billing" title="How does billing work?">
        Billing is monthly, based on active seats.
      </AccordionItem>
      <AccordionItem value="legacy" title="Legacy plans (unavailable)" disabled>
        Legacy plans are no longer available to new customers.
      </AccordionItem>
      <AccordionItem value="support" title="What support is included?">
        All plans include email support.
      </AccordionItem>
    </Accordion>
  ),
};

export const Controlled: Story = {
  render: (args) => {
    function ControlledExample() {
      const [value, setValue] = useState<string | number>('billing');
      return (
        <Accordion
          {...args}
          value={value}
          onValueChange={(next) => setValue(next as string | number)}
          className="w-96"
        >
          <AccordionItem value="billing" title="How does billing work?">
            Billing is monthly, based on active seats.
          </AccordionItem>
          <AccordionItem value="cancel" title="Can I cancel anytime?">
            Yes — cancel from account settings anytime.
          </AccordionItem>
        </Accordion>
      );
    }
    return <ControlledExample />;
  },
};

export const CustomClassName: Story = {
  name: 'Overriding classes via className',
  render: (args) => (
    <Accordion {...args} defaultValue="billing" className="w-96 border-brand-500 shadow-z3">
      <AccordionItem value="billing" title="How does billing work?">
        Billing is monthly, based on active seats.
      </AccordionItem>
      <AccordionItem value="cancel" title="Can I cancel anytime?">
        Yes — cancel from account settings anytime.
      </AccordionItem>
    </Accordion>
  ),
};

export const ShowDivider: Story = {
  name: 'Divider between header and content',
  args: { showDivider: true },
  render: (args) => (
    <Accordion {...args} defaultValue="billing" className="w-96">
      <AccordionItem value="billing" title="How does billing work?">
        Billing is monthly, based on active seats.
      </AccordionItem>
      <AccordionItem value="cancel" title="Can I cancel anytime?">
        Yes — cancel from account settings anytime.
      </AccordionItem>
    </Accordion>
  ),
};

export const NotAnimated: Story = {
  name: 'animated={false}',
  args: { animated: false },
  render: (args) => (
    <Accordion {...args} defaultValue="billing" className="w-96">
      <AccordionItem value="billing" title="How does billing work?">
        Billing is monthly, based on active seats. This item toggles open/closed instantly, with no
        height transition — the pre-1.x behavior.
      </AccordionItem>
      <AccordionItem value="cancel" title="Can I cancel anytime?">
        Yes — cancel from account settings anytime.
      </AccordionItem>
    </Accordion>
  ),
};

export const DynamicContent: Story = {
  name: 'Content that changes height while open',
  render: (args) => {
    function DynamicContentExample() {
      const [lines, setLines] = useState(1);
      return (
        <Accordion {...args} defaultValue="notes" className="w-96">
          <AccordionItem value="notes" title="Meeting notes">
            <div className="flex flex-col gap-2">
              {Array.from({ length: lines }, (_, i) => (
                <p key={i}>
                  Note {i + 1}: the panel height follows this content with no JS measurement.
                </p>
              ))}
              <button
                type="button"
                onClick={() => setLines((n) => n + 1)}
                className="self-start text-fg-brand hover:underline text-p-sm font-medium"
              >
                Add a note
              </button>
            </div>
          </AccordionItem>
        </Accordion>
      );
    }
    return <DynamicContentExample />;
  },
};
