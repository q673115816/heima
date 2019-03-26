import React from 'react';
import {
    render
} from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import { Provider } from 'react-redux'
import createStore from './redux/store/create'

const defaultStore = window.__STORE__ || {}
const store = createStore(defaultStore)

render(
<Provider store={store}> 
    <BrowserRouter>
        <Router></Router>
    </BrowserRouter>
</Provider> 
, document.getElementById('app'));
