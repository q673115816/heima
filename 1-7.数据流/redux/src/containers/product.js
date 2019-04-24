import {
    connect
} from 'react-redux'
import product from 'components/product'
import {init, addtest, buy} from 'src/reducers/product/action'
const mapStateToProps = (state) => {
    return {
        // title: state.cart.title
        all: state.product.all,
        test: state.product.test,
    }
}

const mapDispatchToProps = {
    init,
    addtest,
    buy
}

const productContain = connect(
    mapStateToProps,
    mapDispatchToProps
)(product)

export default productContain