import type { Meta, StoryObj } from '@storybook/react-vite';
import { headline, paragraph, label } from '../tokens';

/**
 * Reference page for the typography scale. Each row renders with the real
 * `text-*` utility class (not an inline style) so this page doubles as a
 * check that the class actually resolves the font-size/line-height pair
 * generated from styles/tokens.css's `@theme` block.
 */
const meta = {
  title: 'Foundations/Typography',
  parameters: { layout: 'padded' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const SAMPLE = 'The quick brown fox jumps over the lazy dog';

function Row({
  className,
  fontSize,
  lineHeight,
}: {
  className: string;
  fontSize: string;
  lineHeight: string;
}) {
  return (
    <div className="border-border-subtle flex items-baseline gap-6 border-b py-4 last:border-b-0">
      <div className="w-40 shrink-0">
        <div className="text-label-sm text-fg-default font-medium">{className}</div>
        <div className="text-p-xs text-fg-tertiary font-mono">
          {fontSize} / {lineHeight}
        </div>
      </div>
      <span className={`${className} text-fg-default`}>{SAMPLE}</span>
    </div>
  );
}

export const Headline: Story = {
  render: () => (
    <div className="flex max-w-3xl flex-col">
      <Row
        className="text-h-xl"
        fontSize={headline.xl.fontSize}
        lineHeight={headline.xl.lineHeight}
      />
      <Row
        className="text-h-lg"
        fontSize={headline.lg.fontSize}
        lineHeight={headline.lg.lineHeight}
      />
      <Row
        className="text-h-md"
        fontSize={headline.md.fontSize}
        lineHeight={headline.md.lineHeight}
      />
      <Row
        className="text-h-std"
        fontSize={headline.std.fontSize}
        lineHeight={headline.std.lineHeight}
      />
      <Row
        className="text-h-sm"
        fontSize={headline.sm.fontSize}
        lineHeight={headline.sm.lineHeight}
      />
      <Row
        className="text-h-xs"
        fontSize={headline.xs.fontSize}
        lineHeight={headline.xs.lineHeight}
      />
    </div>
  ),
};

export const Paragraph: Story = {
  render: () => (
    <div className="flex max-w-3xl flex-col">
      <Row
        className="text-p-lg"
        fontSize={paragraph.lg.fontSize}
        lineHeight={paragraph.lg.lineHeight}
      />
      <Row
        className="text-p-md"
        fontSize={paragraph.md.fontSize}
        lineHeight={paragraph.md.lineHeight}
      />
      <Row
        className="text-p-std"
        fontSize={paragraph.std.fontSize}
        lineHeight={paragraph.std.lineHeight}
      />
      <Row
        className="text-p-sm"
        fontSize={paragraph.sm.fontSize}
        lineHeight={paragraph.sm.lineHeight}
      />
      <Row
        className="text-p-xs"
        fontSize={paragraph.xs.fontSize}
        lineHeight={paragraph.xs.lineHeight}
      />
    </div>
  ),
};

export const Label: Story = {
  render: () => (
    <div className="flex max-w-3xl flex-col">
      <Row
        className="text-label-lg"
        fontSize={label.lg.fontSize}
        lineHeight={label.lg.lineHeight}
      />
      <Row
        className="text-label-md"
        fontSize={label.md.fontSize}
        lineHeight={label.md.lineHeight}
      />
      <Row
        className="text-label-std"
        fontSize={label.std.fontSize}
        lineHeight={label.std.lineHeight}
      />
      <Row
        className="text-label-sm"
        fontSize={label.sm.fontSize}
        lineHeight={label.sm.lineHeight}
      />
      <Row
        className="text-label-xs"
        fontSize={label.xs.fontSize}
        lineHeight={label.xs.lineHeight}
      />
      <Row
        className="text-label-xxs"
        fontSize={label.xxs.fontSize}
        lineHeight={label.xxs.lineHeight}
      />
    </div>
  ),
};
