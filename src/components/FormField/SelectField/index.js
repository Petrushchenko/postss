import React from 'react';
import isArray from 'lodash/isArray';


const SelectField = ({ field, form: { errors }, label, placeholder, options }) => {
  const { value = '', ...fieldParams } = field;
  const id = `form-${field.name}`;

  return (
    <div className="form__control">
    {label &&
        <label class="form-label" htmlFor={id}>
          {label}
        </label>
      }
      <select
        id={id}
        className="form__input"
        value={value}
        {...fieldParams}
      >
        <option value="" label={placeholder} disabled />
        {isArray(options) && options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      
    </div>
  );
};

export default SelectField;
