import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Nav from 'components/Nav'
import Home from '../pages/home'
import Page from '../pages/page'
import shop from '../pages/shop'

const getRouter = () => (
    <BrowserRouter>
    <Nav></Nav>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/page" component={Page}></Route>
            <Route exact path="/shop" component={shop}></Route>
        </Switch>
    </BrowserRouter>
)

export default getRouter