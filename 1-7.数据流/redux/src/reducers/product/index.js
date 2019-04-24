import { INIT, TEST, BUY } from './action'

const initialState = {
    all: [],
    test: 0
}


export default (state = initialState, action) => {
    const {
        type,
        payload
    } = action
    switch (type) {
        case INIT:
            return Object.assign({}, state, { all: payload.all })
        case BUY:
            return state
        case TEST:
            return {...state, test: state.test + 1}
        default:
            return state
    }
};
