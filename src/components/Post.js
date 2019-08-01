import React from 'react';
import Options from './Options';

const Post = ({name, description, options, ...rest}) => {
  return (
    <li className="post">
      <h3 className="post__title">{name}</h3>
      <Options options={options}/>
      <p>{description}</p>
      <Options {...rest}/>
    </li>
    )
}

export default Post;