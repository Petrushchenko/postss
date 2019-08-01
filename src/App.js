import React, {Component} from 'react';
import Sidebar from './components/Sidebar';
import Posts from './components/Posts';
import Data from './data.js';
import './styles/main.scss';

console.log(Data().posts)
class App extends Component {
  render() {
    const {posts} = Data();
    return (
      <div className="grid">
        <Sidebar/>
        <Posts posts={posts}/>
      </div>
    );
  }
}

export default App;
