import type { Meta, StoryObj } from '@storybook/react-vite';
import * as yup from 'yup';
import { FormContainer } from './FormContainer';
import { FormField } from '../FormField';
import { Input } from '../Input';

const signInSchema = yup.object({
  email: yup.string().email('Enter a valid email address').required('Email is required'),
  password: yup.string().min(8, 'Must be at least 8 characters').required('Password is required'),
});

const meta = {
  title: 'Components/FormContainer',
  component: FormContainer,
  // Docs page is authored by hand in FormContainer.docs.mdx instead of the
  // `autodocs` tag, per the architecture's Component.docs.mdx convention.
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof FormContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SignIn: Story = {
  render: () => (
    <div className="w-80">
      <FormContainer
        validationSchema={signInSchema}
        defaultValues={{ email: '', password: '' }}
        onSubmit={(data) => alert(JSON.stringify(data))}
        buttons={[{ children: 'Sign in', type: 'submit', variant: 'primary', fullWidth: true }]}
      >
        <FormField
          name="email"
          render={(props) => <Input {...props} label="Email" type="email" placeholder="you@example.com" />}
        />
        <FormField name="password" render={(props) => <Input {...props} label="Password" type="password" />} />
      </FormContainer>
    </div>
  ),
};
