import React, { Component } from 'react';

class CheckboxGroup extends Component {

  handleChange = event => {
    const target = event.currentTarget;
    let valueArray = [...this.props.value] || [];

    if (target.checked) {
      valueArray.push(target.id);
    } else {
      valueArray.splice(valueArray.indexOf(target.id), 1);
    }

    this.props.onChange(this.props.id, valueArray);
  };

  render() {
    const { value, label, children } = this.props;

    return (
      <div className="form__control">
          <legend className="form__label">{label}</legend>
          {React.Children.map(children, child => {
            return React.cloneElement(child, {
              field: {
                value: value.includes(child.props.id),
                onChange: this.handleChange
              }
            });
          })}
      </div>
    );
  }
}


export default CheckboxGroup;