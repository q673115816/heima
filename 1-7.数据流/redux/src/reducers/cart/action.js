
import { ADD_CART} from 'src/actionType'

export const add_cart = (id) => {
    return {
        type: ADD_CART,
        payload: {
            id
        }
    }
}


export const getCartProduct = (state) => {
    const cart = []
    for (const key in state.cart.list) {
        if (state.cart.list.hasOwnProperty(key)) {
            const cartInventory = state.cart.list[key];
            const curritem = state.porduct.all.find(item => {
                if (item.id === key) {
                    return item
                }
            })
            cart.push({
                id: key,
                title: curritem.title,
                prcie: curritem.prcie,
                cartInventory
            })
        }
    }
    return dispatch => {
        dispatch({
            type: ADD_CART,
            payload: {
                cart
            }
        })
    }
    

}
