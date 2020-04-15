import React from 'react';
import Truncate from 'react-truncate';
import Options from './Options';

const Post = ({name, description, options, client, ...rest}) => {
  return (
    <li className="posts__item post">
      <h3 className="post__title">{name}</h3>
      <Options options={options}/>
      <p>
        <Truncate 
          trimWhitespace={true} 
          lines={3} 
          ellipsis={<span>... <button type="button" className="btn">more</button></span>}>
          {description}
        </Truncate>
      </p>
      <Options {...rest}/>
      <Options client={client}/>
    </li>
    )
}

export default Post;