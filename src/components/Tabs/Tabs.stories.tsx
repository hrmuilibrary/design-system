import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Bell, CreditCard, Settings, Shield, X } from 'lucide-react';
import { Tab, TabList, TabPanel, Tabs } from './Tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  // Docs page is authored by hand in Tabs.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['underline', 'pills', 'boxed'],
    },
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm'],
    },
  },
  args: {
    variant: 'underline',
    size: 'md',
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="profile" className="w-96">
      <TabList>
        <Tab value="profile">Profile</Tab>
        <Tab value="billing">Billing</Tab>
        <Tab value="security">Security</Tab>
      </TabList>
      <TabPanel value="profile" className="text-p-std text-fg-secondary">
        Update your name, email, and avatar.
      </TabPanel>
      <TabPanel value="billing" className="text-p-std text-fg-secondary">
        Manage your plan and payment methods.
      </TabPanel>
      <TabPanel value="security" className="text-p-std text-fg-secondary">
        Configure two-factor authentication and active sessions.
      </TabPanel>
    </Tabs>
  ),
};

export const Pills: Story = {
  args: { variant: 'pills' },
  render: (args) => (
    <Tabs {...args} defaultValue="profile" className="w-96">
      <TabList>
        <Tab value="profile">Profile</Tab>
        <Tab value="billing">Billing</Tab>
        <Tab value="security">Security</Tab>
      </TabList>
      <TabPanel value="profile" className="text-p-std text-fg-secondary">
        Update your name, email, and avatar.
      </TabPanel>
      <TabPanel value="billing" className="text-p-std text-fg-secondary">
        Manage your plan and payment methods.
      </TabPanel>
      <TabPanel value="security" className="text-p-std text-fg-secondary">
        Configure two-factor authentication and active sessions.
      </TabPanel>
    </Tabs>
  ),
};

export const Boxed: Story = {
  args: { variant: 'boxed' },
  render: (args) => (
    <Tabs {...args} defaultValue="profile" className="w-96">
      <TabList>
        <Tab value="profile">Profile</Tab>
        <Tab value="billing">Billing</Tab>
        <Tab value="security">Security</Tab>
      </TabList>
      <TabPanel value="profile" className="text-p-std text-fg-secondary">
        Update your name, email, and avatar.
      </TabPanel>
      <TabPanel value="billing" className="text-p-std text-fg-secondary">
        Manage your plan and payment methods.
      </TabPanel>
      <TabPanel value="security" className="text-p-std text-fg-secondary">
        Configure two-factor authentication and active sessions.
      </TabPanel>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="profile" className="w-96">
      <TabList>
        <Tab value="profile" icon={<CreditCard className="size-4" />}>
          Billing
        </Tab>
        <Tab value="notifications" icon={<Bell className="size-4" />}>
          Notifications
        </Tab>
        <Tab value="security" icon={<Shield className="size-4" />}>
          Security
        </Tab>
        <Tab value="settings" icon={<Settings className="size-4" />}>
          Settings
        </Tab>
      </TabList>
      <TabPanel value="profile" className="text-p-std text-fg-secondary">
        Manage your plan and payment methods.
      </TabPanel>
      <TabPanel value="notifications" className="text-p-std text-fg-secondary">
        Configure which events trigger an email or in-app notification.
      </TabPanel>
      <TabPanel value="security" className="text-p-std text-fg-secondary">
        Configure two-factor authentication and active sessions.
      </TabPanel>
      <TabPanel value="settings" className="text-p-std text-fg-secondary">
        General workspace preferences.
      </TabPanel>
    </Tabs>
  ),
};

export const WithBadges: Story = {
  render: (args) => (
    <Tabs {...args} defaultValue="inbox" className="w-96">
      <TabList>
        <Tab value="inbox" badge={12}>
          Inbox
        </Tab>
        <Tab value="drafts" badge={2}>
          Drafts
        </Tab>
        <Tab value="sent">Sent</Tab>
      </TabList>
      <TabPanel value="inbox" className="text-p-std text-fg-secondary">
        12 unread messages.
      </TabPanel>
      <TabPanel value="drafts" className="text-p-std text-fg-secondary">
        2 unsent drafts.
      </TabPanel>
      <TabPanel value="sent" className="text-p-std text-fg-secondary">
        Nothing new here.
      </TabPanel>
    </Tabs>
  ),
};

