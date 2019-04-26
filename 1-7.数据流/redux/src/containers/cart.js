import {
    connect
} from 'react-redux'
import cart from 'components/cart'

function mapStateToProps(state) {
    return {
        title: state.cart.title,
        list: state.cart.list
    }
}

const mapDispatchToProps = {
}

const cartContain = connect(
    mapStateToProps,
    mapDispatchToProps
)(cart)

export default cartContain