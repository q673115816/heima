import React, { Component } from 'react'
import ProductItem from './PorductItem'

export default class ProductList extends Component {
  render() {
      const { all, buy } = this.props
    return (
        <ul>
            {
                all.map(item => (
                    <ProductItem item={item} key={item.id} buy={buy}></ProductItem>
                )
                )
            }
        </ul>
    )
  }
}
