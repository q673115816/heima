module.exports = function combineReducers(reducers) {
    const reducersKeys = Object.keys(reducers) // 合并后的属性名

    return function combination(state = {}, action) {
        const nextState = {}
        reducersKeys.forEach((key) => {
            const childReducer = reducers[key] // 合并后的属性值： 各自的reducer
            const childState = state[key]
            const childNewState = childReducer(childState, action)
            nextState[key] = childNewState
        })
        return nextState
    }
}