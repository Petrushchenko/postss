import React from 'react';
import cn from 'classnames';

const InputField = ({ field, form: { errors }, type = 'text', label, placeholder}) => {
  const { value = '', ...fieldParams } = field;
  const isError = !!errors[field.name]
  const id = `form-${field.name}`;

  return (
    <div class="form__control">
      {label &&
        <label class="form__label" htmlFor={id}>
          {label}
        </label>}
      <div class="form__input-wrap">
        <input
          id={id}
          class={cn('form__input', { error: isError})}
          type={type}
          value={value}
          placeholder={placeholder}
          {...fieldParams}
        />
      </div>
      {isError && <span class="form__error">{errors[field.name]}</span>}
    </div>
  );
};

export default InputField;
