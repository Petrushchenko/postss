import React from 'react';
import { Field, Form } from 'formik';
import { InputField, SelectField, CheckboxField, RadioField} from './FormField';
import CheckboxGroup from './CheckboxGroup';
import RadioGroup from './RadioGroup';


const categories = [
  { value: 'Search Engine', label: 'Search Engine' },
  {value: 'Best Match', label: 'Best Match'},
  { value: 'Other', label: 'Other' }
];

const budget = [
  { value: 300, label: 'less then 300' },
  {value: 500, label: 'less then 500'},
]

const delivery = [
  { value: 'urgent', label: 'Urgent' },
  {value: 'any', label: 'any'},
]

const location = [
  { value: 'United States', label: 'United States' },
  {value: 'any', label: 'any Location'}
]

const InnerForm = ({values, setFieldValue, setFieldTouched}) => (
  <Form>
    <Field
      label="Chose Category"
      name="category"
      component={SelectField}
      options={categories}
      placeholder="CATEGORY"
    />
    <CheckboxGroup
      id="checkboxGroup"
      label="Chose Subcategory"
      value={values.checkboxGroup}
      onChange={setFieldValue}
      onBlur={setFieldTouched}
      >
      <Field
        label="All Subcategory"
        name="checkboxGroup"
        component={CheckboxField}
        id="all"
      />
      <Field
        component={CheckboxField}
        name="checkboxGroup"
        id="data"
        label="Data Entry"
      />
      <Field
        component={CheckboxField}
        name="checkboxGroup"
        id="assistant"
        label="Personal Assistant"
      />
      <Field
        component={CheckboxField}
        name="checkboxGroup"
        id="research"
        label="Web Research"
      />
      <Field
        component={CheckboxField}
        name="checkboxGroup"
        id="transcription"
        label="Transcription"
      />
    </CheckboxGroup>
    <RadioGroup
      id="radioGroup"
      label="Client rating"
      >
      <Field
        component={RadioField}
        name="radioGroup"
        id="any"
        label="Any stars"
      />
      <Field
        component={RadioField}
        name="radioGroup"
        id="5"
        label="5 stars"
      />
      <Field
        component={RadioField}
        name="radioGroup"
        id="4.5"
        label="4.5 stars and up"
      />
      <Field
        component={RadioField}
        name="radioGroup"
        id="4"
        label="4 stars and Up"
      />
      <Field
        label="Include unrated freelancers"
        name="freelancers"
        component={CheckboxField}
        id="freelancers"
      />
    </RadioGroup>
    <Field
      label="Budget"
      name="budget"
      component={SelectField}
      options={budget}
      placeholder="Any Budget"
    />
    <Field
      label="Delivery"
      name="delivery"
      component={SelectField}
      options={delivery}
      placeholder="Any..."
    />
    <Field
      label="Location"
      name="location"
      component={SelectField}
      options={location}
      placeholder="Any..."
    />
    <Field
      label="User Name"
      name="name"
      component={InputField}
      placeholder="Enter User Name"
      required
    />
    <div className="form__control">
      <button type="submit">Submit</button>
    </div>
    
  </Form>
);

export default InnerForm;
