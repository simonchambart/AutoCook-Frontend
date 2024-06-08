import { useCallback } from 'react';
import { useLocation, useNavigate , Link } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import LabelInput from '../components/LabelInput';
import { useAuth } from '../contexts/Auth.context';
import Error from '../components/Error';
import '../index.css';
import { recordClick } from '../api/index';

const handleClick = (clickDetail) => {
  recordClick(clickDetail);
};

const validationRules = {
  email: {
    required: 'Email is required',
  },
  password: {
    required: 'Password is required',
  },
};

export default function Login() {
  const { login, error, loading } = useAuth();
  const navigate = useNavigate();
  const { search } = useLocation();

  const methods = useForm();
  const {
    handleSubmit
  } = methods;


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
        <div className='row justify-content-center mt-5'>
          <div className='col-md-6'>
            <form
              onSubmit={handleSubmit(handleLogin)}
              className='border p-4 rounded-3 shadow-sm'>
              <h1 className='mb-4 text-center'>Sign in</h1>

              <Error error={error} />

              <LabelInput
                label='Email'
                type='text'
                name='email'
                data-cy='email_input'
                placeholder='your@email.com'
                validationRules={validationRules.email}
              />

              <LabelInput
                label='Password'
                type='password'
                name='password'
                data-cy='password_input'
                validationRules={validationRules.password}
              />

              <div className='d-grid gap-2'>
                <button
                  type='submit'
                  className='btn btn-success'
                  data-cy='submit_btn'
                  disabled={loading}
                  onClick={() => handleClick('Inloggen Bevestigen')}
                >
                  Inloggen
                </button>
                
                <div className="text-center pt-3">
                  Nog geen account?
                </div>
                
                <button
                  type='button'
                  className='btn btn-success btn-light'
                >
                  <Link className="nav-link" to="/register" onClick={() => handleClick('Registreren Navigatie Vanuit Login Form')}>Registreren</Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
