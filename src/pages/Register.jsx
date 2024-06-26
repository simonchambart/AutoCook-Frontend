import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import LabelInput from '../components/LabelInput';
import { useAuth } from '../contexts/Auth.context';
import Error from '../components/Error';
import { recordClick } from '../api/index';

const handleClick = (clickDetail) => {
  recordClick(clickDetail);
};

export default function Register() {
  const { error, loading, register } = useAuth();
  const navigate = useNavigate();

  const methods = useForm();
  const { handleSubmit, getValues } = methods;

  const validationRules = useMemo(() => ({
    voornaam: {
      required: 'Voornaam is verplicht',
    },
    achternaam: {
      required: 'Achternaam is verplicht',
    },
    email: {
      required: 'Email is verplicht',
    },
    wachtwoord: {
      required: 'Wachtwoord is verplicht',
    },
    confirmPassword: {
      required: 'Wachtwoord herhalen is verplicht',
      validate: (value) => {
        const password = getValues('password');
        return password === value || 'Wachtwoorden zijn niet gelijk';
      },
    },
  }), [getValues]);

  const handleRegister = useCallback(
    async ({ voornaam, achternaam, email, password}) => {
      const loggedIn = await register({ voornaam, achternaam, email, password});

      if (loggedIn) {
        navigate({
          pathname: '/',
          replace: true,
        });
      }
    },
    [register, navigate]
  );

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...methods}>
      <div className='container'>
        <div className='row justify-content-center mt-5'>
          <div className='col-md-6'>
            <form className='border p-4 rounded-3 shadow-sm' onSubmit={handleSubmit(handleRegister)}>
              <h1 className='mb-4 text-center'>Register</h1>

              <Error error={error} />

              <LabelInput
                label='Voornaam'
                type='text'
                name='voornaam'
                validationRules={validationRules.voornaam}
              />

              <LabelInput
                label='Achternaam'
                type='text'
                name='achternaam'
                validationRules={validationRules.achternaam}
              />

              <LabelInput
                label='Email'
                type='text'
                name='email'
                placeholder='your@email.com'
                validationRules={validationRules.email}
              />

              <LabelInput
                label='Wachtwoord'
                type='password'
                name='password'
                validationRules={validationRules.password}
              />

              <LabelInput
                label='Bevestig wachtwoord'
                type='password'
                name='confirmPassword'
                validationRules={validationRules.confirmPassword}
              />

              <div className='clearfix'>
                <div className='btn-group float-end'>
                  <button type='submit' className='btn btn-success' disabled={loading} onClick={() => handleClick('Registreren Bevestigen')}>
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
