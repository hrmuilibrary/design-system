import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Upload, UploadItem } from './Upload';
import type { UploadRejection } from './Upload.types';

const meta = {
  title: 'Components/Upload',
  component: Upload,
  // Docs page is authored by hand in Upload.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
  args: {
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Upload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WithAcceptAndMaxSize: Story = {
  name: 'With accept & maxSizeMB',
  args: {
    accept: '.png,.jpg',
    maxSizeMB: 10,
  },
};

export const WithCustomHint: Story = {
  args: {
    hint: 'SVG or PDF, up to 5 MB',
  },
};

export const Multiple: Story = {
  args: {
    multiple: true,
    hint: 'Select as many files as you need',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CustomClassName: Story = {
  name: 'Overriding classes via className',
  args: {
    className: 'border-brand-500 bg-brand-20',
  },
};

export const Interactive: Story = {
  render: (args) => {
    function InteractiveDemo() {
      const [fileNames, setFileNames] = useState<string[]>([]);
      return (
        <div className="flex flex-col gap-3">
          <Upload {...args} onFiles={(files) => setFileNames(files.map((file) => file.name))} />
          {fileNames.length > 0 && (
            <ul className="text-p-sm text-fg-secondary list-disc pl-5">
              {fileNames.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          )}
        </div>
      );
    }
    return <InteractiveDemo />;
  },
};

export const ItemProcessing: Story = {
  name: 'UploadItem — processing',
  render: () => (
    <UploadItem name="quarterly-report.pdf" meta="2.4 MB" status="processing" progress={62} />
  ),
};

export const ItemCompleted: Story = {
  name: 'UploadItem — completed',
  render: () => (
    <UploadItem name="quarterly-report.pdf" meta="2.4 MB" status="completed" onRemove={() => {}} />
  ),
};

export const ItemError: Story = {
  name: 'UploadItem — error',
  render: () => (
    <UploadItem
      name="quarterly-report.pdf"
      meta="2.4 MB"
      status="error"
      errorText="Upload failed. Check your connection and try again."
      onRetry={() => {}}
      onRemove={() => {}}
    />
  ),
};

export const EnforcedValidation: Story = {
  name: 'Enforced validation',
  render: (args) => {
    function EnforcedValidationDemo() {
      const [files, setFiles] = useState<File[]>([]);
      const [rejections, setRejections] = useState<UploadRejection[]>([]);
      return (
        <div className="flex flex-col gap-3">
          <Upload
            {...args}
            validateFiles
            accept="image/png"
            maxSizeMB={1}
            maxFiles={3}
            multiple
            currentFiles={files}
            onFiles={(accepted) => {
              setFiles((prev) => [...prev, ...accepted]);
              setRejections([]);
            }}
            onReject={setRejections}
          />
          {files.length > 0 && (
            <ul className="text-p-sm text-fg-secondary list-disc pl-5">
              {files.map((file, i) => (
                <li key={`${file.name}-${i}`}>{file.name}</li>
              ))}
            </ul>
          )}
          {rejections.map((rejection, i) => (
            <div
              key={`${rejection.file.name}-${i}`}
              className="flex items-center justify-between gap-3 rounded-lg border border-red-300 bg-bg-danger-lighter px-3 py-2 text-p-sm text-red-700"
            >
              <span>
                {rejection.file.name} — {rejection.reason}
              </span>
              <button
                type="button"
                onClick={() => setRejections((prev) => prev.filter((r) => r !== rejection))}
                className="shrink-0 font-medium underline hover:no-underline"
              >
                Dismiss
              </button>
            </div>
          ))}
        </div>
      );
    }
    return <EnforcedValidationDemo />;
  },
};

export const ButtonTrigger: Story = {
  name: 'Button trigger',
  args: { mode: 'button' },
};

export const IconTrigger: Story = {
  name: 'Icon trigger',
  args: { mode: 'icon' },
};

export const WithLabelAndRequired: Story = {
  name: 'With label and required',
  args: { label: 'Attachment', required: true },
};

export const WithError: Story = {
  args: { label: 'Attachment', error: true, errorText: 'This file type is not supported.' },
};

export const ItemWithThumbnail: Story = {
  name: 'UploadItem — image thumbnail',
  render: () => (
    <UploadItem
      name="hero-image.png"
      meta="4.8 MB"
      status="completed"
      previewSrc="https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?w=80&h=80&fit=crop"
      onRemove={() => {}}
    />
  ),
};

export const WithFileList: Story = {
  name: 'showFileList with removal',
  render: (args) => {
    function Controlled() {
      const [files, setFiles] = useState<File[]>(() => [
        new File(['x'], 'brand-guidelines.pdf', { type: 'application/pdf' }),
        new File(['x'.repeat(2_000_000)], 'hero-image.png', { type: 'image/png' }),
      ]);
      return (
        <Upload
          {...args}
          showFileList
          currentFiles={files}
          onFiles={(added) => setFiles((prev) => [...prev, ...added])}
          onRemoveFile={(_file, index) => setFiles((prev) => prev.filter((_, i) => i !== index))}
        />
      );
    }
    return <Controlled />;
  },
};

export const ViewMode: Story = {
  name: 'mode="view"',
  args: {
    mode: 'view',
    showFileList: true,
    label: 'Attachments',
    currentFiles: [
      new File(['x'], 'brand-guidelines.pdf', { type: 'application/pdf' }),
      new File(['x'.repeat(500_000)], 'dataset.csv', { type: 'text/csv' }),
    ],
  },
};

export const ItemWithOpen: Story = {
  name: 'UploadItem — onOpen',
  render: () => (
    <UploadItem
      name="brand-guidelines.pdf"
      meta="1.1 MB"
      status="completed"
      onOpen={() => window.alert('Opening brand-guidelines.pdf')}
    />
  ),
};

export const ItemList: Story = {
  name: 'Upload + UploadItem list',
  render: (args) => (
    <div className="flex flex-col gap-3">
      <Upload {...args} />
      <div className="flex flex-col gap-2">
        <UploadItem
          name="brand-guidelines.pdf"
          meta="1.1 MB"
          status="completed"
          onRemove={() => {}}
        />
        <UploadItem
          name="hero-image.png"
          meta="4.8 MB"
          status="processing"
          progress={35}
          onRemove={() => {}}
        />
        <UploadItem
          name="dataset.csv"
          meta="18 MB"
          status="error"
          errorText="File exceeds the 10 MB limit."
          onRetry={() => {}}
          onRemove={() => {}}
        />
      </div>
    </div>
  ),
};
