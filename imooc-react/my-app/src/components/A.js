import React, { Component } from 'react'

function a(WrapedComponent) {
  return class A extends Component {
  render() {
    return (
      <div>
        这是高阶组件
        <WrapedComponent></WrapedComponent>
      </div>
    )
  }
}

}

export default a