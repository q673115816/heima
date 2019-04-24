import {INIT} from './action'

const initialState = {
     all: []
 }

 
 export default (state = initialState, action) => {
     const {
         type,
         payload
     } = action
     switch (type) {
         case INIT: 
         console.log('111');
             return Object.assign({}, state, { all: payload.all })
         default:
             return state
     }
 };
