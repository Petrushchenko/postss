import React, { Component } from 'react';

class RadioGroup extends Component {

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
    const { label, children } = this.props;

    return (
      <div className="form__control">
          <legend className="form__label">{label}</legend>
          {children}
      </div>
    );
  }
}


export default RadioGroup;