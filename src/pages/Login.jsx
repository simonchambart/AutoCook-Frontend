import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import LabelInput from '../components/LabelInput';
import { useAuth } from '../contexts/Auth.context';
import Error from '../components/Error';

const validationRules = {
  email: {
    required: 'Email is required',
  },
  password: {
    required: 'Password is required',
  },
};

export default function Login() {
  const {login, error, loading} = useAuth();
  const navigate = useNavigate();
  const { search } = useLocation();

  const methods = useForm({
    defaultValues: {
      email: 'thomas.aelbrecht@hogent.be',
      password: '12345678'
    }
  });
  const {
    reset,
    handleSubmit
  } = methods;

  const handleCancel = useCallback(() => {
    reset();
  }, [reset]);


  const handleLogin = useCallback(
    async ({ email, password }) => {
      const loggedIn = await login(email, password);

      if (loggedIn) {
        const pathname = search ? search.split('=')[1] : '';
        navigate({
          pathname,
          replace: true,
        });
      }
    },
    [login, search, navigate]
  );

  return (
    <FormProvider {...methods}>
      <div className='container'>
        <form
          onSubmit={handleSubmit(handleLogin)}
          className='d-flex flex-column'>
          <h1>Sign in</h1>

          <Error error={error} />

          <LabelInput
            label='email'
            type='text'
            name='email'
            data-cy='email_input'
            placeholder='your@email.com'
            validationRules={validationRules.email}
          />

          <LabelInput
            label='password'
            type='password'
            name='password'
            data-cy='password_input'
            validationRules={validationRules.password}
          />

          <div className='clearfix'>
            <div className='btn-group float-end'>
              <button
                type='submit'
                className='btn btn-primary'
                data-cy='submit_btn'
                disabled={loading}
              >
                Sign in
              </button>

              <button
                type='button'
                className='btn btn-light'
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </FormProvider>
  );
}