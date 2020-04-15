import React from 'react';
import Post from './Post';

const Posts = ({posts}) => (
  <main>
    <ul className="posts">
    {
      posts.map((post, index) => <Post key={index} {...post}/>)
    }
    </ul>
  </main>
)

export default Posts;