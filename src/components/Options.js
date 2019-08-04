import React from 'react';
import Option from './Option';

const Options = (props) => {
  const {options, client, ...rest} = props;
  if (options) {
    const optionsAr = Object.entries(options);
    return (
      <ul className="options">
      {
        optionsAr.map((item, index) => {
          const [pr, value] = [...item];
          return <Option key={`${Math.floor(Math.random()*5)}-${item[0]}`} pr={pr} value={value}/>})
      }
      </ul>
    )
  } 
  if (client) {
    return (
      <ul className="options">
       <Option pr="client" value={client}/>
    </ul>)
  } 
  else {
    const entriesAr = Object.entries({...rest});
    return (
     <ul className="options">
       {
        entriesAr.map(item => {
          const [pr, value] = [...item];
          return <Option key={pr} pr={pr} value={value}/>
        })
       }
     </ul>
     )
  }
}

export default Options;