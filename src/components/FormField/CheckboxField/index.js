import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

const MyCheckbox = withStyles({
  root: {
    color: '#60605a',
    fontSize: '1.4rem',
    '&$checked': {
      borderColor: '#60605a',
    },
  },
  checked: {
    color: '#56d9f5',
  },
})(props => <Checkbox color="default" {...props} />);

const CheckboxField = () => <MyCheckbox/>
export default CheckboxField;