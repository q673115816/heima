export default function(state = 'username', action) {
    const { type, payload } = action
    switch (type) {
        case 'change_username':
            return payload;
        default:
            break;
    }
}