export default function(state = {color: 'red'}, action) {
    switch (action.type) {
        case 'CHANGE_COLOR':
        return {...state, color: 'blue'}
        default :
        return {...state}
    }
}