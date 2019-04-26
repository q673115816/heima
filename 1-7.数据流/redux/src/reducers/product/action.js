import { ADD_CART } from 'src/actionType'
export const buy = (id) => {
    return {
        type: ADD_CART,
        payload: {
            id
        }
    }
}