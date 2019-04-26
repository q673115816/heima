import { INIT, ADD_CART } from 'src/actionType'

const initialState = {
    all: [],
    title: 'product'
}

function buy(state = initialState.all, action) {
    const {
        type,
        payload
    } = action
    switch(type) {
        case INIT:
            return [...state, ...payload.all]
        case ADD_CART:
        return state.map(item => {
            if (item.id === payload.id && item.inventory > 0) {
                return { ...item, inventory: --item.inventory }
            }else {
                return item
            }
        })
        default: 
        return state
    }
}


export default (state = initialState, action) => {
    const {
        type,
        payload
    } = action
    switch (type) {
        default:
            return {
                ...state,
                all: buy(state.all, action)
            }
    }
};
