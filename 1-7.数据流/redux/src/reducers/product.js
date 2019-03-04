import {getAllProducts} from '../api/shop'

const initialState = {
     all: []
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
