import { getAllProducts } from 'src/api/shop'
export const init = () => {
    return dispatch => {
        getAllProducts().then(res => {
            console.log(res);
            dispatch({
                type: 'INIT',
                payload: {
                    all: res
                }
            })
        })
    }
}