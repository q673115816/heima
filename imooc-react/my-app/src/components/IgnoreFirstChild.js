import React, { Component } from 'react'

export default class IgnoreFirstChild extends Component {
  render() {
      const children = this.props.children
    return (
      <div>
        {
            React.Children.map(children, (child,i) => {
                if(i < 1) return 
                return child
            })
        }
      </div>
    )
  }
}
