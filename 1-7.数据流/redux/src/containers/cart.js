import {
    connect
} from 'react-redux'
import cart from 'components/Cart'
import { check_out } from 'src/reducers/cart/action'

function mapStateToProps(state) {
    return {
        title: state.cart.title,
        list: state.product.all.filter(item1=> state.cart.list.find(item2 => item2.id === item1.id)).map(item => {
            const inCart = state.cart.list.find(item2 => item2.id === item.id)
            return { ...item, inventory: inCart.inventory }

        }),
        cart: state.cart.list,
        check_type: state.cart.check_type
    }
}

const mapDispatchToProps = {
    check_out
}

const cartContain = connect(
    mapStateToProps,
    mapDispatchToProps
)(cart)

export default cartContain