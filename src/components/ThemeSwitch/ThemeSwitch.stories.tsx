import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useGlobals } from 'storybook/preview-api';
import { ThemeSwitch } from './ThemeSwitch';

const meta = {
  title: 'Components/ThemeSwitch',
  component: ThemeSwitch,
  // Docs page is authored by hand in ThemeSwitch.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  args: {
    disabled: false,
  },
} satisfies Meta<typeof ThemeSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    function Uncontrolled() {
      const [checked, setChecked] = useState(false);
      return <ThemeSwitch {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />;
    }
    return <Uncontrolled />;
  },
};

export const WithLabel: Story = {
  render: (args) => {
    function Uncontrolled() {
      const [checked, setChecked] = useState(false);
      return (
        <ThemeSwitch
          {...args}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          label={checked ? 'Dark mode' : 'Light mode'}
        />
      );
    }
    return <Uncontrolled />;
  },
};

export const Disabled: Story = {
  args: { disabled: true, checked: false },
};

// Bound to Storybook's own theme toolbar (see .storybook/preview.tsx) —
// toggling this switch flips the whole canvas's theme, and it stays in
// sync if you use the toolbar instead. This is the story to reach for when
// checking that the switch doesn't look desynced from the ambient theme.
export const BoundToThemeToolbar: Story = {
  name: 'Bound to the theme toolbar',
  // Storybook's own hooks (useGlobals) must be called directly in the story
  // function's body — nesting them inside a separately-defined React
  // component (as the other stories on this page do for plain useState)
  // breaks Storybook's hooks context. No local useState is needed here
  // anyway: updateGlobals already re-renders this story with fresh globals.
  // Named (capitalized) so eslint-plugin-react-hooks recognizes this as a
  // component body rather than a plain function.
  render: function Render(args) {
    const [globals, updateGlobals] = useGlobals();
    const isDark = globals.theme === 'dark';
    return (
      <ThemeSwitch
        {...args}
        checked={isDark}
        onChange={(e) => updateGlobals({ theme: e.target.checked ? 'dark' : 'light' })}
        label={isDark ? 'Dark mode' : 'Light mode'}
      />
    );
  },
};
