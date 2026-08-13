import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '../Button';
import { SnackbarProvider, useSnackbar } from './Snackbar';
import type { SnackbarVariant } from './Snackbar.types';

const VARIANTS: SnackbarVariant[] = ['success', 'warning', 'danger', 'info', 'neutral'];

// `SnackbarProvider` only renders its `children` plus a portalled toast
// stack, so there's nothing meaningful to demonstrate without a consumer
// calling `useSnackbar()`. Each story below renders a small trigger
// component that lives inside the decorator's `<SnackbarProvider>` and
// exercises `show`/`dismiss` interactively.
function VariantTriggers() {
  const { show } = useSnackbar();

  return (
    <div className="flex flex-wrap gap-2">
      {VARIANTS.map((variant) => (
        <Button
          key={variant}
          size="sm"
          variant="secondary"
          onClick={() =>
            show({
              message: `${variant.charAt(0).toUpperCase() + variant.slice(1)} toast`,
              variant,
            })
          }
        >
          Show {variant}
        </Button>
      ))}
    </div>
  );
}

function ActionTrigger() {
  const { show } = useSnackbar();

  return (
    <Button
      size="sm"
      variant="secondary"
      onClick={() =>
        show({
          message: 'Conversation archived',
          variant: 'neutral',
          action: {
            label: 'Undo',
            onClick: () => show({ message: 'Undo not implemented in demo' }),
          },
        })
      }
    >
      Show with action
    </Button>
  );
}

function PersistentTrigger() {
  const { show, dismiss } = useSnackbar();
  const [id, setId] = useState<string | null>(null);

  return (
    <div className="flex gap-2">
      <Button
        size="sm"
        variant="secondary"
        onClick={() =>
          setId(
            show({
              message: 'This toast stays until you dismiss it',
              variant: 'warning',
              duration: 0,
            }),
          )
        }
      >
        Show persistent
      </Button>
      <Button
        size="sm"
        variant="tertiary"
        disabled={!id}
        onClick={() => {
          if (id) dismiss(id);
          setId(null);
        }}
      >
        Dismiss it
      </Button>
    </div>
  );
}

function DataTestIdTrigger() {
  const { show } = useSnackbar();

  return (
    <Button
      size="sm"
      variant="secondary"
      onClick={() =>
        show({
          message: 'Tagged for e2e selection',
          dataTestId: 'snackbar-toast-demo',
        })
      }
    >
      Show with dataTestId
    </Button>
  );
}

const meta = {
  title: 'Components/Snackbar',
  component: SnackbarProvider,
  // Docs page is authored by hand in Snackbar.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <SnackbarProvider>
        <Story />
      </SnackbarProvider>
    ),
  ],
} satisfies Meta<typeof SnackbarProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <VariantTriggers />,
};

export const WithAction: Story = {
  render: () => <ActionTrigger />,
};

export const Persistent: Story = {
  render: () => <PersistentTrigger />,
};

export const WithDataTestId: Story = {
  name: 'Tagging a toast with dataTestId',
  render: () => <DataTestIdTrigger />,
};
