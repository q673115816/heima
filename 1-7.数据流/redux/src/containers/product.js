import {
    connect
} from 'react-redux'
import product from 'components/Product'
import {buy} from 'src/reducers/product/action'
const mapStateToProps = (state) => {
    return {
        title: state.product.title,
        all: state.product.all,
    }
}

const mapDispatchToProps = {
    buy
}

const productContain = connect(
    mapStateToProps,
    mapDispatchToProps
)(product)

export default productContain