export const DisabledTab: Story = {
  name: 'Disabled tab',
  render: (args) => (
    <Tabs {...args} defaultValue="profile" className="w-96">
      <TabList>
        <Tab value="profile">Profile</Tab>
        <Tab value="legacy" disabled>
          Legacy (unavailable)
        </Tab>
        <Tab value="security">Security</Tab>
      </TabList>
      <TabPanel value="profile" className="text-p-std text-fg-secondary">
        Update your name, email, and avatar.
      </TabPanel>
      <TabPanel value="legacy" className="text-p-std text-fg-secondary">
        Legacy settings are no longer editable.
      </TabPanel>
      <TabPanel value="security" className="text-p-std text-fg-secondary">
        Configure two-factor authentication and active sessions.
      </TabPanel>
    </Tabs>
  ),
};

export const Controlled: Story = {
  render: (args) => {
    function ControlledExample() {
      const [value, setValue] = useState('profile');
      return (
        <Tabs {...args} value={value} onValueChange={setValue} className="w-96">
          <TabList>
            <Tab value="profile">Profile</Tab>
            <Tab value="billing">Billing</Tab>
            <Tab value="security">Security</Tab>
          </TabList>
          <TabPanel value="profile" className="text-p-std text-fg-secondary">
            Update your name, email, and avatar.
          </TabPanel>
          <TabPanel value="billing" className="text-p-std text-fg-secondary">
            Manage your plan and payment methods.
          </TabPanel>
          <TabPanel value="security" className="text-p-std text-fg-secondary">
            Configure two-factor authentication and active sessions.
          </TabPanel>
        </Tabs>
      );
    }
    return <ControlledExample />;
  },
};

export const CustomClassName: Story = {
  name: 'Overriding classes via className',
  render: (args) => (
    <Tabs {...args} defaultValue="profile" className="w-96">
      <TabList>
        <Tab value="profile" className="text-brand-600">
          Profile
        </Tab>
        <Tab value="billing">Billing</Tab>
      </TabList>
      <TabPanel value="profile" className="text-p-std text-fg-secondary">
        Update your name, email, and avatar.
      </TabPanel>
      <TabPanel value="billing" className="text-p-std text-fg-secondary">
        Manage your plan and payment methods.
      </TabPanel>
    </Tabs>
  ),
};

const SIZES = ['sm', 'md', 'lg'] as const;

export const AllSizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-6">
      {SIZES.map((size) => (
        <Tabs key={size} {...args} size={size} defaultValue="profile" className="w-96">
          <TabList>
            <Tab value="profile">Profile</Tab>
            <Tab value="billing">Billing</Tab>
            <Tab value="security">Security</Tab>
          </TabList>
        </Tabs>
      ))}
    </div>
  ),
};

export const ClosableTabs: Story = {
  name: 'Closable tabs',
  render: (args) => {
    function ClosableTabsExample() {
      const [openTabs, setOpenTabs] = useState([
        { value: 'report-1', label: 'Q1 Report' },
        { value: 'report-2', label: 'Q2 Report' },
        { value: 'report-3', label: 'Q3 Report' },
      ]);
      const [value, setValue] = useState('report-1');

      const closeTab = (closedValue: string) => {
        setOpenTabs((prev) => {
          const next = prev.filter((tab) => tab.value !== closedValue);
          if (closedValue === value) setValue(next[0]?.value ?? '');
          return next;
        });
      };

      return (
        <Tabs {...args} value={value} onValueChange={setValue} className="w-96">
          <TabList>
            {openTabs.map((tab) => (
              <Tab
                key={tab.value}
                value={tab.value}
                rightIcon={<X className="size-3.5" />}
                rightIconLabel={`Close ${tab.label}`}
                onRightIconClick={closeTab}
              >
                {tab.label}
              </Tab>
            ))}
          </TabList>
          {openTabs.map((tab) => (
            <TabPanel key={tab.value} value={tab.value} className="text-p-std text-fg-secondary">
              Contents of {tab.label}.
            </TabPanel>
          ))}
        </Tabs>
      );
    }
    return <ClosableTabsExample />;
  },
};

