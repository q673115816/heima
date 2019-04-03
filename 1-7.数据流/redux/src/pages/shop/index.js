import React, { Component } from 'react'

import Product from './components/product'
import Cart from './components/cart'

export default class index extends Component {
  render() {
    return (
      <div>
        <h1>react CRUD</h1>
        <hr/>
        <Product title={'product'}></Product>
        <hr/>
        <Cart title={'cart'}></Cart>
      </div>
    )
  }
}
