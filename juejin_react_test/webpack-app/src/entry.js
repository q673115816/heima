import React from 'react';
import reactDOM from 'react-dom'
import Index from './index'

reactDOM.render(<Index />, document.getElementById('app'))
if(module.hot) {
    module.hot.accept()
}