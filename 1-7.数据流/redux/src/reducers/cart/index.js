import { ADD_CART, CHECK_OUT, CHECK_OUT_RESET, CHECK_OUT_SUCCESS, CHECK_OUT_FAILED } from 'src/actionType'

const initialState = {
    title: 'cart',
    list: [],
    check_type: null
}

function list(state = initialState.list, action) {
    const { type, payload } = action
    switch (type) {
        case ADD_CART:
            const isAdd = state.find(item => item.id === payload.id)
            if (isAdd) {
                return state.map(item => item.id === payload.id ? { ...item, inventory: item.inventory + 1 } : item)
            } else {
                return [...state, { id: payload.id, inventory: 1 }]
            }
        case CHECK_OUT:
            return state
        case CHECK_OUT_SUCCESS:
            return []
        case CHECK_OUT_FAILED:
            return state
        default:
            return state
    }
}

function check_type(state = initialState.check_type, action) {
    const { type, payload } = action
    switch (type) {
        case CHECK_OUT_RESET:
            return null
        case CHECK_OUT_SUCCESS:
            return 'success'
        case CHECK_OUT_FAILED:
            return 'failed'
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
                list: list(state.list, action),
                check_type: check_type(state.check_type, action)
            }
    }
};
