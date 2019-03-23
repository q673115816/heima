import React, { Component } from 'react'
import D from './D'

@D
class E extends Component {

    componentWillMount() {
        alert('我是原始生命周期')
        console.log(111);
        
    }
  render() {
    return (
      <div>
        这是E
      </div>
    )
  }
}

export default E