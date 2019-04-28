import React from 'react'

import { Link } from 'react-router-dom'

export default () => {
    return (
        <div>
            <ul>
                <li><Link to="/"><span>home</span></Link></li>
                <li><Link to="/page"><span>page</span></Link></li>
                <li><Link to="/shop"><span>shop</span></Link></li>
            </ul>
        </div>
    )
}