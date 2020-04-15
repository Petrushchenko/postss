import React from 'react';
import cn from 'classnames';

const RadioField = ({ field, label, id, type = 'radio',...rest}) => {
  const { value = '', ...fieldParams } = field;

  return (
    <div className="input__wrap">
      <input
        className="input"
        type={type}
        id={id}
        value={id}
        checked={id === value}
        {...fieldParams}
        {...rest}
      />
        
      <label htmlFor={id} className={cn('input__tick', {checked: id === value, 'input__tick--rounded': type==="radio"})}></label>
      {label &&
        <label className="input__label" htmlFor={id}>
          {label}
        </label>}
    </div>
  );
};
export default RadioField;