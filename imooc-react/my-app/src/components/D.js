import React from 'react'

const modifyPropsHOC = (WrappedComponent) => class NewComponent extends WrappedComponent {
    static displayName = `NewComponent(${getDisplayName(WrappedComponent)})`
    // componentWillMount() {
        // alert('我是继承后的生命周期')
    // }

    render() {
        const element = super.render()
        const newStyle = {
            color: element.type === 'div' ? 'red' : 'green'
        }
        const newProps = {...this.props, style: newStyle}
        return React.cloneElement(element, newProps, element.props.children)
    }
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component"
}

export default modifyPropsHOC