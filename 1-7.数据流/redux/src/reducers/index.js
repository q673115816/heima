import {
    createStore
} from 'redux'


import product from './product'
import cart from './cart'


function store (state = {}, action = {}) {
    return {
        product: product(state, action),
        cart: cart(state, action)
    }
}

export default createStore(store)