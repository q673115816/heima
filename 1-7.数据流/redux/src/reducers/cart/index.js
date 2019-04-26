import { ADD_CART } from 'src/actionType'

const initialState = {
    title: 'cart',
    list: {},
    cart: []
}

function list(state = initialState.list, action) {
    const { type, payload } = action
    switch (type) {
        case ADD_CART:
        return {
            ...state,
            [payload.id]: (state[payload.id] || 0 ) + 1
        }
        default:
        return state
    }
}

function cart(state = initialState.cart, action) {
    const { type, payload } = action
    switch (type) {
        case ADD_CART:
            return {
                ...state,
                [payload.id]: (state[payload.id] || 0) + 1
            }
        default:
            return state
    }
}


export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        default:
            return {
                ...state,
                list: list(state.list, action)
            }
    }
};
