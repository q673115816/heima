import shop from 'src/api/shop'
import { CHECK_OUT, CHECK_OUT_SUCCESS, CHECK_OUT_FAILED } from 'src/actionType'
export const check_out = (payload) => {
    return dispatch => {
        shop.buyProducts(payload, () => {
            dispatch({
                type: CHECK_OUT_SUCCESS
            })
        }, () => {
            dispatch({
                type: CHECK_OUT_FAILED
            })
        })
    }
}