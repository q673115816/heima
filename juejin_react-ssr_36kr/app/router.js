import { Link, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/home'
import List from './pages/list'


const list = [
    'react真好玩',
    'koa有点意思',
    'ssr更有意思'
]


export default () => (
    <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/list" component={ List }/>
    </Switch>
)
