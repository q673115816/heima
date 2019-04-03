import { createStore, combineReducers } from 'redux'

import testReducer from '../reducer/testReducer'

const rootReducer = combineReducers({
    testReducer
})

const initStore = (initialState, options) => {
    return createStore(rootReducer, initialState)
}

export default initStore