import React, { useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { StyledFormInput, StyledFormButton } from '@ui';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  age: z.coerce.number().min(18, 'Must be at least 18'),
  email: z.string().email()
});

const Step1 = ({ next }: { next: () => void }) => {
  const { register, trigger } = useFormContext();
  return (
    <div>
      <h2>Step 1 - Name</h2>
      <StyledFormInput placeholder="Name" {...register('name')} />
      <StyledFormButton onClick={async () => (await trigger('name')) && next()}>Next</StyledFormButton>
    </div>
  );
};

const Step2 = ({ next, back }: { next: () => void; back: () => void }) => {
  const { register, trigger } = useFormContext();
  return (
    <div>
      <h2>Step 2 - Age</h2>
      <StyledFormInput type="number" placeholder="Age" {...register('age')} />
      <StyledFormButton onClick={back}>Back</StyledFormButton>
      <StyledFormButton onClick={async () => (await trigger('age')) && next()}>Next</StyledFormButton>
    </div>
  );
};

const Step3 = ({ back, submit }: { back: () => void; submit: () => void }) => {
  const { register, trigger } = useFormContext();
  return (
    <div>
      <h2>Step 3 - Email</h2>
      <StyledFormInput type="email" placeholder="Email" {...register('email')} />
      <StyledFormButton onClick={back}>Back</StyledFormButton>
      <StyledFormButton onClick={async () => (await trigger('email')) && submit()}>Submit</StyledFormButton>
    </div>
  );
};

export default function App() {
  const [step, setStep] = useState(1);
  const methods = useForm({
    resolver: zodResolver(schema),
    mode: 'onBlur'
  });

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {step === 1 && <Step1 next={() => setStep(2)} />}
        {step === 2 && <Step2 next={() => setStep(3)} back={() => setStep(1)} />}
        {step === 3 && <Step3 back={() => setStep(2)} submit={() => methods.handleSubmit(onSubmit)()} />}
      </form>
    </FormProvider>
  );
}
