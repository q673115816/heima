import { getAllProducts } from 'src/api/shop'
export const INIT = 'INIT'
export const TEST = 'TEST'
export const BUY = 'BUY'
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

export const buy = (id) => {
    console.log(id)
    return {
        type: BUY,
        payload: id
    }
}

// export const addtest = () => {
//     return {
//         type: TEST
//     }
// }

export const addtest = () => {
    return dispatch => {
        dispatch({
            type: TEST
        })
    }
}