import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page">Page</Link></li>
                <li><Link to="/counter">counter</Link></li>
                <li><Link to="/userinfo">userinfo</Link></li>
            </ul>
        </div>
    )
}
