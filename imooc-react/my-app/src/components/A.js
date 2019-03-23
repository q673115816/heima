import React, { Component } from 'react'

function a(WrapedComponent) {
  return class A extends Component {
    constructor(props) {
      super(props)
      this.state = {
        value: ''
      }
    }
    onInputChange = (e) => {
      this.setState({
        value: e.target.value
      })
    }
    render() {
      const newProps = {
        value: this.state.value,
        onChange: this.onInputChange
      }
      return (
        <div>
          这是高阶组件
          <WrapedComponent sex={'男'} {...this.props} {...newProps}></WrapedComponent>
        </div>
      )
    }
  }

}

export default a