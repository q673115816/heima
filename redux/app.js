var createStore  = require('./createStore.js')
const reducer = require('./reducer')

const loggerMiddleware = require('./middlewares/loggerMiddleware')
const exceptionMiddleware = require('./middlewares/exceptionMiddleware')
const timeMiddleware = require('./middlewares/timeMiddleware')
const applyMiddleware = require('./applyMiddleware')

const rewriteCreateStoreFunc = applyMiddleware(exceptionMiddleware, timeMiddleware, loggerMiddleware)

let store = createStore(reducer, {}, rewriteCreateStoreFunc)

store.dispatch({
    type: 'INCREMENT'
})
