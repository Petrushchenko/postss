import React from 'react';
import cn from 'classnames';

const CheckboxField = ({ field, label, id, type = 'checkbox',...rest}) => {
  const { value = '', ...fieldParams } = field;

  return (
    <div className="input__wrap">
      <input
        className="input"
        type={type}
        id={id}
        value={value}
        checked={value}
        {...fieldParams}
        {...rest}
      />
        
      <label htmlFor={id} className={cn('input__tick', {checked: value, 'input__tick--green': id === "freelancers"})}></label>
      {label &&
        <label className="input__label" htmlFor={id}>
          {label}
        </label>}
    </div>
  );
};
export default CheckboxField;