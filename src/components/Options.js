import React from 'react';
import Option from './Option';

const Options = (props) => {
  const {options, ...rest} = props;
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
  } else {
    // const optionsAr = Array.from(...rest)
    console.log({...rest})
    return (
      <div>hello</div>)
  }
}

export default Options;