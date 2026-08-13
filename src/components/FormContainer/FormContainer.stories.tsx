import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import * as yup from 'yup';
import { FormContainer } from './FormContainer';
import { FormField } from '../FormField';
import { Input } from '../Input';
import { Button } from '../Button';

const signInSchema = yup.object({
  email: yup.string().email('Enter a valid email address').required('Email is required'),
  password: yup.string().min(8, 'Must be at least 8 characters').required('Password is required'),
});

const emailSchemaEn = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
});
const emailSchemaEs = yup.object({
  email: yup.string().email('Introduce un correo válido').required('El correo es obligatorio'),
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
          render={(props) => (
            <Input {...props} label="Email" type="email" placeholder="you@example.com" />
          )}
        />
        <FormField
          name="password"
          render={(props) => <Input {...props} label="Password" type="password" />}
        />
      </FormContainer>
    </div>
  ),
};

export const RevalidateOnLocaleChange: Story = {
  name: 'Revalidate on locale change',
  render: () => {
    function LocaleDemo() {
      const [locale, setLocale] = useState<'en' | 'es'>('en');
      return (
        <div className="flex w-80 flex-col gap-3">
          <div className="flex gap-2">
            <Button
              size="sm"
              variant={locale === 'en' ? 'primary' : 'secondary'}
              onClick={() => setLocale('en')}
            >
              EN
            </Button>
            <Button
              size="sm"
              variant={locale === 'es' ? 'primary' : 'secondary'}
              onClick={() => setLocale('es')}
            >
              ES
            </Button>
          </div>
          <FormContainer
            validationSchema={locale === 'en' ? emailSchemaEn : emailSchemaEs}
            defaultValues={{ email: '' }}
            revalidateKey={locale}
            onSubmit={() => {}}
            buttons={[{ children: 'Submit', type: 'submit', variant: 'primary' }]}
          >
            <FormField name="email" render={(props) => <Input {...props} label="Email" />} />
          </FormContainer>
        </div>
      );
    }
    return <LocaleDemo />;
  },
};
