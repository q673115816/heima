import React, { Component } from 'react';
import './App.css';

import Product from './component/product'
import Cart from './component/cart'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>react CRUD</h1>
        <hr/>
        <Product title={'product'}></Product>
        <hr/>
        <Cart title={'cart'}></Cart>
      </div>
    );
  }
}

export default App;
