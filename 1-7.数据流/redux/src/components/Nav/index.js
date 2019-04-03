import React from 'react'

import { Link } from 'react-router-dom'

export default () => {
    return (
        <div>
            <ul>
                <li><Link to="/"><span>1</span></Link></li>
                <li><Link to="/page"><span>2</span></Link></li>
                <li><Link to="/shop"><span>shop</span></Link></li>
            </ul>
        </div>
    )
}