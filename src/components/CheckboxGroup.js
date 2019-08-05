import React from 'react';
import cn from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { styled } from '@material-ui/styles';
import {CheckboxField} from './FormField';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    padding: '10px',
    color: '#60605a',
    fontWeight: '600',
    fontSize: '14px'
  },
  colorPrimary: {
    color: '#60605a',
  },
});


const CheckboxGroup = () => {

  const classes = useStyles();
  const [state, setState] = React.useState({
    all: true,
    data: false,
    assistant: false,
    research: false,
    email: false,
    transcription: false,
    other: false
  });

  const handleChange = filter => event => {
    setState({ ...state, [filter]: event.target.checked });
  };

  const { all, data, assistant, research, email, transcription, other } = state;
  // const error = [gilad, jason, antoine].filter(v => v).length !== 2;

  return (
    <div >
      <FormControl component="fieldset" className={classes.root}>
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel 
            control={<CheckboxField checked={all} onChange={handleChange('All')} value="all" />}
            label="All subcategories"
            className="checkbox__label"
          />
          <FormControlLabel
            control={<CheckboxField checked={data} onChange={handleChange('data')} value="data" />}
            label="Data entry"
          />
          <FormControlLabel
            control={
              <CheckboxField checked={assistant} onChange={handleChange('assistant')} value="assistant" />
            }
            label="Personal Assistant"
          />
           <FormControlLabel
            control={
              <CheckboxField checked={research} onChange={handleChange('research')} value="research" />
            }
            label="Web Research"
          />
           <FormControlLabel
            control={
              <CheckboxField checked={email} onChange={handleChange('email')} value="email" />
            }
            label="Email response Handling"
          />
           <FormControlLabel
            control={
              <CheckboxField checked={transcription} onChange={handleChange('transcription')} value="transcription" />
            }
            label="Transcription"
          />
           <FormControlLabel
            control={
              <CheckboxField checked={other} onChange={handleChange('other')} value="other" />
            }
            label="Other - Administrative support"
          />
        </FormGroup>
      </FormControl>
    </div>
  )
}

export default CheckboxGroup;