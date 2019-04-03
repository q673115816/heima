 export default (state = {}, action) => {
    const { type, payload } = action
    switch (type) {
        case 'add':
        console.log(666);
        
        break;
        
        default:
        return state
    }
};
