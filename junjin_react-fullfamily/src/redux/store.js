import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk'
import counter  from 'reducers/counter';
import userInfo from 'reducers/userInfo'

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(combineReducers({
    counter,
    userInfo
}), composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
