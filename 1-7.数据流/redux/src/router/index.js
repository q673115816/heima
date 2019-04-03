import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../pages/home'
import Page from '../pages/page'

const getRouter = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/page" component={Page}></Route>
        </Switch>
    </Router>
)

export default getRouter