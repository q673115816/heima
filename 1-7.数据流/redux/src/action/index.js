import shop from 'src/api/shop'

import {INIT} from '../actionType'
export const init = () => {
    return dispatch => {
        shop.getProducts(products => {
            dispatch(receiveProducts(products))
        })
    }
}

const receiveProducts = products => {
    console.log(products);
    
    return {
        type: INIT,
        payload: {all: products}
    }
}

