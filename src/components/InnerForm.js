import React from 'react';
import { Field, Form } from 'formik';
import { InputField, SelectField } from './FormField';
import CheckboxGroup from './CheckboxGroup';

const categories = [
  { value: 'Search Engine', label: 'Search Engine' },
  { value: 'Other', label: 'Other' }
];
const InnerForm = ({values, setFieldValue, setFieldTouched}) => (
  <Form>
    <Field
      label="Chose Category"
      name="category"
      component={SelectField}
      options={categories}
      placeholder="CATEGORY"
    />
    <CheckboxGroup />
     
  </Form>
);

export default InnerForm;

 // <Field
 //      label="Type"
 //      name="type"
 //      component={SelectField}
 //      options={types}
 //      placeholder="Choose type..."
 //      multiselect
 //      required
 //    />
 //    <Field
 //      label="Format"
 //      name="format"
 //      component={SelectField}
 //      options={formats}
 //      placeholder="Choose format..."
 //      multiselect
 //      required
 //    />
 //    <Field
 //      label="Duration"
 //      name="duration"
 //      component={SelectField}
 //      options={durations}
 //      placeholder="Choose duration..."
 //      multiselect
 //      required
 //    />
 //    <h3 class="form-chapter">Your contacts</h3>
 //    <Field
 //      label="First Name"
 //      name="name"
 //      component={InputField}
 //      placeholder="First Name"
 //      required
 //    />
 //    <Field
 //      label="Last Name"
 //      name="lastname"
 //      component={InputField}
 //      placeholder="Last Name"
 //      required
 //    />
 //    <Field
 //      label="Company"
 //      name="company"
 //      component={InputField}
 //      placeholder="Company"
 //      required
 //    />
 //    <Field
 //      label="Email"
 //      name="email"
 //      type="email"
 //      component={InputField}
 //      placeholder="mail@example.com"
 //      required
 //    />
 //    <button class="btn btn-wide btn-green" type="submit">Send request</button>