import {
    createStore,
    combineReducers
} from 'redux'


import productReducer from './product'
import cartReducer from './cart'


const rootReducer = combineReducers({
    productReducer,
    cartReducer
})

// function store (state = {}, action = {}) {
//     return {
//         product: productReducer(state, action),
//         cart: cartReducer(state, action)
//     }
// }

export default createStore(rootReducer)