import type { Meta, StoryObj } from '@storybook/react-vite';
import { colorPrimitives, white } from '../tokens';

/**
 * Reference page for the color tokens, not a component. Swatches read the
 * actual CSS custom properties (registered via the `@theme` blocks in
 * styles/tokens.css and styles/theme.css) through inline styles rather than
 * Tailwind utility classes, since the raw scale × shade combinations here
 * are built dynamically and Tailwind's class scanner can't statically
 * extract interpolated class names. Semantic swatches update live with the
 * toolbar's light/dark toggle because CSS variables resolve at the point of
 * use, same as the utilities themselves.
 */
const meta = {
  title: 'Foundations/Colors',
  parameters: { layout: 'padded' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

function SwatchLabel({ name, detail }: { name: string; detail: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-label-sm text-fg-default font-medium">{name}</span>
      <span className="text-p-xs text-fg-tertiary font-mono">{detail}</span>
    </div>
  );
}

const SCALES = ['brand', 'gray', 'green', 'blue', 'purple', 'pink', 'red', 'yellow'] as const;

export const RawPalette: Story = {
  render: () => (
    <div className="flex max-w-5xl flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h3 className="text-h-xs text-fg-default">white</h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-4">
          <div className="flex flex-col gap-2">
            <div
              className="border-border-default h-16 w-full rounded-md border"
              style={{ background: 'var(--color-white)' }}
            />
            <SwatchLabel name="white" detail={white} />
          </div>
        </div>
      </div>
      {SCALES.map((scale) => (
        <div key={scale} className="flex flex-col gap-3">
          <h3 className="text-h-xs text-fg-default capitalize">{scale}</h3>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-4">
            {Object.entries(colorPrimitives[scale])
              .sort(([a], [b]) => Number(b) - Number(a))
              .map(([shade, hex]) => (
                <div key={shade} className="flex flex-col gap-2">
                  <div
                    className="border-border-default h-16 w-full rounded-md border"
                    style={{ background: `var(--color-${scale}-${shade})` }}
                  />
                  <SwatchLabel name={`${scale}-${shade}`} detail={hex} />
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

type SemanticToken = {
  name: string;
  cssVar: string;
  kind: 'fill' | 'border' | 'text' | 'text-inverse';
};

const SURFACES: SemanticToken[] = [
  { name: 'bg-default', cssVar: '--color-bg-default', kind: 'fill' },
  { name: 'bg-container', cssVar: '--color-bg-container', kind: 'fill' },
  { name: 'bg-subtle', cssVar: '--color-bg-subtle', kind: 'fill' },
  { name: 'bg-brand-lighter', cssVar: '--color-bg-brand-lighter', kind: 'fill' },
  { name: 'bg-info-lighter', cssVar: '--color-bg-info-lighter', kind: 'fill' },
  { name: 'bg-success-lighter', cssVar: '--color-bg-success-lighter', kind: 'fill' },
  { name: 'bg-warning-lighter', cssVar: '--color-bg-warning-lighter', kind: 'fill' },
  { name: 'bg-danger-lighter', cssVar: '--color-bg-danger-lighter', kind: 'fill' },
];

const FOREGROUND: SemanticToken[] = [
  { name: 'fg-default', cssVar: '--color-fg-default', kind: 'text' },
  { name: 'fg-secondary', cssVar: '--color-fg-secondary', kind: 'text' },
  { name: 'fg-tertiary', cssVar: '--color-fg-tertiary', kind: 'text' },
  { name: 'fg-disabled', cssVar: '--color-fg-disabled', kind: 'text' },
  { name: 'fg-inverse', cssVar: '--color-fg-inverse', kind: 'text-inverse' },
  { name: 'fg-brand', cssVar: '--color-fg-brand', kind: 'text' },
  { name: 'fg-info', cssVar: '--color-fg-info', kind: 'text' },
  { name: 'fg-success', cssVar: '--color-fg-success', kind: 'text' },
  { name: 'fg-warning', cssVar: '--color-fg-warning', kind: 'text' },
  { name: 'fg-danger', cssVar: '--color-fg-danger', kind: 'text' },
];

const BORDERS: SemanticToken[] = [
  { name: 'border-default', cssVar: '--color-border-default', kind: 'border' },
  { name: 'border-subtle', cssVar: '--color-border-subtle', kind: 'border' },
  { name: 'border-strong', cssVar: '--color-border-strong', kind: 'border' },
  { name: 'border-brand', cssVar: '--color-border-brand', kind: 'border' },
];

const ICONS: SemanticToken[] = [
  { name: 'icon-primary', cssVar: '--color-icon-primary', kind: 'text' },
  { name: 'icon-secondary', cssVar: '--color-icon-secondary', kind: 'text' },
  { name: 'icon-inverse', cssVar: '--color-icon-inverse', kind: 'text-inverse' },
  { name: 'icon-brand', cssVar: '--color-icon-brand', kind: 'text' },
  { name: 'icon-info', cssVar: '--color-icon-info', kind: 'text' },
  { name: 'icon-danger', cssVar: '--color-icon-danger', kind: 'text' },
  { name: 'icon-warning', cssVar: '--color-icon-warning', kind: 'text' },
];

function SemanticSwatch({ token }: { token: SemanticToken }) {
  if (token.kind === 'fill') {
    return (
      <div className="flex flex-col gap-2">
        <div
          className="border-border-default h-16 w-full rounded-md border"
          style={{ background: `var(${token.cssVar})` }}
        />
        <SwatchLabel name={token.name} detail={token.cssVar} />
      </div>
    );
  }

  if (token.kind === 'border') {
    return (
      <div className="flex flex-col gap-2">
        <div
          className="bg-bg-default h-16 w-full rounded-md border-2"
          style={{ borderColor: `var(${token.cssVar})` }}
        />
        <SwatchLabel name={token.name} detail={token.cssVar} />
      </div>
    );
  }

  // 'text' reads the surrounding theme's bg-subtle for contrast, 'text-inverse'
  // pins a fixed dark chip since these tokens (fg-inverse, icon-inverse) are
  // meant to sit on dark/brand surfaces regardless of the active app theme.
  const isInverse = token.kind === 'text-inverse';
  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex h-16 w-full items-center justify-center rounded-md"
        style={{ background: isInverse ? '#0e121b' : 'var(--color-bg-subtle)' }}
      >
        <span className="text-p-md font-semibold" style={{ color: `var(${token.cssVar})` }}>
          Ag
        </span>
      </div>
      <SwatchLabel name={token.name} detail={token.cssVar} />
    </div>
  );
}

function SemanticGroup({ title, tokens }: { title: string; tokens: SemanticToken[] }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-h-xs text-fg-default">{title}</h3>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-4">
        {tokens.map((token) => (
          <SemanticSwatch key={token.name} token={token} />
        ))}
      </div>
    </div>
  );
}

export const SemanticAliases: Story = {
  render: () => (
    <div className="flex max-w-5xl flex-col gap-10">
      <SemanticGroup title="Surfaces" tokens={SURFACES} />
      <SemanticGroup title="Foreground" tokens={FOREGROUND} />
      <SemanticGroup title="Borders" tokens={BORDERS} />
      <SemanticGroup title="Icons" tokens={ICONS} />
    </div>
  ),
};
