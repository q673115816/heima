import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import tt from './reducer'

import { createStore } from 'redux' 


function Reducer(state = 0, action) {
    const { type } = action
    if (type == 'INCREMENT') {
        return state + 1
    } else if (type === 'DECREMENT') {
        return state - 1
    } else {
        return state
    }
}

const store = createStore(Reducer, 100)

const test = createStore(tt)


console.log(store.getState());
console.log(test.getState());

setTimeout(() => {
    test.dispatch({
        type: 'change_username',
        payload: '666'
    })
    console.log(store.getState());

}, 500);

setTimeout(() => {
    test.dispatch({
        type: 'change_nickname',
        payload: 'nickname'
    })
    console.log(store.getState());

}, 1100);


setTimeout(() => {
    store.dispatch({
        type: 'INCREMENT'
    })
}, 1000);


test.subscribe(() => {
console.log(test.getState());
})

store.subscribe(() => {
    // console.log(store.getState());
})

const Counter = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <button>Increment</button>
            <button>Decrement</button>
        </div>
    )
}

render()
function render() {
    ReactDOM.render(<App />, document.getElementById('root'));
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
