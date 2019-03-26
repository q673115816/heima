const defultState = {
    title: 'Hello Redux'
}

export default function (state = defultState, action) {
    switch(action.type) {
        default:
            return state
    }
}