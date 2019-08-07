import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'

import store from './reducers'
import {init} from 'src/action'

import * as serviceWorker from './serviceWorker';

store.dispatch(init())

ReactDOM.render( 
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
