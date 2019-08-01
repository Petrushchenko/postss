import React from 'react';
import Post from './Post';

const Posts = ({posts}) => (
  <ul className="posts">
  {
    posts.map((post, index) => <Post key={index} {...post}/>)
  }
  </ul>
)

export default Posts;