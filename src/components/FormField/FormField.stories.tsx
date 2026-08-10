import type { Meta, StoryObj } from '@storybook/react-vite';
import * as yup from 'yup';
import { FormField } from './FormField';
import { FormContainer } from '../FormContainer';
import { Input } from '../Input';

const schema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
});

const meta = {
  title: 'Components/FormField',
  component: FormField,
  // Docs page is authored by hand in FormField.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <div className="flex w-96 flex-col gap-4">
      <FormContainer
        validationSchema={schema}
        defaultValues={{ firstName: '', lastName: '' }}
        onSubmit={() => {}}
      >
        <FormField name="firstName" render={(props) => <Input {...props} label="First name" />} />
        <FormField name="lastName" render={(props) => <Input {...props} label="Last name" />} />
      </FormContainer>
    </div>
  ),
};

export const ValidationError: Story = {
  name: 'Submitted with an empty required field',
  render: () => (
    <div className="flex w-96 flex-col gap-4">
      <FormContainer
        validationSchema={schema}
        defaultValues={{ firstName: '', lastName: '' }}
        onSubmit={() => {}}
        buttons={[{ children: 'Submit', type: 'submit', variant: 'primary' }]}
        mode="onSubmit"
      >
        <FormField name="firstName" render={(props) => <Input {...props} label="First name" />} />
        <FormField name="lastName" render={(props) => <Input {...props} label="Last name" />} />
      </FormContainer>
    </div>
  ),
};

export const CustomFieldWithSetFieldValue: Story = {
  name: 'Custom field using setFieldValue',
  render: () => (
    <div className="flex w-96 flex-col gap-4">
      <FormContainer
        validationSchema={schema}
        defaultValues={{ firstName: '', lastName: '' }}
        onSubmit={() => {}}
      >
        <FormField
          name="firstName"
          render={({ value, setFieldValue, isValid, errorText }) => (
            <div className="flex flex-col gap-1">
              <input
                className="rounded-lg border border-border-default px-3 py-2"
                value={value ?? ''}
                onChange={(e) => setFieldValue(e.target.value)}
              />
              {isValid && <span className="text-p-sm text-green-700">Looks good</span>}
              {errorText && <span className="text-p-sm text-red-700">{errorText}</span>}
            </div>
          )}
        />
      </FormContainer>
    </div>
  ),
};
