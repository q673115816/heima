import React, { Component } from 'react';
import './App.css';
import RouterMap from './router'
import Nav from './components/Nav'
class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterMap></RouterMap>
      </div>
    );
  }
}

export default App;
