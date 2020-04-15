import React from 'react';
import Dropdown from 'react-dropdown';

const SelectField = ({ field, form: { errors }, label, ...rest }) => {
  const { value = '', ...fieldParams } = field;
  const id = `form-${field.name}`;

  return (
    <div className="form__control">
    {label &&
        <label className="form__label" htmlFor={id}>
          {label}
        </label>
      }
      <Dropdown
        id={id}
        className="form__select"
        menuClassName='select__menu'
        arrowClosed={<span className="arrow--close" />}
        arrowOpen={<span className="arrow--open" />}
        value={value}
        {...fieldParams}
        {...rest}
      >
      </Dropdown>
      
    </div>
  );
};

export default SelectField;