export const StyledBadge: Story = {
  name: 'Styled badge',
  render: (args) => (
    <Tabs {...args} defaultValue="inbox" className="w-96">
      <TabList>
        <Tab value="inbox" badge={12} badgeProps={{ variant: 'danger', appearance: 'accent' }}>
          Inbox
        </Tab>
        <Tab value="drafts" badge="New" badgeProps={{ variant: 'brand', appearance: 'outline' }}>
          Drafts
        </Tab>
        <Tab value="sent">Sent</Tab>
      </TabList>
      <TabPanel value="inbox" className="text-p-std text-fg-secondary">
        12 unread messages.
      </TabPanel>
      <TabPanel value="drafts" className="text-p-std text-fg-secondary">
        A new draft was created.
      </TabPanel>
      <TabPanel value="sent" className="text-p-std text-fg-secondary">
        Nothing new here.
      </TabPanel>
    </Tabs>
  ),
};

export const WholeBarDisabled: Story = {
  name: 'Whole bar disabled',
  args: { disabled: true },
  render: (args) => (
    <Tabs {...args} defaultValue="profile" className="w-96">
      <TabList>
        <Tab value="profile">Profile</Tab>
        <Tab value="billing">Billing</Tab>
        <Tab value="security">Security</Tab>
      </TabList>
      <TabPanel value="profile" className="text-p-std text-fg-secondary">
        Update your name, email, and avatar.
      </TabPanel>
    </Tabs>
  ),
};

const MANY_TABS = Array.from({ length: 15 }, (_, i) => `tab-${i + 1}`);

export const ScrollableOverflow: Story = {
  name: 'Scrollable overflow',
  render: (args) => (
    <Tabs {...args} defaultValue="tab-1" className="w-96">
      <TabList scrollable>
        {MANY_TABS.map((value, i) => (
          <Tab key={value} value={value}>
            Tab {i + 1}
          </Tab>
        ))}
      </TabList>
      {MANY_TABS.map((value, i) => (
        <TabPanel key={value} value={value} className="text-p-std text-fg-secondary">
          Contents of tab {i + 1}.
        </TabPanel>
      ))}
    </Tabs>
  ),
};

export const KeepMounted: Story = {
  name: 'keepMounted',
  render: (args) => (
    <Tabs {...args} defaultValue="long-list" className="w-96">
      <TabList>
        <Tab value="long-list">Long list</Tab>
        <Tab value="other">Other</Tab>
      </TabList>
      <TabPanel
        value="long-list"
        keepMounted
        className="h-40 overflow-y-auto text-p-std text-fg-secondary"
      >
        <p className="mb-2 text-fg-tertiary text-p-sm">
          Scroll down, switch to &quot;Other&quot;, then switch back — the scroll position
          survives because this panel stays mounted via `keepMounted`.
        </p>
        {Array.from({ length: 30 }, (_, i) => (
          <p key={i}>Item {i + 1}</p>
        ))}
      </TabPanel>
      <TabPanel value="other" className="text-p-std text-fg-secondary">
        Switch back to &quot;Long list&quot; — its scroll position should still be where you left
        it.
      </TabPanel>
    </Tabs>
  ),
};

export const KeyboardNavigation: Story = {
  name: 'Keyboard navigation',
  render: (args) => (
    <Tabs {...args} defaultValue="profile" className="w-96">
      <TabList>
        <Tab value="profile">Profile</Tab>
        <Tab value="billing">Billing</Tab>
        <Tab value="security">Security</Tab>
      </TabList>
      <TabPanel value="profile" className="text-p-std text-fg-secondary">
        Update your name, email, and avatar.
      </TabPanel>
      <TabPanel value="billing" className="text-p-std text-fg-secondary">
        Manage your plan and payment methods.
      </TabPanel>
      <TabPanel value="security" className="text-p-std text-fg-secondary">
        Configure two-factor authentication and active sessions.
      </TabPanel>
    </Tabs>
  ),
};
