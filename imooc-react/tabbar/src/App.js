import React, { Component } from 'react';
import './App.css';
// import Tabbar from './component/tabbar/'
import RouterMap from './router'
import './static/iconfont.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Tabbar></Tabbar> */}
        <RouterMap />
      </div>
    );
  }
}

export default App;
