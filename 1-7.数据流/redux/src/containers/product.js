import {
    connect
} from 'react-redux'
import product from 'components/product'
import {init} from 'src/reducers/product/action'
const mapStateToProps = (state) => {
    return {
        // title: state.cart.title
        all: state.product.all,
    }
}

const mapDispatchToProps = {
    init
}

const productContain = connect(
    mapStateToProps,
    mapDispatchToProps
)(product)

export default productContain