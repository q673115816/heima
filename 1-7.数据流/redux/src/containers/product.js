import {
    connect
} from 'react-redux'
import product from 'components/product'

const mapStateToProps = (state) => {
    console.log(state);

    return {
        // title: state.cart.title
    }
}

const mapDispatchToProps = (state) => {
    return {

    }
}

const productContain = connect(
    mapStateToProps,
    mapDispatchToProps
)(product)

export default productContain