import React from 'react'
import ProductList from './ProductList'
class product extends React.Component {
  render() {
    const {all, buy} = this.props
    return (
         <div>
           <h1>{this.props.title}</h1>
          <ProductList all={all} buy={buy}></ProductList>
      </div>
    )

  }
}

export default product
