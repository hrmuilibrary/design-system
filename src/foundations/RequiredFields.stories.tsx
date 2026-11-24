import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '../components/Checkbox';
import { DatePicker } from '../components/DatePicker';
import { Input } from '../components/Input';
import { Radio, RadioGroup } from '../components/Radio';
import { SelectV2 } from '../components/SelectV2';
import { TextArea } from '../components/TextArea';
import { TimePicker } from '../components/TimePicker';
import { Upload } from '../components/Upload';

/**
 * Visual regression surface for the required-field asterisk. Every form
 * component that accepts `required` renders the same internal `RequiredMark`
 * (`text-fg-danger`), so all asterisks below must be the exact same color —
 * in both themes. The right-hand panel forces dark mode locally with a
 * `.dark` wrapper (theme variables cascade, so `.dark` works on any subtree),
 * which lets light and dark be compared side by side.
 */
const meta = {
  title: 'Foundations/Required fields',
  parameters: { layout: 'padded' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'am', label: 'Armenia' },
  { value: 'ge', label: 'Georgia' },
];

function AllRequiredFields() {
  return (
    <div className="flex w-80 flex-col gap-5">
      <Input label="Input" placeholder="Full name" required />
      <TextArea label="TextArea" placeholder="Comment" required />
      <SelectV2 label="SelectV2" placeholder="Country" options={options} required />
      <DatePicker label="DatePicker" required />
      <TimePicker label="TimePicker" required fullWidth />
      <RadioGroup label="RadioGroup" name="required-demo" required>
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" />
      </RadioGroup>
      <Checkbox label="Checkbox" required />
      <Upload label="Upload" required />
    </div>
  );
}

function Panel({ title, dark }: { title: string; dark?: boolean }) {
  return (
    <section
      className={
        (dark ? 'dark ' : '') +
        'bg-bg-default text-fg-default border-border-default flex flex-col gap-4 rounded-md border p-6'
      }
    >
      <h3 className="text-h-xs font-semibold">{title}</h3>
      <AllRequiredFields />
    </section>
  );
}

/** Light and dark next to each other. Pinned to the light toolbar theme so the left panel is genuinely light. */
export const LightAndDark: Story = {
  globals: { theme: 'light' },
  render: () => (
    <div className="flex flex-wrap gap-6">
      <Panel title="Light" />
      <Panel title="Dark" dark />
    </div>
  ),
};

/** All required fields under whichever theme the toolbar is set to. */
export const CurrentTheme: Story = {
  render: () => <AllRequiredFields />,
};
