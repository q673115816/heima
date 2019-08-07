import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        const { item } = this.props
        return (
            <li>
                {item.title} - {item.price} * {item.inventory}
            </li>
        )
    }
}
