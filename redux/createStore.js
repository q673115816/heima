module.exports = function createStore(reducer, initState, rewriteCreateFunc) {
    if(rewriteCreateFunc) {
        const newCreateStore = rewriteCreateFunc(createStore)
        return newCreateStore(reducer, initState)
    }
    let state = initState
    let listeners = []

    function subscribe(listener) {
        listeners.push(listener)
        return function unsubscribe() {
            const index = listeners.indexOf(listener)
            listeners.splice(index, 1)
        }
    }

    function dispatch(action) {
        state = reducer(state, action)
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener()
        }
    }

    function getState() {
        return state
    }

    dispatch({
        type: Symbol()
    })

    return {
        subscribe,
        dispatch,
        getState
    }
}