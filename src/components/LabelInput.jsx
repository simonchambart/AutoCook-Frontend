import { useFormContext } from 'react-hook-form';

export default function LabelInput({ label, name, type, validationRules, options, ...rest }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const hasError = name in errors;

  return (
    <div className='mb-3'>
      <label htmlFor={name} className='form-label'>
        {label}
      </label>
      {type === 'select' ? (
        <select {...register(name, validationRules)} id={name} className='form-select' {...rest}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input {...register(name, validationRules)} id={name} type={type} className='form-control' {...rest} />
      )}
      {hasError ? (
        <div className='form-text text-danger'>{errors[name].message}</div>
      ) : null}
    </div>
  );
}