import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'

import thunk from 'redux-thunk'

import product from './product'
import cart from './cart'


const rootReducer = combineReducers({
    product,
    cart
})

// function store (state = {}, action = {}) {
//     return {
//         product: productReducer(state, action),
//         cart: cartReducer(state, action)
//     }
// }

export default createStore(rootReducer, applyMiddleware([thunk]))