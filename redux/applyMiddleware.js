
module.exports = applyMiddleware = function (...middlewares) {
    return function rewriteCreateStoreFunc(oldCreateStore) {
        return function newCreateStore(reducer, initState) {
            const store = oldCreateStore(reducer, initState)
            // const chain = middlewares.map(middleware => middleware(store))
            const simpleStore = {getState: store.getState}
            const chain = middlewares.map(middleware => middleware(simpleStore))
            let dispatch = store.dispatch
            chain.reverse().map(middleware => {
                dispatch = middleware(dispatch)
            })
            store.dispatch = dispatch
            return store
        }
    }
}