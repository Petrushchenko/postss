import React from 'react';
import Select from 'react-select';

 
const selectStyles = {
  control: styles => ({ 
    ...styles, 
    backgroundColor: 'white', 
    border: '1px solid #60605a',

    ':hover': {
      ...styles[':hover'],
      cursor: 'pointer',
      borderColor: '#33312f' 
    },

    ':active': {
      ...styles[':active'],
      borderColor: 'cyan'
    },


  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? '#33312f'
        : isFocused
        ? '#f5f6f1'
        : null,
      cursor: !isDisabled && 'pointer',
      color: isFocused && '#33312f',
      fontWeight: !isDisabled && isFocused && 600,

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled && (isSelected ? 'yellow' : '#56d9f5'),
      },
    };
  },
  menu: styles => ({ 
    ...styles, 
    border: '1px solid #60605a'
  })
  // input: styles => ({ ...styles, {} }),
  // placeholder: styles => ({ ...styles, ...dot() }),
  // singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
}

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
      <Select
        id={id}
        className="form__select"
        value={value}
        styles={selectStyles}
        {...fieldParams}
        {...rest}
      >
      </Select>
      
    </div>
  );
};

export default SelectField;
