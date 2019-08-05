import React, { Component } from 'react';
import { Formik } from 'formik';
import { object, string } from 'yup';
import InnerForm from './InnerForm';
import axios from 'axios';

const formValidationSchema = object().shape({
  name: string().max(20).required()
})


class Form extends Component {
  state={user:null}

  handleSumbit = async (values, actions) => {
    try {
      const userData = await axios.get(`https://cors-anywhere.herokuapp.com/https://www.pinterest.com/${values.name}/feed.rss/`);
      this.setState({user: userData.data})
      console.log(this.state.user)
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const {user} = this.state;

    return (
      <div className="form">
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
        {user &&
          <ul>
            
          </ul> 
        }
      </div>
    );
  }
}

export default Form;