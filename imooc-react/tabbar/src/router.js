import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import Home from './page/home';
import User from './page/user';
import Vip from './page/vip';
import Gift from './page/gift';


const BasicRoute = () => (
    < BrowserRouter>
        <Switch>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/user" component={User}/>
            <Route exact path="/Vip" component={Vip}/>
            <Route exact path="/gift" component={Gift}/>
        </Switch>
    </BrowserRouter>
);


export default BasicRoute;