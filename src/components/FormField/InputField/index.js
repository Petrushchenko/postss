import React from 'react';

const InputField = ({ field, form: { errors }, type = 'text', label, ...rest}) => {
  const { value = '', ...fieldParams } = field;
  const isError = !!errors[field.name]
  const id = `form-${field.name}`;

  return (
    <div className="form__control">
      {label &&
        <label className="form__label" htmlFor={id}>
          {label}
        </label>}
      <div className="input-request">
        <input
          id={id}
          className="form__input"
          value={value}
          {...fieldParams}
          {...rest}
        />
      </div>
      {isError && <span className="form__error">{errors[field.name]}</span>}
    </div>
  );
};

export default InputField;
