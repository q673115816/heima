import {
    connect
} from 'react-redux'
import cart from '../component/cart'

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

const cartContain = connect(
    mapStateToProps,
    mapDispatchToProps
)(cart)

export default cartContain