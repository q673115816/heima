import React, { Component } from 'react'

import Product from 'src/containers/product'
import Cart from 'src/containers/cart'

export default class index extends Component {
  render() {
    return (
      <div>
        <h1>react CRUD</h1>
        <hr/>
        <Product></Product>
        <hr/>
        <Cart></Cart>
      </div>
    )
  }
}
