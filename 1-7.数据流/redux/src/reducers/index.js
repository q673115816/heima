import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose 
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
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))