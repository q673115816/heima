import React, { Component } from 'react'

export default class porductList extends Component {
  render() {
      const {item, buy} = this.props
    return (
        <li>
            {item.title} - {item.price} * {item.inventory}
            <br />
            <button
                onClick={() => buy(item.id)}
                disabled={item.inventory <= 0}>
                {item.inventory > 0 ? 'buy' : 'sold out'}
            </button>
        </li>
    )
  }
}
