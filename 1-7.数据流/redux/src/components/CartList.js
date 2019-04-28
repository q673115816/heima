import React, { Component } from 'react'
import CartItem from './CartItem'
export default class CartList extends Component {
  render() {
      const {list = []} = this.props
    return (
      <ul>
          {list && list.map(item => (
          <CartItem item = {item} key={item.id}></CartItem>
          ))}
      </ul>
    )
  }
}
