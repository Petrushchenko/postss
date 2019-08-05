import React, { Component } from 'react';
import { Formik } from 'formik';
import { object, string, ref, array } from 'yup';
import InnerForm from './InnerForm';

const formValidationSchema = object().shape({
  links: array().ensure().max(5, "List must contain maximum 5 items").of(
      string().min(8, "Field must be at least 8 characters").required("This field is required")
    ),
  message: string().max(200).required('"Message" is required field')
})

class Form extends Component {
  handleSumbit = (values, actions) => {
    console.log('form data:', values);
  }
  render() {
    return (
      <div class="form">
        <Formik
          initialValues={{
            radioGroup: "",
            checkboxGroup: [],
          }}
          onSubmit={this.handleSumbit}
          validationSchema={formValidationSchema}
          render={InnerForm}
          validateOnChange={true}
          validateOnBlur={false}
        />
      </div>
    );
  }
}

export default Form;