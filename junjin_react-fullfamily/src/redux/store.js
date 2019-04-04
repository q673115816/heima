import {createStore, combineReducers} from 'redux';
import counter  from 'reducers/counter';
import userInfo from 'reducers/userInfo'
let store = createStore(combineReducers({
    counter,
    userInfo
}));

export default store;
