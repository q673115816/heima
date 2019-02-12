import React, { Component } from 'react';
import './App.css';
import B from './components/B'
import E from './components/E'
import F from './components/F'

import IgnoreFirstChild from './components/IgnoreFirstChild'
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>test</h1>
      <B name={"张三"} age={17}/>
      <E/>
      <F/>
      <IgnoreFirstChild>
        <h1>first</h1>
        <h1>second</h1>
      </IgnoreFirstChild>
      </div>
    );
  }
}

export default App;
