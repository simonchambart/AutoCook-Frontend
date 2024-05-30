import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import LabelInput from '../components/LabelInput';
import { useAuth } from '../contexts/Auth.context';
import Error from '../components/Error';
import AsyncData from '../components/AsyncData';

export default function Register() {
  const { error, loading, register } = useAuth();
  const navigate = useNavigate();

  const methods = useForm();
  const { getValues, handleSubmit, reset } = methods;

  const handleCancel = useCallback(() => {
    reset();
  }, [reset]);

  const handleRegister = useCallback(
    async ({ user, email, password, image, video, info}) => {
      const loggedIn = await register({ user, email, password, image, video, info});

      if (loggedIn) {
        navigate({
          pathname: '/',
          replace: true,
        });
      }
    },
    [register, navigate],
  );

  const validationRules = useMemo(() => ({
    user: {
      required: 'Name is required',
    },
    email: {
      required: 'Email is required',
    },
    password: {
      required: 'Password is required',
    },
    confirmPassword: {
      required: 'Password confirmation is required',
      validate: (value) => {
        const password = getValues('password');
        return password === value || 'Passwords do not match';
      },
    },
    image: {
        required: 'Image is required',
    },
    video: {
        required: 'Video is required',
    },
    info: {
        required: 'Info is required',
    },
    interests: {
      required: 'Select at least one interest',
    },
  }), [getValues]);

  return (
    <FormProvider {...methods}>
      <div>
        <form
          className='d-flex flex-column'
          onSubmit={handleSubmit(handleRegister)}
        >
          <h1>Register</h1>

          <Error error={error} />

          <LabelInput
            label='User'
            type='text'
            name='user'
            placeholder='Your Username'
            validationRules={validationRules.user}
          />

          <LabelInput
            label='Email'
            type='text'
            name='email'
            placeholder='your@email.com'
            validationRules={validationRules.email}
          />

          <LabelInput
            label='Password'
            type='password'
            name='password'
            validationRules={validationRules.password}
          />

          <LabelInput
            label='Confirm password'
            type='password'
            name='confirmPassword'
            validationRules={validationRules.confirmPassword}
          />

          <LabelInput
            label='Image'
            type='text'
            name='image'
            placeholder='an image of yourself'
            validationRules={validationRules.image}
          />

           <LabelInput
            label='Video'
            type='text'
            name='video'
            placeholder='a video of yourself'
            validationRules={validationRules.video}
          />

            <LabelInput
            label='Info'
            type='text'
            name='info'
            placeholder='some information about yourself'
            validationRules={validationRules.info}
          />

          <div className='clearfix'>
            <div className='btn-group float-end'>
              <button
                type='submit'
                className='btn btn-primary'
                disabled={loading}
              >
                Register
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