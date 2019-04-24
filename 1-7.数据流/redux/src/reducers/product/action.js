import { getAllProducts } from 'src/api/shop'


export const INIT = 'INIT'
export const init = () => {
    getAllProducts().then(res => {
        console.log(res);
        return {
            type: 'INIT',
            payload: {
                all: res
            }
        }
    })
}