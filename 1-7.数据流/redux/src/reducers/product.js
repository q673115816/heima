import {getAllProducts} from 'src/api/shop'

const initialState = {
     all: [...getAllProducts()]
 }
 
 
 export default (state = initialState, action) => {
     const {
         type,
         payload
     } = action
     switch (type) {
         case 'add':
         return state
         default:
             return state
     }
 };
